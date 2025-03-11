import { TopHeader } from "./header.page";
import { expect, Locator, Page } from "@playwright/test";

export class CheckoutPage extends TopHeader {
  readonly page: Page;
  firstNameInput = '[data-test="firstName"]';
  lastNameInput = '[data-test="lastName"]';
  postalCode = '[data-test="postalCode"]';

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  openCheckout = () => this.page.goto("/checkout-step-one.html"); //todo, move goto and waitFor methods to header
  getFirstNameInput = () => this.page.locator(this.firstNameInput);
  getLastNameInput = () => this.page.locator(this.lastNameInput);
  getPostalCodeInput = () => this.page.locator(this.postalCode);
}
