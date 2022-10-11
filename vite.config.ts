/** @type {import('vite').UserConfig} */
import { defineConfig, loadEnv, UserConfigExport, ConfigEnv } from 'vite'
import { join } from 'path'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

function resolve(dir: string) {
  return join(__dirname, dir)
}

export default ({ mode }: ConfigEnv): UserConfigExport => {
  return defineConfig({
    server: {
      host: '0.0.0.0',
      proxy: {
        '/api': {
          target: 'target path', // 线上
          // rewrite: (path:any) => path.replace(/^\/api/, ''),
          changeOrigin: true,
          ws: true
        }
      }
    },
    plugins: [
      vue(),
      vueSetupExtend(),
      viteCompression({
        ext: '.gz',
        algorithm: 'gzip',
        deleteOriginFile: false
      })],
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    build: {
      target: 'es2015',
      outDir: 'dist'
    }
  })
}
