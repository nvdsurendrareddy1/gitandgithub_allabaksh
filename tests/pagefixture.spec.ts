import { test, expect, chromium } from "@playwright/test";

test("browser, browsercontext and page example", async ({ page, context, browser }) => {

  // const browser = await chromium.launch({ headless:false });
  // const context = await browser.newContext();

  //  const page = await context.newPage();

  await page.goto("https://tutorialsninja.com/demo/");
  await expect(page).toHaveTitle(/Your Store/);

  await context.close();
  await browser.close();
});