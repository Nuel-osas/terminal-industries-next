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
export default function Pageb6c1d9cce0() {
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
                    {"blog • September 1, 2026"}
                  </div>
                  <h1
                    className={"post-header__title title-h1"}
                    data-v-01b90259={""}
                  >
                    {"Trailer Tracking Inside the Yard"}
                  </h1>
                  <div
                    className={"post-header__subtitle body-3"}
                    data-v-01b90259={""}
                  >
                    {"Where GPS Stops and Computer Vision Starts"}
                  </div>
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
                      src={"/assets/414e8bc35c0e64e32382.webp"}
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
                          {"Trailer Tracking Inside the Yard"}
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
                          "Trailer tracking is the set of methods used to know where a trailer is, what state it’s in, and what should happen to it next — and most tools sold under that name were built for the road, not the yard. GPS pucks and telematics dongles answer “where is my trailer on the highway.” Once a trailer clears the guard shack and parks between forty others behind a building, those signals go dark or drift, and the yard team falls back on radios and windshield walks. This post explains what actually tracks trailers inside the fence line, and why devices stop being the answer there."
                        }
                      </p>
                      <h2
                        id={"what-is-trailer-tracking-a-working-definition"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"What Is Trailer Tracking? A Working Definition"}
                      </h2>
                      <p data-v-1c7eea09={""}>
                        {
                          "Trailer tracking is the practice of maintaining an accurate, current record of a trailer’s location, status, and assignment across its full lifecycle — over the road, at the gate, in the yard, and at the dock. It combines road-side signals (GPS, telematics) with yard-side truth (gate events, camera-based identification, dock activity) to answer both “where is it?” and “what should happen to it next?”"
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "Most trailer tracking pages online stop at the first half of that definition because they’re selling hardware. Operators reading this run facilities where hundreds of trailers cycle through per day. The question they need answered isn’t which puck to buy — it’s why the puck stops helping the moment the trailer is parked."
                        }
                      </p>
                      <h2
                        id={
                          "why-does-trailer-asset-tracking-break-down-inside-the-yard"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "Why Does Trailer Asset Tracking Break Down Inside the Yard?"
                        }
                      </h2>
                      <p data-v-1c7eea09={""}>
                        {
                          "Road-grade tracking signals lose fidelity inside a yard because trailers park close together, behind buildings, in metal-heavy environments, and sit stationary for hours or days. Position error that’s tolerable at highway speed becomes useless when you need to know which of the twenty trailers in row G is the one your driver is looking for."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "Warehouses (WMS) and highways (TMS) were digitized first because they were easier to instrument. The yard is a hybrid, physical, fast-changing environment full of assets that move without generating reliable digital footprints. A trailer at 65 mph on I-80 produces a clean signal. The same trailer in slot G-14 produces a dot that could be pointing at any of three slots — and the driver still can’t find it without a radio call."
                        }
                      </p>
                      <h2
                        id={
                          "what-are-semi-trailer-tracking-systems-actually-built-for"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "What Are Semi Trailer Tracking Systems Actually Built For?"
                        }
                      </h2>
                      <p data-v-1c7eea09={""}>
                        {
                          "Semi trailer tracking systems built around telematics were designed to answer over-the-road questions: is the trailer moving, where is it on its route, is the reefer holding temperature, when will it arrive. For those questions, they work. They were not designed to answer yard questions — which slot, which door, how long has it been sitting, is it loaded or empty, is it on the right move."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "The yard problems that persist — lost or misplaced trailers, gate congestion, long driver wait times, excessive detention costs, poor dock utilization, manual check-in — don’t get solved by a better dot on a map. They get solved by knowing what is actually happening at each location inside the fence, in real time. Effective semi trailer tracking is therefore a handoff between two systems, not one system stretched to cover both environments: GPS and telematics handle the road segment, a yard-side system handles gate arrival through dock departure, and the two exchange context at the fence line. Terminal’s "
                        }
                        <Link
                          href={"/2026-state-of-the-yard-survey-report"}
                          rel={"noopener noreferrer"}
                          data-v-1c7eea09={""}
                          prefetch={false}
                        >
                          {"2026 State of the Yard Survey Report"}
                        </Link>
                        {
                          " covers where operators say that handoff breaks today."
                        }
                      </p>
                      <table data-v-1c7eea09={""}>
                        <tbody data-v-1c7eea09={""}>
                          <tr data-v-1c7eea09={""}>
                            <th data-v-1c7eea09={""}>
                              <p data-v-1c7eea09={""}>{"Segment"}</p>
                            </th>
                            <th data-v-1c7eea09={""}>
                              <p data-v-1c7eea09={""}>{"Primary Question"}</p>
                            </th>
                            <th data-v-1c7eea09={""}>
                              <p data-v-1c7eea09={""}>{"Best-Fit Tool"}</p>
                            </th>
                            <th data-v-1c7eea09={""}>
                              <p data-v-1c7eea09={""}>
                                {"Failure Mode If Misapplied"}
                              </p>
                            </th>
                          </tr>
                          <tr data-v-1c7eea09={""}>
                            <td data-v-1c7eea09={""}>
                              <p data-v-1c7eea09={""}>{"Over-the-road"}</p>
                            </td>
                            <td data-v-1c7eea09={""}>
                              <p data-v-1c7eea09={""}>
                                {
                                  "Where is it, is it on schedule, is the load intact?"
                                }
                              </p>
                            </td>
                            <td data-v-1c7eea09={""}>
                              <p data-v-1c7eea09={""}>{"GPS / telematics"}</p>
                            </td>
                            <td data-v-1c7eea09={""}>
                              <p data-v-1c7eea09={""}>
                                {"Fine — this is the design case"}
                              </p>
                            </td>
                          </tr>
                          <tr data-v-1c7eea09={""}>
                            <td data-v-1c7eea09={""}>
                              <p data-v-1c7eea09={""}>{"Gate arrival"}</p>
                            </td>
                            <td data-v-1c7eea09={""}>
                              <p data-v-1c7eea09={""}>
                                {
                                  "Who’s arriving, what’s on the trailer, where does it go?"
                                }
                              </p>
                            </td>
                            <td data-v-1c7eea09={""}>
                              <p data-v-1c7eea09={""}>
                                {"Camera + gate workflow"}
                              </p>
                            </td>
                            <td data-v-1c7eea09={""}>
                              <p data-v-1c7eea09={""}>
                                {"Manual check-in, paper logs, radio calls"}
                              </p>
                            </td>
                          </tr>
                          <tr data-v-1c7eea09={""}>
                            <td data-v-1c7eea09={""}>
                              <p data-v-1c7eea09={""}>{"In-yard dwell"}</p>
                            </td>
                            <td data-v-1c7eea09={""}>
                              <p data-v-1c7eea09={""}>
                                {"Which slot, loaded or empty, how long?"}
                              </p>
                            </td>
                            <td data-v-1c7eea09={""}>
                              <p data-v-1c7eea09={""}>
                                {"Computer vision on yard cameras"}
                              </p>
                            </td>
                            <td data-v-1c7eea09={""}>
                              <p data-v-1c7eea09={""}>
                                {"GPS drift, trailer hunt, mis-slots"}
                              </p>
                            </td>
                          </tr>
                          <tr data-v-1c7eea09={""}>
                            <td data-v-1c7eea09={""}>
                              <p data-v-1c7eea09={""}>{"Dock activity"}</p>
                            </td>
                            <td data-v-1c7eea09={""}>
                              <p data-v-1c7eea09={""}>
                                {
                                  "Which door, when did it start, when did it finish?"
                                }
                              </p>
                            </td>
                            <td data-v-1c7eea09={""}>
                              <p data-v-1c7eea09={""}>
                                {"Dock sensors + vision"}
                              </p>
                            </td>
                            <td data-v-1c7eea09={""}>
                              <p data-v-1c7eea09={""}>
                                {"Whiteboards, spreadsheets, tribal knowledge"}
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <h2
                        id={
                          "how-do-you-track-trailers-inside-the-yard-without-putting-a-device-on-every-asset"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "How Do You Track Trailers Inside the Yard Without Putting a Device on Every Asset?"
                        }
                      </h2>
                      <p data-v-1c7eea09={""}>
                        {
                          "You track trailers inside the yard by identifying them visually with cameras already mounted at the gate, in the lot, and at the dock — no per-asset device required. Computer vision reads trailer numbers, license plates, container IDs, and equipment states directly from the video feed and writes those observations into a system of record."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "A large operator moving mixed pools — own fleet, carrier trailers, drop trailers, chassis — can’t realistically instrument every asset that touches the yard. Third-party trailers won’t be wearing your devices. Vision on fixed infrastructure sees everything that enters the frame, regardless of who owns it."
                        }
                      </p>
                      <h2
                        id={
                          "what-makes-a-trailer-tracking-solution-hardware-free"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "What Makes a Trailer Tracking Solution Hardware-Free?"
                        }
                      </h2>
                      <p data-v-1c7eea09={""}>
                        {
                          "A hardware-free trailer tracking solution uses computer vision on existing yard cameras to identify assets and confirm activity, eliminating the need to attach a device to every trailer. AI-powered cameras automatically identify trailers, license plates, equipment, containers, and yard activity."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "The operational value is verification: computer vision confirms what is actually happening at a location, not just where a device says something is. That distinction matters when you’re paying detention on a trailer a driver swears left two hours ago, or when your yard check says row G is full but slot G-9 has been empty since third shift."
                        }
                      </p>
                      <h2
                        id={
                          "what-should-trailer-tracking-software-do-inside-the-fence-line"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "What Should Trailer Tracking Software Do Inside the Fence Line?"
                        }
                      </h2>
                      <p data-v-1c7eea09={""}>
                        {
                          "Trailer tracking software, once the trailer is inside the fence line, needs to do four things: identify the asset without a device on it, place it in an exact yard location, tie it to the work that needs to happen to it, and trigger the next action automatically. A map view alone is a report, not a system."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "A Yard Operating System (YOS) is a software platform that manages, orchestrates, and automates all activities taking place within a logistics yard. Tracking is the observation layer; orchestration turns observation into throughput. A Mission™ is a trigger-driven workflow that converts a real-world event into a managed, trackable, step-by-step operational process. When a camera confirms a trailer has arrived in slot G-14, that observation becomes the trigger — spotter dispatched, driver notified, dock assigned — without a radio call. That’s what separates "
                        }
                        <Link
                          href={
                            "/all-resources/yard-management-software-elevate-logistics-efficiency-today"
                          }
                          rel={"noopener noreferrer"}
                          data-v-1c7eea09={""}
                          prefetch={false}
                        >
                          {"modern yard management software"}
                        </Link>
                        {" from a location dashboard."}
                      </p>
                      <h2
                        id={"why-is-yard-visibility-the-missing-layer"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"Why Is Yard Visibility the Missing Layer?"}
                      </h2>
                      <p data-v-1c7eea09={""}>
                        {
                          "Yard visibility is the missing layer between road-side tracking and warehouse operations. A YOS provides real-time visibility into trailer locations, gate activity, driver arrivals and departures, yard inventory, dock assignments, yard movements, equipment utilization, and operational workflows — the full set of signals road-only tracking cannot see."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "A typical distribution center manages hundreds of trailer moves per day, dozens of dock doors, and thousands of gate transactions per month — and manual yard operations still coordinate all of that with paper logs, spreadsheets, whiteboards, radio calls, and tribal knowledge. For multi-site operators the compounding effect across facilities is the point — see "
                        }
                        <Link
                          href={
                            "/all-resources/how-a-yard-management-system-enhances-real-time-visibility-across-multi-site-operations"
                          }
                          rel={"noopener noreferrer"}
                          data-v-1c7eea09={""}
                          prefetch={false}
                        >
                          {
                            "real-time trailer visibility across multi-site yard operations"
                          }
                        </Link>
                        {" for the network view."}
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "The category distinction is worth stating exactly: a YMS helps operators understand what is happening. A YOS helps operators manage, automate, and optimize what happens next. Traditional Yard Management Systems primarily focus on tracking assets and managing trailer inventory. A YOS acts on the observation."
                        }
                      </p>
                      <h2
                        id={
                          "why-does-trailer-pool-management-depend-on-yard-side-truth"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "Why Does Trailer Pool Management Depend on Yard-Side Truth?"
                        }
                      </h2>
                      <p data-v-1c7eea09={""}>
                        {
                          "Trailer pool management depends on knowing which trailers are actually available, actually empty, and actually where the system says they are — none of which road-side pings confirm. Pool imbalance, phantom availability, and detention leakage all start with bad yard-side data."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "If your pool report says fourteen empties are available at a facility and the yard walk finds nine, the difference is what you pay for in expedites, missed loads, and detention. Early Missions™ deployments demonstrate 50% improvement in data accuracy and up to 2× increases in throughput; pool health is one of the first operational areas that improvement shows up in."
                        }
                      </p>
                      <h2
                        id={
                          "how-should-you-evaluate-trailer-tracking-companies-for-yard-operations"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "How Should You Evaluate Trailer Tracking Companies for Yard Operations?"
                        }
                      </h2>
                      <p data-v-1c7eea09={""}>
                        {
                          "When evaluating trailer tracking companies for yard operations, look past the map view. Four questions matter: does it work without a device on every trailer, does it identify third-party assets, does it integrate with your existing WMS and TMS, and does it trigger work — not just report status."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "A YOS does not replace existing WMS or TMS — it connects them. A Warehouse Management System manages inventory. A Transportation Management System manages freight movement. A Yard Operating System manages everything that happens in between. That “in between” is the segment road-focused vendors have historically ignored: over $50B worth of goods move through North America’s 50,000+ warehouses and factories every day, and the yard is the bottleneck between the two digitized ends. A practical starting point is "
                        }
                        <Link
                          href={
                            "/all-resources/stop-trailer-hunt-yard-management-system-that-works"
                          }
                          rel={"noopener noreferrer"}
                          data-v-1c7eea09={""}
                          prefetch={false}
                        >
                          {
                            "auditing how often your system of record matches what’s actually in the slot"
                          }
                        </Link>
                        {"."}
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "For independent grounding on freight and delay costs, the "
                        }
                        <a
                          href={"https://www.bts.gov/"}
                          rel={"noopener noreferrer"}
                          data-v-1c7eea09={""}
                        >
                          {"Bureau of Transportation Statistics"}
                        </a>
                        {" and "}
                        <a
                          href={"https://www.fmcsa.dot.gov/"}
                          rel={"noopener noreferrer"}
                          data-v-1c7eea09={""}
                        >
                          {"FMCSA"}
                        </a>
                        {" publish public data."}
                      </p>
                      <h2
                        id={
                          "where-does-gps-end-and-a-yard-operating-system-begin"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "Where Does GPS End and a Yard Operating System Begin?"
                        }
                      </h2>
                      <p data-v-1c7eea09={""}>
                        {"Telematics and GPS end at the gate. A "}
                        <Link
                          href={"/all-resources/yard-automation-platform"}
                          rel={"noopener noreferrer"}
                          data-v-1c7eea09={""}
                          prefetch={false}
                        >
                          {
                            "yard automation platform that closes the gate-to-dock execution gap"
                          }
                        </Link>
                        {
                          " begins the moment the trailer is inside the fence. The two are complementary — one for the road, one for the yard, exchanging context at the transition."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        {
                          "If your team spends its day searching for trailers the tracking map says are “here somewhere,” the tool isn’t broken. It’s being asked to do a job it was never designed for. The fix is not a better device on the trailer. It’s a system of record that watches the yard directly and turns what it sees into the next move."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        <strong data-v-1c7eea09={""}>{"Next read:"}</strong>{" "}
                        <Link
                          href={"/what-is-terminal-yos"}
                          rel={"noopener noreferrer"}
                          data-v-1c7eea09={""}
                          prefetch={false}
                        >
                          {"Terminal’s AI-native Yard Operating System (YOS)"}
                        </Link>
                        {"."}
                      </p>
                      <hr data-v-1c7eea09={""} />
                      <h2
                        id={"faq"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"FAQ"}
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <strong data-v-1c7eea09={""}>
                          {
                            "What happens to trailer visibility the moment a trailer passes the gate?"
                          }
                        </strong>
                        <br data-v-1c7eea09={""} />
                        {
                          "Road-side signal fidelity drops because trailers are parked close together, in metal-heavy environments, and often stationary for long periods. The gate is the point where the tracking question shifts from “where on the map” to “which slot, which state, what’s next.” Without a yard-side system, that question gets answered by radio calls and walks."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        <strong data-v-1c7eea09={""}>
                          {
                            "What operational problems does yard-side trailer tracking actually solve?"
                          }
                        </strong>
                        <br data-v-1c7eea09={""} />
                        {
                          "Trailer hunt, dwell, detention exposure, mis-slots, gate congestion, and manual check-in — the yard problems that persist as long as operations run on paper logs, spreadsheets, whiteboards, and tribal knowledge."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        <strong data-v-1c7eea09={""}>
                          {
                            "How does yard trailer tracking connect to gate, dock, and spotter workflows?"
                          }
                        </strong>
                        <br data-v-1c7eea09={""} />
                        {
                          "Through triggered workflows. When a camera confirms an arrival, departure, or slot change, that observation triggers the next step — gate clearance, spotter dispatch, dock assignment — as a managed process rather than a radio call. In Terminal’s YOS, a Mission™ is a trigger-driven workflow that converts a real-world event into a managed, trackable, step-by-step operational process."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        <strong data-v-1c7eea09={""}>
                          {
                            "Do I need to replace my existing WMS or TMS to add yard trailer tracking?"
                          }
                        </strong>
                        <br data-v-1c7eea09={""} />
                        {
                          "No. A YOS does not replace existing WMS or TMS — it connects them. The warehouse system continues to manage inventory, the transportation system continues to manage freight movement, and the yard system fills the gap between them."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        <strong data-v-1c7eea09={""}>
                          {
                            "Is GPS tracking still useful if I add computer vision in the yard?"
                          }
                        </strong>
                        <br data-v-1c7eea09={""} />
                        {
                          "Yes. GPS and telematics remain the right tools for over-the-road questions. Computer vision handles the yard segment where those signals lose fidelity. The two work as a handoff, not a replacement."
                        }
                      </p>
                      <p data-v-1c7eea09={""}>
                        <strong data-v-1c7eea09={""}>
                          {
                            "Where can I find buyer-side data on the state of yard operations?"
                          }
                        </strong>
                        <br data-v-1c7eea09={""} />
                        {"Terminal’s "}
                        <Link
                          href={"/2026-state-of-the-yard-survey-report"}
                          rel={"noopener noreferrer"}
                          data-v-1c7eea09={""}
                          prefetch={false}
                        >
                          {"2026 State of the Yard Survey Report"}
                        </Link>
                        {
                          " covers operator perspectives on yard visibility, execution, and technology adoption."
                        }
                      </p>
                    </div>
                    <div
                      className={"tag-button-list mt-8"}
                      data-v-1c7eea09={""}
                      data-v-95826a6e={""}
                    >
                      <button
                        className={"tag-button button label-4 tag-button"}
                        style={{ width: "fit-content" }}
                        data-v-95826a6e={""}
                        data-v-d8fa3fef={""}
                      >
                        <span className={"link-active"} data-v-d8fa3fef={""}>
                          {"computer vision"}
                        </span>
                      </button>
                      <button
                        className={"tag-button button label-4 tag-button"}
                        style={{ width: "fit-content" }}
                        data-v-95826a6e={""}
                        data-v-d8fa3fef={""}
                      >
                        <span className={"link-active"} data-v-d8fa3fef={""}>
                          {"Logistics Technology "}
                        </span>
                      </button>
                      <button
                        className={"tag-button button label-4 tag-button"}
                        style={{ width: "fit-content" }}
                        data-v-95826a6e={""}
                        data-v-d8fa3fef={""}
                      >
                        <span className={"link-active"} data-v-d8fa3fef={""}>
                          {"yms"}
                        </span>
                      </button>
                    </div>
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
              <ResourceLibrary variant="latest" />
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
