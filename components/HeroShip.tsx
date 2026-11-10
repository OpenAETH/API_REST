/**
 * Nave AETHERYON: un casco central (REST API) con pods de datos y apps
 * acoplados, módulos externos conectados por conductos de datos y, atrás,
 * el motor de hidrógeno ABRAHADABRA. Todo en SVG inline, sin dependencias.
 */
export function HeroShip() {
  return (
    <div className="animate-hover relative mx-auto w-full max-w-[480px]">
      <svg
        viewBox="0 0 480 570"
        role="img"
        aria-label="Nave AETHERYON interconectada, propulsada por el motor de hidrógeno ABRAHADABRA"
        className="h-auto w-full overflow-visible"
      >
        <title>Nave AETHERYON propulsada por el motor H₂ ABRAHADABRA</title>
        <defs>
          <linearGradient id="ship-hull" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#25253F" />
            <stop offset="0.5" stopColor="#1B1B30" />
            <stop offset="1" stopColor="#0D0D1A" />
          </linearGradient>
          <linearGradient id="ship-pod" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1B1B30" />
            <stop offset="1" stopColor="#0D0D1A" />
          </linearGradient>
          <linearGradient id="ship-bell" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#25253F" />
            <stop offset="1" stopColor="#07070F" />
          </linearGradient>
          <linearGradient id="ship-flame-outer" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#B066FF" stopOpacity="0.85" />
            <stop offset="0.6" stopColor="#B066FF" stopOpacity="0.25" />
            <stop offset="1" stopColor="#B066FF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ship-flame-mid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#33ECD0" stopOpacity="0.95" />
            <stop offset="0.7" stopColor="#00E5C0" stopOpacity="0.3" />
            <stop offset="1" stopColor="#00E5C0" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ship-flame-core" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#F5F5FB" />
            <stop offset="0.55" stopColor="#7EE8FF" stopOpacity="0.8" />
            <stop offset="1" stopColor="#7EE8FF" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="ship-aura" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#00E5C0" stopOpacity="0.22" />
            <stop offset="1" stopColor="#00E5C0" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="ship-thrust" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#00E5C0" stopOpacity="0.28" />
            <stop offset="0.6" stopColor="#B066FF" stopOpacity="0.1" />
            <stop offset="1" stopColor="#B066FF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Aura y anillos orbitales */}
        <circle cx="240" cy="230" r="215" fill="url(#ship-aura)" />
        <ellipse
          cx="240"
          cy="236"
          rx="214"
          ry="74"
          transform="rotate(-18 240 236)"
          fill="none"
          stroke="#2A2A45"
          strokeWidth="1"
          strokeDasharray="2 7"
        />
        <ellipse
          cx="240"
          cy="236"
          rx="176"
          ry="56"
          transform="rotate(14 240 236)"
          fill="none"
          stroke="#1D1D30"
          strokeWidth="1"
        />

        {/* Conductos de datos: módulos externos ⇄ pods */}
        <g fill="none" strokeLinecap="round" strokeWidth="1.5">
          <path d="M70 116 C 84 150, 110 150, 130 170" stroke="#00E5C0" strokeOpacity="0.18" strokeWidth="4" />
          <path d="M70 116 C 84 150, 110 150, 130 170" stroke="#00E5C0" className="conduit animate-flow" />
          <path d="M72 312 C 90 290, 112 285, 130 262" stroke="#FFD166" strokeOpacity="0.18" strokeWidth="4" />
          <path d="M72 312 C 90 290, 112 285, 130 262" stroke="#FFD166" className="conduit animate-flow" />
          <path d="M410 104 C 396 140, 372 145, 350 170" stroke="#B066FF" strokeOpacity="0.2" strokeWidth="4" />
          <path d="M410 104 C 396 140, 372 145, 350 170" stroke="#B066FF" className="conduit animate-flow" />
          <path d="M408 300 C 392 285, 368 282, 350 262" stroke="#00E5C0" strokeOpacity="0.18" strokeWidth="4" />
          <path d="M408 300 C 392 285, 368 282, 350 262" stroke="#00E5C0" className="conduit animate-flow" />
        </g>

        {/* Módulos externos (sistemas conectados) */}
        <g className="font-mono" fontSize="11" letterSpacing="2" textAnchor="middle">
          <rect x="34" y="76" width="60" height="40" rx="12" fill="#0D0D1A" stroke="#00E5C0" strokeOpacity="0.6" />
          <text x="64" y="100" fill="#33ECD0">CRM</text>
          <rect x="386" y="64" width="60" height="40" rx="12" fill="#0D0D1A" stroke="#B066FF" strokeOpacity="0.6" />
          <text x="416" y="88" fill="#C48CFF">ERP</text>
          <rect x="26" y="312" width="60" height="40" rx="12" fill="#0D0D1A" stroke="#FFD166" strokeOpacity="0.6" />
          <text x="56" y="336" fill="#FFDD85">PAY</text>
          <rect x="394" y="300" width="60" height="40" rx="12" fill="#0D0D1A" stroke="#00E5C0" strokeOpacity="0.6" />
          <text x="424" y="324" fill="#33ECD0">IA</text>
        </g>

        {/* Puntales de acople pods ⇄ casco */}
        <g stroke="#3C3C60" strokeWidth="2" strokeLinecap="round">
          <path d="M172 200h28M172 232h28M280 200h28M280 232h28" />
        </g>
        <g fill="#00E5C0">
          <circle cx="200" cy="200" r="3" className="animate-beacon" />
          <circle cx="200" cy="232" r="3" className="animate-beacon" style={{ animationDelay: '0.6s' }} />
          <circle cx="280" cy="200" r="3" className="animate-beacon" style={{ animationDelay: '1.2s' }} />
          <circle cx="280" cy="232" r="3" className="animate-beacon" style={{ animationDelay: '1.8s' }} />
        </g>

        {/* Pods laterales */}
        <g className="font-mono" fontSize="9" letterSpacing="2" textAnchor="middle">
          <rect x="112" y="170" width="60" height="92" rx="18" fill="url(#ship-pod)" stroke="#FFD166" strokeOpacity="0.5" />
          <text x="142" y="206" fill="#FFD166">DATA</text>
          <rect x="308" y="170" width="60" height="92" rx="18" fill="url(#ship-pod)" stroke="#B066FF" strokeOpacity="0.55" />
          <text x="338" y="206" fill="#C48CFF">APPS</text>
        </g>
        <g>
          {[222, 234, 246].map((y, i) => (
            <g key={y}>
              <circle cx="142" cy={y} r="2" fill="#FFD166" className="animate-twinkle" style={{ animationDelay: `${i * 0.5}s` }} />
              <circle cx="338" cy={y} r="2" fill="#B066FF" className="animate-twinkle" style={{ animationDelay: `${0.25 + i * 0.5}s` }} />
            </g>
          ))}
        </g>

        {/* Motor ABRAHADABRA: llama de hidrógeno */}
        <ellipse cx="240" cy="470" rx="110" ry="84" fill="url(#ship-thrust)" />
        <g className="animate-flame svg-origin-top">
          <path d="M200 404 C 204 440, 226 462, 240 530 C 254 462, 276 440, 280 404 Z" fill="url(#ship-flame-outer)" />
        </g>
        <g className="animate-flame svg-origin-top" style={{ animationDelay: '0.15s' }}>
          <path d="M212 404 C 216 432, 232 448, 240 496 C 248 448, 264 432, 268 404 Z" fill="url(#ship-flame-mid)" />
        </g>
        <g className="animate-flame-core svg-origin-top">
          <path d="M226 404 C 228 422, 236 432, 240 460 C 244 432, 252 422, 254 404 Z" fill="url(#ship-flame-core)" />
        </g>
        <g fill="#33ECD0">
          <circle cx="222" cy="500" r="1.6" className="animate-twinkle" />
          <circle cx="258" cy="512" r="2" className="animate-twinkle" style={{ animationDelay: '0.8s' }} />
          <circle cx="240" cy="538" r="1.6" className="animate-twinkle" style={{ animationDelay: '1.6s' }} />
          <circle cx="230" cy="552" r="1.2" className="animate-twinkle" style={{ animationDelay: '2.4s' }} />
          <circle cx="252" cy="558" r="1.4" className="animate-twinkle" style={{ animationDelay: '3.2s' }} />
        </g>

        {/* Tobera y collar */}
        <rect x="214" y="332" width="52" height="14" rx="3" fill="#1B1B30" stroke="#3C3C60" />
        <path d="M218 346 L262 346 L284 404 Q 240 416, 196 404 Z" fill="url(#ship-bell)" stroke="#00E5C0" strokeOpacity="0.55" />
        <path d="M226 356 L254 356M222 368 L258 368M216 382 L264 382" stroke="#3C3C60" strokeWidth="1" />
        <ellipse cx="240" cy="404" rx="40" ry="7" fill="#33ECD0" fillOpacity="0.55" />

        {/* Aletas */}
        <path d="M200 262 L158 340 L200 322 Z" fill="url(#ship-pod)" stroke="#00E5C0" strokeOpacity="0.4" />
        <path d="M280 262 L322 340 L280 322 Z" fill="url(#ship-pod)" stroke="#00E5C0" strokeOpacity="0.4" />

        {/* Casco principal */}
        <path
          d="M240 36 C 262 62, 280 96, 280 140 L 280 322 Q 280 332 270 332 L 210 332 Q 200 332 200 322 L 200 140 C 200 96, 218 62, 240 36 Z"
          fill="url(#ship-hull)"
          stroke="#00E5C0"
          strokeOpacity="0.55"
        />
        <path d="M200 150H280M200 300H280M240 84V150" stroke="#3C3C60" strokeWidth="1" strokeOpacity="0.8" />
        <circle cx="240" cy="52" r="2.6" fill="#FFD166" className="animate-beacon" />

        {/* Núcleo API */}
        <circle cx="240" cy="196" r="30" fill="#07070F" stroke="#00E5C0" strokeOpacity="0.8" />
        <circle cx="240" cy="196" r="22" fill="none" stroke="#00E5C0" strokeOpacity="0.35" strokeDasharray="3 5" />
        <text x="240" y="201" textAnchor="middle" fontSize="13" letterSpacing="3" fill="#33ECD0" className="font-mono">
          API
        </text>

        {/* Ventanas */}
        {[212, 234, 256].map((x, i) => (
          <rect key={x} x={x} y="256" width="12" height="6" rx="3" fill="#00E5C0" className="animate-twinkle" style={{ animationDelay: `${i * 0.7}s` }} />
        ))}

        {/* Tanque H₂ */}
        <rect x="200" y="280" width="80" height="34" rx="6" fill="#0D0D1A" stroke="#B066FF" strokeOpacity="0.5" />
        <circle cx="240" cy="297" r="12" fill="none" stroke="#B066FF" strokeOpacity="0.8" />
        <text x="240" y="301" textAnchor="middle" fontSize="11" fill="#C48CFF" className="font-mono">
          H₂
        </text>

        {/* Rótulo del motor */}
        <path d="M284 392 H326 L340 378" fill="none" stroke="#FFD166" strokeOpacity="0.6" strokeWidth="1" />
        <circle cx="284" cy="392" r="2" fill="#FFD166" />
        <text x="346" y="382" fontSize="11" letterSpacing="2.2" fill="#FFD166" className="font-mono">
          ABRAHADABRA
        </text>
        <text x="346" y="397" fontSize="8" letterSpacing="1.4" fill="#8D8FA8" className="font-mono">
          MOTOR H₂ · EN LÍNEA
        </text>
        <text x="30" y="456" fontSize="8.5" letterSpacing="1.8" fill="#5C5E78" className="font-mono">
          // CAPA DE INTEGRACIÓN
        </text>
      </svg>
    </div>
  );
}
