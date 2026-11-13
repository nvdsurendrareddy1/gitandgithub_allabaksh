import { test, expect } from "@playwright/test";

test("Github Example", async ({ page }) => {

    await page.goto("https://tutorialsninja.com/demo/");
    await expect(page).toHaveTitle(/Your Store/);


});