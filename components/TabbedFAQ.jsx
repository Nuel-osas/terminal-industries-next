"use client";
import { useState } from "react";
import data from "@/lib/faqs.json";
import RichText from "./RichText";
export default function TabbedFAQ({ id }) {
  const copy = data[id];
  const [tab, setTab] = useState(0);
  return (
    <section className="tabbed-accordion">
      <div className="tabbed-accordion__wrapper">
        <div className="tabbed-accordion__richtext animated-strong">
          <RichText value={copy.content || copy.title} />
        </div>
        <div className="tabbed-accordion__content">
          <div className="tabbed-accordion__tabs" role="tablist">
            {copy.tabs.map((t, i) => (
              <button
                key={t._uid}
                className={
                  "tab-button" + (tab === i ? " tab-button--active" : "")
                }
                role="tab"
                aria-selected={tab === i}
                onClick={() => setTab(i)}
              >
                {t.title || t.label}
              </button>
            ))}
          </div>
          <div className="tabbed-accordion__accordion" key={tab}>
            {copy.tabs[tab].items.map((item) => (
              <details className="accordion-item" key={item._uid}>
                <summary className="accordion-item__summary">
                  <span className="accordion-item__title">{item.title}</span>
                  <svg
                    className="accordion-item__icon"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 0v24M0 12h24"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </summary>
                <div className="accordion-item__content">
                  <div className="accordion-item__content-inner">
                    <RichText value={item.content} />
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
