"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import copy from "@/lib/grader-content.json";
const scope = { "data-v-f1940e54": "" };
const layers = copy.layers.filter((l) => l.questions?.length);
const accents = {
  slate: "#61727b",
  amber: "#b78026",
  blue: "#3784b9",
  purple: "#8264b1",
  teal: "#178b87",
};
export default function YardGrader() {
  const [step, setStep] = useState(-1),
    [answers, setAnswers] = useState({}),
    [qualified, setQualified] = useState(false),
    [sent, setSent] = useState(false);
  const root = useRef(null);
  const layer = layers[step];
  const complete = step === layers.length;
  const changeStep = (n) => {
    setStep(n);
    root.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scores = layers.map((l) => ({
    ...l,
    score: Math.round(
      (l.questions.reduce((s, q) => s + (answers[q._uid] ?? 0), 0) /
        (l.questions.length * 2)) *
        100,
    ),
  }));
  const percent = Math.round(
    (layers
      .flatMap((l) => l.questions)
      .reduce((s, q) => s + (answers[q._uid] ?? 0), 0) /
      (layers.flatMap((l) => l.questions).length * 2)) *
      100,
  );
  const inPlace = scores.filter((s) => s.score >= 67).length;
  const verdict = [...copy.verdicts]
    .sort(
      (a, b) => Number(b.min_layers_in_place) - Number(a.min_layers_in_place),
    )
    .find((v) => inPlace >= Number(v.min_layers_in_place));
  const answer = (id, n) => setAnswers((a) => ({ ...a, [id]: n }));
  function download() {
    const body = `${copy.report_title}\n\nScore: ${percent}%\n${verdict?.headline}\n${verdict?.body}\n\n${scores.map((l) => `${l.badge} ${l.name}: ${l.score}%\n${l.score < 67 ? l.rec_why + "\nStart: " + l.rec_start : l.standard_copy}`).join("\n\n")}\n\nLocal demonstration report. No details were sent.`;
    const url = URL.createObjectURL(new Blob([body], { type: "text/plain" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "yard-security-report.txt";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return (
    <div
      ref={root}
      className="grader"
      {...scope}
      style={{ scrollMarginTop: 130 }}
    >
      {step < 0 ? (
        <div className="grader__panel" {...scope}>
          <div className="grader__panel-inner" {...scope}>
            <p className="grader__label label-5" {...scope}>
              {copy.label}
            </p>
            <h2 className="grader__title title-h2" {...scope}>
              {copy.title}
            </h2>
            <p className="grader__intro body-3" {...scope}>
              {copy.intro_copy}
            </p>
            <p className="grader__legend label-5" {...scope}>
              {copy.legend_label}
            </p>
            <div className="grader__legend-list" {...scope}>
              {layers.map((l) => (
                <div className="grader__legend-item" {...scope} key={l._uid}>
                  <span
                    className="grader__badge"
                    {...scope}
                    style={{ background: accents[l.accent] }}
                  >
                    {l.badge}
                  </span>
                  <div>
                    <p className="grader__legend-name body-4" {...scope}>
                      {l.name}
                    </p>
                    <p className="grader__legend-copy body-6" {...scope}>
                      {l.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="grader__button"
              {...scope}
              onClick={() => changeStep(0)}
            >
              {copy.start_button_text}
            </button>
          </div>
        </div>
      ) : !complete ? (
        <div className="grader__panel" {...scope}>
          <ol
            className="grader__progress"
            {...scope}
            aria-label="Assessment progress"
          >
            {layers.map((l, i) => (
              <li
                key={l._uid}
                className={
                  i === step ? "is-active" : i < step ? "is-complete" : ""
                }
                {...scope}
              >
                {l.badge}
              </li>
            ))}
          </ol>
          <div className="grader__panel-inner" {...scope}>
            <p
              className="grader__step-tag"
              {...scope}
              style={{ color: accents[layer.accent] }}
            >
              {layer.badge} — {layer.tag}
            </p>
            <h2 className="grader__title title-h3" {...scope}>
              {layer.name}
            </h2>
            <p className="grader__intro body-4" {...scope}>
              {layer.caption}
            </p>
            <div className="grader__questions" {...scope}>
              {layer.questions.map((q) => (
                <fieldset className="grader__question" {...scope} key={q._uid}>
                  <legend className="grader__question-text body-3" {...scope}>
                    {q.question}
                  </legend>
                  <div className="grader__options" {...scope}>
                    {[
                      [2, copy.option_high_label],
                      [1, copy.option_mid_label],
                      [0, copy.option_low_label],
                    ].map(([n, label]) => (
                      <button
                        type="button"
                        className={
                          "grader__option" +
                          (answers[q._uid] === n ? " is-selected" : "")
                        }
                        {...scope}
                        aria-pressed={answers[q._uid] === n}
                        key={n}
                        onClick={() => answer(q._uid, n)}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </fieldset>
              ))}
            </div>
            {layer.questions.filter((q) => q.counts_toward_qualifier).length >
              1 &&
              copy.qualifier_enabled && (
                <div className="grader__qualifier" {...scope}>
                  <p className="grader__qualifier-question body-4" {...scope}>
                    {copy.qualifier_question}
                  </p>
                  <label>
                    <input
                      type="checkbox"
                      checked={qualified}
                      onChange={(e) => setQualified(e.target.checked)}
                    />{" "}
                    Yes
                  </label>
                </div>
              )}
            <div className="grader__nav" {...scope}>
              <button
                className="grader__button grader__button--secondary"
                {...scope}
                onClick={() => changeStep(step - 1)}
              >
                {copy.back_button_text}
              </button>
              <button
                className="grader__button"
                {...scope}
                disabled={
                  !layer.questions.every((q) => answers[q._uid] !== undefined)
                }
                onClick={() => changeStep(step + 1)}
              >
                {step === layers.length - 1
                  ? copy.final_button_text
                  : copy.next_button_text}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="grader__results-notch" {...scope}>
          <div className="grader__results" {...scope}>
            <div className="grader__results-inner" {...scope}>
              <p className="grader__results-label label-5" {...scope}>
                {copy.results_label}
              </p>
              <div className="grader__score" {...scope}>
                <div className="local-score-dial" role="status">
                  {percent}
                  <small>/100</small>
                </div>
                <div className="grader__verdict" {...scope}>
                  <h2 className="grader__verdict-headline title-h4" {...scope}>
                    {verdict?.headline}
                  </h2>
                  <p className="grader__verdict-body body-4" {...scope}>
                    {verdict?.body}
                  </p>
                </div>
              </div>
              <div className="grader__bars" {...scope}>
                {scores.map((l) => (
                  <div key={l._uid}>
                    <div className="grader__bar-top" {...scope}>
                      <span className="grader__bar-label body-4" {...scope}>
                        {l.badge} {l.name}
                      </span>
                      <span>{l.score}%</span>
                    </div>
                    <div className="grader__bar-track" {...scope}>
                      <div
                        style={{
                          width: l.score + "%",
                          height: "100%",
                          background: accents[l.accent],
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="grader__cta local-grader-cta" {...scope}>
                <h3>{copy.cta_title}</h3>
                <p>{copy.cta_description}</p>
                {sent ? (
                  <div role="status">
                    <p>Demo report ready. No details were sent.</p>
                    <button
                      className="grader__button"
                      {...scope}
                      onClick={download}
                    >
                      Download report
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSent(true);
                      download();
                    }}
                  >
                    <label>
                      Name
                      <input required autoComplete="name" />
                    </label>
                    <label>
                      Work email
                      <input required type="email" autoComplete="email" />
                    </label>
                    <button className="grader__button" {...scope}>
                      {copy.cta_button_text}
                    </button>
                  </form>
                )}
              </div>
              <div className="grader__nav" {...scope}>
                <button
                  className="grader__button grader__button--secondary"
                  {...scope}
                  onClick={() => {
                    setAnswers({});
                    setSent(false);
                    changeStep(-1);
                  }}
                >
                  {copy.restart_button_text}
                </button>
                <Link
                  className="grader__button"
                  {...scope}
                  href="/demo-landing-page"
                >
                  {copy.demo_button_text}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
