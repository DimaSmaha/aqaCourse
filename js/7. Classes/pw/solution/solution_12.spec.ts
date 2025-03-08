/** TASK - Creating a common.ts and Login Page with Inheritance in Playwright
 *
 * 1. Create an abstract common.ts file to store reusable methods or base page functionality.
 *
 * 2. Create an abstract class common.ts. And write there a base methods, like clickElement, fillElement, isElementVisisble
 *
 * 3. Create a loginPage.page.ts file that extends the functionality from common.ts.
 *
 * 4. Create a methods in loginPage to interract with elements, like fillUsername, fillPassword, clickLoginBtn
 *
 * 5. Use a class in `common.ts` as a base class and extend it in `loginPage.page.ts`.
 *
 * 6. Implement login-related methods inside `LoginPage` and reuse common functionality from the base class.
 *
 * 7. In the Playwright test file, initialize `LoginPage` and perform login actions.
 *
 * 💡 **Clue:** Use `extends` to inherit methods and properties from the base class in `common.ts`.
 * 💡 **Clue:** Use `abstract class` to close the common.ts class from direct calls. Why do we need the absract?
 */

import { test } from "@playwright/test";
import LoginPage from "./login.page";

test.describe("Suite Class & Page Object Test", () => {
  const login = "standard_user";
  const pass = "secret_sauce";

  test("Page Object Test", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.openWebsite();
    await loginPage.fillUsername(login);
    await loginPage.fillPassword(pass);
    await loginPage.clickLogin();
    await loginPage.isItemVisisble();
  });
});
