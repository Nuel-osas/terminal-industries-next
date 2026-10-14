import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";

export default function TabbedAccordiond669b1d672() {
  return (
    <section className={"tabbed-accordion"}>
      <div className={"tabbed-accordion__wrapper"}>
        <div className={"tabbed-accordion__richtext animated-strong"}>
          <h2 className={"title-h2"} style={{ margin: "0", lineHeight: "1.2" }}>
            {"FAQs"}
          </h2>
          <p className={"body-1"}>
            {
              "Here are the most common questions teams have before getting started with Terminal Carrier Risk Assessment and Driver ID."
            }
          </p>
        </div>
        <div className={"tabbed-accordion__content"}>
          <div className={"tabbed-accordion__accordion"}>
            <details className={"accordion-item"}>
              <summary className={"accordion-item__summary"}>
                <span className={"accordion-item__title"}>
                  {"How do you verify a driver? "}
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
                        "Identity is captured at check-in through a browser-based driver application and matched to the carrier and driver the appointment expects, and mismatches are flagged before entry."
                      }
                    </span>
                  </p>
                </div>
              </div>
            </details>
            <details className={"accordion-item"}>
              <summary className={"accordion-item__summary"}>
                <span className={"accordion-item__title"}>
                  {"What is a carrier risk assessment?"}
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
                  <ol order={"1"}>
                    <li>
                      <p className={"body-4"}>
                        <span style={{ color: "#000000" }}>
                          {
                            "Terminal scores the arriving carrier against the booked carrier and known fraud signals, so a double-brokered or fictitious pickup is caught at the gate."
                          }
                        </span>
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </details>
            <details className={"accordion-item"}>
              <summary className={"accordion-item__summary"}>
                <span className={"accordion-item__title"}>
                  {"Does this slow down legitimate drivers?"}
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
                        "No. Verified arrivals clear automatically; only mismatches are held."
                      }
                    </span>
                  </p>
                </div>
              </div>
            </details>
            <details className={"accordion-item"}>
              <summary className={"accordion-item__summary"}>
                <span className={"accordion-item__title"}>
                  {"Do I get a record I can defend later?"}
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
                        "Yes. Every check is timestamped and stored as an audit trail."
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
