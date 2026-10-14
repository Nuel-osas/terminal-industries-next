import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";
import Wideec67ffbe41 from "@/components/sections/Wideec67ffbe41";
export default function IsFullscreendfa0c7aa80() {
  return (
    <section className={"is-fullscreen section__wrapper"} data-v-3e5feb24={""}>
      <div
        className={"background-canvas-wrapper"}
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
              {"Terminal Industries Partners with Lets Talk Supply Chain"}
            </p>
            <header
              className={"spacing header animated-strong"}
              data-v-3e5feb24={""}
            >
              <h2 className={"title-si"} data-v-3e5feb24={""}>
                {
                  "A collection of conversations, clips, and insights from our time with "
                }
                <em data-v-3e5feb24={""}>{"Let’s Talk Supply Chain"}</em>
                {"."}
              </h2>
            </header>
            <Wideec67ffbe41 />
          </div>
        </div>
      </div>
    </section>
  );
}
