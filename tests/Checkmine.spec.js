/*Login into OrangeHRMS -
Get the name of the user
Print in the console area
Perform Logout*/

const { test, expect } = require('@playwright/test');
test('check the visibility of the elements', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(/dashboard\/index/);
    //get the name of the user
    const userMenu = page.locator('.oxd-userdropdown-name');
    await expect(userMenu).toBeVisible();
    console.log('User name is visible on dashboard page');
    const username = await userMenu.textContent();
    console.log(`User name is: ${username}`);
    //Perform Logout
    await userMenu.click();
    await page.getByRole('link', { name: 'Logout' }).click();
    await expect(page).toHaveURL(/auth\/login/);
})

//version 2
/*Login into OrangeHRMS -

Get the name of the user
Print in the console area
Perform Logout*/
/*
const {test}= require('@playwright/test');
test('check the visibility of the elements',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(/dashboard/);
    //get the name of the user
    const userMenu = page.locator('.oxd-userdropdown-name');
    await expect(userMenu).toBeVisible();
    console.log('User name is visible on dashboard page');
    const username = await userMenu.textContent();
    console.log(`User name is: ${username}`);
    //Perform Logout
    await userMenu.click();
    await page.getByRole('link', { name: 'Logout' }).click();
    await expect(page).toHaveURL(/auth\/login/);
})*/


//version 3 basic
/* 
const {test}= require('@playwright/test');
test('check the visibility of the elements',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.waitForTimeout(2000);
    //get the name of the user
    const isvisible = await page.getByText('FirstName Test LastName Test').isVisible();
    console.log('User name is visible on dashboard page');
    const username = await page.getByText('FirstName Test LastName Test').textContent();
    console.log(`User name is: ${username}`);
    //Perform Logout
    await page.getByText('FirstName Test LastName Test').click();
    await page.getByRole('link', { name: 'Logout' }).click();
})*/