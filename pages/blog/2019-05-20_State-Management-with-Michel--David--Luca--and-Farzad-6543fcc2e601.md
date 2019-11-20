---
title: "State Management with Michel, David, Luca, and Farzad"
description: >-
  We collaborated with the Webbidevaus podcast (primarily Finnish) on React
  Finland 2019. The point was to produce podcast episodes with our…
date: "2019-05-20T16:09:00.857Z"
categories: []
keywords: []
slug: /@bebraw/state-management-with-michel-david-luca-and-farzad-6543fcc2e601
---

![If you can’t sell the lib, sell the problem](img/1__KOfG8lHFAK4pJKlGQdcfSw.jpeg)

We collaborated with the [Webbidevaus podcast](https://webbidevaus.fi) (primarily Finnish) on React Finland 2019. The point was to produce podcast episodes with our speakers based on the conference sessions. We managed to capture a lot of content and I’ll be publishing it during the following weeks as the podcasts become available.

In this post, I’ll cover the state management session in which we had Michel Weststrate, Luca Matteis, David Khourshid, and Farzad Yz.

## Michel Weststrate  —  MobX — The Journey

![Sketch notes by [David Leuliette](https://davidl.fr)](img/1__qiR__6Zj__x66uyHa__zFaBMg.png)

Michel’s talk discussed his journey with [MobX](https://mobx.js.org), the state management solution known for its reactive approach.

You should watch the talk especially if you want to grow your open source library to popularity. As it happens, it’s not only about the technology.

- To hear Michel’s thoughts on the topic, [go to 03:41 at the podcast](https://webbidevaus.fi/43).
- [Online slides](https://docs.google.com/presentation/d/12Dd8iYxcA8Wl2yaOE_FNb-MaB7cktUE82JFXVlrO-6U/edit#slide=id.p)
- [pdf slides](https://slides.react-finland.fi/2019/michel-weststrate.pdf)

<iframe width="100%" height="400" src="https://www.youtube.com/embed/MIh1qSHi_Fc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Luca Matteis  —  Append-only development with React

![Sketch notes by [David Leuliette](https://davidl.fr)](img/1__vEUinixD9t81RlbwpxO5BQ.png)

Luca Matteis discussed an alternative way to manage state, append-only systems. Although the approach isn’t popular, it may be closer to how people think.

There are still questions about the scalability of the approach and better tooling is required, but if you want to try something different, then this is it.

- [Luca’s portion (with Farzad) begins 23:23 at the podcast.](https://webbidevaus.fi/43)
- [Online slides](https://lmatteis.github.io/finland-talk/assets/player/KeynoteDHTMLPlayer.html)
- [pdf slides](https://slides.react-finland.fi/2019/luca-matteis.pdf)

<iframe width="100%" height="400" src="https://www.youtube.com/embed/cXuvCMG21Ss" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## David Khourshid  —  Mind-Reading with Adaptive and Intelligent UIs in React

![Sketch notes by [David Leuliette](https://davidl.fr)](img/1____o5jk7PLESIRuYLzm2YbbQ.png)

What if you could construct the user interface your user needs as they use the application? That’s what David Khourshid explores in his talk. Prepare to learn about state machines while at it!

- [David’s portion begins 14:37 at the podcast.](https://webbidevaus.fi/43)
- [Online slides](https://slides.com/davidkhourshid/mind-reading-react-finland#/)

<iframe width="100%" height="400" src="https://www.youtube.com/embed/ppvi09LIUnU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Farzad Yz  —  Abstract component modeling in React

![Sketch notes by [David Leuliette](https://davidl.fr)](img/1__i8oZKoQLKRMXbwolqit__kQ.png)

Farzad Yz discussed how to extract state management from your application while sharing it with different libraries or even platforms (think JavaScript/React or Elm).

- Farzad’s portion (with Luca) begins 23:23 at the podcast.
- [Online slides](https://abstract-component-modeling.netlify.com/)
- [pdf slides](https://slides.react-finland.fi/2019/farzad-yz.pdf)

<iframe width="100%" height="400" src="https://www.youtube.com/embed/AVb5dURO6q0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Conclusion

Especially developments, like state charts, seem to be the bleeding edge at the moment. It would not surprise me, though, if techniques like this became more popular during the next years as people discover the benefits.

There’s some upfront investment but at the same time you’ll get code that’s easier for other people to reason about while improving test coverage. For example, it’s possible to generate integration tests based on a state chart.

Developments, like append-only development, have potential to change the way we approach state design as it forces us to think in a different manner.

Time will tell how the ideas evolve and developers adopt them in their daily work. In some ways it’s back to the basics as I remember learning especially about state machines over a decade ago but for some reason it’s only now that they are starting to make their way to web development.
