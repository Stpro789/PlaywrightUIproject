
//await page.locator("//body")
//p[@class="oxd-userdropdown-name"]

const {test}= require('@playwright/test');

test.beforeEach(async({page})=>{
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.getByPlaceholder('Username').fill('Admin');
        await page.getByPlaceholder('Password').fill("admin123");
        await page.getByRole('button', { name: 'Login' }).click();
    })

test('check the visibility of the elements',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.waitForTimeout(30000);

    /*await page.locator("//body").click();
    await page.locator("oxd-userdropdown-name:visible");*/

    const isvisible = await page.getByText('FirstName Test LastName Test').isVisible();
     if (isvisible) {
        console.log('user name is visible on dashboard page');
    } else {
        console.log('User name is not visible on dashboard page');
    }

test.afterEach(async({page})=>{
    await page.getByRole('link', { name: 'Logout' }).click();
});
await page.getByRole('link', { name: /log out/i }).click();

      console.log(`Logout successful for ${user.username}`);

      await page.close();
    //test.afterAll
});
