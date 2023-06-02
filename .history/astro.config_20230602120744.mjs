import { defineConfig } from 'astro/config';
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: 'https://machijunblog.netlify.app/',
  integrations: [image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), tailwind(), sitemap()]
});