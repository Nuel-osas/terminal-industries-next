import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";
import Wideb9af04081b from "@/components/sections/Wideb9af04081b";
export default function HasDarkThemecc8e590ccd() {
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
                {"The Hidden Environmental Cost of Your Yard"}
              </h3>
              <p data-v-3e5feb24={""}></p>
            </header>
            <Wideb9af04081b />
          </div>
        </div>
      </div>
    </section>
  );
}
