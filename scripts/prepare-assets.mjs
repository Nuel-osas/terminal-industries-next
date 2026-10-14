import fs from "node:fs/promises";
import crypto from "node:crypto";
import sharp from "sharp";
const map = JSON.parse(await fs.readFile("reference/asset-map.json"));
const failures = JSON.parse(await fs.readFile("docs/assets.json")).failures;
Object.assign(
  map,
  JSON.parse(await fs.readFile("reference/extra-assets.json")),
);
const sources = [
  ...new Set([...Object.keys(map), ...failures.map((x) => x.url)]),
].filter(
  (u) => !u.includes("var(--") && !/desktop_60_410|mobile_60_409/.test(u),
);
const pending = sources.filter(
  (u) =>
    u.includes("a.storyblok.com") && /\.(?:jpe?g|png|webp)(?:\/|$)/i.test(u),
);
let index = 0,
  done = 0;
const errors = [];
await Promise.all(
  Array.from({ length: 8 }, async () => {
    while (index < pending.length) {
      const url = pending[index++];
      try {
        const target =
          "/assets/" +
          crypto
            .createHash("sha256")
            .update(url + "-2560-webp")
            .digest("hex")
            .slice(0, 20) +
          ".webp";
        let data;
        if (map[url]) data = await fs.readFile("public" + map[url]);
        else {
          const response = await fetch(
            url.split("/m/")[0] + "/m/2560x0/filters:format(webp):quality(90)",
            { signal: AbortSignal.timeout(60000) },
          );
          if (!response.ok) throw Error(response.status);
          data = Buffer.from(await response.arrayBuffer());
        }
        await sharp(data, { limitInputPixels: false })
          .resize({ width: 2560, withoutEnlargement: true })
          .webp({ quality: 90 })
          .toFile("public" + target);
        map[url] = target;
        if (++done % 50 === 0)
          console.log("Prepared images", done + "/" + pending.length);
      } catch (e) {
        errors.push({ url, error: e.message });
      }
    }
  }),
);
for (const url of sources.filter((u) => !map[u] && !pending.includes(u))) {
  try {
    const r = await fetch(url, { signal: AbortSignal.timeout(180000) });
    if (!r.ok) throw Error(r.status);
    const file =
      "/assets/" +
      crypto.createHash("sha256").update(url).digest("hex").slice(0, 20) +
      new URL(url).pathname.match(/\.[a-z0-9]+$/i)?.[0];
    await fs.writeFile("public" + file, Buffer.from(await r.arrayBuffer()));
    map[url] = file;
    console.log("Recovered", url);
  } catch (e) {
    errors.push({ url, error: e.message });
  }
}
const frames = {};
for (const [device, count] of [
  ["desktop", 410],
  ["mobile", 409],
]) {
  const url = `https://terminal-industries.com/static/frames/home/${device}/webp/hero_anim_${device}_60_0.webp`,
    file =
      "/assets/" +
      crypto.createHash("sha256").update(url).digest("hex").slice(0, 20) +
      ".webp";
  const r = await fetch(url);
  if (!r.ok) throw Error(url);
  await fs.writeFile("public" + file, Buffer.from(await r.arrayBuffer()));
  map[url] = file;
  frames[device] = Array.from(
    { length: count },
    (_, i) =>
      map[
        `https://terminal-industries.com/static/frames/home/${device}/webp/hero_anim_${device}_60_${i}.webp`
      ],
  );
}
await fs.mkdir("lib", { recursive: true });
await fs.writeFile("lib/frames.json", JSON.stringify(frames));
await fs.writeFile("reference/asset-map.json", JSON.stringify(map, null, 2));
await fs.writeFile(
  "docs/asset-preparation.json",
  JSON.stringify({ images: done, frames: 819, failures: errors }, null, 2),
);
console.log({ images: done, errors });
// Remove superseded generated originals after retaining a complete URL manifest.
const keep = new Set(Object.values(map).map((f) => f.replace("/assets/", "")));
for (const name of await fs.readdir("public/assets"))
  if (!keep.has(name)) await fs.unlink("public/assets/" + name);
