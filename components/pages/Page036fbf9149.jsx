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
export default function Page036fbf9149() {
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
                    {"blog • September 15, 2026"}
                  </div>
                  <h1
                    className={"post-header__title title-h1"}
                    data-v-01b90259={""}
                  >
                    {
                      "What Is a Yard Mission? Why Tasks Are the Wrong Unit of Work"
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
                      src={"/assets/68183efe79127819111d.webp"}
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
                            "What Is a Yard Mission? Why Tasks Are the Wrong Unit of Work"
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
                        <span style={{ color: "" }} data-v-1c7eea09={""}>
                          {"Submitted Sep 8, 2026"}
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Ask most yard software what is happening at a facility right now and it will tell you about tasks. A check-in was completed. A dock door was assigned. A trailer was moved. Each of those is true, each is recorded, and none of them tells you whether anything is actually progressing."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "That is the gap between digitising a yard and running one. A task list is a record of activity. It is not a description of what a driver came here to do, and it cannot tell you whether they are closer to leaving than they were an hour ago."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "The alternative is to make the unit of work the whole job rather than its pieces. Terminal calls that unit a mission."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}></p>
                      <h2
                        id={"what-a-yard-mission-actually-is"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"What a Yard Mission Actually Is"}
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "A yard mission is the end-to-end workflow a driver, load or robot moves through to accomplish a single goal at a facility, expressed as a connected sequence of discrete actions that a system can orchestrate rather than merely record. Arriving, checking in, being staged, being assigned a door, loading and departing is one mission, not six unrelated tasks."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Ryan Arroyo, SVP of Product and Engineering at Terminal Industries, puts the distinction in one line: "
                          }
                        </span>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {'"A mission is a collection of tasks."'}
                          </span>
                        </strong>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            'The reason that matters is not vocabulary. It changes what the software is able to do. "A task could be seen as a discrete action," Arroyo says. "A check-in, an assignment to a dock door, an unload or load. Those are tasks. Missions bring them all together into an end-to-end workflow that can then be orchestrated."'
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "A system that holds tasks can tell you a truck checked in. A system that holds missions knows the check-in was step one of seven, knows what step two is, and can initiate it without waiting for a human to notice."
                          }
                        </span>
                      </p>
                      <h3
                        id={"the-question-every-mission-answers"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"The question every mission answers"}
                      </h3>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "There is a useful test for whether something is a mission. Arroyo points to the question every driver is asked on arrival at every facility in the world."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            '"Why are you here is a classic first thing that every operator gets asked when they arrive at a facility, and effectively the answer to that is the mission, which then loads the series of nodes that then can become orchestrated by a site."'
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            'If your software cannot answer "why is this driver here" in a single field, it is holding tasks.'
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}></p>
                      <h2
                        id={"why-task-based-yard-software-stalls"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"Why Task-Based Yard Software Stalls"}
                      </h2>
                      <h3
                        id={
                          "it-documents-the-past-instead-of-driving-the-present"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"It documents the past instead of driving the present"}
                      </h3>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "The structural problem with most yard systems is not that they lack features. It is the direction they face."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            '"The majority of what is available today is documenting what has already happened," Arroyo says. "A truck moves through a gate, something happens, you have to remember to update the software to let the software know that the truck went by. And so it\'s not helping your operation, you\'ve just added another task for your team to do. Check in the truck, and then go to the software and check in the truck."'
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            'His conclusion is blunt: "It\'s just a digitisation process that adds work versus taking work away."'
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "The tell is whether your team performs an action and then reports it, or whether performing it "
                          }
                        </span>
                        <em data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"is"}
                          </span>
                        </em>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            ' the report. If someone is retyping reality into a system after the fact, the system is a ledger. Arroyo\'s description of what that produces is unflattering and accurate: "Think about that as a really fancy spreadsheet. A really fancy database."'
                          }
                        </span>
                      </p>
                      <h3
                        id={
                          "nobody-would-accept-this-anywhere-else-in-logistics"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"Nobody would accept this anywhere else in logistics"}
                      </h3>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "The rear-view model looks normal in the yard only because it is universal there. Move it to any other high-throughput environment and it becomes absurd immediately."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            '"Can you imagine running a high-speed rail system rear-view mirror?" asks Josh Kivenko, Terminal\'s Chief Marketing Officer. "Oh, train A31 came in from Osaka, right, okay, write it down." His point is not that it would be inefficient. "There\'s no way to do it. It just doesn\'t work efficiently, it just doesn\'t function."'
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "The yard tolerates a standard that no comparably complex operation would accept, and the reason is historical rather than technical."
                          }
                        </span>
                      </p>
                      <h3
                        id={"there-is-nobody-left-to-do-the-data-entry"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"There is nobody left to do the data entry"}
                      </h3>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "The rear-view model has a dependency most operators have not thought through: it requires a human to be standing there to record what happened."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "\"You move to the future where we need to be able to orchestrate movement autonomously, because we're taking humans out of the yard or interacting with autonomous vehicles and robots,\" Arroyo says. \"Then you can't be in the past. There's no one to enter the data for that truck that entered the yard, because there's no one there.\""
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "This is why the mission model is a prerequisite for automation rather than a nicer way to view it. Remove the gate guard from a task-based system and the system goes blind. Remove them from a mission-based one and the workflow continues, because the sequence was already defined and the sensors already feed it."
                          }
                        </span>
                      </p>
                      <h2
                        id={"how-missions-are-built"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"How Missions Are Built"}
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Missions are assembled from nodes: discrete actions that map to things that really happen in a yard. The architecture matters because it determines who can change it."
                          }
                        </span>
                      </p>
                      <ol order={"1"} data-v-1c7eea09={""}>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <strong data-v-1c7eea09={""}>
                              <span
                                style={{ color: "#000000" }}
                                data-v-1c7eea09={""}
                              >
                                {"Signals come in."}
                              </span>
                            </strong>
                            <span
                              style={{ color: "#000000" }}
                              data-v-1c7eea09={""}
                            >
                              {
                                " Computer vision at the gate, integrations with the WMS or TMS, driver input, telematics, and whatever sensing the site has. The system learns a truck has arrived without anyone telling it."
                              }
                            </span>
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <strong data-v-1c7eea09={""}>
                              <span
                                style={{ color: "#000000" }}
                                data-v-1c7eea09={""}
                              >
                                {"The mission is identified."}
                              </span>
                            </strong>
                            <span
                              style={{ color: "#000000" }}
                              data-v-1c7eea09={""}
                            >
                              {
                                ' The arrival is matched to a purpose: which shipment, which carrier, on time or late, live load or drop. This is the "why are you here" answer, resolved automatically.'
                              }
                            </span>
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <strong data-v-1c7eea09={""}>
                              <span
                                style={{ color: "#000000" }}
                                data-v-1c7eea09={""}
                              >
                                {"Nodes are sequenced into a workflow."}
                              </span>
                            </strong>
                            <span
                              style={{ color: "#000000" }}
                              data-v-1c7eea09={""}
                            >
                              {
                                " The mission loads the actions required for this specific purpose at this specific site."
                              }
                            </span>
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <strong data-v-1c7eea09={""}>
                              <span
                                style={{ color: "#000000" }}
                                data-v-1c7eea09={""}
                              >
                                {"Decisions are made on the operator's behalf."}
                              </span>
                            </strong>
                            <span
                              style={{ color: "#000000" }}
                              data-v-1c7eea09={""}
                            >
                              {
                                ' "AI is used to make decisions on behalf of humans," Arroyo says, "qualified, accurate decisions, so that they can leverage their time more effectively, manage more of the operation, manage more of a network, by only focusing on the things that AI can\'t figure out." Humans handle exceptions, not the routine path.'
                              }
                            </span>
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <strong data-v-1c7eea09={""}>
                              <span
                                style={{ color: "#000000" }}
                                data-v-1c7eea09={""}
                              >
                                {"The configuration belongs to the operator."}
                              </span>
                            </strong>
                            <span
                              style={{ color: "#000000" }}
                              data-v-1c7eea09={""}
                            >
                              {
                                ' "It\'s configurable in a no-code way by the industry," Arroyo says. "When you think about how every yard works different, we have that covered, and the greatest thing about that is you can over time configure these yourself."'
                              }
                            </span>
                          </p>
                        </li>
                      </ol>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "That last point is where the model earns its keep. No two yards run identically, so a fixed set of workflows would fail everywhere except the site it was designed for. Arroyo is explicit that the interesting outcome is customers building sequences Terminal did not anticipate: \"We're excited for our future when we see our customers creating missions which are unique combinations of nodes that we've never seen before.\""
                          }
                        </span>
                      </p>
                      <h2
                        id={
                          "determinism-and-the-part-nobody-can-program-in-advance"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "Determinism, and the Part Nobody Can Program in Advance"
                        }
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "There is an obvious objection. If a mission is a defined sequence, what happens when the yard does something nobody defined?"
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "This is where the mission model separates from simple workflow automation. A rail network is largely deterministic: a train leaves A and arrives at B, and the states in between are documented. A yard is not. Kivenko raises the Rumsfeld problem directly, the things you do not know that you do not know, and asks how a system accommodates them."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Arroyo's answer is architectural rather than predictive. Because missions are built from a growing library of composable nodes rather than hard-coded end-to-end paths, the system does not have to anticipate every scenario. It has to be able to assemble a response from parts it already has."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            '"You\'re not building for every scenario," Kivenko summarises. "You\'re able to have a platform that\'s flexible enough to accommodate an unforeseen scenario."'
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Arroyo adds the qualifier that matters: \"That's fundamentally the AI revolution that we're seeing.\" With guardrails. A yard is a physical environment with safety consequences, which rules out purely probabilistic decision-making. The system has to be flexible in what it can assemble and rigid about what it will permit."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}></p>
                      <h2
                        id={"a-diagnostic-are-you-running-tasks-or-missions"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"A Diagnostic: Are You Running Tasks or Missions?"}
                      </h2>
                      <ul data-v-1c7eea09={""}>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <span
                              style={{ color: "#000000" }}
                              data-v-1c7eea09={""}
                            >
                              {
                                'Can your system answer "why is this driver here" as a single value, or does someone have to infer it from a sequence of records?'
                              }
                            </span>
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <span
                              style={{ color: "#000000" }}
                              data-v-1c7eea09={""}
                            >
                              {
                                "When a truck completes check-in, does the next step begin automatically, or does someone have to notice and start it?"
                              }
                            </span>
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <span
                              style={{ color: "#000000" }}
                              data-v-1c7eea09={""}
                            >
                              {
                                "If you removed the person who updates the system, how long before the system's picture of the yard is wrong?"
                              }
                            </span>
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <span
                              style={{ color: "#000000" }}
                              data-v-1c7eea09={""}
                            >
                              {
                                "Can a site manager change the order of steps for a workflow without raising a ticket with a vendor?"
                              }
                            </span>
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <span
                              style={{ color: "#000000" }}
                              data-v-1c7eea09={""}
                            >
                              {
                                "Does your software know that these six records are one job, or does it hold six unrelated rows?"
                              }
                            </span>
                          </p>
                        </li>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <span
                              style={{ color: "#000000" }}
                              data-v-1c7eea09={""}
                            >
                              {
                                "When something unexpected happens, does the system have a path for it, or does it simply stop and wait for a human?"
                              }
                            </span>
                          </p>
                        </li>
                      </ul>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "If the no answers cluster around the first three, you have a rear-view system. If they cluster around the last three, you have a workflow tool that is not configurable enough to survive contact with a real yard."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}></p>
                      <h2
                        id={"where-this-sits-in-the-platform"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"Where This Sits in the Platform"}
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {"Missions are the execution layer of a "}
                        </span>
                        <u data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#0000EE" }}
                            data-v-1c7eea09={""}
                          >
                            <Link
                              href={"/what-is-terminal-yos"}
                              rel={"noopener noreferrer"}
                              data-v-1c7eea09={""}
                              prefetch={false}
                            >
                              {"Yard Operating System"}
                            </Link>
                          </span>
                        </u>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            ", which is the distinction Terminal draws between a YOS and a traditional "
                          }
                        </span>
                        <u data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#0000EE" }}
                            data-v-1c7eea09={""}
                          >
                            <Link
                              href={"/yos-vs-yms"}
                              rel={"noopener noreferrer"}
                              data-v-1c7eea09={""}
                              prefetch={false}
                            >
                              {"yard management system"}
                            </Link>
                          </span>
                        </u>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            ". A YMS records yard state. A YOS orchestrates yard movement, and missions are the mechanism by which it does."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {"In practice that runs across "}
                        </span>
                        <u data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#0000EE" }}
                            data-v-1c7eea09={""}
                          >
                            <Link
                              href={"/modules/gate-management"}
                              rel={"noopener noreferrer"}
                              data-v-1c7eea09={""}
                              prefetch={false}
                            >
                              {"gate automation"}
                            </Link>
                          </span>
                        </u>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {" at arrival, "}
                        </span>
                        <u data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#0000EE" }}
                            data-v-1c7eea09={""}
                          >
                            <Link
                              href={
                                "/modules/dispatch-and-spotter-orchestration"
                              }
                              rel={"noopener noreferrer"}
                              data-v-1c7eea09={""}
                              prefetch={false}
                            >
                              {"dispatch and spotter orchestration"}
                            </Link>
                          </span>
                        </u>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {" for the moves in between, and "}
                        </span>
                        <u data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#0000EE" }}
                            data-v-1c7eea09={""}
                          >
                            <Link
                              href={"/modules/yard-visibility"}
                              rel={"noopener noreferrer"}
                              data-v-1c7eea09={""}
                              prefetch={false}
                            >
                              {"yard visibility"}
                            </Link>
                          </span>
                        </u>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " as the layer that makes the whole thing legible to a network operator rather than a single site. The "
                          }
                        </span>
                        <u data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#0000EE" }}
                            data-v-1c7eea09={""}
                          >
                            <Link
                              href={"/the-agentic-ai-yard"}
                              rel={"noopener noreferrer"}
                              data-v-1c7eea09={""}
                              prefetch={false}
                            >
                              {"agentic AI layer"}
                            </Link>
                          </span>
                        </u>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " sits on top of the mission backbone rather than beside it, which is why Arroyo describes the AI as infrastructure rather than a feature."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <br data-v-1c7eea09={""} />
                      </p>
                      <h2
                        id={"frequently-asked-questions"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"Frequently Asked Questions"}
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"What is a yard mission?"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " A yard mission is the end-to-end workflow a driver, load or robot moves through to accomplish a single goal at a facility, expressed as a connected sequence of discrete actions that a system can orchestrate. Arriving, checking in, being staged, being assigned a door, loading and departing is one mission rather than six separate tasks."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {
                              "What is the difference between a yard mission and a yard task?"
                            }
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " A task is a single discrete action such as a check-in or a dock assignment. A mission is the collection of tasks that together accomplish the driver's actual purpose, held as one connected workflow so that completing one step can trigger the next automatically."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"Why does the distinction matter operationally?"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " Because a system that holds tasks can only record that something happened, while a system that holds missions knows what should happen next and can initiate it. It is also the precondition for removing labour from the yard, since a task-based system depends on a human being present to enter what occurred."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {
                              "Can yard missions be configured without a developer?"
                            }
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " Yes. Missions are assembled from a library of nodes and are configurable without code, so an operator can reorder or customise a workflow for a specific site rather than requesting a change from the vendor."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {
                              "How does a mission handle a situation nobody planned for?"
                            }
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " By being composed of reusable nodes rather than hard-coded end-to-end paths. The system assembles a response from components it already holds instead of requiring that every scenario be anticipated in advance, with guardrails constraining what it is permitted to do in a physical environment."
                          }
                        </span>
                      </p>
                      <h2
                        id={"where-to-start"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"Where to Start"}
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "If your yard is digitised and your team is still doing data entry, the problem is the unit of work, not the software's feature list."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {"Terminal's "}
                        </span>
                        <u data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#0000EE" }}
                            data-v-1c7eea09={""}
                          >
                            <Link
                              href={"/what-is-terminal-yos"}
                              rel={"noopener noreferrer"}
                              data-v-1c7eea09={""}
                              prefetch={false}
                            >
                              {"Yard Operating System"}
                            </Link>
                          </span>
                        </u>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " is built on the mission model described here. See "
                          }
                        </span>
                        <u data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#0000EE" }}
                            data-v-1c7eea09={""}
                          >
                            <Link
                              href={"/yos-vs-yms"}
                              rel={"noopener noreferrer"}
                              data-v-1c7eea09={""}
                              prefetch={false}
                            >
                              {"how a YOS differs from a YMS"}
                            </Link>
                          </span>
                        </u>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {", or "}
                        </span>
                        <u data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#0000EE" }}
                            data-v-1c7eea09={""}
                          >
                            <a
                              href={"https://explore.terminal-industries.com"}
                              rel={"noopener noreferrer"}
                              data-v-1c7eea09={""}
                            >
                              {"explore the platform"}
                            </a>
                          </span>
                        </u>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " and walk through gate automation yourself with no sales call."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {"This article draws on "}
                        </span>
                        <u data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#0000EE" }}
                            data-v-1c7eea09={""}
                          >
                            <Link
                              href={
                                "/all-resources/lights-out-yard-episode-2-replay"
                              }
                              rel={"noopener noreferrer"}
                              data-v-1c7eea09={""}
                              prefetch={false}
                            >
                              {"Lights-Out Yard Episode 2"}
                            </Link>
                          </span>
                        </u>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " with Ryan Arroyo, SVP Product and Engineering at Terminal Industries."
                          }
                        </span>
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
