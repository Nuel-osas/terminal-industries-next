import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";

export default function SubscribeForme42a8796c5() {
  return (
    <section
      className={"subscribe-form"}
      data-v-3e5feb24={""}
      data-v-08bbabb5={""}
    >
      <div className={"inner"} data-v-08bbabb5={""}>
        <form
          id={"subscribe-form"}
          className={"form | body-8"}
          data-v-08bbabb5={""}
          data-local-form="true"
        >
          <div className={"field-row"} data-v-08bbabb5={""}>
            <div className={"field-wrapper"} data-v-08bbabb5={""}>
              <label
                className={"label"}
                htmlFor={"first_name"}
                data-v-08bbabb5={""}
              >
                {"First Name"}
              </label>
              <input
                id={"first_name"}
                defaultValue={""}
                className={"field"}
                type={"text"}
                name={"first_name"}
                required={true}
                placeholder={"Enter your first name"}
                data-v-08bbabb5={""}
              />
            </div>
            <div className={"field-wrapper"} data-v-08bbabb5={""}>
              <label
                className={"label"}
                htmlFor={"last_name"}
                data-v-08bbabb5={""}
              >
                {"Last Name"}
              </label>
              <input
                id={"last_name"}
                defaultValue={""}
                className={"field"}
                type={"text"}
                name={"last_name"}
                required={true}
                placeholder={"Enter your last name"}
                data-v-08bbabb5={""}
              />
            </div>
          </div>
          <div className={"field-wrapper email-field"} data-v-08bbabb5={""}>
            <label className={"label"} htmlFor={"email"} data-v-08bbabb5={""}>
              {"Email"}
            </label>
            <input
              id={"email"}
              defaultValue={""}
              className={"field"}
              type={"email"}
              name={"email"}
              required={true}
              placeholder={"Enter your email address"}
              data-v-08bbabb5={""}
            />
          </div>
          <div className={"privacy-notice"} data-v-08bbabb5={""}>
            <p className={"small-text"} data-v-08bbabb5={""}>
              {
                " We'll only use your email to share Terminal updates, resources, and invites you've opted into. You can unsubscribe anytime. "
              }
            </p>
          </div>
          <input
            className={
              "button-send | label-4 button input-button button-send | label-4"
            }
            style={{
              "--hover-bg": "var(--c-dark-green)",
              "--hover-color": "rgba(171, 255, 2, 1)",
              "--base-color": "rgba(5, 36, 36, 1)",
            }}
            type={"submit"}
            value={"Subscribe"}
            data-v-08bbabb5={""}
            data-v-d8fa3fef={""}
          />
        </form>
      </div>
    </section>
  );
}
