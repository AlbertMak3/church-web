// Placeholder art for the hero bands: wooden slats, a warm glow, a cross.
// Swap for a real photograph by replacing <HeroArt /> with <img src="/img/hero.jpg" />.
export default function HeroArt({ className = 'hero__art' }) {
  const tones = ['#9c7a52', '#a8845a', '#946f49', '#b08a60', '#8f6b46', '#a37f56', '#9a7850', '#ac8760']

  return (
    <svg className={className} viewBox="0 0 1200 420" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="glow" cx="72%" cy="42%" r="52%">
          <stop offset="0%" stopColor="#f6e6cd" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#f6e6cd" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1200" height="420" fill="#8e6f4a" />
      {Array.from({ length: 26 }).map((_, i) => (
        <rect
          key={i}
          x={i * 46 + (i % 2 ? 3 : 0)}
          y="0"
          width={i % 2 ? 40 : 42}
          height="420"
          fill={tones[i % tones.length]}
          opacity={0.55 + (i % 5) * 0.08}
        />
      ))}
      <rect width="1200" height="420" fill="url(#glow)" />
      {/* arched window light, not a cross */}
      <g className="hero-cross" opacity="0.30">
        <path d="M812 330 V150 a68 68 0 0 1 136 0 v180 z" fill="#fdf6ea" opacity=".45" />
        <path d="M880 82 v248 M812 190 h136" stroke="#fdf6ea" strokeWidth="7" opacity=".5" />
      </g>
    </svg>
  )
}
