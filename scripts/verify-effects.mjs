import fs from "node:fs/promises";
import assert from "node:assert/strict";
import { chromium } from "playwright-core";
import { browserOptions } from "./browser.mjs";
import { startTestServer } from "./test-server.mjs";
const server = await startTestServer(),
  browser = await chromium.launch(await browserOptions());
const report = [];
try {
  for (const [device, viewport] of [
    ["desktop", { width: 1440, height: 1000 }],
    ["mobile", { width: 390, height: 844 }],
  ]) {
    const page = await browser.newPage({ viewport });
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    await page.goto(server.origin + "/", { waitUntil: "networkidle" });
    const carousel = page.locator(".local-native-features").first();
    await carousel.locator(".tab").nth(1).click();
    await page.waitForTimeout(800);
    assert.equal(
      await carousel.locator("[aria-expanded=true]").getAttribute("aria-label"),
      "IN THE YARD",
    );
    await carousel
      .locator("[aria-expanded=true] a")
      .waitFor({ state: "visible" });
    assert.equal(
      await carousel.locator("[aria-expanded=true] a").getAttribute("href"),
      "/terminal-in-the-yard",
    );
    await carousel.locator(".tab").nth(2).click();
    await page.waitForTimeout(800);
    assert.equal(
      await carousel.locator("[aria-expanded=true]").getAttribute("aria-label"),
      "AT THE DOCK",
    );
    assert(
      await carousel
        .locator("[aria-expanded=true] .card-title-expanded")
        .evaluate((e) => Number(getComputedStyle(e).opacity) > 0.95),
      "expanded card copy is transparent",
    );
    const width = await page.evaluate(
      () => document.documentElement.scrollWidth,
    );
    assert(width <= viewport.width + 2, "feature carousel overflow");
    await page.screenshot({ path: ".qa/" + device + "-platform-cards.png" });
    report.push({
      device,
      check: "platform cards expand, update content and retain local links",
      passed: true,
    });
    await page.goto(server.origin + "/resources", { waitUntil: "networkidle" });
    await page.waitForTimeout(300);
    const pixels = await page
      .locator(".bg-canvas__wrapper canvas")
      .first()
      .evaluate((c) => {
        const a = c.getContext("2d").getImageData(0, 0, c.width, c.height).data;
        let count = 0;
        for (let i = 3; i < a.length; i += 4) if (a[i] > 0) count++;
        return count;
      });
    assert(pixels > 100, "background grid is blank");
    await page.screenshot({ path: ".qa/" + device + "-resources-final.png" });
    report.push({
      device,
      check: "animated canvas grid renders",
      passed: true,
    });
    assert.equal(errors.length, 0, errors.join("\n"));
    await page.close();
  }
  for (const [from, to] of [
    ["/terminal-for-3pls", "/markets/terminal-for-3pls"],
    ["/the-ai-powered-yard", "/the-agentic-ai-yard"],
    ["/global/forms/contact-us", "/contact"],
    [
      "/blog/yard-automation-enhance-efficiency-and-safety-in-logistics",
      "/all-resources/yard-automation-enhance-efficiency-and-safety-in-logistics",
    ],
  ]) {
    const r = await fetch(server.origin + from, { redirect: "manual" });
    assert([307, 308].includes(r.status));
    assert.equal(r.headers.get("location"), to);
    report.push({ check: "legacy redirect " + from, passed: true });
  }
} finally {
  await browser.close();
  await server.stop();
  await fs.writeFile(
    ".qa/effects-verification.json",
    JSON.stringify(report, null, 2),
  );
}
console.log(report);
