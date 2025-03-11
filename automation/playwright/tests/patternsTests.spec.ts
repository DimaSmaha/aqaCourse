import { Facade } from "./../patterns/facade";
import { checkoutData } from "./../helpers/generateString";
import { test, expect } from "@playwright/test";
import { userDTO } from "../patterns/dto";
import { PageFactory } from "../patterns/pageFactory";

test.describe("Patterns tests", () => {
  let pageFactory: PageFactory;
  let facade: Facade;
  const checkoutFirstName = checkoutData.randomFirstName;
  const checkoutLastName = checkoutData.randomLastName;
  const checkoutPostalCode = checkoutData.randomPostalCode;

  test.beforeEach(async ({ page }) => {
    pageFactory = new PageFactory(page);
    facade = new Facade(page);
    await pageFactory.homePage.goto();
    await page.waitForLoadState();
  });

  test("Should sing in to created account", async () => {
    await facade.loginAndVerifyItemIsDisplayed(userDTO);
  });

  test("Should generate random checkout data", async () => {
    await pageFactory.homePage.doLoginDTO(userDTO);
    await pageFactory.checkoutPage.openCheckout();
    await pageFactory.checkoutPage.getFirstNameInput().fill(checkoutFirstName);
    await pageFactory.checkoutPage.getLastNameInput().fill(checkoutLastName);
    await pageFactory.checkoutPage
      .getPostalCodeInput()
      .fill(checkoutPostalCode);
    await expect(pageFactory.checkoutPage.getFirstNameInput()).toHaveValue(
      checkoutFirstName
    );
    await expect(pageFactory.checkoutPage.getLastNameInput()).toHaveValue(
      checkoutLastName
    );
    await expect(pageFactory.checkoutPage.getPostalCodeInput()).toHaveValue(
      checkoutPostalCode
    );
    //How we can fail the test with this random data? How we can cause to make data random during each call?
  });
});
