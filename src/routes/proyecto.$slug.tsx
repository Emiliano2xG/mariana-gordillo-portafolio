import { Link, createFileRoute, notFound } from "@tanstack/react-router";

import { InstagramPostCard } from "@/components/instagram-post";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getProject, projects } from "@/data/profile";

export const Route = createFileRoute("/proyecto/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const next = projects[(projects.findIndex((item) => item.slug === project.slug) + 1) % projects.length];

  return (
    <div className="min-h-svh bg-background">
      <SiteHeader />
      <main className="px-8 pt-28 pb-20 md:px-16 md:pt-32 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <Link to="/" hash="trabajo" className="text-small text-muted-foreground hover:opacity-70">
            ← Portafolio
          </Link>

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.5fr] md:gap-24">
            <div>
              <p className="text-tiny">{project.number}</p>
              <h1 className="text-section mt-4">{project.title}</h1>
              <p className="text-small mt-6">{project.sector}</p>
            </div>
            <p className="text-body leading-relaxed">{project.summary}</p>
          </div>

          {project.cover ? (
            <img
              src={project.cover}
              alt={project.title}
              className="mt-16 aspect-[3/2] w-full max-w-3xl rounded-2xl border border-foreground/15 object-cover"
            />
          ) : null}

          {project.editions && project.editions.length > 0 ? (
            <section className="mt-20 border-t border-foreground/15 pt-16">
              <p className="text-tiny mb-10">Portadas</p>
              <div className="grid grid-cols-2 items-start gap-6 md:grid-cols-3 lg:gap-8">
                {project.editions.map((edition) => (
                  <a
                    key={edition.id}
                    href={edition.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="block transition-opacity hover:opacity-80"
                  >
                    <img
                      src={edition.image}
                      alt={`Portada · ${edition.edition}. ${edition.theme}`}
                      className="w-full border border-foreground/15"
                    />
                    <p className="text-tiny mt-3 text-muted-foreground">{edition.edition}</p>
                    <p className="text-small mt-1 leading-snug">{edition.theme}</p>
                  </a>
                ))}
              </div>
            </section>
          ) : null}

          {project.gallery && project.gallery.length > 0 ? (
            <section className="mt-20 border-t border-foreground/15 pt-16">
              <p className="text-tiny mb-10">Identidad y aplicaciones</p>
              <div className={`grid grid-cols-2 gap-4 md:gap-6 ${project.gallery.length > 2 ? "md:grid-cols-4" : "md:max-w-3xl"}`}>
                {project.gallery.map((piece) => (
                  <figure key={piece.id}>
                    <img
                      src={piece.image}
                      alt={piece.label}
                      className={`aspect-[3/4] w-full rounded-2xl border border-foreground/15 ${
                        piece.fit === "contain" ? "object-contain p-3" : "object-cover"
                      }`}
                    />
                    <figcaption className="text-tiny mt-3 text-muted-foreground">
                      {piece.label}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          ) : null}

          {project.posts && project.posts.length > 0 ? (
            <section className="mt-20 border-t border-foreground/15 pt-16">
              <p className="text-tiny mb-10">Contenido para Instagram</p>
              <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                {project.posts.map((post) => (
                  <InstagramPostCard key={post.id} post={post} />
                ))}
              </div>
            </section>
          ) : null}

          <div className="mt-20 flex flex-col gap-3 border-t border-foreground/15 pt-10 sm:flex-row sm:items-baseline sm:justify-between">
            <p className="text-small text-muted-foreground">Siguiente</p>
            <Link
              to="/proyecto/$slug"
              params={{ slug: next.slug }}
              className="text-large hover:opacity-60"
            >
              {next.title}
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
