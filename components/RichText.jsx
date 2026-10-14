import React from "react";
export default function RichText({ value }) {
  if (!value) return null;
  if (typeof value === "string") return value;
  const children = value.content?.map((n, i) => <RichText key={i} value={n} />);
  if (value.type === "text") {
    let text = value.text;
    for (const mark of value.marks || []) {
      const tag = {
        bold: "strong",
        italic: "em",
        superscript: "sup",
        subscript: "sub",
        underline: "u",
        link: "a",
      }[mark.type];
      if (tag)
        text = React.createElement(
          tag,
          tag === "a" ? { href: mark.attrs?.href } : null,
          text,
        );
    }
    return text;
  }
  if (value.type === "hard_break") return <br />;
  const tag = {
    paragraph: "p",
    heading: "h" + (value.attrs?.level || 2),
    bullet_list: "ul",
    ordered_list: "ol",
    list_item: "li",
    blockquote: "blockquote",
  }[value.type];
  return tag ? (
    React.createElement(
      tag,
      { className: tag === "p" ? "body-4" : undefined },
      children,
    )
  ) : (
    <>{children}</>
  );
}
