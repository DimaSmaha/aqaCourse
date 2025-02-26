/** TASK - Using the Increment (++) Operator in Playwright
 *
 * 1. Create a Playwright test.
 *
 * 2. Declare a variable using `let` and update its value using the `++` operator.
 *
 * 3. Use Playwright actions to interact with a webpage.
 *
 * 4. Perform assertions to verify expected behavior.
 *
 * 💡 **Clue:** Create a test where we have a counter that is 0 at the start and then it increments, each time we add an item
 */

import { test, expect } from "@playwright/test";

test.describe("Suite Operators Test", () => {
  test("Operators Test", async ({ page }) => {
    const usernameInput = '[data-test="username"]';
    const passwordInput = '[data-test="password"]';
    const loginButton = '[data-test="login-button"]';
    const item = '[id="item_4_title_link"]';
    const login = "standard_user";
    const pass = "secret_sauce";
    const addBackback = '[data-test="add-to-cart-sauce-labs-backpack"]';
    const addLight = '[data-test="add-to-cart-sauce-labs-bike-light"]';
    const itemsCounter = '[data-test="shopping-cart-badge"]';

    test("Operator Test", async ({ page }) => {
      await page.goto("/");
      await page.locator(usernameInput).fill(login);
      await page.locator(passwordInput).fill(pass);
      await page.locator(loginButton).click();
      await expect(page.locator(item)).toBeVisible();

      await page.locator(addBackback).click(); //add counter and increase a number on one
      await expect(page.locator(itemsCounter)).toHaveText(""); //verify the counter
    });
  });
});
