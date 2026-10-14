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
export default function Page4b30ef57ab() {
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
                    {"blog • October 6, 2026"}
                  </div>
                  <h1
                    className={"post-header__title title-h1"}
                    data-v-01b90259={""}
                  >
                    {
                      "Autonomous Trucks Are Coming. Your Yard Is the Part That Isn't Ready."
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
                      src={"/assets/15e266c841b80ce24657.webp"}
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
                            "Autonomous Trucks Are Coming. Your Yard Is the Part That Isn't Ready."
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
                          {"Submitted Oct 05, 2026"}
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "The assumption running through most conversations about autonomy in logistics is that the trucks are the hard part. Solve driverless over the road, and the facilities they arrive at will adapt."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "It is the wrong way round. Point-to-point driving on mapped highways is the constrained problem. The yard is the unconstrained one, and it is where an autonomous vehicle stops being useful the moment it turns off the road."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Chris Brumett, Chief Product Officer at Terminal Industries, makes the point with an example everyone has now seen in person."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}></p>
                      <h2
                        id={"why-a-waymo-in-your-yard-is-not-the-same-problem"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"Why a Waymo in Your Yard Is Not the Same Problem"}
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            '"You go to a major city, you\'ll see them mapping around," Brumett says of autonomous taxis. "And you look at them and they can navigate on over streets, they can even navigate inside parking lots and back up and look for things. '
                          }
                        </span>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {
                              "But you've got to remember, they're not pulling a 53-foot trailer."
                            }
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {'"'}
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Two things separate the two situations, and both matter."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "The first is the vehicle. A tractor with a 53-foot trailer has a turning geometry, blind spot profile and reversing behaviour that has nothing in common with a passenger car. Backing a trailer into a dock at an angle is a skill human drivers take years to acquire."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            'The second is the environment, and it is the larger issue. "When you look at autonomous vehicles going from point A to point B, it\'s a more defined area," Brumett says. "Once they arrive at the facility, there\'s all kinds of variability."'
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Nobody has mapped your yard. There is no fleet of vehicles that has driven it ten thousand times to build a model of it. Trailer positions change hourly, staging areas move with volume, and the layout is not in any public dataset. The autonomous vehicle arrives at the gate having solved the well-mapped part of its journey and enters the part nobody has instrumented."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Brumett's framing for what that variability does to a plan is worth keeping: \"Everybody's got a plan until they get hit in the face. And you've got to look at these variability of processes as that punch in the face.\""
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}></p>
                      <h2
                        id={"what-actually-has-to-be-true-first"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"What Actually Has to Be True First"}
                      </h2>
                      <h3
                        id={
                          "the-fleet-is-not-homogeneous-and-will-not-be-for-a-long-time"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "The fleet is not homogeneous and will not be for a long time"
                        }
                      </h3>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "The scenario in the marketing material is a facility where every arriving vehicle is autonomous. That is not the transition anyone will actually live through."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "\"One of the factors that we all have to solve as an industry is how to handle heterogeneous fleets,\" Brumett says. \"It's easy when you have a fleet full of these autonomous trucks. Things would be fairly straightforward, you could figure it out. But the reality is that most operators aren't dealing with a homogeneous fleet. And that's where the tech has to be able to manage that kind of physical asset when you're not really sure what's going to come in and where it's coming from.\""
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "The number of distinct carriers serving a typical facility runs from single owner-operators with one power unit to major asset-owning fleets. Every one of them arrives with different equipment, different technology on board, and different levels of integration. A yard system that works only when every arrival is autonomous is a system that works never."
                          }
                        </span>
                      </p>
                      <h3
                        id={
                          "the-gate-has-to-be-able-to-talk-to-a-vehicle-not-a-person"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "The gate has to be able to talk to a vehicle, not a person"
                        }
                      </h3>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "This is the immediate, unavoidable blocker, and it arrives before any of the others."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Every element of a conventional gate assumes a human in the cab: someone to hand over documentation, answer a question, and be verbally directed to a destination. Remove the driver and there is no path through. The truck cannot present paperwork to a guard, and the guard has no way to tell it where to go."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            'Brumett describes the requirement as establishing a digital handshake at the point of entry: something that connects what is arriving to what the facility is expecting, without a person in the middle. That in turn depends on whether the documentation is genuinely machine-readable. "We have EDI transactions and APIs that can deliver the information," he says, "but is it detailed enough to provide the detail-level information that\'s needed to truly automate that process through, because there\'s no longer a human to hand another human a piece of paper."'
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Which is the whole problem in one sentence. The paper handover is load-bearing, and almost nobody has noticed."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}></p>
                      <h3
                        id={"sensing-and-bandwidth-come-before-robots"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"Sensing and bandwidth come before robots"}
                      </h3>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "The least glamorous prerequisite is the one that stops most deployments."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            'Brumett uses a domestic analogy. As you add streaming services and connected devices at home, the bandwidth requirement climbs. The same applies to a facility, except the consequences are operational rather than a buffering video. "In order to leverage technology, you have to look at: is your infrastructure there to support it?"'
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            'Autonomous movement in a yard requires devices that can communicate continuously, which requires coverage across an outdoor site that was never wired for it. It also requires sensing on infrastructure that has historically had none. "As you start thinking about autonomously moving things around the yard, you need to start thinking about how are my dock sensors, how are my restraints going to know when to release and when to lock."'
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Dock restraints are a good example of the gap. A human driver sees a light and knows whether it is safe. An autonomous system needs the restraint itself to report its state. That sensor does not exist at most facilities, and no amount of vehicle autonomy compensates for its absence."
                          }
                        </span>
                      </p>
                      <h3
                        id={
                          "robots-are-not-one-category-and-should-not-be-evaluated-as-one"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "Robots are not one category and should not be evaluated as one"
                        }
                      </h3>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Terminal's team is publicly split on this, which makes the discussion more useful than a vendor consensus would be."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Brumett is sceptical of the humanoid scenario specifically. \"I don't envision that there's going to be humanoids walking around the yard. I mean, the whole purpose of lights-out is that nobody's walking the yard, human or non-human.\""
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "That is a sharper argument than it first appears. If the objective is removing people from the yard, a machine shaped like a person is solving for a constraint you were trying to eliminate."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            'On drones his position is conditional rather than negative. "Everybody loves drones. You hear all kinds of stuff about drones, but are they realistic? It depends on the use case that you\'re trying to solve." His own experience using drones for RFID-based trailer location was mixed, because outdoor deployment carries constraints that indoor operation does not, and a single variation can invalidate a whole cycle count.'
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "His reframe is the useful part. Drones may be the wrong tool for locating trailers and the right one for a different question: \"Maybe locating your trailers isn't it, but maybe understanding is a human in the yard, or is something happening in the yard that shouldn't be, that might be a better use case.\""
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "The same logic extends to sensing generally. One camera network can serve several jobs at once. \"Why not at the same time be able to provide perimeter security, or be scanning the sides of the trailer and identifying, hey, that gash wasn't there when it came in. So obviously it happened here. Let's play back what happened to that trailer or around that trailer.\""
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "That is the argument for infrastructure over point solutions, and it is what makes the sensing investment defensible before any autonomous vehicle shows up."
                          }
                        </span>
                      </p>
                      <h2
                        id={"a-readiness-checklist"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"A Readiness Checklist"}
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Work through these in order. Each is a prerequisite for the next."
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
                                {
                                  "Can your gate complete a check-in with no human in the vehicle?"
                                }
                              </span>
                            </strong>
                            <span
                              style={{ color: "#000000" }}
                              data-v-1c7eea09={""}
                            >
                              {
                                " If not, this is the blocker, and it arrives first."
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
                                {
                                  "Is your inbound documentation machine-readable at the detail level, or only at the transaction level?"
                                }
                              </span>
                            </strong>
                            <span
                              style={{ color: "#000000" }}
                              data-v-1c7eea09={""}
                            >
                              {
                                " An EDI message confirming a shipment exists is not the same as the data needed to route a driverless vehicle to a specific door."
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
                                {
                                  "Do you have network coverage across the yard, not just the building?"
                                }
                              </span>
                            </strong>
                            <span
                              style={{ color: "#000000" }}
                              data-v-1c7eea09={""}
                            >
                              {
                                " Autonomous movement requires continuous communication outdoors."
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
                                {
                                  "Can your dock infrastructure report its own state?"
                                }
                              </span>
                            </strong>
                            <span
                              style={{ color: "#000000" }}
                              data-v-1c7eea09={""}
                            >
                              {
                                " Restraints, doors and levellers need to be queryable, not just visible."
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
                                {
                                  "Do you know where every trailer is right now, without a person walking the yard?"
                                }
                              </span>
                            </strong>
                            <span
                              style={{ color: "#000000" }}
                              data-v-1c7eea09={""}
                            >
                              {
                                " An autonomous vehicle cannot be routed to an asset the system cannot locate."
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
                                {
                                  "Can your system handle a mixed fleet indefinitely?"
                                }
                              </span>
                            </strong>
                            <span
                              style={{ color: "#000000" }}
                              data-v-1c7eea09={""}
                            >
                              {
                                " Not as a transition phase, but as the permanent condition."
                              }
                            </span>
                          </p>
                        </li>
                      </ol>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Most facilities fail at step one, which is useful, because step one is also the step with a clear return on its own regardless of what happens with autonomy."
                          }
                        </span>
                      </p>
                      <h2
                        id={"what-an-operating-system-has-to-do-about-it"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"What an Operating System Has to Do About It"}
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "The through-line of every prerequisite above is that they are integration problems, not vehicle problems. Something has to hold the context."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Brumett describes the requirement as a shift in what the software is for. \"It's no longer just managing the assets. It's more about understanding the context of all, not only the assets, but all of the other things that interact with the assets. And that's really the purpose of an operating system: to orchestrate those different components so that they know how to interact together, they understand the context of why they're here, but also enable them to work together.\""
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {"That is the case for a "}
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
                            " rather than a yard management system, and it is a more concrete argument than the usual positioning. A YMS records where assets are. What an autonomous arrival needs is something that can tell a machine what to do next, in a context that includes the dock, the shipment, the restraint and the six other vehicles currently moving."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "None of this requires buying autonomy today. It requires not building a gate process that will have to be replaced the first time a driverless truck arrives at it."
                          }
                        </span>
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
                            {
                              "Can autonomous trucks operate in a distribution yard today?"
                            }
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " Generally not without human intervention. Autonomous vehicles handle mapped point-to-point routes well, but yards are unmapped, highly variable environments, and conventional gate processes require a person in the cab to exchange documentation and receive direction. The vehicle is usually less of a constraint than the facility."
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
                              "Why is a yard harder for autonomy than public roads?"
                            }
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " Public roads are mapped, standardised and heavily driven, so autonomous systems have extensive models of them. Yards are unmapped, change layout continuously with volume, contain mixed traffic, and require manoeuvres such as reversing a 53-foot trailer into a dock that have no equivalent in passenger driving."
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
                              "What is a heterogeneous fleet and why does it matter?"
                            }
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " A heterogeneous fleet is the mix of different carriers, equipment types and technology levels arriving at a facility, from single owner-operators to large asset-owning fleets. It matters because facilities cannot assume uniform vehicle capability, so yard systems must handle autonomous and conventional arrivals simultaneously and indefinitely."
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
                              "What infrastructure does a yard need before autonomous vehicles?"
                            }
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " Network coverage across the outdoor yard rather than just the building, sensing on dock infrastructure such as restraints so equipment can report its own state, real-time trailer location so vehicles can be routed to assets, and a gate that can complete check-in without a human in the vehicle."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"Are drones useful in yard operations?"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " Conditionally. Using drones to locate trailers has proven difficult outdoors, where environmental variation can invalidate a cycle count. They may be better suited to security and situational awareness, such as detecting unauthorised presence, than to inventory tasks."
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
                            "Autonomy readiness and gate efficiency are the same project. The work that makes a facility ready for a driverless arrival is the work that reduces dwell today, which means it does not require a bet on a timeline."
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
                            " provides the orchestration layer described here, with "
                          }
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
                          {" and "}
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
                          {" as the foundational modules. See "}
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
                              {"the agentic AI yard"}
                            </Link>
                          </span>
                        </u>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {" for how the orchestration layer works, or "}
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
                                "/all-resources/lights-out-yard-episode-3-replay"
                              }
                              rel={"noopener noreferrer"}
                              data-v-1c7eea09={""}
                              prefetch={false}
                            >
                              {"Lights-Out Yard Episode 3"}
                            </Link>
                          </span>
                        </u>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " with Chris Brumett, Chief Product Officer at Terminal Industries."
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
