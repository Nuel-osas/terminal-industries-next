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
export default function Page6ce7e0e443() {
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
                    {"blog • September 21, 2026"}
                  </div>
                  <h1
                    className={"post-header__title title-h1"}
                    data-v-01b90259={""}
                  >
                    {
                      "Computer Vision in the Yard Is a Physics Problem, Not an AI Problem"
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
                      src={"/assets/9dd45758b34668e56f56.webp"}
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
                            "Computer Vision in the Yard Is a Physics Problem, Not an AI Problem"
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
                          {"Submitted Sep 21, 2026"}
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Ask a vendor how their yard computer vision works and you will hear about models. Detection accuracy, training data, the architecture behind the plate read. All of it real, and none of it the reason deployments fail."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "The models are largely a solved problem. Recognising a trailer, reading a container ID, classifying a vehicle type: this is well-trodden ground and has been for years. What separates a system that works at one site from one that works at forty is almost never the machine learning."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Chris Duncan, VP of Engineering at Terminal Industries, puts it plainly: "
                          }
                        </span>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {
                              '"The vision side is under control. The physics is the hardest part."'
                            }
                          </span>
                        </strong>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "That is an unusual thing for a technology vendor to say out loud, and it is the most useful thing anyone can tell an operator evaluating this category."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}></p>
                      <h2
                        id={"what-the-physics-actually-means"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {'What "the Physics" Actually Means'}
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "In yard computer vision, the physics is everything about the real-world installation that determines whether a model can perform: where a camera can physically be mounted, how far it sits from the object it must read, what angle that produces, what power and network are available at that position, and what weather does to the lens between visits."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Every one of those is site-specific, none of them is improved by a better model, and collectively they decide whether a deployment succeeds."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Duncan describes the range operators should expect. \"You can go to one site where the road layouts are perfect. You can put a camera in a perfect position where you've got a repeatable distance to your object, you've got a perfect field of view. You go to the next site where you can only put a camera on a bend and the distance is double or triple.\""
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            'That second site is not a harder version of the first. It is a different engineering problem. "At that point you need maybe better sensors, better cameras, higher resolution, which means higher network bandwidth that you require. And yeah, that\'s the headache."'
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            'Then there is weather, which is not an edge case. "Before you get weather," Duncan says, "and how do you then assign a maintenance task when your lens is covered in snow. They\'re the biggest problems in terms of scaling a computer vision system in this domain."'
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "A lens covered in snow is not a model failure. It is an operations failure, and a system that cannot detect and dispatch against it will silently degrade until someone notices the data stopped making sense."
                          }
                        </span>
                      </p>
                      <h2
                        id={"why-most-yard-ai-demos-do-not-survive-deployment"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"Why Most Yard AI Demos Do Not Survive Deployment"}
                      </h2>
                      <h3
                        id={"the-gap-between-a-demo-and-an-roi-is-enormous"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"The gap between a demo and an ROI is enormous"}
                      </h3>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Duncan is candid about the state of the category, in a way that is worth quoting at length because it comes from someone building in it."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "\"The challenge is taking core technology and taking that next step into creating real-world applications that provide meaningful ROI for customers, that aren't just gimmicks. Because a lot of this stuff can feel a bit gimmicky. And that's the, it's a much bigger challenge than people think.\""
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "A controlled demo removes precisely the variables that break production systems. It is filmed at a good site, in good weather, at a good angle, on a good day. None of that is dishonest. It is just not evidence."
                          }
                        </span>
                      </p>
                      <h3
                        id={
                          "models-degrade-even-when-nothing-appears-to-change"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"Models degrade even when nothing appears to change"}
                      </h3>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "There is a specific failure mode that operators rarely ask about and should."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "\"There's a concept called domain drift,\" Duncan explains, \"and a lot of that actually is physics as well. But we have some very good closed-loop ML ops systems that deal with domain drift. What is that, he asks. That's, we can detect if our models aren't performing well. And actually most of the time our models aren't performing well because of the physics.\""
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Domain drift is what happens when the world the model sees stops matching the world it was trained on. Vehicle types change. Carriers refresh their fleets and the markings change. New identifier formats appear. A camera shifts two degrees after a maintenance visit. Nothing broke, and accuracy falls anyway."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            'The question to ask a vendor is therefore not "how accurate is your model" but "how do you know when it stops being accurate, and what happens then". A system without closed-loop monitoring will not tell you it is failing. It will simply be wrong, quietly, until an operator loses trust in it.'
                          }
                        </span>
                      </p>
                      <h3
                        id={
                          "edge-or-cloud-is-a-site-by-site-decision-not-a-product-decision"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "Edge or cloud is a site-by-site decision, not a product decision"
                        }
                      </h3>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Where the processing happens is the other variable operators are rarely told is variable."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            'Duncan\'s summary: "Most mature architectures are usually hybrid." Neither wins outright, and the right answer depends on the deployment.'
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            'Edge processing gives lower latency, because inference happens next to the action, and better offline resilience, since decisions continue when the connection drops. Cloud gives elasticity, easier upgrades and centralised orchestration, plus the ability to run much larger models. On the edge, Duncan says, "you have to box clever with optimisation and squeeze as much out of it as possible."'
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "The constraint that usually decides it is uplink. \"We would like to do as much in the cloud as possible, but that means you need superior networking, and you need 24/7 uninterrupted upload. If you don't have that, what do you do? Well then you have to analyse what is your uplink. Is it 3G, 4G, 5G, Starlink. If it's something really low bandwidth, then your hand is forced.\""
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "At which point the architecture has to move toward the camera: an embedded device on site, compressing what it sends while still delivering the capability the customer bought."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "The practical question for an operator is whether that split can be adjusted per site. Duncan's answer is yes, provided it was designed for. \"If you've a well-architected system from the off, then you should be able to bisect your pipeline and just shift things around as you like.\""
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Ask any vendor whether their edge-cloud split is fixed. If it is, every site you own has to meet the requirements of their architecture rather than the other way round."
                          }
                        </span>
                      </p>
                      <h2
                        id={"why-you-cannot-just-point-an-llm-at-the-yard"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"Why You Cannot Just Point an LLM at the Yard"}
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "It is the obvious question, and Duncan raises it before anyone else can."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "\"People, if they don't ask the question, they're thinking it: why don't we just hook this all up to ChatGPT?\""
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "His answer is a distinction between two different classes of system. Large language and vision-language models are reasoning systems. What runs at a gate is a perception system: what is in the image, where is it, what are the bounding box coordinates, what type of object is it, is that a trailer or a container, what is the container ID."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Those are narrow, high-volume, low-latency questions, and a purpose-trained model answers them faster, cheaper and more reliably than a general one. Reasoning models have their place further up the stack, but not in the loop that decides whether a gate arm lifts."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            'Underneath sits the constraint that governs the whole category. "Most operational or real-world AI is constrained by economics," Duncan says. "There is no free lunch in computer vision applications."'
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Generalised models cost more per inference. Customised models cost more to build and maintain. Quality, latency and operating cost pull against each other, and the job is landing somewhere on that triangle that still produces ROI. A vendor who claims no trade-off is either not running at volume or not counting the bill."
                          }
                        </span>
                      </p>
                      <h2
                        id={
                          "a-diagnostic-questions-to-ask-a-yard-computer-vision-vendor"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "A Diagnostic: Questions to Ask a Yard Computer Vision Vendor"
                        }
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "These are the questions that separate a production system from a pilot."
                          }
                        </span>
                      </p>
                      <ul data-v-1c7eea09={""}>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <span
                              style={{ color: "#000000" }}
                              data-v-1c7eea09={""}
                            >
                              {
                                "At how many of my sites can you achieve your stated accuracy, and what specifically disqualifies the others?"
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
                                "What is your minimum viable camera position, and what happens at a site where I can only mount on a bend?"
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
                                "How do you detect that a model has started underperforming, and how quickly?"
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
                                "What is the process when a lens is obscured by snow, dirt or glare? Is a maintenance task raised automatically?"
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
                                "Is your edge and cloud split fixed, or configurable per site based on my available uplink?"
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
                                "What uplink do you require at minimum, and what capability degrades if I cannot provide it?"
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
                                "Which parts of the pipeline use purpose-trained models and which use general-purpose ones, and why?"
                              }
                            </span>
                          </p>
                        </li>
                      </ul>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "If a vendor answers all of these in terms of model accuracy, they have not deployed at scale yet."
                          }
                        </span>
                      </p>
                      <h2
                        id={"what-this-means-for-buyers"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"What This Means for Buyers"}
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "There is a broader point buried in the engineering detail, and it goes to the difference between AI that is claimed and AI that is running."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Anyone can integrate a vision API. What is hard, expensive and slow is the unglamorous layer around it: site surveys, mounting strategy, power and connectivity, model monitoring, retraining pipelines, maintenance dispatch when a lens is dirty. That layer is invisible in a demo and it is the entire difference between a system that works on day one and one that still works in year three."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "It is also, usefully, difficult to fake. A vendor who can describe their domain drift detection in detail has one. A vendor who cannot will discover the problem at your site."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {"Terminal's computer vision runs the "}
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
                              href={"/modules/load-verification"}
                              rel={"noopener noreferrer"}
                              data-v-1c7eea09={""}
                              prefetch={false}
                            >
                              {"load verification"}
                            </Link>
                          </span>
                        </u>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {" modules of its "}
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
                            ", and the company is a featured vendor in the 2025 Gartner Market Guide for Yard Management. For the applied version of the technology described here, see "
                          }
                        </span>
                        <u data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#0000EE" }}
                            data-v-1c7eea09={""}
                          >
                            <Link
                              href={
                                "/all-resources/ocr-reads-the-plate-computer-vision-runs-the-yard"
                              }
                              rel={"noopener noreferrer"}
                              data-v-1c7eea09={""}
                              prefetch={false}
                            >
                              {
                                "how OCR reads the plate and computer vision runs the yard"
                              }
                            </Link>
                          </span>
                        </u>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {"."}
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
                            {"Why is computer vision hard in a yard?"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " Because the constraints are physical rather than algorithmic. Camera position, distance to the object, field of view, available power and network, and weather all vary site to site, and none of them is improved by a better model. Detection itself is largely solved. Installing it reliably across dozens of dissimilar sites is not."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"What is domain drift in computer vision?"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " Domain drift is the gradual decline in model accuracy that occurs when the real-world conditions a model sees stop matching those it was trained on: new vehicle types, changed carrier markings, different identifier formats, or a camera that has shifted position. It requires closed-loop monitoring to detect, because the system does not otherwise announce that it has become unreliable."
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
                              "Should yard computer vision run at the edge or in the cloud?"
                            }
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " Most mature architectures are hybrid. Edge processing gives lower latency and offline resilience; cloud gives elasticity, easier upgrades and the ability to run larger models. The deciding constraint is usually available uplink bandwidth at the site, so the split should be configurable per location rather than fixed by the vendor."
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
                              "Can you use ChatGPT or an LLM for yard computer vision?"
                            }
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " Not for the perception layer. Language and vision-language models are reasoning systems, whereas identifying what is in an image, where it is, and what its identifier reads are narrow perception tasks that purpose-trained models perform faster, more cheaply and more reliably. Reasoning models have a role higher in the stack, not in the real-time decision loop."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"What should I ask a yard computer vision vendor?"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " How many of your specific sites they can achieve stated accuracy at and what disqualifies the rest, how they detect model underperformance, what happens when a lens is obscured, and whether their edge-cloud split is configurable to your available connectivity."
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
                            "If you are evaluating yard computer vision, weight the site survey more heavily than the accuracy claim. The models will be comparable. The deployment engineering will not."
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
                          {" runs computer vision across "}
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
                              {"gate"}
                            </Link>
                          </span>
                        </u>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {" and yard operations as part of one platform. "}
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
                              {"Explore the platform"}
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
                                "/all-resources/lights-out-yard-ep4-lights-out-cameras-action-"
                              }
                              rel={"noopener noreferrer"}
                              data-v-1c7eea09={""}
                              prefetch={false}
                            >
                              {
                                'Lights-Out Yard Episode 4, "Lights-Out, Cameras, Action!"'
                              }
                            </Link>
                          </span>
                        </u>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " with Chris Duncan, VP of Engineering at Terminal Industries."
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
