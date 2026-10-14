import fs from "node:fs/promises";
import * as c from "cheerio";
const pages = JSON.parse(await fs.readFile("reference/pages.json"));
const map = JSON.parse(await fs.readFile("reference/asset-map.json"));
const posts = [];
for (const page of pages.filter((p) => p.route.startsWith("/all-resources/"))) {
  const $ = c.load(await fs.readFile("reference/pages/" + page.file, "utf8"));
  const a = JSON.parse($("#__NUXT_DATA__").text()),
    cache = new Map();
  function get(i) {
    if (i < 0) return undefined;
    if (cache.has(i)) return cache.get(i);
    const v = a[i];
    if (!v || typeof v !== "object") return v;
    if (
      Array.isArray(v) &&
      typeof v[0] === "string" &&
      ["Reactive", "ShallowReactive", "Ref", "ShallowRef"].includes(v[0])
    )
      return get(v[1]);
    const r = Array.isArray(v) ? [] : {};
    cache.set(i, r);
    for (const [k, n] of Object.entries(v)) r[k] = get(n);
    return r;
  }
  const root = get(0);
  let story;
  const seen = new Set();
  function walk(n) {
    if (!n || typeof n !== "object" || seen.has(n)) return;
    seen.add(n);
    if (n.full_slug && "/" + n.full_slug === page.route) story = n;
    Object.values(n).forEach(walk);
  }
  walk(root);
  const content = story?.content || {};
  let url = content.image?.filename || content.featured_image?.filename;
  const img = $("main img")
    .toArray()
    .find((e) => /storyblok/.test(e.attribs.src || ""));
  const local = map[url] || map[img?.attribs.src] || "";
  posts.push({
    href: page.route,
    title: content.title || page.title,
    image: local,
    date: content.date || story?.published_at || "",
    category: content.category || content.type || "article",
    description: content.description || "",
  });
}
await fs.writeFile("lib/resources.json", JSON.stringify(posts, null, 2));
console.log(posts.slice(0, 3));
console.log("Categories", [
  ...new Set(posts.map((p) => JSON.stringify(p.category))),
]);
