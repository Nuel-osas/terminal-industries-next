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
export default function Page8ae47a2933() {
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
                    {"blog • December 31, 2025"}
                  </div>
                  <h1
                    className={"post-header__title title-h1"}
                    data-v-01b90259={""}
                  >
                    {"Yard Automation Platform That Fixes Gate-to-Dock Chaos"}
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
                      src={"/assets/dfb643e4af6bae8b0d4a.webp"}
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
                        src={"/assets/e7174262d00349d7698e.webp"}
                        data-v-dd1fd95f={""}
                      />
                      <div className={"author-details"} data-v-dd1fd95f={""}>
                        <p
                          className={"author-name"}
                          itemprop={"name"}
                          data-v-dd1fd95f={""}
                        >
                          {"Jeff Martin"}
                        </p>
                        <p
                          className={"author-role"}
                          itemprop={"jobTitle"}
                          data-v-dd1fd95f={""}
                        >
                          {"VP of Revenue & Operations "}
                        </p>
                      </div>
                    </div>
                    <p
                      className={"author-bio"}
                      itemprop={"description"}
                      data-v-dd1fd95f={""}
                    >
                      {
                        "Jeff is a strategic operations and revenue leader with cross-functional experience spanning logistics technology, trading, and financial services. As VP of Revenue, Jeff is driven to reinvent the yard by fostering strategic customer and channel relationships based on respect for cutting-edge technology and deep logistics expertise."
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
                            "Yard Automation Platform That Fixes Gate-to-Dock Chaos"
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
                      <h1
                        id={
                          "yard-automation-platform-that-fixes-gate-to-dock-chaos"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "Yard Automation Platform That Fixes Gate-to-Dock Chaos"
                        }
                      </h1>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "Most supply chain leaders have already digitized the “easy-to-see” parts of logistics."
                        }
                      </p>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "You have a WMS that knows every pick and pallet. A TMS that tracks every mile. Visibility tools that map inventory across the network."
                        }
                      </p>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {"And then there’s the yard."}
                      </p>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "The yard is where plans collide with reality. Where trailers stack up without context, drivers arrive early or late, gate transactions get stuck in manual checks, and dock schedules become guesses. It is also where a surprising amount of throughput is either created or quietly lost."
                        }
                      </p>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "That gap matters because the scale is massive. Over $50B+ worth of goods move through North America’s 50,000+ warehouses and factories every day, and demand for logistics capacity keeps climbing. Many networks are still expanding footprint at roughly 10 percent annual square footage growth, while the working-age labor pool remains tight. In that environment, “just add people” does not work for long."
                        }
                      </p>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "Yard automation is the practical way forward. Not as a science project, but as the missing execution layer that bridges the operational and data gap from gate to dock, turning chaos into an orchestrated flow you can measure, improve, and scale. This "
                        }
                        <u data-v-1c7eea09={""}>
                          <Link
                            href={
                              "/all-resources/the-future-of-logistics-why-every-warehouse-needs-an-ai-powered-yard-management-system"
                            }
                            rel={"noopener noreferrer"}
                            target={"_blank"}
                            data-v-1c7eea09={""}
                            prefetch={false}
                          >
                            {"modern yard automation platform"}
                          </Link>
                        </u>
                        {" is essential in achieving this goal."}
                      </p>
                      <h2
                        id={"the-yard-digitization-gap-and-why-it-persists"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"The yard digitization gap (and why it persists)"}
                      </h2>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "Warehouses and highways got digitized first for one simple reason: they were easier to instrument."
                        }
                      </p>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "Inside the four walls, scans and systems create clean events. On the road, telematics and ELDs create timestamps and location trails. But the yard is a hybrid environment. It is physical, fast-changing, and full of assets that move without generating reliable digital footprints."
                        }
                      </p>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {"That’s why so many yards still run on:"}
                      </p>
                      <ul data-v-1c7eea09={""}>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {
                              "Paper logs, spreadsheets, whiteboards, radio calls"
                            }
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {"Manual gate checks and visual verification"}
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {
                              "Tribal knowledge (who parked what where, and when)"
                            }
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {"Reactive “find it and fix it” firefighting"}
                          </p>
                        </li>
                      </ul>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "The result is not just inconvenience. It is measurable operational drag:"
                        }
                      </p>
                      <ul data-v-1c7eea09={""}>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {
                              "Longer driver turn times and preventable detention exposure"
                            }
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {
                              "Dock starvation while “the right trailer” sits somewhere unknown"
                            }
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {
                              "Spotter inefficiency driven by interrupts, rework, and searching"
                            }
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {
                              "Security and compliance risk at check-in, check-out, and in-yard movement"
                            }
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {
                              "Underutilized WMS/TMS value because execution breaks at the yard boundary"
                            }
                          </p>
                        </li>
                      </ul>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "If your network has 5+ yards, 2+ shifts per day, 25+ dock doors, and 50+ parking spots, this complexity compounds quickly. The yard becomes the bottleneck that hides inside otherwise modern operations."
                        }
                      </p>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "To address these challenges effectively requires a shift from traditional methods to more advanced strategies such as implementing an "
                        }
                        <u data-v-1c7eea09={""}>
                          <Link
                            href={
                              "/all-resources/from-yard-to-nerve-center-how-agentic-ai-transforms-operational-control"
                            }
                            rel={"noopener noreferrer"}
                            target={"_blank"}
                            data-v-1c7eea09={""}
                            prefetch={false}
                          >
                            {"AI-powered yard management system"}
                          </Link>
                        </u>
                        {
                          ". This transition from manual processes to more autonomous systems represents a significant evolution in how we manage yard operations. The journey from "
                        }
                        <u data-v-1c7eea09={""}>
                          <Link
                            href={
                              "/all-resources/from-manual-to-autonomous-the-evolution-of-the-yard-management-system"
                            }
                            rel={"noopener noreferrer"}
                            target={"_blank"}
                            data-v-1c7eea09={""}
                            prefetch={false}
                          >
                            {"manual to autonomous"}
                          </Link>
                        </u>
                        {
                          " signifies a major leap forward in efficiency and productivity within logistics operations."
                        }
                      </p>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {"Furthermore, embracing "}
                        <u data-v-1c7eea09={""}>
                          <Link
                            href={
                              "/all-resources/from-paper-logs-to-platforms-why-yard-management-software-is-the-missing-link-in-logistics"
                            }
                            rel={"noopener noreferrer"}
                            target={"_blank"}
                            data-v-1c7eea09={""}
                            prefetch={false}
                          >
                            {"yard management software"}
                          </Link>
                        </u>
                        {" can help streamline operations"}
                      </p>
                      <h2
                        id={"what-is-a-yard-automation-platform"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"What is a yard automation platform?"}
                      </h2>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {"A yard automation platform is an end-to-end "}
                        <strong data-v-1c7eea09={""}>
                          {"yard execution system"}
                        </strong>
                        {
                          " that digitizes and orchestrates the flow of assets across the yard, from "
                        }
                        <strong data-v-1c7eea09={""}>
                          {"planning and pre-arrival"}
                        </strong>
                        {" to "}
                        <strong data-v-1c7eea09={""}>
                          {"check-in/check-out"}
                        </strong>
                        {", "}
                        <strong data-v-1c7eea09={""}>{"yard movements"}</strong>
                        {", "}
                        <strong data-v-1c7eea09={""}>
                          {"dock assignment"}
                        </strong>
                        {", and "}
                        <strong data-v-1c7eea09={""}>
                          {"network-level visibility"}
                        </strong>
                        {"."}
                      </p>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {"A modern platform typically combines:"}
                      </p>
                      <ol order={"1"} data-v-1c7eea09={""}>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <strong data-v-1c7eea09={""}>
                              {"Real-time data capture"}
                            </strong>
                            {" at the gate and across key yard zones"}
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <strong data-v-1c7eea09={""}>
                              {"A yard data layer"}
                            </strong>
                            {
                              " that normalizes events into clean, usable records"
                            }
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <strong data-v-1c7eea09={""}>
                              {"A Yard Management System (YMS)"}
                            </strong>
                            {" for workflows, rules, tasks, and exceptions"}
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <strong data-v-1c7eea09={""}>
                              {"Automation and orchestration"}
                            </strong>
                            {
                              " that reduces manual steps and radio-based coordination"
                            }
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <strong data-v-1c7eea09={""}>
                              {"Integrations"}
                            </strong>
                            {
                              " that connect yard execution to WMS, TMS, access control, gate arms, kiosks, and other systems"
                            }
                          </p>
                        </li>
                      </ol>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "In plain terms: it turns your yard into a system, not a guessing game."
                        }
                      </p>
                      <h2
                        id={"why-yard-automation-is-becoming-a-priority-now"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"Why yard automation is becoming a priority now"}
                      </h2>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "Yard automation used to be framed as “nice to have.” That era is ending."
                        }
                      </p>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "Today, logistics leaders are being asked to do all of the following at once:"
                        }
                      </p>
                      <ul data-v-1c7eea09={""}>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {
                              "Improve customer experience and on-time performance"
                            }
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {"Increase throughput without linear labor growth"}
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {
                              "Build resilience against volume swings and disruption"
                            }
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {"Strengthen security and reduce cargo theft risk"}
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {
                              "Improve sustainability by cutting idle time and wasted moves"
                            }
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {
                              "Leverage AI, robotics, and decision intelligence in operations"
                            }
                          </p>
                        </li>
                      </ul>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "The yard is where these goals converge. If the yard is not visible and controlled, every downstream improvement hits a ceiling."
                        }
                      </p>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "Even skeptical operators tend to agree on one thing after a few peak seasons: the yard is not “outside the process.” It is the bridge between the process and the real world."
                        }
                      </p>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {"This shift in perspective highlights why "}
                        <u data-v-1c7eea09={""}>
                          <Link
                            href={
                              "/all-resources/yard-automation-platforms-increase-efficiency-logistics-safety"
                            }
                            rel={"noopener noreferrer"}
                            target={"_blank"}
                            data-v-1c7eea09={""}
                            prefetch={false}
                          >
                            {"yard automation platforms"}
                          </Link>
                        </u>
                        {
                          " are becoming essential. These platforms not only enhance efficiency but also significantly improve safety in logistics."
                        }
                      </p>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "To understand the potential benefits of such a system, consider using a "
                        }
                        <u data-v-1c7eea09={""}>
                          <Link
                            href={
                              "/all-resources/yard-roi-calculator-estimate-your-savings-from-ai-powered-yard-automation"
                            }
                            rel={"noopener noreferrer"}
                            target={"_blank"}
                            data-v-1c7eea09={""}
                            prefetch={false}
                          >
                            {"yard ROI calculator"}
                          </Link>
                        </u>
                        {
                          " to estimate your savings from AI-powered yard automation. The implementation of these technologies has already shown promising results in various case studies; for instance, "
                        }
                        <u data-v-1c7eea09={""}>
                          <Link
                            href={
                              "/all-resources/case-study-how-ryder-achieved-50-throughput-gains-with-ai-yard-automation"
                            }
                            rel={"noopener noreferrer"}
                            target={"_blank"}
                            data-v-1c7eea09={""}
                            prefetch={false}
                          >
                            {
                              "Ryder achieved 50% throughput gains with AI yard automation"
                            }
                          </Link>
                        </u>
                        {", demonstrating how effective these systems can be."}
                      </p>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "Moreover, as we move towards 2026, there is an increasing demand for a comprehensive "
                        }
                        <u data-v-1c7eea09={""}>
                          <Link
                            href={
                              "/all-resources/from-blind-spot-to-command-center-why-2026-demands-a-yard-operating-system-yostm-"
                            }
                            rel={"noopener noreferrer"}
                            target={"_blank"}
                            data-v-1c7eea09={""}
                            prefetch={false}
                          >
                            {"Yard Operating System (YOS)"}
                          </Link>
                        </u>
                        {
                          ". This system would further streamline operations by providing better visibility and control over yard processes."
                        }
                      </p>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "As we continue to leverage advancements in technology such as AI and robotics in our operations, it becomes increasingly clear that "
                        }
                        <u data-v-1c7eea09={""}>
                          <Link
                            href={
                              "/all-resources/yard-automation-enhance-efficiency-and-safety-in-logistics"
                            }
                            rel={"noopener noreferrer"}
                            target={"_blank"}
                            data-v-1c7eea09={""}
                            prefetch={false}
                          >
                            {"yard automation"}
                          </Link>
                        </u>
                        {
                          " is no longer just an option but a necessity for businesses aiming to thrive in today's fast-paced logistics environment."
                        }
                      </p>
                      <h2
                        id={"the-workflows-that-define-a-high-performing-yard"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"The workflows that define a high-performing yard"}
                      </h2>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "A yard automation platform earns its value by improving the workflows that drive throughput. For most mid-market and enterprise yards, these are the big ones."
                        }
                      </p>
                      <h3
                        id={"1-planning-pre-arrival"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"1) Planning (Pre-Arrival)"}
                      </h3>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "The highest leverage yard work starts before a trailer hits the gate."
                        }
                      </p>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "A modern yard execution platform supports pre-arrival planning by capturing and reconciling:"
                        }
                      </p>
                      <ul data-v-1c7eea09={""}>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {"Expected arrivals by appointment or ASN"}
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {
                              "Carrier, equipment type, load attributes, temperature requirements"
                            }
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {
                              "Site rules (where it should stage, what it needs at check-in)"
                            }
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {"Risk flags for high-value or high-risk loads"}
                          </p>
                        </li>
                      </ul>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "This matters because “unplanned arrivals” are rarely truly unplanned. They are usually just unconnected to yard execution."
                        }
                      </p>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "When pre-arrival data flows into the yard system, the yard stops reacting and starts staging intentionally."
                        }
                      </p>
                      <h3
                        id={"2-check-in-and-check-out-gate"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"2) Check-In and Check-Out (Gate)"}
                      </h3>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "The gate is where yard truth is created or corrupted."
                        }
                      </p>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "Manual check-in processes are slow, inconsistent, and vulnerable to human error. They also produce data that cannot be trusted. If the first event is wrong, every decision after that is wrong."
                        }
                      </p>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {"A yard automation platform should enable:"}
                      </p>
                      <ul data-v-1c7eea09={""}>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {
                              "Automated asset identification (tractor, trailer, container where applicable)"
                            }
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {
                              "Real-time verification against expected loads and rules"
                            }
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {
                              "Faster exceptions handling with remote assistance if needed"
                            }
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {
                              "Automated check-out verification and security protocols"
                            }
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {
                              "Time-stamped, searchable audit trails for operations and security"
                            }
                          </p>
                        </li>
                      </ul>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "Terminal’s approach is built for modern yard realities. This includes "
                        }
                        <u data-v-1c7eea09={""}>
                          <Link
                            href={
                              "/all-resources/how-a-modern-yard-management-system-reduces-bottlenecks-in-high-volume-distribution-centers"
                            }
                            rel={"noopener noreferrer"}
                            target={"_blank"}
                            data-v-1c7eea09={""}
                            prefetch={false}
                          >
                            {
                              "guarded, remote-assisted, and fully automated facilities"
                            }
                          </Link>
                        </u>
                        {
                          ", with minimal disruption to existing gate infrastructure. These advancements not only streamline operations but also "
                        }
                        <u data-v-1c7eea09={""}>
                          <Link
                            href={
                              "/all-resources/human-agent-redefining-yard-roles-with-autonomous-workflows"
                            }
                            rel={"noopener noreferrer"}
                            target={"_blank"}
                            data-v-1c7eea09={""}
                            prefetch={false}
                          >
                            {"redefine yard roles with autonomous workflows"}
                          </Link>
                        </u>
                        {
                          ", making them more efficient and less prone to error. Furthermore, it's essential to understand that managing yard operations is not just an operational task but "
                        }
                        <u data-v-1c7eea09={""}>
                          <Link
                            href={
                              "/all-resources/managing-yard-operations-as-a-strategic-execution-risk-the-c-suite-s-new-priority"
                            }
                            rel={"noopener noreferrer"}
                            target={"_blank"}
                            data-v-1c7eea09={""}
                            prefetch={false}
                          >
                            {"a strategic execution risk"}
                          </Link>
                        </u>
                        {" that has become a new priority for the C-suite."}
                      </p>
                      <h3
                        id={"3-yard-movements-spotter-and-asset-flow"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"3) Yard Movements (Spotter and Asset Flow)"}
                      </h3>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {"Spotter capacity is often consumed by “non-work”:"}
                      </p>
                      <ul data-v-1c7eea09={""}>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {"Hunting for the right trailer"}
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {"Repositioning because staging was wrong"}
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {"Interrupt-driven moves that break sequence"}
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {"Duplicate moves caused by poor coordination"}
                          </p>
                        </li>
                      </ul>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "A strong yard execution platform changes this by orchestrating move tasks with:"
                        }
                      </p>
                      <ul data-v-1c7eea09={""}>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {
                              "Rules-based location assignment (based on asset and load attributes)"
                            }
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {"Clear task dispatch and status tracking"}
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {
                              "Prioritization aligned to dock demand and outbound commitments"
                            }
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {
                              "Visibility that reduces radio chatter and surprises"
                            }
                          </p>
                        </li>
                      </ul>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "The goal is not just fewer moves. It is fewer wasted moves, and faster conversion of moves into dock productivity."
                        }
                      </p>
                      <h3
                        id={"4-dock-to-yard-synchronization"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"4) Dock-to-Yard Synchronization"}
                      </h3>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "If the dock schedule does not reflect yard reality, you get two expensive outcomes:"
                        }
                      </p>
                      <ul data-v-1c7eea09={""}>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {"Docks wait on equipment"}
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {"Equipment waits on docks"}
                          </p>
                        </li>
                      </ul>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "A yard automation platform creates synchronization through real-time knowledge of:"
                        }
                      </p>
                      <ul data-v-1c7eea09={""}>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {
                              "What is on-site, where it is, and its readiness state"
                            }
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {
                              "What is at door, what is staged, and what is blocked"
                            }
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {
                              "How quickly equipment can be delivered to a given dock zone"
                            }
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {"What exceptions will disrupt the plan"}
                          </p>
                        </li>
                      </ul>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "This is where yard automation “unlocks” WMS and dock scheduling investments. The dock can only be as precise as the yard is visible. Utilizing "
                        }
                        <u data-v-1c7eea09={""}>
                          <Link
                            href={
                              "/all-resources/how-to-use-yard-management-software-to-improve-dock-scheduling-and-asset-utilization"
                            }
                            rel={"noopener noreferrer"}
                            target={"_blank"}
                            data-v-1c7eea09={""}
                            prefetch={false}
                          >
                            {"yard management software"}
                          </Link>
                        </u>
                        {
                          " can significantly enhance both dock scheduling and asset utilization."
                        }
                      </p>
                      <h3
                        id={"5-asset-search-exception-handling-and-compliance"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"5) Asset Search, Exception Handling, and Compliance"}
                      </h3>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "Yard teams should not have to walk the yard to answer basic questions."
                        }
                      </p>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "A modern platform reduces search and exceptions with:"
                        }
                      </p>
                      <ul data-v-1c7eea09={""}>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {
                              "Instant asset lookup by ID, carrier, load, or attributes"
                            }
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {"Status history and chain-of-custody events"}
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {
                              "Rules-driven compliance workflows (including safety and security checks)"
                            }
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {"Alerts for anomalies that demand attention"}
                          </p>
                        </li>
                      </ul>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "This is also where advanced capabilities like damage detection and theft prevention become operational, not theoretical. These improvements in "
                        }
                        <u data-v-1c7eea09={""}>
                          <Link
                            href={
                              "/all-resources/next-gen-yard-visibility-leading-platforms-for-real-time-asset-control"
                            }
                            rel={"noopener noreferrer"}
                            target={"_blank"}
                            data-v-1c7eea09={""}
                            prefetch={false}
                          >
                            {"yard visibility"}
                          </Link>
                        </u>
                        {" are crucial for effective asset control."}
                      </p>
                      <h2
                        id={
                          "what-good-looks-like-in-a-yard-automation-platform"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"What “good” looks like in a yard automation platform"}
                      </h2>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "Not all yard systems are built for scale, automation, or data integrity. If you are evaluating yard automation, here is a practical checklist of what matters most."
                        }
                      </p>
                      <h3
                        id={"data-accuracy-you-can-operate-on"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"Data accuracy you can operate on"}
                      </h3>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "If identification is wrong or inconsistent, the platform becomes a second spreadsheet. Look for "
                        }
                        <strong data-v-1c7eea09={""}>
                          {"enterprise-grade accuracy"}
                        </strong>
                        {
                          " that supports automation, reporting, and audit needs. Terminal’s proprietary computer vision capabilities are designed to deliver "
                        }
                        <strong data-v-1c7eea09={""}>
                          {"99.5% data accuracy"}
                        </strong>
                        {
                          ", which is the difference between “visibility theater” and real execution."
                        }
                      </p>
                      <h3
                        id={"automation-that-reduces-labor-not-adds-steps"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"Automation that reduces labor, not adds steps"}
                      </h3>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "If the system still requires constant manual updates, adoption will sag. Automation must remove friction at the gate, in task orchestration, and in exceptions handling."
                        }
                      </p>
                      <h3
                        id={"a-real-yard-data-lake-not-just-screens"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"A real yard data lake, not just screens"}
                      </h3>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "The yard produces high-value events. But only if they are stored, normalized, and reusable. A yard data layer makes it possible to analyze performance, standardize across sites, and apply AI decisioning over time."
                        }
                      </p>
                      <h3
                        id={"configurability-for-real-operations"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"Configurability for real operations"}
                      </h3>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "Yards are not identical. The platform must support configurable workflows, including enhanced verification for "
                        }
                        <strong data-v-1c7eea09={""}>
                          {"high-value and high-risk loads"}
                        </strong>
                        {
                          ", custom attributes, and site-specific rules that authorized users can update."
                        }
                      </p>
                      <h3
                        id={"network-scalability-and-a-single-pane-of-glass"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"Network scalability and a single pane of glass"}
                      </h3>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "If you run multiple yards, you need consistent visibility and control across the network. This is essential for standard operating procedures, shared KPIs, and enterprise governance. A "
                        }
                        <u data-v-1c7eea09={""}>
                          <Link
                            href={
                              "/all-resources/how-a-yard-management-system-enhances-real-time-visibility-across-multi-site-operations"
                            }
                            rel={"noopener noreferrer"}
                            target={"_blank"}
                            data-v-1c7eea09={""}
                            prefetch={false}
                          >
                            {"yard management system"}
                          </Link>
                        </u>
                        {
                          " can significantly enhance real-time visibility across multi-site operations."
                        }
                      </p>
                      <h3
                        id={"integrations-that-bridge-the-yard-into-the-stack"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"Integrations that bridge the yard into the stack"}
                      </h3>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "A yard execution platform should seamlessly integrate with existing "
                        }
                        <strong data-v-1c7eea09={""}>{"WMS/TMS tools"}</strong>
                        {
                          ", gate arms, kiosks, and access control systems so that the yard reality is accurately reflected across planning and execution layers."
                        }
                      </p>
                      <h2
                        id={
                          "introducing-terminal-yard-operating-system-yos-the-bridge-from-gate-to-dock"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "Introducing Terminal Yard Operating System™ (YOS): the bridge from gate to dock"
                        }
                      </h2>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {"The "}
                        <strong data-v-1c7eea09={""}>
                          {"Terminal Yard Operating System™ (YOS)"}
                        </strong>
                        {" is an "}
                        <strong data-v-1c7eea09={""}>
                          {"AI-native yard execution platform"}
                        </strong>
                        {
                          " designed to digitize, automate, optimize, and scale yard logistics across North America. Terminal exists for one reason: to close the yard digitization gap and build the modern logistics bridge from "
                        }
                        <strong data-v-1c7eea09={""}>{"gate to dock"}</strong>
                        {"."}
                      </p>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "While many operations have strong systems inside the warehouse and robust systems on the road, Terminal focuses on tackling the operational bottleneck in the middle - the yard. This area is not a side quest; it is where throughput is won."
                        }
                      </p>
                      <h3
                        id={"what-terminal-yos-is-built-to-deliver"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"What Terminal YOS is built to deliver"}
                      </h3>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "Terminal YOS brings together three core layers into one all-in-one platform:"
                        }
                      </p>
                      <ul data-v-1c7eea09={""}>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <strong data-v-1c7eea09={""}>
                              {"AI vision technology"}
                            </strong>
                            {" that captures real-world events reliably"}
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <strong data-v-1c7eea09={""}>
                              {"A real-time data infrastructure and data lake"}
                            </strong>
                            {" that turns events into usable truth"}
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <strong data-v-1c7eea09={""}>
                              {"Modular software applications"}
                            </strong>
                            {" that automate and orchestrate yard workflows"}
                          </p>
                        </li>
                      </ul>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "This combination is what sets Terminal apart in practice. It is not merely “a tool for yard teams.” Instead, it is a comprehensive yard execution system that enterprise operations can standardize, scale, and measure."
                        }
                      </p>
                      <h2
                        id={
                          "how-terminal-industries-creates-visual-magic-with-measurable-impact"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "How Terminal Industries creates “visual magic” with measurable impact"
                        }
                      </h2>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "Yards are physical spaces requiring solutions that function optimally in various conditions such as rain, glare, night shifts, and peak-season pressure. Terminal’s approach is built for the real world. It uses "
                        }
                        <strong data-v-1c7eea09={""}>
                          {"Terminal-in-a-Camera™"}
                        </strong>
                        {
                          ", a modular hardware kit leveraging AI-powered computer vision that can be deployed "
                        }
                        <strong data-v-1c7eea09={""}>
                          {"in hours without trenching"}
                        </strong>
                        {
                          ". The design goal is simple: reduce deployment friction so yard automation becomes achievable across a network, not just at one flagship site."
                        }
                      </p>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "With proper site lighting, power, and connectivity, Terminal can move quickly while keeping IT lift low. It is designed to integrate with what you already have, including gate infrastructure and core logistics systems. This "
                        }
                        <u data-v-1c7eea09={""}>
                          <Link
                            href={
                              "/all-resources/digital-gate-check-in-terminal-yard-efficiency"
                            }
                            rel={"noopener noreferrer"}
                            target={"_blank"}
                            data-v-1c7eea09={""}
                            prefetch={false}
                          >
                            {"digital gate check-in"}
                          </Link>
                        </u>
                        {
                          " functionality significantly enhances terminal yard efficiency."
                        }
                      </p>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {"Moreover, by focusing on "}
                        <u data-v-1c7eea09={""}>
                          <Link
                            href={
                              "/all-resources/from-gate-to-dock-building-autonomous-yard-workflows-with-agentic-ai"
                            }
                            rel={"noopener noreferrer"}
                            target={"_blank"}
                            data-v-1c7eea09={""}
                            prefetch={false}
                          >
                            {"building autonomous yard workflows"}
                          </Link>
                        </u>
                        {
                          ", we ensure that operators experience a transformation without facing operational disruption."
                        }
                      </p>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "In addition to this, our platform also provides solutions for "
                        }
                        <u data-v-1c7eea09={""}>
                          <Link
                            href={
                              "/all-resources/yard-management-systems-yard-workflows"
                            }
                            rel={"noopener noreferrer"}
                            target={"_blank"}
                            data-v-1c7eea09={""}
                            prefetch={false}
                          >
                            {"yard management systems"}
                          </Link>
                        </u>
                        {" which streamline "}
                        <u data-v-1c7eea09={""}>
                          <Link
                            href={
                              "/all-resources/yard-management-systems-yard-workflows"
                            }
                            rel={"noopener noreferrer"}
                            target={"_blank"}
                            data-v-1c7eea09={""}
                            prefetch={false}
                          >
                            {"yard workflows"}
                          </Link>
                        </u>
                        {", making them more efficient. Furthermore, our "}
                        <u data-v-1c7eea09={""}>
                          <Link
                            href={
                              "/all-resources/yard-dock-management-boost-efficiency-with-ai-and-yms-solutions"
                            }
                            rel={"noopener noreferrer"}
                            target={"_blank"}
                            data-v-1c7eea09={""}
                            prefetch={false}
                          >
                            {"yard-dock management solutions"}
                          </Link>
                        </u>
                        {
                          " powered by AI significantly boost overall efficiency."
                        }
                      </p>
                      <h2
                        id={"what-you-can-automate-with-terminal-yos"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"What you can automate with Terminal YOS"}
                      </h2>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "Terminal YOS is designed around the workflows that define yard performance, including:"
                        }
                      </p>
                      <ul data-v-1c7eea09={""}>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <strong data-v-1c7eea09={""}>
                              {"Planning (Pre-Arrival)"}
                            </strong>
                            {": connect expected loads to yard execution"}
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <strong data-v-1c7eea09={""}>
                              {"Check-In and Check-Out"}
                            </strong>
                            {": automate and standardize gate processes"}
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <strong data-v-1c7eea09={""}>
                              {"SmartYard™ YMS"}
                            </strong>
                            {
                              ": orchestrate yard activities with AI and computer vision-powered workflows like those seen in "
                            }
                            <u data-v-1c7eea09={""}>
                              <Link
                                href={
                                  "/all-resources/inside-the-agentic-ai-yard-how-computer-vision-and-autonomous-workflows-drive-real-time-control"
                                }
                                rel={"noopener noreferrer"}
                                target={"_blank"}
                                data-v-1c7eea09={""}
                                prefetch={false}
                              >
                                {"this article"}
                              </Link>
                            </u>
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <strong data-v-1c7eea09={""}>
                              {"Asset Movement"}
                            </strong>
                            {
                              ": manage move tasks, location assignment logic, and communication"
                            }
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <strong data-v-1c7eea09={""}>
                              {"Advanced Yard solutions"}
                            </strong>
                            {
                              ": compliance, security, and operational intelligence"
                            }
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <strong data-v-1c7eea09={""}>
                              {"Yard Networks"}
                            </strong>
                            {
                              ": scale visibility and control across multi-yard operations"
                            }
                          </p>
                        </li>
                      </ul>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "Terminal’s platform is built to support measurable outcomes that matter to both site leaders and corporate leadership:"
                        }
                      </p>
                      <ul data-v-1c7eea09={""}>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <strong data-v-1c7eea09={""}>
                              {"50%+ throughput improvement"}
                            </strong>
                            {
                              " through comprehensive automation and orchestration"
                            }
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <strong data-v-1c7eea09={""}>
                              {"90% reduction in asset search time"}
                            </strong>
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <strong data-v-1c7eea09={""}>
                              {"12% reduction in driver detention fees"}
                            </strong>
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <strong data-v-1c7eea09={""}>
                              {"Rapid ROI in under 5 months"}
                            </strong>
                            {", designed to be repeatable across sites"}
                          </p>
                        </li>
                      </ul>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "(Results vary by site and operating model, but the direction is consistent: visibility first, then automation, then optimization.)"
                        }
                      </p>
                      <h2
                        id={
                          "security-and-resilience-are-now-yard-automation-requirements"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "Security and resilience are now yard automation requirements"
                        }
                      </h2>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "Security is no longer a “nice add-on.” Cargo theft risk, unauthorized equipment movement, and inconsistent gate protocols are board-level concerns for many operators."
                        }
                      </p>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "Terminal’s security-oriented capabilities are designed to be configurable, practical, and enforceable:"
                        }
                      </p>
                      <ul data-v-1c7eea09={""}>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <strong data-v-1c7eea09={""}>
                              {"Configurable blacklist engine"}
                            </strong>
                            {
                              " to proactively detect stolen or unauthorized equipment"
                            }
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {"Workflows for "}
                            <strong data-v-1c7eea09={""}>
                              {"high-value and high-risk loads"}
                            </strong>
                            {", including enhanced verification at check-out"}
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {
                              "Time-stamped audit trails that strengthen accountability and compliance"
                            }
                          </p>
                        </li>
                      </ul>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "This is the modern standard: security that is embedded in execution, not bolted on after incidents."
                        }
                      </p>
                      <h2
                        id={
                          "who-yard-automation-is-for-and-when-it-becomes-urgent"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "Who yard automation is for (and when it becomes urgent)"
                        }
                      </h2>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "Yard automation delivers the fastest impact when operations have enough complexity that manual coordination breaks down regularly. As outlined in our article on "
                        }
                        <u data-v-1c7eea09={""}>
                          <Link
                            href={
                              "/all-resources/yard-management-in-warehousing-drive-efficiency-with-automation"
                            }
                            rel={"noopener noreferrer"}
                            target={"_blank"}
                            data-v-1c7eea09={""}
                            prefetch={false}
                          >
                            {"yard management in warehousing"}
                          </Link>
                        </u>
                        {
                          ", implementing yard automation can significantly drive efficiency."
                        }
                      </p>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "Terminal’s ideal customer profile typically includes North American operators with:"
                        }
                      </p>
                      <ul data-v-1c7eea09={""}>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <strong data-v-1c7eea09={""}>{"5+ yards"}</strong>
                            {" across a network"}
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {"Mid- to high-traffic flow"}
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <strong data-v-1c7eea09={""}>
                              {"2+ shifts per day"}
                            </strong>
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <strong data-v-1c7eea09={""}>
                              {"25+ dock doors"}
                            </strong>
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <strong data-v-1c7eea09={""}>
                              {"50+ parking spots"}
                            </strong>
                          </p>
                        </li>
                      </ul>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {"Common industries include:"}
                      </p>
                      <ul data-v-1c7eea09={""}>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>{"3PL"}</p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>{"Retail and Grocery"}</p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>{"CPG"}</p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {"Refrigerated Warehousing"}
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>{"Manufacturing"}</p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>{"Contract Carriers"}</p>
                        </li>
                      </ul>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "The buyer group is often cross-functional, because yard performance touches everyone:"
                        }
                      </p>
                      <ul data-v-1c7eea09={""}>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {
                              "Shipping, receiving, yard, and transportation supervisors and managers"
                            }
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>{"Security managers"}</p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>{"Spotter managers"}</p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {
                              "VPs of warehousing and automation engineers at the site level"
                            }
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {
                              "Corporate leadership across transportation, continuous improvement, supply chain, digital transformation, and IT"
                            }
                          </p>
                        </li>
                      </ul>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "If your teams are already pushing for better speed, less disruption, tighter integrations, and clearer ROI, yard automation is usually the missing piece."
                        }
                      </p>
                      <h2
                        id={
                          "what-to-expect-during-deployment-and-what-technical-fit-really-means"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "What to expect during deployment (and what “technical fit” really means)"
                        }
                      </h2>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "Good yard automation should feel surprisingly straightforward to implement, assuming the fundamentals are in place."
                        }
                      </p>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {"Key technical fit requirements typically include:"}
                      </p>
                      <ul data-v-1c7eea09={""}>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {
                              "Proper site lighting where identification is required"
                            }
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {
                              "Reliable power availability for hardware placement"
                            }
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {"Connectivity and acceptable network latency"}
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            {
                              "Integration readiness with existing WMS/TMS and gate systems"
                            }
                          </p>
                        </li>
                      </ul>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "Terminal is built for rapid deployment with low disruption. The goal is not to replace everything. It is to connect the yard to the rest of the stack, then automate the workflows that drive throughput."
                        }
                      </p>
                      <h2
                        id={
                          "a-practical-way-to-think-about-roi-from-visibility-to-automation-to-optimization"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "A practical way to think about ROI: from visibility to automation to optimization"
                        }
                      </h2>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "If you want a grounded way to evaluate yard automation, think in phases:"
                        }
                      </p>
                      <ol order={"1"} data-v-1c7eea09={""}>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <strong data-v-1c7eea09={""}>{"Visibility"}</strong>
                            {
                              ": know what is on-site, where it is, and what state it is in"
                            }
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <strong data-v-1c7eea09={""}>{"Automation"}</strong>
                            {
                              ": reduce manual gate work, standardize workflows, orchestrate moves"
                            }
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <strong data-v-1c7eea09={""}>
                              {"Optimization"}
                            </strong>
                            {
                              ": apply rules, analytics, and AI decisioning to continually improve flow"
                            }
                          </p>
                        </li>
                      </ol>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "Terminal YOS is built to support all three, because stopping at visibility leaves value on the table. The real gains come when the yard starts executing with confidence and consistency, shift after shift."
                        }
                      </p>
                      <h2
                        id={"the-future-yard-is-not-bigger-it-s-smarter"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"The future yard is not bigger. It’s smarter."}
                      </h2>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "The industry is not slowing down. Demand is robust, capacity needs keep rising, and labor constraints are not going away. The most competitive operators will be the ones who increase throughput without increasing chaos."
                        }
                      </p>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "That is what a modern yard automation platform makes possible. "
                        }
                        <u data-v-1c7eea09={""}>
                          <Link
                            href={
                              "/all-resources/yard-management-automation-increase-supply-chain-efficiency"
                            }
                            rel={"noopener noreferrer"}
                            target={"_blank"}
                            data-v-1c7eea09={""}
                            prefetch={false}
                          >
                            {"Yard management automation"}
                          </Link>
                        </u>
                        {
                          " is no longer optional; it's the next logical step in supply chain digitization."
                        }
                      </p>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        <strong data-v-1c7eea09={""}>
                          {"Terminal Yard Operating System™ (YOS)"}
                        </strong>
                        {
                          " is built for leaders who want to turn the yard from a data black hole into a network advantage. It brings real-world “visual magic” to the gate and the yard, then backs it up with enterprise-grade execution, measurable impact, and rapid ROI."
                        }
                      </p>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "If your goal is to bridge the operational bottleneck from gate to dock, "
                        }
                        <u data-v-1c7eea09={""}>
                          <Link
                            href={
                              "/all-resources/the-rise-of-the-yard-operating-system-yostm-why-legacy-yms-is-no-longer-enough"
                            }
                            rel={"noopener noreferrer"}
                            target={"_blank"}
                            data-v-1c7eea09={""}
                            prefetch={false}
                          >
                            {"the rise of the Yard Operating System (YOS)"}
                          </Link>
                        </u>
                        {
                          " provides the most direct path to unlocking capacity you already own."
                        }
                      </p>
                      <h2
                        id={"faqs-frequently-asked-questions"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"FAQs (Frequently Asked Questions)"}
                      </h2>
                      <h3
                        id={
                          "what-challenges-do-supply-chain-leaders-face-in-digitizing-yard-operations"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "What challenges do supply chain leaders face in digitizing yard operations?"
                        }
                      </h3>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "Supply chain leaders often struggle to digitize yard operations because the yard is a hybrid, fast-changing environment with assets moving without reliable digital footprints. Unlike warehouses and highways, yards rely heavily on manual processes like paper logs, radio calls, and tribal knowledge, leading to operational inefficiencies such as longer driver turn times, dock starvation, and security risks."
                        }
                      </p>
                      <h3
                        id={
                          "why-is-yard-automation-considered-essential-in-modern-logistics"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "Why is yard automation considered essential in modern logistics?"
                        }
                      </h3>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "Yard automation is essential because it bridges the operational and data gap from gate to dock, transforming chaotic yard activities into orchestrated flows that can be measured, improved, and scaled. With over $50B worth of goods moving daily through North America’s warehouses and increasing demand for logistics capacity amid tight labor pools, automation offers a practical way to enhance throughput without relying solely on adding labor."
                        }
                      </p>
                      <h3
                        id={
                          "what-is-a-yard-automation-platform-and-how-does-it-work"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "What is a yard automation platform and how does it work?"
                        }
                      </h3>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "A yard automation platform is an end-to-end yard execution system that digitizes and orchestrates asset flow across the yard—from planning and pre-arrival to check-in/check-out, yard movements, dock assignment, and network-level visibility. It combines real-time data capture, a normalized yard data layer, Yard Management System workflows, automation to reduce manual coordination, and integrations with WMS, TMS, access control systems, and more to turn the yard into a streamlined operational system."
                        }
                      </p>
                      <h3
                        id={
                          "how-does-yard-automation-improve-efficiency-and-security-in-logistics-operations"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "How does yard automation improve efficiency and security in logistics operations?"
                        }
                      </h3>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "Yard automation improves efficiency by reducing manual steps like radio-based coordination and visual verifications, thus shortening driver turn times and optimizing dock assignments. It enhances security by providing better visibility at check-in/check-out points and tracking in-yard movements to mitigate cargo theft risks. Overall, it strengthens resilience against volume swings while improving sustainability by cutting idle time and wasted moves."
                        }
                      </p>
                      <h3
                        id={
                          "why-has-yard-automation-shifted-from-being-nice-to-have-to-a-priority-for-logistics-leaders"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "Why has yard automation shifted from being 'nice to have' to a priority for logistics leaders?"
                        }
                      </h3>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "Yard automation has become a priority because logistics leaders must simultaneously improve customer experience, increase throughput without linear labor growth, build resilience against disruptions, strengthen security, improve sustainability, and leverage AI-driven technologies. The yard serves as the critical bridge between process planning and real-world execution; without its visibility and control, downstream improvements cannot reach their full potential."
                        }
                      </p>
                      <h3
                        id={
                          "how-can-companies-estimate-the-benefits-of-implementing-an-ai-powered-yard-management-system"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "How can companies estimate the benefits of implementing an AI-powered yard management system?"
                        }
                      </h3>
                      <p style={{ textAlign: "left" }} data-v-1c7eea09={""}>
                        {
                          "Companies can estimate the benefits of AI-powered yard management systems by using tools like a yard ROI calculator. Such calculators help quantify potential savings from increased efficiency, reduced detention exposure, optimized asset utilization, improved throughput, enhanced security measures, and overall operational cost reductions achievable through intelligent yard automation platforms."
                        }
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
