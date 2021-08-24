import React from "react";
import { /*AnchorHeader,*/ Markdown } from "components";

const ForSpeakers = () => (
  <>
    <section className="intro intro_attendees">
      <div className="intro--main">
        <Markdown
          source={`This document contains everything you need to know about attending React Finland as a speaker.`}
        />
      </div>
      <aside className="intro--aside" />
    </section>
    <div className="intro--main">
      <Markdown
        source={`Due to exceptional circumstances, React Finland 2021 takes place online. Because of this, there are several considerations:

1. Delivering the talk/demo online
2. Participating in online venue (optional)
3. Participating in matchmaking (optional)
4. Invoicing speaker fee (optional)

I've explained each in detail below.

## 1. Delivering the talk/demo online

The talks of React Finland take place through the [StreamYard](https://streamyard.com/) platform through a speaker's room where you'll find a producer, an MC (sometimes the producer as well), and other speakers. It is important that you [read StreamYard's instructions](https://support.streamyard.com/hc/en-us/articles/360043291612?_gl=1%2A18880y4%2A_ga%2ANjA3NTMzODYuMTYyODYwMTExOQ..%2A_ga_ESTLDCCGMF%2AMTYyOTcxNTAwNi4xNi4wLjE2Mjk3MTUwMDYuNjA.) as that will help to understand how their platform works.

I recommend using a Chrome based browser. If one isn't available, then Firefox is a good option. The platform will ask for mic and camera access and possibly something related to screensharing.

Generally, the sessions follow the following format:

0. Technical check (15 minutes before going live). During this, the producer will explain the technical features of the platform and you'll learn how we use it for communication during the sessions.
1. The session will go live to YouTube and Twitch (the producer will press the "go live" button)
2. There's a brief introduction to the theme and the speakers. Depending on the MC, you might introduce yourselves or the MC might introduce you.
3. The demonstrations take place. We've reserved 15 minutes for each with ~10 minutes for QA after the demonstration. The idea is that we pull questions and comments from YouTube and Twitch to include to the stream. As it happens, people are active through text and you may expect more feedback than in a live event.
4. After the demonstrations have finished, likely there's still some time left. The goal is to wrap up the session and address any possible questions that are still open. It's also a good spot for additional demonstrations in case somebody wants to show something.
5. When the session has ended, the MC will thank all the speakers and the stream will go offline. Speakers will head to their other duties.

Most of the sessions have been timeboxed to last 1.5 hour. In some cases with four speakers, we've allocated 2 hours. There's always at least half an hour between sessions so that there's a bit of room to go overtime (not more than 15 minutes) but generally we try to stay within the boundaries. It's also possible that the session ends sooner than anticipated which is fine too as there's no good reason to force discussion.

In case 15 minutes isn't enough, you can go ~5 minutes overtime. That's going to reduce the time for QA then. Consider ~20 minutes a hard limit.

To save time and make sure you are aligned with other speakers of the session, reach out to them and synchronize on your plans so you can avoid unnecessary repetition and can build on each other.

> Please note that we follow [Berlin Code of Conduct](https://berlincodeofconduct.org/) in the event. Mutual respect goes a long way.

> To get a better idea of how the format plays out, see [React Finland - Vodcast 4 - Next.js](https://www.youtube.com/watch?v=mMU-j0WoTCs) for example.

When it comes to the talk itself, you have two options for delivering it:

**1. Prerecord the talk and deliver it beforehand**

In this case, it's going to be more relaxed for you as you can do the recording when it's convenient for you and then edit it to fit the allocated time (15 minutes). Editing is particularly useful for speeding up sections that would be slow otherwise (i.e. waiting for a command to complete).

Prerecording also decreases technical risk for all parties (i.e. connectivity or other problems). If you want to prerecord, please send a link to the prerecording to "info at reactfinland.fi" a day before your session.

**2. Perform the talk live**

In this case, you would perform live. Then it's up to the MC to remind you if you are going overtime. Occasionally the MC and others may support you technically as well as it's easier to spot typos etc. in a group. There's some technical risk to the approach but at the same time some speakers prefer it to prerecording.

To make sure you'll find the StreamYard room at the right time, you'll receive a specific calendar invite with a join link. It will be timed to begin fifteen minutes before going live. Please be on time as this will reduce the heart pressure of the producer of the session a lot.

## 2. Participating in online venue (optional)

Given meeting other participants is an essential part of a conference, we're using a platform called [Work Adventure](https://workadventu.re/) to host a virtual venue. You can [try out venue without other users online](https://reactfinland.github.io/venue/) to get a better idea. Each session has a room of its own and it's possible to join them at the venue in addition to getting to know our sponsors better.

Participating in online venue is optional but we'll make sure you have access to it should you wish to.

## 3. Participating in matchmaking (optional)

Although Work Adventure addresses the concern of meeting other attendees in part, we use the [Brella](https://www.brella.io/) platform to enable more specific matchmaking. Using the service, people can schedule meetings with each other.

To become available through the platform, [please register here](https://next.brella.io/join/reactfinland2021). Especially if you want to have discussions about your topics with the attendees during the week long event, I believe this may be a worthwhile thing to do.

## 4. Invoicing speaker fee (optional)

The last part of business is invoicing. Due to legal requirements, we'll require an invoice for your services.

Unfortunately the limitation here is that we can receive invoices from legal business entities. We can, however, support an [open collective](https://opencollective.com/) selected by you with your speaker fee if you so wish.

If you invoice us, include the following details:

* Service - Speaking fee
* Cost - 200 eur. In case you have a Finnish business entity, make sure to include VAT (24%) on top.
* Receiver - TOSKA Osuuskunta
* Address - c/o Aleksi Pousar, Lauttasaarentie 16 A 17
* City - 00200 HELSINKI
* Country - Finland
* Business id - FI30883078

For foreign entities, you should mark VAT as reverse ("Reverse VAT" at the note with business id FI30883078) if you are VAT liable.`}
      />
    </div>
    {/*
    <AnchorHeader level={2}>Venue - Paasitorni</AnchorHeader>
    <div className="intro--main">
      <img
        alt="Paasitorni"
        style={{ width: "100%" }}
        src={
          "https://www.paasitorni.fi/app/uploads/2017/12/IMG_2411-1-1000x667.jpg"
        }
      />
      <Markdown
        source={`The conference will be held at [Paasitorni](https://www.paasitorni.fi/en/), a historic building in Siltasaari, near the center of Helsinki. Paasitorni is a gorgeous Art Nouveau building that in past served as Worker's House.

From 25th to 27th, several meeting rooms will be used for the workshops. On 28th and 29th, the big congress hall will be the main conference location. For speakers, there is going to be a top floor speaker room during the conference. You will also have access to the tower on top of the building so you can see Helsinki from a good spot.`}
      />
    </div>
    <div className="grid--5col">
      <Markdown
        source={`
## Hotel

We'll book four nights (extra night per workshop) at a hotel based on your travel dates. This includes breakfast. Exact hotel information will be provided as we know it.

## How to get to the hotel?

If you take a taxi, save the receipt so we can reimburse you. There are several taxis in the airport, take reputable one like Taksi Helsinki. Note that it's not cheap, expect 50 euros.`}
      />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.1274086421402!2d24.945750416227373!3d60.17862334967814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920bd360b9d6b9%3A0xcf348ada4853086d!2sScandic+Paasi!5e0!3m2!1sen!2sat!4v1555326003236!5m2!1sen!2sat"
        width="100%"
        height="480"
        frameBorder="0"
        title="Google maps"
      />
      <Markdown
        source={`
## Workshops

The workshops will also be held at Paasitorni, but in smaller rooms. There will be lunch and two breaks with some pastries during the workshop day, so make sure to have breaks at that time. Breaks will be held at the restaurant an it will be an additional opportunity to mingle between the workshop participant. The schedule for the workshops is:

* 08:00-09:00 - Registration
* 11:30-12:30 - Lunch break at the restaurant
* 14:00-14:20 - First coffee break at the room
* 15:40-16:00 - Second coffee break at the room
* 17:30 - Workshops end

Workshop hosts, I'll send you list of your attendees so you can email them with more info e.g. about required pre-installation steps.

The speakers' dinner will be held after the workshops.

## Talks

I'll remind you, but please do sound/equipment check on a break before your talk. The talks are divided into sessions. Depending on the session, you'll have between an hour and 1.5 hours to split between other speakers in the session.

Please coordinate on how to handle the timing with other speakers on the session. There's buffer between sessions (usually 30 min break) so the time limit isn't absolutely strict but preferred.

There won't be Q&A during the talks nor a panel at the end. However, we want to do a Q&A thingie that will happen after the talk. So on the next break after talk, I wonder if you could come to an informal Q&A session at the entrance foyer (I'll remind you about that too).

## Speakers' dinner

Speakers' dinner will be held on 27th (Wednesday) at [Restaurant Juuri](https://juuri.fi/en/) (Korkeavuorenkatu 27) starting from 18:30. We'll meet 18:00 at the front of the hotel (Scandic Paasi) and travel from there. If you want to get to the restaurant on your own, please let us know so we don't wait for you. :)
`}
      />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1985.019162021747!2d24.945076143228633!3d60.16386163418337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920bc8506d8a65%3A0xb7607b6188ddec2e!2sLuomus+Ravintolat+Oy!5e0!3m2!1sen!2sde!4v1555594669560!5m2!1sen!2sde"
        width="100%"
        height="480"
        frameBorder="0"
        title="Google maps"
      />
      <Markdown
        source={`
To learn more, please [read the attendee guide](/for-attendees/).`}
      />
    </div>
    */}
  </>
);

export default ForSpeakers;
