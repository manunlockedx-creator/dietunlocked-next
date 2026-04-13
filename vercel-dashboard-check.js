const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 80 });
  const context = await browser.newContext({ viewport: null });
  const page = await context.newPage();
  await page.goto('https://vercel.com/dashboard', { waitUntil: 'domcontentloaded', timeout: 120000 });
  await page.waitForTimeout(6000);
  const title = await page.title();
  const body = await page.locator('body').innerText().catch(()=> '');
  console.log('TITLE=' + title);
  console.log('BODY_SNIPPET=' + body.slice(0,1200).replace(/\n/g,' | '));
  await browser.close();
})().catch(err => { console.error(err); process.exit(1); });