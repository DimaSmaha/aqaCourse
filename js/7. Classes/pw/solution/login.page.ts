import { expect, Page } from "@playwright/test";
import Common from "./common";

const usernameInput = '[data-test="username"]';
const passwordInput = '[data-test="password"]';
const loginButton = '[data-test="login-button"]';
const item = '[id="item_4_title_link"]';
const error = '[data-test="error"]';

class LoginPage extends Common {
  readonly page: Page;
  constructor(page: Page) {
    super(page);
    this.page = page;
  }
  async openWebsite() {
    await this.page.goto("/");
  }

  async fillUsername(text: string) {
    await this.fillElement(usernameInput, text);
  }

  async fillPassword(text: string) {
    await this.fillElement(passwordInput, text);
  }

  async clickLogin() {
    await this.clickElement(loginButton);
  }

  async isItemVisisble() {
    await this.isElementVisible(item);
  }
}

export default LoginPage;
