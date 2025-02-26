/** TASK - Understanding Variable Scope in a Playwright Test
 *
 * 1. Create a Playwright test.
 *
 * 2. Declare variables using `let` and `const` inside and outside a function or block.
 *
 * 3. Try accessing the variables from different parts of the test.
 *
 * 4. Observe which variables are accessible and which cause errors.
 *
 * 5. Use assertions to verify expected values.
 *
 * 💡 **Clue:** Pay attention to how `let` and `const` behave inside blocks `{}` and how they differ from globally declared variables.
 */

import { test, expect } from "@playwright/test";

test.describe("Test Test", () => {
  test("Test Test", async ({ page }) => {});
});
