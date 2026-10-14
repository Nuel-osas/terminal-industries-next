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
export default function Pageecd7cad2d5() {
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
                        <p data-v-399fb480={""}></p>
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
                              src={"/assets/fa7586351f92639679e4.mp4"}
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
                              "Lights-Out Yard Episode 6: All Roads Lead to the Dock"
                            }
                          </strong>
                          <br data-v-399fb480={""} />
                          <em data-v-399fb480={""}>
                            {
                              "The vision of a lights-out yard lives or dies at the dock door."
                            }
                          </em>
                          <br data-v-399fb480={""} />
                          <br data-v-399fb480={""} />
                          {
                            "Automation is closing in on the dock from two directions at once. From the inside, robotics is reaching out of the warehouse and into the trailer itself, taking on loading and unloading work that's stayed stubbornly manual since the shipping container was invented. From the outside, computer vision and AI-driven workflows are pushing autonomy across the yard toward that same door. Two currents, one threshold, and the future of the lights-out yard (and the warehouse) depends entirely on how technology companies and operators manage where they meet."
                          }
                          <br data-v-399fb480={""} />
                          <br data-v-399fb480={""} />
                          {
                            "Join Terminal CMO Josh Kivenko and special guest Alex Allen-Tunsil CRO at Slip Robotics, as they dig into what happens at that threshold: where the two efforts create friction, where they unlock capability neither side could reach alone, and what the dock has to become before a lights-out operation can be anything more than a collection of automated islands."
                          }
                        </p>
                      </div>
                    </div>
                    <div className={"gated-content-right"} data-v-399fb480={""}>
                      <div
                        id={"gated-form-13521675-50cb-497d-9a4e-da22ce9c3e62"}
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
                                <span data-v-3fa09bed={""}>{"Watch Now"}</span>
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
