---
title: The Technology Behind React Finland
description: >-
  When you organize a developer conference such as React Finland and the
  organizers are developers themselves, you’ll get a lot of software…
date: '2018-01-23T10:54:59.662Z'
categories: []
keywords: []
slug: /@bebraw/the-technology-behind-react-finland-5d944cc6e438
---

![[Teamwork](https://pixabay.com/en/idea-teamwork-thinking-working-3085367/)](img/1__Zi7djJhTv1CoCXcPyLPlRg.jpeg)
[Teamwork](https://pixabay.com/en/idea-teamwork-thinking-working-3085367/)

When you organize a developer conference such as [React Finland](https://react-finland.fi/) and [the organizers are developers themselves](https://medium.com/react-finland/from-devs-to-devs-a807f8d41949), you’ll get a lot of software development as a result. In this case we’ve developed the site, a mobile application, an API, and a content infrastructure.

### Website

The website of a conference is often the entry point to it for a lot of people. We’ve developed it iteratively, and continue to do so. I believe it’s better to publish something that works soon than something that’s perfect too late. Given we are running the conference as volunteers, time is an issue as well as you have to get most out of it.

#### Webpack and React for Site

I decided to use the same stack for [the React Finland site](https://react-finland.fi/) as for [SurviveJS](https://survivejs.com/). It relies on a little known static site generator, [Antwar](https://antwar.js.org/). I’ve developed it based on my own needs throughout the years. It relies heavily on webpack and React and it implements progressive enhancement for JavaScript functionality. This way the site works even when JavaScript isn’t enabled.

The site uses a LESS for styling at the time of writing. It’s not a popular choice but rather something that our designer picked and it stuck then.

#### Tito for Ticket Sales

We decided to go with [Tito for ticket sales](https://ti.to/). It doesn’t fit our requirements perfectly but it was a good enough fit and has proven to be a good choice. At the time of writing, it’s missing grouping functionality and as a result the user interface is cluttered while a certain amount of manual work is required to manage it.

#### Medium for Blog

It would have been simple to maintain this blog on top of the site but we decided to go with [a Medium based blog instead](https://medium.com/react-finland) since it has a potentially better reach within our target audience. Running a blog of your own is more of a long term strategy although it gives you more control and flexibility.

#### Syncing Content

Early on it was clear that a part of the team wants to develop a mobile application for the conference. This led to a challenge. How to share the schedule, speaker information, and all other data with the site and the mobile application?

> [See the site source for further technical details.](https://github.com/ReactFinland/site)

### Content Infrastructure

It didn’t take long for me to realise I have to decouple the content from the site. Initially I converted it as JSON and began to consume it within the site. After that I pushed it to [a content repository](https://github.com/ReactFinland/content-2018) and published it as a npm package I can consume from both the site and the mobile application.

The content has evolved since and I moved from pure JSON to JavaScript as that’s more convenient to consume.

#### Content Repository

Having a content repository was a step forward and it cleaned up the site implementation. Some content, such as copywriting, remains on the site itself as it isn’t needed elsewhere. I have all the information I have to share at the npm package.

Although this was a step forward, we noticed another problem. What happens if we update the data? You have to update the content dependency at both the site and the mobile application. This is simple to do for the site and could be automated to a certain degree but it’s more complicated for the mobile.

If you update the application this way, you have to publish a new version for the users to download. That’s not ideal as we might want to perform changes to the data during the conference.

To solve this, we decided to implement a GraphQL API the mobile application can consume. [The content repository contains a GraphQL schema](https://github.com/ReactFinland/content-2018/blob/master/src/type-defs.js) that’s mapped to an API.

### GraphQL API

Initially I copied a GraphQL server written by a friend and then built mine on top of that so that it maps to the content. The GraphQL schema used to live in the [GraphQL API repository](https://github.com/ReactFinland/graphql-api) but to make it easier to maintain, I pushed it to the content repository. I also test that it works there.

The current version of the GraphQL API is surprisingly simple and it could be simplified a notch further. Essentially it maps the data as a GraphQL API using the data definition. There’s a small function that generates the queries GraphQL expects.

Since data is modified only through the content repository, we didn’t have to worry about mutations. This kept the GraphQL portion simple.

The site consumes the content through GraphQL client. Whenever the content changes, it will trigger a series of webhooks which will eventually update the site as well as the site rebuilds itself against the new content.

> [You can test the GraphQL API online!](https://api.react-finland.fi/graphql-2018)

### Mobile Application

[The mobile application of the conference](https://github.com/ReactFinland/react-finland-app) has been built on top of Ignite boilerplate, using react-navigate and Apollo GraphQL client — styling has been done with styled-components. The application and its development will be covered in a separate post by the developers.

### Conclusion

![Both the mobile application and the site consume their content through the same API](img/1__VLL69izNaWmkKe__w__SL1gA.png)
Both the mobile application and the site consume their content through the same API

I believe we found a good architecture for managing a conference like [React Finland](http://react-finland.fi/). There’s a lot of content to manage so it was essential to find good ways to do that and I believe we achieved it. Now the data is in a structured format and it’s easy to cascade changes to the places we need with little effort. Some of the effort could be automated away to reduce the work required further.

[Get your ticket to React Finland 2018 now!](https://ti.to/react-finland/2018)