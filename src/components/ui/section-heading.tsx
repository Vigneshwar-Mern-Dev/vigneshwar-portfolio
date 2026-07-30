export type FloatingBadgeProp = {
  label: string;
  icon?: React.ReactNode;
  floatClass?: string;
  positionClass?: string;
  sizeClass?: string;
};

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  badges?: FloatingBadgeProp[];
};

export function SectionHeading({ index, eyebrow, title, description, badges }: SectionHeadingProps) {
  return (
    <header className="section-heading relative">
      {badges && badges.length > 0 && (
        <div className="hidden md:block pointer-events-none absolute inset-0 z-20">
          {badges.map((badge, idx) => (
            <div
              key={idx}
              title={badge.label}
              aria-label={badge.label}
              className={`floating-icon-badge ${badge.sizeClass || "size-md"} ${badge.floatClass || "float-slow"} ${badge.positionClass || ""}`}
            >
              {badge.icon}
            </div>
          ))}
        </div>
      )}
      <div className="section-kicker">
        <span>{index}</span>
        <span>{eyebrow}</span>
      </div>
      <div>
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
    </header>
  );
}

