import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class InternetCheckboxPage extends BasePage {
  readonly checkboxes: Locator;
  readonly firstCheckbox: Locator;
  readonly secondCheckbox: Locator;

  constructor(page: Page) {
    super(page);
    this.checkboxes = page.locator("input[type='checkbox']");
    this.firstCheckbox = page.locator("input[type='checkbox']").first();
    this.secondCheckbox = page.locator("input[type='checkbox']").nth(1);
  }

  async checkFirstCheckbox() {
    await this.firstCheckbox.check();
  }

  async uncheckFirstCheckbox() {
    await this.firstCheckbox.uncheck();
  }

  async checkSecondCheckbox() {
    await this.secondCheckbox.check();
  }

  async verifyFirstCheckboxIsChecked() {
    await expect(this.firstCheckbox).toBeChecked();
  }

  async verifyFirstCheckboxIsUnchecked() {
    await expect(this.firstCheckbox).not.toBeChecked();
  }

  async verifySecondCheckboxIsChecked() {
    await expect(this.secondCheckbox).toBeChecked();
  }

  async getAllCheckboxes() {
    return await this.checkboxes.count();
  }

  async verifyCheckboxesCount(expectedCount: number) {
    await expect(this.checkboxes).toHaveCount(expectedCount);
  }
}
