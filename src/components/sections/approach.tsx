import { SplitSection } from "@/components/split-section";
import { languages, skillGroups } from "@/data/profile";

export function Approach() {
  return (
    <SplitSection title="Competencias" id="competencias">
      <div className="space-y-16 md:space-y-20">
        {skillGroups.map((group, index) => (
          <div key={group.title}>
            {index > 0 && <hr className="mb-16 border-t border-foreground/15 md:mb-20" />}
            <p className="text-tiny mb-6 tracking-widest">{group.title}</p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {group.items.map((item) => (
                <div
                  key={item}
                  className="text-small border border-foreground/15 px-5 py-4 transition-colors hover:border-foreground/40"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div>
          <hr className="mb-16 border-t border-foreground/15 md:mb-20" />
          <p className="text-tiny mb-6 tracking-widest">Idiomas</p>
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
            {languages.map((language) => (
              <div key={language.name}>
                <p className="text-large">{language.name}</p>
                <p className="text-small mt-1">{language.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SplitSection>
  );
}
