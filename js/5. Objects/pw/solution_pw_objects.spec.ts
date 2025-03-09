/** TASK - Modifying an Object in a Playwright Test
 *
 * 1. Create a Playwright test.
 *
 * 2. Declare an object with multiple key-value pairs. Including correct login and incorrect password
 *
 * 3. Try to login with incorrect password
 *
 * 4. Modify the password object during the test.
 *
 * 5. Use the updated object values in test actions.
 *
 * 6. Use assertions to verify expected behavior after modification.
 *
 * 💡 **Clue:** Try updating a value dynamically, like changing user input data before submitting a form.
 */

import { test, expect } from "@playwright/test";

test.describe("Suite Object Test", () => {
  const usernameInput = '[data-test="username"]';
  const passwordInput = '[data-test="password"]';
  const loginButton = '[data-test="login-button"]';
  const item = '[id="item_4_title_link"]';
  const error = '[data-test="error"]';

  const loginData = { login: "standard_user", pass: "wrongPasse" };

  test("Object Test", async ({ page }) => {
    await page.goto("/");
    await page.locator(usernameInput).fill(loginData.login);
    await page.locator(passwordInput).fill(loginData.pass);
    await page.locator(loginButton).click();
    await expect(page.locator(error)).toBeVisible();
    loginData.pass = "secret_sauce";
    await page.locator(passwordInput).clear();
    await page.locator(passwordInput).fill(loginData.pass);
    await page.locator(loginButton).click();
    await expect(page.locator(item)).toBeVisible();
  });
});
