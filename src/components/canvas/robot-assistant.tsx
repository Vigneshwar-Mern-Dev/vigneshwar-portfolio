"use client";

import { RoundedBox } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useEffect,
  useRef,
  type MutableRefObject,
} from "react";
import * as THREE from "three";

type CursorPosition = {
  x: number;
  y: number;
};

type RobotProps = {
  cursor: MutableRefObject<CursorPosition>;
};

function Robot({ cursor }: RobotProps) {
  const robotRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const leftEyeRef = useRef<THREE.Mesh>(null);
  const rightEyeRef = useRef<THREE.Mesh>(null);
  const startTimeRef = useRef<number>(performance.now());

  useFrame(() => {
    const elapsed = (performance.now() - startTimeRef.current) * 0.001;

    if (robotRef.current) {
      robotRef.current.position.y =
        Math.sin(elapsed * 1.1) * 0.06 - 0.1;

      robotRef.current.rotation.z =
        Math.sin(elapsed * 0.55) * 0.025;
    }

    if (headRef.current) {
      const targetRotationY = cursor.current.x * 0.45;
      const targetRotationX = -cursor.current.y * 0.18;

      headRef.current.rotation.y = THREE.MathUtils.lerp(
        headRef.current.rotation.y,
        targetRotationY,
        0.055,
      );

      headRef.current.rotation.x = THREE.MathUtils.lerp(
        headRef.current.rotation.x,
        targetRotationX,
        0.055,
      );
    }

    /*
     * Produces a short blink approximately every few seconds
     * without creating React state updates every frame.
     */
    const blinkProgress = Math.pow(
      Math.abs(Math.sin(elapsed * 0.65)),
      28,
    );

    const eyeScaleY = THREE.MathUtils.clamp(
      1 - blinkProgress * 0.92,
      0.08,
      1,
    );

    if (leftEyeRef.current) {
      leftEyeRef.current.scale.y = THREE.MathUtils.lerp(
        leftEyeRef.current.scale.y,
        eyeScaleY,
        0.35,
      );
    }

    if (rightEyeRef.current) {
      rightEyeRef.current.scale.y = THREE.MathUtils.lerp(
        rightEyeRef.current.scale.y,
        eyeScaleY,
        0.35,
      );
    }
  });

  return (
    <group
      ref={robotRef}
      position={[0, -0.1, 0]}
      rotation={[0, -0.08, 0]}
    >
      {/* Body */}
      <RoundedBox
        args={[1.1, 1.3, 0.58]}
        radius={0.2}
        smoothness={6}
        position={[0, -0.68, 0]}
      >
        <meshStandardMaterial
          color="#11101A"
          metalness={0.78}
          roughness={0.28}
        />
      </RoundedBox>

      {/* Chest panel */}
      <RoundedBox
        args={[0.7, 0.56, 0.08]}
        radius={0.14}
        smoothness={5}
        position={[0, -0.62, 0.32]}
      >
        <meshStandardMaterial
          color="#18122A"
          metalness={0.6}
          roughness={0.3}
        />
      </RoundedBox>

      {/* Glowing chest core */}
      <mesh position={[0, -0.63, 0.39]}>
        <circleGeometry args={[0.16, 48]} />

        <meshStandardMaterial
          color="#A876FF"
          emissive="#7C3CFF"
          emissiveIntensity={4}
          toneMapped={false}
        />
      </mesh>

      {/* VS chest mark */}
      <mesh position={[0, -0.63, 0.405]}>
        <ringGeometry args={[0.205, 0.225, 48]} />

        <meshBasicMaterial
          color="#C5A8FF"
          transparent
          opacity={0.55}
        />
      </mesh>

      {/* Neck */}
      <mesh position={[0, 0.05, 0]}>
        <cylinderGeometry args={[0.18, 0.23, 0.28, 32]} />

        <meshStandardMaterial
          color="#161420"
          metalness={0.82}
          roughness={0.22}
        />
      </mesh>

      {/* Head */}
      <group ref={headRef} position={[0, 0.48, 0]}>
        <RoundedBox
          args={[1.28, 0.82, 0.72]}
          radius={0.26}
          smoothness={7}
        >
          <meshStandardMaterial
            color="#13111C"
            metalness={0.82}
            roughness={0.24}
          />
        </RoundedBox>

        {/* Face visor */}
        <RoundedBox
          args={[1.04, 0.46, 0.08]}
          radius={0.2}
          smoothness={6}
          position={[0, -0.01, 0.39]}
        >
          <meshStandardMaterial
            color="#070912"
            metalness={0.4}
            roughness={0.18}
          />
        </RoundedBox>

        {/* Left eye */}
        <mesh
          ref={leftEyeRef}
          position={[-0.25, 0, 0.47]}
        >
          <sphereGeometry args={[0.085, 24, 24]} />

          <meshStandardMaterial
            color="#D5FAFF"
            emissive="#72E7FF"
            emissiveIntensity={5}
            toneMapped={false}
          />
        </mesh>

        {/* Right eye */}
        <mesh
          ref={rightEyeRef}
          position={[0.25, 0, 0.47]}
        >
          <sphereGeometry args={[0.085, 24, 24]} />

          <meshStandardMaterial
            color="#D5FAFF"
            emissive="#72E7FF"
            emissiveIntensity={5}
            toneMapped={false}
          />
        </mesh>

        {/* Side details */}
        <mesh position={[-0.69, 0, 0]}>
          <cylinderGeometry args={[0.13, 0.13, 0.24, 24]} />

          <meshStandardMaterial
            color="#7C3CFF"
            emissive="#7C3CFF"
            emissiveIntensity={1.5}
          />
        </mesh>

        <mesh position={[0.69, 0, 0]}>
          <cylinderGeometry args={[0.13, 0.13, 0.24, 24]} />

          <meshStandardMaterial
            color="#7C3CFF"
            emissive="#7C3CFF"
            emissiveIntensity={1.5}
          />
        </mesh>

        {/* Antenna */}
        <mesh position={[0.35, 0.55, 0]}>
          <cylinderGeometry args={[0.025, 0.025, 0.35, 16]} />

          <meshStandardMaterial
            color="#6E6879"
            metalness={0.8}
            roughness={0.25}
          />
        </mesh>

        <mesh position={[0.35, 0.76, 0]}>
          <sphereGeometry args={[0.065, 20, 20]} />

          <meshStandardMaterial
            color="#A876FF"
            emissive="#7C3CFF"
            emissiveIntensity={4}
            toneMapped={false}
          />
        </mesh>
      </group>

      {/* Left arm */}
      <mesh
        position={[-0.72, -0.64, 0]}
        rotation={[0, 0, -0.17]}
      >
        <capsuleGeometry args={[0.13, 0.72, 8, 20]} />

        <meshStandardMaterial
          color="#12101A"
          metalness={0.75}
          roughness={0.3}
        />
      </mesh>

      {/* Right arm */}
      <mesh
        position={[0.72, -0.64, 0]}
        rotation={[0, 0, 0.17]}
      >
        <capsuleGeometry args={[0.13, 0.72, 8, 20]} />

        <meshStandardMaterial
          color="#12101A"
          metalness={0.75}
          roughness={0.3}
        />
      </mesh>
    </group>
  );
}

