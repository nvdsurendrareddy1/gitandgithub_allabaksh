import { test, expect, chromium } from "@playwright/test";

test("browser, browsercontext and page example", async ({ page, context, browser }) => {

   // const browser = await chromium.launch({ headless:false });
   // const context = await browser.newContext();

  //  const page = await context.newPage();

    await page.goto("");
    await expect(page).toHaveTitle(/Store/);

    await context.close();
    await browser.close();
});