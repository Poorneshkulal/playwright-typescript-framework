import { test } from "@playwright/test";

import { ScreenshotUtil } from "../utils/ScreenshotUtil";

import { AIHelper } from "../ai/AiHelper";

import { logger } from "../utils/Logger";

test.beforeEach(async ({}, testInfo) => {
  logger.info(
    `Starting Test:
    ${testInfo.title}`,
  );
});

test.afterEach(async ({ page }, testInfo) => {
  logger.info(
    `Finished Test:
    ${testInfo.title}`,
  );

  logger.info(
    `Status:
    ${testInfo.status}`,
  );

  if (testInfo.status !== testInfo.expectedStatus) {
    await ScreenshotUtil.capture(page, testInfo.title);

    if (process.env.OPENAI_API_KEY) {
      const analysis = await AIHelper.analyzeFailure(
        testInfo.error?.message || "",
      );

      console.log("AI Analysis");

      console.log(analysis);

      logger.error(analysis || "Test Failed");
    } else {
      logger.error(testInfo.error?.message || "Test Failed");
    }
  }
});
