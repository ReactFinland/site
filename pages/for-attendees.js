import React from "react";
import { AnchorHeader, Markdown } from "components";

/*
const oldIntro =
  "Welcome to React Finland 2021. Due to circumstances, we'll run the event online and I've compiled the most essential information below. If you have registered to the conference through Fienta, you'll get exclusive access to our online venue.";
*/

const intro =
  "There are several things you must know before coming to React Finland. Read on to learn more.";

/*
const oldMain = `
## Schedule

This time around, the conference content is spread around an entire week (30.08-03.09). Monday and Tuesday have a single session while the rest of the content is on the remaining days. I encourage you to [check out our schedule](/schedule/) and make note of the sessions in which you would like to participate.

Each session contains a YouTube stream link which you can use to get a reminder of a session. I've also provided the entire conference plan as a file you can import to your calendar but note that it will import each session of the conference.

To get most out of the sessions, make sure to participate in them through YouTube chat as we'll lift questions and comments from there to the live feeds. Some of the speakers' content will be prerecorded in order to decrease technical risk but all the QAs will be live.

## Online venue

One of the integral parts of a conference experience is chance encounters with other people and generally the activities that happen during the breaks. For some people, this part of a conference is the more interesting portion. Given we cannot be in a shared physical space together, we've created a specific Zelda and Dragon Quest inspired online venue.

You can [find the technical implementation at GitHub](https://github.com/ReactFinland/venue) and you can [try a single user version online](https://reactfinland.github.io/venue/). I'll send you a join link to the multi-user version early in the conference week so that you can meet other people there.

I've made sure you can join different streams through the venue and see their recordings as well. It's also a good chance to learn more about our sponsors and of course meet other people. We follow [Berlin Code of Conduct](https://berlincodeofconduct.org/) and mutual respect goes a long way so be kind when meeting other people.

## Matchmaking through Brella

In addition to providing an online venue for random encounters, we use the [Brella](https://www.brella.io/) platform for matchmaking. The idea is that you can mark your interests and then set up meetings with other participants during the week. It can be a good chance to build up contacts and learn more so make sure to get most out of this opportunity.

[To join Brella, follow this link and register](https://next.brella.io/join/reactfinland2021). Make sure to add your interests there and set up meetings with other people.

## Slack

Historically React Finland has relied on Slack for communication. We still have the option and you can [join our Slack here](https://join.slack.com/t/react-finland/shared_invite/enQtMzQ0NDM1ODczMjE2LTI3MjZlZGNjNTNkOTU5N2E1OWYxYzY0MWE0Y2NiNWMxMWZiMWEyYjc4MmM1ZDQwZmFhOTkyODBmM2E4NjcxZjM). It's mainly used for official communications and generally it's not the most active Slack out there but you can still join if you want to.

## Conclusion

I hope you enjoy this year's React Finland. It's the first online conference for us and we'll cover a record amount of topics related to React. Our hope is that we can make it a great experience for all and get most out of this week of learning together.`;
*/

