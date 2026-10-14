"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import cards from "@/lib/feature-cards.json";
import RichText from "./RichText";
const scope = { "data-v-8ab4cbbe": "" },
  cardScope = { "data-v-bdc48198": "" };
export default function FeatureCarousel() {
  const [active, setActive] = useState(0);
  const track = useRef(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      const row = track.current,
        card = row.children[active];
      row.scrollTo({
        left: card.offsetLeft - row.offsetLeft,
        behavior: "smooth",
      });
    }, 100);
    return () => clearTimeout(timer);
  }, [active]);
  return (
    <div
      className="features-carousel-expandable local-native-features"
      {...scope}
    >
      <div className="tabs-wrapper" {...scope}>
        <div className="tabs" {...scope}>
          {cards.map((card, i) => (
            <button
              key={card.tab_label}
              className={(i === active ? "is-active " : "") + "tab"}
              {...scope}
              aria-pressed={i === active}
              onClick={() => setActive(i)}
            >
              {card.tab_label}
            </button>
          ))}
        </div>
        <div
          className="navigation-buttons navigation-buttons-desktop"
          {...scope}
        >
          <button
            className="nav-button"
            aria-label="Previous platform feature"
            disabled={active === 0}
            onClick={() => setActive(active - 1)}
            {...scope}
          >
            ↙
          </button>
          <button
            className="nav-button right"
            aria-label="Next platform feature"
            disabled={active === cards.length - 1}
            onClick={() => setActive(active + 1)}
            {...scope}
          >
            ↗
          </button>
        </div>
      </div>
      <ul className="carousel__wrapper" ref={track} {...scope}>
        {cards.map((card, i) => (
          <li className="slide" {...scope} key={card.tab_label}>
            <div
              className={
                "features-carousel-expandable-card " +
                (i === active ? "is-expanded" : "is-collapsed")
              }
              {...cardScope}
              {...scope}
              aria-expanded={i === active}
              aria-label={card.tab_label}
            >
              {i === active ? (
                <div className="expanded-card-wrapper-inner" {...cardScope}>
                  <div className="card-image" {...cardScope}>
                    <img
                      className="image"
                      {...cardScope}
                      src={card.image}
                      alt=""
                    />
                    <div className="image-overlay" {...cardScope} />
                  </div>
                  <div className="card-content expanded-content" {...cardScope}>
                    <div className="content-top" {...cardScope}>
                      <div className="title-group" {...cardScope}>
                        <p
                          className="card-subtitle content-animate"
                          {...cardScope}
                        >
                          {card.tab_label}
                        </p>
                        <div
                          className="card-title-expanded content-animate"
                          {...cardScope}
                        >
                          <RichText value={card.title} />
                        </div>
                      </div>
                      <div
                        className="card-description content-animate"
                        {...cardScope}
                      >
                        <RichText value={card.description} />
                      </div>
                    </div>
                    <div className="card-cta content-animate" {...cardScope}>
                      <Link
                        className="cta-button button label-4"
                        {...cardScope}
                        href={"/" + card.button.link.cached_url}
                        prefetch={false}
                      >
                        {card.button.label}
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  className="local-collapsed-feature"
                  onClick={() => setActive(i)}
                  aria-label={"Expand " + card.tab_label}
                >
                  <img src={card.image} alt="" />
                  <div className="local-feature-label">{card.tab_label}</div>
                  <div className="local-feature-title">
                    <RichText value={card.title} />
                  </div>
                  <span className="local-feature-plus">+</span>
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
