import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import * as cheerio from "cheerio";
const origin = "https://terminal-industries.com";
const sitemap = cheerio.load(
  await fs.readFile("reference/sitemap.xml", "utf8"),
  { xmlMode: true },
);
const urls = [
  ...new Set([
    origin + "/",
    ...sitemap("url>loc")
      .map((_, e) => sitemap(e).text())
      .get(),
  ]),
];
const results = [];
let index = 0;
const stylesheetUrls = new Set();
const assets = new Set();
const normalizeAsset = (url) => {
  if (url.startsWith("//")) url = "https:" + url;
  try {
    const u = new URL(url, origin);
    if (!["terminal-industries.com", "a.storyblok.com"].includes(u.hostname))
      return null;
    return u.href;
  } catch {
    return null;
  }
};
await Promise.all(
  Array.from({ length: 12 }, async () => {
    while (index < urls.length) {
      const url = urls[index++];
      const route = new URL(url).pathname;
      const filename =
        crypto.createHash("sha256").update(route).digest("hex").slice(0, 16) +
        ".html";
      try {
        let html;
        try {
          html = await fs.readFile("reference/pages/" + filename, "utf8");
        } catch {
          const res = await fetch(url, { signal: AbortSignal.timeout(45000) });
          if (!res.ok) throw Error("HTTP " + res.status);
          html = await res.text();
          await fs.writeFile("reference/pages/" + filename, html);
        }
        const $ = cheerio.load(html);
        results.push({
          route,
          source: url,
          file: filename,
          title: $("title").text(),
        });
        $('link[rel="stylesheet"]').each((_, e) =>
          stylesheetUrls.add(new URL($(e).attr("href"), url).href),
        );
        $("img,video,source").each((_, e) => {
          const el = $(e);
          for (const attr of ["src", "poster"]) {
            const u = normalizeAsset(el.attr(attr) || "");
            if (u && el.attr(attr)) assets.add(u);
          }
        });
        $("[style]").each((_, e) => {
          for (const m of ($(e).attr("style") || "").matchAll(
            /url\(['"]?([^)'"\s]+)/g,
          )) {
            const u = normalizeAsset(m[1]);
            if (u) assets.add(u);
          }
        });
        if (results.length % 30 === 0)
          console.log("Pages", results.length + "/" + urls.length);
      } catch (error) {
        results.push({ route, source: url, error: error.message });
      }
    }
  }),
);
await fs.writeFile("reference/pages.json", JSON.stringify(results, null, 2));
await fs.writeFile(
  "reference/stylesheets.json",
  JSON.stringify([...stylesheetUrls], null, 2),
);
await fs.writeFile(
  "reference/assets.json",
  JSON.stringify([...assets], null, 2),
);
console.log({
  pages: results.length,
  failures: results.filter((x) => x.error),
  stylesheets: stylesheetUrls.size,
  assets: assets.size,
});
