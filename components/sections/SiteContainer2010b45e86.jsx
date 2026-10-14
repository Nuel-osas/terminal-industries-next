import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";

export default function SiteContainer2010b45e86() {
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
            {"Value of Terminal at the Dock"}
          </p>
          <div className={"proof-points__header"} data-v-5ff111eb={""}>
            <header
              className={"proof-points__title animated-strong"}
              data-v-5ff111eb={""}
            >
              <h3 className={"title-h3"}>
                <strong>{"Terminal "}</strong>
                {
                  "automates the process of assigning dock doors and coordinating with drivers and spotters, replaces disconnected dock scheduling software and eliminates dock congestion."
                }
              </h3>
            </header>
          </div>
          <div className={"proof-points__stats"} data-v-5ff111eb={""}>
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
                {"Reduction in dock dwell time"}
              </p>
            </div>
            <div className={"proof-points__stat"} data-v-5ff111eb={""}>
              <div className={"proof-points__stat-value"} data-v-5ff111eb={""}>
                <span
                  className={"proof-points__stat-main"}
                  data-v-5ff111eb={""}
                >
                  {"10%"}
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
                {"Reduces trailer detention and demurrage fees"}
              </p>
            </div>
            <div className={"proof-points__stat"} data-v-5ff111eb={""}>
              <div className={"proof-points__stat-value"} data-v-5ff111eb={""}>
                <span
                  className={"proof-points__stat-main"}
                  data-v-5ff111eb={""}
                >
                  {"Maximize"}
                </span>
              </div>
              <p
                className={"proof-points__stat-label body-1"}
                data-v-5ff111eb={""}
              >
                {"WMS investment with seamless dock handoffs"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
