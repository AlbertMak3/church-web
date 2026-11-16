import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { I18nProvider, storedLocale } from './i18n/index.jsx'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Times from './pages/Times.jsx'
import Facilities from './pages/Facilities.jsx'
import Contact from './pages/Contact.jsx'
import Privacy from './pages/Privacy.jsx'
import NotFound from './pages/NotFound.jsx'

/* One set of page routes, mounted twice: at the root for Chinese and under /en
   for English. Every link inside a page goes through lp(), so the same
   components serve both. */
const pageRoutes = key => [
  <Route key={`${key}-home`} index element={<Home />} />,
  <Route key={`${key}-about`} path="about" element={<About />} />,
  <Route key={`${key}-times`} path="times" element={<Times />} />,
  <Route key={`${key}-facilities`} path="facilities" element={<Facilities />} />,
  <Route key={`${key}-gallery`} path="gallery" element={<Navigate to="../facilities" replace />} />,
  <Route key={`${key}-contact`} path="contact" element={<Contact />} />,
  <Route key={`${key}-privacy`} path="privacy" element={<Privacy />} />,
  <Route key={`${key}-any`} path="*" element={<NotFound />} />
]

export default function App() {
  return (
    <Routes>
      <Route path="/en" element={<I18nProvider locale="en"><Layout /></I18nProvider>}>
        {pageRoutes('en')}
      </Route>
      <Route path="/" element={<RememberedLocale><I18nProvider locale="zh"><Layout /></I18nProvider></RememberedLocale>}>
        {pageRoutes('zh')}
      </Route>
    </Routes>
  )
}

/* A reader who once chose English gets English when they open the bare domain,
   and a reader who chose Chinese is left alone. Deep links never redirect: they
   keep the language they were written in. */
function RememberedLocale({ children }) {
  const { pathname } = useLocation()
  if (pathname === '/' && storedLocale() === 'en') return <Navigate to="/en" replace />
  return children
}
