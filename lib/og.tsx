import { ImageResponse } from 'next/og';

export const ogSize = { width: 1200, height: 630 };

/** Imagen social 1200×630 generada en build (sin archivos binarios). */
export function renderOg() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          background: '#07070F',
          backgroundImage:
            'radial-gradient(circle at 80% 45%, rgba(0,229,192,0.28), rgba(7,7,15,0) 55%), radial-gradient(circle at 10% 100%, rgba(176,102,255,0.22), rgba(7,7,15,0) 50%)',
          color: '#F5F5FB',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: 740,
            padding: '0 24px 0 72px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 28 }}>
            <div
              style={{
                display: 'flex',
                padding: '8px 18px',
                border: '1px solid rgba(0,229,192,0.5)',
                borderRadius: 999,
                color: '#33ECD0',
                fontSize: 22,
              }}
            >
              AETHERYON Systems · REST API / Integración
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.04,
              letterSpacing: -2,
              marginBottom: 26,
            }}
          >
            Tus sistemas no tienen que trabajar aislados.
          </div>
          <div style={{ display: 'flex', fontSize: 28, color: '#C7C8DA', marginBottom: 34 }}>
            APIs REST e integraciones, documentadas y mantenibles.
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                display: 'flex',
                padding: '12px 24px',
                borderRadius: 12,
                background: '#00E5C0',
                color: '#07070F',
                fontSize: 26,
                fontWeight: 700,
                marginRight: 22,
                whiteSpace: 'nowrap',
              }}
            >
              Desde USD 5.000
            </div>
            <div style={{ display: 'flex', fontSize: 24, color: '#FFD166', whiteSpace: 'nowrap' }}>
              Contratación directa
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', width: 460, alignItems: 'center', justifyContent: 'center' }}>
          <svg width="400" height="540" viewBox="0 0 480 570">
            <defs>
              <linearGradient id="h" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#25253F" />
                <stop offset="1" stopColor="#0D0D1A" />
              </linearGradient>
              <linearGradient id="fo" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#B066FF" stopOpacity="0.9" />
                <stop offset="1" stopColor="#B066FF" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="fm" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#33ECD0" />
                <stop offset="1" stopColor="#00E5C0" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="fc" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#F5F5FB" />
                <stop offset="1" stopColor="#7EE8FF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <g fill="none" strokeWidth="2">
              <path d="M70 116 C 84 150, 110 150, 130 170" stroke="#00E5C0" />
              <path d="M72 312 C 90 290, 112 285, 130 262" stroke="#FFD166" />
              <path d="M410 104 C 396 140, 372 145, 350 170" stroke="#B066FF" />
              <path d="M408 300 C 392 285, 368 282, 350 262" stroke="#00E5C0" />
            </g>
            <rect x="34" y="76" width="60" height="40" rx="12" fill="#0D0D1A" stroke="#00E5C0" />
            <rect x="386" y="64" width="60" height="40" rx="12" fill="#0D0D1A" stroke="#B066FF" />
            <rect x="26" y="312" width="60" height="40" rx="12" fill="#0D0D1A" stroke="#FFD166" />
            <rect x="394" y="300" width="60" height="40" rx="12" fill="#0D0D1A" stroke="#00E5C0" />
            <path d="M172 200h28M172 232h28M280 200h28M280 232h28" stroke="#3C3C60" strokeWidth="3" />
            <rect x="112" y="170" width="60" height="92" rx="18" fill="#1B1B30" stroke="#FFD166" />
            <rect x="308" y="170" width="60" height="92" rx="18" fill="#1B1B30" stroke="#B066FF" />
            <path d="M200 404 C 204 440, 226 462, 240 530 C 254 462, 276 440, 280 404 Z" fill="url(#fo)" />
            <path d="M212 404 C 216 432, 232 448, 240 496 C 248 448, 264 432, 268 404 Z" fill="url(#fm)" />
            <path d="M226 404 C 228 422, 236 432, 240 460 C 244 432, 252 422, 254 404 Z" fill="url(#fc)" />
            <rect x="214" y="332" width="52" height="14" rx="3" fill="#1B1B30" stroke="#3C3C60" />
            <path d="M218 346 L262 346 L284 404 Q 240 416, 196 404 Z" fill="#141425" stroke="#00E5C0" />
            <path d="M200 262 L158 340 L200 322 Z" fill="#1B1B30" stroke="#00E5C0" />
            <path d="M280 262 L322 340 L280 322 Z" fill="#1B1B30" stroke="#00E5C0" />
            <path
              d="M240 36 C 262 62, 280 96, 280 140 L 280 322 Q 280 332 270 332 L 210 332 Q 200 332 200 322 L 200 140 C 200 96, 218 62, 240 36 Z"
              fill="url(#h)"
              stroke="#00E5C0"
              strokeWidth="2"
            />
            <circle cx="240" cy="196" r="30" fill="#07070F" stroke="#00E5C0" strokeWidth="2" />
            <rect x="200" y="280" width="80" height="34" rx="6" fill="#0D0D1A" stroke="#B066FF" />
          </svg>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
