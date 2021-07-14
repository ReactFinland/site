import React from "react";
import { Markdown } from "components";

const intro = `
In this short guide, we list the important things to keep in mind when running satellite events around the conference.

For any questions, get in touch through our Slack (registration at site index) or via email (info at react-finland.fi).
`;

const main = `* The schedule has been planned so that there’s a late session for each day from Monday to Friday. The point is that it’s likely best to organize something around these times as people are free from their work by then. That said, if you want to organize something during the day (say internally), that’s viable as well. For some of the late events, the times differ to make sure we can bring American speakers onboard easily so take care when scheduling.
* It’s good to start the satellite event at least half an hour before the stream starts.
* For some of the events, we’ll try to bring speakers online from satellite events themselves.
* At the very least, there should be a person responsible for connecting to the stream through YouTube and then showing it on the screen. In addition, they should relay any questions and comments from the live audience to the stream through YouTube chat. These in turn can then be discussed live in the stream.
* When it comes to catering, it’s up to you to figure out if you want to offer something. If you do, it can be a good idea to consider vegan options.
* In terms of personnel restrictions, refer to the recommendations provided by the officials. There may be personnel limits and further requirements in place to consider.
* Especially for foreign events (as in not held in Finland), we can send a Finland related package to bring some of the cultural elements (salmiakki and other things) in play. It’s good to do this weeks beforehand so that the package will arrive in time.
* Marketing-wise, we will list all of the events on our website. It’s also recommended to collaborate with local meetups to run these events as joint events as they have the reach to the local community and many times they haven’t been able to do anything for a long time. Hopefully now we can restart their operations as a side effect.
* Health-wise, it's advised to follow the recommendations of the local authorities.`;

const SatelliteEventGuidelines = () => (
  <>
    <section className="intro intro_sponsors">
      <div className="intro--main">
        <Markdown source={intro} />
      </div>
      <aside className="intro--aside" />
    </section>
    <div className="grid--5col">
      <Markdown source={main} />
    </div>
  </>
);

export default SatelliteEventGuidelines;
