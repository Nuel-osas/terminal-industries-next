import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
const origin = "https://terminal-industries.com";
const sources = JSON.parse(await fs.readFile("reference/assets.json", "utf8"));
const cssUrls = JSON.parse(
  await fs.readFile("reference/stylesheets.json", "utf8"),
);
const cssFiles = [];
for (const url of cssUrls) {
  const response = await fetch(url);
  if (!response.ok) throw Error(url);
  const content = await response.text();
  cssFiles.push({ url, content });
  for (const match of content.matchAll(/url\(['"]?([^'"\)]+)['"]?\)/g)) {
    if (!match[1].startsWith("data:") && !match[1].startsWith("#"))
      sources.push(new URL(match[1], url).href);
  }
}
for (const [device, count] of [
  ["desktop", 410],
  ["mobile", 409],
])
  for (let index = 1; index <= count; index++)
    sources.push(
      `${origin}/static/frames/home/${device}/webp/hero_anim_${device}_60_${index}.webp`,
    );
const urls = [...new Set(sources)];
const map = {};
const failures = [];
let index = 0,
  done = 0;
let bytes = 0;
await fs.mkdir("public/assets", { recursive: true });
const extension = (url, type = "") => {
  const name = new URL(url).pathname;
  if (name.includes("/filters:format(webp)")) return ".webp";
  const ext = path.extname(name);
  return /^\.[a-zA-Z0-9]{1,6}$/.test(ext)
    ? ext
    : type.includes("image/webp")
      ? ".webp"
      : type.includes("svg")
        ? ".svg"
        : type.includes("woff2")
          ? ".woff2"
          : ".bin";
};
await Promise.all(
  Array.from({ length: 16 }, async () => {
    while (index < urls.length) {
      const url = urls[index++];
      let file =
        "/assets/" +
        crypto.createHash("sha256").update(url).digest("hex").slice(0, 20) +
        extension(url);
      try {
        try {
          const stat = await fs.stat("public" + file);
          map[url] = file;
          bytes += stat.size;
          done++;
          continue;
        } catch {}
        const response = await fetch(url, {
          signal: AbortSignal.timeout(60000),
        });
        if (!response.ok) throw Error("HTTP " + response.status);
        const data = Buffer.from(await response.arrayBuffer());
        bytes += data.length;
        await fs.writeFile("public" + file, data);
        map[url] = file;
        done++;
        if (done % 150 === 0) console.log("Assets", done + "/" + urls.length);
      } catch (error) {
        failures.push({ url, error: error.message });
      }
    }
  }),
);
for (const css of cssFiles) {
  let text = css.content.replace(
    /url\((['"]?)([^'"\)]+)\1\)/g,
    (match, q, url) => {
      if (url.startsWith("data:") || url.startsWith("#")) return match;
      const absolute = new URL(url, css.url).href;
      return `url("${map[absolute] || url}")`;
    },
  );
  await fs.writeFile(
    "styles/" + path.basename(new URL(css.url).pathname),
    text,
  );
}
await fs.writeFile("reference/asset-map.json", JSON.stringify(map, null, 2));
await fs.writeFile(
  "docs/assets.json",
  JSON.stringify({ assets: done, bytes, failures }, null, 2),
);
const frames = {};
for (const device of ["desktop", "mobile"])
  frames[device] = Array.from(
    { length: device === "desktop" ? 410 : 409 },
    (_, i) =>
      map[
        `${origin}/static/frames/home/${device}/webp/hero_anim_${device}_60_${i + 1}.webp`
      ],
  );
await fs.writeFile("lib-frames.json", JSON.stringify(frames));
console.log({ assets: done, bytes, failures });
