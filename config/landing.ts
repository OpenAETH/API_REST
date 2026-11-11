export const landingConfig = {
  meta: {
    title: 'REST API / Integración de sistemas · AETHERYON Systems',
    description:
      'Diseñamos e implementamos APIs REST para conectar sistemas, aplicaciones y datos. Desde USD 5.000. Contratación directa sin reunión previa.',
    canonical: 'https://apirestlanding.vercel.app/',
    ogImage: '/og-api.png',
  },
  author: {
    company: 'AETHERYON Systems',
    companyUrl: 'https://aetheryon.onrender.com/',
    name: 'Guido Miguel Gómez',
    role: 'Specific Consultant',
    country: 'ARG',
    id: '2039765690',
    linkedin: 'https://www.linkedin.com/in/guido-agraound/',
    credit: 'Build with 🧡 for AETHERYON.',
  },
  engine: {
    name: 'ABRAHADABRA',
    short: 'Motor H₂',
    tagline: 'El motor de hidrógeno de AETHERYON',
  },
  price: {
    amount: 5000,
    currency: 'USD',
    label: 'desde',
  },
  cta: {
    primary: {
      label: 'Comenzar integración',
      href: 'https://clientsnda.onrender.com',
    },
    secondary: {
      label: 'Consultar si aplica a mi caso',
      href: 'https://calendly.com/AETHERYON',
    },
    finalSecondary: {
      label: 'Necesito evaluar mi caso',
      href: 'https://calendly.com/AETHERYON',
    },
  },
  links: {
    clientsNda: {
      label: 'Clients NDA',
      href: 'https://clientsnda.onrender.com',
      description: 'Onboarding, NDA y contratación',
      status: 'operativo',
    },
    calendly: {
      label: 'Calendly',
      href: 'https://calendly.com/AETHERYON',
      description: 'Agenda comercial',
      status: 'operativo',
    },
    portal: {
      label: 'AETHERYON Portal',
      href: 'https://aetheryon.onrender.com/',
      description: 'Portal institucional',
      status: 'operativo',
    },
    restApi: {
      label: 'REST API',
      href: 'https://aeth-portal.onrender.com/APIREST_Proyect',
      description: 'Producto · REST API / Integración',
      status: 'operativo',
    },
  },
  locales: ['es', 'en'] as const,
  currentLocale: 'es' as const,
} as const;

export type LandingConfig = typeof landingConfig;