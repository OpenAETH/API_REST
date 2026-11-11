export const landingConfig = {
  siteUrl: 'https://apirestlanding.vercel.app',
  meta: {
    title: 'API REST e integración de sistemas | AETHERYON Systems',
    description:
      'Desarrollo de APIs REST para conectar tus sistemas, aplicaciones y datos. Código fuente, documentación y pruebas. Desde USD 5.000, contratación directa.',
    ogTitle: 'Conectá tus sistemas con una API REST a medida',
    ogDescription:
      'Diseño e implementación de APIs REST e integraciones: autenticación, webhooks, documentación y entrega técnica completa. Desde USD 5.000 · contratación directa, sin reunión previa.',
    ogAlt:
      'Nave AETHERYON propulsada por el motor H2 ABRAHADABRA: API REST que conecta CRM, ERP, pagos e IA',
    canonical: 'https://apirestlanding.vercel.app/',
    keywords: [
      'API REST',
      'desarrollo de API REST',
      'integración de sistemas',
      'integrar CRM y ERP',
      'integración de APIs de terceros',
      'webhooks',
      'desarrollador de APIs Argentina',
      'AETHERYON',
    ],
  },
  offerings: [
    'REST APIs',
    'Integraciones',
    'API Gateway / Integration Layer',
    'Data Transformation',
    'Authentication',
    'Webhooks',
    'Documentation',
  ],
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