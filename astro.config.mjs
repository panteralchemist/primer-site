import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://davidprimer.com', // change to your real domain when you have one
  integrations: [tailwind()],
});
