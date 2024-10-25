const { test, expect } = require("@playwright/test");

// Learning Points:
    // - Importance of Playwright Test Annotation and async await understanding
    // - What is browser context & Page fixtures?
    // - Playwright config file and its details to run the tests
    // - Running playwright tests in multiple browsers

// Javascript is asynchronous language
// So always define async function so test steps will be executed by order
test('Default Browser Context Define',async ({page}) => {
    // Insert playwright code below
    // Open a fresh browser
    // {browser} information will be retrived from playwright.config.js

    // If you want to quickly initialize a default playwright browser
    // Define {page} then use page parameter in default definition to access URL 
    await page.goto('https://google.com/');

    // Verify page title
    const pageTitle = await page.title();
    console.log(pageTitle);
    await expect(page).toHaveTitle("Google");
}) 

test('Customized Browser Context Define',async ({browser}) => {
    // Insert playwright code below
    // Open a fresh browser
    // {browser} information will be retrived from playwright.config.js

    // If you want to initialize a browser with custom browser configs (plugins, cookies)
    // Then define parameters context, page as below:
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    // Print page title
    const pageTitle = await page.title();
    console.log(pageTitle);
}) 