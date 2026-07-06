// TODO: waiting on baseline // before that build the checker I tried this kinda quick but didn't get there
// TODO: also push the data to a netlify function so I can understand what and where the form has temporal issues without putting it all in the email
import { Temporal } from "@js-temporal/polyfill";
import { graphql, useStaticQuery } from "gatsby";
const businessTimeZone = "America/Los_Angeles";

type BusinessHoursInput = {
  opening: string;
  closing: string;
  days: {
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
  };
};

const dayKeys: Array<keyof BusinessHoursInput["days"]> = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export function useIsWithinBusinessHours() {

  const { strapiForm } = useStaticQuery(graphql`
    query BusinessHoursQuery {
      strapiForm {
        opening
        closing
        days {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
      }
    }
  `);

  const currentDay =
    dayKeys[Temporal.Now.zonedDateTimeISO(businessTimeZone).dayOfWeek - 1];

  const isOpenDay = currentDay
    ? (strapiForm?.days?.[currentDay] ?? false)
    : false;

  console.log("isOpenDay", isOpenDay);

  const currentTime =
    Temporal.Now.zonedDateTimeISO(businessTimeZone).toPlainTime();

  // console.log("currentTime", currentTime.toString());

  console.log("afterOpening", Temporal.PlainTime.compare(
    currentTime,
    Temporal.PlainTime.from(strapiForm.opening),
  ) >= 0)

  console.log("beforeClosing", Temporal.PlainTime.compare(
    currentTime,
    Temporal.PlainTime.from(strapiForm.closing),
  ) < 0)

  // console.log("isOpenDay", isOpenDay);
  console.log("isOpen", Temporal.PlainTime.compare(
    currentTime,
    Temporal.PlainTime.from(strapiForm.opening),
  ) >= 0 &&
    Temporal.PlainTime.compare(
      currentTime,
      Temporal.PlainTime.from(strapiForm.closing),
    ) < 0)
  /*------------------------------------*/

  return (
    isOpenDay &&
    Temporal.PlainTime.compare(
      currentTime,
      Temporal.PlainTime.from(strapiForm.opening),
    ) >= 0 &&
    Temporal.PlainTime.compare(
      currentTime,
      Temporal.PlainTime.from(strapiForm.closing),
    ) < 0
  );
}
