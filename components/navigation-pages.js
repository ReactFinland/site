import React from "react";

export default [
  {
    props: {
      className: "nav--main",
    },
    links: [
      {
        title: "About",
        url: "/about/",
      },
      {
        title: "2018",
        url: "/2018/",
      },
      {
        title: "2019",
        url: "/2019/",
      },
      {
        title: "2021",
        url: "/2021/",
      },
      {
        title: "2022",
        url: "/2022/",
      },
      /*{
        title: "For Sponsors",
        url: "/for-sponsors/",
      },
      {
        title: "2018",
        url: "/2018/",
      },
      {
        title: "2019",
        url: "/2019/",
      },
      {
        title: "2021",
        url: "/2021/",
      },
      {
        title: "Speakers",
        url: "/speakers/",
      },
      {
        title: "Schedule",
        url: "/schedule/",
      },
      {
        title: "Workshops",
        url: "/workshops/",
      },
      {
        title: <b>Register</b>,
        url: "https://fienta.com/react-finland-2022",
      },*/
    ],
  },
  {
    props: {
      className: "nav--social",
    },
    links: [
      {
        title: "Blog",
        url: "/blog/",
      },
      {
        title: (
          <a href="https://www.youtube.com/c/ReactFinland">
            <i className="fab fa-youtube" aria-label="Youtube" />
          </a>
        ),
      },
      /*{
        title: (
          <a href="https://www.twitch.com/ReactFinland">
            <i className="fab fa-twitch" aria-label="Twitch" />
          </a>
        ),
      },*/
      {
        title: (
          <a href="https://twitter.com/ReactFinland">
            <i className="fab fa-twitter" aria-label="Twitter" />
          </a>
        ),
      },
      {
        title: (
          <a href="https://join.slack.com/t/react-finland/shared_invite/enQtMzQ0NDM1ODczMjE2LTI3MjZlZGNjNTNkOTU5N2E1OWYxYzY0MWE0Y2NiNWMxMWZiMWEyYjc4MmM1ZDQwZmFhOTkyODBmM2E4NjcxZjM">
            <i className="fab fa-slack" aria-label="Slack" />
          </a>
        ),
      },
      {
        title: (
          <a href="https://github.com/ReactFinland">
            <i className="fab fa-github" aria-label="Github" />
          </a>
        ),
      },
      {
        title: (
          <a href="https://www.flickr.com/photos/react-finland">
            <i className="fab fa-flickr" aria-label="Flickr" />
          </a>
        ),
      },
    ],
  },
  {
    props: {
      className: "nav--secondary",
    },
    links: [
      {
        title: "For attendees",
        url: "/for-attendees/",
      },
      {
        title: "For speakers",
        url: "/for-speakers/",
      },
      /*
      {
        title: "For sponsors",
        url: "/for-sponsors/",
      },
      {
        title: "Call for papers",
        url: "https://forms.gle/JASTVgCrqTfwnMLj7",
      },
      {
        title: "GraphQL Finland",
        url: "https://graphql-finland.fi/",
      },
      {
        title: "Freezing Edge",
        url: "https://freezing-edge.fi/",
      },*/
    ],
  },
];
