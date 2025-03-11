import { PageFactory } from "./pageFactory";
// its not mandatory to create a new class for facade
// the only thing you should understand is
// to use steps from multiple pages in one method!

import { expect, Page } from "@playwright/test";
import { IUserDTO } from "./dto";

export class Facade {
  page: Page;
  pageFactory: PageFactory;
  constructor(page: Page) {
    this.page = page;
    this.pageFactory = new PageFactory(page);
  }

  loginAndVerifyItemIsDisplayed(userDTO: IUserDTO) {
    this.pageFactory.homePage.doLoginDTO(userDTO);
    expect(this.pageFactory.inventoryPage.backpackDescription).toBeVisible();
  }
}