export function RobotAssistant() {
  const cursorRef = useRef<CursorPosition>({
    x: 0,
    y: 0,
  });

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

    window.addEventListener(
      "pointermove",
      handlePointerMove,
      { passive: true },
    );

    document.addEventListener(
      "mouseleave",
      resetPointer,
    );

    return () => {
      window.removeEventListener(
        "pointermove",
        handlePointerMove,
      );

      document.removeEventListener(
        "mouseleave",
        resetPointer,
      );
    };
  }, []);

  return (
    <a
      href="#work"
      aria-label="Meet VS Bot and explore selected projects"
      className="group relative hidden min-h-[430px] w-full max-w-[390px] justify-self-end overflow-hidden rounded-[32px] border border-[#A876FF]/20 bg-[#090518]/55 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[#A876FF]/45 hover:shadow-[0_35px_120px_rgba(124,60,255,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#72E7FF] focus-visible:ring-offset-4 focus-visible:ring-offset-[#070414] lg:block motion-reduce:transform-none motion-reduce:transition-none"
    >
      {/* Internal grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(168,118,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(168,118,255,0.05)_1px,transparent_1px)] [background-size:32px_32px]"
      />

      {/* Robot glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[45%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C3CFF]/20 blur-[80px] transition duration-500 group-hover:bg-[#7C3CFF]/30"
      />

      {/* Three.js robot */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <Canvas
          dpr={[1, 1.5]}
          camera={{
            position: [0, 0.05, 4.6],
            fov: 35,
          }}
          gl={{
            alpha: true,
            antialias: true,
            powerPreference: "high-performance",
          }}
        >
          <ambientLight intensity={1.15} />

          <directionalLight
            position={[3, 4, 5]}
            intensity={3}
            color="#F7F5FF"
          />

          <pointLight
            position={[-2, 1.5, 2]}
            intensity={18}
            distance={7}
            color="#7C3CFF"
          />

          <pointLight
            position={[2.5, 1, 1.8]}
            intensity={10}
            distance={6}
            color="#72E7FF"
          />

          <Robot cursor={cursorRef} />
        </Canvas>
      </div>

      {/* Header */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-between p-6">
        <div>
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[#777088]">
            Interactive assistant
          </p>

          <p className="mt-1 text-xs font-medium text-[#F7F5FF]">
            VS Bot
          </p>
        </div>

        <span className="flex items-center gap-2 text-[0.58rem] uppercase tracking-[0.16em] text-[#72E7FF]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#72E7FF] shadow-[0_0_10px_rgba(114,231,255,0.9)]" />
          Online
        </span>
      </div>

      {/* Bottom content */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-[#070414] via-[#070414]/90 to-transparent px-6 pb-6 pt-20">
        <div className="flex items-end justify-between gap-5">
          <div>
            <p className="text-sm font-semibold text-[#F7F5FF]">
              Move your cursor
            </p>

            <p className="mt-1 max-w-[230px] text-xs leading-5 text-[#8F88A5]">
              VS Bot tracks your movement. Click to explore my
              selected projects.
            </p>
          </div>

          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#A876FF]/25 bg-[#7C3CFF]/10 text-lg text-[#F7F5FF] transition duration-300 group-hover:border-[#A876FF]/70 group-hover:bg-[#7C3CFF] group-hover:shadow-[0_0_30px_rgba(124,60,255,0.4)]">
            ↘
          </span>
        </div>
      </div>
    </a>
  );
}