// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  build: {
    format: "preserve",
  },
  site: "https://n3bula.lol",
  integrations: [sitemap()],
});
