/** TASK - Writing a Playwright Test with Locator Variables
 *
 * 1. Create a Playwright test using `test()` from `@playwright/test`.
 *
 * 2. Use `const` to define locator variables for elements on the page.
 *
 * 3. Use `let` to define a variable that will store dynamic values during the test.
 *
 * 4. Perform interactions like filling out a form, clicking a button, or verifying text.
 *
 * 5. Use assertions to verify expected behavior.
 *
 * 6. Use `let`, change its value and reuse later in the test
 *
 * List of locators:
 *  usernameInput = '[data-test="username"]';
 *  passwordInput = '[data-test="password"]';
 *  loginButton = '[data-test="login-button"]';
 *  error = '[data-test="error"]';
 *  item = '[id="item_4_title_link"]';
 *
 * List of userData
 *  login = "standard_user";
 *  pass = "secret_sauce";
 *
 * 💡 **Clue:** Create a test where we firstly would enter wrong password, and then fix it inside of the test
 */

import { test, expect } from "@playwright/test";

test.describe("Suite Variables Test", () => {
  const usernameInput = '[data-test="username"]';
  const passwordInput = '[data-test="password"]';
  const loginButton = '[data-test="login-button"]';
  const error = '[data-test="error"]';
  const item = '[id="item_4_title_link"]';
  const login = "standard_user";
  let pass = "wrong";

  test("Variables Test", async ({ page }) => {
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
