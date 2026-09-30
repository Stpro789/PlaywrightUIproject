//code to test add work shift in OrangeHRM
import { test, expect } from '@playwright/test';



    await test.step('Login as Admin', async () => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  });

  await test.step('Navigate to JOB-Work Shifts', async () =>{
    await page.getByRole('link', { name: 'Job' }).click();
    await expect(page.getByRole('heading', { name: 'Work Shifts' })).toBeVisible();

   });