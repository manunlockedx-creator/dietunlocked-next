const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 80 });
  const context = await browser.newContext({ viewport: null });
  const page = await context.newPage();
  await page.goto('https://github.com/login', { waitUntil: 'domcontentloaded', timeout: 120000 });
  await page.waitForTimeout(2000);
  const btn = page.getByRole('button', { name: /Continue with Google/i }).first();
  try {
    await btn.click({ timeout: 5000 });
    console.log('Clicked Continue with Google; waiting for user to complete SSO in this window...');
  } catch (e) {
    console.log('Could not find Continue with Google button to click.');
  }
  // wait up to 10 minutes for login to complete
  const start = Date.now();
  while (Date.now() - start < 10 * 60 * 1000) {
    await page.waitForTimeout(2000);
    const title = await page.title().catch(()=> '');
    if (!/Sign in to GitHub/i.test(title)) {
      console.log('Page title changed:', title);
      break;
    }
  }
  console.log('Checking login state...');
  await page.waitForTimeout(2000);
  const body = await page.locator('body').innerText().catch(()=> '');
  console.log('BODY_SNIPPET=' + body.slice(0,800).replace(/\n/g,' | '));
  await browser.close();
})();