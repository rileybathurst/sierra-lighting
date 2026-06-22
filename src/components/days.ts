type DaysSchedule = {
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
};

const dayKeys: Array<keyof DaysSchedule> = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

function isConsecutive(a: number, b: number) {
  return Math.abs(a - b) === 1;
}

function toDisplayDay(day: keyof DaysSchedule) {
  return day.charAt(0).toUpperCase() + day.slice(1);
}

export function days(schedule?: DaysSchedule | null) {
  if (!schedule) {
    return "hours vary";
  }

  const openDayIndices = dayKeys.reduce((indices, day, index) => {
    if (schedule[day]) {
      indices.push(index);
    }
    return indices;
  }, [] as number[]);

  if (openDayIndices.length === 0) {
    return "closed all week";
  }

  const groupedDays: number[][] = [];
  let currentGroup = [openDayIndices[0]];

  for (let i = 1; i < openDayIndices.length; i++) {
    if (isConsecutive(openDayIndices[i], openDayIndices[i - 1])) {
      currentGroup.push(openDayIndices[i]);
    } else {
      groupedDays.push(currentGroup);
      currentGroup = [openDayIndices[i]];
    }
  }
  if (currentGroup.length > 0) {
    groupedDays.push(currentGroup);
  }

  return groupedDays
    .map((group) => {
      if (group.length === 1) {
        return toDisplayDay(dayKeys[group[0]]);
      } else {
        return `${toDisplayDay(dayKeys[group[0]])} - ${toDisplayDay(dayKeys[group[group.length - 1]])}`;
      }
    })
    .join(", ");
}
