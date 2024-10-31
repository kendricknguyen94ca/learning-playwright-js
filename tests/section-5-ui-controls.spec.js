const { test, expect } = require("@playwright/test");

// Learning Points:
    // sec5-l17tol19-UI Controls:
        // - Static dropdown
        // - Select & verify checkbox
        // - Validate element attribute
    // sec5-l20-New Window Handling
        // - Handling child window

test('sec5-l17tol19-UI Controls',async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const userName = page.locator("#username");
    const password = page.locator("[name='password']");
    const signInBtn = page.locator("#signInBtn");

    // Select dropdown
    const dropdown = page.locator("select.form-control");
    await dropdown.selectOption("teach");

    // Select checkbox
    const userCheckbox = page.locator("[value='user']");
    const adminCheckbox = page.locator("[value='admin']");
    const popup_Okbtn = page.locator("#okayBtn");
    await userCheckbox.click();
    await popup_Okbtn.click();
    // Verify checkbox is checked
    await expect(userCheckbox).toBeChecked();

    const termsCheckbox = page.locator("#terms");
    await termsCheckbox.click();
    await expect(termsCheckbox).toBeChecked();
    await termsCheckbox.uncheck(); // To uncheck a checkbox
    expect(await termsCheckbox.isChecked()).toBeFalsy(); // To verify a checkbox is unchecked

    // Validate attribute
    const documentRequestLink = page.locator("[href*='documents-request']");
    await expect(documentRequestLink).toHaveAttribute("class", "blinkingText");
})

test('sec5-l20-Child Window Handling',async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    // Click on documents request link
    const documentsRequestLink = page.locator("[href*='documents-request']");

    // Switch to documents request page
    const [newPage] = await Promise.all([
        context.waitForEvent('page'), //Listen for any new page opened
        documentsRequestLink.click() // Click on documents request link to open Document Request page
    ]); // Create a newPage handle
    const newPageTitle = await newPage.locator("h1").textContent();
    expect(newPageTitle).toEqual("Documents request");
})