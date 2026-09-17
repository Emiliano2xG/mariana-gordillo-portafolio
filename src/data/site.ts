import { profile } from "@/data/profile";

const fallbackUrl = "https://mariana-gordillo-portafolio.vercel.app";

export const site = {
  name: profile.name,
  title: `${profile.name} · ${profile.role}`,
  description:
    "Portafolio de Mariana Ozuna Gordillo. Ingeniera en Gestión Empresarial. Branding, mercadotecnia digital y diseño en Tuxtla Gutiérrez, Chiapas.",
  url: import.meta.env.VITE_SITE_URL || fallbackUrl,
  ogImage: "/og.jpg",
  locale: "es_MX",
} as const;

export function absoluteUrl(path: string) {
  return new URL(path, `${site.url.replace(/\/$/, "")}/`).href;
}
