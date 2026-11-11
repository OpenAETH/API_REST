import type { MetadataRoute } from 'next';
import { landingConfig } from '@/config/landing';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${landingConfig.siteUrl}/sitemap.xml`,
    host: landingConfig.siteUrl,
  };
}
