import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages project sites use /<repository-name>/
  // Change this to your repository name, e.g. '/likkitha-portfolio/'.
  // If deploying to a user site named <username>.github.io, use '/'.
  base: '/likkitha-portfolio/',
})
