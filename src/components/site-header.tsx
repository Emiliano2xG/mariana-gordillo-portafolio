import { Link } from "@tanstack/react-router";

import { profile } from "@/data/profile";

export function SiteHeader() {
  return (
    <nav
      className="fixed top-0 right-0 left-0 z-50 border-b border-border bg-background/80 px-8 backdrop-blur-sm md:px-16 lg:px-24"
      aria-label="Principal"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 py-3">
        <Link to="/" className="flex min-w-0 flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
          <span className="truncate text-lg font-semibold md:text-xl lg:text-2xl">{profile.name}</span>
          <span className="hidden text-sm text-muted-foreground md:inline md:text-lg">{profile.role}</span>
        </Link>
        <div className="flex shrink-0 items-center gap-5 md:gap-10">
          <a href="/#experiencia" className="text-base font-semibold transition-opacity hover:opacity-60 md:text-xl">
            Experiencia
          </a>
          <a href="/#contacto" className="text-base font-semibold transition-opacity hover:opacity-60 md:text-xl">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}
