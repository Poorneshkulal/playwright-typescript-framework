import { test, expect } from "@playwright/test";

test.describe("The Internet - API Tests", () => {
  test("Verify Home Page Status Code", async ({ request }) => {
    const response = await request.get("https://the-internet.herokuapp.com/");

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
  });

  test("Verify Login Page Status Code", async ({ request }) => {
    const response = await request.get("https://the-internet.herokuapp.com/login");

    expect(response.status()).toBe(200);
  });

  test("Verify Checkboxes Page Status Code", async ({ request }) => {
    const response = await request.get("https://the-internet.herokuapp.com/checkboxes");

    expect(response.status()).toBe(200);
  });

  test("Verify Dropdown Page Status Code", async ({ request }) => {
    const response = await request.get("https://the-internet.herokuapp.com/dropdown");

    expect(response.status()).toBe(200);
  });

  test("Verify Dynamic Loading Page Status Code", async ({ request }) => {
    const response = await request.get("https://the-internet.herokuapp.com/dynamic_loading/1");

    expect(response.status()).toBe(200);
  });
});

