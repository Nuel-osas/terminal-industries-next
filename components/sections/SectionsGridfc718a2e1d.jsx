import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";

export default function SectionsGridfc718a2e1d() {
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
                {"Excessive Fuel Consumption"}
              </h3>
            </div>
            <div
              className={"sections-grid__description | body-4"}
              data-v-c32ed7e5={""}
            >
              <p data-v-c32ed7e5={""}>
                <span style={{ color: "#C2C2C2" }} data-v-c32ed7e5={""}>
                  {
                    "Without optimized routes and real-time tracking, yard jockeys and trucks spend more time idling and driving unnecessary miles, directly increasing fuel consumption and emissions."
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
                {"Wasteful Paper-Based Processes"}
              </h3>
            </div>
            <div
              className={"sections-grid__description | body-4"}
              data-v-c32ed7e5={""}
            >
              <p data-v-c32ed7e5={""}>
                <span style={{ color: "#C2C2C2" }} data-v-c32ed7e5={""}>
                  {
                    "Relying on paper manifests, logs, and checklists creates unnecessary waste and a larger carbon footprint from printing and disposal."
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
                {"No Emissions Data"}
              </h3>
            </div>
            <div
              className={"sections-grid__description | body-4"}
              data-v-c32ed7e5={""}
            >
              <p data-v-c32ed7e5={""}>
                <span style={{ color: "#C2C2C2" }} data-v-c32ed7e5={""}>
                  {
                    "Without a digital system to track and analyze all yard activity, it's impossible to accurately measure your carbon footprint or track your progress toward sustainability targets."
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
                {"Inefficient Resource Use"}
              </h3>
            </div>
            <div
              className={"sections-grid__description | body-4"}
              data-v-c32ed7e5={""}
            >
              <p data-v-c32ed7e5={""}>
                <span style={{ color: "#C2C2C2" }} data-v-c32ed7e5={""}>
                  {
                    "A lack of optimization leads to inefficient use of everything from energy for lighting to the wear and tear on your equipment, increasing your overall environmental impact."
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
                {"Difficulty Reporting"}
              </h3>
            </div>
            <div
              className={"sections-grid__description | body-4"}
              data-v-c32ed7e5={""}
            >
              <p data-v-c32ed7e5={""}>
                <span style={{ color: "#C2C2C2" }} data-v-c32ed7e5={""}>
                  {
                    "Without a centralized, automated system, gathering the data needed for accurate sustainability reporting is a time-consuming and often inaccurate manual process."
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
