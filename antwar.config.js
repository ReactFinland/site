const path = require("path");

const description =
  "React Finland (24-26.4.2018, Helsinki) is a conference that comes with a workshop day and two days of talks.";

module.exports = () => ({
  template: {
    file: path.resolve(__dirname, "templates/page.ejs"),
  },
  output: "build",
  layout: () => require("./layouts/SiteBody").default,
  paths: {
    "/": () => {
      const page = require("./layouts/SiteIndex").default;

      page.description = description;
      page.title = "Learn More about React, Explore Finland";

      return page;
    },
    "for-attendees": () => {
      const page = require("./layouts/AttendeeIndex").default;

      page.description = description;
      page.title = "For Attendees";

      return page;
    },
    "for-sponsors": () => {
      const page = require("./layouts/SponsorIndex").default;

      page.description = description;
      page.title = "For Sponsors";

      return page;
    },
    about: () => {
      const page = require("./layouts/AboutIndex").default;

      page.description = description;
      page.title = "About";

      return page;
    },
    schedule: () => {
      const page = require("./layouts/ScheduleIndex").default;

      page.description = description;
      page.title = "Schedule";

      return page;
    },
    speakers: () => {
      const page = require("./layouts/SpeakerIndex").default;

      page.description = description;
      page.title = "Speakers";

      return page;
    },
    workshops: () => {
      const page = require("./layouts/WorkshopIndex").default;

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
