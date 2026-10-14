import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";
import SectionWrapper9e02886e6d from "@/components/sections/SectionWrapper9e02886e6d";
import FooterHeightHolder47a9b59de9 from "@/components/sections/FooterHeightHolder47a9b59de9";
export default function Pagedb4c186a06() {
  return (
    <>
      <div id={"app"}>
        <SiteHeader />
        <main data-v-26ed1394={""}>
          <div>
            <div>
              <div
                className={"notch-section__wrapper"}
                data-v-3e5feb24={""}
                data-v-3fe87144={""}
              >
                <div
                  className={"svg-mask"}
                  data-v-3fe87144={""}
                  style={{
                    "--d27fb6da": 'url("#clip-v-0-0-0-0-0-0")',
                    "--b18bdda2": 'url("#mask-v-0-0-0-0-0-0")',
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
                        id={"clip-v-0-0-0-0-0-0"}
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
                    <SectionWrapper9e02886e6d />
                  </div>
                </div>
              </div>
              <div className={"roi-calculator-reference"} data-v-eea4f33e={""}>
                <YardCalculator />
              </div>
            </div>
            <FooterHeightHolder47a9b59de9 />
          </div>
        </main>
      </div>
    </>
  );
}
