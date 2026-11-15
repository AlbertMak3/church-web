// Line icons, 24px grid, stroke-based so one colour drives them all.
const P = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }

function Path({ d, extra }) {
  return <path d={d} {...P} {...extra} />
}

export function Icon({ name, className = '' }) {
  const common = { viewBox: '0 0 24 24', className, 'aria-hidden': 'true', focusable: 'false' }
  switch (name) {
    case 'cross':
      return <svg {...common}><Path d="M12 3v18M6 9h12" /></svg>
    case 'calendar':
      return <svg {...common}><Path d="M4 6.5h16v13H4zM4 10.5h16M8 3.5v4M16 3.5v4" /></svg>
    case 'people':
      return <svg {...common}><Path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5M16 5.5a2.6 2.6 0 0 1 0 5M17.5 14.8c2.1.7 3.5 2.4 3.5 5.2" /></svg>
    case 'heart':
      return <svg {...common}><Path d="M12 20s-7-4.3-7-9a3.9 3.9 0 0 1 7-2.4A3.9 3.9 0 0 1 19 11c0 4.7-7 9-7 9z" /></svg>
    case 'chapel':
      return <svg {...common}><Path d="M12 3v4M10 5h4M5 21V11l7-4 7 4v10M5 21h14M10 21v-5h4v5" /></svg>
    case 'book':
      return <svg {...common}><Path d="M12 6.5C10.3 5 8 4.5 4 4.5v13c4 0 6.3.5 8 2 1.7-1.5 4-2 8-2v-13c-4 0-6.3.5-8 2zM12 6.5v13" /></svg>
    case 'pray':
      return <svg {...common}><Path d="M12 4c1.4 1.7 2 3.4 2 5.2L17 21H7l3-11.8C10 7.4 10.6 5.7 12 4zM7.5 9.5 4 15M16.5 9.5 20 15" /></svg>
    case 'info':
      return <svg {...common}><Path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v6M12 7.6v.1" /></svg>
    case 'pin':
      return <svg {...common}><Path d="M12 21s6.5-6.1 6.5-10.5a6.5 6.5 0 1 0-13 0C5.5 14.9 12 21 12 21z" /><Path d="M12 12.6a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4z" /></svg>
    case 'phone':
      return <svg {...common}><Path d="M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5z" /></svg>
    case 'map':
      return <svg {...common}><Path d="M9 4 3 6.5v13L9 17l6 2.5 6-2.5v-13L15 6.5 9 4zM9 4v13M15 6.5v13" /></svg>
    case 'mail':
      return <svg {...common}><Path d="M3.5 6h17v12h-17zM3.5 7l8.5 6 8.5-6" /></svg>
    case 'arrow':
      return <svg {...common}><Path d="M5 12h13M13 6.5l5.5 5.5L13 17.5" /></svg>
    case 'dot':
      return <svg {...common}><circle cx="12" cy="12" r="7" {...P} /></svg>
    case 'instagram':
      return <svg {...common}><Path d="M7.5 3.5h9a4 4 0 0 1 4 4v9a4 4 0 0 1-4 4h-9a4 4 0 0 1-4-4v-9a4 4 0 0 1 4-4z" /><Path d="M12 8.4a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2zM17.2 6.9v.1" /></svg>
    default:
      return null
  }
}

// Dove mark — a bird in silhouette, wings raised, facing right.
export function Mark({ className = '' }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" focusable="false" fill="currentColor">
      <ellipse cx="17" cy="23" rx="9.5" ry="6" transform="rotate(-16 17 23)" />
      <circle cx="26.2" cy="16.2" r="3.4" />
      <path d="M29.2 15.6 L34 16.6 L29.2 18.1 Z" />
      <path d="M15.5 19.2 C13 12.4 13.6 6.6 19.4 3.4 C18 9.2 19.6 14.6 22.6 18.4 Z" />
      <path d="M9 25.4 L1.8 28.8 L8.4 31.6 Z" />
    </svg>
  )
}
