import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";

export default function StickyHoldera55ab80102() {
  return (
    <section className={"sticky-holder"} data-v-b72e9d1b={""}>
      <div className={"sticky-container"} data-v-b72e9d1b={""}>
        <div
          className={"bg-canvas__wrapper green"}
          data-v-b72e9d1b={""}
          data-v-6ffb6bc3={""}
        >
          <canvas data-v-6ffb6bc3={""}></canvas>
        </div>
        <div className={"content-wrapper"} data-v-b72e9d1b={""}>
          <div className={"sub-title"} data-v-b72e9d1b={""}>
            <p data-v-b72e9d1b={""}></p>
          </div>
          <div className={"text-content"} data-v-b72e9d1b={""}>
            <p style={{ textAlign: "left" }} data-v-b72e9d1b={""}>
              <strong data-v-b72e9d1b={""}>
                {
                  "This is just the start. Terminal can expand into predictive maintenance and asset health, automated security and safety compliance, cross-dock/warehouse automation and intermodal/port operations, and more. Not a bolt-on, Terminal is the yard's operating system, using computer vision to drive efficiency, resilience, and smarts."
                }
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
