import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'REST API / Integración · AETHERYON Systems',
    short_name: 'AETHERYON API',
    description: 'APIs REST e integración de sistemas a medida.',
    start_url: '/API',
    display: 'standalone',
    lang: 'es-AR',
    background_color: '#07070F',
    theme_color: '#07070F',
    icons: [
      { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
    ],
  };
}
