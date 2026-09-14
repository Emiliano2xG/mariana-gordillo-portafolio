import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-2xl", className)}>
      {eyebrow && (
        <p className="section-eyebrow">
          <span className="h-px w-7 bg-terracotta/60" />
          {eyebrow}
        </p>
      )}
      <h2 className={cn("section-title", eyebrow && "mt-3")}>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </Reveal>
  );
}
