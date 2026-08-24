const {test}= require('@playwright/test');
test('check the visibility of the elements',async({page})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.waitForTimeout(2000);


    //const isvisible = await page.isVisible('input[name="username"]').isVisible('input[name="password"]').isVisible('button[type="submit"]').isVisible('a[href="https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode"]');
    const isvisible = await page.isVisible('Time at Work')&& await page.isVisible('My Actions')&&await page.isVisible('Quick Launch')&&await page.isVisible('Buzz Latest Posts')&&await page.isVisible('Employee Distribution by Subunit')&&await page.isVisible('Employee Distribution by Location')&&await page.isVisible('Employees on Leave Today');
    if (isvisible) {
        console.log('All elements are visible on dashboard page');
    } else {
        console.log('Some elements are not visibleon dashboard page');
    }

    const isvisible1 = await page.isVisible('a[href="https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewAdminModule"]')&&isvisible('Admin')
    if (isvisible1) {
        console.log('Admin link is visible on dashboard page');
    } else {
        console.log('Admin link is not visible on dashboard page');
    }

    const isvisible2 = await page.isVisible('a[href="https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPimModule"]')&&isvisible('PIM')
    if (isvisible1) {
        console.log('PIM link is visible on dashboard page');
    } else {
        console.log('PIM link is not visible on dashboard page');
    }
});