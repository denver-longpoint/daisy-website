import { defineConfig } from 'astro/config';

// Same domain as the Squarespace site — critical for SEO preservation.
export default defineConfig({
  site: 'https://www.dayscottages.rentals',
  trailingSlash: 'never',
  build: { format: 'file' }, // /house-rules -> house-rules.html, matches existing flat URLs
});
