---
title: Styling in React with Artem and Artem
description: >-
  Ever since the introduction of React, styling has been a contentious topic.
  Since then, a variety of solutions have appeared and finally…
date: "2019-06-12T08:14:35.333Z"
categories: []
keywords: []
slug: /@bebraw/styling-with-artem-and-artem-d690f7563187
---

![CSS in real life](img/1__2KKfYoHfrYY7yqO4pHfFhA.jpeg)

Ever since the introduction of React, styling has been a contentious topic. Since then, a variety of solutions have appeared and finally the community has begun to gravitate towards certain practices that hide some of the technical complexity. In our styling session with Artem Sapegin and Artem Zakharchenko, we got a taste of what’s to come.

## Artem Sapegin  —  Custom CSS is the path to inconsistent UI

![Sketch notes by [David Leuliette](https://davidl.fr)](img/1__KZ9sYBulSXVnh2NWsn1pjg.png)

How much CSS should developers write? If adding a new feature forces you to write new CSS, are you doing it right? It’s easy to end up with a codebase that duplicates similar CSS for slightly different purposes. For this reason, even a simple application can end up having multiple different concepts for the same idea.

Artem Sapegin’s talk shows how custom CSS is the path to an inconsistent UI and how to approach this problem by using primitive components that are then used to compose UIs.

Although it will take time to develop the primitives, you’ll gain consistency through composition and end up writing less CSS as the specific details are hidden away behind neat APIs.

- [Online slides](https://stopwritingcss.netlify.com/)
- [pdf slides](https://slides.react-finland.fi/2019/artem-sapegin.pdf)
- To hear Artem’s thoughts about the topic, [go to 48:58 at the podcast](https://webbidevaus.fi/46).

<iframe width="100%" height="400" src="https://www.youtube.com/embed/_CsBRkRTzIA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Artem Zakharchenko  —  Creating layouts that last

![Sketch notes by [David Leuliette](https://davidl.fr)](img/1__kblwRax6hDyA7OSI__4MYsw.png)

When writing layouts, you often have to think on a rather low level. You might end up setting up a CSS grid and then figuring out how to transition from a layout to another using media queries.

What if layouts were a first class citizen instead? It’s this idea that Artem Zakharchenko explores in his talk about creating layouts that last.

- [kettanaito/atomic-layout](https://github.com/kettanaito/atomic-layout)
- To hear Artem’s thoughts about the topic, [go to 48:58 at the podcast](https://webbidevaus.fi/46).

<iframe width="100%" height="400" src="https://www.youtube.com/embed/_HrXUB97xQs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Conclusion

I like the fact that the discussion about styling in React is shifting more to the level of practices. You can apply design tokens and primitive components to hide the details and your styling solution.

As shown by Artem Zakharchenko’s talk, it’s possible to rethink the way we layout our views by composing them differently and relying on new standards underneath.
