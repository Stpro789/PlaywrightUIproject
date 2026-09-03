import{test, expect} from "@playwright/test";

test.describe('Playwright Locator Scenario', () => {
    
    test('Test Case 01 - Do not fill any data on UI and click on Register', async ({page}) => {
        
        await page.goto("https://parabank.parasoft.com/parabank/register.htm");
        
        const registerButton = page.locator('input[type="submit"][value="Register"]');
        await expect(registerButton).toBeVisible();
        await registerButton.click();

        //Assertion for Negative Test

        await expect(page.locator("[id='customer.firstName.errors']")).toBeVisible();

        await expect(page.locator('[id="customer.lastName.errors"]')).toBeVisible();

        //11 fields

    })
    
//Do not fill any data on UI and click on Register
test('Click on Register button', async ({ page }) => {
    await page.goto("https://parabank.parasoft.com/parabank/register.htm");
    const registerButton = page.locator('input[type="submit"][value="Register"]');
    await expect(registerButton).toBeVisible();
    await registerButton.click();
    await expect(page.locator('[id="customer.firstName.errors"]')).toBeVisible();
});
//Password and confirm password fields are not matching
    test('Password and confirm password fields are not matching', async ({ page }) => {
    await page.goto("https://parabank.parasoft.com/parabank/register.htm");
    //await page.getByLabel('Password').fill('password');
    //await page.getByLabel('Confirm Password').fill('password123');
    const passwordField = page.locator('input[id="customer.password"]');
    await passwordField.fill('password');
    const confirmPasswordField = page.locator('input[id="repeatedPassword"]');
    await confirmPasswordField.fill('password123');
    
});

//password length should be 1 char
    test('Password length should be 1 char', async ({ page }) => {
    await page.goto("https://parabank.parasoft.com/parabank/register.htm");
    const passwordField = page.locator('input[id="customer.password"]');
    await passwordField.fill('p');
    });

//Do not fill confirm password field and click on Register
test('Do not fill confirm password field and click on Register', async ({ page }) => {
    await page.goto("https://parabank.parasoft.com/parabank/register.htm");
    const passwordField = page.locator('input[id="customer.password"]');
    await passwordField.fill('password');
    const registerButton = page.locator('input[type="submit"][value="Register"]');
    await expect(registerButton).toBeVisible();
    await registerButton.click();
    //await expect(page.locator('[id="repeatedPassword.errors"]')).toBeVisible();
});



// first()
    // last()
    // .nth(3)

    
})