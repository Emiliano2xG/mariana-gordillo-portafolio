export const profile = {
  name: "Mariana Ozuna Gordillo",
  firstName: "Mariana",
  lastName: "Gordillo",
  initials: "MG",
  role: "Branding y mercadotecnia",
  title: "Ingeniera en Gestión Empresarial",
  location: "Tuxtla Gutiérrez, Chiapas",
  email: "marianagomezgordillo16@gmail.com",
  phone: "+52 963 142 95 45",
  phoneHref: "+529631429545",
  website: "",
  linkedin: "",
  instagram: "",
  avatar: "/Mariana_gordillo_cv_perfil.png",
  english: "Inglés B2 — TOEFL iBT",
} as const;

export const about = {
  eyebrow: "Perfil profesional",
  text: "Ingeniera en Gestión Empresarial especializada en Modelos de Negocios basados en TICs, con experiencia comprobada en mercadotecnia digital, construcción de identidad de marca (branding), gestión administrativa, coordinación logística de eventos y soporte contable. Perfil versátil orientado a resultados, capaz de articular estrategias creativas y de comunicación con control operativo, administración de recursos y optimización de flujos de trabajo. Nivel de inglés profesional intermedio-avanzado (B2 acreditado).",
} as const;

export const experience = [
  {
    place: "Colegio de Ingenieros Mecánicos y Electricistas del Estado de Chiapas (CIME)",
    role: "Residente Profesional — Creatividad, Publicidad y Gestión Administrativa",
    location: "Tuxtla Gutiérrez, Chiapas",
    bullets: [
      "Dirección creativa, diseño y maquetación integral de 7 ediciones consecutivas de la revista digital bimestral del organismo.",
      "Diseño e implementación de contenido publicitario y visual enfocado en fortalecer el posicionamiento institucional del colegio.",
      "Planificación, logística y ejecución de actividades operativas y administrativas para el desarrollo de asambleas, congresos y cursos.",
      "Colaboración en el área contable y administrativa, gestionando comprobaciones, control documental y flujo de información institucional.",
    ],
  },
  {
    place: "Consultoría y Emprendimiento en Branding e Identidad Visual",
    role: "Fundadora y Diseñadora Estratégica",
    location: "Tuxtla Gutiérrez, Chiapas",
    bullets: [
      "Desarrollo integral de proyectos de branding, diseño de logotipos, manuales de identidad visual y piezas publicitarias para empresas emergentes.",
      "Gestión de marca y comunicación gráfica para proyectos clave en diversos sectores: Sargal (energía solar), Skin (skincare), Temazcal Mi Jardín (turismo y bienestar), Consultorio Médico Privado (salud) y Denisse Villalva Lash Studio (nails y pestañas).",
      "Atención y prospección directa de clientes, cotización, gestión de tiempos de entrega y alineación del diseño visual a los objetivos comerciales.",
    ],
  },
] as const;

export type InstagramPost = {
  id: string;
  account: string;
  images: string[];
  caption: string;
  hashtags: string[];
};

export type MagazineEdition = {
  id: string;
  image: string;
  edition: string;
  theme: string;
  date: string;
  href: string;
};

export type BrandingPiece = {
  id: string;
  image: string;
  label: string;
  fit?: "cover" | "contain";
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  lines?: string[];
  initials?: string;
  sector: string;
  summary: string;
  highlights?: string[];
  cover?: string;
  instagramUrl?: string;
  posts?: InstagramPost[];
  editions?: MagazineEdition[];
  gallery?: BrandingPiece[];
};

