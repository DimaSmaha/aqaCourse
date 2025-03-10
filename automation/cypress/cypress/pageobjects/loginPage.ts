import Common from "./common";
import { userData } from "../fixtures/data.json";
class LoginPage extends Common {
  /**
   * There may be a different styles of writing the code
   * It can depend from anything, from person, company, project, styling
   * You should just understand that its all the same
   */

  public openLoginPage(): void {
    super.openPage("/");
  }

  loginWithValidData() {
    super.openPage("/");
    this.fillUserNameInput(userData.correctUserLogin); //set env
    this.fillPasswordInput(userData.userPassword);
    this.clickLoginButton();
  }

  getUserNameInput = () => cy.getByTestId("username");

  getPasswordInput = () => cy.getByTestId("password");

  getLoginButton = () => cy.getByTestId("login-button");

  getLoginError() {
    return cy.getByTestId("error");
  }

  fillUserNameInput = (userName: string) => {
    this.getUserNameInput().type(userName);
  };

  fillPasswordInput(password: string): void {
    this.getPasswordInput().type(password);
  }

  clickLoginButton = () => this.getLoginButton().click();
}

export default new LoginPage();
