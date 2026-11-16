import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles.css'

// Routes are written from the site root ("/about"), so when the build is served
// from a sub-path (GitHub Pages project site: /church-web/) the router needs to
// know about it. Vite exposes that as BASE_URL: "/" locally, "/church-web/" in
// the Pages build. Strip the trailing slash, which react-router does not want.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
