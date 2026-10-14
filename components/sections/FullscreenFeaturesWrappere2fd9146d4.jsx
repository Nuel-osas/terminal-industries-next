import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";

export default function FullscreenFeaturesWrappere2fd9146d4() {
  return (
    <section
      className={"fullscreen-features__wrapper"}
      data-items-count={"0"}
      style={{ "--items-count": "0" }}
      data-v-cb8c0102={""}
    >
      <div className={"sticky__wrapper"} data-v-cb8c0102={""}>
        <div
          className={"notch-section__wrapper"}
          data-v-cb8c0102={""}
          data-v-3fe87144={""}
        >
          <div
            className={"svg-mask"}
            data-v-3fe87144={""}
            style={{
              "--d27fb6da": 'url("#clip-v-0-0-0-0-3-0")',
              "--b18bdda2": 'url("#mask-v-0-0-0-0-3-0")',
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
                  id={"clip-v-0-0-0-0-3-0"}
                  clipPathUnits={"userSpaceOnUse"}
                  data-v-ebd3c3c9={""}
                >
                  <path
                    d={
                      "M -0.5,-0.5 L -0.25,-0.25 A 0.85,0.85 0 0 1 0,0.35 L 0,20 A 0,0 0 0 1 0,20 L 0,20 A 0,0 0 0 1 0,20 L 0,0.35 A 0.85,0.85 0 0 1 0.25,-0.25 L 0.5,-0.5 L 0.5,0.5 L -0.5,0.5 L -0.5,-0.5"
                    }
                    data-v-ebd3c3c9={""}
                  ></path>
                </clipPath>
              </defs>
            </svg>
            <div className={"ssr use-clip slot"} data-v-ebd3c3c9={""}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
