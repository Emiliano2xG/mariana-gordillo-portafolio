import { cn } from "@/lib/utils";

export function SplitSection({
  title,
  children,
  className,
  id,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 px-8 py-20 md:px-16 md:py-24 lg:px-24", className)}
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-12 md:grid-cols-[1fr_2fr] md:gap-24 lg:grid-cols-[1fr_1.5fr] lg:gap-32">
        <div className="md:sticky md:top-32">
          <h2 className="text-section">{title}</h2>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
