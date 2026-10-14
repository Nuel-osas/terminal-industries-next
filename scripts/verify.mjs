import fs from "node:fs/promises";
import assert from "node:assert/strict";
import { chromium } from "playwright-core";
import { browserOptions } from "./browser.mjs";
import { startTestServer } from "./test-server.mjs";
const server = await startTestServer(),
  browser = await chromium.launch(await browserOptions());
const routes = JSON.parse(await fs.readFile("docs/routes.json"));
const report = {
  date: "2026-10-14",
  framework: "Next.js App Router",
  http: [],
  browser: [],
  interactions: [],
  failures: [],
};
await fs.mkdir(".qa", { recursive: true });
try {
  let index = 0;
  await Promise.all(
    Array.from({ length: 10 }, async () => {
      while (index < routes.length) {
        const { route } = routes[index++];
        const r = await fetch(server.origin + route);
        const body = await r.text();
        const passed = r.ok && body.includes("<main");
        report.http.push({ route, status: r.status, passed });
        if (!passed) report.failures.push({ route, check: "HTTP content" });
      }
    }),
  );
  console.log(
    "HTTP routes",
    report.http.filter((r) => r.passed).length + "/" + routes.length,
  );
  const selected = [
    "/",
    "/about",
    "/contact",
    "/system",
    "/why-terminal",
    "/security",
    "/careers",
    "/resources",
    "/resources/blogs",
    "/resources/videos",
    "/markets/terminal-for-3pls",
    "/modules/yard-visibility",
    "/terminal-at-the-gate",
    "/yard-efficiency-calculator",
    "/yard-security-grader",
    "/demo-landing-page",
    "/subscribe-to-our-newsletter",
    "/privacy-policy",
    ...routes
      .filter((r) => r.route.startsWith("/all-resources/"))
      .slice(0, 3)
      .map((r) => r.route),
  ];
  for (const [device, viewport] of [
    ["desktop", { width: 1440, height: 1000 }],
    ["mobile", { width: 390, height: 844 }],
  ]) {
    const context = await browser.newContext({ viewport });
    let page = await context.newPage();
    let errors = [],
      failed = [],
      external = [];
    page.on("pageerror", (e) => errors.push(e.message));
    page.on("response", (r) => {
      if (r.status() >= 400) failed.push(r.url() + " " + r.status());
    });
    page.on("request", (r) => {
      if (/^https?:/.test(r.url()) && !r.url().startsWith(server.origin))
        external.push(r.url());
    });
    for (const route of process.env.TEST_ROUTE
      ? [process.env.TEST_ROUTE]
      : selected) {
      errors = [];
      failed = [];
      external = [];
      try {
        await page.goto(server.origin + route, { waitUntil: "networkidle" });
        await page.waitForTimeout(150);
        const dimensions = await page.evaluate(() => ({
          width: document.documentElement.scrollWidth,
          viewport: innerWidth,
          headers: document.querySelectorAll("header.site-header").length,
          text: document.querySelector("main")?.textContent?.trim().length,
          images: [...document.images]
            .filter((i) => {
              const r = i.getBoundingClientRect();
              return r.bottom > 0 && r.top < innerHeight && r.width > 0;
            })
            .filter((i) => i.complete && !i.naturalWidth)
            .map((i) => i.src),
        }));
        assert(
          dimensions.width <= dimensions.viewport + 2,
          "horizontal overflow " + dimensions.width,
        );
        assert(dimensions.headers <= 1, "duplicate site headers");
        assert(dimensions.text > 20, "missing main content");
        assert.equal(dimensions.images.length, 0, "broken visible images");
        assert.equal(errors.length, 0, errors.join("\n"));
        assert.equal(failed.length, 0, failed.join("\n"));
        assert.equal(
          external.length,
          0,
          "unexpected external requests: " + external.join("\n"),
        );
        report.browser.push({ device, route, passed: true });
        if (
          [
            "/",
            "/contact",
            "/yard-efficiency-calculator",
            "/yard-security-grader",
            "/resources",
          ].includes(route)
        )
          await page.screenshot({
            path: `.qa/${device}-${route === "/" ? "home" : route.slice(1)}.png`,
          });
        console.log("PASS", device, route);
      } catch (e) {
        report.browser.push({ device, route, passed: false });
        report.failures.push({
          device,
          route,
          error: e.message,
          errors,
          failed,
          external,
        });
        console.log("FAIL", device, route, e.message.slice(0, 220));
      }
    }
    if (!process.env.TEST_ROUTE)
      try {
        await page.goto(server.origin + "/", { waitUntil: "networkidle" });
        if (device === "mobile") {
          await page.getByRole("button", { name: "Toggle menu" }).click();
          await page
            .locator(".local-mobile-menu")
            .waitFor({ state: "visible" });
          await page.getByRole("button", { name: "Toggle menu" }).click();
        } else {
          await page
            .getByRole("button", { name: "System", exact: true })
            .hover();
          await page
            .locator(".local-navigation-dropdown")
            .waitFor({ state: "visible" });
          await page.keyboard.press("Escape");
        }
        report.interactions.push(device + ": navigation menu");
        const firstFrame = await page
          .locator(".local-hero-sticky canvas")
          .evaluate((c) => c.toDataURL().slice(-200));
        await page.evaluate(() => scrollTo(0, innerHeight));
        await page.waitForTimeout(700);
        const nextFrame = await page
          .locator(".local-hero-sticky canvas")
          .evaluate((c) => c.toDataURL().slice(-200));
        assert.notEqual(
          firstFrame,
          nextFrame,
          "truck sequence did not advance",
        );
        report.interactions.push(device + ": truck frame sequence");
        const faq = page.locator(".tabbed-accordion").first();
        await faq.getByRole("tab").nth(1).click();
        assert.equal(
          await faq.getByRole("tab").nth(1).getAttribute("aria-selected"),
          "true",
        );
        await faq.locator("summary").first().click();
        assert(
          await faq
            .locator("details")
            .first()
            .evaluate((e) => e.open),
        );
        report.interactions.push(device + ": FAQ tabs and disclosure");
        await page.goto(server.origin + "/yard-efficiency-calculator", {
          waitUntil: "networkidle",
        });
        assert.equal(
          (
            await page
              .locator("output.roi-calculator__results-amount")
              .textContent()
          ).trim(),
          "$641,626",
        );
        await page.locator("#roi-gates").fill("4");
        assert.notEqual(
          (
            await page
              .locator("output.roi-calculator__results-amount")
              .textContent()
          ).trim(),
          "$641,626",
        );
        await page.locator("#roi-email").fill("alex@example.com");
        await page.locator(".roi-calculator form button").click();
        await page.locator(".roi-calculator [role=status]").waitFor();
        report.interactions.push(
          device + ": calculator formulas and local form",
        );
        await page.goto(server.origin + "/yard-security-grader", {
          waitUntil: "networkidle",
        });
        await page
          .getByRole("button", { name: "Grade my yard", exact: true })
          .click();
        for (let i = 0; i < 5; i++) {
          const fields = page.locator(".grader__question");
          for (let n = 0; n < (await fields.count()); n++)
            await fields.nth(n).locator("button").first().click();
          await page.locator(".grader__nav button").last().click();
        }
        assert.match(
          await page.locator(".local-score-dial").textContent(),
          /^100/,
        );
        report.interactions.push(device + ": complete 15-question grader");
        await page.goto(server.origin + "/contact", {
          waitUntil: "networkidle",
        });
        const form = page.locator("form.form-section").first();
        await form.locator("[name=name]").fill("Alex Demo");
        await form.locator("[name=role_or_position]").fill("Operations");
        await form.locator("[name=email]").fill("alex@example.com");
        await form.locator("[name=company]").fill("Demo Company");
        await form.locator("select").selectOption({ index: 1 });
        await form.locator("[type=submit]").click();
        await form.locator("[role=status]").waitFor();
        report.interactions.push(device + ": contact form local success");
        await page.goto(server.origin + "/resources/blogs", {
          waitUntil: "networkidle",
        });
        await page
          .getByRole("textbox", { name: "Search resources" })
          .fill("yard");
        assert(
          (await page.locator(".local-resource-grid .blog-card").count()) > 0,
        );
        await page
          .getByRole("textbox", { name: "Search resources" })
          .fill("no-matching-article-123");
        assert.equal(
          await page.locator(".local-resource-grid .blog-card").count(),
          0,
        );
        report.interactions.push(device + ": resource search");
        await page.goto(server.origin + "/", { waitUntil: "networkidle" });
        await page.evaluate(() => (window.__nextNavigationCheck = "preserved"));
        if (device === "mobile") {
          await page.getByRole("button", { name: "Toggle menu" }).click();
          await page.locator(".local-mobile-cta").first().click();
        } else await page.locator("header .cta-button").nth(1).click();
        await page.waitForURL("**/demo-landing-page");
        assert.equal(
          await page.evaluate(() => window.__nextNavigationCheck),
          "preserved",
        );
        report.interactions.push(device + ": native Next.js navigation");
      } catch (e) {
        report.failures.push({
          device,
          check: "interaction",
          error: e.message,
        });
        console.log("INTERACTION FAIL", device, e.message.slice(0, 300));
      }
    await context.close();
  }
} finally {
  await browser.close();
  await server.stop();
  await fs.writeFile(".qa/verification.json", JSON.stringify(report, null, 2));
}
console.log(
  JSON.stringify(
    {
      http: report.http.length,
      browser: report.browser.length,
      interactions: report.interactions.length,
      failures: report.failures,
    },
    null,
    2,
  ),
);
if (report.failures.length) process.exitCode = 1;
