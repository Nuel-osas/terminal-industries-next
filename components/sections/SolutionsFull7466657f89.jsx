import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";

export default function SolutionsFull7466657f89() {
  return (
    <section className={"solutions-full"} data-v-fdb01ff5={""}>
      <div
        className={"notch-section__wrapper"}
        data-v-fdb01ff5={""}
        data-v-3fe87144={""}
      >
        <div
          className={"svg-mask"}
          data-v-3fe87144={""}
          style={{
            "--d27fb6da": 'url("#clip-v-0-0-0-0-1-0")',
            "--b18bdda2": 'url("#mask-v-0-0-0-0-1-0")',
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
                id={"clip-v-0-0-0-0-1-0"}
                clipPathUnits={"userSpaceOnUse"}
                data-v-ebd3c3c9={""}
              >
                <path
                  d={
                    "M -0.5,-0.5 L 0,0 A 0,0 0 0 1 0,0 L 0,0 A 0,0 0 0 1 0,0 L 0,0 A 0,0 0 0 1 0,0 L 0,0 A 0,0 0 0 1 0,0 L 0.5,-0.5 L 0.5,0.5 L -0.5,0.5 L -0.5,-0.5"
                  }
                  data-v-ebd3c3c9={""}
                ></path>
              </clipPath>
            </defs>
          </svg>
          <div className={"ssr use-clip slot"} data-v-ebd3c3c9={""}>
            <div className={"inner"} data-v-fdb01ff5={""}>
              <div className={"media-container"} data-v-fdb01ff5={""}>
                <div
                  className={"media-el media"}
                  data-v-fdb01ff5={""}
                  data-v-18c5ce2a={""}
                >
                  <picture className={"media-wrapper lg"} data-v-18c5ce2a={""}>
                    <img
                      alt={""}
                      decoding={"async"}
                      draggable={"false"}
                      src={"/assets/96737ae5d4c48dd17d52.webp"}
                      sizes={
                        "(max-width: 479px) 462px, (max-width: 767px) 738px, (max-width: 1023px) 985px, (max-width: 1439px) 1920px, (max-width: 1679px) 1680px, (max-width: 1919px) 1920px, 2560px"
                      }
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"content-wrapper"} data-v-fdb01ff5={""}>
        <div className={"titles-container"} data-v-fdb01ff5={""}>
          <span className={"title-h2"} data-v-fdb01ff5={""}>
            {"There is a chasm in the yard."}
          </span>
          <span className={"title-h2"} data-v-fdb01ff5={""}>
            {"It's time to fix it."}
          </span>
        </div>
        <div className={"content"} data-v-fdb01ff5={""}>
          <p className={"text body-4"} data-v-fdb01ff5={""}>
            {
              "The yard remains a technology and data black hole resulting in severe gaps in execution, broken process automation, and visibility.  Current yard solutions are too limited, disjointed, or dated to solve the problem.\nTerminal is different.\n \n"
            }
          </p>
          <Link
            href={"/contact"}
            className={"button button label-4 no-underline button"}
            style={{
              "--hover-bg": "var(--c-white)",
              "--hover-color": "var(--c-dark-green)",
              "--base-color": "var(--c-lime)",
            }}
            data-v-fdb01ff5={""}
            data-v-d8fa3fef={""}
            prefetch={false}
          >
            <span className={"link-active"} data-v-d8fa3fef={""}>
              {"Transform Your Yard With Terminal"}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
