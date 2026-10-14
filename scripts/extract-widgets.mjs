import fs from "node:fs/promises";
import * as c from "cheerio";
const pages = JSON.parse(await fs.readFile("reference/pages.json"));
const blocks = {};
for (const page of pages) {
  const $ = c.load(await fs.readFile("reference/pages/" + page.file, "utf8"));
  const raw = $("#__NUXT_DATA__").text();
  if (!raw) continue;
  const a = JSON.parse(raw),
    cache = new Map();
  function get(i) {
    if (i < 0) return undefined;
    if (cache.has(i)) return cache.get(i);
    let v = a[i];
    if (!v || typeof v !== "object") return v;
    if (
      Array.isArray(v) &&
      typeof v[0] === "string" &&
      ["Reactive", "ShallowReactive", "Ref", "ShallowRef"].includes(v[0])
    ) {
      let r = get(v[1]);
      cache.set(i, r);
      return r;
    }
    const r = Array.isArray(v) ? [] : {};
    cache.set(i, r);
    for (const [k, n] of Object.entries(v)) r[k] = get(n);
    return r;
  }
  const root = get(0),
    seen = new Set();
  function walk(n) {
    if (!n || typeof n !== "object" || seen.has(n)) return;
    seen.add(n);
    if (
      n.component &&
      /TabbedAccordion|FeaturesSteps|FeaturesCarousel|ResourcesSectionCarousel|AllResources/.test(
        n.component,
      )
    )
      blocks[n._uid] = n;
    Object.values(n).forEach(walk);
  }
  walk(root);
}
await fs.writeFile("reference/widgets.json", JSON.stringify(blocks, null, 2));
for (const type of [
  ...new Set(Object.values(blocks).map((n) => n.component)),
]) {
  const n = Object.values(blocks).find((n) => n.component === type);
  console.log(type, JSON.stringify(n).slice(0, 1800));
}
