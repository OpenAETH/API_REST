import type { MetadataRoute } from 'next';
import { landingConfig } from '@/config/landing';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${landingConfig.siteUrl}/API`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];
}