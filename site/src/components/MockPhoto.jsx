// Mock photographs, drawn as SVG so the pages read as finished before the real
// shots exist. Warm interiors only: window light, furniture, no people.
// Replace <MockPhoto variant="hall" /> with <img src="/img/hall-1.jpg" alt="..." />
// when the photographs arrive.
//
// The label comes from content.js (already translated there): every drawing is
// announced as the room it stands in for, never as its own generic caption.

import { useI18n } from '../i18n/index.jsx'

const T = {
  wall: '#e7d8c6',
  wall2: '#dccbb6',
  floor: '#cdb695',
  floor2: '#c2a882',
  wood: '#b08d6a',
  wood2: '#9a7752',
  glow: '#fdf3e2',
  light: '#f7e8d2',
  soft: '#f2e5d4',
  green: '#8d9c7c'
}

function Frame({ children, alt }) {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label={alt} preserveAspectRatio="xMidYMid slice" className="mock">
      <rect width="400" height="300" fill={T.wall} />
      {children}
      <rect width="400" height="300" fill="url(#vignette)" opacity=".35" />
    </svg>
  )
}

const Defs = () => (
  <defs>
    <radialGradient id="glow" cx="50%" cy="38%" r="62%">
      <stop offset="0%" stopColor={T.glow} stopOpacity=".95" />
      <stop offset="100%" stopColor={T.glow} stopOpacity="0" />
    </radialGradient>
    <linearGradient id="vignette" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#8b6b47" stopOpacity=".18" />
      <stop offset="60%" stopColor="#8b6b47" stopOpacity="0" />
      <stop offset="100%" stopColor="#6b4f33" stopOpacity=".22" />
    </linearGradient>
  </defs>
)

const Chairs = ({ y = 232, n = 4, from = 90, step = 54, w = 30, h = 26 }) => (
  <>
    {Array.from({ length: n }).map((_, i) => (
      <g key={i}>
        <rect x={from + i * step} y={y} width={w} height={h} rx="3" fill={T.wood} opacity={0.85 - i * 0.05} />
        <rect x={from + i * step + 3} y={y - 18} width={w - 6} height={18} rx="2" fill={T.wood2} opacity={0.7 - i * 0.05} />
      </g>
    ))}
  </>
)

