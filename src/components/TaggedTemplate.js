import React from "react";

function pooWrap(strings, ...values) {
  let str = "";
  strings.forEach((string, i) => {
    str += `${string}  ${values[i] ? `💩 ${values[i]} 💩` : ""}`;
  });
  return str;
}

const TaggedTemplate = () => {
  const text = pooWrap`hello, ${"how"} are you doing`;
  return <span>{text}</span>;
};
export default TaggedTemplate;
