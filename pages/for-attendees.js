import React from "react";
import { AnchorHeader, Markdown } from "components";

const intro =
  "There are several things you must know before coming to React Finland. Read on to learn more.";

const main = `
## Where to Stay?

* [Hotel F6](https://www.hotelf6.fi/) - Roughly 160€ per night.
* [Omena Hotels](https://www.omenahotels.com/en/) - Roughly 60-80€ per night. Minimal service. Two separate hotels.
* [Kongressikoti Hotel](http://kongressikoti.fi/) - Roughly 60€ per night.
* [Hostel Diana Park](http://www.dianapark.fi/) - Roughly 30€ per night.

## How to Get to the Venue?

There's a direct train from the airport to Helsinki center. HSL operates the local public transport system. You can find a city bike system as well. From city center, take a tram or metro to Hakaniemi.

To get to the center for airport, you can use train, Finnair buses or taxi. It seems that nowadays there might be some fake taxis, so use reliable taxi services like TaksiHelsinki, Lahitaksi, Kovanen or FixuTaxi. Note that taxis are very expensive in Helsinki.

## What to Take with You?

1. A swimming suit.
2. A towel.
3. A laptop. The first two are needed only if you go to sauna and swim.

## How to Follow the Conference Program?

1. Use the site [schedule](/schedule/).
2. Use the mobile applications (Android, iPhone).
3. [Subscribe to the conference calendar](https://api.react-finland.fi/calendar-2019.ics). You can import it to your Google Calendar for example.

## When Can I Register?

Registration is possible in any of the conference days. The desk will be close to the entrance of the venue.

## What Should I Know About Finland?

* We speak Finnish, English, and Swedish (poorly most often). [Check out our brief guide to Finnish](https://medium.com/react-finland/brief-guide-to-finnish-7f43f37d5017) in order to surprise the locals.
* We use euro as our currency.
* Finland is generally considered a safe country. Do **not** try to go past people in the grill queue, through, as that's a common way to find yourself in a trouble.
* Finland has about 5.5 million residents. That's about 1.6 times the population of Berlin spread around a big area. Whole Germany has roughly the same land area.
* Some Finns don't like if you tell them Finland is a part of Scandinavia. Technically a small part in the north is but some consider Finland as a culturally separate entity. The more inclusive term to use might be *Nordic countries* (Finland and the rest).
`;

const secondary = `
The conference will be held at [Paasitorni](https://www.paasitorni.fi/en/), a historic building in Siltasaari, near the center of Helsinki. Paasitorni is a gorgeous Art Noveue building that in past served as Worker's House. On 24th, several meeting rooms will be used for the workshops. On 25th and 26th, the big congress hall will be the main conference location.
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
        <li>Blue star - Paasitorni, Paasivuorenkatu 5 A</li>
        <li>Red train - Main railway station</li>
        <li>Yellow swimmer - Allas Sea Pool</li>
      </ul>
    </div>
    <div className="grid--5col">
      <Markdown source={main} />
    </div>
  </>
);

export default ForAttendees;
