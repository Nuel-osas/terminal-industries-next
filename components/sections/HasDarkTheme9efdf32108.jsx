import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";
import Widef262d6f12b from "@/components/sections/Widef262d6f12b";
import SectionsGrid332e644e95 from "@/components/sections/SectionsGrid332e644e95";
export default function HasDarkTheme9efdf32108() {
  return (
    <section className={"has-dark-theme section__wrapper"} data-v-3e5feb24={""}>
      <div
        className={"background-image-wrapper"}
        aria-hidden={"true"}
        data-v-3e5feb24={""}
      >
        <div
          className={"media-el background-image"}
          lazy={"false"}
          data-v-3e5feb24={""}
          data-v-18c5ce2a={""}
        >
          <picture className={"media-wrapper lg"} data-v-18c5ce2a={""}>
            <img
              alt={""}
              decoding={"async"}
              draggable={"false"}
              src={"/assets/da3e6ecc94020dbaed4b.webp"}
              sizes={
                "(max-width: 479px) 462px, (max-width: 767px) 738px, (max-width: 1023px) 985px, (max-width: 1439px) 1920px, (max-width: 1679px) 1680px, (max-width: 1919px) 1920px, 2560px"
              }
            />
          </picture>
        </div>
      </div>
      <div
        className={"has-background-image background-canvas-wrapper"}
        aria-hidden={"true"}
        data-v-3e5feb24={""}
      >
        <div
          className={"bg-canvas__wrapper dark"}
          data-v-3e5feb24={""}
          data-v-6ffb6bc3={""}
        >
          <canvas data-v-6ffb6bc3={""}></canvas>
        </div>
      </div>
      <div
        className={"dark-backdrop"}
        aria-hidden={"true"}
        data-v-3e5feb24={""}
      ></div>
      <div
        className={"bottom-gradient"}
        aria-hidden={"true"}
        data-v-3e5feb24={""}
      ></div>
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
              {"The Problem"}
            </p>
            <header
              className={"spacing header animated-strong"}
              data-v-3e5feb24={""}
            >
              <h3 className={"title-h3"} data-v-3e5feb24={""}>
                {"The Yard is a Black Hole"}
              </h3>
            </header>
            <Widef262d6f12b />
          </div>
          <div className={"content-blocks"} data-v-3e5feb24={""}>
            <div
              className={"notch-section__wrapper"}
              data-v-3e5feb24={""}
              data-v-6a166306={""}
              data-v-3fe87144={""}
            >
              <div
                className={"svg-mask"}
                data-v-3fe87144={""}
                style={{
                  "--d27fb6da": 'url("#clip-v-0-0-0-0-1-0-0")',
                  "--b18bdda2": 'url("#mask-v-0-0-0-0-1-0-0")',
                }}
                data-v-ebd3c3c9={""}
              >
                <svg
                  width={"0"}
                  height={"0"}
                  viewBox={"-0.5 -0.5 1 1"}
                  className={"svg"}
                  shapeRendering={"geometricPrecision"}
                  data-v-ebd3c3c9={""}
                >
                  <defs data-v-ebd3c3c9={""}>
                    <clipPath
                      id={"clip-v-0-0-0-0-1-0-0"}
                      clipPathUnits={"userSpaceOnUse"}
                      data-v-ebd3c3c9={""}
                    >
                      <path
                        d={
                          "M -0.5,-0.5 L 0.5,-0.5 L 0.5,0.5 L -0.5,0.5 L -0.5,-0.5"
                        }
                        data-v-ebd3c3c9={""}
                      ></path>
                    </clipPath>
                  </defs>
                </svg>
                <div className={"ssr use-clip slot"} data-v-ebd3c3c9={""}>
                  <SectionsGrid332e644e95 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
