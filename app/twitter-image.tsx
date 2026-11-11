import { landingConfig } from '@/config/landing';
import { ogSize, renderOg } from '@/lib/og';

export const alt = landingConfig.meta.ogAlt;
export const size = ogSize;
export const contentType = 'image/png';

export default function Image() {
  return renderOg();
}
