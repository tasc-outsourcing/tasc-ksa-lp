const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const consoleErrors = [];
  const badResponses = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push({ text: message.text(), location: message.location() });
  });
  page.on("response", (response) => {
    if (response.status() >= 400) badResponses.push({ status: response.status(), url: response.url() });
  });

  await page.goto("http://127.0.0.1:4173/book-keeping-ksa/", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(6000);

  const primaryCta = page.getByRole("button", { name: "Book free consultation", exact: true });
  const results = {
    title: await page.title(),
    h1Count: await page.locator("h1").count(),
    h2Text: await page.locator("main h2").allTextContents(),
    serviceButtons: await page.getByRole("button", { name: /Book a consultation about/ }).count(),
    secondaryHref: await page.getByRole("link", { name: /See what's included/ }).getAttribute("href"),
    allImagesHaveAlt: await page.locator("img:not([alt])").count() === 0,
    desktopHasNoHorizontalOverflow: await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth),
    heroFormOnLoad: await page.locator("#hubspot-form-hero form").count() > 0,
    dialogFormBeforeFirstOpen: await page.locator("#hubspot-form-cta form").count() > 0,
    heroFormFieldNames: await page.locator("#hubspot-form-hero form [name]").evaluateAll((elements) => Array.from(new Set(elements.map((element) => element.getAttribute("name")).filter(Boolean)))),
  };

  await primaryCta.click();
  results.dialogOpened = await page.locator("dialog[open]").count() === 1;
  results.scrollLocked = await page.evaluate(() => document.body.style.overflow === "hidden");
  results.dialogFormOnFirstOpen = await page.locator("#hubspot-form-cta form").count() > 0;
  results.marketFieldStatus = await page.locator("#hubspot-form-cta form").getAttribute("data-market-field-status").catch(() => null);
  await page.keyboard.press("Escape");
  await page.waitForTimeout(150);
  results.escapeClosed = await page.locator("dialog[open]").count() === 0;
  results.focusReturnedAfterEscape = await primaryCta.evaluate((element) => document.activeElement === element);

  await primaryCta.click();
  await page.locator("dialog[open]").dispatchEvent("mousedown");
  await page.waitForTimeout(150);
  results.backdropClosed = await page.locator("dialog[open]").count() === 0;
  results.focusReturnedAfterBackdrop = await primaryCta.evaluate((element) => document.activeElement === element);

  await page.screenshot({ path: "/tmp/tasc-ksa-tax-accounting-desktop.png", fullPage: true });
  await page.setViewportSize({ width: 375, height: 812 });
  await page.reload({ waitUntil: "domcontentloaded" });
  await page.waitForTimeout(1000);
  results.mobileHasNoHorizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth);
  results.mobileHeroFormVisible = await page.locator("#hubspot-form-hero").isVisible();
  await page.screenshot({ path: "/tmp/tasc-ksa-tax-accounting-mobile.png", fullPage: true });

  results.consoleErrors = consoleErrors;
  results.badResponses = badResponses;
  console.log(JSON.stringify(results, null, 2));
  await browser.close();
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
