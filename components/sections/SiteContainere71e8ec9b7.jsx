import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";

export default function SiteContainere71e8ec9b7() {
  return (
    <section className={"site-container"} data-v-5ff111eb={""}>
      <div className={"site-grid | w-full mx-auto"}>
        <div
          className={"proof-points__content"}
          style={{ gridColumn: "1 / -1" }}
          data-v-5ff111eb={""}
        >
          <p
            id={"section-label"}
            className={"label label-5"}
            role={"text"}
            data-v-5ff111eb={""}
          >
            {"Value of Terminal Across Your Logistics Operation"}
          </p>
          <div className={"proof-points__header"} data-v-5ff111eb={""}>
            <header
              className={"proof-points__title animated-strong"}
              data-v-5ff111eb={""}
            >
              <p className={"proof-points__title-text"}>
                <span style={{ color: "#1B1C1D" }}>
                  {
                    "Terminal replaces outdated systems with limited yard visibility, fragmented tools driven by manual communication methods and poor data quality that hinders effective decision-making."
                  }
                </span>
              </p>
            </header>
          </div>
          <div className={"proof-points__stats"} data-v-5ff111eb={""}>
            <div className={"proof-points__stat"} data-v-5ff111eb={""}>
              <div className={"proof-points__stat-value"} data-v-5ff111eb={""}>
                <span
                  className={"proof-points__stat-main"}
                  data-v-5ff111eb={""}
                >
                  {"80%"}
                </span>
              </div>
              <p
                className={"proof-points__stat-label body-1"}
                data-v-5ff111eb={""}
              >
                {"Reduction in driven check-in delays"}
              </p>
            </div>
            <div className={"proof-points__stat"} data-v-5ff111eb={""}>
              <div className={"proof-points__stat-value"} data-v-5ff111eb={""}>
                <span
                  className={"proof-points__stat-main"}
                  data-v-5ff111eb={""}
                >
                  {"Up to 15%"}
                </span>
              </div>
              <p
                className={"proof-points__stat-label body-1"}
                data-v-5ff111eb={""}
              >
                {"Improvement in warehouse labor usage at the dock"}
              </p>
            </div>
            <div className={"proof-points__stat"} data-v-5ff111eb={""}>
              <div className={"proof-points__stat-value"} data-v-5ff111eb={""}>
                <span
                  className={"proof-points__stat-main"}
                  data-v-5ff111eb={""}
                >
                  {"10-15%"}
                </span>
              </div>
              <p
                className={"proof-points__stat-label body-1"}
                data-v-5ff111eb={""}
              >
                {"Reduction in logistics operating costs"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
