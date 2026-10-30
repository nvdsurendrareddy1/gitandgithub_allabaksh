import { test, expect } from '@playwright/test';

test('has title', async ({ page, browser, context, browserName }) => {
  await page.goto('https://playwright.de/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page, browser, context, browserName }) => {
  await page.goto('https://playwright.de/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
