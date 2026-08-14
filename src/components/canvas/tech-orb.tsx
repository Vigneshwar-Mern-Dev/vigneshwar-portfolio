"use client";

import { Float, Text } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useEffect,
  useMemo,
  useRef,
  type MutableRefObject,
} from "react";
import * as THREE from "three";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type CursorPosition = { x: number; y: number };
type OrbProps = { cursor: MutableRefObject<CursorPosition> };

/* ------------------------------------------------------------------ */
/*  Data — Tech nodes placed on a sphere                               */
/* ------------------------------------------------------------------ */

const TECH_LABELS = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "MongoDB",
  "Express",
  "Tailwind",
  "Three.js",
];

/**
 * Distribute nodes roughly evenly on a sphere surface using
 * a Fibonacci lattice. Returns [x, y, z] for each node.
 */
function fibonacciSphere(count: number, radius: number): [number, number, number][] {
  const points: [number, number, number][] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;

    points.push([
      Math.cos(theta) * r * radius,
      y * radius,
      Math.sin(theta) * r * radius,
    ]);
  }

  return points;
}

/* ------------------------------------------------------------------ */
/*  Particle ring — tiny dots orbiting the sphere                      */
/* ------------------------------------------------------------------ */

function ParticleRing({ count = 200, radius = 2.8 }: { count?: number; radius?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const jitter = (Math.random() - 0.5) * 0.2;
      arr[i * 3] = Math.cos(angle) * (radius + jitter);
      arr[i * 3 + 1] = (Math.random() - 0.5) * 0.3;
      arr[i * 3 + 2] = Math.sin(angle) * (radius + jitter);
    }
    return arr;
  }, [count, radius]);

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.02}
        color="#A876FF"
        transparent
        opacity={0.45}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/* ------------------------------------------------------------------ */
/*  Ambient floating particles — scattered across the scene            */
/* ------------------------------------------------------------------ */

function AmbientParticles({ count = 300 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, [count]);

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.015;
      ref.current.rotation.x += delta * 0.008;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.012}
        color="#7C3CFF"
        transparent
        opacity={0.3}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/* ------------------------------------------------------------------ */
/*  Connection lines between nearby nodes                              */
/* ------------------------------------------------------------------ */

function ConnectionLines({
  nodePositions,
  maxDistance = 2.4,
}: {
  nodePositions: [number, number, number][];
  maxDistance?: number;
}) {
  const ref = useRef<THREE.LineSegments>(null);

  const geometry = useMemo(() => {
    const verts: number[] = [];
    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        const dx = nodePositions[i][0] - nodePositions[j][0];
        const dy = nodePositions[i][1] - nodePositions[j][1];
        const dz = nodePositions[i][2] - nodePositions[j][2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < maxDistance) {
          verts.push(...nodePositions[i], ...nodePositions[j]);
        }
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(verts, 3),
    );
    return geo;
  }, [nodePositions, maxDistance]);

  useFrame(({ clock }) => {
    if (ref.current) {
      const mat = ref.current.material as THREE.LineBasicMaterial;
      mat.opacity = 0.08 + Math.sin(clock.getElapsedTime() * 1.2) * 0.04;
    }
  });

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial
        color="#A876FF"
        transparent
        opacity={0.1}
        depthWrite={false}
      />
    </lineSegments>
  );
}

/* ------------------------------------------------------------------ */
/*  Individual glowing node                                            */
/* ------------------------------------------------------------------ */

function GlowNode({
  position,
  label,
  index,
}: {
  position: [number, number, number];
  label: string;
  index: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const phaseOffset = index * 1.1;

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = clock.getElapsedTime() + phaseOffset;
      const scale = 1 + Math.sin(t * 1.6) * 0.25;
      meshRef.current.scale.setScalar(scale);
    }
  });

  const isHighlighted = index < 3;

  return (
    <group position={position}>
      {/* Core sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[isHighlighted ? 0.08 : 0.055, 16, 16]} />
        <meshStandardMaterial
          color={isHighlighted ? "#72E7FF" : "#A876FF"}
          emissive={isHighlighted ? "#72E7FF" : "#7C3CFF"}
          emissiveIntensity={isHighlighted ? 6 : 3.5}
          toneMapped={false}
        />
      </mesh>

      {/* Outer glow ring */}
      <mesh>
        <ringGeometry args={[isHighlighted ? 0.1 : 0.075, isHighlighted ? 0.13 : 0.095, 32]} />
        <meshBasicMaterial
          color={isHighlighted ? "#72E7FF" : "#A876FF"}
          transparent
          opacity={0.15}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      {/* Label */}
      <Float speed={1.5} rotationIntensity={0} floatIntensity={0.15} floatingRange={[-0.02, 0.02]}>
        <Text
          position={[0, -0.18, 0]}
          fontSize={0.09}
          color="#C5A8FF"
          anchorX="center"
          anchorY="top"
          fillOpacity={0.6}
        >
          {label}
        </Text>
      </Float>
    </group>
  );
}

