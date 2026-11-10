import type { Metadata } from 'next';

import { LandingPage } from '@/components/LandingPage';
import { landingConfig } from '@/config/landing';

export const metadata: Metadata = {
  title: landingConfig.meta.title,
  description: landingConfig.meta.description,
  alternates: { canonical: landingConfig.meta.canonical },
};

export default function LandingAPIPage() {
  return <LandingPage />;
}
