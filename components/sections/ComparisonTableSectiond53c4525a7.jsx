import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";

export default function ComparisonTableSectiond53c4525a7() {
  return (
    <section
      className={"comparison-table-section comparison-table-section--light"}
      data-v-f1c1b785={""}
    >
      <div className={"comparison-table-wrapper"} data-v-f1c1b785={""}>
        <div className={"comparison-table-header"} data-v-f1c1b785={""}>
          <p className={"comparison-table-label label-5"} data-v-f1c1b785={""}>
            {"YOS™ vs. YMS"}
          </p>
          <header
            className={"comparison-table-headline animated-strong"}
            data-v-f1c1b785={""}
          >
            <h2 className={"title-si"} data-v-f1c1b785={""}>
              <strong data-v-f1c1b785={""}>
                {"A Side-By-Side Comparison of YOS™ and Traditional YMS"}
              </strong>
            </h2>
          </header>
        </div>
        <div className={"comparison-table-container"} data-v-f1c1b785={""}>
          <div className={"comparison-table"} data-v-f1c1b785={""}>
            <div className={"comparison-table-header-row"} data-v-f1c1b785={""}>
              <div
                className={"comparison-table-feature-header"}
                data-v-f1c1b785={""}
              ></div>
              <div
                className={"comparison-table-yos-header"}
                data-v-f1c1b785={""}
              >
                <div className={"yos-header-content"} data-v-f1c1b785={""}>
                  <svg
                    className={"yos-icon yos-icon-mobile"}
                    xmlns={"http://www.w3.org/2000/svg"}
                    width={"20"}
                    height={"19"}
                    viewBox={"0 0 20 19"}
                    fill={"none"}
                    data-v-f1c1b785={""}
                  >
                    <path
                      d={
                        "M3.66605 0C3.30496 0 2.9581 0.143363 2.70195 0.39646L0.400223 2.68496C0.14408 2.93982 0 3.28673 0 3.64602V18.646C0 18.8407 0.160089 19 0.355754 19H13.7392C14.1003 19 14.4472 18.8566 14.7033 18.6018L18.6967 14.6265C18.9528 14.3735 19.0969 14.0265 19.0969 13.6673V0.353982C19.0969 0.159292 18.9368 0 18.7411 0H3.66605ZM16.3682 6.20885C16.3682 6.52743 16.1085 6.78584 15.7884 6.78584H8.85294C8.54343 6.78584 8.26417 7.03894 8.27306 7.3469C8.2784 7.48142 8.33354 7.60531 8.4207 7.69912C8.42959 7.70796 8.43671 7.71681 8.44738 7.72566L11.425 10.6903C11.5335 10.7982 11.5958 10.9451 11.5958 11.0973V15.7115C11.5958 16.0301 11.3361 16.2885 11.0159 16.2885H8.08273C7.76255 16.2885 7.50285 16.0301 7.50285 15.7115V7.3646C7.50285 7.04602 7.24315 6.78761 6.92297 6.78761H3.30851C2.98833 6.78761 2.72863 6.5292 2.72863 6.21062V3.29204C2.72863 2.97345 2.98833 2.71504 3.30851 2.71504H7.26272C7.41747 2.71504 7.56511 2.77522 7.67362 2.88496L10.6459 5.84248C10.6566 5.85487 10.6708 5.86903 10.6833 5.87965C10.7722 5.96106 10.8896 6.01239 11.0195 6.02124C11.3361 6.03894 11.5958 5.75929 11.5958 5.44425V3.29381C11.5958 2.97522 11.8555 2.71681 12.1757 2.71681H15.7901C16.1103 2.71681 16.37 2.97522 16.37 3.29381V6.21239L16.3682 6.20885Z"
                      }
                      fill={"#ABFF02"}
                      data-v-f1c1b785={""}
                    ></path>
                  </svg>
                  <svg
                    className={"yos-icon yos-icon-desktop"}
                    xmlns={"http://www.w3.org/2000/svg"}
                    width={"135"}
                    height={"30"}
                    viewBox={"0 0 135 30"}
                    fill={"none"}
                    data-v-f1c1b785={""}
                  >
                    <path
                      d={
                        "M5.75484 0C5.18801 0 4.64352 0.226362 4.24144 0.62599L0.628258 4.2394C0.226173 4.64183 0 5.18957 0 5.75687V29.4411C0 29.7485 0.251303 30 0.558451 30H21.5674C22.1342 30 22.6787 29.7736 23.0808 29.3712L29.3494 23.0945C29.7515 22.6949 29.9777 22.1472 29.9777 21.5799V0.558919C29.9777 0.251514 29.7264 0 29.4192 0H5.75484ZM25.6943 9.80345C25.6943 10.3065 25.2867 10.7145 24.7841 10.7145H13.8971C13.4112 10.7145 12.9728 11.1141 12.9868 11.6004C12.9952 11.8128 13.0817 12.0084 13.2185 12.1565C13.2325 12.1705 13.2437 12.1844 13.2604 12.1984L17.9347 16.8794C18.105 17.0498 18.2027 17.2818 18.2027 17.5221V24.8076C18.2027 25.3107 17.795 25.7187 17.2924 25.7187H12.688C12.1854 25.7187 11.7777 25.3107 11.7777 24.8076V11.6283C11.7777 11.1253 11.3701 10.7173 10.8675 10.7173H5.1936C4.69099 10.7173 4.28332 10.3093 4.28332 9.80624V5.19795C4.28332 4.69492 4.69099 4.28691 5.1936 4.28691H11.4008C11.6437 4.28691 11.8755 4.38193 12.0458 4.55519L16.7117 9.22497C16.7284 9.24453 16.7507 9.26688 16.7703 9.28365C16.9099 9.4122 17.0942 9.49325 17.298 9.50722C17.795 9.53516 18.2027 9.09362 18.2027 8.59618V5.20075C18.2027 4.69772 18.6104 4.28971 19.113 4.28971H24.7869C25.2895 4.28971 25.6971 4.69772 25.6971 5.20075V9.80904L25.6943 9.80345Z"
                      }
                      fill={"#ABFF02"}
                      data-v-f1c1b785={""}
                    ></path>
                    <path
                      d={
                        "M36.4026 8.69679V5.72892H51.4808V8.69679H45.7567V24.2739H42.1016V8.69679H36.4026Z"
                      }
                      fill={"white"}
                      data-v-f1c1b785={""}
                    ></path>
                    <path
                      d={
                        "M56.1299 21.8677C57.2022 21.8677 58.3023 21.4849 59.0171 20.2832H62.6471C61.9071 22.3288 59.8883 24.6064 56.1551 24.6064C51.7349 24.6064 49.1521 21.306 49.1521 17.3433C49.1521 13.3805 51.989 10.2059 56.0518 10.2059C60.1145 10.2059 62.9514 13.5063 62.7978 18.3661H52.6536C52.8323 20.7191 54.4685 21.8705 56.1299 21.8705V21.8677ZM59.2238 15.9348C59.1484 13.6069 57.5121 12.7881 56.0294 12.7881C54.7003 12.7881 52.9886 13.632 52.7066 15.9348H59.2238Z"
                      }
                      fill={"white"}
                      data-v-f1c1b785={""}
                    ></path>
                    <path
                      d={
                        "M70.954 13.8388C69.2172 13.8388 68.0668 14.4788 68.0668 17.061V24.2739H64.5402V10.5133H68.0166V12.9166C68.8096 11.2287 70.0605 10.5384 71.6465 10.5384C71.8755 10.5384 72.1826 10.5636 72.4144 10.5887V13.9143C71.9034 13.864 71.4678 13.8388 70.9568 13.8388H70.954Z"
                      }
                      fill={"white"}
                      data-v-f1c1b785={""}
                    ></path>
                    <path
                      d={
                        "M86.3896 17.1113V24.2739H82.863V16.2673C82.863 14.7583 82.7346 13.0452 80.6655 13.0452C78.3144 13.0452 77.9319 15.0154 77.9319 17.1113V24.2739H74.4052V10.5133H77.9319V12.3298C78.6997 10.9744 80.1042 10.2059 81.7656 10.2059C84.1167 10.2059 85.1387 11.4606 85.6748 12.4555C86.747 10.9213 88.1292 10.2059 90.1982 10.2059C93.6495 10.2059 94.8501 12.3549 94.8501 15.6022V24.2739H91.3235V16.2673C91.3235 14.7583 91.1951 13.0452 89.126 13.0452C86.7749 13.0452 86.3924 15.0154 86.3924 17.1113H86.3896Z"
                      }
                      fill={"white"}
                      data-v-f1c1b785={""}
                    ></path>
                    <path
                      d={
                        "M100.446 9.00419H96.9192V5.73172H100.446V9.00419ZM100.446 24.2739H96.9192V10.5133H100.446V24.2739Z"
                      }
                      fill={"white"}
                      data-v-f1c1b785={""}
                    ></path>
                    <path
                      d={
                        "M110.235 10.2059C113.533 10.2059 114.988 12.2264 114.988 15.6022V24.2739H111.461V16.3708C111.461 14.5794 111.079 13.0452 109.085 13.0452C106.759 13.0452 106.248 14.9371 106.248 17.1113V24.2739H102.722V10.5133H106.248V12.3298C107.041 10.9492 108.549 10.2059 110.235 10.2059Z"
                      }
                      fill={"white"}
                      data-v-f1c1b785={""}
                    ></path>
                    <path
                      d={
                        "M116.674 20.5654C116.674 17.3181 120.329 16.3456 125.721 15.7308V15.5016C125.721 13.3777 124.571 12.6372 123.141 12.6372C121.787 12.6372 120.662 13.3526 120.586 14.8617H117.289C117.546 12.1509 119.793 10.1556 123.32 10.1556C126.59 10.1556 129.248 11.5612 129.248 16.217C129.248 16.653 129.198 18.4667 129.198 19.7215C129.198 21.8957 129.351 23.1225 129.605 24.2739H126.361C126.257 23.8379 126.182 23.2259 126.132 22.5608C125.16 23.9916 123.705 24.6064 121.633 24.6064C119 24.6064 116.674 23.0722 116.674 20.5654ZM120.304 20.3866C120.304 21.3843 121.097 22.2031 122.681 22.2031C124.878 22.2031 125.825 21.0014 125.825 19.0061V17.9832C121.89 18.3912 120.304 18.8524 120.304 20.3866Z"
                      }
                      fill={"white"}
                      data-v-f1c1b785={""}
                    ></path>
                    <path
                      d={
                        "M131.473 24.2739V5.72892H135V24.2711H131.473V24.2739Z"
                      }
                      fill={"white"}
                      data-v-f1c1b785={""}
                    ></path>
                  </svg>
                  <span data-v-f1c1b785={""}>{"YOS"}</span>
                </div>
              </div>
              <div
                className={"comparison-table-other-header"}
                data-v-f1c1b785={""}
              >
                {"Other YMS"}
              </div>
            </div>
            <div className={"comparison-table-body"} data-v-f1c1b785={""}>
              <div className={"comparison-table-row"} data-v-f1c1b785={""}>
                <div
                  className={"comparison-table-feature"}
                  data-v-f1c1b785={""}
                >
                  {"Automated Gate"}
                </div>
                <div
                  className={"comparison-table-yos-cell"}
                  data-v-f1c1b785={""}
                >
                  <svg
                    className={"checkmark checkmark-green"}
                    xmlns={"http://www.w3.org/2000/svg"}
                    width={"24"}
                    height={"24"}
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    data-v-f1c1b785={""}
                  >
                    <path
                      d={
                        "M9.00039 16.2016L4.80039 12.0016L3.40039 13.4016L9.00039 19.0016L21.0004 7.00156L19.6004 5.60156L9.00039 16.2016Z"
                      }
                      fill={"currentColor"}
                      data-v-f1c1b785={""}
                    ></path>
                  </svg>
                </div>
                <div
                  className={"comparison-table-other-cell"}
                  data-v-f1c1b785={""}
                >
                  <svg
                    className={"checkmark checkmark-grey"}
                    xmlns={"http://www.w3.org/2000/svg"}
                    width={"24"}
                    height={"24"}
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    data-v-f1c1b785={""}
                  >
                    <path
                      d={
                        "M9.00039 16.2016L4.80039 12.0016L3.40039 13.4016L9.00039 19.0016L21.0004 7.00156L19.6004 5.60156L9.00039 16.2016Z"
                      }
                      fill={"currentColor"}
                      data-v-f1c1b785={""}
                    ></path>
                  </svg>
                </div>
              </div>
              <div className={"comparison-table-row"} data-v-f1c1b785={""}>
                <div
                  className={"comparison-table-feature"}
                  data-v-f1c1b785={""}
                >
                  {"Dock Scheduling"}
                </div>
                <div
                  className={"comparison-table-yos-cell"}
                  data-v-f1c1b785={""}
                >
                  <svg
                    className={"checkmark checkmark-green"}
                    xmlns={"http://www.w3.org/2000/svg"}
                    width={"24"}
                    height={"24"}
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    data-v-f1c1b785={""}
                  >
                    <path
                      d={
                        "M9.00039 16.2016L4.80039 12.0016L3.40039 13.4016L9.00039 19.0016L21.0004 7.00156L19.6004 5.60156L9.00039 16.2016Z"
                      }
                      fill={"currentColor"}
                      data-v-f1c1b785={""}
                    ></path>
                  </svg>
                </div>
                <div
                  className={"comparison-table-other-cell"}
                  data-v-f1c1b785={""}
                >
                  <svg
                    className={"checkmark checkmark-grey"}
                    xmlns={"http://www.w3.org/2000/svg"}
                    width={"24"}
                    height={"24"}
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    data-v-f1c1b785={""}
                  >
                    <path
                      d={
                        "M9.00039 16.2016L4.80039 12.0016L3.40039 13.4016L9.00039 19.0016L21.0004 7.00156L19.6004 5.60156L9.00039 16.2016Z"
                      }
                      fill={"currentColor"}
                      data-v-f1c1b785={""}
                    ></path>
                  </svg>
                </div>
              </div>
              <div className={"comparison-table-row"} data-v-f1c1b785={""}>
                <div
                  className={"comparison-table-feature"}
                  data-v-f1c1b785={""}
                >
                  {"Yard Inventory and Asset Tracking"}
                </div>
                <div
                  className={"comparison-table-yos-cell"}
                  data-v-f1c1b785={""}
                >
                  <svg
                    className={"checkmark checkmark-green"}
                    xmlns={"http://www.w3.org/2000/svg"}
                    width={"24"}
                    height={"24"}
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    data-v-f1c1b785={""}
                  >
                    <path
                      d={
                        "M9.00039 16.2016L4.80039 12.0016L3.40039 13.4016L9.00039 19.0016L21.0004 7.00156L19.6004 5.60156L9.00039 16.2016Z"
                      }
                      fill={"currentColor"}
                      data-v-f1c1b785={""}
                    ></path>
                  </svg>
                </div>
                <div
                  className={"comparison-table-other-cell"}
                  data-v-f1c1b785={""}
                >
                  <svg
                    className={"checkmark checkmark-grey"}
                    xmlns={"http://www.w3.org/2000/svg"}
                    width={"24"}
                    height={"24"}
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    data-v-f1c1b785={""}
                  >
                    <path
                      d={
                        "M9.00039 16.2016L4.80039 12.0016L3.40039 13.4016L9.00039 19.0016L21.0004 7.00156L19.6004 5.60156L9.00039 16.2016Z"
                      }
                      fill={"currentColor"}
                      data-v-f1c1b785={""}
                    ></path>
                  </svg>
                </div>
              </div>
              <div className={"comparison-table-row"} data-v-f1c1b785={""}>
                <div
                  className={"comparison-table-feature"}
                  data-v-f1c1b785={""}
                >
                  {"Reporting"}
                </div>
                <div
                  className={"comparison-table-yos-cell"}
                  data-v-f1c1b785={""}
                >
                  <svg
                    className={"checkmark checkmark-green"}
                    xmlns={"http://www.w3.org/2000/svg"}
                    width={"24"}
                    height={"24"}
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    data-v-f1c1b785={""}
                  >
                    <path
                      d={
                        "M9.00039 16.2016L4.80039 12.0016L3.40039 13.4016L9.00039 19.0016L21.0004 7.00156L19.6004 5.60156L9.00039 16.2016Z"
                      }
                      fill={"currentColor"}
                      data-v-f1c1b785={""}
                    ></path>
                  </svg>
                </div>
                <div
                  className={"comparison-table-other-cell"}
                  data-v-f1c1b785={""}
                >
                  <svg
                    className={"checkmark checkmark-grey"}
                    xmlns={"http://www.w3.org/2000/svg"}
                    width={"24"}
                    height={"24"}
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    data-v-f1c1b785={""}
                  >
                    <path
                      d={
                        "M9.00039 16.2016L4.80039 12.0016L3.40039 13.4016L9.00039 19.0016L21.0004 7.00156L19.6004 5.60156L9.00039 16.2016Z"
                      }
                      fill={"currentColor"}
                      data-v-f1c1b785={""}
                    ></path>
                  </svg>
                </div>
              </div>
              <div className={"comparison-table-row"} data-v-f1c1b785={""}>
                <div
                  className={"comparison-table-feature"}
                  data-v-f1c1b785={""}
                >
                  {"Built-in AI Computer Vision"}
                </div>
                <div
                  className={"comparison-table-yos-cell"}
                  data-v-f1c1b785={""}
                >
                  <svg
                    className={"checkmark checkmark-green"}
                    xmlns={"http://www.w3.org/2000/svg"}
                    width={"24"}
                    height={"24"}
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    data-v-f1c1b785={""}
                  >
                    <path
                      d={
                        "M9.00039 16.2016L4.80039 12.0016L3.40039 13.4016L9.00039 19.0016L21.0004 7.00156L19.6004 5.60156L9.00039 16.2016Z"
                      }
                      fill={"currentColor"}
                      data-v-f1c1b785={""}
                    ></path>
                  </svg>
                </div>
                <div
                  className={"comparison-table-other-cell"}
                  data-v-f1c1b785={""}
                ></div>
              </div>
              <div className={"comparison-table-row"} data-v-f1c1b785={""}>
                <div
                  className={"comparison-table-feature"}
                  data-v-f1c1b785={""}
                >
                  {"Agentic Yard Missions & Orchestration"}
                </div>
                <div
                  className={"comparison-table-yos-cell"}
                  data-v-f1c1b785={""}
                >
                  <svg
                    className={"checkmark checkmark-green"}
                    xmlns={"http://www.w3.org/2000/svg"}
                    width={"24"}
                    height={"24"}
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    data-v-f1c1b785={""}
                  >
                    <path
                      d={
                        "M9.00039 16.2016L4.80039 12.0016L3.40039 13.4016L9.00039 19.0016L21.0004 7.00156L19.6004 5.60156L9.00039 16.2016Z"
                      }
                      fill={"currentColor"}
                      data-v-f1c1b785={""}
                    ></path>
                  </svg>
                </div>
                <div
                  className={"comparison-table-other-cell"}
                  data-v-f1c1b785={""}
                ></div>
              </div>
              <div className={"comparison-table-row"} data-v-f1c1b785={""}>
                <div
                  className={"comparison-table-feature"}
                  data-v-f1c1b785={""}
                >
                  {"Point to Point Integrations WMS/TMS"}
                </div>
                <div
                  className={"comparison-table-yos-cell"}
                  data-v-f1c1b785={""}
                >
                  <svg
                    className={"checkmark checkmark-green"}
                    xmlns={"http://www.w3.org/2000/svg"}
                    width={"24"}
                    height={"24"}
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    data-v-f1c1b785={""}
                  >
                    <path
                      d={
                        "M9.00039 16.2016L4.80039 12.0016L3.40039 13.4016L9.00039 19.0016L21.0004 7.00156L19.6004 5.60156L9.00039 16.2016Z"
                      }
                      fill={"currentColor"}
                      data-v-f1c1b785={""}
                    ></path>
                  </svg>
                </div>
                <div
                  className={"comparison-table-other-cell"}
                  data-v-f1c1b785={""}
                ></div>
              </div>
              <div className={"comparison-table-row"} data-v-f1c1b785={""}>
                <div
                  className={"comparison-table-feature"}
                  data-v-f1c1b785={""}
                >
                  {"Single Pane of Glass Visibility Across all Yards"}
                </div>
                <div
                  className={"comparison-table-yos-cell"}
                  data-v-f1c1b785={""}
                >
                  <svg
                    className={"checkmark checkmark-green"}
                    xmlns={"http://www.w3.org/2000/svg"}
                    width={"24"}
                    height={"24"}
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    data-v-f1c1b785={""}
                  >
                    <path
                      d={
                        "M9.00039 16.2016L4.80039 12.0016L3.40039 13.4016L9.00039 19.0016L21.0004 7.00156L19.6004 5.60156L9.00039 16.2016Z"
                      }
                      fill={"currentColor"}
                      data-v-f1c1b785={""}
                    ></path>
                  </svg>
                </div>
                <div
                  className={"comparison-table-other-cell"}
                  data-v-f1c1b785={""}
                ></div>
              </div>
              <div className={"comparison-table-row"} data-v-f1c1b785={""}>
                <div
                  className={"comparison-table-feature"}
                  data-v-f1c1b785={""}
                >
                  {"Modular Architecture to Scale Across Different Yards"}
                </div>
                <div
                  className={"comparison-table-yos-cell"}
                  data-v-f1c1b785={""}
                >
                  <svg
                    className={"checkmark checkmark-green"}
                    xmlns={"http://www.w3.org/2000/svg"}
                    width={"24"}
                    height={"24"}
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    data-v-f1c1b785={""}
                  >
                    <path
                      d={
                        "M9.00039 16.2016L4.80039 12.0016L3.40039 13.4016L9.00039 19.0016L21.0004 7.00156L19.6004 5.60156L9.00039 16.2016Z"
                      }
                      fill={"currentColor"}
                      data-v-f1c1b785={""}
                    ></path>
                  </svg>
                </div>
                <div
                  className={"comparison-table-other-cell"}
                  data-v-f1c1b785={""}
                ></div>
              </div>
              <div className={"comparison-table-row"} data-v-f1c1b785={""}>
                <div
                  className={"comparison-table-feature"}
                  data-v-f1c1b785={""}
                >
                  {
                    "Advanced Yard Capabilities (Damage Detection, Security, Reefer Management)"
                  }
                </div>
                <div
                  className={
                    "comparison-table-yos-cell comparison-table-yos-cell-last"
                  }
                  data-v-f1c1b785={""}
                >
                  <svg
                    className={"checkmark checkmark-green"}
                    xmlns={"http://www.w3.org/2000/svg"}
                    width={"24"}
                    height={"24"}
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    data-v-f1c1b785={""}
                  >
                    <path
                      d={
                        "M9.00039 16.2016L4.80039 12.0016L3.40039 13.4016L9.00039 19.0016L21.0004 7.00156L19.6004 5.60156L9.00039 16.2016Z"
                      }
                      fill={"currentColor"}
                      data-v-f1c1b785={""}
                    ></path>
                  </svg>
                </div>
                <div
                  className={"comparison-table-other-cell"}
                  data-v-f1c1b785={""}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
