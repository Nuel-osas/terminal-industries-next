import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";
import ProofPoints312830a629 from "@/components/sections/ProofPoints312830a629";
export default function ProofPointsWrapper513588bf19() {
  return (
    <section className={"proof-points__wrapper"} data-v-5ff111eb={""}>
      <div
        className={"background-canvas-wrapper"}
        aria-hidden={"true"}
        data-v-5ff111eb={""}
      >
        <div
          className={"bg-canvas__wrapper white"}
          data-v-5ff111eb={""}
          data-v-6ffb6bc3={""}
        >
          <canvas data-v-6ffb6bc3={""}></canvas>
        </div>
      </div>
      <ProofPoints312830a629 />
    </section>
  );
}
