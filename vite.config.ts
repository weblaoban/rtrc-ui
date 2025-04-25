import { fileURLToPath, URL } from 'node:url'
import {globSync} from 'glob'
import path from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
// https://vitejs.dev/config/
export default defineConfig({
  server:{
    hmr:{
      overlay:false
    }
  },
  plugins: [
    vue(),
    VueSetupExtend(),
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: Object.fromEntries(
          globSync(['components/**/*.ts']).map(file=>[
            path.relative('components',file.slice(0,file.length-path.extname(file).length)),
            fileURLToPath(new URL(file,import.meta.url))
          ])
      ),
      // 确保外部化处理依赖
      preserveEntrySignatures:'allow-extension',
      external: ['vue'],
      output:{
        format:'es',
        entryFileNames:"[name].mjs",
        assetFileNames:"[name].[ext]",
        globals: {
          vue: 'Vue',
        },
      }
      // output: [
      // {
      // 输出目录
      // format:'es',
      // entryFileNames:(chunkInfo=>{
      //   console.log(chunkInfo)
      //   // "[name].mjs"
      //   return `111.mjs`
      // }),
      // assetFileNames:"[hash].[ext]",
      // preserveModules:true,
      // exports:'named',
      // 输出的globals配置
      // globals: {
      //   vue: 'Vue',
      // },
      // },
      //   {
      //   // 输出目录
      //   format:'cjs',
      //   entryFileNames:"[name].js",
      //   assetFileNames:"[name].[ext]",
      //   preserveModules:true,
      //   exports:'named',
      //   // 输出的globals配置
      //   globals: {
      //     vue: 'Vue',
      //   },
      // }
      // ],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
