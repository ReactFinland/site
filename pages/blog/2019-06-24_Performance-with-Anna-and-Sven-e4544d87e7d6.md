---
title: Performance with Anna and Sven
description: >-
  Performance can be a concern when working with bigger applications. Sometimes
  issues can come up when a low latency in the UI is required…
date: "2019-06-24T05:48:07.986Z"
categories: []
keywords: []
slug: /@bebraw/performance-with-anna-and-sven-e4544d87e7d6
---

![Performance in React (Native) with Anna Doubková](img/1__C4MT6SgNoC4lKeypStcHFg.jpeg)

Performance can be a concern when working with bigger applications. Sometimes issues can come up when a low latency in the UI is required. It’s for this reason why I wanted to have a performance session in [React Finland](https://react-finland.fi) 2019.

## Anna Doubková  —  Practical Performance for React (Native)

![Sketch notes by [David Leuliette](https://davidl.fr/)](img/1__xRezi604__WJ__Sp1zBPBB8g.png)

When working with React Native, there are specific parts of the stack where you can run into performance issues. In her talk, Anna discusses how her company approached optimizing their application.

When it comes to React and React Native, the basic rules of optimization apply. Measure before changing anything. For this purpose, React provides great tooling these days and you should use it to pinpoint the bottlenecks in rendering.

- [pdf slides](https://slides.react-finland.fi/2019/anna-doubkova.pdf)
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

<iframe width="100%" height="400" src="https://www.youtube.com/embed/W2a5_Qn2jVI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Sven Sauleau  —  WebAssembly — The Next Big Platform

![Sketch notes by [David Leuliette](https://davidl.fr/)](img/1____LYrs4__VqoiQRzFH3FyvOg.png)

There’s only so much you can do with vanilla JavaScript. One of the recent developments in browsers is the introduction of WebAssembly. It’s a new compile target that gives a promise of high performance.

For CPU bound tasks, it’s possible to push calculation to WebAssembly side of the fence while interacting with the code through JavaScript. It’s exactly this that Sven demonstrated in his talk.

- [pdf slides](https://slides.react-finland.fi/2019/sven-sauleau.pdf)

<iframe width="100%" height="400" src="https://www.youtube.com/embed/8xhLsVVqchg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Conclusion

Even with the improvements in React, performance can remain an issue. It’s important to at least learn how to measure before doing blind changes. Often in software architecture, there can be trade-offs to be made so that the desired level of performance can be reached.
