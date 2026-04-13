const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 80 });
  const context = await browser.newContext({ viewport: null });
  const page = await context.newPage();
  await page.goto('https://github.com/login', { waitUntil: 'domcontentloaded', timeout: 120000 });
  await page.waitForTimeout(2000);
  try {
    await page.getByText('Continue with Google').first().click({ timeout: 5000 });
    console.log('Clicked Continue with Google. Browser will stay open for assistance.');
  } catch (e) {
    console.log('Could not click Continue with Google automatically.');
  }
  setInterval(async () => {
    try {
      const title = await page.title();
      console.log('HEARTBEAT_TITLE=' + title);
    } catch {}
  }, 15000);
})();