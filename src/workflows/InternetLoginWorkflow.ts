import { Page } from "@playwright/test";
import { InternetLoginPage } from "../pages/InternetLoginPage";
import { InternetHomePage } from "../pages/InternetHomePage";

export class InternetLoginWorkflow {
  constructor(
    private page: Page,
    private internetHomePage: InternetHomePage,
    private internetLoginPage: InternetLoginPage,
  ) {}

  async completeLoginFlow(username: string, password: string) {
    await this.internetHomePage.navigateToFormAuth();
    await this.internetLoginPage.verifyLoginPageVisible();
    await this.internetLoginPage.login(username, password);
    await this.internetLoginPage.verifyLoginSuccess();
  }

  async completeLoginAndLogoutFlow(username: string, password: string) {
    await this.completeLoginFlow(username, password);
    await this.internetLoginPage.logout();
    await this.internetLoginPage.verifyLogoutMessage();
  }

  async attemptFailedLogin(username: string, password: string) {
    await this.internetHomePage.navigateToFormAuth();
    await this.internetLoginPage.verifyLoginPageVisible();
    await this.internetLoginPage.login(username, password);
    await this.internetLoginPage.verifyLoginFailed();
  }
}
