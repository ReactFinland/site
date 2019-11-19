---
title: Interview — TypeScript with Michel Weststrate
description: >-
  Michel Weststrate is one of the keynote speakers of React Finland 2019
  (24–26.04). He’ll hold a workshop about TypeScript for React…
date: '2019-02-07T10:59:39.737Z'
categories: []
keywords: []
slug: /@bebraw/interview-typescript-with-michel-weststrate-8afd7fd24b32
---

![Types. Get it? ([Pixabay](https://pixabay.com/en/printing-plate-letters-font-type-1030849/))](img/1__pAx0kXuMzT__VcapgAD4IVw.jpeg)
Types. Get it? ([Pixabay](https://pixabay.com/en/printing-plate-letters-font-type-1030849/))

[Michel Weststrate](http://twitter.com/mweststrate/) is one of the keynote speakers of [React Finland 2019 (24–26.04)](https://react-finland.fi/). He’ll hold [a workshop about TypeScript for React developers](https://react-finland.fi/workshops/#typescript-for-react-developers) on the first day of the event.

#### Can you tell a bit about yourself?

![Michel Weststrate](img/1__RJ7icNUSIy8teCvF__uYO8g.jpeg)
Michel Weststrate

Hi! My name is Michel. (That’s; not Michael, but since that is how many people call me, that works as well. But it sounds more like “Michelle” in the Obama version).

I’m from that small country that brings forth the most excellent software engineers, such as Edsger Dijkstra, Guido van Rossum, and Erik Meijer.   
Haha, no, I don’t I belong to that list, I was trying to emphasize that it’s a pretty cool country. Not as cool as Finland though. Sometimes the sun shines.

For over a decade I was part of a startup, Mendix which became a big enterprise software vendor in the end. Being part of a fast-growing company lets you work on different parts of the stack and with many different languages. For the last three years, I settled on frontend/JavaScript/TypeScript.

I’ve started several successful open source projects, such as **MobX**, **mobx-state-tree**, and **immer**. Recently I’ve started my own company around this, [michel.codes](https://michel.codes/), that provides workshops and consultancy around the projects and tries to acquire sponsors to make sure they are maintained well and kept up to date in the fast-evolving landscape. Recently MobX has been ported to Flutter for example.

#### How would you describe TypeScript to someone who has never heard of it?

TypeScript is a static code analyzer, that takes your code and analyses, as much as it can do statically, whether your data structures and function invocations are used consistently. You might think about it as an advanced linter, that reasons about your code with a much deeper understander than linters do. To get those benefits, you will have to declare your types regularly.

In return, you will have a much quicker feedback loop on a lot of errors. And your code base becomes much more self-documenting and discoverable. In my opinion, it is a mandatory tool to use on any team based project or any project that passes like 20 KLOC.

#### How does TypeScript work?

![Medium posts need images to look good! ([Pixabay](https://pixabay.com/en/out-of-the-ordinary-kermit-frog-1523747/))](img/1__PLWF__aB4iOEmljSWAZ4t8g.jpeg)
Medium posts need images to look good! ([Pixabay](https://pixabay.com/en/out-of-the-ordinary-kermit-frog-1523747/))

TypeScript works slightly different than most people are used to from compilers like Java and C#. TypeScript checks types during compilation and then strips all the type stuff from the code, and what is left is JavaScript. As a result, the output is quite literally the original code.

Since the end product is JavaScript, the output is entirely untyped. TypeScript only gives compile time guarantees and doesn’t check anything at runtime. If your API is consumed externally, and wrongly used, it will still fail in the same ways as before.

I usually think TypeScript as a contract generation tool; you expose a contract, and this contract is a great way to figure out your API, get auto-completion and error messages. If consumers follow the contract, the behavior is defined.

The cool thing is that this helps things like refactoring — renames, moving stuff around. I have regularly seen multi-day refactorings in the teams I worked on, that immediately passed all the tests once they passed the compiler as well. This feeling is pretty indescribable but worth the initial effort of learning an additional language.

#### How does TypeScript differ from other solutions?

TypeScript doesn’t re-invent JavaScript or even limit it. So, on the one hand, the language is compelling (I have some talks on that), but it doesn’t fix flaws in the JavaScript which is sometimes held against it. I see this as a benefit.

Building a compiler is much easier than building an ecosystem, so I’m quite an “always bet on JavaScript” guy. And TypeScript perfectly fits in that philosophy, where many other solutions don’t.

#### Why did you start developing using TypeScript?

I think roughly four years ago, we started to create our first Node.js based servers. However, since many of our devs have a background in strongly typed languages and we genuinely believe strongly typed languages help the long term maintainability of a project, we decided to adopt TypeScript immediately.

I think the version we adopted was 0.6, and we managed quite well. Although setup was quite horrible (uncomparable to now), it worked already really lovely once you got everything linked together.

#### Can you say something about your workshop, TypeScript for React Developers? Why should I come?

In this workshop, I’ll very quickly get you through the basics, and then we can start on the cool stuff. In the hands-on sessions, we’ll convert a React app to TypeScript, do some refactorings, discuss whether we still need _propTypes_, and so on.

At the same time, in the lecture parts of the workshop, we will dive into some of the more advanced TypeScript constructs, that allows one to capture the dynamic nature of JavaScript quite well. And we discuss how these techniques are applied in real life libraries like lodash, mobx, mobx-state-tree and such.

After this workshop, your understanding of TypeScript will be deep enough to use it on real life (existing) projects.

#### What does the future look like for TypeScript and web development in general? Can you see any particular trends?

TypeScript is eating the world. The fact that Facebook projects like Yarn and Jest are adopting TypeScript (instead of their Flow), speaks for itself.

#### Any last remarks?

![Sauna. ([Pixabay](https://pixabay.com/en/sauna-sauna-cabin-old-turf-roof-1476232/))](img/1__Vd11SE1xBHrmix2TGxtf6w.jpeg)
Sauna. ([Pixabay](https://pixabay.com/en/sauna-sauna-cabin-old-turf-roof-1476232/))

Who needs saunas? A vague TypeScript compile error will make you sweat just as well.

> It’s a good chance to [get a ticket for React Finland 2019 (24–26.04)](https://react-finland.fi/#tickets). We also have combos (workshop+conference) available for those wanting a deep dive.