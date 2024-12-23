// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  
  vite: {
    optimizeDeps: {
      include: ['react/jsx-runtime'], // Include React dependencies to prevent build-time errors
    },
    build: {
      target: 'esnext', // Use ESNext features if your environment supports it
      rollupOptions: {
        output: {
          format: 'esm', // Ensure proper handling of ES modules during the build
        },
      },
    },
  },
});
