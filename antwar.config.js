const path = require("path");
const { content: { pages } } = require("@react-finland/content-2018");

module.exports = () => ({
  apiUrl: "http://api.react-finland.fi/graphql-2018",
  template: {
    file: path.resolve(__dirname, "templates/page.ejs"),
  },
  renderPage: require("./utils/render-page"),
  output: "build",
  layout: () => require("./layouts/SiteBody").default,
  paths: {
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
});

function page(name) {
  const ret = () => {
    const pageComponent = require(`./pages/${name}`).default;
    const pageData = pages.find(({ id }) => id === name);

    pageComponent.description = pageData.description;
    pageComponent.title = pageData.title;

    return pageComponent;
  };

  ret.name = name;

  return ret;
}
