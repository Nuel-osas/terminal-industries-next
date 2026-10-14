import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";

export default function TabbedAccordion4c27447c17() {
  return (
    <section className={"tabbed-accordion"}>
      <div className={"tabbed-accordion__wrapper"}>
        <div className={"tabbed-accordion__richtext animated-strong"}>
          <h2 className={"title-h2"} style={{ margin: "0", lineHeight: "1.2" }}>
            {"FAQs"}
          </h2>
          <p className={"body-1"}>
            {
              "Here are the most common questions teams have before getting started with Terminal Load Verification. "
            }
          </p>
        </div>
        <div className={"tabbed-accordion__content"}>
          <div className={"tabbed-accordion__accordion"}>
            <details className={"accordion-item"}>
              <summary className={"accordion-item__summary"}>
                <span className={"accordion-item__title"}>
                  {"What does load verification actually capture?"}
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
                        "The load state at the dock and at gate-out, verified against the manifest, with timestamped visual evidence."
                      }
                    </span>
                  </p>
                </div>
              </div>
            </details>
            <details className={"accordion-item"}>
              <summary className={"accordion-item__summary"}>
                <span className={"accordion-item__title"}>
                  {"How does this help with chargebacks?"}
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
                        "You get a dated, image-backed record of what left, the proof you need to contest a claim instead of paying it."
                      }
                    </span>
                  </p>
                </div>
              </div>
            </details>
            <details className={"accordion-item"}>
              <summary className={"accordion-item__summary"}>
                <span className={"accordion-item__title"}>
                  {"What is chain of custody here?"}
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
                        "An unbroken, timestamped record of the load from dock to exit."
                      }
                    </span>
                  </p>
                </div>
              </div>
            </details>
            <details className={"accordion-item"}>
              <summary className={"accordion-item__summary"}>
                <span className={"accordion-item__title"}>
                  {"Is the evidence usable in a dispute?"}
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
                        "Yes. It's timestamped, attributed, and stored as a defensible record."
                      }
                    </span>
                  </p>
                </div>
              </div>
            </details>
            <details className={"accordion-item"}>
              <summary className={"accordion-item__summary"}>
                <span className={"accordion-item__title"}>
                  {
                    "How does Terminal help you comply with ISO 17712 and CTPAT?"
                  }
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
                        "Terminal provides a federated customer reconciliation with clear audit trail producing the ISO 17712 seal and chain-of-custody record insurers and CTPAT expect."
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
