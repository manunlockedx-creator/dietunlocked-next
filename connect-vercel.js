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
  const browser = await chromium.launch({ headless: false, slowMo: 100 });
  const context = await browser.newContext({ viewport: null });
  const page = await context.newPage();

  await page.goto('https://vercel.com/dashboard', { waitUntil: 'domcontentloaded', timeout: 120000 });
  await page.waitForTimeout(5000);

  console.log('[1/4] Open new project flow');
  await clickText(page, ['Add New...', 'New Project', 'Add New'], 10000);
  await page.waitForTimeout(4000);

  console.log('[2/4] Try import from GitHub');
  await clickText(page, ['Import Git Repository', 'Import', 'Continue with GitHub', 'GitHub'], 10000).catch(()=>{});
  await page.waitForTimeout(5000);

  console.log('[3/4] If repo selector appears, waiting there');
  console.log('If GitHub auth or repo import prompts appear, this browser window is now positioned for them.');

  console.log('[4/4] Hold');
  await page.waitForTimeout(60000);
  await browser.close();
})().catch(err => {
  console.error('SCRIPT ERROR:', err);
  process.exit(1);
});