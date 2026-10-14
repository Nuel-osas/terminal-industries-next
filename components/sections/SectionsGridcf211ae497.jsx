import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";

export default function SectionsGridcf211ae497() {
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
          {"The Problem"}
        </p>
        <div
          className={"spacing sections-grid__title animated-strong"}
          data-v-6a166306={""}
        >
          <h2 className={"title-si"} data-v-6a166306={""}>
            {"Your Yard’s Inefficiency is Eroding Profitability"}
          </h2>
          <p
            className={"sections-grid__title-paragraph"}
            data-v-6a166306={""}
          ></p>
        </div>
        <div className={"sections-grid__paragraph"} data-v-6a166306={""}>
          <p className={"paragraph body-4"} data-v-6a166306={""}>
            <span style={{ color: "#C2C2C2" }} data-v-6a166306={""}>
              {
                "For contract carriers, your yard is the pulse of your business—but it’s often the most inefficient part of operations. Manual gate processes, disconnected systems, and lack of real-time visibility lead to long driver wait times, misplaced assets, and costly detention fees. These challenges directly impact profitability and make it difficult to provide the high level of service your clients expect."
              }
            </span>
          </p>
        </div>
      </div>
      <div
        className={
          "sections-grid__container sections-grid--dark sections-grid--four-items sections-grid--bottom-extensions"
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
                {"High Asset Churn"}
              </h3>
            </div>
            <div
              className={"sections-grid__description | body-4"}
              data-v-c32ed7e5={""}
            >
              <p data-v-c32ed7e5={""}>
                {
                  "Trailers constantly moving in and out require precise tracking to avoid underutilization."
                }
              </p>
              <p data-v-c32ed7e5={""}></p>
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
                {"Manual Gate Processes"}
              </h3>
            </div>
            <div
              className={"sections-grid__description | body-4"}
              data-v-c32ed7e5={""}
            >
              <p data-v-c32ed7e5={""}>
                {
                  "Time-consuming checks create bottlenecks and reduce throughput."
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
                {"Multi-Location Operations"}
              </h3>
            </div>
            <div
              className={"sections-grid__description | body-4"}
              data-v-c32ed7e5={""}
            >
              <p data-v-c32ed7e5={""}>
                {
                  "Managing multiple yards with varying layouts and processes requires scalable visibility."
                }
              </p>
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
                {"Accessorial Cost Management"}
              </h3>
            </div>
            <div
              className={"sections-grid__description | body-4"}
              data-v-c32ed7e5={""}
            >
              <p data-v-c32ed7e5={""}>
                {
                  "Detention, demurrage, and layover fees must be tracked accurately to maintain margins."
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
