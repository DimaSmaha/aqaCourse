import { Page } from "@playwright/test";
import { CheckoutPage } from "../pages/checkoutPage.page";
import { HomePage } from "../pages/homePage.page";
import { InventoryPage } from "../pages/inventoryPage.page";
import { Facade } from "./facade";

export class PageFactory {
  page: Page;
  homePage: HomePage;
  inventoryPage: InventoryPage;
  checkoutPage: CheckoutPage;
  facade: Facade;

  constructor(page: Page) {
    this.page = page;
    this.homePage = new HomePage(page);
    this.inventoryPage = new InventoryPage(page);
    this.checkoutPage = new CheckoutPage(page);
    this.facade = new Facade(page);
  }
}
