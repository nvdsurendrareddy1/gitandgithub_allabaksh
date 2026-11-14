import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : 0,
  // Must include 'blob' on CI so merge-reports has files to merge
  reporter: process.env.CI ? [['github'], ['blob']] : 'html',
  use: {
    baseURL: process.env.BASE_URL || 'https://tutorialsninja.com/demo/',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
});
