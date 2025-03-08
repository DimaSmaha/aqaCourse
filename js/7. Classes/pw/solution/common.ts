import { expect, Page } from "@playwright/test";

abstract class Common {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async clickElement(el: string) {
    await this.page.locator(el).click();
  }

  async fillElement(el: string, text: string) {
    await this.page.locator(el).fill(text);
  }

  async isElementVisible(el: string) {
    await expect(await this.page.locator(el)).toBeVisible();
  }
}

export default Common;
