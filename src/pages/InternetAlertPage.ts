import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class InternetAlertPage extends BasePage {
  readonly jsAlertButton: Locator;
  readonly jsConfirmButton: Locator;
  readonly jsPromptButton: Locator;
  readonly resultText: Locator;

  constructor(page: Page) {
    super(page);
    this.jsAlertButton = page.locator("button:has-text('Click for JS Alert')");
    this.jsConfirmButton = page.locator("button:has-text('Click for JS Confirm')");
    this.jsPromptButton = page.locator("button:has-text('Click for JS Prompt')");
    this.resultText = page.locator("#result");
  }

  async clickJsAlertButton() {
    await this.jsAlertButton.click();
  }

  async handleJsAlert() {
    const dialogPromise = this.page.waitForEvent("dialog");
    await this.clickJsAlertButton();
    const dialog = await dialogPromise;
    expect(dialog.type()).toBe("alert");
    expect(dialog.message()).toContain("I am a JS Alert");
    await dialog.accept();
  }

  async clickJsConfirmButton() {
    await this.jsConfirmButton.click();
  }

  async handleJsConfirmOk() {
    const dialogPromise = this.page.waitForEvent("dialog");
    await this.clickJsConfirmButton();
    const dialog = await dialogPromise;
    expect(dialog.type()).toBe("confirm");
    await dialog.accept();
  }

  async handleJsConfirmCancel() {
    const dialogPromise = this.page.waitForEvent("dialog");
    await this.clickJsConfirmButton();
    const dialog = await dialogPromise;
    expect(dialog.type()).toBe("confirm");
    await dialog.dismiss();
  }

  async clickJsPromptButton() {
    await this.jsPromptButton.click();
  }

  async handleJsPrompt(inputText: string) {
    const dialogPromise = this.page.waitForEvent("dialog");
    await this.clickJsPromptButton();
    const dialog = await dialogPromise;
    expect(dialog.type()).toBe("prompt");
    await dialog.accept(inputText);
  }

  async verifyAlertResultMessage() {
    await expect(this.resultText).toContainText("You successfully handled a JS alert");
  }

  async verifyConfirmOkResultMessage() {
    await expect(this.resultText).toContainText("You clicked: Ok");
  }

  async verifyPromptResultMessage(expectedText: string) {
    await expect(this.resultText).toContainText(expectedText);
  }
}
