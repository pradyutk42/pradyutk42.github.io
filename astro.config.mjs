import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Set `site` to your deployed URL (important for GitHub Pages).
  // If you deploy to pradyutk42.github.io (a user site), leave `base` unset.
  // If you deploy to a project site like pradyutk42.github.io/mysite, set base: '/mysite'.
  site: 'https://pradyutk42.github.io',
  // base: '/',
  build: {
    assets: 'assets',
  },
});
