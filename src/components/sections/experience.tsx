import { SplitSection } from "@/components/split-section";
import { experience } from "@/data/profile";

export function Experience() {
  return (
    <SplitSection title="Experiencia" id="experiencia">
      <div className="space-y-16 md:space-y-20">
        {experience.map((item, index) => (
          <article key={item.place}>
            {index > 0 && <hr className="mb-16 border-t border-foreground/15 md:mb-20" />}
            <p className="text-large leading-tight">{item.role}</p>
            <p className="text-small mt-3">{item.place}</p>
            <p className="text-tiny mt-2 tracking-widest text-muted-foreground">{item.location}</p>
            <ul className="mt-8 space-y-4">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="text-body border-l border-foreground/15 pl-5 leading-relaxed">
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SplitSection>
  );
}
