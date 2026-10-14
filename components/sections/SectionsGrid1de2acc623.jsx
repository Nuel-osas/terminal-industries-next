import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";

export default function SectionsGrid1de2acc623() {
  return (
    <section
      className={"sections-grid sections-grid--dark sections-grid--gradient"}
      aria-labelledby={"section-label"}
      data-v-6a166306={""}
    >
      <div
        className={"sections-grid__header--stacked sections-grid__header"}
        data-v-6a166306={""}
      >
        <p
          id={"section-label"}
          className={"sections-grid__label | label label-5"}
          role={"text"}
          data-v-6a166306={""}
        >
          {"Core Pain Points"}
        </p>
        <div
          className={"sections-grid__title animated-strong"}
          data-v-6a166306={""}
        >
          <h2 className={"title-si"} data-v-6a166306={""}>
            {"The Daily Frustrations on the Ground"}
          </h2>
          <p
            className={"sections-grid__title-paragraph"}
            data-v-6a166306={""}
          ></p>
        </div>
      </div>
      <div
        className={
          "sections-grid__container sections-grid--dark sections-grid--bottom-extensions"
        }
        data-v-6a166306={""}
        data-v-c32ed7e5={""}
      >
        <svg
          width={"0"}
          height={"0"}
          viewBox={"0 0 0 0"}
          className={"sections-grid__svg"}
          data-v-c32ed7e5={""}
        >
          <defs data-v-c32ed7e5={""}>
            <filter
              id={"v-0-0-0-0-1-1"}
              x={"0"}
              y={"0"}
              width={"155"}
              height={"89"}
              filterUnits={"userSpaceOnUse"}
              colorInterpolationFilters={"sRGB"}
              data-v-c32ed7e5={""}
            >
              <feGaussianBlur
                stdDeviation={"15"}
                data-v-c32ed7e5={""}
              ></feGaussianBlur>
            </filter>
          </defs>
        </svg>
        <div className={"sections-grid__item"} data-v-c32ed7e5={""}>
          <div className={"sections-grid__content"} data-v-c32ed7e5={""}>
            <div
              className={"sections-grid__heading-wrapper"}
              data-v-c32ed7e5={""}
            >
              <h3 className={"sections-grid__heading"} data-v-c32ed7e5={""}>
                {"Wasted Time"}
              </h3>
            </div>
            <div
              className={"sections-grid__description | body-4"}
              data-v-c32ed7e5={""}
            >
              <p data-v-c32ed7e5={""}>
                <span style={{ color: "#C2C2C2" }} data-v-c32ed7e5={""}>
                  {
                    "You spend too much time searching for trailers in a crowded yard, relying on memory or inefficient communication."
                  }
                </span>
              </p>
              <p data-v-c32ed7e5={""}></p>
            </div>
          </div>
        </div>
        <div className={"sections-grid__item"} data-v-c32ed7e5={""}>
          <div className={"sections-grid__content"} data-v-c32ed7e5={""}>
            <div
              className={"sections-grid__heading-wrapper"}
              data-v-c32ed7e5={""}
            >
              <h3 className={"sections-grid__heading"} data-v-c32ed7e5={""}>
                {"Confusing Instructions"}
              </h3>
            </div>
            <div
              className={"sections-grid__description | body-4"}
              data-v-c32ed7e5={""}
            >
              <p data-v-c32ed7e5={""}>
                {
                  "Task assignments are vague or delivered via a static list, leaving you to guess what to do next."
                }
              </p>
              <p data-v-c32ed7e5={""}></p>
            </div>
          </div>
        </div>
        <div className={"sections-grid__item"} data-v-c32ed7e5={""}>
          <div className={"sections-grid__content"} data-v-c32ed7e5={""}>
            <div
              className={"sections-grid__heading-wrapper"}
              data-v-c32ed7e5={""}
            >
              <h3 className={"sections-grid__heading"} data-v-c32ed7e5={""}>
                {"Unsafe Conditions"}
              </h3>
            </div>
            <div
              className={"sections-grid__description | body-4"}
              data-v-c32ed7e5={""}
            >
              <p data-v-c32ed7e5={""}>
                {
                  "You're often walking into unsafe or unfamiliar areas, and you lack a clear way to report hazards or problems."
                }
              </p>
              <p data-v-c32ed7e5={""}></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
