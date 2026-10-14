import fs from "node:fs/promises";
import { chromium } from "playwright-core";
import { browserOptions } from "./browser.mjs";
const browser = await chromium.launch(await browserOptions());
await fs.mkdir(".qa", { recursive: true });
for (const [device, viewport] of [
  ["desktop", { width: 1440, height: 1000 }],
  ["mobile", { width: 390, height: 844 }],
]) {
  const page = await browser.newPage({ viewport });
  const errors = [],
    failed = [],
    external = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("response", (r) => {
    if (r.status() >= 400) failed.push(r.url() + " " + r.status());
  });
  page.on("request", (r) => {
    if (
      /^https?:/.test(r.url()) &&
      !r.url().startsWith("http://127.0.0.1:4183")
    )
      external.push(r.url());
  });
  await page.goto("http://127.0.0.1:4183", { waitUntil: "networkidle" });
  await page.screenshot({ path: ".qa/local-" + device + "-top.png" });
  console.log(
    device,
    await page.evaluate(() => ({
      title: document.title,
      width: document.documentElement.scrollWidth,
      height: document.body.scrollHeight,
      headings: [...document.querySelectorAll("h1,h2")]
        .map((x) => x.textContent)
        .slice(0, 8),
      broken: [...document.images]
        .filter((x) => x.complete && !x.naturalWidth)
        .map((x) => x.src)
        .slice(0, 10),
    })),
    { errors, failed: [...new Set(failed)], external: [...new Set(external)] },
  );
  await page.evaluate(() => scrollTo(0, innerHeight * 3.4));
  await page.waitForTimeout(800);
  await page.screenshot({ path: ".qa/local-" + device + "-content.png" });
  await page.close();
}
await browser.close();
