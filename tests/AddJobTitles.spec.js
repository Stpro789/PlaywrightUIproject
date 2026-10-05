//Generate code for creating a new job title in OrangeHRM using Playwright
import { test, expect } from '@playwright/test';

test('create new job title', async ({ page }) => {
  await page.goto('https://orangehrm.com/');

  // Navigate to the job titles section
  await page.getByText('Admin').click();
  await page.getByText('Job').click();
  await page.getByText('Job Titles').click();

  // Click the 'Add' button
  await page.getByRole('button', { name: 'Add' }).click();

  // Fill in the job title details
  await page.locator('#jobTitle_jobTitle').fill('Software Engineer');
  await page.locator('#jobTitle_jobDescription').fill('Responsible for developing and maintaining software applications.');

  // Save the new job title
  await page.getByRole('button', { name: 'Save' }).click();

  // Verify the new job title was created
  await expect(page.locator('#jobTitle_jobTitle')).toHaveValue('Software Engineer');
});
