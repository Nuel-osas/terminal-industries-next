import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";
import FooterHeightHolder2760f8cb24 from "@/components/sections/FooterHeightHolder2760f8cb24";
import SectionWrapper34b8672def from "@/components/sections/SectionWrapper34b8672def";
export default function Page79c8724b90() {
  return (
    <>
      <div id={"app"}>
        <SiteHeader />
        <main data-v-26ed1394={""}>
          <div>
            <div className={"post-wrapper"} data-v-29b3eeb5={""}>
              <header
                className={"post-header"}
                data-v-29b3eeb5={""}
                data-v-01b90259={""}
              >
                <div className={"post-header__bg"} data-v-01b90259={""}>
                  <div
                    className={"bg-canvas__wrapper white"}
                    data-v-01b90259={""}
                    data-v-6ffb6bc3={""}
                  >
                    <canvas data-v-6ffb6bc3={""}></canvas>
                  </div>
                </div>
                <div className={"post-header__content"} data-v-01b90259={""}>
                  <div
                    className={"post-header__meta label-4"}
                    data-v-01b90259={""}
                  >
                    {"blog • June 15, 2026"}
                  </div>
                  <h1
                    className={"post-header__title title-h1"}
                    data-v-01b90259={""}
                  >
                    {
                      "The $4.5 Million Freight Theft That Started With a Fake Identity"
                    }
                  </h1>
                </div>
                <figure
                  className={"post-header__image-wrapper"}
                  data-v-01b90259={""}
                >
                  <div
                    className={"post-header__image-container"}
                    data-v-01b90259={""}
                  >
                    <img
                      alt={"Post Image"}
                      className={"post-header__image"}
                      src={"/assets/13aeee6a7f8fdba1d753.webp"}
                      data-v-01b90259={""}
                    />
                  </div>
                </figure>
              </header>
              <div className={"post-content"} data-v-29b3eeb5={""}>
                <div
                  className={"author-container post-author"}
                  itemscope={""}
                  itemtype={"https://schema.org/Person"}
                  data-v-29b3eeb5={""}
                  data-v-dd1fd95f={""}
                >
                  <h2 className={"about-the-author"} data-v-dd1fd95f={""}>
                    {"About the Author"}
                  </h2>
                  <div className={"author-info"} data-v-dd1fd95f={""}>
                    <div className={"author-metadata"} data-v-dd1fd95f={""}>
                      <img
                        alt={""}
                        className={"author-avatar"}
                        itemprop={"image"}
                        src={"/assets/20c76c2dee2feed355b7.webp"}
                        data-v-dd1fd95f={""}
                      />
                      <div className={"author-details"} data-v-dd1fd95f={""}>
                        <p
                          className={"author-name"}
                          itemprop={"name"}
                          data-v-dd1fd95f={""}
                        >
                          {"Livia Brannan"}
                        </p>
                        <p
                          className={"author-role"}
                          itemprop={"jobTitle"}
                          data-v-dd1fd95f={""}
                        >
                          {"Marketing at Terminal Industries"}
                        </p>
                      </div>
                    </div>
                    <p
                      className={"author-bio"}
                      itemprop={"description"}
                      data-v-dd1fd95f={""}
                    >
                      {
                        "Livia contributes to Terminal Industries’ marketing efforts by developing content that highlights the company’s role in advancing logistics technology. She focuses on creating clear, engaging stories that connect industry innovation with Terminal’s broader vision for the future of the yard."
                      }
                    </p>
                  </div>
                  <Link
                    href={"/contact"}
                    className={
                      "author-cta-button button label-4 author-cta-button"
                    }
                    style={{
                      "--hover-bg": "rgba(5, 36, 36, 1)",
                      "--hover-color": "rgba(171, 255, 2, 1)",
                      "--base-color": "rgba(5, 36, 36, 1)",
                    }}
                    data-v-dd1fd95f={""}
                    data-v-d8fa3fef={""}
                    prefetch={false}
                  >
                    <span className={"link-active"} data-v-d8fa3fef={""}>
                      {" Talk to an expert "}
                    </span>
                  </Link>
                </div>
                <div data-v-29b3eeb5={""}>
                  <nav
                    className={"breadcrumbs"}
                    aria-label={"Breadcrumb"}
                    data-v-29b3eeb5={""}
                    data-v-ff0d7e07={""}
                  >
                    <ol className={"breadcrumbs-list"} data-v-ff0d7e07={""}>
                      <li className={"breadcrumbs-item"} data-v-ff0d7e07={""}>
                        <Link
                          href={"/resources"}
                          className={"breadcrumbs-link"}
                          data-v-ff0d7e07={""}
                          prefetch={false}
                        >
                          {"Resources"}
                        </Link>
                        <span
                          className={"breadcrumbs-separator"}
                          aria-hidden={"true"}
                          data-v-ff0d7e07={""}
                        >
                          {"/"}
                        </span>
                      </li>
                      <li className={"breadcrumbs-item"} data-v-ff0d7e07={""}>
                        <Link
                          href={"/resources/blogs"}
                          className={"breadcrumbs-link"}
                          data-v-ff0d7e07={""}
                          prefetch={false}
                        >
                          {"Blogs"}
                        </Link>
                        <span
                          className={"breadcrumbs-separator"}
                          aria-hidden={"true"}
                          data-v-ff0d7e07={""}
                        >
                          {"/"}
                        </span>
                      </li>
                      <li className={"breadcrumbs-item"} data-v-ff0d7e07={""}>
                        <span
                          className={"breadcrumbs-current"}
                          aria-current={"page"}
                          data-v-ff0d7e07={""}
                        >
                          {
                            "The $4.5 Million Freight Theft That Started With a Fake Identity"
                          }
                        </span>
                      </li>
                    </ol>
                  </nav>
                  <div
                    id={"summarize-button"}
                    className={"summarize-button"}
                    style={{ paddingBottom: "16px" }}
                    data-v-29b3eeb5={""}
                  ></div>
                  <div
                    className={"post-content-wrapper post-content-body"}
                    data-v-29b3eeb5={""}
                    data-v-1c7eea09={""}
                  >
                    <div
                      className={
                        "prose prose-lg prose-gray max-w-3xl prose-headings:font-medium prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-green-700 prose-a:no-underline hover:prose-a:underline prose-strong:font-semibold prose-img:rounded-lg prose-hr:border-gray-200"
                      }
                      data-v-1c7eea09={""}
                    >
                      <p data-v-1c7eea09={""}>
                        {
                          "For decades, cargo theft looked a certain way. Criminals cut fences, broke locks, and physically stole freight. Security strategies evolved around that reality. Companies invested in gates, cameras, lighting, and guards to keep bad actors out."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "But a recent federal indictment involving an alleged $4.49 million cargo theft scheme tells a different story. According to prosecutors, the individuals involved allegedly impersonated legitimate trucking carriers, accepted loads under false identities, and arranged for freight to be picked up and disappear into the supply chain."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "No fence was cut. No warehouse was broken into. The freight was simply handed over to someone who appeared to be authorized to take it."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "That detail matters because it reflects how cargo theft is changing. Increasingly, theft is no longer a physical security problem. It is an identity problem."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {"And nowhere is that more visible than the yard."}
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "The yard is where custody changes hands. It is where drivers arrive, carriers check in, trailers are assigned, loads are released, and freight physically leaves a facility. Every shipment moving through a warehouse, distribution center, or manufacturing site eventually passes through this point of control."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "Yet many yards still operate with surprisingly limited visibility into who is actually arriving and what authority they have."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>{"A driver checks in."}</p>
                      <p data-v-1c7eea09={""}>{"A trailer is assigned."}</p>
                      <p data-v-1c7eea09={""}>{"A load is released."}</p>
                      <p data-v-1c7eea09={""}>{"The gate opens."}</p>
                      <p data-v-1c7eea09={""}>
                        {
                          "Thousands of these transactions happen every day across logistics networks. Most occur without issue. But when a carrier identity has been compromised or fraudulently represented, the yard often becomes the final checkpoint before the freight disappears."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "The challenge is that carrier impersonation rarely looks suspicious. The paperwork may appear legitimate. The carrier name may be familiar. The pickup information may match the shipment. To the human eye, everything can appear normal until it is too late."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "This is why the conversation around yard operations is beginning to change."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "Historically, the industry has focused on moving trucks through the gate as efficiently as possible. Faster check-ins, reduced congestion, and shorter wait times have been the primary objectives."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "Those goals remain important. But as fraud becomes more sophisticated, yards are being asked to do something else: verify."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>{"Not just who arrived."}</p>
                      <p data-v-1c7eea09={""}>
                        {"But whether they should be there."}
                      </p>
                      <p data-v-1c7eea09={""}>
                        {"Not just whether a truck is at the gate."}
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "But whether that truck is authorized to leave with a specific load."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "In many ways, the future yard is becoming a decision point rather than a traffic checkpoint."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "Every arrival, pickup, and departure creates a moment where the operation can either establish confidence or introduce risk. The facilities that perform best in the coming years will not simply be the ones that move trucks the fastest. They will be the ones that can verify identities, validate appointments, maintain chain of custody, and create a trusted record of every movement across the yard."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "The recent carrier impersonation case is a reminder that cargo theft is evolving. Criminals are no longer trying to break into the supply chain. Increasingly, they are attempting to blend into it."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {"That places new importance on the yard."}
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "Because when a fraudulent pickup occurs, the theft usually does not begin on the highway. It begins at the moment someone checks in, receives access, and leaves with freight they were never supposed to have."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {"The road may be where the load disappears."}
                      </p>
                      <p data-v-1c7eea09={""}>
                        {"But the yard is where the decision was made."}
                      </p>
                    </div>
                    <div
                      className={"tag-button-list mt-8"}
                      data-v-1c7eea09={""}
                      data-v-95826a6e={""}
                    ></div>
                    <div className={"post-actions"} data-v-1c7eea09={""}>
                      <button
                        className={"ds-button button label-4 ds-button"}
                        style={{
                          "--hover-bg": "rgba(5, 36, 36, 1)",
                          "--hover-color": "rgba(171, 255, 2, 1)",
                          "--base-color": "rgba(5, 36, 36, 1)",
                        }}
                        id={"reka-dropdown-menu-trigger-v-0-0-0-0-0"}
                        type={"button"}
                        aria-haspopup={"menu"}
                        aria-expanded={"false"}
                        data-state={"closed"}
                        data-v-5dd9efe0={""}
                        data-v-d8fa3fef={""}
                      >
                        <span className={"link-active"} data-v-d8fa3fef={""}>
                          {" Share "}
                        </span>
                      </button>
                      <Link
                        href={"/contact"}
                        className={"ds-button button label-4 ds-button"}
                        style={{
                          "--hover-bg": "rgba(5, 36, 36, 1)",
                          "--hover-color": "rgba(171, 255, 2, 1)",
                          "--base-color": "rgba(5, 36, 36, 1)",
                        }}
                        data-v-1c7eea09={""}
                        data-v-d8fa3fef={""}
                        prefetch={false}
                      >
                        <span className={"link-active"} data-v-d8fa3fef={""}>
                          {" Request a demo "}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={"notch-section__wrapper"}
                data-v-29b3eeb5={""}
                data-v-3e5feb24={""}
                data-v-3fe87144={""}
              >
                <div
                  className={"svg-mask"}
                  data-v-3fe87144={""}
                  style={{
                    "--d27fb6da": 'url("#clip-v-0-0-0-0-1")',
                    "--b18bdda2": 'url("#mask-v-0-0-0-0-1")',
                  }}
                  data-v-ebd3c3c9={""}
                >
                  <svg
                    width={"0"}
                    height={"0"}
                    viewBox={"-0.5 -0.5 1 1"}
                    className={"svg"}
                    shapeRendering={"geometricPrecision"}
                    data-v-ebd3c3c9={""}
                  >
                    <defs data-v-ebd3c3c9={""}>
                      <clipPath
                        id={"clip-v-0-0-0-0-1"}
                        clipPathUnits={"userSpaceOnUse"}
                        data-v-ebd3c3c9={""}
                      >
                        <path
                          d={
                            "M -0.5,-0.5 L 0.5,-0.5 L 0.5,0.5 L -0.5,0.5 L -0.5,-0.5"
                          }
                          data-v-ebd3c3c9={""}
                        ></path>
                      </clipPath>
                    </defs>
                  </svg>
                  <div className={"ssr use-clip slot"} data-v-ebd3c3c9={""}>
                    <SectionWrapper34b8672def />
                  </div>
                </div>
              </div>
            </div>
            <FooterHeightHolder2760f8cb24 />
          </div>
        </main>
      </div>
    </>
  );
}
