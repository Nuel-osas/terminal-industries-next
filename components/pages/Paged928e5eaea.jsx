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
export default function Paged928e5eaea() {
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
                    {"blog • June 18, 2026"}
                  </div>
                  <h1
                    className={"post-header__title title-h1"}
                    data-v-01b90259={""}
                  >
                    {
                      "Beyond the YMS: How a Yard Operating System Unlocks Your WMS"
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
                      src={"/assets/a62efef3257db6492f88.webp"}
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
                        src={"/assets/5d7e8ff42b210b7680ea.webp"}
                        data-v-dd1fd95f={""}
                      />
                      <div className={"author-details"} data-v-dd1fd95f={""}>
                        <p
                          className={"author-name"}
                          itemprop={"name"}
                          data-v-dd1fd95f={""}
                        >
                          {"Josh Kivenko"}
                        </p>
                        <p
                          className={"author-role"}
                          itemprop={"jobTitle"}
                          data-v-dd1fd95f={""}
                        >
                          {"Chief Marketing Officer "}
                        </p>
                      </div>
                    </div>
                    <p
                      className={"author-bio"}
                      itemprop={"description"}
                      data-v-dd1fd95f={""}
                    >
                      {
                        "Josh Kivenko has spent nearly two decades developing winning go-to-market strategies in supply chain related fields. As CMO, he is driven to reinvent the yard by building a winning brand that connects critical customer needs to the magic of Terminal's technology."
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
                            "Beyond the YMS: How a Yard Operating System Unlocks Your WMS"
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
                          "A well-known YMS provider recently published a post making the case that a purpose-built YMS beats the yard module bundled into a warehouse management system. On the narrow point, they are right. A yard module is a thin appendage. It was never going to run a dynamic outdoor environment where trucks queue, trailers dwell, and custody changes hands."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "But the post aims at the wrong target. It treats this as a knock on the WMS, and it is not. Your WMS is one of the most important systems you own, and you have spent years and real money making it good at what it does. The problem was never the WMS. The problem is the gap it was never built to see."
                        }
                      </p>
                      <h2
                        id={"the-gap-between-the-highway-and-the-warehouse"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"The gap between the highway and the warehouse"}
                      </h2>
                      <p data-v-1c7eea09={""}>
                        {
                          "Think about where your systems actually live. Your TMS owns the road. Your WMS owns everything inside the four walls. Between them sits the yard: the handoff where the highway becomes the warehouse, and the one place where, for most operators, the data goes dark."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "That gap is not a WMS failure. A WMS is built to optimize inventory and labor inside the building, and it does that well. Asking it to also run the yard through a bolt-on module is asking it to do a job it was never designed for, with a tool nobody really invested in. The result is the visibility gaps and manual workarounds everyone knows too well. The fix is not a better WMS. It is something purpose-built to own the gap and feed the WMS what it has been missing."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          'The mistake in the "bolt-on versus purpose-built YMS" debate is assuming the choice ends there. It does not.'
                        }
                      </p>
                      <h2
                        id={"a-list-of-tasks-is-not-a-mission"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"A list of tasks is not a mission"}
                      </h2>
                      <p data-v-1c7eea09={""}>
                        {
                          "Even a purpose-built YMS, the supposed upgrade, is still the same kind of software underneath. It keeps a list of yard tasks. Check in a driver. Assign a door. Log a move. Each one is a row someone updates. The system holds the rows and shows them to you. When the rows fall out of sync with the yard, and they always do, a person reconciles the board by hand. You have traded a thin clipboard for a nicer one."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "An operating system does not keep a list. It runs missions. A mission is a connected sequence of work aimed at an outcome: get this trailer from the gate to the right dock to the next dispatch, with each task triggering the next and adjusting as conditions change. The tasks are not entries to maintain. They are steps to orchestrate."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "A list tells you a trailer is due at door 7. A mission moves it there, reassigns the jockey when door 7 backs up, and re-sequences the next three arrivals around the delay, without waiting for someone to notice and retype the board."
                        }
                      </p>
                      <h2
                        id={"the-yard-is-a-data-problem"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"The yard is a data problem"}
                      </h2>
                      <p data-v-1c7eea09={""}>
                        {
                          "None of that works if the system is still waiting to be told what happened. Orchestration needs data, and not the thin trickle a person types in between moves. It needs the whole picture, captured continuously and directly from the yard."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "A yard module and a traditional YMS both run on data that people feed them. They are only as current as the last person who remembered to enter something. An AI-native operating system captures the yard itself: what arrived, what moved, what is sitting where, what condition it is in, in real time and without a clipboard in the loop."
                        }
                      </p>
                      <h2
                        id={"this-is-how-you-unleash-your-wms"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"This is how you unleash your WMS"}
                      </h2>
                      <p data-v-1c7eea09={""}>
                        {
                          "Here is the part that matters most to anyone who has invested heavily in a warehouse management system. A WMS is only as good as the data crossing its threshold. Today that data arrives late and rough. The WMS does not really know a load is on site until someone keys it in. It does not know the right trailer is staged and ready until a supervisor walks out to look. It plans labor and doors against guesses about what is sitting in the yard."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "Close the yard gap and all of that changes. When the yard is captured and orchestrated in real time, the WMS finally gets clean, live input: accurate arrival times, verified contents, dock readiness, the actual state of the yard instead of an estimate. The warehouse stops waiting on the yard and starts working ahead of it. Labor lines up against trucks that are genuinely ready. Doors turn faster. Detention and demurrage fall because the handoff stops stalling."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "That is the real promise. The right yard technology does not compete with your WMS. It bridges the gap between the highway and the warehouse, a data gap and a capability gap, and in doing so it makes the system you already own dramatically more valuable. You are not replacing your warehouse investment. You are finally letting it run at full speed."
                        }
                      </p>
                      <h2
                        id={"beyond-yard-management"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"Beyond yard management"}
                      </h2>
                      <p data-v-1c7eea09={""}>
                        {
                          "Once the system perceives the yard directly, it is not confined to yard management at all. The same data and the same orchestration layer extend into the broader problems operators lose sleep over."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "Security is one example. The fastest-growing cargo theft method is not cutting a fence; it is fraudulent carriers and stolen identities driving loads out the gate with clean paperwork. CargoNet put 2025 losses near $725 million, up roughly 60% in a single year on flat incident volume. A system that only records what a human types at the gate cannot catch that. A system that already sees the driver, the truck, and the load can."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          'Damage detection is another. The same perception that runs the gate can flag a damaged trailer or a compromised seal the moment it enters, instead of in a dispute three weeks later. Nobody added a "damage module." It is the same data, asked a different question.'
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "That is the pattern. Capture the yard, and you solve problems well past the original task list, because they were always data problems hiding in the gap nobody owned."
                        }
                      </p>
                      <h2
                        id={"why-this-was-not-possible-before"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"Why this was not possible before"}
                      </h2>
                      <p data-v-1c7eea09={""}>
                        {
                          "The honest reason the industry settled for the bolt-on versus purpose-built debate is that the better option did not exist at a workable price. You chose between a heavy enterprise suite that took a year to stand up and a thin point solution that did one thing. Depth and accessibility were a tradeoff."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "AI-native development collapsed that tradeoff. The perception and orchestration that used to require custom integration and a six-figure services engagement now ship as software. That is what makes a real operating system buildable, and buildable for the operator running five yards, not just the network running five hundred. Start with one yard. Scale to the network."
                        }
                      </p>
                      <h2
                        id={"the-actual-question"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"The actual question"}
                      </h2>
                      <p data-v-1c7eea09={""}>
                        {
                          "The WMS yard module was never going to run your yard. Neither is a tool that just keeps a tidier list while the yard, the data, and the value locked inside your existing systems sit out of reach."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "The question is no longer bolt-on or purpose-built. It is whether your yard stays a blind spot between the highway and the warehouse, or becomes the bridge that makes everything on both sides, your WMS included, worth more."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {"That is the age of the YOS. And it is now."}
                      </p>
                      <hr data-v-1c7eea09={""} />
                      <p data-v-1c7eea09={""}>
                        <em data-v-1c7eea09={""}>
                          {
                            "Cargo theft figures: Verisk CargoNet 2025 annual supply chain risk analysis (estimated losses near $725M, up ~60% year over year on essentially flat incident volume)."
                          }
                        </em>
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
