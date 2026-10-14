import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";

export default function SectionWrapper936ec94e29() {
  return (
    <section className={"section__wrapper"} data-v-3e5feb24={""}>
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
              {"Yard Security Grader"}
            </p>
            <header className={"header animated-strong"} data-v-3e5feb24={""}>
              <h2 className={"title-si"} data-v-3e5feb24={""}>
                {"How secure is your yard, layer by layer?"}
              </h2>
            </header>
          </div>
          <div
            className={
              "section-media is-width-lg is-radius-none is-shadow-none"
            }
            data-v-3e5feb24={""}
          >
            <div
              className={"media-el section-media__asset"}
              data-v-3e5feb24={""}
              data-v-18c5ce2a={""}
            >
              <picture className={"media-wrapper lg"} data-v-18c5ce2a={""}>
                <img
                  alt={""}
                  decoding={"async"}
                  draggable={"false"}
                  src={"/assets/9754c6826164f023c82c.webp"}
                  sizes={
                    "(max-width: 479px) 462px, (max-width: 767px) 738px, (max-width: 1023px) 985px, (max-width: 1439px) 1920px, (max-width: 1679px) 1680px, (max-width: 1919px) 1920px, 2560px"
                  }
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
