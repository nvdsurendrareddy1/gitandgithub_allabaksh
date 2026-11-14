import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : 0,
  reporter: [['html'], ['github']],
  use: {
    baseURL: process.env.BASE_URL || 'https://tutorialsninja.com/demo/',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
});
