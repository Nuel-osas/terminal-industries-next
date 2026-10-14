import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";

export default function HasBgPath19fd4ef655() {
  return (
    <section className={"has-bg-path section__wrapper"} data-v-3e5feb24={""}>
      <div
        className={"background-wrapper"}
        aria-hidden={"true"}
        data-v-3e5feb24={""}
      >
        <div
          className={"path-background gradient-mask"}
          data-v-3e5feb24={""}
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
                id={"v-0-0-0-0-12-2"}
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
          </svg>
          <div className={"content"} data-v-203e72aa={""}>
            <div className={"background-sizer"} data-v-3e5feb24={""}></div>
          </div>
        </div>
      </div>
      <div
        className={"section-introduction"}
        aria-labelledby={"section-label"}
        data-v-3e5feb24={""}
      >
        <div className={"content-wrapper"} data-v-3e5feb24={""}>
          <div className={"section-content"} data-v-3e5feb24={""}>
            <p
              id={"section-label"}
              className={"label label-5"}
              role={"text"}
              data-v-3e5feb24={""}
            >
              {"Our Team"}
            </p>
            <header
              className={"spacing header animated-strong"}
              data-v-3e5feb24={""}
            >
              <h2 className={"title-si"} data-v-3e5feb24={""}>
                {"Ready to make"}
              </h2>
              <h2 className={"title-si"} data-v-3e5feb24={""}>
                {"goods flow?"}
              </h2>
            </header>
          </div>
          <nav
            className={"buttons-underlined buttons"}
            aria-label={"Section actions"}
            data-v-3e5feb24={""}
          >
            <Link
              href={"/careers"}
              className={"button--underlined link-active-full button label-4"}
              style={{
                "--hover-bg": "var(--c-dark-green)",
                "--hover-color": "var(--c-lime)",
                "--base-color": "rgba(5, 36, 36, 1)",
              }}
              aria-label={"JOIN OUR TEAM"}
              data-v-3e5feb24={""}
              data-v-d8fa3fef={""}
              prefetch={false}
            >
              <span className={"link-active"} data-v-d8fa3fef={""}>
                {"JOIN OUR TEAM"}
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
}
