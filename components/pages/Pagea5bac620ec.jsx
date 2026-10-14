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
export default function Pagea5bac620ec() {
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
                      "Sustainability in Motion: How a Yard Management System Can Reduce Idle Time and Emissions"
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
                      src={"/assets/77ecfa6478ed534f2860.webp"}
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
                            "Sustainability in Motion: How a Yard Management System Can Reduce Idle Time and Emissions"
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
                            "Sustainability in Motion: How a Yard Management System Can Reduce Idle Time and Emissions has become a critical conversation in modern logistics. You're facing mounting pressure to reduce your carbon footprint while maintaining operational excellence across your supply chain. The reality is stark: sustainability isn't just an environmental imperative—it's a business necessity that directly impacts your bottom line."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {"Here's what many operators overlook: "}
                        </span>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"idle time"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " in yards represents one of the most significant yet preventable sources of emissions and inefficiencies. When trucks sit stationary with engines running, waiting for dock assignments or gate clearance, you're burning fuel, releasing greenhouse gases, and hemorrhaging operational costs. Traditional manual processes create bottlenecks that compound these problems, turning your yard into an environmental and financial liability."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {"A modern "}
                        </span>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"yard management system"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " changes this equation entirely. By digitizing and automating yard operations, you can dramatically cut idle time, slash emissions, and transform your facility into a model of sustainable logistics. The technology exists today to make this shift—and the returns extend far beyond environmental compliance."
                          }
                        </span>
                      </p>
                      <h2
                        id={
                          "understanding-idle-time-and-its-environmental-impact-in-yard-operations"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "Understanding Idle Time and Its Environmental Impact in Yard Operations"
                        }
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"Idle time"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " refers to the period when trucks and trailers are stationary in yard operations without any productive activity. This can include waiting for dock assignments, going through manual check-in processes, or being parked unnecessarily due to poor coordination. Essentially, it's the hidden productivity killer that wastes resources while vehicles keep their engines running for climate control, refrigeration, or simply because drivers don't have clear instructions on when they'll move next."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "The environmental impact of this waiting game is significant. On average, a single idling truck consumes about 0.8 gallons of fuel per hour and emits approximately 20 pounds of carbon dioxide into the atmosphere. When you consider the hundreds of truck movements that occur daily at busy distribution centers, it adds up to thousands of gallons wasted each year—fuel that serves no operational purpose but directly contributes to "
                          }
                        </span>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"greenhouse gas emissions"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {"."}
                        </span>
                      </p>
                      <h3
                        id={
                          "how-traditional-yard-management-contributes-to-inefficiencies"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "How Traditional Yard Management Contributes to Inefficiencies"
                        }
                      </h3>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Traditional yard management practices worsen these inefficiencies due to inherent structural issues:"
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
                                {"Manual gate processes:"}
                              </span>
                            </strong>
                            <span
                              style={{ color: "#000000" }}
                              data-v-1c7eea09={""}
                            >
                              {
                                " Drivers are required to exit their vehicles, complete paperwork, and wait for verbal instructions."
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
                                {"Paper-based dock scheduling:"}
                              </span>
                            </strong>
                            <span
                              style={{ color: "#000000" }}
                              data-v-1c7eea09={""}
                            >
                              {
                                " This creates information gaps between yard coordinators and dock supervisors."
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
                                {"Limited visibility:"}
                              </span>
                            </strong>
                            <span
                              style={{ color: "#000000" }}
                              data-v-1c7eea09={""}
                            >
                              {
                                " Yard jockeys have to physically search for specific assets because they lack real-time information about trailer locations."
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
                                {"Reactive decision-making:"}
                              </span>
                            </strong>
                            <span
                              style={{ color: "#000000" }}
                              data-v-1c7eea09={""}
                            >
                              {
                                " Bottlenecks are only recognized after congestion has already built up."
                              }
                            </span>
                          </p>
                        </li>
                      </ul>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {"These "}
                        </span>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"inefficiencies in yard operations"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " lead to a chain reaction of delays. For example, if one truck idles for an additional 30 minutes due to manual processes, every vehicle behind it will experience increasing wait times as well."
                          }
                        </span>
                      </p>
                      <h2
                        id={
                          "how-modern-yard-management-systems-help-reduce-idle-time"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "How Modern Yard Management Systems Help Reduce Idle Time"
                        }
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {"A "}
                        </span>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"smart yard management system"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " changes the way facilities manage the constant movement of trucks and trailers in and out of their premises. These systems use interconnected technologies that work together to eliminate the uncertainty and delays that often come with traditional operations."
                          }
                        </span>
                      </p>
                      <h3
                        id={
                          "key-technologies-used-in-smart-yard-management-systems"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "Key Technologies Used in Smart Yard Management Systems"
                        }
                      </h3>
                      <ul data-v-1c7eea09={""}>
                        <li data-v-1c7eea09={""}>
                          <p data-v-1c7eea09={""}>
                            <strong data-v-1c7eea09={""}>
                              <span
                                style={{ color: "#000000" }}
                                data-v-1c7eea09={""}
                              >
                                {"IoT Sensors:"}
                              </span>
                            </strong>
                            <span
                              style={{ color: "#000000" }}
                              data-v-1c7eea09={""}
                            >
                              {
                                " These sensors continuously monitor the location and status of equipment without the need for manual intervention."
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
                                {"GPS Tracking:"}
                              </span>
                            </strong>
                            <span
                              style={{ color: "#000000" }}
                              data-v-1c7eea09={""}
                            >
                              {
                                " This technology provides precise location information for every asset moving through your facility."
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
                                {"RFID Technology:"}
                              </span>
                            </strong>
                            <span
                              style={{ color: "#000000" }}
                              data-v-1c7eea09={""}
                            >
                              {
                                " Radio-Frequency Identification (RFID) enables immediate identification at key points in the process."
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
                                {"AI Algorithms:"}
                              </span>
                            </strong>
                            <span
                              style={{ color: "#000000" }}
                              data-v-1c7eea09={""}
                            >
                              {
                                " Artificial Intelligence algorithms analyze patterns across thousands of data points to make better decisions about routing and scheduling."
                              }
                            </span>
                          </p>
                        </li>
                      </ul>
                      <h3
                        id={"how-automation-is-changing-gate-operations"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"How Automation is Changing Gate Operations"}
                      </h3>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "The ability to automate certain processes is fundamentally changing how gates operate:"
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
                                "Computer vision technology can read license plates, container numbers, and seal IDs in just a few seconds. This replaces the old method of using clipboards and pens, which often leads to delays."
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
                                "Dock assignments are now done automatically based on factors like load characteristics, carrier priorities, and available capacity."
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
                                "Intelligent task dispatch engines are used to plan trailer movements in a way that avoids conflicts and maximizes efficiency."
                              }
                            </span>
                          </p>
                        </li>
                      </ul>
                      <h3
                        id={"the-importance-of-real-time-visibility"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"The Importance of Real-Time Visibility"}
                      </h3>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "One of the most important aspects of reducing idle time is having real-time visibility into operations:"
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
                                "Live dashboards show exactly where each asset is, how long it has been stationary, and when its next move is scheduled."
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
                                "AI scheduling algorithms constantly update workflows as conditions change—such as late arrivals or priority shipments—to ensure everything runs smoothly."
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
                                "By being able to see potential congestion before it becomes a problem, you can redirect resources to prevent delays from spreading throughout your facility."
                              }
                            </span>
                          </p>
                        </li>
                      </ul>
                      <h2
                        id={
                          "how-reducing-idle-time-leads-to-lower-emissions-and-sustainability-benefits"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "How Reducing Idle Time Leads to Lower Emissions and Sustainability Benefits"
                        }
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "There is a clear and measurable link between idle time and reducing emissions. When trucks are stationary with their engines running, they are wasting fuel without doing any productive work—using about 0.8 gallons of fuel per hour while idling. By using a yard management system to reduce unnecessary waiting times, you can eliminate this waste and directly decrease the carbon footprint of your facility."
                          }
                        </span>
                      </p>
                      <h3
                        id={"the-impact-of-idle-time-on-emissions"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"The Impact of Idle Time on Emissions"}
                      </h3>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "The numbers speak for themselves. Organizations that have implemented advanced yard management solutions have reported "
                          }
                        </span>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"reducing truck idling time by up to 20%"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            ", which leads to significant decreases in diesel consumption and greenhouse gas emissions. Just one hour of idling from a single truck generates approximately 20 pounds of carbon dioxide. When you consider the multiple yard transactions happening daily, whether it's dozens or hundreds, the environmental impact becomes substantial and works against your "
                          }
                        </span>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"sustainability goals"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {"."}
                        </span>
                      </p>
                      <h3
                        id={
                          "tracking-emissions-with-modern-sustainability-dashboards"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "Tracking Emissions with Modern Sustainability Dashboards"
                        }
                      </h3>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Yard management platforms now offer modern sustainability dashboards that provide detailed insights into environmental performance. These dashboards allow you to monitor emissions at the shipment level, including:"
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
                                "Real-time metrics on fuel consumption across yard operations"
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
                                "Calculations of carbon output per transaction or carrier"
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
                              {"Analysis comparing emissions trends over time"}
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
                                "Compliance data in line with EPA SmartWay and other regulatory frameworks"
                              }
                            </span>
                          </p>
                        </li>
                      </ul>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "This data-driven approach to fuel efficiency turns sustainability from a vague idea into practical knowledge. It gives you the information necessary to show progress toward your environmental commitments while also pinpointing specific operational changes that will have the biggest impact on reducing emissions."
                          }
                        </span>
                      </p>
                      <h2
                        id={
                          "case-study-spotlight-terminal-s-ai-native-yard-operating-system-yos-driving-sustainability"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "Case Study Spotlight: Terminal's AI-Native Yard Operating System™ (YOS) Driving Sustainability"
                        }
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Terminal YOS represents a paradigm shift in how yards approach environmental responsibility through technology. This "
                          }
                        </span>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"AI-native yard system"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " integrates proprietary computer vision technology with modular software applications, creating a unified platform that addresses sustainability challenges at their source."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {"The platform's "}
                        </span>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"computer vision technology"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " delivers 99.5% data accuracy, eliminating the manual processes that traditionally contribute to delays and unnecessary idling. Terminal-in-a-Camera™ hardware deploys in hours without trenching, providing immediate visibility into yard operations while minimizing installation disruption."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"SmartYard™"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " workflows demonstrate measurable environmental impact through operational excellence:"
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
                                {"Throughput improvement "}
                              </span>
                            </strong>
                            <span
                              style={{ color: "#000000" }}
                              data-v-1c7eea09={""}
                            >
                              {
                                "exceeding 50% means fewer trucks waiting in queues with engines running"
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
                                "12% reduction in driver detention fees correlates directly with decreased idle time at facilities"
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
                                "Gate transaction times reduced by 85% through automated check-in/check-out processes"
                              }
                            </span>
                          </p>
                        </li>
                      </ul>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "The system's scalability across yard networks amplifies these sustainability gains. You can deploy Terminal YOS across multiple facilities, creating standardized processes that optimize goods flow throughout your entire operation. The single-pane-of-glass visibility enables centralized control, allowing you to identify and eliminate inefficiencies that contribute to emissions across your network."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Asset Movement orchestration ensures trailers reach their destinations without unnecessary repositioning or waiting. Real-time data infrastructure powers intelligent decision-making, directing assets to optimal locations based on configurable rules that prioritize both operational efficiency and environmental impact."
                          }
                        </span>
                      </p>
                      <h2
                        id={
                          "how-operational-efficiency-benefits-the-environment"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"How Operational Efficiency Benefits the Environment"}
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"Operational efficiency"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " gains from advanced yard management directly amplify environmental achievements. When you reduce driver wait times through automated workflows, you're simultaneously cutting detention costs and unnecessary engine idling. A 12% reduction in "
                          }
                        </span>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"detention fees reduction"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " represents more than financial savings—it translates to fewer hours of trucks sitting stationary with engines running, burning fuel while contributing nothing to productivity."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {"Automated processes create inherent "}
                        </span>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"safety improvements"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " across your facility. You eliminate the guesswork and variability that lead to incidents when yard operations follow consistent, AI-driven protocols. Automated gate procedures and intelligent asset tracking reduce the risk of collisions, misplaced equipment, and security breaches. Fewer disruptions mean smoother operations, which keeps your yard running at optimal efficiency without the environmental cost of recovery from accidents or operational setbacks."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {"The connection between facility throughput and "}
                        </span>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"supply chain resilience"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " becomes evident when you examine the ripple effects of yard optimization. A yard processing 50% more throughput doesn't just move goods faster—it creates buffer capacity that absorbs demand spikes without requiring emergency measures or expedited shipping methods that carry higher carbon footprints. You build a logistics network capable of maintaining sustainable practices even during peak periods or unexpected disruptions. This resilience protects your environmental commitments while strengthening your competitive position in an increasingly sustainability-conscious market."
                          }
                        </span>
                      </p>
                      <h2
                        id={
                          "integration-of-sustainability-metrics-into-yard-management-practices"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "Integration of Sustainability Metrics into Yard Management Practices"
                        }
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Modern yard management systems are changing how we think about environmental responsibility. Instead of just having vague goals, we now have specific measurements to work with. Platforms like Terminal's Yard Operating System™ have sustainability dashboards built in, which give us detailed information about emissions at the yard level. This means we can now see data that was previously hidden from our operations teams."
                          }
                        </span>
                      </p>
                      <h3
                        id={"understanding-emissions-through-real-time-metrics"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"Understanding Emissions Through Real-Time Metrics"}
                      </h3>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "With these new tools, we can track exactly how long trucks are idling at our gates, how many unnecessary movements are happening within our yard, and how much fuel is being used for all yard activities combined. This level of detail allows us to pinpoint specific areas where excess emissions are being caused—whether it's a busy dock door, poorly organized parking spots, or slow check-in processes."
                          }
                        </span>
                      </p>
                      <h3
                        id={"meeting-regulatory-standards-with-accurate-data"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"Meeting Regulatory Standards with Accurate Data"}
                      </h3>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "One of the key benefits of this data collection is its impact on our ability to meet regulatory standards. For example, in order to comply with EPA SmartWay certification, we need to provide verifiable emissions data and show documented improvements in efficiency. Thanks to Terminal's use of AI-powered computer vision, we're able to achieve an impressive 99.5% accuracy rate in our data collection. This means that when we report our metrics, we can be confident that they are reliable and not just rough estimates."
                          }
                        </span>
                      </p>
                      <h3
                        id={"making-informed-decisions-based-on-insights"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"Making Informed Decisions Based on Insights"}
                      </h3>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Organizations are using these insights to make better decisions about their operations. By establishing baseline performance metrics and setting reduction targets, they can track their progress across multiple facilities. They can also identify which yards are performing better than others and replicate those successful practices throughout their network."
                          }
                        </span>
                      </p>
                      <h3
                        id={"shifting-focus-from-reporting-to-optimization"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"Shifting Focus from Reporting to Optimization"}
                      </h3>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "Traditionally, environmental responsibility has often been seen as something that only needs to be addressed during periodic reporting exercises. However, with the integration of sustainability metrics into daily operations, this mindset is starting to shift. Now, instead of just focusing on reporting what we've done in the past, we're actively looking for ways to optimize our operations based on the impact we're having on the environment."
                          }
                        </span>
                      </p>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "This shift in thinking is crucial if we want to truly make a difference when it comes to sustainability. It's not enough anymore to simply say that we're doing our part—we need to be able to back it up with concrete evidence and continuously strive for improvement."
                          }
                        </span>
                      </p>
                      <h2
                        id={
                          "future-trends-the-evolution-toward-fully-digitized-sustainable-yard-networks"
                        }
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {
                          "Future Trends: The Evolution Toward Fully Digitized Sustainable Yard Networks"
                        }
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "The logistics industry is on the verge of a major change towards "
                          }
                        </span>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"interconnected yard networks"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " that provide centralized control over multiple facilities. This shift marks a significant move away from isolated operations, where each yard operated independently. With the advent of modern platforms, supply chain managers can now enjoy "
                          }
                        </span>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"single-pane-of-glass visibility"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            ", enabling them to track asset locations, monitor environmental performance metrics, and optimize resource allocation throughout their entire network—all from a single interface."
                          }
                        </span>
                      </p>
                      <h3
                        id={"the-rise-of-agentic-ai-workflows"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"The Rise of Agentic AI Workflows"}
                      </h3>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "The next level in yard automation lies in agentic AI workflows. Unlike traditional systems that merely carry out specific tasks, these intelligent solutions have the ability to understand patterns, foresee obstacles, and make independent adjustments to operations in order to minimize idle time across various facilities. For instance, when a truck arrives at one location while its ideal loading dock remains unoccupied at another facility, agentic AI has the capability to instantly redirect the vehicle, thereby reducing unnecessary waiting periods and associated emissions."
                          }
                        </span>
                      </p>
                      <h3
                        id={"the-benefits-of-digitized-yards"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"The Benefits of Digitized Yards"}
                      </h3>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "As organizations come to realize the cumulative advantages of connected operations, the process of digitizing yards is speeding up. For example, when a trailer is tracked using computer vision at one facility, it can smoothly transition into another yard's system without any manual data entry or communication gaps. This seamlessness eliminates redundant check-ins and verification procedures that have historically led to prolonged idle times."
                          }
                        </span>
                      </p>
                      <h3
                        id={"the-importance-of-network-scalability"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"The Importance of Network Scalability"}
                      </h3>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            "As companies broaden their reach, network scalability becomes increasingly vital. Advanced yard operating systems built on cloud-native architectures enable quick implementation across new facilities while ensuring uniform sustainability standards and operational protocols regardless of geographical location or facility size."
                          }
                        </span>
                      </p>
                      <h2
                        id={"conclusion"}
                        className={"heading-anchor"}
                        data-v-1c7eea09={""}
                      >
                        {"Conclusion"}
                      </h2>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {"The evidence is clear: "}
                        </span>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"sustainability in logistics"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " isn't just an environmental necessity—it's a business advantage. Advanced Yard Management Systems deliver measurable reductions in idle time and emissions while simultaneously cutting operational costs and improving throughput. You've seen how solutions like Terminal's YOS achieve 50%+ throughput improvements and 12% reductions in detention fees, all while minimizing your carbon footprint."
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
                            {"YMS benefits summary"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {" speaks for itself:"}
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
                                "Reduced fuel consumption through optimized yard movements"
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
                                "Lower greenhouse gas emissions from decreased idle time"
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
                                "Enhanced operational efficiency and cost savings"
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
                                "Real-time visibility for data-driven sustainability decisions"
                              }
                            </span>
                          </p>
                        </li>
                      </ul>
                      <p data-v-1c7eea09={""}>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {"The "}
                        </span>
                        <strong data-v-1c7eea09={""}>
                          <span
                            style={{ color: "#000000" }}
                            data-v-1c7eea09={""}
                          >
                            {"future outlook"}
                          </span>
                        </strong>
                        <span style={{ color: "#000000" }} data-v-1c7eea09={""}>
                          {
                            " points toward increasingly intelligent, interconnected yard networks where automation and AI drive continuous improvement. You have the opportunity now to position your operations at the forefront of sustainable supply chain management. Adopting advanced YMS technology isn't just about meeting today's environmental standards—it's about building resilient, efficient logistics operations ready for tomorrow's challenges."
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
                          {"metrics"}
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
