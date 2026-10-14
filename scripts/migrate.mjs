// One-time conversion of public server-rendered content into editable JSX.
import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import * as cheerio from "cheerio";
const pages = JSON.parse(
  await fs.readFile("reference/pages.json", "utf8"),
).filter((p) => !p.error);
const assetMap = JSON.parse(
  await fs.readFile("reference/asset-map.json", "utf8"),
);
const widgets = JSON.parse(await fs.readFile("reference/widgets.json", "utf8"));
const faqs = Object.values(widgets).filter(
  (x) => x.component === "TabbedAccordion",
);
await fs.writeFile(
  "lib/faqs.json",
  JSON.stringify(Object.fromEntries(faqs.map((f) => [f._uid, f]))),
);
const local = (url) =>
  assetMap[new URL(url, "https://terminal-industries.com").href] || url;
const original = cheerio.load(
  await fs.readFile("reference/source.html", "utf8"),
);
const attrs = {
  class: "className",
  for: "htmlFor",
  tabindex: "tabIndex",
  viewbox: "viewBox",
  preserveaspectratio: "preserveAspectRatio",
  srcset: "srcSet",
  crossorigin: "crossOrigin",
  autoplay: "autoPlay",
  playsinline: "playsInline",
  allowfullscreen: "allowFullScreen",
  frameborder: "frameBorder",
  maxlength: "maxLength",
  minlength: "minLength",
  readonly: "readOnly",
  autocomplete: "autoComplete",
  autofocus: "autoFocus",
  fetchpriority: "fetchPriority",
  contenteditable: "contentEditable",
  colspan: "colSpan",
  rowspan: "rowSpan",
  spellcheck: "spellCheck",
  datetime: "dateTime",
  inputmode: "inputMode",
};
const boolean = new Set([
  "muted",
  "autoPlay",
  "playsInline",
  "loop",
  "controls",
  "required",
  "disabled",
  "multiple",
  "readOnly",
  "autoFocus",
  "allowFullScreen",
  "hidden",
  "open",
  "defaultChecked",
]);
const voids = new Set([
  "img",
  "source",
  "input",
  "br",
  "hr",
  "wbr",
  "area",
  "embed",
  "param",
  "track",
  "col",
]);
let currentRoute = "/";
const sections = new Map();
const inlineStyles = new Set();
function render(node, options = {}) {
  if (node.type === "text")
    return node.data ? `{${JSON.stringify(node.data)}}` : "";
  if (node.type !== "tag") return "";
  let tag = node.name,
    name = tag;
  if (["script", "noscript", "style", "link", "meta"].includes(tag)) return "";
  if (tag === "header" && node.attribs.class?.includes("site-header"))
    return "<SiteHeader />";
  if (node.attribs.class?.split(" ").includes("tabbed-accordion")) {
    const $ = cheerio.load(node);
    const title = $(".accordion-item__title").first().text();
    const faq = faqs.find((f) => f.tabs?.[0]?.items?.[0]?.title === title);
    if (faq) return "<TabbedFAQ id=" + JSON.stringify(faq._uid) + " />";
  }
  if (node.attribs.class?.split(" ").includes("form-section")) name = "form";
  if (node.attribs.class?.split(" ").includes("video-carousel"))
    return "<HeroSequence />";
  if (node.attribs.class?.split(" ").includes("roi-calculator"))
    return "<YardCalculator />";
  if (node.attribs.class?.split(" ").includes("grader"))
    return "<YardGrader />";
  if (node.attribs.class?.split(" ").includes("all-resources"))
    return "<ResourceLibrary />";
  if (node.attribs.class?.split(" ").includes("latest-news"))
    return '<ResourceLibrary variant="latest" />';
  if (node.attribs.class?.split(" ").includes("category-resources"))
    return (
      '<ResourceLibrary variant="category" category=' +
      JSON.stringify(currentRoute.split("/").pop()) +
      " />"
    );
  if (tag === "iframe")
    return (
      "<ExternalMedia url={" + JSON.stringify(node.attribs.src || "") + "} />"
    );
  if (tag === "a") {
    let href = node.attribs.href || "";
    if (href.startsWith("https://terminal-industries.com"))
      href = href.slice("https://terminal-industries.com".length) || "/";
    if (href.startsWith("/blog/"))
      href = href.replace("/blog/", "/all-resources/");
    if (href.startsWith("/tel:")) href = href.slice(1);
    if (href === "/global/forms/contact-us" || href.startsWith("/cdn-cgi/"))
      href = "/contact";
    node.attribs.href = href;
    if (
      href.startsWith("/") &&
      !href.startsWith("//") &&
      !/\.[a-z0-9]+$/i.test(href)
    ) {
      name = "Link";
      node.attribs.href = href;
    }
  }
  const props = [];
  for (let [key, value] of Object.entries(node.attribs || {})) {
    if (
      /^on/i.test(key) ||
      [
        "integrity",
        "data-nuxt-pic",
        "data-nuxt-img",
        "data-vue-router-view",
        "data-ssr-id",
      ].includes(key) ||
      key.startsWith("v-")
    )
      continue;
    if (["src", "poster"].includes(key)) {
      if (!value) continue;
      value = local(value);
    }
    if (key === "srcset") continue; // Use each original image once; CSS controls responsive sizing.
    if (tag === "source" && !node.attribs.src) continue;
    if (key === "style") {
      const obj = {};
      for (const decl of value.split(";")) {
        const i = decl.indexOf(":");
        if (i < 0) continue;
        let k = decl.slice(0, i).trim();
        if (!k) continue;
        k = k.startsWith("--")
          ? k
          : k.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
        obj[k] = decl
          .slice(i + 1)
          .trim()
          .replace(
            /url\((['"]?)([^)'"]+)\1\)/g,
            (m, q, u) => `url("${u.startsWith("#") ? u : local(u)}")`,
          );
      }
      if (Object.keys(obj).length) props.push(`style={${JSON.stringify(obj)}}`);
      continue;
    }
    if (
      key === "action" ||
      key === "method" ||
      key === "novalidate" ||
      (key === "disabled" && node.attribs.type === "submit")
    )
      continue;
    if (key === "selected") continue;
    key = attrs[key] || key;
    if (
      !key.startsWith("data-") &&
      !key.startsWith("aria-") &&
      [
        "stroke-width",
        "stroke-linecap",
        "stroke-linejoin",
        "fill-rule",
        "clip-rule",
        "clip-path",
        "fill-opacity",
        "stroke-opacity",
        "stop-color",
        "stop-opacity",
        "color-interpolation-filters",
        "font-size",
        "text-anchor",
        "xlink:href",
        "xmlns:xlink",
        "stroke-dasharray",
        "stroke-dashoffset",
        "clip-path-units",
        "shape-rendering",
      ].includes(key)
    )
      key = key.replace(/[-:]([a-z])/g, (_, c) => c.toUpperCase());
    if (
      key === "value" &&
      tag === "input" &&
      !["submit", "button", "hidden"].includes(node.attribs.type)
    )
      key = "defaultValue";
    if (key === "checked") key = "defaultChecked";
    props.push(
      boolean.has(key) ? `${key}={true}` : `${key}={${JSON.stringify(value)}}`,
    );
  }
  if (name === "Link") props.push("prefetch={false}");
  if (name === "form") props.push('data-local-form="true"');
  let content = (node.children || []).map((n) => render(n)).join("");
  if (tag === "textarea") {
    props.push(`defaultValue={${JSON.stringify(cheerio.load(node).text())}}`);
    content = "";
  }
  if (tag === "source" && !node.attribs.src) return "";
  const jsx = voids.has(tag)
    ? `<${name} ${props.join(" ")} />`
    : `<${name} ${props.join(" ")}>${content}</${name}>`;
  const canSplit =
    !options.noSplit &&
    (tag === "section" ||
      tag === "footer" ||
      [
        "footer__height-holder",
        "site-header",
        "site-footer",
        "paragraphs-wrapper",
      ].some((c) => node.attribs.class?.split(" ").includes(c)));
  if (canSplit) {
    const hash = crypto
      .createHash("sha256")
      .update(jsx)
      .digest("hex")
      .slice(0, 10);
    if (!sections.has(hash)) {
      const base = (node.attribs.id || node.attribs.class?.split(" ")[0] || tag)
        .split(/[^a-z0-9]+/i)
        .filter(Boolean)
        .map((x) => x[0].toUpperCase() + x.slice(1))
        .join("");
      sections.set(hash, {
        name: (/^[0-9]/.test(base) ? "Section" : "") + base + hash,
        jsx,
      });
    }
    return `<${sections.get(hash).name} />`;
  }
  return jsx;
}
const dependencies = (body) =>
  [...sections.values()]
    .filter((s) => body.includes(`<${s.name} `))
    .map((s) => `import ${s.name} from '@/components/sections/${s.name}';`)
    .join("\n");
const baseImports = `import Link from 'next/link';\nimport SiteHeader from '@/components/SiteHeader';\nimport HeroSequence from '@/components/HeroSequence';\nimport YardCalculator from '@/components/YardCalculator';\nimport YardGrader from '@/components/YardGrader';\nimport ExternalMedia from '@/components/ExternalMedia';\nimport TabbedFAQ from '@/components/TabbedFAQ';\nimport ResourceLibrary from '@/components/ResourceLibrary';\n`;
await fs.mkdir("components/pages", { recursive: true });
await fs.mkdir("components/sections", { recursive: true });
await fs.mkdir("lib", { recursive: true });
const routes = [];
for (const page of pages) {
  currentRoute = page.route;
  const $ = cheerio.load(
    await fs.readFile("reference/pages/" + page.file, "utf8"),
  );
  $("style").each((_, e) => inlineStyles.add($(e).text()));
  const root = $("#__nuxt").children().first();
  // Third-party trackers and embedded widgets are not application components.
  root
    .find(
      "script,noscript,style,.tracking,#salespeak-widget,cs-native-frame-holder,.app-loader,.app-transition",
    )
    .remove();
  let body = root
    .children()
    .map((_, e) => render(e))
    .get()
    .join("\n");
  if (!body) body = render(root[0]);
  const hash = crypto
      .createHash("sha256")
      .update(page.route)
      .digest("hex")
      .slice(0, 10),
    name = "Page" + hash;
  await fs.writeFile(
    `components/pages/${name}.jsx`,
    baseImports +
      dependencies(body) +
      `\nexport default function ${name}(){return <>${body}</>;}`,
  );
  const dir = path.join("app", page.route);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(
    path.join(dir, "page.tsx"),
    `import Content from '@/components/pages/${name}';\nimport Experience from '@/components/Experience';\nexport const metadata={title:${JSON.stringify(page.title)}};\nexport default function Page(){return <Experience route=${JSON.stringify(page.route)}><Content/></Experience>;}`,
  );
  routes.push({ route: page.route, title: page.title });
}
for (const section of sections.values())
  await fs.writeFile(
    `components/sections/${section.name}.jsx`,
    baseImports +
      dependencies(section.jsx) +
      `\nexport default function ${section.name}(){return (${section.jsx});}`,
  );
const logo = render(original("header .logo-link svg")[0], { noSplit: true });
await fs.writeFile(
  "components/Brand.jsx",
  `export default function Brand(){return (${logo});}`,
);
const config = JSON.parse(await fs.readFile("reference/config.json", "utf8"));
function text(n) {
  if (!n) return "";
  if (n.text) return n.text;
  if (n.content)
    return n.content.map(text).join(n.type === "doc" ? "\n\n" : "");
  return "";
}
const navigation = config.navigation_items.map((item) => ({
  label: item.label,
  href: item.link?.cached_url,
  sections: item.sections?.map((s) => ({
    title: s.title,
    description: text(s.content),
    image: s.image?.filename ? local(s.image.filename) : null,
    links: s.links?.map((l) => ({
      label: l.label,
      href: l.link?.cached_url?.startsWith("http")
        ? l.link.cached_url
        : "/" + l.link?.cached_url?.replace(/^\//, ""),
    })),
  })),
}));
await fs.writeFile("lib/navigation.json", JSON.stringify(navigation, null, 2));
await fs.writeFile("docs/routes.json", JSON.stringify(routes, null, 2));
await fs.writeFile(
  "styles/inline.css",
  [...inlineStyles]
    .join("\n")
    .replaceAll("url(var(--bg-url))", "var(--bg-url)"),
);
const css = [
  ...new Set([
    ...JSON.parse(await fs.readFile("reference/stylesheets.json", "utf8")).map(
      (u) => path.basename(new URL(u).pathname),
    ),
    ...JSON.parse(await fs.readFile("reference/extra-styles.json", "utf8")),
  ]),
];
await fs.writeFile(
  "styles/globals.css",
  css.map((f) => `@import './${f}';`).join("\n") +
    "\n@import './inline.css';\n@import './local.css';\n",
);
console.log({ routes: routes.length, sections: sections.size });
