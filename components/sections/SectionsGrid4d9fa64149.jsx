import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";

export default function SectionsGrid4d9fa64149() {
  return (
    <section
      className={"sections-grid sections-grid--white sections-grid--gradient"}
      aria-labelledby={"section-label"}
      data-v-6a166306={""}
    >
      <div
        className={"background-wrapper"}
        aria-hidden={"true"}
        data-v-6a166306={""}
      >
        <div
          className={"path-background gradient-mask"}
          data-v-6a166306={""}
          data-v-203e72aa={""}
        >
          <div className={"ref-offset-left-grid"} data-v-203e72aa={""}>
            <div className={"ref-element col-6"} data-v-203e72aa={""}></div>
            <div className={"ref-element col-10"} data-v-203e72aa={""}></div>
          </div>
          <svg
            width={"0"}
            height={"0"}
            viewBox={"0 0 0 0"}
            className={"svg"}
            data-v-203e72aa={""}
          >
            <defs data-v-203e72aa={""}>
              <filter
                id={"v-0-0-0-0-2-2"}
                x={"0"}
                y={"0"}
                width={"155"}
                height={"89"}
                filterUnits={"userSpaceOnUse"}
                colorInterpolationFilters={"sRGB"}
                data-v-203e72aa={""}
              >
                <feGaussianBlur
                  stdDeviation={"17"}
                  data-v-203e72aa={""}
                ></feGaussianBlur>
              </filter>
            </defs>
            <path
              fillOpacity={"0.6"}
              filter={"url(#v-0-0-0-0-2-2)"}
              d={
                "M55.1257 34C40.6277 34 34 36.52 34 44.5C34 54.16 38.9708 55 55.1257 55C78.4606 55 121.817 45.34 120.988 44.5C119.817 43.312 78.4606 34 55.1257 34Z"
              }
              fill={"#ABFF02"}
              data-v-203e72aa={""}
            ></path>
            <path
              d={"M 0,0 L 0,80 L 0,80"}
              stroke={"#052424"}
              fill={"none"}
              strokeOpacity={"0.15"}
              strokeWidth={"1"}
              data-v-203e72aa={""}
            ></path>
            <path
              d={"M 0,0 L 0,80 L 0,80"}
              fill={"none"}
              stroke={"#052424"}
              strokeWidth={"1"}
              strokeLinecap={"round"}
              data-v-203e72aa={""}
            ></path>
          </svg>
          <div className={"content"} data-v-203e72aa={""}>
            <div className={"background-sizer"} data-v-6a166306={""}></div>
          </div>
        </div>
      </div>
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
          {"The Solution"}
        </p>
        <div
          className={"spacing sections-grid__title animated-strong"}
          data-v-6a166306={""}
        >
          <h2 className={"title-si"} data-v-6a166306={""}>
            {"Terminal is Your Yard’s Central Nervous System"}
          </h2>
        </div>
        <div className={"sections-grid__paragraph"} data-v-6a166306={""}>
          <p
            className={"paragraph body-4"}
            style={{ textAlign: "center" }}
            data-v-6a166306={""}
          >
            <span style={{ color: "#454742" }} data-v-6a166306={""}>
              {"Terminal Yard Operating System"}
            </span>
            <sup data-v-6a166306={""}>
              <span style={{ color: "#454742" }} data-v-6a166306={""}>
                {"TM"}
              </span>
            </sup>
            <span style={{ color: "#454742" }} data-v-6a166306={""}>
              {
                ' connects the "brain" of your TMS with the "body" of your WMS. With real-time gate-to-dock visibility, we track every asset and event, creating a single source of truth across your operation. Manual guesswork, phone calls, and spreadsheets are replaced with automation and clarity.'
              }
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