const main = `
## How to get to Helsinki, Finland?

Geographically Finland is a bit like an island and it's separated from most of the Europe by a sea. That said, there are a few ways to reach Helsinki, Finland:

* If you come from within the country, public transport (bus, train) is a good and affordable option. Expect to spend tens of euros on a trip.
* If you come from Estonia or Sweden, consider using a ferry (about 2h).
* If you come from Germany, there's a [Finnlines ferry](https://www.finnlines.com) from Travemünde to Helsinki (about 29h). It's possible to get an affordable flight especially from Berlin to Helsinki.
* If you come from any other location, a detour from any of the places above or direct options (usually a flight) are available. Helsinki is easy to reach by flying as it's the capital city of Finland and the best connected part of the country.

## Where to stay?

* [Hotel F6](https://www.hotelf6.fi/) - Roughly 160€ per night.
* [Omena Hotels](https://www.omenahotels.com/en/) - Roughly 60-80€ per night. Minimal service. Two separate hotels.
* [Kongressikoti Hotel](http://kongressikoti.fi/) - Roughly 60€ per night.
* [Hostel Diana Park](http://www.dianapark.fi/) - Roughly 30€ per night.

## I am from a country that requires a visa for Finland. How can I get one?

The way it works is that you'll need a letter of recommendation from us. It serves a dual purpose - it will help you to get the visa and it will help you to get across the border as you can show the document when you enter the country.

In order for us to procure this document for you, please send us email (info <at> react-finland.fi) including the following information:

* Name
* Date of birth
* Address
* Passport number
* The purpose of the visit
* The length of the visit

In response, we'll send you a signed pdf you can then present to your authorities and to ours at the border. You should apply for **visitor visa**.

## How to get to the venue? What kind of transport options exist?

There's a direct train from the airport to Helsinki center. HSL operates the local public transport system. You can find a city bike system as well. From city center, take a tram or metro to Hakaniemi.

To get to the center for airport, you can use train, Finnair buses or taxi. It seems that nowadays there might be some fake taxis, so use reliable taxi services like TaksiHelsinki, Lahitaksi, Kovanen or FixuTaxi. Note that taxis are very expensive in Helsinki.

## What kind of food is available?

We'll provide coffee and snacks during the longer breaks. During the lunch break we use the two restaurants available within the venue. You'll have buffet style food awaiting you and we accommodate to your special needs (vegetarian, vegan, glucose free, etc.) based on your preferences. You can indicate this when buying a ticket so we know to prepare the right kind of food for you. All the food is included to the price of the ticket and it's available both for workshops and the conference itself.

## What to take with you?

Assuming you want to sauna and swim, bring a swimming suit and optionally a towel (often you can borrow one). Personal laptop might go in handy, especially if you participate in the workshops!

## How to follow the conference program?

1. Use the site [schedule](/schedule/).
2. [Subscribe to the conference calendar](https://api.react-finland.fi/calendar-2022.ics). You can import it to your Google Calendar for example.

## How to prepare for the workshops?

To start your workshop as quick and as smooth as possible, it's a good idea to spend some time beforehand. Make sure to install at least the following software to your laptop:

* [Git](https://git-scm.com/) 2.0, or newer
* [Node.js](https://nodejs.org/) 10.0, or newer
* [npm](https://www.npmjs.com/) 6.0, or newer. Consider using either [n](https://github.com/tj/n) or [nvm](https://github.com/creationix/nvm) for managing the version.

> Run \`git --version\`, \`node --version\`, and \`npm --version\` to check versions you have installed.

You should check your workshop requirements for any further requirements. Usually a workshop has a Git repository related to it. [Check the workshop description](/workshops/) for a link. If there's one, make sure you set it up while you perform the work above.

## When can I register?

Registration is possible in any of the conference days. The desk will be close to the entrance of the venue.

## What should I know about Finland?

* We speak Finnish, English, and Swedish (poorly most often). [Check out our brief guide to Finnish](/blog/brief-guide-to-finnish-vol--1---basics-7f43f37d5017/) in order to surprise the locals.
* We use euro as our currency.
* Expect the weather to be quite warm (at least 20 C (68 F)). Since the conference is held in late May, the likelyhood for warm weather is high. Consider bringing shorts. Services like [Foreca](https://www.foreca.fi) and [Ilmatieteenlaitos](https://ilmatieteenlaitos.fi) are good for tracking weather.
* Our electricity network standard voltage is 230 V (50 Hz). The socket style is type F (Schuko) (symmetrical and looks like a pig snout). It accepts plug C and E too.
* Finland is generally considered a safe country. Do **not** try to go past people in the grill queue, through, as that's a common way to find yourself in a trouble.
* Finland has around 5.5 million residents. To give you a comparison point, that's about 1.5 times the population of Berlin spread around the area of whole Finland (roughly the size of Germany).
* When you visit a Finnish household, remember to remove your shoes at the anteroom. It's a common habit and we prefer not to wear shoes inside apart from public spaces.
`;

const secondary = `
The conference will be held at [Paasitorni](https://www.paasitorni.fi/en/), a historic building in Siltasaari, near the center of Helsinki. Paasitorni is a gorgeous Art Noveue building that in past served as Worker's House. From 12th to 14th, several meeting rooms will be used for the workshops. On 15th and 16th, the big congress hall will be the main conference location.
`;

const ForAttendees = () => (
  <>
    <section className="intro intro_attendees">
      <div className="intro--main">
        <Markdown source={intro} />
      </div>
      <aside className="intro--aside" />
    </section>
    <AnchorHeader level={2}>The Venue</AnchorHeader>
    <div className="grid--5col">
      <img
        alt="Paasitorni"
        style={{ width: "100%" }}
        src={
          "https://www.paasitorni.fi/app/uploads/2017/12/IMG_2411-1-1000x667.jpg"
        }
      />
      <Markdown source={secondary} />
    </div>
    {/*
    <AnchorHeader level={3}>The Venue Location</AnchorHeader>
    <div className="grid--full">
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1TtRyfUF_tBBpKPf4MolkhdaN_3HHcG_9"
        width="100%"
        height="480"
        frameBorder="0"
        title="Google maps"
      />
      <ul>
        <li>Blue star - Paasitorni, Paasivuorenkatu 5 A - Main venue</li>
        <li>
          Red train - Main railway station - Likely you will arrive here from
          the airport
        </li>
        <li>
          Purple drink - Tiivistämö, Kaasutehtaankatu 1 - Friday afterparty
        </li>
      </ul>
    </div>
    */}
    <div className="grid--5col">
      <Markdown source={main} />
    </div>
  </>
);

export default ForAttendees;
