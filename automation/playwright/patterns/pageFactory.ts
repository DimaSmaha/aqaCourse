import { Page } from "@playwright/test";
import { HomePage } from "../pages/homePage.page";
import { InventoryPage } from "../pages/inventoryPage.page";

export class PageFactory {
  page: Page;
  homePage: HomePage;
  inventoryPage: InventoryPage;

  constructor(page: Page) {
    this.page = page;
    this.homePage = new HomePage(page);
    this.inventoryPage = new InventoryPage(page);
  }
}
