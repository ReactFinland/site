---
title: "Testing with Juha, Maaret, and Manuel"
description: >-
  Testing is one those topics that tends to divide developers. Some see it as an
  integral part of the process, for others it’s an…
date: "2019-05-28T07:55:34.499Z"
categories: []
keywords: []
slug: /@bebraw/testing-with-juha-maaret-and-manuel-5b7a10b925d5
---

![Preparing for the testing session](img/1__XCwZ6aaQzx6K__YsMc__lTIw.jpeg)

Testing is one those topics that tends to divide developers. Some see it as an integral part of the process, for others it’s an afterthought. In React Finland 2019, we had three speakers delving into the topic: [Juha Linnanen](https://twitter.com/pillar15), [Maaret Pyhäjärvi](https://maaretp.com), and [Manuel Matuzović](https://www.matuzo.at).

## Juha Linnanen  —  CI/CD for React Native

![Sketch notes by [David Leuliette](https://davidl.fr)](img/1__kuOIOHYVG86DiP9sziOJgQ.jpeg)

Although I haven’t developed using React Native, I’ve seen a colleague struggle with the toolchain and different vendors. We prepared a React Native application for RF2019 but it didn’t get through Apple check (not enough new features) so we weren’t able to launch it in the end.

The vendor checks are only one potential problem related to launching an application. Tooling itself can be quite complex and it can be tricky to create releases.

Juha Linnanen’s talk addresses especially the development and release process related problems.

- To hear Juha’s thoughts on the topic, [go to 44:26 at the podcast](https://webbidevaus.fi/44).
- [pdf slides](https://slides.react-finland.fi/2019/juha-linnanen.pdf)
- [react-native-ci](https://github.com/solinor/react-native-ci)

<iframe width="100%" height="400" src="https://www.youtube.com/embed/Lid-2xFU4vg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Maaret Pyhäjärvi  —  Intersection of Automation and Exploratory Testing

![Sketch notes by [David Leuliette](https://davidl.fr)](img/1__exaW6x3LkEprvG0HJkWeGQ.jpeg)

Often tests are written to assert certain functionality works the way we expect. Maaret discusses the value of exploratory testing in her talk while contrasting it with test automation.

As it happens, both are valuable skills and especially beginning developers tend to be better at one. Pairing with someone complementary to your skills can lead to better testing. That way you both explore test cases while automating them.

Exploratory testing can be especially valuable when you are working with a legacy system that has a poor test coverage. You can use it as a method of learning more about the system while gaining confidence in refactoring or changing the behavior.

- To hear Maaret’s thoughts about the topic, [go to 57:38 at the podcast](https://webbidevaus.fi/44).
- [Online slides](https://www.slideshare.net/maaretp/react-finland-intersection-of-automation-and-exploratory-testing)
- [pdf slides](https://slides.react-finland.fi/2019/maaret-pyhajarvi.pdf)

<iframe width="100%" height="400" src="https://www.youtube.com/embed/Dg4JawCeNhs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Manuel Matuzović  —  12 Tips For More Accessible React Apps

![Sketch notes by [David Leuliette](https://davidl.fr)](img/1__J09MJ8ultNBVPr__HaeYEIg.jpeg)

If there’s one aspect of web development that’s often neglected, it’s accessibility. It’s quite easy to design something that works for you but what about other people?

What might be accessible to you, might not be accessible to others. Beyond that, what might be accessible to you right now, might not be so in the future as circumstances change.

Having a system that’s accessible to a wide range of people doesn’t decrease the value for those for whom it was already accessible. On the contrary, as you might gain features like keyboard navigation and sensible labels. Having proper contrast might come in handy in a different environment.

In Manuel’s talk, you’ll learn about eight (not 12!) tips you can apply in your React applications with a low amount of investment. I consider that a great starting point in making our work accessible to a wider group of people while improving the user experience for ourselves.

- To hear Manuel’s thoughts about the topic, [go to 24:33 at the podcast](https://webbidevaus.fi/45).
- [Online slides](https://www.matuzo.at/blog/12-tips-for-more-accessible-react-apps-slides-react-finland-2019/)
- [pdf slides](https://slides.react-finland.fi/2019/manuel-matuzovic.pdf)

<iframe width="100%" height="400" src="https://www.youtube.com/embed/NL6XKcX4sxc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Conclusion

Testing is a complex topic but it can have great returns when applied correctly. For developers, the biggest win might be in applying testing as a thinking tool as hinted by Maaret. Putting time and effort into automation can leave time for more important things as evidenced by Juha’s talk. And as mentioned by Manuel, it doesn’t take much effort to get started with accessibility.
