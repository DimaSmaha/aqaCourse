import { IUserDTO, userDTO } from "./../patterns/dto";
// playwright-dev-page.ts

//in ts page object pattern looks like this

import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginBtn: Locator;
  readonly loginError: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('[id="user-name"]');
    this.passwordInput = page.locator('[id="password"]');
    this.loginBtn = page.locator('[id="login-button"]');
    this.loginError = page.locator('[data-test="error"]');
  }

  async checkPageUrl() {
    await expect(this.page).toHaveURL("");
  }

  async goto() {
    await this.page.goto("");
  }

  async fillUsername(username: string) {
    await this.usernameInput.fill(username);
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async doLogin(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
  }

  async fillUsernameUsingDTO(userDTO: IUserDTO) {
    await this.usernameInput.fill(userDTO.username);
  }

  async fillPasswordUsingDTO(userDTO: IUserDTO) {
    await this.passwordInput.fill(userDTO.password);
  }

  async doLoginDTO(userDTO: IUserDTO) {
    await this.usernameInput.fill(userDTO.username);
    await this.passwordInput.fill(userDTO.password);
    await this.loginBtn.click();
  }
}
