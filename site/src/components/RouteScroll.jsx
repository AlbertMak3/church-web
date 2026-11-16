import { useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/* Every sub-page opens at its top, and the arrival is animated rather than
   jumped. Clicking the page you are already on glides back up instead of doing
   nothing; a link to a section lands on that section; back and forward keep
   the browser's own restoration. The motion itself lives in styles.css
   (`route-arrive`, `route-photo-settle`, keyed on html.route-arriving). */

/* Must outlast the longest arrival animation in styles.css (the hero photo
   settle), or the class is dropped mid-motion and the settle snaps. */
const ARRIVAL_MS = 1900
const HOLD_FRAMES = 6

const reduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* html carries `scroll-behavior: smooth`, so a bare scrollTo() would glide.
   While anything here needs an instant move the rule is switched off inline,
   counted, and handed back once the last holder is done. */
let holds = 0
let heldBehavior = ''

function beginHold() {
  const root = document.documentElement
  if (holds++ === 0) {
    heldBehavior = root.style.scrollBehavior
    root.style.scrollBehavior = 'auto'
  }
}

function endHold() {
  const root = document.documentElement
  if (--holds <= 0) {
    holds = 0
    root.style.scrollBehavior = heldBehavior
  }
}

let holdToken = 0

/* An instant jump to the top, held for a few frames: right after the commit the
   new page is still laying out, and a correction landing on the next frame would
   otherwise leave the reader partway down. */
function jumpToTop({ hold = true } = {}) {
  beginHold()
  window.scrollTo(0, 0)

  if (!hold) {
    endHold()
    return
  }

  const token = ++holdToken
  let frames = 0
  const step = () => {
    if (token !== holdToken) {
      endHold()
      return
    }
    if (window.scrollY !== 0) window.scrollTo(0, 0)
    if (++frames < HOLD_FRAMES) {
      requestAnimationFrame(step)
    } else {
      endHold()
    }
  }
  requestAnimationFrame(step)
}

function glideToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: reduced() ? 'auto' : 'smooth' })
}

function glideToHash(hash, instant) {
  let id = hash.slice(1)
  try {
    id = decodeURIComponent(id)
  } catch {
    /* a malformed escape keeps the raw id */
  }
  const target = document.getElementById(id)
  if (!target) return false
  const still = instant || reduced()
  target.scrollIntoView({ behavior: still ? 'auto' : 'smooth', block: 'start' })
  return true
}

let arrivalTimer = 0

/* One owner for the arrival: a class on <html> the new page's main animates
   from. Added in the layout effect (before the frame is painted), dropped once
   the motion is over so it never lingers. */
function startArrival() {
  const root = document.documentElement
  root.classList.add('route-arriving')
  window.clearTimeout(arrivalTimer)
  arrivalTimer = window.setTimeout(() => {
    root.classList.remove('route-arriving')
  }, ARRIVAL_MS)
}

/* Registered at import, so it runs before react-router's own popstate handler
   and the update it triggers can never outrun this flag. */
let cameFromHistory = false
if (typeof window !== 'undefined') {
  window.addEventListener('popstate', () => {
    cameFromHistory = true
  })
}

export default function RouteScroll() {
  const { pathname, hash, key } = useLocation()
  const firstRun = useRef(true)
  const previousPath = useRef(pathname)
  const handledKey = useRef(null)

  useLayoutEffect(() => {
    /* One history entry is handled once, whatever else re-renders. */
    if (handledKey.current === key) return
    handledKey.current = key

    const isFirst = firstRun.current
    const samePath = !isFirst && previousPath.current === pathname
    const isPop = cameFromHistory
    cameFromHistory = false
    firstRun.current = false
    previousPath.current = pathname

    /* Back and forward: the browser puts the reader back where they were. */
    if (isPop) return

    /* A section was asked for: land on it, never on the top of the page. */
    if (hash) {
      if (!samePath) {
        jumpToTop({ hold: false })
        startArrival()
        if (isFirst) {
          glideToHash(hash, true)
          return
        }
      }
      /* Two frames let the new page lay out before the glide starts. */
      let inner = 0
      const outer = requestAnimationFrame(() => {
        inner = requestAnimationFrame(() => {
          if (!glideToHash(hash)) glideToTop()
        })
      })
      return () => {
        cancelAnimationFrame(outer)
        cancelAnimationFrame(inner)
      }
    }

    /* Same page, clicked again: the one case with a visible trip upwards. */
    if (samePath) {
      glideToTop()
      return
    }

    jumpToTop()
    startArrival()
  }, [pathname, hash, key])

  return null
}
