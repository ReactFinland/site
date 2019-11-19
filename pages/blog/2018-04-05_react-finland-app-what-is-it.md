---
title: React Finland App — What is it and how we built it
description: ""
date: "2018-04-05T11:55:59.323Z"
categories: []
keywords: []
---

A conference should have a website to be able to sell tickets, show the speakers and the schedule for the conference. So why do you need an app as well?

[React Finland](https://react-finland.fi/) is about React and React Native, so having an app seemed like a good idea. As a result, we went our way and wanted to ship something fast. It doesn’t always go as planned.

## Technical choices

Technically we went with familiar technologies and the learned things along the way:

- We used [Ignite boilerplate](https://github.com/infinitered/ignite-ir-boilerplate) to get things started fast.

- We went with [styled components](https://github.com/styled-components/styled-components) as they were a fun thing to use for style reuse and css-like looking styles.

- Apollo client, since the backend moved to GraphQL server, and it was the best documented choice.

### API Client — Custom Sagas

At the time [https://github.com/apollographql/apollo-cache-persist](https://github.com/apollographql/apollo-cache-persist) did not exist. Fortunately, integrating the client to sagas was a easy thing to do.

> You can check the sagas folder in the git repo to see how we did it: [https://github.com/ReactFinland/react-finland-app/blob/master/App/Sagas/SchedulesSagas.js](https://github.com/ReactFinland/react-finland-app/blob/master/App/Sagas/SchedulesSagas.js).

### Navigation - react-navigation

![Mobile app](img/mobile-01.png)

Originally we had a two-level navigation, one navigation on top, and another on the bottom. We moved to a drawer based one, since we had issues with the original choice.

It would have been possible to have Android and iOS navigation behave differently, but since we wanted the sponsors to show on drawer, having similar navigation felt better.

Not all the sponsors fit into the drawer, so there is that screen containing all sponsors.

## Are we ready to release…

The initial plan was to release the app to boost the ticket sales, but since we sold out so fast, it was more about having an app to show our skills in React Native and learning.

We are planning to get a new version out before the conference. Possibly some features that could be useful during the conference it self.

The app has less features than originally planned, but we are happy the way it came out. At least we will have an awesome app for React Finland 2019. And it was a good learning experience for me personally. This is still first app that I have work with that has been published to the app and play store.

> You can look at the contributors of the app here [https://github.com/ReactFinland/react-finland-app/graphs/contributors](https://github.com/ReactFinland/react-finland-app/graphs/contributors).

## Lessons learned

- Create the organization in Apples App Store early, the registration and the publishing process takes still quite long time to be complete

- Publish alphas / testflight often, to get some feedback and testing on multiple devices (especially android) — you’ll probably get some unexpected things happening — release variant can behave differently than dev build

- Keep feature set minimal, try to release early, rather release something early than not release at all

## The first version is available now. Download below!

![Mobile app](img/mobile-02.png)

- [https://github.com/ReactFinland/react-finland-app](https://github.com/ReactFinland/react-finland-app)
- [https://play.google.com/store/apps/details?id=com.reactfinlandapp](https://play.google.com/store/apps/details?id=com.reactfinlandapp)
- [https://itunes.apple.com/app/react-finland-2018/id1358098551?mt=8&ign-mpt=uo%3D2](https://itunes.apple.com/app/react-finland-2018/id1358098551?mt=8&ign-mpt=uo%3D2)

![React Finland 2018](img/mobile-03.jpeg)
