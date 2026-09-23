import { test, expect } from '@playwright/test';

test.use({ locale: 'en-US' });

test('Crud Operation on User Management - Save, Update and Delete', async ({ page }) => {
  test.setTimeout(180000);

  const user = {
    userRole: 'ESS',
    employeeName: 'Thomas Kutty Benny1',
    username: `demo_${Date.now()}`,
    status: 'Enabled',
    password: 'demo1212',
    updatedUsername: '',
  };

  user.updatedUsername = `${user.username}_updated`;

  await test.step('Login as Admin', async () => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  });

  await test.step('Navigate to User Management', async () => {
    await page.getByRole('link', { name: 'Admin' }).click();
    await expect(page.getByRole('heading', { name: 'System Users' })).toBeVisible();
  });

  await test.step('Register a User and save the data', async () => {
    await page.getByRole('button', { name: 'Add' }).click();
    await expect(page.getByRole('heading', { name: 'Add User' })).toBeVisible();

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
    await page.getByRole('textbox', { name: 'Confirm Password' }).fill(user.password);
    await page.getByRole('button', { name: 'Save' }).click();

    await page.waitForURL('**/admin/viewSystemUsers', { timeout: 30000 });
    await expect(page.getByRole('heading', { name: 'System Users' })).toBeVisible();
    await expect(page.getByRole('cell', { name: user.username, exact: true })).toBeVisible();
  });

  await test.step('Update the same user', async () => {
    const userRow = page.locator('.oxd-table-card').filter({ hasText: user.username }).first();
    await expect(userRow).toBeVisible();
    await userRow.getByRole('button').filter({ has: page.locator('i.bi-pencil-fill') }).click();

    await expect(page.getByRole('heading', { name: 'Edit User' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Username' }).fill(user.updatedUsername);
    await page.getByRole('button', { name: 'Save' }).click();

    await page.waitForURL('**/admin/viewSystemUsers', { timeout: 30000 });
    await expect(page.getByRole('heading', { name: 'System Users' })).toBeVisible();
    await expect(page.getByRole('cell', { name: user.updatedUsername, exact: true })).toBeVisible();
    await expect(page.getByRole('cell', { name: user.username, exact: true })).not.toBeVisible();
  });

  await test.step('Delete the same user', async () => {
    const userRow = page.locator('.oxd-table-card').filter({ hasText: user.updatedUsername }).first();
    await expect(userRow).toBeVisible();

    await userRow.getByRole('checkbox').check({ force: true });
    await page.getByRole('button', { name: 'Delete Selected' }).click();

    const confirmationDialog = page.getByRole('dialog');
    await expect(confirmationDialog).toBeVisible();
    await confirmationDialog.getByRole('button', { name: 'Yes, Delete' }).click();

    await expect(page.getByText(user.updatedUsername)).not.toBeVisible();
  });
});
