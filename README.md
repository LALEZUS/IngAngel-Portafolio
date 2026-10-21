# Portafolio profesional · Angel Eduardo Domínguez Martínez

Portafolio en Next.js App Router, React, TypeScript y Emotion. El contenido visible se mantiene en `src/data/profile.json`; los CV fuente permanecen locales.

## Requisitos

- Node.js 20.9 o posterior (requisito de Next.js 16).
- npm.

## Desarrollo

```bash
npm install
npm run dev
```

## Analizar CV localmente

Coloca copias de CV en `private/cv-source/` (PDF, DOCX, TXT, Markdown o HTML) y ejecuta:

```bash
npm run analyze-cv
```

Opcionalmente establece `CV_SOURCE_DIR` para elegir otra carpeta. El script genera `analysis-report.md` localmente y detecta texto/señales; no modifica ni publica automáticamente el perfil. Revisa el informe y actualiza manualmente `src/data/profile.json`. Los originales y el informe están excluidos de Git. No uses rutas con archivos originales en el despliegue.

## Comprobaciones y producción

```bash
npm run typecheck
npm run build
npm run start
```

## Despliegue a Vercel

Sube este repositorio a GitHub e impórtalo en Vercel. Usa Node.js 20.9+. No se requiere la carpeta local de CV durante el build. Configura `NEXT_PUBLIC_SITE_URL` con el dominio final para metadatos, sitemap y robots. `.env.example` documenta la configuración; no subas secretos.

## Revisión de privacidad antes de publicar

- Verifica el contenido de `src/data/profile.json`; la lista es una selección pública deliberada.
- No se publicaron teléfono ni correo del CV porque el encargo no autorizó expresamente divulgarlos.
- El PDF `public/cv/` no se incluye: agrega solo una versión saneada y expresamente autorizada antes de habilitar la descarga.
- Contacto y formulario quedan como estado vacío elegante hasta autorizar datos/configurar un proveedor. Nunca agregues claves secretas al navegador.
- La sección Network Lab es demostrativa y no ejecuta comandos ni contacta redes reales.

## Emotion y SSR

`src/lib/emotion-registry.tsx` registra los estilos creados durante el renderizado con `useServerInsertedHTML`, siguiendo el patrón de integración Emotion/App Router. CSS global aporta la composición de la interfaz; Emotion se usa en componentes reutilizables.
