import { SplitSection } from "@/components/split-section";
import { education } from "@/data/profile";

export function Education() {
  return (
    <SplitSection title="Formación" id="formacion">
      <div className="space-y-16 md:space-y-20">
        {education.map((item, index) => (
          <article key={item.school}>
            {index > 0 && <hr className="mb-16 border-t border-foreground/15 md:mb-20" />}
            <div className="flex items-start gap-6 md:gap-8">
              <img
                src={item.logo}
                alt={item.school}
                className="mt-1 size-16 shrink-0 object-contain md:size-20"
              />
              <div className="min-w-0">
                <p className="text-large leading-tight">{item.degree}</p>
                <p className="text-small mt-3">{item.school}</p>
                <p className="text-tiny mt-2 tracking-widest text-muted-foreground">{item.period}</p>
                {item.detail ? <p className="text-body mt-6 leading-relaxed">{item.detail}</p> : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </SplitSection>
  );
}
