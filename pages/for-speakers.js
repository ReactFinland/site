import React from "react";
import { AnchorHeader, Markdown } from "components";

const ForSpeakers = () => (
  <>
    <section className="intro intro_attendees">
      <div className="intro--main">
        <Markdown
          source={`Attendance info with a focus on you, our dear speaker.`}
        />
      </div>
      <aside className="intro--aside" />
    </section>
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
        source={`The conference will be held at [Paasitorni](https://www.paasitorni.fi/en/), a historic building in Siltasaari, near the center of Helsinki. Paasitorni is a gorgeous Art Noveue building that in past served as Worker's House.

On 24th, several meeting rooms will be used for the workshops. On 25th and 26th, the big congress hall will be the main conference location. For speakers, there is going to be a top floor speaker room during the conference.`}
      />
    </div>
    <div className="grid--5col">
      <Markdown
        source={`
## Hotel

We booked you all at [Scandic Paasi](https://www.scandichotels.com/hotels/finland/helsinki/scandic-paasi?cmpid=ppc_BH2nd&gclid=Cj0KCQjw6fvdBRCbARIsABGZ-vR4KRNmrnasn45hHa-ekzL1kAtPWXVo_gfnkVIq2Ah-dsZT7IuFyk4aArTkEALw_wcB). You are booked for your whole stay (for the time discussed with each of your individually). There is breakfast. In case you were one of the sponsors, who agreed to pay for their expenses, you'd need to pay for the hotel at checkout, otherwise we've paid for the hotel already and you don't need to do anything.

## How to Get to the hotel?

If you want to use public transport, we recommend bus 615 to Hakaniemi. It's a short walk (about 100 meters) from there to the hotel.

Another option is to take a train or Finnair bus to railway station. From there you need to take tram 9 to Hakaniemi.

Alternatively, you can take a taxi. Save the receipt so we can reimburse you. There are several taxis in the airport, take reputable one like Taksi Helsinki. Note that it's not cheap, expect 50 euros.`}
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


Speakers' dinner will be held on 24th at [Restaurant Juuri](https://juuri.fi/en/) (Korkeavuorenkatu 27) starting from 18:30. We'll meet 18:00 at the front of the hotel (Scandic Paasi) and travel from there. If you want to get to the restaurant on your own, please let us know so we don't wait for you. :)
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
## What Should I Know About Finland?

* We speak Finnish, English, and Swedish (poorly most often). [Check out our brief guide to Finnish](https://medium.com/react-finland/brief-guide-to-finnish-7f43f37d5017) in order to surprise the locals.
* We use euro as our currency.
* Our electricity network standard voltage is 230 V (50 Hz). The socket style is type F (Schuko) (symmetrical and looks like pig snout). It accepts plug C and E too.
* Finland is generally considered a safe country. Do **not** try to go past people in the grill queue, through, as that's a common way to find yourself in a trouble.
* Finland has around 5.5 million residents. To give you a comparison point, that's about 1.5 times the population of Berlin spread around the area of whole Finland (roughly the size of Germany).`}
      />
    </div>
  </>
);

export default ForSpeakers;
