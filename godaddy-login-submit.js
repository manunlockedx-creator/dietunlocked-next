const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 100 });
  const context = await browser.newContext({ viewport: null });
  const page = await context.newPage();
  await page.goto('https://sso.godaddy.com/?app=account', { waitUntil: 'domcontentloaded', timeout: 120000 });
  await page.waitForTimeout(3000);

  await page.locator('input[name="username"]').fill('48887006');
  await page.locator('input[name="password"]').fill('Wassim!111!');
  await page.getByRole('button', { name: /Sign In/i }).click();
  console.log('Submitted GoDaddy login, waiting for verification screen...');

  await page.waitForTimeout(6000);
  const title = await page.title().catch(()=> '');
  const body = await page.locator('body').innerText().catch(()=> '');
  console.log('TITLE=' + title);
  console.log('BODY_SNIPPET=' + body.slice(0,1200).replace(/\n/g,' | '));

  await page.waitForTimeout(600000);
  await browser.close();
})().catch(err => { console.error(err); process.exit(1); });