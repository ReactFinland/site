const _ = require("lodash");
const path = require("path");
const { generateAdjacent, clean } = require("@survivejs/utils");

module.exports = () => ({
  template: {
    title: "React Finland",
    file: path.resolve(__dirname, "templates/page.ejs")
  },
  output: "build",
  layout: () => require("./layouts/SiteBody").default,
  paths: {
    "/": {
      content: () => require.context("./pages", true, /^\.\/.*\.md$/),
      index: () => require("./layouts/SiteIndex").default,
      paths: {
        blog: {
          index: () => require("./layouts/BlogIndex").default,
          layout: () => require("./layouts/BlogPage").default,
          transform: pages =>
            generateAdjacent(_.sortBy(pages, "date")).reverse(),
          url: ({ fileName }) => `/${clean.chapterName(fileName)}/`
        }
      }
    }
  }
});
