import { RotatingInstagramPosts } from "@/components/instagram-post";
import { RotatingMagazineCovers } from "@/components/magazine-cover";
import { projects, type BrandingPiece, type Project } from "@/data/profile";
import { canPauseOnHover, cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const ROTATE_MS = 8000;

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

function ProjectGallery({ pieces }: { pieces: BrandingPiece[] }) {
  return (
    <div className="mt-14">
      <p className="text-tiny mb-6">Identidad y aplicaciones</p>
      <div
        className={cn(
          "grid grid-cols-2 gap-4 md:gap-5",
          pieces.length > 2 ? "md:grid-cols-4" : "md:max-w-3xl",
        )}
      >
        {pieces.map((piece) => (
          <figure key={piece.id}>
            <div className="overflow-hidden rounded-2xl border border-foreground/15 bg-background">
              <img
                src={piece.image}
                alt={piece.label}
                className={cn(
                  "aspect-[3/4] w-full",
                  piece.fit === "contain" ? "object-contain p-3" : "object-cover",
                )}
              />
            </div>
            <figcaption className="text-tiny mt-3 text-muted-foreground">{piece.label}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function RotatingBoards({ pieces }: { pieces: BrandingPiece[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const piece = pieces[index];

  useEffect(() => {
    const clearIfMobile = () => {
      if (!canPauseOnHover()) setPaused(false);
    };
    clearIfMobile();
    window.addEventListener("resize", clearIfMobile);
    return () => window.removeEventListener("resize", clearIfMobile);
  }, []);

  useEffect(() => {
    if (paused || pieces.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % pieces.length);
    }, ROTATE_MS);

    return () => window.clearInterval(id);
  }, [paused, pieces.length]);

  if (!piece) return null;

  return (
    <div
      className="w-full max-w-[400px] shrink-0"
      onMouseEnter={() => {
        if (canPauseOnHover()) setPaused(true);
      }}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        key={piece.id}
        className="post-fade overflow-hidden rounded-3xl border border-foreground/15 bg-background"
      >
        <img src={piece.image} alt={piece.label} className="block w-full rounded-3xl" />
      </div>
      <p className="text-small mt-5 leading-snug">{piece.label}</p>
      {pieces.length > 1 ? (
        <div className="mt-5 flex items-center gap-2">
          {pieces.map((item, i) => (
            <button
              key={item.id}
              type="button"
              aria-label={item.label}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === index ? "w-6 bg-foreground" : "w-1.5 bg-foreground/25 hover:bg-foreground/50",
              )}
            />
          ))}
        </div>
      ) : null}
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

  if (project.gallery?.length) {
    return <RotatingBoards pieces={project.gallery} />;
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
            <article key={project.slug} className="border-t border-foreground/15 pt-12 md:pt-16">
              <div
                className={cn(
                  "grid items-center gap-12 lg:gap-20",
                  project.gallery?.length && !project.posts?.length && !project.editions?.length
                    ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)]"
                    : "lg:grid-cols-[minmax(0,1fr)_minmax(0,300px)]",
                )}
              >
                <div>
                  <p className="text-tiny">{project.sector}</p>
                  <div className="mt-6">
                    <ProjectTitle project={project} />
                  </div>
                  <p className="text-display mt-5 leading-none text-foreground/25">{project.number}</p>
                  <p className="text-body mt-10 max-w-md leading-relaxed">{project.summary}</p>
                  {project.instagramUrl ? (
                    <a
                      href={project.instagramUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-small mt-5 inline-block underline-offset-4 hover:underline"
                    >
                      Instagram
                    </a>
                  ) : null}
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
              </div>

              {project.gallery?.length && (project.posts?.length || project.editions?.length) ? (
                <ProjectGallery pieces={project.gallery} />
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
