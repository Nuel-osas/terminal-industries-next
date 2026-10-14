import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";

export default function SectionsGrid4ce3dda069() {
  return (
    <section
      className={"sections-grid sections-grid--dark sections-grid--gradient"}
      aria-labelledby={"section-label"}
      data-v-6a166306={""}
    >
      <div
        className={"sections-grid__header--stacked sections-grid__header"}
        data-v-6a166306={""}
      >
        <p
          id={"section-label"}
          className={"sections-grid__label | label label-5"}
          role={"text"}
          data-v-6a166306={""}
        >
          {"The Problem"}
        </p>
        <div
          className={"spacing sections-grid__title animated-strong"}
          data-v-6a166306={""}
        >
          <h2 className={"title-si"} data-v-6a166306={""}>
            {
              "Strategic cargo theft is the fastest-growing threat in the yard, and it doesn't look like theft"
            }
          </h2>
          <p
            className={"sections-grid__title-paragraph"}
            data-v-6a166306={""}
          ></p>
        </div>
        <div className={"sections-grid__paragraph"} data-v-6a166306={""}>
          <p className={"paragraph body-4"} data-v-6a166306={""}>
            {
              "A driver arrives on time, the documents are clean, the load number matches, and the trailer is gone before anyone realizes the carrier was double-brokered or the identity was fake. A guard at the gate can't cross-reference a carrier's risk profile or confirm a driver is who the booked carrier actually dispatched. Manual checks were built for honest mistakes, not coordinated fraud."
            }
          </p>
        </div>
      </div>
    </section>
  );
}
