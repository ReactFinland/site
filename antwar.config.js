const _ = require("lodash");
const path = require("path");
const EVENT_NAME = "React Finland";

module.exports = {
  apiUrl: "https://api.react-finland.fi/graphql",
  conferenceId: "react-finland-2022",
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
    "/": page("index", {
      title: EVENT_NAME,
      description: `${EVENT_NAME} (30.05-03.06.2022) is a conference joining the Finnish React developer community with the global one`,
    }),
    "2018": page("2018", {
      description: "React Finland 2018",
      title: "React Finland 2018",
    }),
    "2019": page("2019", {
      description: "React Finland 2019",
      title: "React Finland 2019",
    }),
    "2021": page("2021", {
      description: "React Finland 2021",
      title: "React Finland 2021",
    }),
    "for-attendees": page("for-attendees", {
      title: "For Attendees",
      description: `What should I know as a ${EVENT_NAME} attendee`,
    }),
    "for-speakers": page("for-speakers", {
      title: "For Speakers",
      description: `What should I know as a ${EVENT_NAME} speaker?`,
    }),
    "for-sponsors": page("for-sponsors", {
      title: "For Sponsors",
      description: `What should I know as a ${EVENT_NAME} sponsor?`,
    }),
    "satellite-event-guidelines": page("satellite-event-guidelines", {
      title: "Satellite Event Guidelines",
      description: `What should I know to organize a satellite event for ${EVENT_NAME}?`,
    }),
    about: page("about", {
      title: "Organizers",
      description: `Who is organizing ${EVENT_NAME}?`,
    }),
    imprint: page("imprint", {
      title: "Imprint",
      description: `How to reach ${EVENT_NAME} organizers?`,
    }),
    "privacy-policy": page("privacy-policy", {
      title: "Privacy Policy",
      description: `What is the privacy policy of ${EVENT_NAME}?`,
    }),
    "youtube-embed": page("youtube-embed", {
      title: "YouTube Stream",
      description: `YouTube Stream of ${EVENT_NAME}`,
    }),
    schedule: page(
      "schedule",
      {
        title: "Schedule",
        description: `What is the schedule of ${EVENT_NAME}?`,
      },
      {
        conferenceId: "react-finland-2022",
      }
    ),
    "2018/schedule": page(
      "schedule",
      {
        title: "Schedule",
        description: `What was the schedule of ${EVENT_NAME}?`,
      },
      {
        conferenceId: "react-finland-2018",
        year: 2018,
      }
    ),
    "2019/schedule": page(
      "schedule",
      {
        title: "Schedule",
        description: `What was the schedule of ${EVENT_NAME}?`,
      },
      {
        conferenceId: "react-finland-2019",
        year: 2019,
      }
    ),
    "2021/schedule": page(
      "schedule",
      {
        title: "Schedule",
        description: `What was the schedule of ${EVENT_NAME}?`,
      },
      {
        conferenceId: "react-finland-2021",
        year: 2021,
      }
    ),
    speakers: page(
      "speakers",
      {
        title: "Speakers",
        speakers: `Who is going to speak at ${EVENT_NAME}?`,
      },
      {
        conferenceId: "react-finland-2022",
      }
    ),
    "2018/speakers": page(
      "speakers",
      {
        title: "Speakers",
        speakers: `Who spoke at ${EVENT_NAME}?`,
      },
      {
        conferenceId: "react-finland-2018",
      }
    ),
    "2019/speakers": page(
      "speakers",
      {
        title: "Speakers",
        speakers: `Who spoke at ${EVENT_NAME}?`,
      },
      {
        conferenceId: "react-finland-2019",
      }
    ),
    "2021/speakers": page(
      "speakers",
      {
        title: "Speakers",
        speakers: `Who spoke at ${EVENT_NAME}?`,
      },
      {
        conferenceId: "react-finland-2021",
      }
    ),
    workshops: page(
      "workshops",
      {
        title: "Workshops",
        description: `Which workshops will be held at ${EVENT_NAME}?`,
      },
      {
        conferenceId: "react-finland-2022",
      }
    ),
    "2018/workshops": page(
      "workshops",
      {
        title: "Workshops",
        description: `Which workshops were held at ${EVENT_NAME}?`,
      },
      {
        conferenceId: "react-finland-2018",
      }
    ),
    "2019/workshops": page(
      "workshops",
      {
        title: "Workshops",
        description: `Which workshops were held at ${EVENT_NAME}?`,
      },
      {
        conferenceId: "react-finland-2019",
      }
    ),
    "2021/workshops": page(
      "workshops",
      {
        title: "Workshops",
        description: `Which workshops were held at ${EVENT_NAME}?`,
      },
      {
        conferenceId: "react-finland-2021",
      }
    ),
    blog: {
      content: () => require.context("./pages/blog", false, /^\.\/.*\.md$/),
      index: () => {
        const index = require("./layouts/BlogIndex").default;

        index.title = "Blog";
        index.description = "";

        return index;
      },
      layout: () => require("./layouts/BlogPage").default,
      transform: pages =>
        generateAdjacent(_.sortBy(pages, "file.attributes.date")).reverse(),
      url: ({ sectionName, fileName }) =>
        `/${sectionName}/${cleanBlogPostName(fileName)}/`,
    },
  },
};

function cleanBlogPostName(resourcePath) {
  const parts = resourcePath.split("/");
  const beginning = parts.slice(0, -1);
  const end = _.trimStart(parts.slice(-1)[0], "0123456789-_");

  return beginning
    .concat(end)
    .join("/")
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/_/g, "-");
}

function generateAdjacent(pages) {
  return pages.map((page, i) => {
    const ret = _.cloneDeep(page); // Avoid mutation

    ret.previous = i > 0 && pages[i - 1];
    ret.next = i < pages.length - 1 && pages[i + 1];

    return ret;
  });
}

function page(name, meta = {}, parameters) {
  const ret = () => {
    let pageComponent = require(`./pages/${name}`).default;

    if (parameters) {
      pageComponent = pageComponent(parameters);
    }

    pageComponent.description = meta.description;
    pageComponent.title = meta.title;

    return pageComponent;
  };

  ret.name = name;

  return ret;
}
