"use client";
import { useEffect, useState } from "react";
import copy from "@/lib/calculator-content.json";
const scope = { "data-v-f2d9ff5a": "" };
const defaults = {
  gates: 2,
  shifts: 3,
  days: 6,
  spotters: 3,
  checkins: 45,
  wage: 28,
  demurrage: 4,
};
const limits = {
  gates: 999,
  shifts: 24,
  days: 7,
  spotters: 999,
  checkins: 99999,
  wage: 999,
  demurrage: 10,
};
const dollar = (n) => "$" + Math.round(n).toLocaleString("en-US");
export default function YardCalculator() {
  const [values, setValues] = useState(defaults),
    [sent, setSent] = useState(false),
    [copied, setCopied] = useState(false);
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setValues((old) =>
      Object.fromEntries(
        Object.entries(old).map(([key, value]) => [
          key,
          params.has(key)
            ? Math.min(
                limits[key],
                Math.max(
                  key === "wage" ? 0 : 1,
                  Number(params.get(key)) || value,
                ),
              )
            : value,
        ]),
      ),
    );
  }, []);
  const { gates, shifts, days, spotters, checkins, wage, demurrage } =
    Object.fromEntries(
      Object.entries(values).map(([k, v]) => [k, Number(v) || 0]),
    );
  const hours = 8 * shifts * days * 52,
    laborCost =
      gates * 2 * wage * hours +
      (checkins > 50 ? 2 : 1) * 6 * shifts * days * 52 * wage +
      shifts * days * 52 * wage,
    spotterCost = spotters * 4000 * 12 + spotters * wage * hours,
    detentionCost =
      checkins * 0.1 * 2 * 50 * 365 + 200000 + (demurrage - 1) * 200000;
  const labor = laborCost * 0.25,
    spotter = spotterCost * 0.25,
    detention = detentionCost * 0.2,
    total = labor + spotter + detention,
    percent =
      Math.round((total / (laborCost + spotterCost + detentionCost)) * 100) ||
      0;
  const change = (key, value) =>
    setValues((old) => ({
      ...old,
      [key]:
        value === ""
          ? ""
          : Math.min(limits[key], Math.max(0, Number(value) || 0)),
    }));
  const field = (key, label) => (
    <div className="roi-calculator__field" {...scope} key={key}>
      <label
        htmlFor={"roi-" + key}
        className="roi-calculator__field-label body-4"
        {...scope}
      >
        {label}
      </label>
      <div className="roi-calculator__input-wrapper" {...scope}>
        {key === "wage" && (
          <span className="roi-calculator__input-prefix" {...scope}>
            $
          </span>
        )}
        <input
          id={"roi-" + key}
          type="number"
          min={key === "wage" ? 0 : 1}
          max={limits[key]}
          className="roi-calculator__input body-4"
          {...scope}
          value={values[key]}
          onChange={(e) => change(key, e.target.value)}
          onBlur={() => {
            if (values[key] === "") change(key, defaults[key]);
          }}
        />
      </div>
      <div className="roi-calculator__field-line" {...scope} />
    </div>
  );
  const url = () =>
    location.origin + location.pathname + "?" + new URLSearchParams(values);
  return (
    <div className="roi-calculator" {...scope}>
      <div className="roi-calculator__form" {...scope}>
        <div className="roi-calculator__header" {...scope}>
          <p className="roi-calculator__label label-5" {...scope}>
            {copy.label}
          </p>
          <h2 className="roi-calculator__title title-h2" {...scope}>
            {copy.title}
          </h2>
        </div>
        <div className="roi-calculator__fields" {...scope}>
          <div className="roi-calculator__row" {...scope}>
            {field("gates", copy.field_label_gates)}
            {field("shifts", copy.field_label_shifts)}
          </div>
          <div className="roi-calculator__row" {...scope}>
            {field("days", copy.field_label_operating_days)}
            {field("spotters", copy.field_label_spotters)}
          </div>
          {field("checkins", copy.field_label_checkins)}
          {field("wage", copy.field_label_wage)}
          <div
            className="roi-calculator__field roi-calculator__field--slider"
            {...scope}
          >
            <label
              htmlFor="roi-demurrage"
              className="roi-calculator__field-label body-4"
              {...scope}
            >
              {copy.field_label_demurrage}
            </label>
            <input
              id="roi-demurrage"
              type="range"
              min="1"
              max="10"
              value={values.demurrage}
              onChange={(e) => change("demurrage", e.target.value)}
              aria-valuenow={demurrage}
            />
            <div className="local-range-labels">
              <span>Low</span>
              <span>High</span>
            </div>
          </div>
        </div>
        <p className="roi-calculator__disclaimer body-4" {...scope}>
          {copy.disclaimer}
        </p>
      </div>
      <div className="roi-calculator__results-notch" {...scope}>
        <div className="roi-calculator__results" {...scope}>
          <div className="roi-calculator__results-content" {...scope}>
            <div className="roi-calculator__results-header" {...scope}>
              <h3 className="roi-calculator__results-headline" {...scope}>
                Your estimated annual savings
              </h3>
              <div className="roi-calculator__results-total" {...scope}>
                <output
                  className="roi-calculator__results-amount"
                  aria-live="polite"
                  {...scope}
                >
                  {dollar(total)}
                </output>
                <div className="roi-calculator__results-meta" {...scope}>
                  <span
                    className="roi-calculator__results-meta-label"
                    {...scope}
                  >
                    Est. savings
                  </span>
                  <span
                    className="roi-calculator__results-meta-value"
                    {...scope}
                  >
                    {percent}%
                  </span>
                </div>
              </div>
            </div>
            <div className="roi-calculator__results-breakdown" {...scope}>
              <h4
                className="roi-calculator__results-breakdown-title"
                {...scope}
              >
                Savings breakdown
              </h4>
              <div className="roi-calculator__results-items" {...scope}>
                {[
                  ["Labor", labor, "25%"],
                  ["Spotter", spotter, "25%"],
                  ["Detention & Demurrage", detention, "20%"],
                ].map(([label, value, pct]) => (
                  <div
                    className="roi-calculator__results-item"
                    {...scope}
                    key={label}
                  >
                    <p
                      className="roi-calculator__results-item-label"
                      {...scope}
                    >
                      {label}{" "}
                      <span
                        className="roi-calculator__results-item-detail"
                        {...scope}
                      >
                        ({pct} reduction)
                      </span>
                    </p>
                    <span
                      className="roi-calculator__results-item-value"
                      {...scope}
                    >
                      {dollar(value)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="roi-calculator__cta" {...scope}>
              <div className="roi-calculator__cta-header" {...scope}>
                <h4 className="roi-calculator__cta-title" {...scope}>
                  {copy.cta_title}
                </h4>
                <p className="roi-calculator__cta-description" {...scope}>
                  {copy.cta_description}
                </p>
              </div>
              {sent ? (
                <div role="status">
                  <p>Demo request received. No message was sent.</p>
                  <button
                    className="roi-calculator__recreate-copy"
                    {...scope}
                    onClick={async () => {
                      await navigator.clipboard.writeText(url());
                      setCopied(true);
                    }}
                  >
                    {copied ? "Copied" : "Copy these results"}
                  </button>
                </div>
              ) : (
                <form
                  className="roi-calculator__cta-form"
                  {...scope}
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <div className="roi-calculator__cta-field" {...scope}>
                    <label
                      htmlFor="roi-email"
                      className="roi-calculator__cta-label"
                      {...scope}
                    >
                      Work email
                    </label>
                    <input
                      id="roi-email"
                      className="roi-calculator__cta-input"
                      {...scope}
                      type="email"
                      required
                      placeholder="name@company.com"
                    />
                    <div
                      className="roi-calculator__cta-field-line"
                      {...scope}
                    />
                  </div>
                  <button className="roi-calculator__cta-button" {...scope}>
                    {copy.cta_button_text}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
