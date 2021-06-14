import React from "react";
import {
  AnchorHeader,
  Markdown,
  Schedule as ScheduleComp,
  // ScheduleLegend,
  connect,
} from "../components";

const Schedule = ({ conference, year }) => {
  if (!conference) {
    return null;
  }
  return (
    <>
      <section className="intro intro_schedule">
        <div className="intro--main">
          <Markdown
            source={`Note that the times have been adjusted to your local timezone automatically.

> It's possible to [subscribe to the conference calendar directly to keep up to date with any changes](https://api.react-finland.fi/calendar-2021.ics).`}
          />
        </div>
        <aside className="intro--aside" />
      </section>
      <div className="grid--5col grid--full-mobile" id="schedule">
        {/*conference.schedules && <ScheduleLegend />*/}
        {conference.schedules.map(({ day, description, intervals }) => (
          <React.Fragment key={day}>
            <AnchorHeader level={2}>
              {day}
              {description && ` - ${description}`}
            </AnchorHeader>
            <ScheduleComp intervals={intervals} prefix={year} />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default ({ conferenceId, year }) =>
  connect(
    `
query PageQuery($conferenceId: ID!) {
  conference(id: $conferenceId) {
    schedules {
      day
      description
      intervals {
        begin
        end
        title
        location {
          name
          social {
            googleMaps
          }
          address
          city
        }
        sessions {
          type
          title
          description
          speakers {
            name
            image {
              url
            }
          }
          keywords
          urls {
            slides
            web
          }
          sessions {
            type
            title
            description
            speakers {
              name
              image {
                url
              }
            }
            keywords
            urls {
              slides
              web
            }
          }
        }
      }
    }
  }
}
`,
    () => ({ conferenceId }),
    { year }
  )(Schedule);
