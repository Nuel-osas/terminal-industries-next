import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";

export default function SectionsGrid8086c63106() {
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
              "Yard scheduling still runs on phone calls, emails, and a shared spreadsheet"
            }
          </h2>
        </div>
        <div className={"sections-grid__paragraph"} data-v-6a166306={""}>
          <p className={"paragraph body-4"} data-v-6a166306={""}>
            {
              "Carriers can't book their own slots, so they show up whenever, and appointments bunch, doors sit empty for an hour and then four trucks arrive at once, and no-shows blow up the plan. Worst of all, the appointment lives in one system while the gate and the dock live in another, so what was scheduled and what's actually arriving have nothing to do with each other."
            }
          </p>
        </div>
      </div>
    </section>
  );
}
