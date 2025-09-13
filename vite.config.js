import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig(({ mode }) => {
  const isCanvasBuild = mode === 'canvas'

  return {
    esbuild: {
      jsxFactory: 'van.tags.createElement',
      jsxFragment: 'van.tags.Fragment'
    },
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'src/main.ts'),
          html: resolve(__dirname, 'index.html')
        },
        output: {
          entryFileNames: isCanvasBuild
            ? 'canvas-[name].js'
            : 'html-[name].js'
        }
      },
      outDir: isCanvasBuild ? 'dist/canvas' : 'dist/html'
    },
    resolve: {
      alias: {
        components: resolve(
          __dirname,
          isCanvasBuild ? 'src/components/index.canvas.js' : 'src/components/index.html.js'
        )
      }
    }
  }
})