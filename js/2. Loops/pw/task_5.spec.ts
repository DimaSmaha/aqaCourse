/** TASK - Using a For Loop to Iterate Through an Array in a Playwright Test
 *
 * 1. Create a Playwright test.
 *
 * 2. Declare an array containing multiple passwords. e.g ['wrong1', 'wrong2','secret_sauce']
 *
 * 3. Use a `for` loop to iterate through the array.
 *
 * 4. Perform an action inside the loop using each array value.
 *
 * 5. Use assertions to verify expected behavior for each iteration.
 *
 * 💡 **Clue:** Create a loop, that checks all the passwords, and make sure that user logs in only at the last password
 */

import { test, expect } from "@playwright/test";

test.describe("Test Test", () => {
  test("Test Test", async ({ page }) => {});
});
