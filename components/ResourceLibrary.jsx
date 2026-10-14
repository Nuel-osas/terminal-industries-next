"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import resources from "@/lib/resources.json";
const groups = [
  ["Press Releases", "press-releases", ["announcement"]],
  ["Podcasts & Articles", "podcasts-articles", ["podcast", "article"]],
  ["Videos", "videos", ["video"]],
  ["Case Studies", "case-studies", ["case-study"]],
  ["Blogs", "blogs", ["blog"]],
  ["Webinars", "webinars", ["webinar"]],
];
const scope = { "data-v-415a7f80": "" },
  sectionScope = { "data-v-2d08040b": "" };
function Card({ post }) {
  const Anchor = post.href.startsWith("/") ? Link : "a";
  return (
    <article className="blog-card" {...scope}>
      <div className="blog-card__wrapper" {...scope}>
        <div className="blog-card__image-wrapper" {...scope}>
          <Anchor
            href={post.href}
            {...(Anchor === Link
              ? { prefetch: false }
              : { target: "_blank", rel: "noreferrer" })}
            {...scope}
          >
            {post.image && (
              <img
                className="blog-card__image"
                {...scope}
                src={post.image}
                alt={post.title}
                loading="lazy"
              />
            )}
            <span className="blog-card__button button label-4" {...scope}>
              {["video", "webinar"].includes(post.category)
                ? "Watch Now"
                : "Read More"}
            </span>
          </Anchor>
        </div>
        <div className="blog-card__content" {...scope}>
          <p className="blog-card__category" {...scope}>
            {post.category}
          </p>
          <Anchor
            href={post.href}
            {...(Anchor === Link
              ? { prefetch: false }
              : { target: "_blank", rel: "noreferrer" })}
          >
            <h3 className="blog-card__title" {...scope}>
              {post.title}
            </h3>
          </Anchor>
          {post.description && (
            <p className="blog-card__excerpt" {...scope}>
              {post.description}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
function Row({ title, slug, posts }) {
  const track = useRef(null);
  return (
    <section className="resources-section" {...sectionScope}>
      <div className="resources-section__header" {...sectionScope}>
        <h2 className="resources-section__title-heading" {...sectionScope}>
          {title}
        </h2>
        <div className="resources-section__actions" {...sectionScope}>
          <Link href={"/resources/" + slug} className="local-show-all">
            Show all ↗
          </Link>
          <button
            aria-label={"Previous " + title}
            className="local-carousel-button"
            onClick={() =>
              track.current.scrollBy({ left: -350, behavior: "smooth" })
            }
          >
            ↙
          </button>
          <button
            aria-label={"Next " + title}
            className="local-carousel-button"
            onClick={() =>
              track.current.scrollBy({ left: 350, behavior: "smooth" })
            }
          >
            ↗
          </button>
        </div>
      </div>
      <div ref={track} className="local-resource-row">
        {posts.map((p) => (
          <Card post={p} key={p.href} />
        ))}
      </div>
    </section>
  );
}
export default function ResourceLibrary({ variant = "all", category = "" }) {
  const [sort, setSort] = useState("date"),
    [search, setSearch] = useState(""),
    [page, setPage] = useState(1);
  const group = groups.find((g) => g[1] === category);
  const posts = resources
    .filter(
      (p) =>
        (!group || group[2].includes(p.category)) &&
        (!search || p.title.toLowerCase().includes(search.toLowerCase())),
    )
    .sort((a, b) =>
      sort === "type"
        ? a.category.localeCompare(b.category)
        : new Date(b.date || "2026-06-18") - new Date(a.date || "2026-06-18"),
    );
  if (variant === "all")
    return (
      <div className="all-resources">
        {groups.map(([title, slug, cats]) => (
          <Row
            key={slug}
            title={title}
            slug={slug}
            posts={posts.filter((p) => cats.includes(p.category)).slice(0, 8)}
          />
        ))}
      </div>
    );
  if (variant === "latest")
    return (
      <section className="local-latest-news">
        <div className="local-library-toolbar">
          <h2>Latest News</h2>
          <fieldset>
            <legend>Order</legend>
            {[
              ["date", "Date"],
              ["type", "Type of news"],
            ].map(([v, label]) => (
              <label key={v}>
                <input
                  type="radio"
                  name="Order"
                  checked={sort === v}
                  onChange={() => setSort(v)}
                />
                {label}
              </label>
            ))}
          </fieldset>
        </div>
        <Row title="" slug="blogs" posts={posts.slice(0, 8)} />
      </section>
    );
  return (
    <section className="local-resource-category">
      <h1>{group?.[0] || "Resources"}</h1>
      <div className="local-library-toolbar">
        <label>
          Search
          <input
            aria-label="Search resources"
            value={search}
            placeholder="Search resources"
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </label>
        <label>
          Order
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="date">Newest</option>
            <option value="type">Type of news</option>
          </select>
        </label>
      </div>
      <div className="local-resource-grid">
        {posts.slice((page - 1) * 12, page * 12).map((p) => (
          <Card key={p.href} post={p} />
        ))}
      </div>
      {!posts.length && <p>No matching resources.</p>}
      <div className="local-pagination">
        <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
          ← Previous
        </button>
        <span>
          {page} / {Math.max(1, Math.ceil(posts.length / 12))}
        </span>
        <button
          disabled={page * 12 >= posts.length}
          onClick={() => setPage((p) => p + 1)}
        >
          Next →
        </button>
      </div>
    </section>
  );
}
