/** TASK - Using a For Loop to Iterate Through an Array in a Playwright Test
 *
 * 1. Create a Playwright test.
 *
 * 2. Declare an array containing data-test of for all locators. e.g ['username', 'password','login-button']
 *
 * 3. Create a function locatorGenerator that will generate from the locator name, a full CSS locators like username --> [data-test="username"]
 *
 * 4. Use a `for` loop to iterate through the array.
 *
 * 5. Perform an action inside the loop using each array value.
 *
 * 6. Use assertions to verify expected behavior for each iteration.
 *
 * 💡 **Clue:** Create a loop, that will return all the locators, and call the locators by the number. Make sure to return all locators
 */

import { test, expect } from "@playwright/test";

test.describe("Suite Array Test", () => {
  const locators = [
    "username",
    "password",
    "login-button",
    "item-4-title-link",
  ];

  const locatorGenerator = (locatorsArr: string[]) => {
    const generatedLocatorsArr: string[] = [];
    for (let i = 0; i < locatorsArr.length; i++) {
      generatedLocatorsArr.push(`[data-test="${locatorsArr[i]}"]`);
    }
    return generatedLocatorsArr;
  };

  const login = "standard_user";
  const pass = "secret_sauce";

  test("Array Test", async ({ page }) => {
    let locatorsArr = locatorGenerator(locators);
    await page.goto("/");
    await page.locator(locatorsArr[0]).fill(login);
    await page.locator(locatorsArr[1]).fill(pass);
    await page.locator(locatorsArr[2]).click();
    await expect(page.locator(locatorsArr[3])).toBeVisible();
  });
});
