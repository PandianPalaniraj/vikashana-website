import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

const staticHtmlPages = ['privacy-policy', 'terms']

export default defineConfig({
  plugins: [
    react(),
    {
      // Dev: rewrite /privacy-policy → /privacy-policy.html
      name: 'static-html-rewrite',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          const page = staticHtmlPages.find(p => req.url === `/${p}` || req.url.startsWith(`/${p}?`))
          if (page) req.url = `/${page}.html`
          next()
        })
      },
      // Build: copy privacy-policy.html → privacy-policy/index.html
      // so nginx try_files $uri/ finds it without nginx config changes
      closeBundle() {
        for (const page of staticHtmlPages) {
          const src  = path.resolve(__dirname, `public/${page}.html`)
          const dir  = path.resolve(__dirname, `dist/${page}`)
          const dest = path.join(dir, 'index.html')
          if (fs.existsSync(src)) {
            fs.mkdirSync(dir, { recursive: true })
            fs.copyFileSync(src, dest)
          }
        }
      },
    },
  ],
  server: { port: 5175 },
})
