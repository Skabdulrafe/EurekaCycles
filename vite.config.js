// import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'
// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//   ],
// })

// // import { defineConfig } from 'vite'
// // import react from '@vitejs/plugin-react'
// // import tailwindcss from '@tailwindcss/vite'

// // export default defineConfig({
// //   plugins: [
// //     react(),
// //     tailwindcss(),
// //   ],
// //   build: {
// //     outDir: 'dist', // Vercel expects this (default for Vite)
// //   },
// //   server: {
// //     port: 3000, // local dev only
// //   },
// //   base:process.env.VITE_BASE_PATH||"EurekaCycles",
// // })
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    chunkSizeWarningLimit: 1000, // raises limit to 1000kb
  },
})
