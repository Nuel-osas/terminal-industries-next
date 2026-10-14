import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";
import Wide1e179d8c6e from "@/components/sections/Wide1e179d8c6e";
export default function IsFullscreen509f43226d() {
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
              {"Terminal for Warehouse Yards"}
            </p>
            <header
              className={"spacing header animated-strong"}
              data-v-3e5feb24={""}
            >
              <h2 className={"title-si"} data-v-3e5feb24={""}>
                <strong data-v-3e5feb24={""}>
                  {
                    "The Warehouse Yard’s Invisible Problem: From Chaos to Control"
                  }
                </strong>
              </h2>
            </header>
            <Wide1e179d8c6e />
          </div>
        </div>
      </div>
    </section>
  );
}
