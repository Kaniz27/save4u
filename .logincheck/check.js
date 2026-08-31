const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe' });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  page.on('console', msg => console.log('CONSOLE', msg.type(), msg.text()));
  page.on('pageerror', err => console.log('PAGEERROR', err.message));
  page.on('requestfailed', req => console.log('REQFAILED', req.url(), req.failure()?.errorText));
  page.on('response', res => console.log('HTTP', res.status(), res.url()));

  await page.goto('https://save4u-client.vercel.app/admin/login', { waitUntil: 'load', timeout: 30000 });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'd:/save4u/.logincheck/login-page.png' });

  await page.fill('#email', 'admin@save4u.co.uk');
  await page.fill('#password', 'change-this-password');
  await page.click('button[type="submit"]');
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'd:/save4u/.logincheck/after-submit.png' });
  console.log('URL after submit:', page.url());

  await browser.close();
})();
