const { test, expect } = require("@playwright/test");

// Learning Points:
    // Basic methods for web automating testing:
        // - fill() -> Enter text to text field
        // - click() -> Click to a button
        // - 

test('Basic methods for Web Automating testing',async ({page}) => {
    // Open web url https://rahulshettyacademy.com/loginpagePractise/
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    // Print page title
    const pageTitle = await page.title();
    console.log(pageTitle);

    // Using cssSelector get webElement and interact
    // Id -> tagname#id or #id
    // Class -> tagname.className or .className
    // Attribute -> [attribute='attributeName']
    // Traversing from Parent to Child -> parentTagName childTagName
    // Retrive css by text -> text=''

    // Define web element
    const userName = page.locator('#username');
    const password = page.locator("[type='password']");
    const signInButton = page.locator('#signInBtn');

    // Enter to text field
    // Note: In newest Playwright versions, Playwright recommend user to use fill() method
    //  instead of type() to enter input to text field
    // Enter invalid username & password
    await userName.fill('rahulshetty');
    await password.fill('learning');
    
    // Click button
    await signInButton.click();

    // Verify alert message
    console.log(await page.locator(".alert-danger[style*='block']").textContent());
    await expect(page.locator(".alert-danger[style*='block']")).toContainText('Incorrect username/password.');

    // Sign in to page with valid username & password
    await userName.fill('rahulshettyacademy');
    await password.fill('learning');
    await signInButton.click();

    // Get item from a list of web elements
        // First element -> locator.first();
        // Lass element -> locator.last();
        // By index -> locator.nth(indexNo);
    // Get the first item in the list & verify its name
    const cardTitles = page.locator('div.card-body a');
    console.log(await cardTitles.first().textContent());
    await expect(cardTitles.first()).toHaveText('iphone X');

})