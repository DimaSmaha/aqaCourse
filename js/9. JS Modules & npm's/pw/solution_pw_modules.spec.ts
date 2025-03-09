/** TASK - Using Faker.js in a Playwright Test
 *
 * 1. Install Faker.js npm library.
 *
 * 2. Import Faker.js in the Playwright test file.
 *
 * 3. Use Faker.js to generate random test data (e.g., firstName, lastName, postalCode).
 *
 * 4. Fill a form or interact with elements using the generated data.
 *
 * 5. Use assertions to verify expected behavior.
 *
 * 💡 **Clue:** Faker.js helps create realistic and dynamic test data, making tests more robust.
 */

import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

test.describe("Suite NPM Library Test", () => {
  const usernameInput = '[data-test="username"]';
  const passwordInput = '[data-test="password"]';
  const loginButton = '[data-test="login-button"]';
  const item = '[id="item_4_title_link"]';
  const error = '[data-test="error"]';
  const login = "standard_user";
  const pass = "secret_sauce";

  const firstNameInput = '[data-test="firstName"]';
  const lastNameInput = '[data-test="lastName"]';
  const postalCode = '[data-test="postalCode"]';
  const randomFirstName = faker.person.firstName();
  const randomLastName = faker.person.lastName();
  const randomPostalCode = faker.location.zipCode();

  test("NPM Library Test", async ({ page }) => {
    await page.goto("/");
    await page.locator(usernameInput).fill(login);
    await page.locator(passwordInput).fill(pass);
    await page.locator(loginButton).click();
    await expect(page.locator(item)).toBeVisible();

    await page.goto("/checkout-step-one.html");
    await page.locator(firstNameInput).fill(randomFirstName);
    await page.locator(lastNameInput).fill(randomLastName);
    await page.locator(postalCode).fill(randomPostalCode);
    await expect(page.locator(firstNameInput)).toHaveValue(randomFirstName);
    await expect(page.locator(lastNameInput)).toHaveValue(randomLastName);
    await expect(page.locator(postalCode)).toHaveValue(randomPostalCode);
  });
});
