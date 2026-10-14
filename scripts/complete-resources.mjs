import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import * as c from "cheerio";
const $ = c.load(await fs.readFile("reference/resources-live.html", "utf8"));
const posts = JSON.parse(await fs.readFile("lib/resources.json"));
const map = JSON.parse(await fs.readFile("reference/asset-map.json"));
for (const e of $(".blog-card").toArray()) {
  const card = $(e),
    href = card.find("a").first().attr("href"),
    url = card.find("img").attr("src");
  if (!href) continue;
  let image =
    url &&
    (map[url] ||
      Object.entries(map).find(
        ([u]) => u.split("/m/")[0] === url.split("/m/")[0],
      )?.[1]);
  if (url && !image) {
    const resized =
        url.split("/m/")[0] + "/m/1200x0/filters:format(webp):quality(85)",
      response = await fetch(resized);
    if (response.ok) {
      image =
        "/assets/" +
        crypto.createHash("sha256").update(resized).digest("hex").slice(0, 20) +
        ".webp";
      await fs.writeFile(
        "public" + image,
        Buffer.from(await response.arrayBuffer()),
      );
      map[url] = image;
    }
  }
  const item = {
    href,
    title: card.find(".blog-card__title").text(),
    image,
    category: card.find(".blog-card__category").text(),
    description: card.find(".blog-card__excerpt").text(),
    date: card.find("time").attr("datetime") || "",
  };
  const old = posts.find((p) => p.href === href);
  if (old) Object.assign(old, { ...item, date: old.date || item.date });
  else posts.unshift(item);
}
const css = [
  ...new Set(
    $("link[rel=stylesheet]")
      .map(
        (_, e) =>
          new URL(e.attribs.href, "https://terminal-industries.com").href,
      )
      .get(),
  ),
];
let extra = JSON.parse(await fs.readFile("reference/extra-styles.json"));
for (const url of css) {
  const file = path.basename(new URL(url).pathname);
  try {
    await fs.access("styles/" + file);
  } catch {
    const r = await fetch(url);
    if (r.ok) {
      await fs.writeFile("styles/" + file, await r.text());
      extra.push(file);
    }
  }
}
await fs.writeFile("reference/extra-styles.json", JSON.stringify(extra));
await fs.writeFile("reference/asset-map.json", JSON.stringify(map, null, 2));
await fs.writeFile("lib/resources.json", JSON.stringify(posts, null, 2));
console.log("Resources", posts.length, "CSS", css.length);
