const { test, expect } = require("@playwright/test");
const { LoginPage } = require("./pages/login-page");

let loginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.goto();
});

test("Failed Login with invalid email", async ({ page }) => {
  await loginPage.inputCredentials("incorrect", "password");
  await expect(loginPage.invalidEmail).toBeVisible();
});

test("Failed login with invalid credentials", async ({ page }) => {
  await loginPage.inputCredentials("incorrect@email.com", "password");
  await loginPage.continueButton.click();
  await expect(loginPage.errorSpan).toContainText(
    "Your username and/or password do not match"
  );
});
