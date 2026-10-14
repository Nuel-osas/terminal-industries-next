"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Brand from "./Brand";
import items from "@/lib/navigation.json";
const scope = { "data-v-2315c5d1": "" };
const menuScope = { "data-v-5aa95c1e": "" };
const Arrow = () => (
  <svg viewBox="0 0 12 12" width="12" height="12" fill="none">
    <path d="m3 4.5 3 3 3-3" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);
export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(null);
  const [tab, setTab] = useState(0);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    setOpen(null);
    setMobile(false);
    setTab(0);
  }, [pathname]);
  useEffect(() => {
    const escape = (e) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobile(false);
      }
    };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, []);
  const selected = items.find((i) => i.label === open);
  const section = selected?.sections?.[tab] || selected?.sections?.[0];
  return (
    <header className="site-header" {...scope}>
      <div className="site-container" {...scope}>
        <div className="site-grid w-full mx-auto">
          <div className="inner" {...scope}>
            <Link
              href="/"
              className="logo-link"
              aria-label="Go to homepage"
              {...scope}
            >
              <Brand />
            </Link>
            <nav
              className="nav font-nav"
              aria-label="Primary navigation"
              {...scope}
            >
              {items.map((item) =>
                item.sections?.length ? (
                  <div
                    className="navigation-menu-root"
                    {...menuScope}
                    key={item.label}
                  >
                    <button
                      className={
                        "nav-dropdown-trigger" +
                        (open === item.label ? " is-open" : "")
                      }
                      aria-expanded={open === item.label}
                      onMouseEnter={() => {
                        setOpen(item.label);
                        setTab(0);
                      }}
                      onClick={() => {
                        setOpen(open === item.label ? null : item.label);
                        setTab(0);
                      }}
                    >
                      {item.label} <Arrow />
                    </button>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={
                      item.href?.startsWith("/")
                        ? item.href
                        : "/" + (item.href || "about")
                    }
                    className="nav-link"
                    {...scope}
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>
            <div className="header-actions" {...scope}>
              <div className="cta-buttons" {...scope}>
                <a
                  href="https://explore.terminal-industries.com"
                  target="_blank"
                  rel="noreferrer"
                  className="cta-button cta-button--lime"
                  {...scope}
                >
                  <span className="cta-button-label" {...scope}>
                    EXPLORE
                    <br />
                    PRODUCT
                  </span>
                </a>
                <Link
                  href="/demo-landing-page"
                  className="cta-button cta-button--white"
                  {...scope}
                >
                  <span className="cta-button-label" {...scope}>
                    REQUEST
                    <br />
                    DEMO
                  </span>
                </Link>
                <Link
                  href="/contact"
                  className="cta-button cta-button--grey"
                  {...scope}
                >
                  <span className="cta-button-label" {...scope}>
                    CONTACT
                    <br />
                    US
                  </span>
                </Link>
              </div>
            </div>
            <button
              className={
                "toggle-mobile-menu-button label-6" + (mobile ? " active" : "")
              }
              aria-label="Toggle menu"
              aria-expanded={mobile}
              onClick={() => {
                setMobile(!mobile);
                setOpen(null);
              }}
              {...scope}
            >
              <span className="wrapper" {...scope}>
                <span className="hl --1 t" {...scope} />
                <span className="hl --2 t" {...scope} />
              </span>
            </button>
          </div>
          {open && !mobile && (
            <div
              className="local-navigation-dropdown"
              {...menuScope}
              onMouseLeave={() => setOpen(null)}
            >
              <div className="nav-dropdown-content" data-state="open">
                <div className="dropdown-layout">
                  <div className="dropdown-tabs">
                    {selected.sections.map((s, i) => (
                      <button
                        key={s.title}
                        className={
                          "dropdown-tab" + (i === tab ? " is-active" : "")
                        }
                        onMouseEnter={() => setTab(i)}
                        onClick={() => setTab(i)}
                      >
                        <span>{s.title}</span>
                        <span>›</span>
                      </button>
                    ))}
                  </div>
                  <div className="dropdown-panel">
                    <div className="content-wrapper">
                      <div className="content-body">
                        <div className="content-text">
                          <h2>{section.title}</h2>
                          {section.description
                            .split("\n\n")
                            .filter((p) => p !== section.title)
                            .map((p, i) => (
                              <p key={i}>{p}</p>
                            ))}
                        </div>
                        <div className="content-links">
                          {section.links?.map((l, i) => (
                            <Link
                              key={i}
                              href={l.href || "/"}
                              className="content-link"
                            >
                              <span>{l.label}</span>
                              <span>↗</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                      {section.image && (
                        <img
                          src={section.image}
                          alt=""
                          className="local-menu-image"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {mobile && (
            <div className="local-mobile-menu" {...scope}>
              {items.map((item) => (
                <div key={item.label}>
                  {item.sections?.length ? (
                    <>
                      <button
                        className="drawer-dropdown-title"
                        onClick={() =>
                          setOpen(open === item.label ? null : item.label)
                        }
                      >
                        {item.label}
                        <span>{open === item.label ? "−" : "+"}</span>
                      </button>
                      {open === item.label && (
                        <div className="local-mobile-links">
                          {item.sections.map((s) => (
                            <div key={s.title}>
                              <p>{s.title}</p>
                              {s.links?.map((l, i) => (
                                <Link key={i} href={l.href || "/"}>
                                  {l.label} ↗
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link className="drawer-dropdown-title" href="/about">
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link href="/demo-landing-page" className="local-mobile-cta">
                Request demo ↗
              </Link>
              <Link href="/contact" className="local-mobile-cta">
                Contact us ↗
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
