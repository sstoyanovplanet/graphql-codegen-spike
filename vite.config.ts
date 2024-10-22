import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      // '/graphql': {
      //   target: "https://countries.trevorblades.com/graphql",
      //   changeOrigin: true,
      //   rewrite: (path) => {

      //     console.log(path);
      //     path.replace(/^\/fallback/, '')
      //   }

      // },
      '/graphql': 'https://countries.trevorblades.com/graphql',

    }
  }
})
