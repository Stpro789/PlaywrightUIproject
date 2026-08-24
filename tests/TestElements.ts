import {test, expect} from "@playwright/test";

test.describe("Hooks Demo", async()=>{

    //test.beforeAll
    test.beforeEach(async({page})=>{
        await page.goto('/');
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

    test('Validate the logo of the page', async({page})=>{
        await expect(page.getByAltText('company-branding')).toBeVisible();
    })

    test('Validate the Admin tab', async({page})=>{
        await expect(page.getByRole('link', { name: 'Admin' })).toBeVisible();
    })
    test('Validate the elements', async({page})=>{
        await expect(page.getByText('Time at work')).toBeVisible();
    })
    test('Validate the elements', async({page})=>{
        await expect(page.getByText('Quick Launch')).toBeVisible();
    })
    test('Validate the elements', async({page})=>{
        await expect(page.getByText('Buzz Latest Posts')).toBeVisible();
    })
    test('Validate the elements', async({page})=>{
        await expect(page.getByText('Employees on Leave Today')).toBeVisible();
    })
    test('Validate the Admin', async({page})=>{
        await expect(
            page.getByRole('button', { name: 'Admin' })
                .or(page.getByRole('button', { name: 'Admin' }))
                .first()
        ).toBeVisible();
    })
    test('Validate the Admin', async({page})=>{
        await expect(
            page.getByRole('button', { name: 'PIM' })
                .or(page.getByRole('button', { name: 'PIM' }))
                .second()
        ).toBeVisible();
    })
    test('Validate the Admin', async({page})=>{
        await expect(
            page.getByRole('button', { name: 'Leave' })
                .or(page.getByRole('button', { name: 'Leave' }))
                .second()
        ).toBeVisible();
    })
    test('Validate the Admin', async({page})=>{
        await expect(
            page.getByRole('button', { name: 'Time' })
                .or(page.getByRole('button', { name: 'Time' }))
                .second()
        ).toBeVisible();
    })
    test('Validate the Admin', async({page})=>{
        await expect(
            page.getByRole('button', { name: 'Admin' })
                .or(page.getByRole('button', { name: 'Admin' }))
                .first()
        ).toBeVisible();
    })
    test('Validate the PIM', async({page})=>{
        await expect(
            page.getByRole('button', { name: 'PIM' })
                .or(page.getByRole('button', { name: 'PIM' }))
                .second()
        ).toBeVisible();
    })
    test('Validate the Leave', async({page})=>{
        await expect(
            page.getByRole('button', { name: 'Leave' })
                .or(page.getByRole('button', { name: 'Leave' }))
                .second()
        ).toBeVisible();
    })
    test('Validate the Time', async({page})=>{
        await expect(
            page.getByRole('button', { name: 'Time' })
                .or(page.getByRole('button', { name: 'Time' }))
                .second()
        ).toBeVisible();
    })
    test('Validate the Dashboard', async({page})=>{
        await expect(
            page.getByRole('button', { name: 'Dashboard' })
                .or(page.getByRole('button', { name: 'Dashboard' }))
                .second()
        ).toBeVisible();
    })
    test('Validate the Dashboard', async({page})=>{
        await expect(
            page.getByRole('button', { name: 'Recruitment' })
                .or(page.getByRole('button', { name: 'Recruitment' }))
                .second()
        ).toBeVisible();
    })
    test('Validate the Dashboard', async({page})=>{
        await expect(
            page.getByRole('button', { name: 'Directory' })
                .or(page.getByRole('button', { name: 'Directory' }))
                .second()
        ).toBeVisible();
    })
    test('Validate the Dashboard', async({page})=>{
        await expect(
            page.getByRole('button', { name: 'Maintenance' })
                .or(page.getByRole('button', { name: 'Maintenance' }))
                .second()
        ).toBeVisible();
    })
    test('Validate the Dashboard', async({page})=>{
        await expect(
            page.getByRole('button', { name: 'Performance' })
                .or(page.getByRole('button', { name: 'Performance' }))
                .second()
        ).toBeVisible();
    })
    test.afterEach(async({page})=>{
        await page.getByRole('link', { name: 'Welcome Admin' }).click();
        await page.getByRole('link', { name: 'Logout' }).click();
    })

    //test.afterall
})

