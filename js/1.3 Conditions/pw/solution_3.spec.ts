/** TASK - Using an If Statement in a Playwright Test
 *
 * 1. Create a Playwright test.
 *
 * 2. Use an `if` statement to check a condition during the test.
 *
 * 3. Perform different actions based on whether the condition is true or false.
 *
 * 4. Use assertions to verify the expected behavior.
 *
 * 💡 **Clue:** Create a verification for the user password, and if the password is incorrect, fail the test
 */

import { test, expect } from "@playwright/test";

test.describe("Suite Conditions Test", () => {
  const usernameInput = '[data-test="username"]';
  const passwordInput = '[data-test="password"]';
  const loginButton = '[data-test="login-button"]';
  const item = '[id="item_4_title_link"]';
  const login = "standard_user";
  const pass = "secret_sauce";

  test("Condition Test", async ({ page }) => {
    await page.goto("/");
    await page.locator(usernameInput).fill(login);
    if (pass == "secret_sauce") {
      await page.locator(passwordInput).fill(pass);
      await page.locator(loginButton).click();
      await expect(page.locator(item)).toBeVisible();
    } else {
      throw new Error("Wrong Password");
    }
  });
});
