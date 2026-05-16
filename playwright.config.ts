import { defineConfig, devices } from "@playwright/test";

import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  testDir: "./tests",

  fullyParallel: true,

  retries: 1,

  workers: 1,

  timeout: 60000,

  reporter: [["html"], ["allure-playwright"]],

  use: {
    baseURL: process.env.BASE_URL,

    headless: false,

    screenshot: "only-on-failure",

    video: "retain-on-failure",

    trace: "retain-on-failure",
  },

  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },

    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
      },
    },
  ],
});
