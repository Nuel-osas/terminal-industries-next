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
export default function Page69180eaf73() {
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
                    {"blog • June 17, 2026"}
                  </div>
                  <h1
                    className={"post-header__title title-h1"}
                    data-v-01b90259={""}
                  >
                    {
                      "If trust in freight is dead, why is it still running the yard?"
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
                      src={"/assets/8de37f8ab81a96ba2687.webp"}
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
                        src={"/assets/b7590a8f50a78b1f3518.webp"}
                        data-v-dd1fd95f={""}
                      />
                      <div className={"author-details"} data-v-dd1fd95f={""}>
                        <p
                          className={"author-name"}
                          itemprop={"name"}
                          data-v-dd1fd95f={""}
                        >
                          {"Chris Brumett "}
                        </p>
                        <p
                          className={"author-role"}
                          itemprop={"jobTitle"}
                          data-v-dd1fd95f={""}
                        >
                          {"Chief Product Officer "}
                        </p>
                      </div>
                    </div>
                    <p
                      className={"author-bio"}
                      itemprop={"description"}
                      data-v-dd1fd95f={""}
                    >
                      {
                        "Chris is a product leader with extensive experience shaping AI- and IoT-enabled supply chain solutions and leading digital transformation across global logistics networks. As Chief Product Officer, Chris is driven to reinvent the yard by bringing a strong voice of the customer deep into the fabric of company operations."
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
                            "If trust in freight is dead, why is it still running the yard?"
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
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "I’ve been in the supply chain industry for 30 years. For the past decade or so, as new software solutions flooded the market, anyone who knew “how things really operated,” knew it was an industry run on relationships. Technology was just a supplement to how money, data and freight got moved from A to B. Even with our current AI gold rush, there are still industry veterans who remember faxing bills of lading and are still working with those same colleagues. I’d argue the foundation of the industry – trust, mutual respect, familiarity – has eroded to a point of no return. Not because of technology, but because of prolific freight fraud that has fostered a culture of paranoia across the industry. And as a veteran of yard technology and systems, I can tell you a lot of this distrust starts in the yard. "
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Walk into almost any logistics facility in the country and you'll find the same scene at the gate: a person with a tablet or a clipboard. They typically don’t have any information on the trucks coming in – is this the carrier we booked? Is this driver legit? Is that the right trailer, sealed the way it left the last yard? Security and visibility solutions have helped operators answer those questions across almost every node of the supply chain, but in the yard, carrier verification and security is about as sophisticated as the check out process at Costco. "
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {"Cargo theft across the U.S. and Canada "}
                        </span>
                        <u data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#1155CC" }}
                            data-v-1c7eea09={""}
                          >
                            <a
                              href={
                                "https://www.cargonet.com/news-and-events/cargonet-in-the-media/2025-theft-trends/"
                              }
                              rel={"noopener noreferrer"}
                              data-v-1c7eea09={""}
                            >
                              {"climbed past $725 million last year"}
                            </a>
                          </span>
                        </u>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            ", a 60% jump, and the fastest-growing vector isn't the smash-and-grab. It's "
                          }
                        </span>
                        <u data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#1155CC" }}
                            data-v-1c7eea09={""}
                          >
                            <a
                              href={"https://www.ic3.gov/PSA/2026/PSA260430"}
                              rel={"noopener noreferrer"}
                              data-v-1c7eea09={""}
                            >
                              {"fraud"}
                            </a>
                          </span>
                        </u>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            ": fictitious pickups, stolen identities, carriers that look legitimate on a load board and vanish with a full trailer. The FBI has "
                          }
                        </span>
                        <u data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#1155CC" }}
                            data-v-1c7eea09={""}
                          >
                            <a
                              href={"https://www.ic3.gov/PSA/2026/PSA260430"}
                              rel={"noopener noreferrer"}
                              data-v-1c7eea09={""}
                            >
                              {"said plainly"}
                            </a>
                          </span>
                        </u>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " that impersonation is now the dominant way freight gets stolen. And people like the veteran gate guard who knew every regular driver by name is retiring. "
                          }
                        </span>
                        <u data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#1155CC" }}
                            data-v-1c7eea09={""}
                          >
                            <a
                              href={
                                "https://www.bls.gov/news.release/pdf/jolts.pdf"
                              }
                              rel={"noopener noreferrer"}
                              data-v-1c7eea09={""}
                            >
                              {"Warehouse turnover sits near 50%"}
                            </a>
                          </span>
                        </u>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {"; for long-haul drivers it's"}
                        </span>
                        <u data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#1155CC" }}
                            data-v-1c7eea09={""}
                          >
                            <a
                              href={
                                "https://www.ooida.com/wp-content/uploads/2025/04/The-Churn-A-Brief-Look-at-the-Roots-of-High-Driver-Turnover-in-U.S.-Trucking.pdf"
                              }
                              rel={"noopener noreferrer"}
                              data-v-1c7eea09={""}
                            >
                              {" above 90%"}
                            </a>
                          </span>
                        </u>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {". "}
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "So we have a place where every load in the supply chain physically changes hands, where legal custody transfers, where accurate information is scarce or absent, where information asymmetry is accelerating fraud, and where the human safety net is thinning. And it remains the one part of the chain we never really invested in. Go figure. "
                          }
                        </span>
                      </p>
                      <h2
                        id={"yard-security-is-in-fact-the-warehouse-s-problem"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"Yard security is, in fact, the warehouse’s problem "}
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "When a load is stolen through fraud, the strategic theft completes at the moment the trailer is released. The facility that released it is the one left holding the liability. The contractual and compliance obligations that increasingly govern freight (documented carrier vetting, verified driver identity, conveyance inspection, an unbroken chain-of-custody record) all point back to the gate that let the truck through."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Today, cargo insurers, customer contracts, and programs like CTPAT increasingly demand records that paper-based yards cannot produce, and that a gate workforce turning over every eighteen months cannot reliably capture by hand. Yard security is, in fact, the warehouse’s problem, and it has to be solved at the gate, inside the system that runs it, because that's where custody actually changes and where the record either gets made or gets lost."
                          }
                        </span>
                      </p>
                      <h2
                        id={"no-one-owns-the-yard-and-that-s-a-problem"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"No one owns the yard (and that’s a problem)"}
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "I got my first IT job at a 3PL in the early 1990s. It's tempting to say the yard security problem is about bad software, that the industry tried to secure the yard and the tools weren't good enough. But back then the operations team was more worried about people jumping the fence, cutting the seal, and throwing product back over. Technology wasn't available, so companies threw bodies at it."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Yard management software was built for operations and throughput: dock assignments, dwell time, trailer locations, getting trucks in and out efficiently. Security, identity, and chain of custody were understood as separate concerns, owned by separate people, and addressed, when they were addressed at all, by separate means. This is why most facilities outsource the gate to a security company. Some of it got handled by point solutions bolted on from the outside: carrier-vetting services, cameras, physical ID checks by a guy named Steve. A lot of it wasn't handled by software at all."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "The result is a set of capabilities that have always lived in paper documentation and verbal communication over a radio – silos – disconnected from each other and from the system that actually runs the yard. For example, the camera never knew who the driver was, the carrier check never reached the gate, and the custody record, where it existed, sat in a binder. None of these pieces were wrong on their own. They simply were never brought together, because for most of the industry's history there was no obvious reason to make changes. "
                          }
                        </span>
                      </p>
                      <h2
                        id={"the-lesser-of-two-evils"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"The lesser of two evils"}
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "For most of its history, buying yard technology meant choosing between two unsatisfying options, and the choice had nothing to do with security. It was just the shape of the market."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "The first option was the large enterprise platform that promised end-to-end control of everything. In practice it was a clunky, glorified system of record: an expensive license, a six month deployment, zero flexibility. It promised comprehensive coverage yet could not change with the business without a massive change request and a matching invoice. You got breadth, and you paid for it in cost and rigidity."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "The second was the point solution, with the opposite promise: do one thing exceptionally well. Many genuinely deliver. But when every capability comes from a different vendor, the buyer inherits subscriptions, logins, dashboards, data formats, and renewal cycles, none of which speak to one another. Someone has to integrate them, monitor them, reconcile their outputs, and re-buy them every year. You got depth, and you paid for it in fragmentation."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "So that was the trade. Breadth or depth. One expensive, rigid system or ten sharp tools that don't talk. For decades there was no third answer, and no reason to expect one."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "AI-native development is the third answer. Capabilities that once demanded a specialized enterprise stack and a year of integration can now be built and deployed in a fraction of the time, at a fraction of the cost. You no longer choose between breadth and depth, or between flexibility and cohesion. You can have technology that does many things at once, changes with the business, and doesn't break the bank or trigger a year of change management."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "That is what makes this moment matter for the yard. Once the tradeoff collapses, capabilities that used to demand entirely separate systems can finally live in one. And the two that most need to come together are yard management and yard security, domains that were always treated as separate concerns, owned by separate people, bought from separate vendors. For the first time, there is no reason they have to be."
                          }
                        </span>
                      </p>
                      <h2
                        id={
                          "security-should-live-inside-the-system-already-running-the-gate"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "Security should live inside the system already running the gate "
                        }
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "For the first time, the technology exists to create a modular layer inside the system that already runs the yard. The capabilities that secure a yard (knowing the carrier, verifying the driver, watching the perimeter, documenting what actually leaves) no longer have to be a stack of disconnected point tools or a separate enterprise security program."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "We’re seeing a great convergence: yard security and yard management becoming one single entity. And AI has made it feasible to build something modular and affordable that does both at once."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Secondarily, we’re able to address both yard security and management because the data is the same data. For example, the check-in event and the security event are not two events; they are one event seen from two angles. The instant a truck reaches the gate, the system logging it for operations already holds nearly everything security needs, such as who is driving, what they are hauling, what the camera sees, and exactly when it happened. Recording that as an operations entry over here and a security entry over there was never a principle of good design."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Security should live inside the system already running the gate."
                          }
                        </span>
                      </p>
                      <h2
                        id={"convergence"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"Convergence"}
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Convergence matters because disconnected tools produce alerts, and unified systems produce decisions. A carrier-risk flag in one inbox, an ID scan in another, and a camera feed in a third are three pieces of information someone might later assemble into a conclusion, usually after the truck is already gone. That is retroactive security. It documents how the goods were lost."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "A fraudulent carrier at the gate is a decision that has to be made before the arm lifts. It can only be made if the carrier check, the driver's identity, the appointment, and the camera feed are all the same conversation, in the same place, at the same time. That is the entire point of bringing these capabilities together. Convergence isn't about owning fewer vendors, though you will. It's about turning a pile of after-the-fact records into a decision made at the only moment a decision still matters."
                          }
                        </span>
                      </p>
                      <h2
                        id={
                          "the-yard-has-always-been-the-supply-chain-s-soft-spot"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "The yard has always been the supply chain’s soft spot"
                        }
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "To be clear, there’s always been freight fraud and the yard was always the soft spot. It’s because it’s where custody is most exposed. What's new is that the excuse is gone and the stakes are higher. Solutions exist that will allow, for the first time, the facility that released the load to prove who took it, prove they were authorized to, and prove that what was left matched what was supposed to. "
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "That is what this moment in technology actually offers logistics. To give the yard the same visibility and accountability the rest of the supply chain has taken for granted for years."
                          }
                        </span>
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
                          {"ai"}
                        </span>
                      </button>
                      <button
                        className={"tag-button button label-4 tag-button"}
                        style={{ width: "fit-content" }}
                        data-v-95826a6e={""}
                        data-v-d8fa3fef={""}
                      >
                        <span className={"link-active"} data-v-d8fa3fef={""}>
                          {"chain of custody"}
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
                          {"security"}
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
