type EventName =
  | 'landing_view'
  | 'cta_primary_click'
  | 'cta_secondary_click'
  | 'clientsnda_exit'
  | 'faq_open';

interface EventPayload {
  [key: string]: string | number | boolean | undefined;
}

export function track(event: EventName, payload: EventPayload = {}) {
  if (typeof window === 'undefined') return;

  const data = {
    event,
    timestamp: new Date().toISOString(),
    path: window.location.pathname,
    ...getUtmParams(),
    ...payload,
  };

  // Reemplazar por endpoint real (GA4, Plausible, Segment, etc.)
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log('[analytics]', data);
  }

  // window.gtag?.('event', event, data);
  // window.plausible?.(event, { props: data });
}

function getUtmParams() {
  if (typeof window === 'undefined') return {};
  const stored = sessionStorage.getItem('aetheryon_utm');
  return stored ? JSON.parse(stored) : {};
}