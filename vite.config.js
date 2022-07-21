import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import jsConfig from './jsconfig.json'

const alias = Object.entries(jsConfig.compilerOptions.paths)
  .reduce((obj, [alias, [target]]) => {
    const t = target.replace('/*', '').replace(/\.\w{2,}$/, '')
    const k = alias.replace('/*', '')
    const v = resolve(__dirname, t)

    obj[k] = v
    return obj
  }, {})

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: { alias }
})
