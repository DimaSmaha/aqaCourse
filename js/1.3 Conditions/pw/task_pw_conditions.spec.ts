/** TASK - Using an IF Statement in a Playwright Test
 *
 * 1. Create a Playwright test.
 *
 * 2. Use an `if` statement to verify that user password is correct.
 *
 * 3. Perform different actions based on whether the condition is true or false.
 *
 * 4. Use assertions to verify the expected behavior.
 *
 * 💡 **Clue:** Create a verification for the user password,
 *    - IF user password is correct, then login and verify that user is logged in
 *    - IF the password is incorrect, fail the test by throwing error
 */

import { test, expect } from "@playwright/test";

test.describe("Suite Conditions Test", () => {
  const usernameInput = '[data-test="username"]';
  const passwordInput = '[data-test="password"]';
  const loginButton = '[data-test="login-button"]';
  const item = '[id="item_4_title_link"]';
  const login = "standard_user";
  const pass = "secret_sauce";
  const pass2 = "wrong_pass";

  test("Conditions Test", async ({ page }) => {
    await page.goto("/");
    await page.locator(usernameInput).fill(login);
    await page.locator(passwordInput).fill(pass); // verify that password Is correct
    await page.locator(loginButton).click();
    await expect(page.locator(item)).toBeVisible();
  });

  test("Conditions Test 2", async ({ page }) => {
    await page.goto("/");
    await page.locator(usernameInput).fill(login);
    await page.locator(passwordInput).fill(pass2); // use the same if block here, and check the test behavior
    await page.locator(loginButton).click();
    await expect(page.locator(item)).toBeVisible();
  });
});
