import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";
import Wide88938bf6a1 from "@/components/sections/Wide88938bf6a1";
export default function IsFullscreenbedb121842() {
  return (
    <section
      className={"is-fullscreen has-dark-theme section__wrapper"}
      data-v-3e5feb24={""}
    >
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
              <h2 className={"title-si"} data-v-3e5feb24={""}>
                {"Traditional YMS Systems Aren’t Enough"}
              </h2>
              <p data-v-3e5feb24={""}></p>
            </header>
            <Wide88938bf6a1 />
          </div>
        </div>
      </div>
    </section>
  );
}
