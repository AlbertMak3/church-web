// Locale plumbing for the two-language site.
//
// The Chinese site lives at the root (/about, /times …), the English site under
// /en (/en/about, /en/times …). One page component serves both: it reads its
// copy from `useI18n().t` and builds links with `lp('/about')`, which adds the
// prefix when the locale is `en`. Copy lives in zh.js and en.js; see the header
// of zh.js for the shape.
//
// The section pages are identical in both locales, so this is a locale prefix,
// not a translation of the markup. URLs at the root stay exactly as they were,
// which keeps existing links and search results valid.

import { createContext, Fragment, useContext, useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import zh from './zh.js'
import en from './en.js'

const dictionaries = { zh, en }
const STORAGE_KEY = 'kwc-locale'

export const LOCALES = ['zh', 'en']
export const DEFAULT_LOCALE = 'zh'

/* A data string may be plain, or a { zh, en } pair (content.js uses pairs). */
export function pick(value, locale) {
  if (value && typeof value === 'object' && !Array.isArray(value) && ('zh' in value || 'en' in value)) {
    return value[locale] ?? value.zh
  }
  return value
}

/* '/about' → '/en/about' in English; unchanged in Chinese. */
export function localePath(locale, path = '/') {
  const clean = path.startsWith('/') ? path : `/${path}`
  if (locale !== 'en') return clean
  return clean === '/' ? '/en' : `/en${clean}`
}

/* '/en/about' → '/about'. Used for the language switch, breadcrumbs and meta. */
export function stripLocale(pathname) {
  if (pathname === '/en' || pathname === '/en/') return '/'
  const stripped = pathname.replace(/^\/en(?=\/)/, '')
  return stripped || '/'
}

export function otherLocale(locale) {
  return locale === 'en' ? 'zh' : 'en'
}

/* The reader's last choice, so the switch is remembered next visit. */
export function storedLocale() {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

export function rememberLocale(locale) {
  try {
    localStorage.setItem(STORAGE_KEY, locale)
  } catch {
    /* private mode: the choice simply is not remembered */
  }
}

const I18nContext = createContext(null)

export function I18nProvider({ locale, children }) {
  const value = useMemo(() => {
    const t = dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE]
    return {
      locale,
      t,
      lp: path => localePath(locale, path),
      tr: value => pick(value, locale),
      switchPath: pathname => localePath(otherLocale(locale), stripLocale(pathname))
    }
  }, [locale])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n() must be used inside <I18nProvider>')
  return ctx
}

export function useT() {
  return useI18n().t
}

export function useLocale() {
  return useI18n().locale
}

/* Renders a dictionary string that contains `{slot}` markers, so a link or a
   <strong> can sit inside a translated sentence without splitting the copy. */
export function Rich({ text, slots = {} }) {
  const parts = String(text).split(/(\{\w+\})/)
  return (
    <>
      {parts.map((part, i) => {
        const match = /^\{(\w+)\}$/.exec(part)
        if (!match) return part || null
        return <Fragment key={i}>{slots[match[1]] ?? ''}</Fragment>
      })}
    </>
  )
}

/* ---------- document head ---------- */

const headLink = (rel, href, extra = {}) => {
  const selector = ['link', `[rel="${rel}"]`, extra.hreflang ? `[hreflang="${extra.hreflang}"]` : ''].join('')
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    if (extra.hreflang) el.hreflang = extra.hreflang
    document.head.appendChild(el)
  }
  el.href = href
}

const headMeta = (key, attr, content) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}

const absolute = path => {
  // The router sits under BASE_URL on the GitHub Pages build (/church-web/).
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  try {
    return new URL(`${base}${path}`, window.location.origin).href
  } catch {
    return path
  }
}

/* Keeps <html lang>, the title, the description and the hreflang set in step
   with the page being read. Runs on every route and locale change. */
export function useDocumentLocale() {
  const { locale, t } = useI18n()
  const { pathname } = useLocation()

  useEffect(() => {
    const route = stripLocale(pathname)
    const meta = t.meta[route] || {
      title: `${t.notFound.metaTitle} · ${t.brand.full}`,
      description: t.meta['/'].description
    }

    const root = document.documentElement
    root.lang = locale === 'en' ? 'en' : 'zh-Hant'
    root.dataset.locale = locale

    document.title = meta.title
    headMeta('description', 'name', meta.description)
    headMeta('og:title', 'property', meta.title)
    headMeta('og:description', 'property', meta.description)
    headMeta('og:locale', 'property', locale === 'en' ? 'en_GB' : 'zh_HK')

    headLink('canonical', absolute(localePath(locale, route)))
    headLink('alternate', absolute(localePath('zh', route)), { hreflang: 'zh-Hant' })
    headLink('alternate', absolute(localePath('en', route)), { hreflang: 'en' })
    headLink('alternate', absolute(localePath('zh', route)), { hreflang: 'x-default' })
  }, [locale, t, pathname])
}
