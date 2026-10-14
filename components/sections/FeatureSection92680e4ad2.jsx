import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";

export default function FeatureSection92680e4ad2() {
  return (
    <section className={"feature-section"} data-v-9b93a15e={""}>
      <div
        className={"feature-section__image-wrapper"}
        aria-hidden={"true"}
        data-v-9b93a15e={""}
      >
        <div
          className={"feature-section__image-transform"}
          data-v-9b93a15e={""}
        >
          <div
            className={"media-el feature-section__image"}
            data-v-9b93a15e={""}
            data-v-18c5ce2a={""}
          >
            <picture className={"media-wrapper lg"} data-v-18c5ce2a={""}>
              <img
                alt={""}
                decoding={"async"}
                draggable={"false"}
                src={"/assets/cb9429a61095b69d4d38.webp"}
                sizes={
                  "(max-width: 479px) 462px, (max-width: 767px) 738px, (max-width: 1023px) 985px, (max-width: 1439px) 1920px, (max-width: 1679px) 1680px, (max-width: 1919px) 1920px, 2560px"
                }
              />
            </picture>
          </div>
        </div>
      </div>
      <div className={"feature-section__content"} data-v-9b93a15e={""}>
        <h2
          className={"feature-section__headline title-h2"}
          data-v-9b93a15e={""}
        >
          {"How Terminal helps companies get more out of their YMS/TMS"}
        </h2>
        <div className={"feature-section__description"} data-v-9b93a15e={""}>
          <p data-v-9b93a15e={""}>
            <span style={{ color: "" }} data-v-9b93a15e={""}>
              {
                "Terminal YOS is a logistics process automation platform for the yard designed to play nicely with existing legacy systems, connecting to WMS, TMS, and ERP. By providing a unified data hub, it acts as a digital bridge from highway to warehouse."
              }
            </span>
          </p>
          <p data-v-9b93a15e={""}></p>
          <p data-v-9b93a15e={""}>
            <span style={{ color: "#7F7F7F" }} data-v-9b93a15e={""}>
              {
                "The system provides the real-time data and insights that these other systems often lack, ensuring the yard doesn't bottleneck the warehouse and maximizing the ROI of your existing technology."
              }
            </span>
          </p>
        </div>
        <Link
          href={"/get-more-out-of-your-wms-and-tms"}
          className={
            "feature-section__button button label-4 feature-section__button"
          }
          style={{
            "--hover-bg": "var(--c-dark-green)",
            "--hover-color": "var(--c-lime)",
            "--base-color": "rgba(255, 255, 255, 0.3)",
          }}
          data-v-9b93a15e={""}
          data-v-d8fa3fef={""}
          prefetch={false}
        >
          <span className={"link-active"} data-v-d8fa3fef={""}>
            {"LEARN MORE"}
          </span>
        </Link>
      </div>
    </section>
  );
}
