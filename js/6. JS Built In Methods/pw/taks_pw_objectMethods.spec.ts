/** TASK - Using an Object in a Playwright Test
 *
 * 1. Create a Playwright test.
 *
 * 2. Declare an loginData object & productTitles object with multiple key-value pairs.
 *
 * 3. Access object properties and use them in the test.
 *
 * 4. Use assertions to verify expected behavior.
 *
 * 💡 **Clue:** Try using an object to store test data, such as user credentials or element locators.
 */

import { test, expect } from "@playwright/test";

test.describe("Suite JS Built in Object Methods Test", () => {
  const usernameInput = '[data-test="username"]';
  const passwordInput = '[data-test="password"]';
  const loginButton = '[data-test="login-button"]';
  const item = '[id="item_4_title_link"]';

  const loginData = {}; // write login data
  const productTitles = {}; //write the product title from website

  test("JS Built in Object Methods Test", async ({ page }) => {
    await page.goto("/");
    await page.locator(usernameInput).fill(); // call a loginData object to enter username
    await page.locator(passwordInput).fill(); // call a loginData object to enter password
    await page.locator(loginButton).click();
    await expect(page.locator(item)).toBeVisible();
    await expect(page.locator(item)).toHaveText(); //call a productTitles object to verify the title
  });
});
