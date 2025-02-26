/** TASK - Using a For Loop to Iterate Through an Array in a Playwright Test
 *
 * 1. Create a Playwright test.
 *
 * 2. Declare an array containing multiple passwords. e.g ['wrong1', 'wrong2','secret_sauce']
 *
 * 3. Use a `for` loop to iterate through the array.
 *
 * 4. Perform an action inside the loop using each array value.
 *
 * 5. Use assertions to verify expected behavior for each iteration.
 *
 * 💡 **Clue:** Create a loop, that checks all the passwords, and make sure that user logs in only at the last password
 */

import { test, expect } from "@playwright/test";

test.describe("Suite Loop Test", () => {
  const usernameInput = '[data-test="username"]';
  const passwordInput = '[data-test="password"]';
  const loginButton = '[data-test="login-button"]';
  const item = '[id="item_4_title_link"]';
  const error = '[data-test="error"]';
  const login = "standard_user";
  const passArr = ["wrong1", "wrong2", "secret_sauce"];

  test("Loop Test", async ({ page }) => {
    await page.goto("/");
    await page.locator(usernameInput).fill(login);
    for (let i = 0; i < passArr.length; i++) {
      await page.locator(passwordInput).clear();
      await page.locator(passwordInput).fill(passArr[i]);
      await page.locator(loginButton).click();
    }
    await expect(page.locator(item)).toBeVisible();
  });
});
