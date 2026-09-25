import type { Metadata } from 'next';
import Script from 'next/script';

import { Hero } from '@/components/Hero';
import { Problem } from '@/components/Problem';
import { Solution } from '@/components/Solution';
import { UseCases } from '@/components/UseCases';
import { Build } from '@/components/Build';
import { Deliverables } from '@/components/Deliverables';
import { Methodology } from '@/components/Methodology';
import { Requirements } from '@/components/Requirements';
import { Scope } from '@/components/Scope';
import { Investment } from '@/components/Investment';
import { Timeline } from '@/components/Timeline';
import { Exclusions } from '@/components/Exclusions';
import { FAQ } from '@/components/FAQ';
import { Differentiation } from '@/components/Differentiation';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { StickyCTA } from '@/components/StickyCTA';

import { landingConfig } from '@/config/landing';

export const metadata: Metadata = {
  title: landingConfig.meta.title,
  description: landingConfig.meta.description,
  alternates: { canonical: landingConfig.meta.canonical },
};

export default function LandingAPIPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'REST API / Integración de sistemas',
    provider: {
      '@type': 'Organization',
      name: 'AETHERYON Systems',
      url: 'https://aetheryon.systems',
    },
    description:
      'Diseño e implementación de APIs REST para conectar sistemas, aplicaciones y datos.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: '5000',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: '5000',
        priceCurrency: 'USD',
        valueAddedTaxIncluded: false,
      },
    },
    areaServed: 'Global',
    serviceType: 'API Development / System Integration',
  };

  return (
    <>
      <Script
        id="ld-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StickyCTA />
      <main className="pt-14 md:pt-16">
        <Hero />
        <Problem />
        <Solution />
        <UseCases />
        <Build />
        <Deliverables />
        <Methodology />
        <Requirements />
        <Scope />
        <Investment />
        <Timeline />
        <Exclusions />
        <FAQ />
        <Differentiation />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
