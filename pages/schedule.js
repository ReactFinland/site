import React from "react";
import { Markdown } from "components";

const intro = `
The schedule of the event has been carefully curated. In true Finnish style, we rather focus on quality than quantity. There is no call for papers and the speakers have been chosen with care.

> [Subscribe to the conference calendar](https://api.react-finland.fi/calendar-2018.ics). You can import it to your Google Calendar for example.
`;

// TODO: Rework to render schedules against the API
const main = `
## 24.04—Tuesday—[Workshops](/workshops/)

Each session will take four hours and they are arranged twice so you have a chance to choose two. A session is capped to twenty people. The first sessions are from 9 to 13 and the second sessions are from 14 to 18.

* **Reactive State Machines**—Learn how to refactor an old application to use state machines with David Khourshid. (Elisa Appelsiini)
* **ReasonML** – See the reason in ReasonML with Nik Graf and Patrick Stapfer. (Elisa Appelsiini)
* **Style Guides in React** – Learn to develop style guides for your React application with Andrey Okonetchnikov and Artem Sapegin. (Valkoinen Sali)
* **React Native** with Gant Laborde. (Valkoinen Sali)
* **Testing React** – Learn how to test React with Sara Vieira. (Valkoinen Sali)
* **Universal React with Next.js** – Learn how to develop React in Universal way with Sia Karamalegos.
* **[Webpack – The Good Parts](https://presentations.survivejs.com/webpack-the-good-parts/)** – Learn more about webpack from one of its core developers, Juho Vepsäläinen. (Elisa Appelsiini)

The following four hour workshops are arranged only once:

* **Babel** – Learn Babel thoroughly with Sven Sauleau, a core developer. (Elisa Appelsiini)
* **Detox** – Learn graybox E2E testing with Rotem Mizrachi-Meidan, the author of the tool. (Valkoinen Sali)

We also have a full day workshop (eight hours including a lunch):

* **State Management** with Michel Weststrate, the author of MobX and Mobx-State-Tree. This session is longer, from 09 to 18. (Valkoinen Sali)

## 25.04—Wednesday—React

In Finnish style, we start each day early. We also eat lunch early. This way we'll have time to visit sauna, the holiest place of our culture.

The first presentation day has a strict focus on React itself. Each session ends with a brief break and we have a couple longer breaks in between:

{schedule:@react-finland/content-2018/src/schedules/25-04-2018}

There will be fun after the panel.

## 26.04—Thursday—More React

The second day of the event continues where the first one left off:

{schedule:@react-finland/content-2018/src/schedules/26-04-2018}
`;

const Schedule = () => (
  <>
    <section className="intro intro_schedule">
      <div className="intro--main">
        <Markdown source={intro} />
      </div>
      <aside className="intro--aside" />
    </section>
    <div className="grid--5col" id="schedule">
      <Markdown source={main} />
    </div>
  </>
);

export default Schedule;
