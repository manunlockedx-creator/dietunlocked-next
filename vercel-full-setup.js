const { chromium } = require('playwright');

async function clickText(page, texts, timeout = 12000) {
  const list = Array.isArray(texts) ? texts : [texts];
  const start = Date.now();
  while (Date.now() - start < timeout) {
    for (const text of list) {
      const exact = page.getByText(text, { exact: true }).first();
      try { if (await exact.isVisible({ timeout: 500 })) { await exact.click(); return text; } } catch {}
      const partial = page.getByText(text).first();
      try { if (await partial.isVisible({ timeout: 500 })) { await partial.click(); return text; } } catch {}
    }
    await page.waitForTimeout(250);
  }
  return null;
}

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 120 });
  const context = await browser.newContext({ viewport: null });
  const page = await context.newPage();

  console.log('[1/5] Open Vercel login');
  await page.goto('https://vercel.com/login', { waitUntil: 'domcontentloaded', timeout: 120000 });
  await page.waitForTimeout(4000);

  console.log('[2/5] Start Google SSO');
  await clickText(page, ['Continue with Google', 'Google'], 10000);
  await page.waitForTimeout(5000);

  console.log('[3/5] Waiting for Google login / verification flow');
  console.log('If a code or approval is needed, relay it now.');

  await page.waitForTimeout(120000);

  console.log('[4/5] Try enter dashboard / import project');
  await page.goto('https://vercel.com/new', { waitUntil: 'domcontentloaded', timeout: 120000 }).catch(()=>{});
  await page.waitForTimeout(5000);
  await clickText(page, ['Import Git Repository', 'Import Project', 'Import'], 10000).catch(()=>{});

  console.log('[5/5] Hold for repo import stage');
  await page.waitForTimeout(120000);
  await browser.close();
})().catch(err => {
  console.error('SCRIPT ERROR:', err);
  process.exit(1);
});