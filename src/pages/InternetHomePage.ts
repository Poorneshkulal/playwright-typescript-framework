import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class InternetHomePage extends BasePage {
  readonly pageTitle: Locator;
  readonly examplesList: Locator;
  readonly formAuthLink: Locator;
  readonly checkboxesLink: Locator;
  readonly dropdownLink: Locator;
  readonly dynamicLoadingLink: Locator;
  readonly hoverLink: Locator;
  readonly alertsLink: Locator;
  readonly fileUploadLink: Locator;

  constructor(page: Page) {
    super(page);
    this.pageTitle = page.locator("h1");
    this.examplesList = page.locator("ul li");
    this.formAuthLink = page.locator("a:has-text('Form Authentication')");
    this.checkboxesLink = page.locator("a:has-text('Checkboxes')");
    this.dropdownLink = page.locator("a:has-text('Dropdown')");
    this.dynamicLoadingLink = page.locator("a:has-text('Dynamic Loading')");
    this.hoverLink = page.locator("a:has-text('Hovers')");
    this.alertsLink = page.locator("a:has-text('JavaScript Alerts')");
    this.fileUploadLink = page.locator("a:has-text('File Upload')");
  }

  async navigateToFormAuth() {
    await this.formAuthLink.click();
  }

  async navigateToCheckboxes() {
    await this.checkboxesLink.click();
  }

  async navigateToDropdown() {
    await this.dropdownLink.click();
  }

  async navigateToDynamicLoading() {
    await this.dynamicLoadingLink.click();
  }

  async navigateToHovers() {
    await this.hoverLink.click();
  }

  async navigateToAlerts() {
    await this.alertsLink.click();
  }

  async navigateToFileUpload() {
    await this.fileUploadLink.click();
  }

  async verifyHomePageVisible() {
    await expect(this.pageTitle).toBeVisible();
  }

  async verifyAllLinksPresent() {
    await expect(this.examplesList).toHaveCount(20);
  }
}
