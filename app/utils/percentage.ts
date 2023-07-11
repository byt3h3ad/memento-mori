import addDays from "date-fns/addDays";

const calculatePercentage = (): string => {
  const start = new Date("2002-08-21");
  const end = addDays(start, 75 * 365);
  const total = end.getTime() - start.getTime();
  const today = Date.now() - start.getTime();
  const percent = (today / total) * 100;
  return percent.toFixed(2);
};

export { calculatePercentage };
