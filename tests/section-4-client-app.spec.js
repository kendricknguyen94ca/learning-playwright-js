const { test, expect } = require("@playwright/test");

// Learning Points:
    // Techniques to wait dynamically for new page in Service based applications

test('Techniques to wait dynamically for new page in Service based applications',async ({page}) => {
    // Open web url https://rahulshettyacademy.com/client/auth/login
    await page.goto('https://rahulshettyacademy.com/client/');
    await page.locator("#userEmail").fill("khoanguyen@yopmail.com");
    await page.locator("#userPassword").fill("Test123!");
    await page.locator("#login").click();

    // Wait for page loaded and get all card titles
    // await page.waitForLoadState('networkidle'); DISCOURAGED NOW
    // Alternative solution:
    const cardTitles = page.locator(".card-body b");
    await cardTitles.first().waitFor();
    console.log(await cardTitles.allTextContents());
})