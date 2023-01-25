const { expect } = require("@playwright/test");

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.getByLabel("E-mail");
    this.passwordInput = page.getByLabel("Password");
    this.continueButton = page.locator("#login-btn");
    this.invalidEmail = page.getByText("E-mail is not valid");
    this.errorSpan = page.locator(".fuse-alert-container");
  }

  async goto() {
    await this.page.goto("https://electroneek.com/account/auth/login/start");
  }

  async inputCredentials(username, password) {
    await this.emailInput.fill(username);
    await this.passwordInput.fill(password);
  }
};
