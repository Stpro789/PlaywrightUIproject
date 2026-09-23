//code to test add work shift in OrangeHRM
import { test, expect } from '@playwright/test';

test('Add Work Shift', async ({ page }) => {
  // Test implementation here
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.fill('#txtUsername', 'Admin');
  await page.fill('#txtPassword', 'admin123');
  await page.click('#btnLogin');

  await page.click('#menu_admin_viewAdminModule');
  await page.click('#menu_admin_workShift');
  await page.click('#btnAdd');
  await page.fill('#workShift_name', 'Night Shift');
  await page.fill('#workShift_workHours', '8');
  await page.fill('#workShift_startTime', '22:00');
  await page.fill('#workShift_endTime', '06:00');
  await page.click('#workShift_availableEmp');
  await page.click('#btnSave');
  await expect(page.locator('.message.success')).toHaveText('Successfully Saved');

});