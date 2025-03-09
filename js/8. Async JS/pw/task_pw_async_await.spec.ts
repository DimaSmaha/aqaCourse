/** TASK - Using and Omitting 'await' in Playwright
 *
 * 1. Create a Playwright test.
 *
 * 2. In the 1st test create a default test for login
 *
 * 3. In the 2nd test create the same steps, but call the same functions without `await`.
 *
 * 4. Observe how the test execution differs between both cases. Why it so?
 *
 * 5. Use assertions to verify expected behavior.
 *
 * 💡 **Clue:** Playwright functions (and any functions in any frameworks) return promises, so omitting `await` may lead to unexpected results.
 * 💡 **Clue:** We are always working inside of the async functions
 */

import { test, expect } from "@playwright/test";

test.describe("Suite Async Await Test", () => {
  const usernameInput = '[data-test="username"]';
  const passwordInput = '[data-test="password"]';
  const loginButton = '[data-test="login-button"]';
  const item = '[id="item_4_title_link"]';
  const login = "standard_user";
  const pass = "secret_sauce";

  test("Async Await Test", async ({ page }) => {
    //default test for login
  });

  test("Async Await Test 2", ({ page }) => {
    // default test for login, but does not use await inside
  });
});
