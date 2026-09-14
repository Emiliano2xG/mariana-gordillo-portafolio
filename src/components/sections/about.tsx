import { about } from "@/data/profile";

export function About() {
  return (
    <section id="perfil" className="flex items-center justify-center px-8 py-20 md:px-16 md:py-24 lg:px-24">
      <div className="w-full max-w-4xl space-y-12 text-center md:space-y-16">
        <h2 className="text-tiny tracking-widest">{about.eyebrow}</h2>
        <p className="text-body mx-auto max-w-3xl leading-relaxed">{about.text}</p>
      </div>
    </section>
  );
}
