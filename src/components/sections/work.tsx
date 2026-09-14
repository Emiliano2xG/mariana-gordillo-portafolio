import { RotatingInstagramPosts } from "@/components/instagram-post";
import { RotatingMagazineCovers } from "@/components/magazine-cover";
import { projects, type Project } from "@/data/profile";
import { cn } from "@/lib/utils";

function ProjectTitle({ project }: { project: Project }) {
  const lines = project.lines ?? [project.title];
  const large = lines.length <= 2;

  return (
    <h3 className={cn("leading-none", large ? "text-display" : "text-hero")}>
      {lines.map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
    </h3>
  );
}

function ProjectCover({ project }: { project: Project }) {
  if (!project.cover) return null;

  return (
    <div className="w-full max-w-[300px] shrink-0">
      <div className="overflow-hidden rounded-2xl border border-foreground/15">
        <img
          src={project.cover}
          alt={project.title}
          className="aspect-[3/4] w-full object-cover"
        />
      </div>
      <p className="text-tiny mt-5 text-muted-foreground">{project.number}</p>
      <p className="text-small mt-2">{project.sector}</p>
    </div>
  );
}

function ProjectMedia({ project }: { project: Project }) {
  if (project.editions?.length) {
    return <RotatingMagazineCovers editions={project.editions} />;
  }

  if (project.posts?.length) {
    return <RotatingInstagramPosts posts={project.posts} />;
  }

  return <ProjectCover project={project} />;
}

export function Work() {
  return (
    <section id="trabajo" className="scroll-mt-24 px-8 py-20 md:px-16 md:py-24 lg:px-24">
      <div className="mx-auto w-full max-w-7xl">
        <header className="text-center">
          <div className="flex items-center gap-5 md:gap-10">
            <span className="h-px flex-1 bg-foreground/20" aria-hidden />
            <h2 className="text-section shrink-0 font-light">Portafolio</h2>
            <span className="h-px flex-1 bg-foreground/20" aria-hidden />
          </div>
          <p className="text-body mx-auto mt-8 max-w-md leading-relaxed">
            Piezas reales de su trabajo.
          </p>
        </header>

        <div className="mt-16 space-y-28 md:mt-24 md:space-y-36">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="grid items-center gap-12 border-t border-foreground/15 pt-12 md:pt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,300px)] lg:gap-20"
            >
              <div>
                <p className="text-tiny">{project.sector}</p>
                <div className="mt-6">
                  <ProjectTitle project={project} />
                </div>
                <p className="text-display mt-5 leading-none text-foreground/25">{project.number}</p>
                <p className="text-body mt-10 max-w-md leading-relaxed">{project.summary}</p>
                {project.highlights?.length ? (
                  <ul className="mt-8 space-y-3">
                    {project.highlights.map((item) => (
                      <li
                        key={item}
                        className="text-small border-l border-foreground/15 pl-4"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>

              <ProjectMedia project={project} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
