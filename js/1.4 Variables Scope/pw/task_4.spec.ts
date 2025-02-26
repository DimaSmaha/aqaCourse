/** TASK - Understanding Variable Scope in a Playwright Test
 *
 * 1. Create 2 Playwright tests.
 *
 * 2. Declare variables using `let` or `const` inside and outside a function or block.
 *
 * 3. Try accessing the variables from different parts of the test.
 *
 * 4. Observe which variables are accessible and which cause errors.
 *
 * 5. Use assertions to verify expected values.
 *
 * 💡 **Clue:** Create 2 tests, in one create a local variable that would make the test pass, in other do not add a local variable and make the test pass
 */

import { test, expect } from "@playwright/test";

test.describe("Test Test", () => {
  test("Test Test", async ({ page }) => {});
});
