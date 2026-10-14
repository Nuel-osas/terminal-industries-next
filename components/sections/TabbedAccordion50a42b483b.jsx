import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";

export default function TabbedAccordion50a42b483b() {
  return (
    <section className={"tabbed-accordion"}>
      <div className={"tabbed-accordion__wrapper"}>
        <div className={"tabbed-accordion__richtext animated-strong"}>
          <h2 className={"title-h2"} style={{ margin: "0", lineHeight: "1.2" }}>
            {"FAQs"}
          </h2>
          <p className={"body-1"}>
            {
              "Here are the most common questions teams have before getting started with Terminal Dispatch and Spotter Orchestration:"
            }
          </p>
        </div>
        <div className={"tabbed-accordion__content"}>
          <div className={"tabbed-accordion__accordion"}>
            <details className={"accordion-item"}>
              <summary className={"accordion-item__summary"}>
                <span className={"accordion-item__title"}>
                  {"How are moves assigned?"}
                </span>
                <svg
                  className={"accordion-item__icon"}
                  xmlns={"http://www.w3.org/2000/svg"}
                  width={"24"}
                  height={"24"}
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  aria-hidden={"true"}
                >
                  <rect
                    x={"10.91"}
                    y={"0"}
                    width={"2.182"}
                    height={"24"}
                    fill={"currentColor"}
                  ></rect>
                  <rect
                    x={"24"}
                    y={"10.91"}
                    width={"2.182"}
                    height={"24"}
                    transform={"rotate(90 24 10.91)"}
                    fill={"currentColor"}
                  ></rect>
                </svg>
              </summary>
              <div className={"accordion-item__content"}>
                <div className={"accordion-item__content-inner"}>
                  <p className={"body-4"}>
                    <span style={{ color: "#000000" }}>
                      {
                        "Automatically (or manually via our dispatch application), by priority and proximity, pushed to each spotter's mobile app."
                      }
                    </span>
                  </p>
                </div>
              </div>
            </details>
            <details className={"accordion-item"}>
              <summary className={"accordion-item__summary"}>
                <span className={"accordion-item__title"}>
                  {"What are Missions?"}
                </span>
                <svg
                  className={"accordion-item__icon"}
                  xmlns={"http://www.w3.org/2000/svg"}
                  width={"24"}
                  height={"24"}
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  aria-hidden={"true"}
                >
                  <rect
                    x={"10.91"}
                    y={"0"}
                    width={"2.182"}
                    height={"24"}
                    fill={"currentColor"}
                  ></rect>
                  <rect
                    x={"24"}
                    y={"10.91"}
                    width={"2.182"}
                    height={"24"}
                    transform={"rotate(90 24 10.91)"}
                    fill={"currentColor"}
                  ></rect>
                </svg>
              </summary>
              <div className={"accordion-item__content"}>
                <div className={"accordion-item__content-inner"}>
                  <p className={"body-4"}>
                    <span style={{ color: "#000000" }}>
                      {
                        "Terminal's orchestration engine that turns yard conditions into the next best move for each driver."
                      }
                    </span>
                  </p>
                  <p className={"body-4"}></p>
                </div>
              </div>
            </details>
            <details className={"accordion-item"}>
              <summary className={"accordion-item__summary"}>
                <span className={"accordion-item__title"}>
                  {"Will I be able to measure spotter productivity?"}
                </span>
                <svg
                  className={"accordion-item__icon"}
                  xmlns={"http://www.w3.org/2000/svg"}
                  width={"24"}
                  height={"24"}
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  aria-hidden={"true"}
                >
                  <rect
                    x={"10.91"}
                    y={"0"}
                    width={"2.182"}
                    height={"24"}
                    fill={"currentColor"}
                  ></rect>
                  <rect
                    x={"24"}
                    y={"10.91"}
                    width={"2.182"}
                    height={"24"}
                    transform={"rotate(90 24 10.91)"}
                    fill={"currentColor"}
                  ></rect>
                </svg>
              </summary>
              <div className={"accordion-item__content"}>
                <div className={"accordion-item__content-inner"}>
                  <p className={"body-4"}>
                    <span style={{ color: "#000000" }}>
                      {
                        "Yes. Every move is logged with duration, by shift and by site."
                      }
                    </span>
                  </p>
                </div>
              </div>
            </details>
            <details className={"accordion-item"}>
              <summary className={"accordion-item__summary"}>
                <span className={"accordion-item__title"}>
                  {"Does this need the full platform?"}
                </span>
                <svg
                  className={"accordion-item__icon"}
                  xmlns={"http://www.w3.org/2000/svg"}
                  width={"24"}
                  height={"24"}
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  aria-hidden={"true"}
                >
                  <rect
                    x={"10.91"}
                    y={"0"}
                    width={"2.182"}
                    height={"24"}
                    fill={"currentColor"}
                  ></rect>
                  <rect
                    x={"24"}
                    y={"10.91"}
                    width={"2.182"}
                    height={"24"}
                    transform={"rotate(90 24 10.91)"}
                    fill={"currentColor"}
                  ></rect>
                </svg>
              </summary>
              <div className={"accordion-item__content"}>
                <div className={"accordion-item__content-inner"}>
                  <p className={"body-4"}>
                    <span style={{ color: "#000000" }}>
                      {
                        "It's strongest with yard visibility, but you can start here and add modules."
                      }
                    </span>
                  </p>
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
