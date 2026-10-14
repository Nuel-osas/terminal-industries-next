import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";
import SectionWrapper3387c21d2d from "@/components/sections/SectionWrapper3387c21d2d";
import JobBoardWrapper14435a13c9 from "@/components/sections/JobBoardWrapper14435a13c9";
import FooterHeightHolder64c04aaaa4 from "@/components/sections/FooterHeightHolder64c04aaaa4";
export default function Page013cc6e0ad() {
  return (
    <>
      <div id={"app"}>
        <SiteHeader />
        <main data-v-26ed1394={""}>
          <div className={"content-wrapper careers-page"} data-v-c54759b5={""}>
            <div data-v-c54759b5={""}>
              <div
                className={"notch-section__wrapper"}
                data-v-43c3d4ad={""}
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
                            "M -0.5,-0.5 L 0.5,-0.5 L 0.5,0.5 L 0.25,0.25 A 0.85,0.85 0 0 1 0,-0.35 L 0,-20 A 0,0 0 0 1 0,-20 L 0,-20 A 0,0 0 0 1 0,-20 L 0,-0.35 A 0.85,0.85 0 0 1 -0.25,0.25 L -0.5,0.5 L -0.5,-0.5"
                          }
                          data-v-ebd3c3c9={""}
                        ></path>
                      </clipPath>
                    </defs>
                  </svg>
                  <div className={"ssr use-clip slot"} data-v-ebd3c3c9={""}>
                    <div className={"hero"} data-v-43c3d4ad={""}>
                      <div className={"image-container"} data-v-43c3d4ad={""}>
                        <div
                          className={"media-el hero-image"}
                          lazy={"false"}
                          data-v-43c3d4ad={""}
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
                              src={"/assets/8afb0530ab2c9253543a.webp"}
                              sizes={
                                "(max-width: 479px) 462px, (max-width: 767px) 738px, (max-width: 1023px) 985px, (max-width: 1439px) 1920px, (max-width: 1679px) 1680px, (max-width: 1919px) 1920px, 2560px"
                              }
                            />
                          </picture>
                          <picture
                            className={"media-wrapper mb"}
                            data-v-18c5ce2a={""}
                          >
                            <img
                              alt={""}
                              decoding={"async"}
                              draggable={"false"}
                              src={"/assets/fba136d04b95384a0d9c.webp"}
                              sizes={
                                "(max-width: 479px) 462px, (max-width: 767px) 738px, (max-width: 1023px) 985px, (max-width: 1439px) 375px, (max-width: 1679px) 328px, (max-width: 1919px) 375px, 500px"
                              }
                            />
                          </picture>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={"notch-section__wrapper"}
                data-v-3e5feb24={""}
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
                            "M -0.5,-0.5 L 0.5,-0.5 L 0.5,0.5 L -0.5,0.5 L -0.5,-0.5"
                          }
                          data-v-ebd3c3c9={""}
                        ></path>
                      </clipPath>
                    </defs>
                  </svg>
                  <div className={"ssr use-clip slot"} data-v-ebd3c3c9={""}>
                    <SectionWrapper3387c21d2d />
                  </div>
                </div>
              </div>
            </div>
            <JobBoardWrapper14435a13c9 />
            <FooterHeightHolder64c04aaaa4 />
          </div>
        </main>
      </div>
    </>
  );
}
