import { test, expect } from "@playwright/test";

test.describe("Test Test", () => {
  const usernameInput = '[data-test="username"]';
  const passwordInput = '[data-test="password"]';
  const loginButton = '[data-test="login-button"]';
  const error = '[data-test="error"]';
  const item = '[id="item_4_title_link"]';
  const login = "standard_user";
  let pass = "wrong";

  test("Test Test", async ({ page }) => {
    await page.goto("/");
    await page.locator(usernameInput).fill(login);
    await page.locator(passwordInput).fill(pass);
    await page.locator(loginButton).click();
    await expect(page.locator(error)).toBeVisible();
    pass = "secret_sauce";
    await page.locator(passwordInput).clear();
    await page.locator(passwordInput).fill(pass);
    await page.locator(loginButton).click();
    await expect(page.locator(item)).toBeVisible();
  });
});
