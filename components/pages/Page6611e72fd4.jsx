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
export default function Page6611e72fd4() {
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
                    {"blog • September 29, 2026"}
                  </div>
                  <h1
                    className={"post-header__title title-h1"}
                    data-v-01b90259={""}
                  >
                    {"You Digitized Your Gate. Why Is It Still a Bottleneck?"}
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
                      src={"/assets/39d4b122744e9b568790.webp"}
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
                            "You Digitized Your Gate. Why Is It Still a Bottleneck?"
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
                          {"Submitted Sep 28, 2026"}
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "A lot of yards have already done the obvious thing. The clipboard is gone, there is a tablet in the guard shack, arrivals are captured in software, and somebody can run a report at the end of the week."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "And the queue at the gate is the same length it was before."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "This is the most common disappointment in yard technology, and it is not a failure of execution. The project did exactly what it was scoped to do. The problem is that digitising a process and automating one are different things, and the first does not lead to the second on its own."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}></p>
                      <h2
                        id={"what-the-gate-is-actually-for"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"What the Gate Is Actually For"}
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "The gate is not a checkpoint. It is the first step of a yard's job, and its function is to establish who has arrived, why, and what should happen next, in a form that every downstream system and person can act on without asking again."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Judged against that definition, most gates fail for a specific reason: they establish the information and then do nothing with it."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Ryan Arroyo, SVP of Product and Engineering at Terminal Industries, describes the pattern. \"A truck arrives. They sign in with a paper and clipboard. And then that is just a step in this driver's process. But that doesn't help them achieve their goal. They're just going through this threshold. They check in. And then usually the answer is, well, now go to the next office.\""
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "His summary of the driver's experience is the line worth remembering: "
                          }
                        </span>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {
                              "\"It's like the waiting room goes to the next waiting room. You didn't actually get closer, but somehow you've just spent time filling paperwork out.\""
                            }
                          </span>
                        </strong>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Replacing the clipboard with a tablet does not change that. The driver still checks in, still gets sent somewhere else, and still waits. The paperwork is faster and the outcome is identical."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}></p>
                      <h2
                        id={"why-digitization-alone-does-not-reduce-dwell"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"Why Digitization Alone Does Not Reduce Dwell"}
                      </h2>
                      <h3
                        id={"the-software-still-has-to-be-told-what-happened"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"The software still has to be told what happened"}
                      </h3>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Here is the mechanism, and once it is visible it is hard to unsee."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            '"The majority of what is available today is documenting what has already happened," Arroyo says. "A truck moves through a gate, something happens, you have to remember to update the software to let the software know that the truck went by. And so it\'s not helping your operation. You\'ve just added another task for your team to do: check in the truck, and then go to the software and check in the truck."'
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            'The conclusion follows directly. "It\'s just a digitisation process that adds work versus taking work away."'
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "The test is simple. If someone at your facility performs an action and then separately records that action, you have added a step, not removed one. The record has value for reporting. It has no effect on throughput, because it is created after the throughput already happened."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}></p>
                      <h3
                        id={"the-check-in-does-not-trigger-anything"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"The check-in does not trigger anything"}
                      </h3>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "A gate that captures data but does not initiate the next action has effectively stored it."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            'What the same event could do instead is start the work. The arrival is matched to a shipment, the driver is routed to a specific destination rather than to another office, the dock is notified, the dispatcher\'s queue updates. "The gate goes straight, tells the driver to go exactly to where they need to go," as Arroyo describes it, so the gate becomes "really step one of a process versus just an independent process that actually doesn\'t help them achieve their goals."'
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "That is the difference between a digitised gate and an automated one, and it is not a feature difference. It is whether the gate is connected to anything."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}></p>
                      <h3
                        id={
                          "the-knowledge-holding-it-together-is-in-someone-s-head"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "The knowledge holding it together is in someone's head"
                        }
                      </h3>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "There is a quieter problem underneath, which shows up when the person who knows how the yard works is unavailable."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "\"It was this concept of sort of tribal knowledge,\" Arroyo says. \"I've been in so many yards where you ask them what is their process, or how do you know how to do things? And it's just this intrinsic: I just know. It's my yard, they're my trucks, I just know them.\""
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            'He is not dismissive of it. After twenty years at one site, that knowledge is real and usually better than any documented procedure. The problem is what it is attached to. "That\'s maybe okay if you work there for twenty years and maybe you do have this intrinsic sense. But if that person leaves, how do you transfer that?"'
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Gate and yard roles carry high turnover. A process that lives in an individual's judgment is not a process, it is a dependency, and digitising the paperwork around it does nothing to capture it."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}></p>
                      <h2
                        id={
                          "how-to-tell-what-is-actually-fixed-and-what-is-not"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"How to Tell What Is Actually Fixed and What Is Not"}
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Terminal's team frames this using first-principles thinking, which is more useful here than it sounds because it forces a specific separation."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "The method sorts every element of an operation into three buckets. "
                          }
                        </span>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"Hard constraints"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {" cannot be violated: physics, time, law. "}
                        </span>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"Soft constraints"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " can be changed but at a cost: labour, equipment, integration effort. "
                          }
                        </span>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"Assumptions"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " are things everyone treats as fixed that are simply inherited."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            '"What assumptions have been made in the past that are maybe invalid now?" Arroyo asks. "You always need a gate guard. You need a gate guard standing there. That was an assumption based on different thinking. And so now we say, well, maybe not."'
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Josh Kivenko, Terminal's Chief Marketing Officer, delivers the conclusion as a line the industry could stand to hear more often: "
                          }
                        </span>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {'"Clipboards are not a hard constraint."'}
                          </span>
                        </strong>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Neither, on inspection, are most of the things a yard treats as immovable. A second check-in office is not a hard constraint. A physical stop at the gate is not necessarily a hard constraint, because the check-in could happen in the parking lot, on approach, or on the way to the warehouse. Safety, physics and law are hard constraints. Almost everything else is inherited practice with a cost attached."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}></p>
                      <h2
                        id={
                          "five-questions-that-separate-digitised-from-automated"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "Five Questions That Separate Digitised From Automated"
                        }
                      </h2>
                      <ol order={"1"} data-v-1c7eea09={""}>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <strong data-v-1c7eea09={""}>
                              <span
                                style={{ color: "#000000" }}
                                data-v-1c7eea09={""}
                              >
                                {
                                  "When a truck checks in, does anything happen automatically?"
                                }
                              </span>
                            </strong>
                            <span
                              style={{ color: "#000000" }}
                              data-v-1c7eea09={""}
                            >
                              {
                                " If the answer is that a record is created and a person then reads it, the gate is a form."
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
                                {"Does the driver go to one place or two?"}
                              </span>
                            </strong>
                            <span
                              style={{ color: "#000000" }}
                              data-v-1c7eea09={""}
                            >
                              {
                                " A second office after the gate is the clearest single indicator that the check-in did not resolve anything."
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
                                  "Is anyone entering information the system could have captured?"
                                }
                              </span>
                            </strong>
                            <span
                              style={{ color: "#000000" }}
                              data-v-1c7eea09={""}
                            >
                              {
                                " Every field a human retypes is a field the sensors, integrations or documents already contain."
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
                                  "If the most experienced person at the site left tomorrow, what would stop working?"
                                }
                              </span>
                            </strong>
                            <span
                              style={{ color: "#000000" }}
                              data-v-1c7eea09={""}
                            >
                              {
                                " Whatever the answer is, that is currently undocumented and unautomated regardless of what software you own."
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
                                  "Which of your gate steps are hard constraints?"
                                }
                              </span>
                            </strong>
                            <span
                              style={{ color: "#000000" }}
                              data-v-1c7eea09={""}
                            >
                              {
                                " Sort them honestly. Most teams find two or three, and are surprised how much of the rest is inheritance."
                              }
                            </span>
                          </p>
                        </li>
                      </ol>
                      <p data-v-1c7eea09={""}></p>
                      <h2
                        id={"the-autonomy-question-nobody-is-ready-for"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"The Autonomy Question Nobody Is Ready For"}
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "There is a version of this problem arriving on a timeline most operators have not planned for."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            'Kivenko asks it directly: "How does an autonomous truck deal with a manned gate?"'
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "There is no good answer. Every part of the current gate process assumes a person in the cab who can hand over paperwork, answer a question, and be directed verbally. Remove the driver and the process has no path. The truck cannot present documentation to a guard, and the guard cannot tell it where to go."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Autonomous trucking arrives at facility gates before it arrives anywhere else in a yard, because that is the first thing a truck encounters. Operators who have digitised their gate but not automated it have built a process that specifically requires a human in the vehicle, at exactly the moment the industry is working to remove one."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "This is not an argument for buying anything today. It is an argument for making sure that the gate project you scope this year does not have a human dependency baked into its design."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}></p>
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
                              "Why didn't automating my gate check-in reduce wait times?"
                            }
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " Most likely because the check-in captures information but does not initiate the next action. If a driver still has to proceed to a second office, or a person has to read the record and then act, the gate has been digitised rather than automated and throughput will not change."
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
                              "What is the difference between a digitised gate and an automated gate?"
                            }
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " A digitised gate replaces paper with software but still requires a person to record what happened and another to act on it. An automated gate captures the arrival from sensors and integrations without manual entry, and the arrival itself triggers the next step: routing, dock notification, dispatch update."
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
                              "Why is tribal knowledge a problem in yard operations?"
                            }
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " Because it is a dependency rather than a process. Experienced yard staff hold accurate operational knowledge intrinsically, but it is not documented, not transferable, and is lost when they leave. Gate and yard roles have high turnover, so the knowledge holding the operation together is regularly at risk."
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
                              "What is first-principles thinking applied to a yard?"
                            }
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " Sorting every element of the operation into hard constraints that cannot be violated (physics, time, law), soft constraints that can be changed at a cost (labour, equipment, integration), and assumptions that are simply inherited practice. Most gate processes contain far more assumptions than operators expect."
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
                              "How will autonomous trucks interact with a staffed gate?"
                            }
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " They cannot, in the current model. A manned gate assumes a person in the cab to present documentation and receive verbal direction. Any facility expecting autonomous arrivals needs a gate process that does not depend on a human in the vehicle."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}></p>
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
                            "If the clipboard is gone and the queue is not, the project digitised the record rather than the work. Start by asking what the check-in triggers, because if the answer is nothing, no additional data capture will help."
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
                          {
                            " uses computer vision to capture arrivals without manual entry, and the arrival initiates the "
                          }
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
                              {"mission"}
                            </Link>
                          </span>
                        </u>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {" rather than filing a record. See "}
                        </span>
                        <u data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#0000EE" }}
                            data-v-1c7eea09={""}
                          >
                            <Link
                              href={"/terminal-at-the-gate"}
                              rel={"noopener noreferrer"}
                              data-v-1c7eea09={""}
                              prefetch={false}
                            >
                              {"what Terminal does at the gate"}
                            </Link>
                          </span>
                        </u>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {", estimate the impact with the "}
                        </span>
                        <u data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#0000EE" }}
                            data-v-1c7eea09={""}
                          >
                            <Link
                              href={"/yard-efficiency-calculator"}
                              rel={"noopener noreferrer"}
                              data-v-1c7eea09={""}
                              prefetch={false}
                            >
                              {"Yard Efficiency Calculator"}
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
                                "/all-resources/Lights-out-yard-episode-1-replay"
                              }
                              rel={"noopener noreferrer"}
                              data-v-1c7eea09={""}
                              prefetch={false}
                            >
                              {"Lights-Out Yard Episode 1"}
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
