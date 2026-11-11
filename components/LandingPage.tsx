import { Hero } from '@/components/Hero';
import { StatsBar } from '@/components/StatsBar';
import { Problem } from '@/components/Problem';
import { Solution } from '@/components/Solution';
import { UseCases } from '@/components/UseCases';
import { Build } from '@/components/Build';
import { Methodology } from '@/components/Methodology';
import { Handoff } from '@/components/Handoff';
import { Scope } from '@/components/Scope';
import { Timeline } from '@/components/Timeline';
import { Investment } from '@/components/Investment';
import { Comparison } from '@/components/Comparison';
import { FAQ } from '@/components/FAQ';
import { Differentiation } from '@/components/Differentiation';
import { Engine } from '@/components/Engine';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { StickyCTA } from '@/components/StickyCTA';
import { landingConfig } from '@/config/landing';

export function LandingPage() {
  const site = landingConfig.siteUrl;
  const { author, meta, price } = landingConfig;
  const org = { '@id': `${site}/#organization` };
  const person = { '@id': `${site}/#author` };
  const service = { '@id': `${meta.canonical}#service` };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': org['@id'],
        name: author.company,
        url: site,
        sameAs: [author.companyUrl],
        founder: person,
      },
      {
        '@type': 'Person',
        '@id': person['@id'],
        name: author.name,
        jobTitle: author.role,
        url: author.linkedin,
        sameAs: [author.linkedin],
        worksFor: org,
      },
      {
        '@type': 'WebSite',
        '@id': `${site}/#website`,
        url: site,
        name: author.company,
        inLanguage: 'es-AR',
        publisher: org,
      },
      {
        '@type': 'WebPage',
        '@id': `${meta.canonical}#webpage`,
        url: meta.canonical,
        name: meta.title,
        description: meta.description,
        inLanguage: 'es-AR',
        isPartOf: { '@id': `${site}/#website` },
        about: service,
        breadcrumb: { '@id': `${meta.canonical}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${meta.canonical}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: author.company, item: site },
          { '@type': 'ListItem', position: 2, name: 'REST API / Integración', item: meta.canonical },
        ],
      },
      {
        '@type': 'Service',
        '@id': service['@id'],
        name: 'REST API / Integración de sistemas',
        serviceType: 'API Development / System Integration',
        description:
          'Diseño e implementación de APIs REST para conectar sistemas, aplicaciones y datos.',
        provider: org,
        areaServed: [{ '@type': 'Country', name: 'Argentina' }, 'Global'],
        audience: { '@type': 'BusinessAudience', name: 'Empresas y equipos de tecnología' },
        offers: {
          '@type': 'Offer',
          url: landingConfig.cta.primary.href,
          priceCurrency: price.currency,
          priceSpecification: {
            '@type': 'PriceSpecification',
            minPrice: price.amount,
            priceCurrency: price.currency,
            valueAddedTaxIncluded: false,
          },
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Qué podemos construir',
          itemListElement: landingConfig.offerings.map((name) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name },
          })),
        },
      },
    ],
  };

  return (
    <>
      <script
        id="ld-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <StickyCTA />
      <main className="pt-14 md:pt-16">
        <Hero />
        <StatsBar />
        <Problem />
        <Solution />
        <UseCases />
        <Build />
        <Methodology />
        <Handoff />
        <Scope />
        <Timeline />
        <Investment />
        <Comparison />
        <FAQ />
        <Differentiation />
        <Engine />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
