import {test, expect} from '@playwright/test';

test.describe('Playwright Form Filling Scenario', () => {

   test.beforeEach(async({page})=>{
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.getByPlaceholder('Username').fill('Admin');
        await page.getByPlaceholder('Password').fill("admin123");
        await page.getByRole('button', { name: 'Login' }).click();
    })

test('check the visibility of the elements',async({page})=>{

    await expect(page).toHaveURL(/\/web\/index\.php\/dashboard\/index/);

    /*await page.locator("//body").click();
    await page.locator("oxd-userdropdown-name:visible");*/

    const isvisible = await page.getByText('FirstName Test LastName Test').isVisible();
    //const isvisible = await page.locator("oxd-userdropdown-name:visible");
    if (isvisible) {
        console.log('user name is visible on dashboard page');
    } else {
        console.log('User name is not visible on dashboard page');
    }
})
test.afterEach(async({page})=>{
    await page.getByText('FirstName Test LastName Test').click();
    await page.getByRole('link', { name: 'Logout' }).click();
});
})

