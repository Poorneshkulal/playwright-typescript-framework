import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class InternetHoverPage extends BasePage {
  readonly figures: Locator;
  readonly firstFigure: Locator;
  readonly hoverCaption: Locator;
  readonly profileLink: Locator;

  constructor(page: Page) {
    super(page);
    this.figures = page.locator(".figure");
    this.firstFigure = page.locator(".figure").first();
    this.hoverCaption = page.locator(".figcaption");
    this.profileLink = page.locator("a[href='/users/1']");
  }

  async hoverOverFirstFigure() {
    await this.firstFigure.hover();
  }

  async verifyCaptionAppears() {
    await expect(this.hoverCaption.first()).toBeVisible();
  }

  async verifyProfileLinkVisible() {
    await expect(this.profileLink).toBeVisible();
  }

  async clickProfileLink() {
    await this.profileLink.click();
  }

  async verifyFiguresCount(expectedCount: number) {
    await expect(this.figures).toHaveCount(expectedCount);
  }
}
