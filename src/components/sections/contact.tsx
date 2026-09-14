import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section id="contacto" className="scroll-mt-24 flex items-center px-8 py-20 md:px-16 md:py-24 lg:px-24">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-32">
        <div className="flex items-center justify-center border-foreground/15 lg:justify-end lg:border-r lg:pr-16">
          <h2 className="text-section">Contacto</h2>
        </div>

        <div className="flex items-center lg:pl-16">
          <div className="space-y-5">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="mb-8 h-64 w-48 object-cover object-[center_18%]"
            />
            <p className="text-large">{profile.name}</p>
            <p className="text-small">{profile.location}</p>
            <a href={`mailto:${profile.email}`} className="text-body block underline underline-offset-4">
              {profile.email}
            </a>
            <a href={`tel:${profile.phoneHref}`} className="text-body block underline underline-offset-4">
              {profile.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
