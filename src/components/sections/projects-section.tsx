import { ProjectRow } from "@/components/project/project-row";
import { projects } from "@/data/projects";
import { GlowingLine } from "@/components/ui/glowing-line";

const productWindows = [
  {
    number: "01",
    label: "Automation CRM",
    status: "Operational",
    position:
      "left-[2%] top-[14%] z-10 w-[58%] -rotate-[8deg] lg:left-[1%]",
    animation: "product-window-float-slow",
    content: (
      <div className="space-y-3">
        <div className="flex gap-2">
          <span className="h-2 flex-1 rounded-full bg-white/[0.08]" />
          <span className="h-2 w-[30%] rounded-full bg-[#A78BFA]/25" />
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="h-12 rounded-lg border border-white/[0.06] bg-white/[0.025]" />
          <div className="h-12 rounded-lg border border-white/[0.06] bg-white/[0.025]" />
          <div className="h-12 rounded-lg border border-[#A78BFA]/20 bg-[#A78BFA]/[0.06]" />
        </div>
      </div>
    ),
  },
  {
    number: "02",
    label: "AI Operations",
    status: "Processing",
    position:
      "right-[1%] top-[4%] z-20 w-[57%] rotate-[7deg] lg:right-[2%]",
    animation: "product-window-float-reverse",
    content: (
      <div className="space-y-2.5">
        <div className="ml-auto h-7 w-[68%] rounded-lg rounded-br-sm bg-[#A78BFA]/10" />

        <div className="h-7 w-[82%] rounded-lg rounded-bl-sm border border-white/[0.06] bg-white/[0.025]" />

        <div className="ml-auto flex h-7 w-[55%] items-center gap-1.5 rounded-lg rounded-br-sm bg-[#73E8FF]/[0.06] px-3">
          <span className="h-1 w-1 animate-pulse rounded-full bg-[#73E8FF]" />
          <span className="h-1 w-1 animate-pulse rounded-full bg-[#73E8FF] [animation-delay:150ms]" />
          <span className="h-1 w-1 animate-pulse rounded-full bg-[#73E8FF] [animation-delay:300ms]" />
        </div>
      </div>
    ),
  },
  {
    number: "03",
    label: "Commerce Engine",
    status: "Live system",
    position:
      "bottom-[4%] left-1/2 z-30 w-[67%] -translate-x-1/2 -rotate-[1deg]",
    animation: "product-window-float",
    content: (
      <div className="grid grid-cols-[0.7fr_1.3fr] gap-3">
        <div className="space-y-2">
          <div className="h-[52px] rounded-lg border border-[#A78BFA]/20 bg-[#A78BFA]/[0.06] p-2">
            <span className="block text-[7px] uppercase tracking-[0.18em] text-white/30">
              Revenue
            </span>

            <span className="mt-1 block text-sm font-medium text-white/85">
              +28.4%
            </span>
          </div>

          <div className="h-6 rounded-md border border-white/[0.06] bg-white/[0.025]" />
        </div>

        <div className="relative flex h-[86px] items-end gap-1.5 overflow-hidden rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 pb-3">
          {[36, 52, 43, 69, 58, 78, 65, 88].map((height, index) => (
            <span
              key={index}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-[#7546E8]/25 to-[#B8A0FF]/75"
              style={{ height: `${height}%` }}
            />
          ))}

          <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-white/[0.06]" />
        </div>
      </div>
    ),
  },
];

type ProductWindowProps = {
  number: string;
  label: string;
  status: string;
  position: string;
  animation: string;
  content: React.ReactNode;
};

function ProductWindow({
  number,
  label,
  status,
  position,
  animation,
  content,
}: ProductWindowProps) {
  return (
    <div className={`absolute ${position}`}>
      <div
        className={`${animation} overflow-hidden rounded-[18px] border border-white/[0.11] bg-[#0D071C]/80 shadow-[0_35px_90px_rgba(0,0,0,0.48),0_0_60px_rgba(117,70,232,0.08)] backdrop-blur-2xl`}
      >
        <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/[0.06]" />
            </div>

            <span className="ml-1 font-mono text-[7px] tracking-[0.2em] text-white/25">
              SYS-{number}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-40" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
            </span>

            <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-white/30">
              {status}
            </span>
          </div>
        </div>

        <div className="p-4">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-xs font-medium tracking-[-0.01em] text-white/80">
              {label}
            </p>

            <span className="font-mono text-[7px] text-[#A78BFA]/70">
              0{number}
            </span>
          </div>

          {content}
        </div>

        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#B89CFF]/60 to-transparent" />
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#070414] pt-8 pb-14 text-[#F7F5FF] sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20"
    >
      {/* Grid */}
     {/* Small grid */}
<div
  aria-hidden="true"
  className="pointer-events-none absolute inset-x-0 top-0 h-[680px]
  bg-[linear-gradient(rgba(168,118,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(168,118,255,0.07)_1px,transparent_1px)]
  bg-[size:48px_48px]
  [mask-image:linear-gradient(to_bottom,black_0%,black_65%,transparent_100%)]"
/>

{/* Large grid */}
<div
  aria-hidden="true"
  className="pointer-events-none absolute inset-x-0 top-0 h-[680px]
  bg-[linear-gradient(rgba(168,118,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(168,118,255,0.12)_1px,transparent_1px)]
  bg-[size:192px_192px]
  [mask-image:linear-gradient(to_bottom,black_0%,black_55%,transparent_100%)]"
/>

      {/* Purple atmospheric glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[55%] top-[-120px] h-[650px] w-[750px] rounded-full bg-[#7137F3]/[0.13] blur-[150px]"
      />

      {/* Soft cyan accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[10%] top-[100px] h-[230px] w-[230px] rounded-full bg-[#67E8F9]/[0.035] blur-[90px]"
      />

      {/* Side fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[680px] bg-[linear-gradient(90deg,#070414_0%,transparent_18%,transparent_82%,#070414_100%)]"
      />

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[680px] bg-[linear-gradient(180deg,transparent_0%,transparent_72%,#070414_100%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="pb-14 lg:pb-20">
          <div className="grid items-center gap-14 py-4 lg:min-h-[500px] lg:grid-cols-[0.88fr_1.12fr] lg:gap-12">
            {/* Left content */}
            <div className="relative z-20">
              <div className="mb-7 flex items-center gap-4">
                <span className="font-mono text-[10px] tracking-[0.22em] text-[#A78BFA]">
                  01
                </span>

                <span className="h-px w-8 bg-[#A78BFA]/40" />

                <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/45">
                  Selected work
                </span>
              </div>

              <h2
                id="work-heading"
                className="max-w-[720px] text-[clamp(3rem,5.2vw,5.8rem)] font-medium leading-[0.94] tracking-[-0.065em] text-[#F7F5FF]"
              >
                Products built around{" "}
                <span className="relative inline-block text-white/55">
                  real business
                  <span className="absolute inset-x-0 bottom-[2px] h-px bg-gradient-to-r from-transparent via-[#A78BFA]/55 to-transparent" />
                </span>{" "}
                problems.
              </h2>

              <p className="mt-8 max-w-[590px] text-sm leading-7 text-white/46 sm:text-[15px]">
                A selection of full-stack applications spanning automation,
                customer operations, commerce and data-driven tools.
              </p>

              {/* Small capability labels */}
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
                {[
                  "Product engineering",
                  "Automation",
                  "Cloud systems",
                ].map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.19em] text-white/25"
                  >
                    <span className="h-1 w-1 rotate-45 bg-[#A78BFA]/80" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Right visual */}
            <div className="relative mx-auto h-[420px] w-full max-w-[650px] sm:h-[480px] lg:h-[510px]">
              {/* Perspective background plane */}
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[72%] w-[82%] -translate-x-1/2 -translate-y-1/2 rotate-[8deg] rounded-[36px] border border-[#A78BFA]/[0.07] bg-[#A78BFA]/[0.012]"
              />

              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[82%] w-[72%] -translate-x-1/2 -translate-y-1/2 -rotate-[8deg] rounded-[40px] border border-white/[0.04]"
              />

              {/* Crosshair */}
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[82%] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-white/[0.055] to-transparent"
              />

              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-px w-[92%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-white/[0.055] to-transparent"
              />

              {/* Product windows */}
              {productWindows.map((window) => (
                <ProductWindow key={window.number} {...window} />
              ))}

              {/* Decorative coordinates */}
              <span className="absolute bottom-0 left-4 font-mono text-[7px] uppercase tracking-[0.2em] text-white/15">
                Product architecture / 2026
              </span>

              <span className="absolute right-4 top-0 font-mono text-[7px] tracking-[0.2em] text-white/15">
                11.2471° E
              </span>
            </div>
          </div>
          <GlowingLine className="mt-8" />
        </div>

        <div className="mt-16 space-y-10 sm:mt-20 lg:mt-24 lg:space-y-16">
          {projects.map((project, index) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}