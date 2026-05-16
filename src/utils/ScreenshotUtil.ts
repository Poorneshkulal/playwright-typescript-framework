import { Page } from "@playwright/test";
import fs from "fs";
import path from "path";

export class ScreenshotUtil {
  static async capture(page: Page, name: string) {
    const dir = "screenshots";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    await page.screenshot({
      path: path.join(dir, `${name}.png`),
      fullPage: true,
    });
  }
}
