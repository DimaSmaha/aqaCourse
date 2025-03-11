import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage.page";

test.describe("Login page tests", () => {
  test.beforeEach(async ({ page }) => {
    let home = new HomePage(page);
    await home.goto();
    await page.waitForLoadState();
  });

  test("Should sing in to created account", async ({ page }) => {
    let home = new HomePage(page);

    expect(home.loginBtn).toBeVisible();
    await home.fillUsername("standard_user");
    await home.fillPassword("secret_sauce");
    await home.loginBtn.click();
    await page.waitForURL("https://www.saucedemo.com/inventory.html");
  });

  test("Should show login error", async ({ page }) => {
    let home = new HomePage(page);

    expect(home.loginBtn).toBeVisible();
    await home.fillUsername("wrong_login");
    await home.fillPassword("wrong_pass");
    await home.loginBtn.click();
    expect(home.loginError).toContainText(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });
});
