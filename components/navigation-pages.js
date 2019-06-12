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
        title: "Speakers",
        url: "/speakers/",
      },
      {
        title: "For Attendees",
        url: "/for-attendees/",
      },
      {
        title: "For Speakers",
        url: "/for-speakers/",
      },
      {
        title: "For Sponsors",
        url: "/for-sponsors/",
      },
      /*{
        title: "Schedule",
        url: "/schedule/#2019-04-26-second-conference-day",
      },
      {
        title: "Workshops",
        url: "/workshops/",
      },
      {
        title: <b>Buy tickets</b>,
        url: "/#tickets",
      },*/
    ],
  },
  {
    props: {
      className: "nav--social",
    },
    links: [
      {
        title: (
          <a href="https://www.youtube.com/c/ReactFinland">
            <i className="fab fa-youtube" aria-label="Youtube" />
          </a>
        ),
      },
      {
        title: (
          <a href="https://medium.com/react-finland">
            <i className="fab fa-medium" aria-label="Medium" />
          </a>
        ),
      },
      {
        title: (
          <a href="https://twitter.com/ReactFinland">
            <i className="fab fa-twitter" aria-label="Twitter" />
          </a>
        ),
      },
      {
        title: (
          <a href="https://join.slack.com/t/react-finland/shared_invite/enQtMzQ0NDM1ODczMjE2LTJlZmUxNDEyMThkYzYxNDI0OTQ5ZDc5MTQ0N2Q5OGMwZmM1ZmI0ZDlkMzgxNDk5YTEzMDJiOGY2MjFlNzAxODk">
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
    ],
  },
  {
    props: {
      className: "nav--secondary",
    },
    links: [
      {
        title: "2018",
        url: "/2018/",
      },
      {
        title: "2019",
        url: "/2019/",
      },
      {
        title: "GraphQL Finland",
        url: "https://graphql-finland.fi/",
      },
    ],
  },
];
