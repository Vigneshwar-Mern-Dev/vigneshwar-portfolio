export function GlowingLine({ className = "" }: { className?: string }) {
  return (
    <div className={`glowing-divider ${className}`} aria-hidden="true" />
  );
}
