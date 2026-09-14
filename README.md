# Portafolio · Mariana Gómez Gordillo

Sitio de presentación de **Mariana Gómez Gordillo**: branding, mercadotecnia digital y diseño en Tuxtla Gutiérrez, Chiapas. Hecho con TanStack Start, Vite, React 19 y Tailwind v4.

## Cómo verlo en local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Contenido

El texto y las piezas viven en `src/data/profile.ts`. Las imágenes van en `public/`.

## Compartir el link

Al pegar la URL en WhatsApp, Instagram o LinkedIn se muestra el retrato de Mariana, el nombre y el rol. La imagen de vista previa es `public/og.jpg`.

Cuando despliegues, configura la URL pública:

```bash
VITE_SITE_URL=https://tu-dominio.vercel.app
```

## Despliegue

El sitio usa Nitro para salir en Vercel. Importa el repo, deja el comando `npm run build` y agrega:

```bash
VITE_SITE_URL=https://tu-dominio.vercel.app
```
