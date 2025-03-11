import { InventoryPage } from "./../pages/inventoryPage.page";
import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage.page";

test.describe("Inventory page tests", () => {
  const username = "standard_user";
  const password = "secret_sauce";

  test.beforeEach(async ({ page }) => {
    let home = new HomePage(page);
    await home.goto();
    await page.waitForLoadState();
    await home.doLogin(username, password);
  });

  test("Check backpack name", async ({ page }) => {
    let inventory = new InventoryPage(page);

    await inventory.checkPageUrl();
    expect(inventory.backpackTitle).toBeVisible();
    expect(inventory.backpackTitle).toContainText("Sauce Labs Backpack");
    expect(inventory.backpackDescription).toContainText("carry.allTheThings()");
  });

  test("User adds backpack to the cart", async ({ page }) => {
    let inventory = new InventoryPage(page);

    await inventory.checkPageUrl();
    expect(inventory.backpackTitle).toBeVisible();
    await inventory.backpackAddToCartBtn.click();
    expect(inventory.backpackRemoveFromCartBtn).toBeVisible();
    expect(inventory.cartCounter).toContainText("1");
  });

  test("User adds  and  removes backpack to the cart", async ({ page }) => {
    let inventory = new InventoryPage(page);

    await inventory.backpackAddToCartBtn.click();
    expect(inventory.backpackRemoveFromCartBtn).toBeVisible();
    await inventory.backpackRemoveFromCartBtn.click();
    expect(inventory.backpackRemoveFromCartBtn).not.toBeVisible();
    expect(inventory.backpackAddToCartBtn).toBeVisible();
    expect(inventory.cartCounter).not.toBeVisible();
  });
});
