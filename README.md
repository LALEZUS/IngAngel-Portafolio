# Portafolio profesional · Angel Eduardo Domínguez Martínez

Sitio personal con Next.js App Router, React, TypeScript y Emotion. La interfaz sigue una estética Digital Garden: composición Bento, navegación compacta, tema claro/oscuro, trayectoria profesional y mapa de tecnologías.

## Requisitos y desarrollo

- Node.js 20.9 o posterior y npm.

```bash
npm install
npm run dev
```

## Datos profesionales y privacidad

El contenido público revisado se mantiene en `src/data/portfolio.ts`. Los documentos fuente deben permanecer en `private/cv-source/`, una carpeta excluida de Git. Para generar localmente un informe de señales a partir de CV compatibles, ejecuta `npm run analyze-cv`; el proceso no modifica el contenido público automáticamente. Contrasta los documentos originales y revisa `analysis-report.md` antes de editar los datos del sitio.

No se publica correo ni teléfono porque no hay autorización explícita. La sección de notas muestra un estado vacío; no se inventaron artículos, métricas, premios ni proyectos. El estado de obtención de los trayectos Cisco queda señalado como pendiente de confirmación.

## Comprobaciones

```bash
npm run typecheck
npm run build
npm run start
```

## Despliegue en Vercel

El repositorio se despliega desde GitHub. Cada push a `main` inicia un despliegue de producción en Vercel. Configura `NEXT_PUBLIC_SITE_URL` con el dominio definitivo para canonical metadata, sitemap y robots. El build no requiere acceso a los documentos locales.

## Estructura principal

- `src/app/`: layout, página, metadatos y estilos globales.
- `src/components/digital-garden/`: encabezado, cambio de tema, Bento Grid, fichas de proyecto, trayectoria y tecnologías.
- `src/data/portfolio.ts`: contenido profesional revisado.
- `scripts/analyze-cv.ts`: analizador local de documentos.
- `private/cv-source/`: carpeta local excluida del repositorio.
