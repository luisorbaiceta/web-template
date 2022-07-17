import { test, expect } from '@playwright/test';

async function testPageLoad() {
  if (!(window.scrollY === 0)) throw new Error('Page does not load at its top');
  return;
}

test('when virtual scroll is active', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(testPageLoad);
  await page.goto('/about');
  await page.evaluate(testPageLoad);

  await page.evaluate(async () => {
    window.scrollTo({ top: 500 });
    return;
  });
});
