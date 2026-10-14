import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";

export default function SectionsGride1dc208b12() {
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
            {"Why Your Yard Keeps You Up at Night"}
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
                {"Financial Blind Spots"}
              </h3>
            </div>
            <div
              className={"sections-grid__description | body-4"}
              data-v-c32ed7e5={""}
            >
              <p data-v-c32ed7e5={""}>
                <span style={{ color: "#C2C2C2" }} data-v-c32ed7e5={""}>
                  {
                    "Lack of accurate data on yard operations, leading to hidden costs in demurrage, detention, and driver idle time."
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
                {"Asset Underutilization"}
              </h3>
            </div>
            <div
              className={"sections-grid__description | body-4"}
              data-v-c32ed7e5={""}
            >
              <p data-v-c32ed7e5={""}>
                {
                  "Inefficient trailer and dock management that ties up capital and limits throughput, directly impacting profitability."
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
                {"Strategic Risk"}
              </h3>
            </div>
            <div
              className={"sections-grid__description | body-4"}
              data-v-c32ed7e5={""}
            >
              <p data-v-c32ed7e5={""}>
                {
                  "No real-time visibility to adapt to market shifts, customer demands, or unexpected disruptions, putting long-term growth at risk."
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
