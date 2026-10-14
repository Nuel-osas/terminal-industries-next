import FeatureCarousel from "@/components/FeatureCarousel";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";
import ParagraphsWrapper57e4a38fdc from "@/components/sections/ParagraphsWrapper57e4a38fdc";
export default function FeaturesCarouselExpandableSection554b8e4ca9() {
  return (
    <section
      className={"features-carousel-expandable-section"}
      data-v-86990e65={""}
    >
      <div className={"grid__wrapper"} data-v-86990e65={""}>
        <div className={"wrapper"} data-v-86990e65={""}>
          <div className={"header-section"} data-v-86990e65={""}>
            <p className={"label label-5"} role={"text"} data-v-86990e65={""}>
              {"Platform"}
            </p>
            <header
              className={"spacing header animated-strong"}
              data-v-86990e65={""}
            >
              <h3 className={"title-h3"} data-v-86990e65={""}>
                <strong data-v-86990e65={""}>
                  <span style={{ color: "" }} data-v-86990e65={""}>
                    {"One Modular Platform"}
                  </span>
                </strong>
                <span style={{ color: "" }} data-v-86990e65={""}>
                  {" Infinite Possibilities"}
                </span>
              </h3>
            </header>
            <ParagraphsWrapper57e4a38fdc />
          </div>
        </div>
      </div>
      <FeatureCarousel />
    </section>
  );
}
