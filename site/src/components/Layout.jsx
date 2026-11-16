import { NavLink, Outlet, Link, useLocation } from 'react-router-dom'
import { church } from '../content.js'
import { useI18n, useDocumentLocale, localePath, stripLocale, otherLocale, rememberLocale } from '../i18n/index.jsx'
import { Mark, Icon } from './Icons.jsx'
import RouteScroll from './RouteScroll.jsx'

export default function Layout() {
  const { locale, t, lp, tr } = useI18n()
  const { pathname } = useLocation()

  useDocumentLocale()

  // The switch keeps the reader on the page they were reading, in the other language.
  const nextLocale = otherLocale(locale)
  const switchTo = localePath(nextLocale, stripLocale(pathname))

  return (
    <>
      <RouteScroll />
      <a className="skip" href="#main">{t.nav.skip}</a>

      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" to={lp('/')} aria-label={t.brand.full}>
            <span className="brand__seal"><Mark className="brand__mark" /></span>
            <span className="brand__type">
              <span className="brand__name">{t.brand.primary}</span>
              <span className="brand__sub">{t.brand.sub}</span>
            </span>
          </Link>

          <nav className="nav" aria-label={t.nav.aria}>
            {t.nav.items.map(l => (
              <NavLink key={l.to} to={lp(l.to)} end={l.end}>{l.label}</NavLink>
            ))}
          </nav>

          <div className="header-tools">
            <Link
              className="lang-switch"
              to={switchTo}
              onClick={() => rememberLocale(nextLocale)}
              aria-label={t.lang.switchAria}
              lang={t.lang.tag}
            >
              {t.lang.switchLabel}
            </Link>
            <a className="header-cta" href={church.mapUrl} target="_blank" rel="noreferrer">
              <Icon name="pin" className="header-cta__icon" />
              <span>{t.nav.locationCta}</span>
            </a>
          </div>
        </div>
      </header>

      <main id="main" key={pathname}>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-brand__seal"><Mark /></span>
            <div>
              <p className="footer-brand__name">{t.brand.full}</p>
              <p className="footer-brand__alt" lang={nextLocale}>{t.brand.nameEn}</p>
              <p className="footer-contact">
                {tr(church.address)}<br />
                {church.phone} · {t.footer.fax} {church.fax} · <a href={`mailto:${church.email}`}>{church.email}</a>
              </p>
            </div>
          </div>

          <div className={`footer-slogan footer-slogan--${locale}`}>
            <p className="footer-slogan__lead" lang={locale === 'en' ? 'en' : 'zh-Hant'}>{t.home.slogan}</p>
            <p className="footer-slogan__sub" lang={nextLocale}>{t.home.secondLine}</p>
          </div>

          <div className="footer-nav">
            <nav className="footer-links" aria-label={t.nav.footerAria}>
              {t.nav.items.map(l => (
                <Link key={l.to} to={lp(l.to)}>{l.label}</Link>
              ))}
            </nav>
            <p className="footer-note">
              <Link to={lp('/privacy')}>{t.footer.privacy}</Link>
              <span aria-hidden="true"> · </span>
              <Link to={`${lp('/privacy')}#photo-credits`}>{t.footer.credits}</Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