export const projects: Project[] = [
  {
    slug: "revista-cime",
    number: "01",
    title: "Revista CIME",
    lines: ["Revista", "CIME"],
    sector: "Editorial institucional",
    summary:
      "Dirección creativa, diseño y maquetación de las ediciones de la revista digital bimestral del Colegio de Ingenieros Mecánicos y Electricistas del Estado de Chiapas.",
    highlights: ["Dirección creativa", "Diseño editorial", "Maquetación"],
    editions: [
      {
        id: "cime-1",
        image: "/revista_1.png",
        edition: "Primera edición",
        theme: "Innovación, cultura y desarrollo",
        date: "Septiembre 2025",
        href: "https://cimeapp.com/revista",
      },
      {
        id: "cime-2",
        image: "/revista_2.png",
        edition: "Segunda edición",
        theme: "Nuestro edificio, nuestra historia, nuestro futuro",
        date: "Septiembre 2025",
        href: "https://cimeapp.com/revista",
      },
      {
        id: "cime-3",
        image: "/revista_3.png",
        edition: "Tercera edición",
        theme: "Lo que construimos hoy, proyecta el mañana",
        date: "Diciembre 2025",
        href: "https://cimeapp.com/revista",
      },
      {
        id: "cime-4",
        image: "/revista_4.png",
        edition: "Cuarta edición",
        theme: "Fortaleciendo la unidad del CIME",
        date: "Marzo 2026",
        href: "https://cimeapp.com/revista",
      },
      {
        id: "cime-5",
        image: "/revista_5.png",
        edition: "Quinta edición",
        theme: "Revista CIME — Edición V",
        date: "Mayo 2026",
        href: "https://cimeapp.com/revista",
      },
      {
        id: "cime-6",
        image: "/revista_6.png",
        edition: "Sexta edición",
        theme: "Edición especial Día del Ingeniero",
        date: "1 de julio 2026",
        href: "https://cimeapp.com/revista",
      },
    ],
  },
  {
    slug: "sargal",
    number: "02",
    title: "Sargal",
    sector: "Energía solar",
    summary:
      "Branding, identidad visual y piezas publicitarias para una empresa de energía solar.",
    highlights: ["Identidad visual", "Piezas publicitarias", "Contenido para Instagram"],
    posts: [
      {
        id: "sargal-fotovoltaico",
        account: "sargal_electrotecnia",
        images: ["/post_1_1.jpg", "/post_1_2.jpg", "/post_1_3.jpg", "/post_1_4.jpg"],
        caption:
          "☀️ La energía del sol trabaja para ti, incluso cuando no lo notas.\n\n¿Alguna vez te has preguntado cómo un panel solar logra alimentar tu hogar o negocio? ⚡\n\nDesliza este carrusel y descubre cómo funciona un sistema fotovoltaico:\n🔸 Los paneles captan la energía del sol.\n🔸 El inversor la convierte en electricidad lista para usarse.\n🔸 Esa energía alimenta tus equipos, reduce tu consumo de la red eléctrica y te ayuda a ahorrar mes con mes.\n\nInvertir en energía solar no solo significa disminuir tu recibo de luz, sino también apostar por una solución eficiente, sustentable y con beneficios a largo plazo. 🌱\n\nEn Sargal Electrotecnia te acompañamos desde la asesoría hasta la instalación para que aproveches al máximo la energía del sol.\n\n📲 Agenda tu asesoría:\nWhatsApp: 961 300 1273",
        hashtags: [
          "#SargalElectrotecnia",
          "#PanelesSolares",
          "#EnergíaSolar",
          "#AhorroDeEnergía",
          "#Chiapas",
        ],
      },
      {
        id: "sargal-diagnostico",
        account: "sargal_electrotecnia",
        images: ["/post_2_1.jpg"],
        caption:
          "☀️ Antes de invertir en paneles solares, asegúrate de tomar la mejor decisión.\n\nEn Sargal Electrotecnia realizamos un diagnóstico personalizado para analizar tu consumo energético, diseñar una propuesta a tu medida y mostrarte una proyección real de ahorro.\n\n🔎 Conoce exactamente qué necesitas antes de instalar.\n📊 Obtén una cotización personalizada.\n💰 Descubre cuánto podrías ahorrar con energía solar.\n\n📲 Agenda tu cita de diagnóstico al 961 300 1273 y da el primer paso hacia una energía más eficiente.",
        hashtags: [
          "#SargalElectrotecnia",
          "#EnergiaSolar",
          "#PanelesSolares",
          "#AhorroEnergetico",
          "#tuxtlagutierrez",
        ],
      },
      {
        id: "sargal-dia-ingeniero",
        account: "sargal_electrotecnia",
        images: ["/post_3_1.jpg"],
        caption:
          "Hoy reconocemos la dedicación, el conocimiento y la pasión de quienes hacen posible cada proyecto.\n\nEn Sargal celebramos a todos los ingenieros que, con su trabajo, impulsan el desarrollo y la innovación. ¡Feliz Día del Ingeniero!\n\n💬 Comparte esta publicación y felicita a un ingeniero en su día.",
        hashtags: [
          "#DíaDelIngeniero",
          "#Sargal",
          "#Ingeniería",
          "#Energía",
          "#Innovación",
        ],
      },
    ],
  },
  {
    slug: "skin",
    number: "03",
    title: "Skin",
    sector: "Skincare",
    summary:
      "Identidad de marca, colorimetría, aplicaciones y contenido para Instagram de Skin, una marca de skincare. Desde el sistema visual hasta los posts y las piezas aplicadas en poster y tote.",
    highlights: ["Branding", "Colorimetría", "Contenido para Instagram", "Aplicaciones de marca"],
    instagramUrl: "https://www.instagram.com/skin.shopcm",
    posts: [
      {
        id: "skin-latte",
        account: "skin.shopcm",
        images: ["/posts_skin_1.png"],
        caption:
          "Latte makeup por Skin. Tenemos los mejores productos para preparar tu piel antes de este maquillaje en tendencia 🤩",
        hashtags: ["#skin", "#maquillaje", "#skincare", "#latte", "#comitandedominguez"],
      },
      {
        id: "skin-texturas",
        account: "skin.shopcm",
        images: ["/posts_skin_2.png"],
        caption:
          "En Skin queremos darte un enfoque de cómo son las texturas de nuestros productos ⭐️ y cómo funcionan dependiendo tu tipo de piel 🫰🏻 ¡Aparta tus productos favs con nosotros!",
        hashtags: ["#skincare", "#productosdebelleza", "#comitandedominguez", "#mini"],
      },
      {
        id: "skin-recap",
        account: "skin.shopcm",
        images: ["/posts_skin_3.png"],
        caption:
          "Te tenemos un recap de nuestros productos favoritos 🙂‍↕️ ¿Cuáles son los tuyos? En Skin tenemos tus favoritos 🫰🏻✨",
        hashtags: ["#skincare", "#mini", "#comitandedominguez", "#skin"],
      },
    ],
    gallery: [
      {
        id: "skin-poster",
        image: "/branding_skin_1.jpeg",
        label: "Aplicación en poster",
      },
      {
        id: "skin-grafica",
        image: "/branding_skin_2.jpeg",
        label: "Pieza gráfica",
      },
      {
        id: "skin-tote",
        image: "/branding_skin_3.jpeg",
        label: "Aplicación en tote",
      },
      {
        id: "skin-color",
        image: "/colorimetria_skin.jpeg",
        label: "Colorimetría",
        fit: "contain",
      },
    ],
  },
  {
    slug: "temazcal-mi-jardin",
    number: "04",
    title: "Temazcal Mi Jardín",
    lines: ["Temazcal", "Mi Jardín"],
    initials: "MJ",
    sector: "Turismo y bienestar",
    summary:
      "Identidad de marca para Mi Jardín Temazcal, en colaboración con Debyema. Logotipos, papelería, mockups, tarjetas de fidelidad y piezas para redes del nuevo branding.",
    highlights: ["Identidad visual", "Papelería", "Mockups", "Stories"],
    gallery: [
      {
        id: "temazcal-sistema",
        image: "/mockup_temazcal.jpeg",
        label: "Sistema de marca Mi Jardín Temazcal: logotipos, papelería, mockup y tipografía",
      },
      {
        id: "temazcal-aplicaciones",
        image: "/new_branding_temazcal.jpeg",
        label: "Aplicaciones: bolsa, etiqueta, tarjeta de fidelidad y piezas para redes",
      },
      {
        id: "temazcal-story",
        image: "/Temazcal_story_coming_soon_new_branding.jpeg",
        label: "Story de nuevo branding Debyema × Mi Jardín Temazcal",
      },
    ],
  },
  {
    slug: "consultorio-medico",
    number: "05",
    title: "Consultorio Médico Privado",
    lines: ["Consultorio", "Médico"],
    initials: "CM",
    sector: "Salud",
    summary:
      "Identidad visual y comunicación gráfica para un consultorio médico privado. Un sistema de marca claro y profesional, alineado a la confianza que pide el sector salud.",
    highlights: ["Identidad visual", "Comunicación gráfica", "Sistema de marca"],
    cover: "/consultorios_medico.avif",
  },
  {
    slug: "nail-studio",
    number: "06",
    title: "Denisse Villalva",
    lines: ["Denisse", "Villalva"],
    initials: "DV",
    sector: "Lash Studio",
    summary:
      "Identidad y papelería para Denisse Villalva Lash Studio. Un sistema en lila y crema: logotipo, tarjetas de presentación, menú de precios y tarjetas de fidelidad para nails, pestañas y spa.",
    highlights: ["Logotipo", "Tarjetas de presentación", "Menú de precios", "Tarjetas de fidelidad"],
    gallery: [
      {
        id: "nails-sistema",
        image: "/nails_branding.jpeg",
        label: "Antes y después: logotipo, tarjetas de presentación y menú de precios",
        fit: "contain",
      },
      {
        id: "nails-fidelidad",
        image: "/nails_branding_2.jpeg",
        label: "Tarjetas de fidelidad y mockup",
        fit: "contain",
      },
    ],
  },
];

