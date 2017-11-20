const _ = require("lodash");
const path = require("path");
const { generateAdjacent, clean } = require("@survivejs/utils");

module.exports = () => ({
  template: {
    title: "React Finland",
    file: path.resolve(__dirname, "templates/page.ejs"),
  },
  output: "build",
  layout: () => require("./layouts/SiteBody").default,
  paths: {
    "/": () => require("./layouts/SiteIndex").default,
    presentations: () => require("./layouts/PresentationIndex").default,
    workshops: () => require("./layouts/WorkshopIndex").default,
  },
});
