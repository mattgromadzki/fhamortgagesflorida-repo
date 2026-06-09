import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://fhamortgagesflorida.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  output: "hybrid",
  adapter: cloudflare()
});