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
  metadataBase: new URL(landingConfig.siteUrl),
  title: landingConfig.meta.title,
  description: landingConfig.meta.description,
  applicationName: 'AETHERYON Systems',
  authors: [{ name: landingConfig.author.name, url: landingConfig.author.linkedin }],
  creator: landingConfig.author.name,
  publisher: landingConfig.author.company,
  keywords: [...landingConfig.meta.keywords],
  category: 'technology',
  alternates: {
    canonical: landingConfig.meta.canonical,
    languages: {
      'es-AR': landingConfig.meta.canonical,
      'x-default': landingConfig.meta.canonical,
    },
  },
  openGraph: {
    title: landingConfig.meta.ogTitle,
    description: landingConfig.meta.ogDescription,
    url: landingConfig.meta.canonical,
    siteName: 'AETHERYON Systems',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: landingConfig.meta.ogTitle,
    description: landingConfig.meta.ogDescription,
  },
  formatDetection: { telephone: false, email: false, address: false },
  icons: {
    icon: [{ url: '/favicon.ico?v=2', sizes: 'any' }],
    shortcut: '/favicon.ico?v=2',
    apple: '/apple-touch-icon.png?v=2',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="relative min-h-screen bg-dark-900 font-body text-ink-100 antialiased">
        <Atmosphere />
        <ScrollTrajectory />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
