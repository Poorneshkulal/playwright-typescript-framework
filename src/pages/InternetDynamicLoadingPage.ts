import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class InternetDynamicLoadingPage extends BasePage {
  readonly loadingText: Locator;
  readonly startButton: Locator;
  readonly finishMessage: Locator;
  readonly example1Link: Locator;
  readonly example2Link: Locator;

  constructor(page: Page) {
    super(page);
    this.loadingText = page.locator("#loading");
    this.startButton = page.locator("button:has-text('Start')");
    this.finishMessage = page.locator("#finish");
    this.example1Link = page.locator("a:has-text('Example 1')");
    this.example2Link = page.locator("a:has-text('Example 2')");
  }

  async navigateToExample1() {
    await this.example1Link.click();
  }

  async navigateToExample2() {
    await this.example2Link.click();
  }

  async clickStartButton() {
    await this.startButton.click();
  }

  async verifyLoadingVisible() {
    await expect(this.loadingText).toBeVisible();
  }

  async verifyFinishMessageVisible() {
    await expect(this.finishMessage).toBeVisible();
    await expect(this.finishMessage).toContainText("Hello World!");
  }

  async waitForDynamicContentToLoad() {
    await this.finishMessage.waitFor({ state: "visible", timeout: 10000 });
  }
}
