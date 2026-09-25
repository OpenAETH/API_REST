const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

export function captureUtm() {
  if (typeof window === 'undefined') return;

  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};

  UTM_KEYS.forEach((key) => {
    const value = params.get(key);
    if (value) utm[key] = value;
  });

  if (Object.keys(utm).length > 0) {
    sessionStorage.setItem('aetheryon_utm', JSON.stringify(utm));
  }
}

export function getUtmQuery(): string {
  if (typeof window === 'undefined') return '';
  const stored = sessionStorage.getItem('aetheryon_utm');
  if (!stored) return '';
  const utm = JSON.parse(stored);
  return new URLSearchParams(utm).toString();
}

export function decorateHref(href: string): string {
  const query = getUtmQuery();
  if (!query) return href;
  const separator = href.includes('?') ? '&' : '?';
  return `${href}${separator}${query}`;
}