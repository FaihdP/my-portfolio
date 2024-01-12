import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react({include: ["**/react/*"]})],
  site: 'https://faihdp.github.io',
  base: '/my-portfolio',
  compressHTML: true,
  output: 'static'
});