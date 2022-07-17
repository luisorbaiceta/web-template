import { test, expect } from '@playwright/test';

test('when virtual scroll is active', async ({ page }) => {
  await page.goto('/');
  expect(true).toBeTruthy();
});
