import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://icu-corporation.github.io',
  base: '/ICU-gazeinto-homepage',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
