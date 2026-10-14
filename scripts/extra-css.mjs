import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import * as cheerio from "cheerio";
const $ = cheerio.load(
  await fs.readFile(".qa/source-desktop-dom.html", "utf8"),
);
const existing = new Set(
  JSON.parse(await fs.readFile("reference/stylesheets.json", "utf8")),
);
const urls = new Set(
  $('link[rel="stylesheet"]')
    .map(
      (_, e) =>
        new URL($(e).attr("href"), "https://terminal-industries.com").href,
    )
    .get()
    .filter((u) => u.includes("terminal-industries.com/_nuxt/")),
);
for (const f of await fs.readdir("reference/modules")) {
  const js = await fs.readFile("reference/modules/" + f, "utf8");
  for (const m of js.matchAll(/["'](?:\.\/)?([^"']+\.css)["']/g)) {
    if (!m[1].startsWith("http"))
      urls.add(
        new URL(
          "/_nuxt/" + m[1].split("/").at(-1),
          "https://terminal-industries.com",
        ).href,
      );
  }
}
const map = {};
const files = [];
await Promise.all(
  [...urls]
    .filter((u) => !existing.has(u))
    .map(async (url) => {
      try {
        const r = await fetch(url, { signal: AbortSignal.timeout(30000) });
        if (!r.ok) return;
        let css = await r.text();
        const assets = [...css.matchAll(/url\(['"]?([^'"\)]+)['"]?\)/g)]
          .map((m) => m[1])
          .filter((x) => !x.startsWith("data:") && !x.startsWith("#"));
        for (const a of assets) {
          const u = new URL(a, url).href;
          const ext = path.extname(new URL(u).pathname);
          const local =
            "/assets/" +
            crypto.createHash("sha256").update(u).digest("hex").slice(0, 20) +
            (/^[.][a-zA-Z0-9]{1,6}$/.test(ext) ? ext : ".bin");
          map[u] = local;
          try {
            await fs.access("public" + local);
          } catch {
            const r = await fetch(u);
            if (r.ok)
              await fs.writeFile(
                "public" + local,
                Buffer.from(await r.arrayBuffer()),
              );
          }
          css = css.split(a).join(local);
        }
        const file = path.basename(new URL(url).pathname);
        await fs.writeFile("styles/" + file, css);
        files.push(file);
      } catch (e) {
        console.log(url, e.message);
      }
    }),
);
await fs.writeFile("reference/extra-styles.json", JSON.stringify(files));
await fs.writeFile("reference/extra-assets.json", JSON.stringify(map));
console.log("Additional styles", files);
