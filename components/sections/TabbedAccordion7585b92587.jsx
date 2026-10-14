import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";

export default function TabbedAccordion7585b92587() {
  return (
    <section className={"tabbed-accordion"}>
      <div className={"tabbed-accordion__wrapper"}>
        <div className={"tabbed-accordion__richtext animated-strong"}>
          <h2 className={"title-h2"} style={{ margin: "0", lineHeight: "1.2" }}>
            {"FAQs"}
          </h2>
          <p className={"body-1"}>
            {
              "Here are the most common questions teams have before getting started with Terminal Gate Acceleration. "
            }
          </p>
        </div>
        <div className={"tabbed-accordion__content"}>
          <div className={"tabbed-accordion__accordion"}>
            <details className={"accordion-item"}>
              <summary className={"accordion-item__summary"}>
                <span className={"accordion-item__title"}>
                  {"Do I need RFID or BLE tags?"}
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
                    <span style={{ color: "#1F1F1F" }}>
                      {
                        "No. Terminal reads plates and trailer IDs with computer vision, so there's nothing to tag, issue, or replace."
                      }
                    </span>
                  </p>
                </div>
              </div>
            </details>
            <details className={"accordion-item"}>
              <summary className={"accordion-item__summary"}>
                <span className={"accordion-item__title"}>
                  {"Do I have to run an unmanned gate? "}
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
                        " No. Start in Assisted mode with your guard in the loop, then move to Autonomous, where the gate runs unmanned, whenever you're ready. You can run different modes at different lanes or sites."
                      }
                    </span>
                  </p>
                </div>
              </div>
            </details>
            <details className={"accordion-item"}>
              <summary className={"accordion-item__summary"}>
                <span className={"accordion-item__title"}>
                  {"What happens with an unscheduled truck?"}
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
                        " It's captured and routed to an exception flow before it enters, so nothing gets in unverified."
                      }
                    </span>
                  </p>
                </div>
              </div>
            </details>
            <details className={"accordion-item"}>
              <summary className={"accordion-item__summary"}>
                <span className={"accordion-item__title"}>
                  {"How long to get a single gate live?"}
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
                        "As little as 5 days, with low IT involvement on your side."
                      }
                    </span>
                  </p>
                </div>
              </div>
            </details>
            <details className={"accordion-item"}>
              <summary className={"accordion-item__summary"}>
                <span className={"accordion-item__title"}>
                  {"How does the driver communicate with the gate?"}
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
                    <span style={{ color: "#1F1F1F" }}>
                      {
                        "Drivers can easily check themselves in with a browser-based application. It will upload their DRL and they will confirm their shipment ID upon entry and exit. "
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
