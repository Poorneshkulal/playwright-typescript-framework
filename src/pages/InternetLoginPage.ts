import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class InternetLoginPage extends BasePage {
  readonly usernameField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;
  readonly loginMessage: Locator;
  readonly successMessage: Locator;
  readonly errorMessage: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameField = page.locator("#username");
    this.passwordField = page.locator("#password");
    this.loginButton = page.locator("button[type='submit']");
    this.loginMessage = page.locator(".subheader");
    this.successMessage = page.locator("#flash.success");
    this.errorMessage = page.locator("#flash.error");
    this.logoutButton = page.locator("a:has-text('Logout')");
  }

  async login(username: string, password: string) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }

  async verifyLoginPageVisible() {
    await expect(this.usernameField).toBeVisible();
    await expect(this.passwordField).toBeVisible();
  }

  async verifyLoginSuccess() {
    await expect(this.successMessage).toBeVisible();
    await expect(this.successMessage).toContainText("You logged in successfully");
  }

  async verifyLoginFailed() {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toContainText("Your username is invalid!");
  }

  async logout() {
    await this.logoutButton.click();
  }

  async verifyLogoutMessage() {
    await expect(this.successMessage).toContainText("You logged out successfully");
  }
}
