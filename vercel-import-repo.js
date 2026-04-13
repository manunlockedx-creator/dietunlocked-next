const { chromium } = require('playwright');

function sleep(ms){ return new Promise(r=>setTimeout(r,ms)); }

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 80 });
  const context = await browser.newContext({ viewport: null });
  const page = await context.newPage();
  await page.goto('https://vercel.com/new', { waitUntil: 'domcontentloaded', timeout: 120000 });
  await page.waitForTimeout(4000);
  // Try clicking Import Git Repository or Import Project
  try {
    const importBtn = page.getByText(/Import Git Repository|Import Project|Import/i).first();
    await importBtn.click({ timeout: 8000 });
    console.log('Clicked import');
  } catch (e) {
    console.log('Could not click generic import button, attempting repo search...');
  }
  await page.waitForTimeout(4000);
  // try to search for repo
  try {
    const search = page.locator('input[placeholder*="Search repositories"]').first();
    if (await search.isVisible({ timeout: 3000 })) {
      await search.click();
      await search.fill('manunlocked-next');
      await page.waitForTimeout(2000);
      const repoItem = page.getByText(/manunlockedx-creator\/manunlocked-next|manunlocked-next/).first();
      await repoItem.click({ timeout: 5000 });
      console.log('Selected repo');
    } else {
      console.log('Repo search not visible');
    }
  } catch (e) {
    console.log('Repo selection step failed:', e.toString());
  }

  // Try clicking Import/Deploy
  try {
    const deployBtn = page.getByText(/Deploy|Import|Create Project/).last();
    await deployBtn.click({ timeout: 8000 });
    console.log('Clicked Deploy/Import');
  } catch (e) {
    console.log('Could not click Deploy/Import button automatically.');
  }

  console.log('Now waiting up to 10 minutes for any interactive steps (SSO/authorizations).');
  await sleep(10*60*1000);
  await browser.close();
})();