// TODO: waiting on baseline // before that build the checker I tried this kinda quick but didn't get there
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

export function isWithinBusinessHours() {

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

  const currentTime =
    Temporal.Now.zonedDateTimeISO(businessTimeZone).toPlainTime();

  const currentDay =
    dayKeys[Temporal.Now.zonedDateTimeISO(businessTimeZone).dayOfWeek - 1];

  const isOpenDay = currentDay
    ? (strapiForm?.days?.[currentDay] ?? false)
    : false;

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
