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
export default function Page3234c17834() {
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
                    {"blog • June 1, 2026"}
                  </div>
                  <h1
                    className={"post-header__title title-h1"}
                    data-v-01b90259={""}
                  >
                    {
                      "Humanoid Robots Are Entering Logistics. But the Yard Still Has to Catch Up."
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
                      src={"/assets/b6535e8cbc2802ac8c04.webp"}
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
                            "Humanoid Robots Are Entering Logistics. But the Yard Still Has to Catch Up."
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
                          "In the past week, Figure AI announced a commercial agreement with Catalyst Brands, the parent company of JCPenney, Aéropostale, and Brooks Brothers, to deploy humanoid robots into its distribution and logistics network. The initial rollout will begin at Catalyst’s Reno, Nevada Distribution Logistics Center, where the robots will focus on physically demanding supply chain tasks."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "At the same time, China’s humanoid robotics market is accelerating quickly. Recent coverage has pointed to China’s push to mass produce lower cost humanoid robots for factories and warehouses, with some models reportedly priced far below traditional industrial robotics systems. TrendForce has also projected that China’s humanoid robot output will grow sharply in 2026 as the sector moves closer to commercialization."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "The headline is easy to understand: robots are coming to logistics."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "The harder question is whether logistics environments are actually ready for them."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "Humanoid robots are often framed as the next labor breakthrough. They can sort, lift, move, pack, and eventually perform repetitive physical tasks that are difficult to staff and expensive to scale. That is a meaningful shift, especially in an industry where labor shortages, rising costs, and throughput pressure continue to challenge operators. Schaeffler, for example, recently announced plans with Humanoid to deploy between 1,000 and 2,000 humanoid robots across manufacturing sites by 2032."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {"But a robot does not operate in a vacuum."}
                      </p>
                      <p data-v-1c7eea09={""}>
                        {"It operates inside a physical system."}
                      </p>
                      <p data-v-1c7eea09={""}>
                        {"And that system has to know what is happening."}
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "A humanoid robot can only be useful if the environment around it is coordinated. It needs accurate work instructions. It needs reliable inventory data. It needs to know where assets are, what needs to move, which dock is available, what trailer is arriving, and whether the physical world matches the system of record."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "That is where the robotics conversation gets more complicated."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "Most logistics automation stories focus on what happens inside the warehouse. Robots moving totes. Robots packing boxes. Robots supporting associates on the floor. But warehouses do not begin and end at the four walls of the building. Every automated warehouse still depends on trucks arriving, trailers being checked in, assets being located, docks being assigned, and yard moves happening on time."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "If the warehouse becomes automated but the yard remains manual, the bottleneck does not disappear."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>{"It simply moves outside."}</p>
                      <p data-v-1c7eea09={""}>
                        {
                          "This is the missing layer in the humanoid robotics conversation. The future of logistics will not be won by robots alone. It will be won by the systems that allow robots, humans, docks, trailers, gates, and transportation networks to operate from the same real time source of truth."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {"Think about the practical problem."}
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "A humanoid robot may be able to sort or pack faster, but what happens if the trailer it needs is sitting in the wrong location? What happens if a driver checked in manually and the information was entered late? What happens if the warehouse believes a trailer is at Dock 12, but physically it is still waiting in the yard? What happens if detention time is building because the facility has no live visibility into what is actually happening outside?"
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {"In those moments, the robot is not the constraint."}
                      </p>
                      <p data-v-1c7eea09={""}>
                        {"The operating environment is."}
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "That is why the next phase of logistics automation has to extend beyond warehouse robotics and into yard intelligence."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "The yard is where the physical supply chain becomes visible or invisible. It is where trucks enter, trailers dwell, appointments collide with reality, dock schedules shift, and small delays compound into network wide inefficiency. For years, the yard has been treated as a gray zone between transportation and warehouse operations. But in an increasingly automated supply chain, that gray zone becomes a risk."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>{"Robots need clean data."}</p>
                      <p data-v-1c7eea09={""}>
                        {"AI needs physical visibility."}
                      </p>
                      <p data-v-1c7eea09={""}>
                        {"Automation needs orchestration."}
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "And the yard is one of the most important places to get that right."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "This is where computer vision and AI become essential. By using cameras and intelligent software to capture real time yard activity, logistics operators can create a live picture of what is actually happening on the ground. That means trailers can be identified, movements can be tracked, gate activity can be automated, and yard inventory can become accurate without relying on manual updates alone."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {"For Terminal, this is the central point."}
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "The yard of the future is not just a more efficient version of today’s yard. It is the operational layer that makes advanced automation possible. A warehouse full of robots still needs accurate arrivals, real time trailer visibility, faster gate processing, smarter dock coordination, and a connected system of record that reflects the physical world."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "Humanoid robots may be the shiny object in logistics right now."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "But the real transformation is bigger than the robot."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "It is the shift from disconnected physical operations to intelligent, AI powered execution across the entire facility. The companies that win will not just automate tasks. They will automate awareness. They will build logistics environments where humans, robots, and systems can all act on the same truth."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {"The humanoid robot race has started."}
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "But before logistics can fully embrace robot workers, it has to solve something more foundational:"
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {"The yard has to become intelligent too."}
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
