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
    build: { outDir: 'dist' },
    server: { allowedHosts }
  }
})
