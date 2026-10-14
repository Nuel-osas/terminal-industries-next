import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";

export default function SectionsGridba72a37f8c() {
  return (
    <section
      className={
        "sections-grid sections-grid--dark sections-grid--gradient sections-grid--no-header"
      }
      data-v-6a166306={""}
    >
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
              id={"v-0-0-0-0-2-1"}
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
                {"Wasted Time and Resources"}
              </h3>
            </div>
            <div
              className={"sections-grid__description | body-4"}
              data-v-c32ed7e5={""}
            >
              <p data-v-c32ed7e5={""}>
                <span style={{ color: "#C2C2C2" }} data-v-c32ed7e5={""}>
                  {
                    "Without a clear, automated system, your team spends valuable time on redundant tasks like searching for trailers, manually updating spreadsheets, and making unnecessary trips, leading to significant productivity loss."
                  }
                </span>
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
                {"Human Error"}
              </h3>
            </div>
            <div
              className={"sections-grid__description | body-4"}
              data-v-c32ed7e5={""}
            >
              <p data-v-c32ed7e5={""}>
                <span style={{ color: "#C2C2C2" }} data-v-c32ed7e5={""}>
                  {
                    "Relying on verbal communication and handwritten notes creates a high risk of human error, leading to misplaced shipments, incorrect data, and costly mistakes that require time and resources to fix."
                  }
                </span>
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
                {"Poor Asset Utilization"}
              </h3>
            </div>
            <div
              className={"sections-grid__description | body-4"}
              data-v-c32ed7e5={""}
            >
              <p data-v-c32ed7e5={""}>
                <span style={{ color: "#C2C2C2" }} data-v-c32ed7e5={""}>
                  {
                    " It's difficult to get the most out of your fleet when you don't know where every asset is or its status. This leads to underutilized trailers, jockeys with no assigned tasks, and a general lack of visibility into your capacity."
                  }
                </span>
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
                {"Workflow Bottlenecks"}
              </h3>
            </div>
            <div
              className={"sections-grid__description | body-4"}
              data-v-c32ed7e5={""}
            >
              <p data-v-c32ed7e5={""}>
                <span style={{ color: "#C2C2C2" }} data-v-c32ed7e5={""}>
                  {
                    "When one part of the operation slows down, it impacts everything else. Without a system to manage traffic flow and task assignment, you're constantly fighting bottlenecks at the gate, at the dock, and throughout the yard."
                  }
                </span>
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
                {"Reactive, not Proactive"}
              </h3>
            </div>
            <div
              className={"sections-grid__description | body-4"}
              data-v-c32ed7e5={""}
            >
              <p data-v-c32ed7e5={""}>
                <span style={{ color: "#C2C2C2" }} data-v-c32ed7e5={""}>
                  {
                    "In an inefficient yard, teams are always reacting to problems as they happen instead of proactively preventing them. This leads to constant fire-fighting and an inability to plan or optimize."
                  }
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
