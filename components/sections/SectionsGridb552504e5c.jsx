import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";

export default function SectionsGridb552504e5c() {
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
                {"Lack of Real-Time Oversight"}
              </h3>
            </div>
            <div
              className={"sections-grid__description | body-4"}
              data-v-c32ed7e5={""}
            >
              <p data-v-c32ed7e5={""}>
                <span style={{ color: "#C2C2C2" }} data-v-c32ed7e5={""}>
                  {
                    "Without a system to monitor traffic flow and asset movement, it’s difficult to enforce safe practices and prevent dangerous situations, such as crowded lanes or unsafe speeds."
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
                {"Paper-Based Audits"}
              </h3>
            </div>
            <div
              className={"sections-grid__description | body-4"}
              data-v-c32ed7e5={""}
            >
              <p data-v-c32ed7e5={""}>
                <span style={{ color: "#C2C2C2" }} data-v-c32ed7e5={""}>
                  {
                    "Relying on manual checklists and handwritten logs makes it nearly impossible to maintain an accurate, easily auditable trail of all yard activity, leaving you exposed during an inspection."
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
                {"Unaccounted for Visitors and Drivers"}
              </h3>
            </div>
            <div
              className={"sections-grid__description | body-4"}
              data-v-c32ed7e5={""}
            >
              <p data-v-c32ed7e5={""}>
                <span style={{ color: "#C2C2C2" }} data-v-c32ed7e5={""}>
                  {
                    "A lack of digital gate management means you may not have an accurate record of who is in your yard, increasing security risks and making it difficult to account for everyone in an emergency."
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
                {"Inefficient Incident Response"}
              </h3>
            </div>
            <div
              className={"sections-grid__description | body-4"}
              data-v-c32ed7e5={""}
            >
              <p data-v-c32ed7e5={""}>
                <span style={{ color: "#C2C2C2" }} data-v-c32ed7e5={""}>
                  {
                    "When an incident occurs, a lack of real-time data on the location of assets and personnel can delay response times, potentially escalating a small issue into a major crisis."
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
                {"Non-Compliant Practices"}
              </h3>
            </div>
            <div
              className={"sections-grid__description | body-4"}
              data-v-c32ed7e5={""}
            >
              <p data-v-c32ed7e5={""}>
                <span style={{ color: "#C2C2C2" }} data-v-c32ed7e5={""}>
                  {
                    "Without an automated system to enforce rules and regulations, you risk violating safety standards related to hazardous materials handling, vehicle inspections, and driver hours."
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
