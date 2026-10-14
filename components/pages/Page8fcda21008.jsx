import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";
import FooterHeightHolder2760f8cb24 from "@/components/sections/FooterHeightHolder2760f8cb24";
import SectionWrapper34b8672def from "@/components/sections/SectionWrapper34b8672def";
export default function Page8fcda21008() {
  return (
    <>
      <div id={"app"}>
        <SiteHeader />
        <main data-v-26ed1394={""}>
          <div>
            <div className={"post-wrapper"} data-v-29b3eeb5={""}>
              <div className={"post-gate"} data-v-29b3eeb5={""}>
                <div className={"gated-content-wrapper"} data-v-399fb480={""}>
                  <div
                    className={"gated-content-background"}
                    data-v-399fb480={""}
                  >
                    <div
                      className={"media-el gated-content-background__media"}
                      data-v-399fb480={""}
                      data-v-18c5ce2a={""}
                    >
                      <picture
                        className={"media-wrapper lg"}
                        data-v-18c5ce2a={""}
                      >
                        <img
                          alt={""}
                          decoding={"async"}
                          draggable={"false"}
                          src={"/assets/4c43a09c72c16290b1a6.webp"}
                          sizes={
                            "(max-width: 479px) 462px, (max-width: 767px) 738px, (max-width: 1023px) 985px, (max-width: 1439px) 1920px, (max-width: 1679px) 1680px, (max-width: 1919px) 1920px, 2560px"
                          }
                        />
                      </picture>
                    </div>
                  </div>
                  <div className={"gated-content-layout"} data-v-399fb480={""}>
                    <div className={"gated-content-left"} data-v-399fb480={""}>
                      <div
                        className={"gated-content-info"}
                        data-v-399fb480={""}
                      >
                        <h3 data-v-399fb480={""}>
                          <strong data-v-399fb480={""}>
                            {"Mission Impossible, Possible: "}
                          </strong>
                          <br data-v-399fb480={""} />
                          <strong data-v-399fb480={""}>
                            {
                              "A Single Source of Truth for Every Driver Check-in"
                            }
                          </strong>
                        </h3>
                        <div
                          className={"video-embed not-prose my-4"}
                          data-v-399fb480={""}
                          data-v-7a33bed2={""}
                        >
                          <div
                            className={"video-embed__wrapper"}
                            style={{ aspectRatio: "16 / 9" }}
                            data-v-7a33bed2={""}
                          >
                            <video
                              src={"/assets/c27d6ff53c3a1d5d56fb.mp4"}
                              title={"Video"}
                              className={"video-embed__iframe"}
                              controls={true}
                              autoPlay={true}
                              muted={true}
                              loop={true}
                              playsInline={true}
                              preload={"metadata"}
                              data-v-7a33bed2={""}
                            ></video>
                          </div>
                        </div>
                        <p data-v-399fb480={""}>
                          {
                            'Join Terminal CMO Josh Kivenko and SVP of Product Ryan Arroyo as they reveal why traditional yard hardware like RFID failed and how AI-powered Computer Vision is taking its place. Discover how to eliminate manual check-in errors and create a "Single Source of Truth" where every trailer movement is captured with 100% fidelity without a single clipboard. We’ll outline the roadmap for a "Lights-Out" facility that replaces manual interference with a touchless, invisible data layer. Stop chasing trailers and start seeing the future of automated logistics.'
                          }
                        </p>
                      </div>
                    </div>
                    <div className={"gated-content-right"} data-v-399fb480={""}>
                      <div
                        id={"gated-form-b7be2829-751d-45e8-9af3-2bbe74d6fde1"}
                        className={"gated-content-form"}
                        role={"form"}
                        aria-label={"Request access to content"}
                        data-v-399fb480={""}
                        data-v-3fa09bed={""}
                      >
                        <div
                          className={"gated-content-form__card"}
                          data-v-3fa09bed={""}
                        >
                          <div className={"form-fields"} data-v-3fa09bed={""}>
                            <div
                              className={"field-wrapper"}
                              data-width={"full"}
                              data-v-3fa09bed={""}
                              data-v-f96e6d69={""}
                            >
                              <label
                                className={"label"}
                                htmlFor={"f-first_name"}
                                data-v-f96e6d69={""}
                              >
                                {"First name"}
                                <span data-v-f96e6d69={""}>{" *"}</span>
                              </label>
                              <input
                                id={"f-first_name"}
                                className={"field"}
                                type={"text"}
                                name={"first_name"}
                                placeholder={"First name"}
                                required={true}
                                autoComplete={"given-name"}
                                defaultValue={""}
                                data-v-f96e6d69={""}
                              />
                            </div>
                            <div
                              className={"field-wrapper"}
                              data-width={"full"}
                              data-v-3fa09bed={""}
                              data-v-f96e6d69={""}
                            >
                              <label
                                className={"label"}
                                htmlFor={"f-last_name"}
                                data-v-f96e6d69={""}
                              >
                                {"Last name"}
                                <span data-v-f96e6d69={""}>{" *"}</span>
                              </label>
                              <input
                                id={"f-last_name"}
                                className={"field"}
                                type={"text"}
                                name={"last_name"}
                                placeholder={"Last name"}
                                required={true}
                                autoComplete={"family-name"}
                                defaultValue={""}
                                data-v-f96e6d69={""}
                              />
                            </div>
                            <div
                              className={"field-wrapper"}
                              data-width={"full"}
                              data-v-3fa09bed={""}
                              data-v-f96e6d69={""}
                            >
                              <label
                                className={"label"}
                                htmlFor={"f-email"}
                                data-v-f96e6d69={""}
                              >
                                {"Email"}
                                <span data-v-f96e6d69={""}>{" *"}</span>
                              </label>
                              <input
                                id={"f-email"}
                                className={"field"}
                                type={"email"}
                                name={"email"}
                                placeholder={"Email"}
                                required={true}
                                autoComplete={"email"}
                                defaultValue={""}
                                data-v-f96e6d69={""}
                              />
                            </div>
                            <div
                              className={"field-wrapper"}
                              data-width={"full"}
                              data-v-3fa09bed={""}
                              data-v-f96e6d69={""}
                            >
                              <label
                                className={"label"}
                                htmlFor={"f-company"}
                                data-v-f96e6d69={""}
                              >
                                {"Company"}
                                <span data-v-f96e6d69={""}>{" *"}</span>
                              </label>
                              <input
                                id={"f-company"}
                                className={"field"}
                                type={"text"}
                                name={"company"}
                                placeholder={"Company"}
                                required={true}
                                autoComplete={"organization"}
                                defaultValue={""}
                                data-v-f96e6d69={""}
                              />
                            </div>
                            <div
                              className={"field-wrapper"}
                              data-width={"full"}
                              data-v-3fa09bed={""}
                              data-v-f96e6d69={""}
                            >
                              <label
                                className={"label"}
                                htmlFor={"f-title"}
                                data-v-f96e6d69={""}
                              >
                                {"Title"}
                                <span data-v-f96e6d69={""}>{" *"}</span>
                              </label>
                              <input
                                id={"f-title"}
                                className={"field"}
                                type={"text"}
                                name={"title"}
                                placeholder={"Title"}
                                required={true}
                                autoComplete={"organization-title"}
                                defaultValue={""}
                                data-v-f96e6d69={""}
                              />
                            </div>
                            <div
                              className={"field-wrapper"}
                              data-width={"full"}
                              data-v-3fa09bed={""}
                              data-v-f96e6d69={""}
                            >
                              <label
                                className={"checkbox-label"}
                                data-v-f96e6d69={""}
                              >
                                <input
                                  id={"f-newsletter"}
                                  type={"checkbox"}
                                  className={"checkbox-input"}
                                  name={"newsletter"}
                                  data-v-f96e6d69={""}
                                />
                                <span
                                  className={"checkbox-text"}
                                  data-v-f96e6d69={""}
                                >
                                  {"Subscribe to our monthly newsletter"}
                                </span>
                              </label>
                            </div>
                          </div>
                          <div className={"form-actions"} data-v-3fa09bed={""}>
                            <button
                              disabled={true}
                              className={
                                "form-submit | label-4 button label-4 form-submit | label-4"
                              }
                              style={{
                                "--hover-bg": "var(--c-dark-green)",
                                "--hover-color": "rgba(171, 255, 2, 1)",
                                "--base-color": "rgba(5, 36, 36, 1)",
                              }}
                              type={"button"}
                              data-v-3fa09bed={""}
                              data-v-d8fa3fef={""}
                            >
                              <span
                                className={"link-active"}
                                data-v-d8fa3fef={""}
                              >
                                <span data-v-3fa09bed={""}>{"Watch Now "}</span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={"notch-section__wrapper"}
                data-v-29b3eeb5={""}
                data-v-3e5feb24={""}
                data-v-3fe87144={""}
              >
                <div
                  className={"svg-mask"}
                  data-v-3fe87144={""}
                  style={{
                    "--d27fb6da": 'url("#clip-v-0-0-0-0-0")',
                    "--b18bdda2": 'url("#mask-v-0-0-0-0-0")',
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
                        id={"clip-v-0-0-0-0-0"}
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
                    <SectionWrapper34b8672def />
                  </div>
                </div>
              </div>
            </div>
            <FooterHeightHolder2760f8cb24 />
          </div>
        </main>
      </div>
    </>
  );
}
