const path = require("path");

const description =
  "React Finland (24-26.4.2018, Helsinki) is a conference that comes with a workshop day and two days of talks.";

module.exports = () => ({
  template: {
    file: path.resolve(__dirname, "templates/page.ejs"),
  },
  output: "build",
  layout: () => require("./pages/components/SiteBody").default,
  paths: {
    "/": () => {
      const page = require("./pages/index").default;

      page.description = description;
      page.title = "Learn More about React, Explore Finland";

      return page;
    },
    "for-attendees": () => {
      const page = require("./pages/for-attendees").default;

      page.description = description;
      page.title = "For Attendees";

      return page;
    },
    "for-sponsors": () => {
      const page = require("./pages/for-sponsors").default;

      page.description = description;
      page.title = "For Sponsors";

      return page;
    },
    about: () => {
      const page = require("./pages/about").default;

      page.description = description;
      page.title = "About";

      return page;
    },
    privacy: () => {
      const page = require("./pages/privacy").default;

      page.description = description;
      page.title = "Privacy";

      return page;
    },
    schedule: () => {
      const page = require("./pages/schedule").default;

      page.description = description;
      page.title = "Schedule";

      return page;
    },
    speakers: () => {
      const page = require("./pages/speakers").default;

      page.description = description;
      page.title = "Speakers";

      return page;
    },
    workshops: () => {
      const page = require("./pages/workshops").default;

      page.description = description;
      page.title = "Workshops";

      return page;
    },
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
