import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class InternetDropdownPage extends BasePage {
  readonly dropdown: Locator;
  readonly selectedOption: Locator;

  constructor(page: Page) {
    super(page);
    this.dropdown = page.locator("#dropdown");
    this.selectedOption = page.locator("#dropdown");
  }

  async selectDropdownOption(optionValue: string) {
    await this.dropdown.selectOption(optionValue);
  }

  async selectDropdownOptionByLabel(optionLabel: string) {
    await this.dropdown.selectOption({ label: optionLabel });
  }

  async verifyDropdownOptionSelected(expectedValue: string) {
    await expect(this.dropdown).toHaveValue(expectedValue);
  }

  async verifySelectedOptionText(expectedText: string) {
    const selectedText = await this.dropdown
      .locator('[role="option"][aria-selected="true"]')
      .textContent();
    expect(selectedText).toContain(expectedText);
  }

  async verifyDropdownIsVisible() {
    await expect(this.dropdown).toBeVisible();
  }
}
