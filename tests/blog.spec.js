const { test, expect } = require("@playwright/test");
const { BlogPage } = require("./pages/blog-page");

let blogPage;

test.beforeEach(async ({ page }) => {
  blogPage = new BlogPage(page);
  await blogPage.goto();
});

test("Subscribe to Newsletter", async ({ page }) => {
  await blogPage.subscribeButton.click();
  await blogPage.completeSubscribeForm("test@corporate.email.com");
  await expect(blogPage.confirmationText).toBeVisible();
});

test("Make a search", async ({ page }) => {
  await blogPage.makeASearch("marketing");
  await expect(page).toHaveURL(/.*marketing/);
});
