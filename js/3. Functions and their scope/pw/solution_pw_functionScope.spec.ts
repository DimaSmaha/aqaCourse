/** TASK - Using Function Scope in a Playwright Test
 *
 * 1. Create a Playwright test.
 *
 * 2. Define a getLoginData function inside the test and declare login data inside.
 *
 * 3. Return an object of login and password --> {login:'standard_user',pass:'secret_sauce'}
 *
 * 4. Try accessing the function's variables from outside the function.
 *
 * 5. Call the function and use its returned value in the test.
 *
 * 6. Use assertions to verify expected behavior.
 *
 * 💡 **Clue:** Variables declared inside a function are not accessible outside of it. Try returning a value if you need to use it elsewhere.
 */

import { test, expect } from "@playwright/test";

test.describe("Suite Function Scope Test", () => {
  const usernameInput = '[data-test="username"]';
  const passwordInput = '[data-test="password"]';
  const loginButton = '[data-test="login-button"]';
  const item = '[id="item_4_title_link"]';
  const error = '[data-test="error"]';

  const getLoginData = () => {
    const login = "standard_user";
    const pass = "secret_sauce";

    return { login, pass };
  };

  test("Function Scope Test", async ({ page }) => {
    await page.goto("/");
    await page.locator(usernameInput).fill(getLoginData().login);
    await page.locator(passwordInput).fill(pass);
    await page.locator(passwordInput).clear();
    await page.locator(passwordInput).fill(getLoginData().pass);
    await page.locator(loginButton).click();
    await expect(page.locator(item)).toBeVisible();
  });
});