export default function MockPhoto({ variant = 'hall', label }) {
  const { t } = useI18n()
  const alt = label || t.facilities.diagramAlt

  switch (variant) {
    case 'hall':
      return (
        <Frame alt={alt}>
          <Defs />
          <rect width="400" height="300" fill="url(#glow)" />
          {/* arched window */}
          <path d="M150 96 h100 v130 h-100 z" fill={T.light} opacity=".9" />
          <path d="M150 96 a50 50 0 0 1 100 0 v10 h-100 z" fill={T.light} opacity=".9" />
          <path d="M200 56 v170 M150 150 h100" stroke={T.wall2} strokeWidth="3" opacity=".55" />
          {/* floor */}
          <rect y="232" width="400" height="68" fill={T.floor} opacity=".85" />
          <Chairs y={236} n={5} from={64} step={58} w={34} h={28} />
          {/* cross light shaft */}
          <rect x="196" y="60" width="8" height="80" fill="#fff" opacity=".22" />
          <rect x="176" y="96" width="48" height="8" fill="#fff" opacity=".22" />
        </Frame>
      )

    case 'lounge':
      return (
        <Frame alt={alt}>
          <Defs />
          <rect width="400" height="300" fill="url(#glow)" />
          <rect y="220" width="400" height="80" fill={T.floor} opacity=".8" />
          {/* table */}
          <rect x="120" y="196" width="160" height="12" rx="4" fill={T.wood} />
          <rect x="134" y="208" width="10" height="46" fill={T.wood2} opacity=".8" />
          <rect x="256" y="208" width="10" height="46" fill={T.wood2} opacity=".8" />
          {/* chairs */}
          <rect x="86" y="186" width="34" height="10" rx="3" fill={T.wood2} />
          <rect x="86" y="150" width="10" height="44" rx="3" fill={T.wood2} opacity=".8" />
          <rect x="280" y="186" width="34" height="10" rx="3" fill={T.wood2} />
          <rect x="304" y="150" width="10" height="44" rx="3" fill={T.wood2} opacity=".8" />
          {/* plant */}
          <ellipse cx="352" cy="176" rx="18" ry="26" fill={T.green} opacity=".55" />
          <rect x="344" y="196" width="16" height="26" rx="4" fill={T.wood2} opacity=".7" />
          {/* window */}
          <rect x="30" y="70" width="70" height="110" rx="4" fill={T.light} opacity=".85" />
          <rect x="60" y="70" width="4" height="110" fill={T.wall2} opacity=".5" />
        </Frame>
      )

    case 'quiet':
      return (
        <Frame alt={alt}>
          <Defs />
          <rect width="400" height="300" fill="url(#glow)" />
          <rect y="226" width="400" height="74" fill={T.floor} opacity=".8" />
          <rect x="250" y="60" width="90" height="150" rx="4" fill={T.light} opacity=".9" />
          <rect x="293" y="60" width="4" height="150" fill={T.wall2} opacity=".5" />
          {/* single chair */}
          <rect x="120" y="192" width="60" height="12" rx="4" fill={T.wood} />
          <rect x="124" y="140" width="12" height="56" rx="5" fill={T.wood2} opacity=".85" />
          <rect x="130" y="204" width="8" height="34" fill={T.wood2} opacity=".7" />
          <rect x="162" y="204" width="8" height="34" fill={T.wood2} opacity=".7" />
          {/* light pool */}
          <ellipse cx="200" cy="248" rx="120" ry="26" fill="#fff" opacity=".16" />
        </Frame>
      )

    case 'multi':
      return (
        <Frame alt={alt}>
          <Defs />
          <rect width="400" height="300" fill="url(#glow)" />
          <rect y="214" width="400" height="86" fill={T.floor} opacity=".8" />
          <rect x="70" y="186" width="260" height="14" rx="4" fill={T.wood} />
          <rect x="88" y="200" width="12" height="52" fill={T.wood2} opacity=".8" />
          <rect x="300" y="200" width="12" height="52" fill={T.wood2} opacity=".8" />
          <Chairs y={176} n={3} from={96} step={76} w={40} h={22} />
          <rect x="30" y="60" width="340" height="8" rx="4" fill={T.wall2} opacity=".5" />
          <rect x="120" y="40" width="160" height="20" rx="6" fill={T.light} opacity=".7" />
        </Frame>
      )

    case 'kids':
      return (
        <Frame alt={alt}>
          <Defs />
          <rect width="400" height="300" fill="url(#glow)" />
          <rect y="210" width="400" height="90" fill={T.floor} opacity=".75" />
          <ellipse cx="200" cy="236" rx="130" ry="40" fill={T.soft} opacity=".9" />
          <ellipse cx="200" cy="236" rx="130" ry="40" fill="none" stroke={T.wood} strokeWidth="3" opacity=".35" />
          <rect x="150" y="196" width="100" height="10" rx="4" fill={T.wood} />
          <rect x="160" y="206" width="8" height="26" fill={T.wood2} opacity=".75" />
          <rect x="232" y="206" width="8" height="26" fill={T.wood2} opacity=".75" />
          <circle cx="118" cy="222" r="14" fill={T.wood2} opacity=".55" />
          <circle cx="286" cy="228" r="12" fill={T.green} opacity=".45" />
          <rect x="284" y="70" width="80" height="90" rx="4" fill={T.light} opacity=".85" />
        </Frame>
      )

    case 'baby':
      return (
        <Frame alt={alt}>
          <Defs />
          <rect width="400" height="300" fill="url(#glow)" />
          <rect y="222" width="400" height="78" fill={T.floor} opacity=".72" />
          {/* cot */}
          <rect x="130" y="150" width="140" height="70" rx="8" fill={T.wood} opacity=".8" />
          <rect x="138" y="160" width="124" height="52" rx="6" fill={T.light} opacity=".85" />
          {Array.from({ length: 7 }).map((_, i) => (
            <rect key={i} x={144 + i * 18} y="160" width="3" height="52" fill={T.wood2} opacity=".45" />
          ))}
          <ellipse cx="200" cy="140" rx="34" ry="12" fill={T.soft} opacity=".9" />
          <rect x="330" y="120" width="40" height="120" rx="4" fill={T.light} opacity=".6" />
        </Frame>
      )

    case 'mirror':
      return (
        <Frame alt={alt}>
          <Defs />
          <rect width="400" height="300" fill="url(#glow)" />
          <rect y="230" width="400" height="70" fill={T.floor2} opacity=".7" />
          <rect x="90" y="50" width="220" height="170" rx="6" fill={T.light} opacity=".9" />
          <rect x="90" y="50" width="220" height="170" rx="6" fill="none" stroke={T.wood} strokeWidth="5" opacity=".5" />
          <rect x="196" y="50" width="6" height="170" fill={T.wall2} opacity=".35" />
          {/* barre */}
          <rect x="60" y="150" width="280" height="6" rx="3" fill={T.wood2} opacity=".7" />
          <rect x="70" y="156" width="6" height="80" fill={T.wood2} opacity=".55" />
          <rect x="324" y="156" width="6" height="80" fill={T.wood2} opacity=".55" />
        </Frame>
      )

    case 'corridor':
      return (
        <Frame alt={alt}>
          <Defs />
          <rect width="400" height="300" fill={T.wall2} />
          <polygon points="0,300 400,300 320,190 80,190" fill={T.floor} opacity=".8" />
          <polygon points="80,190 320,190 300,60 100,60" fill={T.wall} opacity=".9" />
          <rect x="176" y="70" width="48" height="110" rx="4" fill={T.light} opacity=".75" />
          <rect x="0" y="120" width="120" height="8" fill={T.wood} opacity=".4" />
          <rect x="280" y="120" width="120" height="8" fill={T.wood} opacity=".4" />
        </Frame>
      )

    case 'entrance':
      return (
        <Frame alt={alt}>
          <Defs />
          <rect width="400" height="300" fill="url(#glow)" />
          <rect y="236" width="400" height="64" fill={T.floor} opacity=".75" />
          <rect x="140" y="80" width="120" height="160" rx="4" fill={T.wood} opacity=".75" />
          <rect x="150" y="90" width="46" height="140" rx="3" fill={T.light} opacity=".55" />
          <rect x="204" y="90" width="46" height="140" rx="3" fill={T.light} opacity=".45" />
          <circle cx="242" cy="162" r="3.5" fill={T.wood2} />
          <rect x="176" y="46" width="48" height="16" rx="4" fill={T.soft} opacity=".9" />
        </Frame>
      )

    case 'window':
    default:
      return (
        <Frame alt={alt}>
          <Defs />
          <rect width="400" height="300" fill="url(#glow)" />
          <rect x="70" y="50" width="260" height="180" rx="6" fill={T.light} opacity=".95" />
          <rect x="70" y="50" width="260" height="180" rx="6" fill="none" stroke={T.wood} strokeWidth="6" opacity=".55" />
          <rect x="198" y="50" width="6" height="180" fill={T.wood} opacity=".45" />
          <rect x="70" y="138" width="260" height="6" fill={T.wood} opacity=".45" />
          <ellipse cx="140" cy="120" rx="34" ry="24" fill={T.green} opacity=".4" />
          <ellipse cx="262" cy="108" rx="26" ry="20" fill={T.green} opacity=".3" />
          <rect y="230" width="400" height="70" fill={T.floor} opacity=".7" />
        </Frame>
      )
  }
}