/* ------------------------------------------------------------------ */
/*  Core orb (glass sphere in center)                                  */
/* ------------------------------------------------------------------ */

function CoreSphere() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime();
      const mat = ref.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 1.8 + Math.sin(t * 0.9) * 0.6;
    }
  });

  return (
    <>
      {/* Inner core */}
      <mesh ref={ref}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial
          color="#1A0D3C"
          emissive="#7C3CFF"
          emissiveIntensity={2}
          metalness={0.5}
          roughness={0.2}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Wireframe shell */}
      <mesh>
        <icosahedronGeometry args={[0.6, 1]} />
        <meshBasicMaterial
          color="#A876FF"
          wireframe
          transparent
          opacity={0.06}
        />
      </mesh>

      {/* Outer glass shell */}
      <mesh>
        <sphereGeometry args={[1.3, 32, 32]} />
        <meshStandardMaterial
          color="#0A0520"
          metalness={0.4}
          roughness={0.1}
          transparent
          opacity={0.04}
        />
      </mesh>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Orbital rings                                                      */
/* ------------------------------------------------------------------ */

function OrbitalRing({ radius = 2.0, tilt = 0 }: { radius?: number; tilt?: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.z = tilt + clock.getElapsedTime() * 0.06;
    }
  });

  return (
    <mesh ref={ref} rotation={[Math.PI / 2, 0, tilt]}>
      <torusGeometry args={[radius, 0.005, 8, 128]} />
      <meshBasicMaterial
        color="#A876FF"
        transparent
        opacity={0.08}
      />
    </mesh>
  );
}

/* ------------------------------------------------------------------ */
/*  Main orb scene — assembles everything                              */
/* ------------------------------------------------------------------ */

function TechOrbScene({ cursor }: OrbProps) {
  const groupRef = useRef<THREE.Group>(null);
  const nodePositions = useMemo(() => fibonacciSphere(TECH_LABELS.length, 1.7), []);

  useFrame((_state, delta) => {
    if (!groupRef.current) return;

    /* Idle rotation */
    groupRef.current.rotation.y += delta * 0.04;

    /* Cursor-tracking tilt */
    const targetRotX = -cursor.current.y * 0.2;
    const targetRotZ = cursor.current.x * 0.1;

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotX,
      0.03,
    );

    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      targetRotZ,
      0.03,
    );
  });

  return (
    <>
      {/* Ambient floating particles across the full scene */}
      <AmbientParticles />

      <group ref={groupRef}>
        <CoreSphere />

        {/* Tech nodes with labels */}
        {nodePositions.map((pos, i) => (
          <GlowNode key={i} position={pos} label={TECH_LABELS[i]} index={i} />
        ))}

        {/* Connection lines between nearby nodes */}
        <ConnectionLines nodePositions={nodePositions} />

        {/* Orbital rings */}
        <OrbitalRing radius={2.1} tilt={0.4} />
        <OrbitalRing radius={2.4} tilt={-0.7} />
        <OrbitalRing radius={1.85} tilt={1.2} />

        {/* Particle ring */}
        <ParticleRing />
      </group>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Exported component — full-screen background                        */
/* ------------------------------------------------------------------ */

export function TechOrb() {
  const cursorRef = useRef<CursorPosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      cursorRef.current.x =
        (event.clientX / window.innerWidth) * 2 - 1;
      cursorRef.current.y =
        (event.clientY / window.innerHeight) * 2 - 1;
    };

    const resetPointer = () => {
      cursorRef.current.x = 0;
      cursorRef.current.y = 0;
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    document.addEventListener("mouseleave", resetPointer);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mouseleave", resetPointer);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 left-[35%] right-0 z-[1] lg:left-[40%]"
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{
          position: [0, 0, 7],
          fov: 45,
        }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.4} />

        <directionalLight
          position={[3, 4, 5]}
          intensity={1.5}
          color="#F7F5FF"
        />

        <pointLight
          position={[-3, 2, 3]}
          intensity={20}
          distance={10}
          color="#7C3CFF"
        />

        <pointLight
          position={[3, 1, 2]}
          intensity={12}
          distance={8}
          color="#72E7FF"
        />

        <pointLight
          position={[0, -2, 4]}
          intensity={8}
          distance={7}
          color="#A876FF"
        />

        <TechOrbScene cursor={cursorRef} />
      </Canvas>
    </div>
  );
}
