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
export default function Page3fb7cee765() {
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
                              src={"/assets/6b342fe214562c55b1dd.mp4"}
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
                          <strong data-v-399fb480={""}>
                            {
                              "Lights-Out Yard Episode 2 - Transform Isolated Yard Tasks into Dynamically Chained Missions™"
                            }
                          </strong>
                        </p>
                        <p data-v-399fb480={""}>
                          {
                            "In this month's installment of Lights-Out Yard host Josh Kivenko, Terminal CMO, is joined by Ryan Arroyo, Terminal's SVP of Product and Engineering, to discuss a new paradigm in yard operations: Missions™. Missions™ acts as the execution layer that organizes tasks and disparate yard resources into structured, decision-ready transactions, defining the operational unit that makes workflow autonomy possible. With Missions™ Terminal moves the category forward — from systems that observe yard activity to systems that run it."
                          }
                        </p>
                      </div>
                    </div>
                    <div className={"gated-content-right"} data-v-399fb480={""}>
                      <div
                        id={"gated-form-a7f2da71-470e-420d-a682-9d34f2ab1ad3"}
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
