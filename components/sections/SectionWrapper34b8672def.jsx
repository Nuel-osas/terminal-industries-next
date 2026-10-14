import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";
import ParagraphsWrapperdb1502055e from "@/components/sections/ParagraphsWrapperdb1502055e";
import SubscribeForme42a8796c5 from "@/components/sections/SubscribeForme42a8796c5";
export default function SectionWrapper34b8672def() {
  return (
    <section className={"section__wrapper"} data-v-3e5feb24={""}>
      <div
        className={"background-canvas-wrapper"}
        aria-hidden={"true"}
        data-v-3e5feb24={""}
      >
        <div
          className={"bg-canvas__wrapper white"}
          data-v-3e5feb24={""}
          data-v-6ffb6bc3={""}
        >
          <canvas data-v-6ffb6bc3={""}></canvas>
        </div>
      </div>
      <div className={"section-introduction"} data-v-3e5feb24={""}>
        <div className={"content-wrapper"} data-v-3e5feb24={""}>
          <div className={"section-content"} data-v-3e5feb24={""}>
            <header
              className={"spacing header animated-strong"}
              data-v-3e5feb24={""}
            >
              <h2 className={"title-si"} data-v-3e5feb24={""}>
                <span style={{ color: "" }} data-v-3e5feb24={""}>
                  {"From the Yard to Your Inbox"}
                </span>
              </h2>
            </header>
            <ParagraphsWrapperdb1502055e />
          </div>
          <SubscribeForme42a8796c5 />
        </div>
      </div>
    </section>
  );
}
