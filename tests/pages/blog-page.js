const { expect } = require("@playwright/test");

exports.BlogPage = class BlogPage {
  constructor(page) {
    this.page = page;
    this.subscribeButton = page.locator('button:has-text("SUBSCRIBE")');
    this.corporateEmail = page.getByPlaceholder("Corporate email");
    this.iAgreeCheckbox = page.getByRole("checkbox", {
      name: "I agree to the ElectroNeek Privacy Policy",
    });
    this.submitButton = page.locator('input:has-text("SUBMIT")');
    this.confirmationText = page.getByText("Thank you for the subscription!");
    this.searchBar = page.getByPlaceholder("Search...");
    this.searchButton = page.locator('button:has-text("SEARCH")');
  }

  async goto() {
    await this.page.goto("https://electroneek.com/blog/");
  }

  async completeSubscribeForm(email) {
    await this.corporateEmail.fill(email);
    await this.iAgreeCheckbox.click();
    await this.submitButton.click();
  }

  async makeASearch(value) {
    await this.searchBar.fill(value);
    await this.searchButton.click();
  }
};
