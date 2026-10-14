import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";

export default function HeaderHero000d2923d4() {
  return (
    <section className={"header-hero"} data-v-0eac92da={""}>
      <div
        className={"header-hero__background"}
        aria-hidden={"true"}
        data-v-0eac92da={""}
      >
        <div
          className={"bg-canvas__wrapper white"}
          data-v-0eac92da={""}
          data-v-6ffb6bc3={""}
        >
          <canvas data-v-6ffb6bc3={""}></canvas>
        </div>
      </div>
      <div className={"header-hero__content"} data-v-0eac92da={""}>
        <div className={"header-hero__image-wrapper"} data-v-0eac92da={""}>
          <div
            className={"media-el header-hero__image"}
            lazy={"false"}
            data-v-0eac92da={""}
            data-v-18c5ce2a={""}
          >
            <picture
              className={"media-wrapper lg has-mb-asset"}
              data-v-18c5ce2a={""}
            >
              <img
                alt={""}
                decoding={"async"}
                draggable={"false"}
                src={"/assets/0d8741c39ba5b8277745.webp"}
                sizes={
                  "(max-width: 479px) 462px, (max-width: 767px) 738px, (max-width: 1023px) 985px, (max-width: 1439px) 1920px, (max-width: 1679px) 1680px, (max-width: 1919px) 1920px, 2560px"
                }
              />
            </picture>
            <picture className={"media-wrapper mb"} data-v-18c5ce2a={""}>
              <img
                alt={""}
                decoding={"async"}
                draggable={"false"}
                src={"/assets/a69e8e47763143726af5.webp"}
                sizes={
                  "(max-width: 479px) 462px, (max-width: 767px) 738px, (max-width: 1023px) 985px, (max-width: 1439px) 375px, (max-width: 1679px) 328px, (max-width: 1919px) 375px, 500px"
                }
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
