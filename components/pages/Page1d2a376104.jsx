import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";
import SectionWrapperb83076ff1a from "@/components/sections/SectionWrapperb83076ff1a";
import FeaturesGridc9aaea9980 from "@/components/sections/FeaturesGridc9aaea9980";
import FooterHeightHolder2c7824bb90 from "@/components/sections/FooterHeightHolder2c7824bb90";
export default function Page1d2a376104() {
  return (
    <>
      <div id={"app"}>
        <SiteHeader />
        <main data-v-26ed1394={""}>
          <div className={"content-wrapper"} data-v-99a60fcf={""}>
            <div data-v-99a60fcf={""}>
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
                    <SectionWrapperb83076ff1a />
                  </div>
                </div>
              </div>
              <FeaturesGridc9aaea9980 />
            </div>
            <FooterHeightHolder2c7824bb90 />
          </div>
        </main>
      </div>
    </>
  );
}
