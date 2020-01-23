import React from "react";
import { AnchorHeader, Markdown } from "components";

const intro =
  "There are several things you must know before coming to React Finland. Read on to learn more.";

const main = `
## How to get to Helsinki, Finland?

Geographically Finland is a bit like an island and it's separated from most of the Europe by a sea. That said, there are a few ways to reach Helsinki, Finland:

* If you come from within the country, public transport (bus, train) is a good and affordable option. Expect to spend tens of euros on a trip.
* If you come from Russia, there's a convenient train from St. Petersburg (about 3.5h).
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

## What kind of food is available at the venue?

We'll provide coffee and snacks during the longer breaks. During the lunch break we use the two restaurants available within the venue. You'll have buffet style food awaiting you and we accommodate to your special needs (vegetarian, vegan, glucose free, etc.) based on your preferences. You can indicate this when buying a ticket so we know to prepare the right kind of food for you. All the food is included to the price of the ticket and it's available both for workshops and the conference itself.

## What to take with you?

Assuming you want to sauna and swim, bring a swimming suit and optionally a towel (often you can borrow one). Personal laptop might go in handy, especially if you participate in the workshops!

## How to follow the conference program?

1. Use the site [schedule](/schedule/).
2. Use the mobile applications (Android, iPhone).
3. [Subscribe to the conference calendar](https://api.react-finland.fi/calendar-2019.ics). You can import it to your Google Calendar for example.

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
* Our electricity network standard voltage is 230 V (50 Hz). The socket style is type F (Schuko) (symmetrical and looks like pig snout). It accepts plug C and E too.
* Finland is generally considered a safe country. Do **not** try to go past people in the grill queue, through, as that's a common way to find yourself in a trouble.
* Finland has around 5.5 million residents. To give you a comparison point, that's about 1.5 times the population of Berlin spread around the area of whole Finland (roughly the size of Germany).
* When you visit a Finnish household, remember to remove your shoes at the anteroom. It's a common habit and we prefer not to wear shoes inside apart from public spaces.
`;

const secondary = `
The conference will be held at [Paasitorni](https://www.paasitorni.fi/en/), a historic building in Siltasaari, near the center of Helsinki. Paasitorni is a gorgeous Art Noveue building that in past served as Worker's House. On 25th to 27th, several meeting rooms will be used for the workshops. On 28th and 29th, the big congress hall will be the main conference location.
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
    <div className="grid--5col">
      <Markdown source={main} />
    </div>
  </>
);

export default ForAttendees;
