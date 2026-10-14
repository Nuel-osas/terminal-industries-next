import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";
import Widee3ce66cfe0 from "@/components/sections/Widee3ce66cfe0";
export default function IsFullscreene4999d45aa() {
  return (
    <section className={"is-fullscreen section__wrapper"} data-v-3e5feb24={""}>
      <div
        className={"has-background-image background-canvas-wrapper"}
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
              {"Yard Security Grader"}
            </p>
            <header
              className={"spacing header animated-strong"}
              data-v-3e5feb24={""}
            >
              <h2 className={"title-si"} data-v-3e5feb24={""}>
                {"How secure is your logistics yard?"}
              </h2>
            </header>
            <Widee3ce66cfe0 />
          </div>
          <nav
            className={"buttons"}
            aria-label={"Section actions"}
            data-v-3e5feb24={""}
          >
            <Link
              href={"/yard-security-grader"}
              className={"button label-4"}
              style={{
                "--hover-bg": "var(--c-dark-green)",
                "--hover-color": "var(--c-lime)",
                "--base-color": "rgba(5, 36, 36, 1)",
              }}
              aria-label={"Grade my yard"}
              data-v-3e5feb24={""}
              data-v-d8fa3fef={""}
              prefetch={false}
            >
              <span className={"link-active"} data-v-d8fa3fef={""}>
                {"Grade my yard"}
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
}
