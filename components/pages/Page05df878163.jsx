import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";
import FooterHeightHolder2760f8cb24 from "@/components/sections/FooterHeightHolder2760f8cb24";
export default function Page05df878163() {
  return (
    <>
      <div id={"app"}>
        <SiteHeader />
        <main data-v-26ed1394={""}>
          <div>
            <div>
              <div
                className={
                  "form-reference form-reference--gradient-subtle-lime form-reference--pt-none form-reference--pb-none"
                }
                data-v-8740ad2a={""}
              >
                <div
                  className={"form-reference__canvas-wrapper"}
                  aria-hidden={"true"}
                  data-v-8740ad2a={""}
                >
                  <div
                    className={"bg-canvas__wrapper green"}
                    data-v-8740ad2a={""}
                    data-v-6ffb6bc3={""}
                  >
                    <canvas data-v-6ffb6bc3={""}></canvas>
                  </div>
                </div>
                <div
                  className={"form-reference__container"}
                  data-v-8740ad2a={""}
                >
                  <div
                    className={"form-wrapper form-wrapper--dark"}
                    data-v-8740ad2a={""}
                    data-v-aa63f445={""}
                  >
                    <div className={"form-content"} data-v-aa63f445={""}>
                      <div className={"form-info-column"} data-v-aa63f445={""}>
                        <div
                          className={"form-info animated-strong"}
                          data-v-aa63f445={""}
                        >
                          <p data-v-aa63f445={""}>
                            <img
                              src={"/assets/9cdebfb0bbedbc336236.svg"}
                              alt={""}
                              title={""}
                              data-v-aa63f445={""}
                            />
                            <br data-v-aa63f445={""} />
                          </p>
                          <h2 data-v-aa63f445={""}>
                            {"Schedule a demo of "}
                            <strong data-v-aa63f445={""}>{"Terminal"}</strong>
                            {", "}
                            <br data-v-aa63f445={""} />
                            <strong data-v-aa63f445={""}>
                              {"the only AI-Native Operating System "}
                            </strong>
                            {"built to replace yard labor, "}
                            <strong data-v-aa63f445={""}>{"now"}</strong>
                            {"."}
                          </h2>
                          <p data-v-aa63f445={""}>
                            <span
                              style={{ color: "#454742" }}
                              data-v-aa63f445={""}
                            >
                              {
                                "In 30-minutes or less, we can walk you through Terminal to show you how a Yard Operating System is better than the dated tech you are using today. Give us a shot!"
                              }
                            </span>
                          </p>
                          <div
                            className={"video-embed not-prose my-4"}
                            data-v-aa63f445={""}
                            data-v-7a33bed2={""}
                          >
                            <div
                              className={"video-embed__wrapper"}
                              style={{ aspectRatio: "16 / 9" }}
                              data-v-7a33bed2={""}
                            >
                              <video
                                src={"/assets/d2493f84d26610097647.mov"}
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
                          <p data-v-aa63f445={""}>
                            <span
                              style={{ color: "#7F7F7F" }}
                              data-v-aa63f445={""}
                            >
                              {"Trusted by those in the know."}
                            </span>
                          </p>
                          <p data-v-aa63f445={""}>
                            <img
                              src={"/assets/c0b46aa5c398f9eaa922.webp"}
                              alt={""}
                              title={""}
                              data-v-aa63f445={""}
                            />
                          </p>
                        </div>
                      </div>
                      <form
                        id={"form-builder"}
                        className={"form-section"}
                        data-v-aa63f445={""}
                        data-local-form="true"
                      >
                        <div data-v-aa63f445={""}>
                          <div className={"step-content"} data-v-aa63f445={""}>
                            <div className={"fields-grid"} data-v-aa63f445={""}>
                              <div
                                className={"field-col field-col--full"}
                                data-v-aa63f445={""}
                              >
                                <div
                                  className={"field-wrapper"}
                                  data-width={"full"}
                                  data-v-aa63f445={""}
                                  data-v-f96e6d69={""}
                                >
                                  <label
                                    className={"label"}
                                    htmlFor={"f-name"}
                                    data-v-f96e6d69={""}
                                  >
                                    {"Full Name"}
                                    <span data-v-f96e6d69={""}>{" *"}</span>
                                  </label>
                                  <input
                                    id={"f-name"}
                                    className={"field"}
                                    type={"text"}
                                    name={"name"}
                                    placeholder={"First Name Last Name"}
                                    required={true}
                                    autoComplete={"name"}
                                    defaultValue={""}
                                    data-v-f96e6d69={""}
                                  />
                                </div>
                              </div>
                              <div
                                className={"field-col field-col--full"}
                                data-v-aa63f445={""}
                              >
                                <div
                                  className={"field-wrapper"}
                                  data-width={"full"}
                                  data-v-aa63f445={""}
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
                                    placeholder={"Company Name"}
                                    required={true}
                                    autoComplete={"organization"}
                                    defaultValue={""}
                                    data-v-f96e6d69={""}
                                  />
                                </div>
                              </div>
                              <div
                                className={"field-col field-col--full"}
                                data-v-aa63f445={""}
                              >
                                <div
                                  className={"field-wrapper"}
                                  data-width={"full"}
                                  data-v-aa63f445={""}
                                  data-v-f96e6d69={""}
                                >
                                  <label
                                    className={"label"}
                                    htmlFor={"f-title"}
                                    data-v-f96e6d69={""}
                                  >
                                    {"Title"}
                                  </label>
                                  <input
                                    id={"f-title"}
                                    className={"field"}
                                    type={"text"}
                                    name={"title"}
                                    placeholder={"Title"}
                                    autoComplete={"organization-title"}
                                    defaultValue={""}
                                    data-v-f96e6d69={""}
                                  />
                                </div>
                              </div>
                              <div
                                className={"field-col field-col--full"}
                                data-v-aa63f445={""}
                              >
                                <div
                                  className={"field-wrapper"}
                                  data-width={"full"}
                                  data-v-aa63f445={""}
                                  data-v-f96e6d69={""}
                                >
                                  <label
                                    className={"label"}
                                    htmlFor={"f-phone"}
                                    data-v-f96e6d69={""}
                                  >
                                    {"Phone Number"}
                                  </label>
                                  <input
                                    id={"f-phone"}
                                    className={"field"}
                                    type={"tel"}
                                    name={"phone"}
                                    placeholder={"(123) 456 789"}
                                    autoComplete={"tel"}
                                    defaultValue={""}
                                    inputMode={"numeric"}
                                    data-v-f96e6d69={""}
                                  />
                                </div>
                              </div>
                              <div
                                className={"field-col field-col--full"}
                                data-v-aa63f445={""}
                              >
                                <div
                                  className={"field-wrapper"}
                                  data-width={"full"}
                                  data-v-aa63f445={""}
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
                                    placeholder={"example@company.com"}
                                    required={true}
                                    autoComplete={"email"}
                                    defaultValue={""}
                                    data-v-f96e6d69={""}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className={"form-navigation"}
                            data-v-aa63f445={""}
                          >
                            <div
                              className={"navigation-buttons"}
                              data-v-aa63f445={""}
                            >
                              <input
                                className={
                                  "button-send | label-4 button input-button button-send | label-4"
                                }
                                style={{
                                  "--hover-bg": "var(--c-dark-green)",
                                  "--hover-color": "rgba(171, 255, 2, 1)",
                                  "--base-color": "rgba(5, 36, 36, 1)",
                                }}
                                type={"submit"}
                                value={"SUBMIT"}
                                data-form-id={"form-builder"}
                                data-v-aa63f445={""}
                                data-v-d8fa3fef={""}
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className={"form-footer animated-strong"}
                          data-v-aa63f445={""}
                        >
                          <p data-v-aa63f445={""}>
                            <span
                              style={{ color: "#C2C2C2" }}
                              data-v-aa63f445={""}
                            >
                              {"Or just call"}
                            </span>
                          </p>
                          <h2 data-v-aa63f445={""}>
                            <strong data-v-aa63f445={""}>
                              <span data-v-aa63f445={""}>{"737-279-5032"}</span>
                            </strong>
                          </h2>
                        </div>
                      </form>
                    </div>
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
