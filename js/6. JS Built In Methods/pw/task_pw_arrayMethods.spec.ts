/** TASK - Using an Array methods to Iterate Through an Array in a Playwright Test
 *
 * 1. Create a Playwright test.
 *
 * 2. Declare an array containing data-test of for all locators. e.g ['username', 'password','login-button']
 *
 * 3. Create a function locatorGenerator that will generate from the locator name, a full CSS locators like username --> [data-test="username"]
 *
 * 4. Use a `forEach` function to iterate through the array.
 *
 * 5. Perform an action inside the forEach using each array value.
 *
 * 6. Use assertions to verify expected behavior for each iteration.
 *
 * 💡 **Clue:** Create a forEach, that will return all the locators, and call the locators by the number. Make sure to return all locators
 */

import { test, expect } from "@playwright/test";

test.describe("Suite JS Built in Array Methods Test", () => {
  const locators = [
    "username",
    "password",
    "login-button",
    "item-4-title-link",
  ];

  const locatorGenerator = (locatorsArr: string[]) => {
    const generatedLocatorsArr: string[] = [];
    //use forEach to generate locators for the elements: username --> [data-test="username"]
    return generatedLocatorsArr;
  };

  const login = "standard_user";
  const pass = "secret_sauce";

  test("JS Built in Array Methods Test", async ({ page }) => {
    let locatorsArr = locatorGenerator(locators);
    await page.goto("/");
    await page.locator().fill(login); // call the particular locators with the locatorsArr
    await page.locator().fill(pass);
    await page.locator().click();
    await expect(page.locator()).toBeVisible();
  });
});
