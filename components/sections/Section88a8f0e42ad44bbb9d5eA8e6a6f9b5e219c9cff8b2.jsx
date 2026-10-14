import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import HeroSequence from "@/components/HeroSequence";
import YardCalculator from "@/components/YardCalculator";
import YardGrader from "@/components/YardGrader";
import ExternalMedia from "@/components/ExternalMedia";
import TabbedFAQ from "@/components/TabbedFAQ";
import ResourceLibrary from "@/components/ResourceLibrary";

export default function Section88a8f0e42ad44bbb9d5eA8e6a6f9b5e219c9cff8b2() {
  return (
    <section
      className={
        "inline-subscribe-form not-prose is-variant-auto is-theme-dark is-max-auto is-align-left"
      }
      id={"88a8f0e4-2ad4-4bbb-9d5e-a8e6a6f9b5e2"}
      data-v-3e5feb24={""}
      data-v-5608d61e={""}
    >
      <div className={"inline-subscribe-form__card"} data-v-5608d61e={""}>
        <form
          className={"inline-subscribe-form__form"}
          aria-busy={"false"}
          data-v-5608d61e={""}
          data-local-form="true"
        >
          <h3 className={"inline-subscribe-form__title"} data-v-5608d61e={""}>
            {"Subscribe to our newsletter"}
          </h3>
          <div className={"inline-subscribe-form__row"} data-v-5608d61e={""}>
            <div
              className={"inline-subscribe-form__field"}
              data-v-5608d61e={""}
            >
              <label
                htmlFor={"v-0-0-0-0-0-0-0"}
                className={"inline-subscribe-form__label"}
                data-v-5608d61e={""}
              >
                {"Work Email"}
              </label>
              <input
                id={"v-0-0-0-0-0-0-0"}
                defaultValue={""}
                className={"inline-subscribe-form__input"}
                type={"email"}
                name={"email"}
                autoComplete={"email"}
                required={true}
                placeholder={"name@email.com"}
                data-v-5608d61e={""}
              />
            </div>
            <button
              type={"submit"}
              className={"inline-subscribe-form__submit | label-4"}
              data-v-5608d61e={""}
            >
              {"Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
