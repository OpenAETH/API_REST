import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import { landingConfig } from '@/config/landing';
import { Atmosphere } from '@/components/Atmosphere';
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
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="relative min-h-screen bg-void-900 font-body text-ink-100 antialiased">
        <Atmosphere />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
