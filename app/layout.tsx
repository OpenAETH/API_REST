import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import { landingConfig } from '@/config/landing';
import { Atmosphere } from '@/components/Atmosphere';
import { ScrollTrajectory } from '@/components/ScrollTrajectory';
import './globals.css';

const display = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['500', '600', '700'],
});

const body = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  weight: ['400', '500'],
});

export const viewport: Viewport = {
  themeColor: '#07070F',
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  title: landingConfig.meta.title,
  description: landingConfig.meta.description,
  metadataBase: new URL('https://aetheryon.systems'),
  alternates: { canonical: landingConfig.meta.canonical },
  openGraph: {
    title: landingConfig.meta.title,
    description: landingConfig.meta.description,
    url: landingConfig.meta.canonical,
    siteName: 'AETHERYON Systems',
    images: [{ url: landingConfig.meta.ogImage, width: 1200, height: 630 }],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: landingConfig.meta.title,
    description: landingConfig.meta.description,
    images: [landingConfig.meta.ogImage],
  },
  keywords: ['API REST', 'integración de sistemas', 'AETHERYON', 'ABRAHADABRA'],
  icons: { apple: '/apple-touch-icon.png' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="relative min-h-screen bg-dark-900 font-body text-ink-100 antialiased">
        <Atmosphere />
        <ScrollTrajectory />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
