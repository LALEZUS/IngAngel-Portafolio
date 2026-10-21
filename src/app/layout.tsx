import type { Metadata } from 'next';
import { EmotionRegistry } from '@/lib/emotion-registry';
import './garden.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'),
  title: 'Angel Eduardo Domínguez Martínez | Ingeniería y tecnología',
  description: 'Portafolio profesional de desarrollo web, redes y telecomunicaciones.',
  openGraph: {
    title: 'Angel Eduardo Domínguez Martínez',
    description: 'Desarrollo web, redes y telecomunicaciones.',
    type: 'website',
    locale: 'es_MX',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" data-theme="dark"><body><EmotionRegistry>{children}</EmotionRegistry></body></html>;
}