export const education = [
  {
    school: "Instituto Tecnológico Nacional de México (TecNM) campus Tuxtla Gutiérrez",
    degree: "Licenciatura en Ingeniería en Gestión Empresarial",
    detail: "Especialidad en Modelos de Negocios Basados en las TICs",
    period: "2021 — 2025",
    logo: "/logo_insituto nacional de mexico.png",
  },
  {
    school: "Centro de Bachillerato Tecnológico Industrial y de Servicios No. 108 (CBTis 108)",
    degree: "Técnica en Logística",
    detail: "",
    period: "2018 — 2021",
    logo: "/logo_cbtis 108.jpg",
  },
] as const;

export const skillGroups = [
  {
    title: "Áreas de especialidad",
    items: [
      "Mercadotecnia digital",
      "Branding e identidad visual",
      "Publicidad y diseño editorial",
      "Logística y organización de eventos",
      "Soporte contable y administrativo",
      "Fundamentos de recursos humanos",
    ],
  },
  {
    title: "Habilidades profesionales",
    items: [
      "Liderazgo",
      "Resolución analítica de problemas",
      "Adaptabilidad",
      "Control del tiempo",
      "Atención a directrices",
      "Trabajo colaborativo",
    ],
  },
] as const;

export const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "B2 — TOEFL iBT" },
] as const;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
