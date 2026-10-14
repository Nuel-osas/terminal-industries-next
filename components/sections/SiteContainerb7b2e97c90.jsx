import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";

export default function SiteContainerb7b2e97c90() {
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
            {"Value of Terminal in the Yard"}
          </p>
          <div className={"proof-points__header"} data-v-5ff111eb={""}>
            <header
              className={"proof-points__title animated-strong"}
              data-v-5ff111eb={""}
            >
              <p className={"proof-points__title-text"}>
                {
                  "Terminal can remove the need for dispatchers entirely and saves time spent "
                }
                <span style={{ color: "#1B1C1D" }}>
                  {
                    "by operators roaming the yard to search for assets or error-prone manual task assignments. "
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
                  {"90%"}
                </span>
              </div>
              <p
                className={"proof-points__stat-label body-1"}
                data-v-5ff111eb={""}
              >
                {"Reduction in time spent searching for assets"}
              </p>
            </div>
            <div className={"proof-points__stat"} data-v-5ff111eb={""}>
              <div className={"proof-points__stat-value"} data-v-5ff111eb={""}>
                <span
                  className={"proof-points__stat-main"}
                  data-v-5ff111eb={""}
                >
                  {"25%"}
                </span>
              </div>
              <p
                className={"proof-points__stat-label body-1"}
                data-v-5ff111eb={""}
              >
                {"Improvement in asset utilization"}
              </p>
            </div>
            <div className={"proof-points__stat"} data-v-5ff111eb={""}>
              <div className={"proof-points__stat-value"} data-v-5ff111eb={""}>
                <span
                  className={"proof-points__stat-main"}
                  data-v-5ff111eb={""}
                >
                  {"30%"}
                </span>
                <span
                  className={"proof-points__stat-suffix"}
                  data-v-5ff111eb={""}
                >
                  {"+"}
                </span>
              </div>
              <p
                className={"proof-points__stat-label body-1"}
                data-v-5ff111eb={""}
              >
                {"Reduction average trailer dwell time"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
