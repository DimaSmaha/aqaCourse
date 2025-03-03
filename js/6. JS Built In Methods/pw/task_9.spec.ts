/** TASK - Using a String Built in methods to manipulate with the strubg in a Playwright Test
 *
 * 1. Create a Playwright test.
 *
 * 2. Declare invalid login and password, eg 'STANDARD_USER' & '   secret_sauce     '
 *
 * 3. Verify that error is shown when this credentails are passed
 *
 * 4. Use the String Build-in methods to transform the credentials to the valid ones
 *
 * 6. Use assertions to verify expected behavior for each iteration.
 *
 * 💡 **Clue:** You can use this built in methods directly in the playwrights .fill method
 */

import { test, expect } from "@playwright/test";

test.describe("Suite JS Built in String Methods Test", () => {
  const usernameInput = '[data-test="username"]';
  const passwordInput = '[data-test="password"]';
  const loginButton = '[data-test="login-button"]';
  const item = '[id="item_4_title_link"]';
  const error = '[data-test="error"]';
  const login = "STANDARD_USER";
  const pass = "           secret_sauce             ";

  test("JS Built in String Methods Test", async ({ page }) => {
    await page.goto("/");
    await page.locator(usernameInput).fill(); //enter incorrect login and passwrod
    await page.locator(passwordInput).fill();
    await page.locator(loginButton).click();
    // verify that error is shown

    // fill the form with valid data to be able to login, using the JS built in methods
    await page.locator(loginButton).click();
    await expect(page.locator(item)).toBeVisible();
  });
});
