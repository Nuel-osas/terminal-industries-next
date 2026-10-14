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
export default function Page2ec2e6a509() {
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
                    {"blog • November 18, 2025"}
                  </div>
                  <h1
                    className={"post-header__title title-h1"}
                    data-v-01b90259={""}
                  >
                    {
                      "Comparing Cloud-Based vs. On-Premise Yard Management Software Solutions"
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
                      src={"/assets/d9b42dc9602b2dc6fba3.webp"}
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
                        src={"/assets/6b87eedc834f9fe38395.webp"}
                        data-v-dd1fd95f={""}
                      />
                      <div className={"author-details"} data-v-dd1fd95f={""}>
                        <p
                          className={"author-name"}
                          itemprop={"name"}
                          data-v-dd1fd95f={""}
                        >
                          {"Terminal Industries Staff"}
                        </p>
                        <p
                          className={"author-role"}
                          itemprop={"jobTitle"}
                          data-v-dd1fd95f={""}
                        >
                          {"Terminal Team"}
                        </p>
                      </div>
                    </div>
                    <p
                      className={"author-bio"}
                      itemprop={"description"}
                      data-v-dd1fd95f={""}
                    >
                      {
                        "Coming together in collaboration, the staff of Terminal Industries unites diverse expertise in logistics, technology, and operations to deliver forward-thinking insights. As a collective, they are leaders in shaping the future of the yard with innovation and measurable impact. "
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
                            "Comparing Cloud-Based vs. On-Premise Yard Management Software Solutions"
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
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"Yard management software"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " has become an essential tool in modern supply chain logistics, turning disorganized trailer yards into well-coordinated operations. As the manager of this crucial area where incoming and outgoing freight meet, you know that any lack of visibility can lead to wasted time, increased costs, and unhappy customers."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "The choice you make regarding the deployment model for your "
                          }
                        </span>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"yard management software"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " goes beyond just technical aspects. It is a strategic decision that will affect how quickly you can implement the system, how flexible your operations can be, and how scalable it will be in the future. If you make the wrong choice, you may end up with unnecessary complications, unexpected expenses, or limited potential for growth."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {"When it comes to "}
                        </span>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"logistics technology"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {", there are two main options: "}
                        </span>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"cloud-based vs on-premise"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " solutions. These two approaches are fundamentally different. Cloud-based systems allow for quick implementation and automatic updates through infrastructure managed by the vendor. On the other hand, on-premise solutions give you complete control over your data and customization options. Each model has its own specific benefits for yard operations, such as gate automation and asset tracking."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "In this comparison, we will explore the practical effects of choosing between cloud-based and on-premise yard management software solutions. Our goal is to help you make a well-informed decision that aligns with your operational requirements."
                          }
                        </span>
                      </p>
                      <h2
                        id={"understanding-yard-management-software-yms"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"Understanding Yard Management Software (YMS)"}
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Yard Management Software (YMS) is a crucial tool for logistics facilities. It helps manage the movement of trailers, containers, and equipment in your yard. Instead of chaotic operations, YMS brings order and visibility to your yard. You can easily track your assets, know their locations, and plan the next steps."
                          }
                        </span>
                      </p>
                      <h3
                        id={"the-evolution-of-yard-management-software"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"The Evolution of Yard Management Software"}
                      </h3>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "In the past, YMS solutions mainly focused on basic tracking and manual processes. However, modern platforms like "
                          }
                        </span>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {
                              "Terminal Industries' AI-native Yard Operating System™"
                            }
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " are revolutionizing yard operations. This new approach combines computer vision technology with real-time data infrastructure to achieve "
                          }
                        </span>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"99.5% data accuracy"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " without the need for manual scans or GPS devices on every asset."
                          }
                        </span>
                      </p>
                      <h3
                        id={"how-yms-improves-yard-efficiency"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"How YMS Improves Yard Efficiency"}
                      </h3>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Yard efficiency improves through three key capabilities:"
                          }
                        </span>
                      </p>
                      <ul data-v-1c7eea09={""}>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <strong data-v-1c7eea09={""}>
                              <span
                                style={{ color: "#000000" }}
                                data-v-1c7eea09={""}
                              >
                                {"Automation"}
                              </span>
                            </strong>
                            <span
                              style={{ color: "#000000" }}
                              data-v-1c7eea09={""}
                            >
                              {
                                ": Terminal Industries' SmartYard™ enables automated gate processes that reduce transaction times by over 85%, allowing your team to process more vehicles with fewer errors."
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
                                {"Digitization"}
                              </span>
                            </strong>
                            <span
                              style={{ color: "#000000" }}
                              data-v-1c7eea09={""}
                            >
                              {
                                ": You gain instant visibility into asset locations, zone capacity, and movement history without walking the yard or relying on outdated spreadsheets."
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
                                {"Real-time data"}
                              </span>
                            </strong>
                            <span
                              style={{ color: "#000000" }}
                              data-v-1c7eea09={""}
                            >
                              {
                                ": When your system knows which trailers need to move, where they're going, and what's blocking them, you can orchestrate yard operations that prevent bottlenecks before they form."
                              }
                            </span>
                          </p>
                        </li>
                      </ul>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "This level of operational insight drives throughput improvements exceeding 50% in many facilities."
                          }
                        </span>
                      </p>
                      <h2
                        id={"deployment-models-for-yard-management-software"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"Deployment Models for Yard Management Software"}
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "When evaluating deployment options for your yard management system, you'll encounter two primary software hosting models that fundamentally shape how you implement and operate your solution."
                          }
                        </span>
                      </p>
                      <h3
                        id={"1-cloud-based-yms-solutions"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"1. Cloud-Based YMS Solutions"}
                      </h3>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Cloud-based YMS platforms run on vendor-managed servers accessible through the internet. You access the software through web browsers or mobile applications without installing hardware or maintaining physical infrastructure at your facility. The vendor handles all server maintenance, security updates, and system upgrades on their end. Your data resides in secure data centers managed by the software provider, with automatic backups and redundancy built into the service model. Terminal's Yard Operating System™ exemplifies this approach with its cloud-native architecture, enabling rapid deployment through the Terminal-in-a-Camera™ hardware kit that requires minimal on-site installation."
                          }
                        </span>
                      </p>
                      <h3
                        id={"2-on-premise-yms-solutions"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"2. On-Premise YMS Solutions"}
                      </h3>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "On-premise systems require you to install and maintain software on servers located at your facilities. You purchase licenses upfront and assume responsibility for hardware procurement, system configuration, and ongoing maintenance. Your IT team manages updates, security patches, and data backups. The software and all operational data remain within your physical infrastructure, giving you direct control over every aspect of the system environment."
                          }
                        </span>
                      </p>
                      <h3
                        id={"key-differences-in-operation"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"Key Differences in Operation"}
                      </h3>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "The hosting model determines who controls your infrastructure. Cloud solutions shift maintenance responsibilities to the vendor, while on-premise setups require dedicated IT resources. Accessibility varies significantly—cloud platforms enable remote access from any internet-connected device, whereas on-premise systems typically restrict access to your local network unless you configure VPN connections. Control over customization and data storage represents another critical distinction, with on-premise solutions offering deeper system-level modifications at the cost of increased complexity."
                          }
                        </span>
                      </p>
                      <h2
                        id={
                          "advantages-of-cloud-based-yard-management-software"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"Advantages of Cloud-Based Yard Management Software"}
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Cloud-based yard management software delivers immediate value through rapid deployment capabilities that eliminate lengthy installation processes. You can have your system operational within hours rather than weeks or months. Terminal's Yard Operating System™ exemplifies this approach with its Terminal-in-a-Camera™ hardware kit—a plug-and-play unit that requires no trenching or extensive infrastructure modifications. This vendor-managed infrastructure means you bypass the traditional IT burden of server procurement, network configuration, and hardware maintenance."
                          }
                        </span>
                      </p>
                      <ol order={"1"} data-v-1c7eea09={""}>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}></p>
                        </li>
                      </ol>
                      <h3
                        id={"scalability"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"Scalability"}
                      </h3>
                      <h3
                        id={
                          "scalability-becomes-a-natural-extension-of-your-operations-rather-than-a-capital-intensive-project-when-you-need-to-expand-from-five-warehouses-to-fifteen-cloud-based-solutions-grow-with-you-you-add-new-locations-to-your-network-without-purchasing-additional-servers-or-hiring-specialized-it-staff-the-subscription-pricing-model-transforms-major-capital-expenditures-into-predictable-operational-expenses-making-budget-planning-straightforward-and-eliminating-the-financial-shock-of-hardware-refresh-cycles"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "Scalability becomes a natural extension of your operations rather than a capital-intensive project. When you need to expand from five warehouses to fifteen, cloud-based solutions grow with you. You add new locations to your network without purchasing additional servers or hiring specialized IT staff. The subscription pricing model transforms major capital expenditures into predictable operational expenses, making budget planning straightforward and eliminating the financial shock of hardware refresh cycles."
                        }
                      </h3>
                      <h3
                        id={"2-multi-site-management"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"2. Multi-site management"}
                      </h3>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Multi-site management reaches new levels of efficiency through unified dashboards that provide single-pane-of-glass visibility across your entire yard network. You monitor asset movements, gate activities, and operational metrics from any location with internet access. Real-time remote access means your logistics team coordinates activities across multiple facilities simultaneously, responding to disruptions or opportunities as they emerge."
                          }
                        </span>
                      </p>
                      <h3
                        id={"3-integration-capabilities"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"3.Integration Capabilities "}
                      </h3>
                      <h3
                        id={""}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      ></h3>
                      <h3
                        id={
                          "integration-capabilities-set-cloud-based-systems-apart-in-today-s-interconnected-supply-chain-environment-you-connect-seamlessly-with-your-existing-erp-tms-and-iot-devices-creating-end-to-end-visibility-from-gate-to-dock-these-integrations-happen-through-modern-apis-rather-than-custom-coding-projects-automatic-updates-arrive-without-downtime-or-manual-intervention-ensuring-you-always-operate-with-the-latest-features-security-patches-and-performance-improvements"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "Integration capabilities set cloud-based systems apart in today's interconnected supply chain environment. You connect seamlessly with your existing ERP, TMS, and IoT devices, creating end-to-end visibility from gate to dock. These integrations happen through modern APIs rather than custom coding projects. Automatic updates arrive without downtime or manual intervention, ensuring you always operate with the latest features, security patches, and performance improvements."
                        }
                      </h3>
                      <h2
                        id={
                          "benefits-of-on-premise-yard-management-software-solutions"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "Benefits of On-Premise Yard Management Software Solutions"
                        }
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {"On-premise yard management software delivers "}
                        </span>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"data control"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " that appeals to organizations with stringent security requirements or regulatory constraints. You maintain complete ownership of your data infrastructure, storing sensitive information about shipments, carriers, and yard operations within your own servers. This level of control becomes particularly valuable when you're handling proprietary logistics processes or operating in industries with strict data residency requirements."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"Customization"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " reaches its full potential with on-premise deployments. You can modify the software architecture to align precisely with your unique yard workflows, integrate deeply with legacy systems, and build custom modules that address specific operational challenges. Organizations with complex yard operations—such as those managing specialized equipment or handling hazardous materials—benefit from this flexibility to create tailored solutions that cloud-based systems may not accommodate."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {"The "}
                        </span>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"offline functionality"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " of on-premise systems ensures your yard operations continue without interruption during internet outages or connectivity issues. Your gate processes, asset tracking, and yard management workflows remain operational regardless of external network status. This reliability proves critical for facilities in remote locations with unreliable internet infrastructure or operations that cannot afford any downtime due to connectivity problems."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "You also gain predictable long-term costs after the initial capital investment, avoiding ongoing subscription fees that can escalate as your operations scale."
                          }
                        </span>
                      </p>
                      <h2
                        id={
                          "key-differentiators-a-case-study-on-terminal-s-ai-native-yard-operating-system"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "Key Differentiators: A Case Study on Terminal's AI-Native Yard Operating System™"
                        }
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Terminal's Yard Operating System™ demonstrates how cloud-based deployment unlocks capabilities that traditional on-premise solutions struggle to match. The platform's AI vision technology delivers 99.5% data accuracy through proprietary computer vision capabilities automatically tracking every asset movement without requiring manual scans or GPS devices."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {"The system's "}
                        </span>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"SmartYard™ workflows"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " transform gate operations from manual bottlenecks into automated processes. You can expect:"
                          }
                        </span>
                      </p>
                      <ul data-v-1c7eea09={""}>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <strong data-v-1c7eea09={""}>
                              <span
                                style={{ color: "#000000" }}
                                data-v-1c7eea09={""}
                              >
                                {"85% reduction in gate transaction time"}
                              </span>
                            </strong>
                            <span
                              style={{ color: "#000000" }}
                              data-v-1c7eea09={""}
                            >
                              {
                                " through automated check-in and check-out workflows"
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
                                {"75% decrease in processing errors"}
                              </span>
                            </strong>
                            <span
                              style={{ color: "#000000" }}
                              data-v-1c7eea09={""}
                            >
                              {" by eliminating manual data entry"}
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
                                {"50%+ throughput improvement"}
                              </span>
                            </strong>
                            <span
                              style={{ color: "#000000" }}
                              data-v-1c7eea09={""}
                            >
                              {
                                " via comprehensive yard activity automation and orchestration"
                              }
                            </span>
                          </p>
                        </li>
                      </ul>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Terminal's Terminal-in-a-Camera™ hardware kit exemplifies cloud-native advantages—you deploy modular units in hours without trenching or extensive infrastructure modifications. The AI-powered computer vision continuously monitors yard activity, providing real-time operational insights that feed directly into intelligent decision-making systems."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "The platform's Advanced Yard capabilities extend beyond basic tracking. You gain automated damage detection, ISR compliance monitoring, and agentic AI workflows that reduce asset search time by 90% and driver detention fees by 12%. These AI-driven features operate seamlessly because the cloud infrastructure processes massive data streams in real-time, something on-premise systems require significant hardware investments to replicate."
                          }
                        </span>
                      </p>
                      <h2
                        id={
                          "cost-considerations-between-cloud-based-and-on-premise-solutions"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "Cost Considerations Between Cloud-Based and On-Premise Solutions"
                        }
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "The total cost of ownership (TCO) reveals stark differences when comparing cloud-based vs. on-premise yard management software solutions. Your financial commitment extends far beyond the initial purchase decision."
                          }
                        </span>
                      </p>
                      <h3
                        id={"initial-investment-structure"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"Initial Investment Structure"}
                      </h3>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "On-premise deployments demand substantial upfront capital:"
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
                                "Hardware infrastructure (servers, networking equipment, backup systems)"
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
                                "Software licensing fees (often perpetual licenses with high initial costs)"
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
                              {"Installation and configuration expenses"}
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
                                "Physical space and power requirements for server rooms"
                              }
                            </span>
                          </p>
                        </li>
                      </ul>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "These factors contribute to a higher TCO for on-premise systems, as detailed in this article about evaluating the total cost of ownership for an on-premise application system."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Cloud-based solutions like Terminal's Yard Operating System™ operate on a subscription model. You pay predictable monthly or annual fees without the burden of hardware procurement. The Terminal-in-a-Camera™ kit deploys in hours, eliminating trenching costs and extensive infrastructure buildouts."
                          }
                        </span>
                      </p>
                      <h3
                        id={"long-term-maintenance-economics"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"Long-Term Maintenance Economics"}
                      </h3>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {"On-premise systems require dedicated IT resources:"}
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
                                "Full-time staff for system administration, troubleshooting, and updates"
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
                              {"Hardware Refresh Cycles every 3-5 years"}
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
                                "Security patches and software upgrades managed internally"
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
                                "Disaster recovery and backup infrastructure maintenance"
                              }
                            </span>
                          </p>
                        </li>
                      </ul>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Cloud vendors absorb these responsibilities. Your subscription includes automatic updates, security patches, and infrastructure scaling. Terminal handles system maintenance, ensuring you always run the latest features without additional IT staffing costs. This vendor-managed approach typically delivers faster ROI—Terminal customers see returns in under 5 months—because you're not subsidizing an internal IT team dedicated to yard management infrastructure."
                          }
                        </span>
                      </p>
                      <h2
                        id={
                          "security-and-compliance-implications-in-choosing-a-deployment-model-for-your-yard-management-software-solution"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "Security and Compliance Implications in Choosing a Deployment Model for Your Yard Management Software Solution"
                        }
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"Data security"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " is a crucial factor to consider when choosing the deployment model for your yard management software. Here's how the two options compare:"
                          }
                        </span>
                      </p>
                      <h3
                        id={"cloud-based-solutions"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"Cloud-Based Solutions"}
                      </h3>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Cloud-based solutions like Terminal's Yard Operating System™ rely on enterprise-grade security protocols managed by dedicated vendor teams. These platforms typically employ multi-layered encryption, regular security audits, and compliance certifications (SOC 2, ISO 27001) that many mid-market operators would struggle to implement internally."
                          }
                        </span>
                      </p>
                      <h3
                        id={"on-premise-deployments"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"On-Premise Deployments"}
                      </h3>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "On-premise deployments give you direct control over your security infrastructure. You manage physical access to servers, implement your own firewall configurations, and maintain complete oversight of who accesses your yard data. This appeals to organizations with strict "
                          }
                        </span>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"privacy concerns"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " or those handling sensitive cargo requiring heightened security protocols."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"Regulatory compliance"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " requirements vary significantly across industries. Food and beverage distributors must adhere to FDA regulations, while automotive logistics operations face different standards. Cloud vendors often maintain certifications across multiple compliance frameworks, reducing your burden. You inherit their compliance investments through the subscription model."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Internet dependency introduces specific vulnerabilities for cloud solutions. Network outages can temporarily limit system access, though modern platforms like Terminal include offline capabilities for critical gate operations. You need robust cybersecurity measures regardless of deployment choice—cloud solutions face external threats while on-premise systems remain vulnerable to internal breaches and physical security gaps."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "The risk profile differs between models rather than one being inherently more secure than the other."
                          }
                        </span>
                      </p>
                      <h2
                        id={
                          "factors-to-consider-when-choosing-between-cloud-based-and-on-premise-yms-solutions"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "Factors to Consider When Choosing Between Cloud-Based and On-Premise YMS Solutions"
                        }
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {"Your "}
                        </span>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"business size"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " directly influences which deployment model makes practical sense. Small to mid-sized operations with limited capital budgets typically find cloud-based solutions more accessible, while large enterprises with established data centers may already possess the infrastructure needed for on-premise deployments. Companies managing five or more warehouses—like those Terminal's Yard Operating System™ serves—need to evaluate whether their scale justifies maintaining dedicated servers across multiple locations or if centralized cloud management offers better efficiency."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"IT resources"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " play a critical role in this decision. You need to honestly assess your internal capabilities:"
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
                                "Do you have dedicated IT staff available for system maintenance and troubleshooting?"
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
                                "Can your team handle software updates, security patches, and infrastructure upgrades?"
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
                                "What's your capacity for managing hardware failures or system downtime?"
                              }
                            </span>
                          </p>
                        </li>
                      </ul>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Cloud-based solutions like Terminal's YOS eliminate these concerns through vendor-managed infrastructure, allowing your team to focus on yard operations rather than server maintenance. On-premise systems demand continuous IT attention, from hardware monitoring to backup management."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {"Your "}
                        </span>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"growth plans"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " should shape your deployment strategy. Rapidly expanding operations benefit from cloud scalability—you can add new yards to your network without purchasing additional servers. Terminal's Yard Networks feature demonstrates this advantage, providing single-pane-of-glass visibility across sites as you scale. Static or slowly growing operations might justify the one-time investment in on-premise infrastructure."
                          }
                        </span>
                      </p>
                      <h2
                        id={
                          "future-trends-impacting-yard-management-software-deployment-models"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "Future Trends Impacting Yard Management Software Deployment Models"
                        }
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "The logistics technology landscape is rapidly evolving, and yard management software deployment models are adapting to accommodate breakthrough innovations. "
                          }
                        </span>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"AI integration"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " stands at the forefront of this transformation, delivering unprecedented operational efficiency regardless of whether you choose cloud-based or on-premise solutions."
                          }
                        </span>
                      </p>
                      <h3
                        id={"ai-integration"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"AI Integration"}
                      </h3>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "AI-powered computer vision technology, like Terminal's proprietary system achieving 99.5% data accuracy, demonstrates how artificial intelligence transcends deployment model limitations. You'll find AI-driven features automating gate processes, optimizing asset movements, and providing predictive insights that reduce detention fees by up to 12%. These capabilities work seamlessly whether your infrastructure lives in the cloud or behind your firewall."
                          }
                        </span>
                      </p>
                      <h3
                        id={"iot-connectivity"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"IoT Connectivity"}
                      </h3>
                      <p data-v-1c7eea09={""}>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"IoT connectivity"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " represents another critical trend reshaping deployment considerations. Real-time data streams from connected devices—cameras, sensors, and gate hardware—feed intelligent systems that orchestrate yard operations with minimal human intervention. Terminal's Terminal-in-a-Camera™ hardware exemplifies this convergence, delivering plug-and-play deployment that integrates with existing systems in hours rather than weeks."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "The distinction between cloud-based and on-premise solutions becomes less about capability and more about operational preference. Both deployment models now support:"
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
                                "Agentic AI workflows reducing asset search time by 90%"
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
                                "Real-time visibility across multi-location yard networks"
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
                                "Automated workflows triggered by configurable business rules"
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
                                "Integration with ERP, TMS, and IoT device ecosystems"
                              }
                            </span>
                          </p>
                        </li>
                      </ul>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Your deployment choice should align with your organization's specific requirements while embracing these technological advances that drive measurable ROI across the supply chain."
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
                          {"automation in operations"}
                        </span>
                      </button>
                      <button
                        className={"tag-button button label-4 tag-button"}
                        style={{ width: "fit-content" }}
                        data-v-95826a6e={""}
                        data-v-d8fa3fef={""}
                      >
                        <span className={"link-active"} data-v-d8fa3fef={""}>
                          {"efficiency "}
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
                          {"technology"}
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
