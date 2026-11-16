import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Extra hosts the dev server may answer for (e.g. a Tailscale name used to
  // open the site from a phone). Machine-specific, so it lives in .env.local,
  // which git ignores; leave it unset and Vite keeps its default rules.
  const env = loadEnv(mode, process.cwd(), '')
  const allowedHosts = (env.DEV_ALLOWED_HOSTS || '')
    .split(',')
    .map((host) => host.trim())
    .filter(Boolean)

  return {
    plugins: [react()],
    // A hosted demo lives under a sub-path: GitHub Pages serves a project site
    // at /church-web/, so CI builds with VITE_BASE=/church-web/. Local dev and
    // plain `npm run build` keep the root base.
    base: env.VITE_BASE || '/',
    build: { outDir: 'dist' },
    server: { allowedHosts }
  }
})
