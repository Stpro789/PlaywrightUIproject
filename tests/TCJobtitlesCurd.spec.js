import { test, expect } from '@playwright/test';

test.use({ locale: 'en-US' });

test('Crud Operation on Job Titles - Save', async ({ page }) => {
  test.setTimeout(180000);

  const user = {
    userRole: 'ESS',
    employeeName: 'Thomas Kutty Benny1',
    username: `demo_${Date.now()}`,
    status: 'Enabled',
    password: 'demo1212',
    confirmPassword: 'demo1212',
  };

  await test.step('Login and add a user', async () => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();
    await page.getByRole('link', { name: 'Admin' }).click();
    await page.getByRole('button', { name: 'Add' }).click();

    const userRoleDropdown = page.locator('.oxd-form-row').filter({ hasText: 'User Role' }).getByRole('combobox');
    await userRoleDropdown.click();
    await page.getByRole('option', { name: user.userRole }).click();

    const statusDropdown = page.locator('.oxd-form-row').filter({ hasText: 'Status' }).getByRole('combobox');
    await statusDropdown.click();
    await page.getByRole('option', { name: user.status }).click();

    const employeeInput = page.getByRole('textbox', { name: 'Employee Name' });
    await employeeInput.fill(user.employeeName);
    await expect(page.getByRole('option', { name: new RegExp(user.employeeName, 'i') })).toBeVisible();
    await page.getByRole('option', { name: new RegExp(user.employeeName, 'i') }).click();

    await page.getByRole('textbox', { name: 'Username' }).fill(user.username);
    await page.getByRole('textbox', { name: 'Password' }).fill(user.password);
    await page.getByRole('textbox', { name: 'Confirm Password' }).fill(user.confirmPassword);
    await page.getByRole('button', { name: 'Save' }).click();

    await page.waitForURL('**/admin/viewSystemUsers', { timeout: 30000 });
    await expect(page.getByRole('heading', { name: 'System Users' })).toBeVisible();
    await expect(page.getByRole('cell', { name: user.username, exact: true })).toBeVisible();
  });
});