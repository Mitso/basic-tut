import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

//import { https } from 'node:https'
import fs  from 'fs'

const opts = {
  key: fs.readFileSync('../../server.key'),
  cert: fs.readFileSync('../../server.crt')
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  https: opts
})
