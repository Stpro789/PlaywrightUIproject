import {test, expect} from "@playwright/test";

test.describe("Hooks Demo", async()=>{

    //test.beforeAll
    test.beforeEach(async({page})=>{
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.getByPlaceholder('Username').fill('Admin');
        await page.getByPlaceholder('Password').fill("admin123");
        await page.getByRole('button', { name: 'Login' }).click();
    })

    test('Login to OrangeHRM', async({page})=>{
       
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    })

    test('Validate the title of the page', async({page})=>{
        await expect(page).toHaveTitle('OrangeHRM');
    })

    test('Validate the logo of the page1', async({page})=>{
        await expect(page.getByAltText('client brand banner')).toBeVisible();
    })

    test('Validate the Admin tab', async({page})=>{
        await expect(page.getByRole('link', { name: 'Admin' })).toBeVisible();
    })
    test('Validate the elements', async({page})=>{
        await expect(page.getByText('Time at work')).toBeVisible();
    })
    test('Validate the elements1', async({page})=>{
        await expect(page.getByText('Quick Launch')).toBeVisible();
    })
    test('Validate the elements2', async({page})=>{
        await expect(page.getByText('Buzz Latest Posts')).toBeVisible();
    })
    test('Validate the elements3', async({page})=>{
        await expect(page.getByText('Employees on Leave Today')).toBeVisible();
    })
    test('Validate the Admin', async({page})=>{
        await expect(page.getByRole('link', { name: 'Admin' })).toBeVisible();
    })
    test('Validate the PIM', async({page})=>{
        await expect(
            page.getByRole('button', { name: 'PIM' })
                .or(page.getByRole('button', { name: 'PIM' }))
                .second()
        ).toBeVisible();
    })
    test('Validate the Leave', async({page})=>{
        await expect(page.getByRole('link', { name: 'Leave' })).toBeVisible();
    })
    test('Validate the Time', async({page})=>{
        await expect(page.getByRole('link', { name: 'Time' })).toBeVisible();
    })
    test('Validate the Admin1', async({page})=>{
        await expect(page.getByRole('link', { name: 'Admin' })).toBeVisible();
    })
    test('Validate the PIM1', async({page})=>{
        await expect(page.getByRole('link', { name: 'PIM' })).toBeVisible();
    })
    test('Validate the Leave2', async({page})=>{
        await expect(page.getByRole('link', { name: 'Leave' })).toBeVisible();
    })
    test('Validate the Time1', async({page})=>{
        await expect(page.getByRole('link', { name: 'Time' })).toBeVisible();
    })
    test('Validate the Dashboard', async({page})=>{
        await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
    })
    test('Validate the Recruitment', async({page})=>{
        await expect(page.getByRole('link', { name: 'Recruitment' })).toBeVisible();
    })
    test('Validate the Directory', async({page})=>{
        await expect(page.getByRole('link', { name: 'Directory' })).toBeVisible();
    })
    test('Validate the Maintenance', async({page})=>{
        await expect(page.getByRole('link', { name: 'Maintenance' })).toBeVisible();
    })
    test('Validate the Performance', async({page})=>{
        await expect(page.getByRole('link', { name: 'Performance' })).toBeVisible();
    })
   // test.afterEach(async({page})=>{
    //    await page.getByRole('link', { name: 'Welcome Admin' }).click();
      //  await page.getByRole('link', { name: 'Logout' }).click();
    })

    //test.afterall


