import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="flex items-center justify-center px-8 pt-28 pb-16 md:px-16 md:pt-32 md:pb-20 lg:px-24">
      <div className="w-full max-w-7xl">
        <p className="text-tiny mb-16 text-center tracking-widest md:mb-20">{profile.title}</p>

        <h1 className="sr-only">{profile.name}</h1>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="text-center lg:text-right">
            <p className="text-display leading-none font-light lg:text-[9rem] lg:font-normal">
              {profile.firstName}
            </p>
          </div>

          <div className="flex justify-center">
            <div className="portrait-arch aspect-[52/60] w-full max-w-[36rem] overflow-hidden">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="h-full w-full object-cover object-[center_18%]"
              />
            </div>
          </div>

          <div className="text-center lg:text-left">
            <p className="text-display leading-none font-light lg:text-[9rem] lg:font-normal">
              {profile.lastName}
            </p>
          </div>
        </div>

        <p className="text-small mt-16 flex flex-col items-center gap-2 text-center md:mt-20 md:flex-row md:flex-wrap md:justify-center md:gap-x-0">
          <span>{profile.location}</span>
          <span className="hidden px-4 text-foreground/25 md:inline" aria-hidden>
            |
          </span>
          <a href={`mailto:${profile.email}`} className="underline-offset-4 hover:underline">
            {profile.email}
          </a>
          <span className="hidden px-4 text-foreground/25 md:inline" aria-hidden>
            |
          </span>
          <a href={`tel:${profile.phoneHref}`} className="underline-offset-4 hover:underline">
            {profile.phone}
          </a>
          <span className="hidden px-4 text-foreground/25 md:inline" aria-hidden>
            |
          </span>
          <a href="#trabajo" className="underline-offset-4 hover:underline">
            Portafolio
          </a>
        </p>
      </div>
    </section>
  );
}
