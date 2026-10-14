import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";

export default function IsFullscreen6c7a9f1d90() {
  return (
    <section className={"is-fullscreen section__wrapper"} data-v-3e5feb24={""}>
      <div
        className={"has-background-image background-canvas-wrapper"}
        aria-hidden={"true"}
        data-v-3e5feb24={""}
      >
        <div
          className={"bg-canvas__wrapper white"}
          data-v-3e5feb24={""}
          data-v-6ffb6bc3={""}
        >
          <canvas data-v-6ffb6bc3={""}></canvas>
        </div>
      </div>
      <div
        className={"section-introduction"}
        aria-labelledby={"section-label"}
        data-v-3e5feb24={""}
      >
        <div className={"content-wrapper"} data-v-3e5feb24={""}>
          <div className={"section-content"} data-v-3e5feb24={""}>
            <p
              id={"section-label"}
              className={"label label-5"}
              role={"text"}
              data-v-3e5feb24={""}
            >
              {"Top 10 Yard Problems"}
            </p>
            <header className={"header animated-strong"} data-v-3e5feb24={""}>
              <h1 className={"title-si"} data-v-3e5feb24={""}>
                <strong data-v-3e5feb24={""}>
                  <span style={{ color: "#000000" }} data-v-3e5feb24={""}>
                    {"Lack of Supply Chain Resilience"}
                  </span>
                </strong>
              </h1>
            </header>
          </div>
        </div>
      </div>
    </section>
  );
}
