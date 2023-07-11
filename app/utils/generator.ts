import { addDays, format, isPast, isToday } from "date-fns";
import { days } from "./days";

interface DayObject {
  date: string;
  today: boolean;
  past: boolean;
  birthday: boolean;
  family?: boolean;
  summary?: string;
  url?: string;
}

const generator = (): DayObject[] => {
  const start = new Date("2002-08-21");
  const end = addDays(start, 75 * 365);
  const dateArray: DayObject[] = [];
  let current = start;
  while (current <= end) {
    const parsedDate = format(new Date(current), "do MMMM yyyy");
    const dateString = format(current, "yyyy-MM-dd");
    const past = isPast(current);
    const today = isToday(current);
    const day = current.getDate();
    const month = current.getMonth() + 1;
    const birthday = day === 21 && month === 8;
    const family: boolean | undefined =
      dateString in days ? days[dateString].family : undefined;
    const url: string | undefined =
      dateString in days ? days[dateString].url : undefined;
    const summary: string | undefined =
      dateString in days ? days[dateString].summary : undefined;
    dateArray.push({
      date: parsedDate,
      url,
      past,
      today,
      summary,
      birthday,
      family,
    });
    current = addDays(current, 1);
  }
  return dateArray;
};

export { generator };
