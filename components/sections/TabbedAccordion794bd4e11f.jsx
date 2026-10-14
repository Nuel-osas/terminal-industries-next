import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";

export default function TabbedAccordion794bd4e11f() {
  return (
    <section className={"tabbed-accordion"}>
      <div className={"tabbed-accordion__wrapper"}>
        <div className={"tabbed-accordion__richtext animated-strong"}>
          <h2 className={"title-h2"} style={{ margin: "0", lineHeight: "1.2" }}>
            {"FAQs"}
          </h2>
          <p className={"body-1"}>
            {
              "Here are the most common questions teams have before getting started with Terminal Carrier Appointments"
            }
          </p>
        </div>
        <div className={"tabbed-accordion__content"}>
          <div className={"tabbed-accordion__accordion"}>
            <details className={"accordion-item"}>
              <summary className={"accordion-item__summary"}>
                <span className={"accordion-item__title"}>
                  {"Can carriers book their own slots? "}
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
                        "Yes, through a self-service portal, against the availability you control."
                      }
                    </span>
                  </p>
                </div>
              </div>
            </details>
            <details className={"accordion-item"}>
              <summary className={"accordion-item__summary"}>
                <span className={"accordion-item__title"}>
                  {"What happens when a truck is early or late?"}
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
                      {"The schedule reflows dynamically against real ETAs."}
                    </span>
                  </p>
                  <p className={"body-4"}></p>
                </div>
              </div>
            </details>
            <details className={"accordion-item"}>
              <summary className={"accordion-item__summary"}>
                <span className={"accordion-item__title"}>
                  {"Does the appointment connect to the gate?"}
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
                        "Yes. Check-in is tied to the appointment and the dock assignment automatically."
                      }
                    </span>
                  </p>
                </div>
              </div>
            </details>
            <details className={"accordion-item"}>
              <summary className={"accordion-item__summary"}>
                <span className={"accordion-item__title"}>
                  {"Do I need the full platform to use scheduling?"}
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
                        "No. Start with scheduling and add modules when you're ready."
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
