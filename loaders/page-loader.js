const _path = require("path");
const _ = require("lodash");
const loaderUtils = require("loader-utils");
const { markdown, highlight, parse } = require("@survivejs/utils");
const { renderToStaticMarkup } = require("react-dom/server");
const React = require("react");
const headers = require("./headers");
const Schedule = require("../components/Schedule");

module.exports = function pageLoader(source) {
  const result = markdown(customizeMarkdown).process(source, highlight);

  const context = this;

  return `module.exports = ${JSON.stringify(result)};`.replace(
    /__IMG_START__([^,\]>]+)__IMG_END__/g,
    (match, src) => {
      if (_.startsWith(src, "http")) {
        return src;
      }

      return `" + require(${loaderUtils.stringifyRequest(context, src)}) + "`;
    }
  );
};

function customizeMarkdown(renderer) {
  const oldParagraph = renderer.paragraph;

  renderer.paragraph = text => {
    // Example: {schedule:@react-finland/content-2018/schedule/25-04-2018}
    if (/\{schedule\:[a-zA-Z@\/\-0-9]*\}/.test(text)) {
      const importPath = text.slice(0, -1).split(":")[1];

      return renderToStaticMarkup(<Schedule items={require(importPath)} />);
    }

    return oldParagraph(text);
  };

  return renderer;
}
