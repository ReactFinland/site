const path = require("path");
const {
  content: { pages },
} = require("@react-finland/content-2018");

module.exports = {
  apiUrl: "https://api.react-finland.fi/graphql-2018",
  template: {
    file: path.resolve(__dirname, "templates/page.ejs"),
    context: {
      helmet: {},
    },
  },
  renderPage: require("./utils/render-page"),
  output: "build",
  layout: () => require("./layouts/SiteBody").default,
  paths: {
    "404.html": page("404", {
      description: "Page was not found",
      title: "Page not found",
    }),
    "/": page("index"),
    "for-attendees": page("for-attendees"),
    "for-sponsors": page("for-sponsors"),
    about: page("about"),
    imprint: page("imprint"),
    "privacy-policy": page("privacy-policy"),
    schedule: page("schedule"),
    speakers: page("speakers"),
    workshops: page("workshops"),
  },
};

function page(name, meta) {
  const ret = () => {
    const pageComponent = require(`./pages/${name}`).default;
    const pageData = pages.find(({ id }) => id === name) || {};

    pageComponent.description = pageData.description || meta.description;
    pageComponent.title = pageData.title || meta.title;

    return pageComponent;
  };

  ret.name = name;

  return ret;
}
