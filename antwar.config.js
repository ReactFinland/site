const path = require("path");
const { content: { pages } } = require("@react-finland/content-2018");

const description =
  "React Finland (24-26.4.2018, Helsinki) is a conference that comes with a workshop day and two days of talks.";

module.exports = () => ({
  template: {
    file: path.resolve(__dirname, "templates/page.ejs"),
  },
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

    // Redirects
    // TODO: Push these to a webpack plugin
    organizers: {
      redirects: {
        "/": "/about/",
      },
    },
    presentations: {
      redirects: {
        "/": "/talks/",
      },
    },
    talks: {
      redirects: {
        "/": "/speakers/",
      },
    },
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
