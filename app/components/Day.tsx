interface dayData {
  date: string;
  today: boolean;
  past: boolean;
  birthday: boolean;
  summary?: string;
  url?: string;
}

const Day = ({ date, today, past, birthday, url, summary }: dayData) => {
  const divStyle = {
    background:
      birthday && past
        ? "#0969DA"
        : (url || summary) && past
        ? "#40C643"
        : today
        ? "#FB923C"
        : past
        ? "#bfbfbf"
        : "#EBEDF0",

    outline: "1 px solid rgba(27, 31, 35, 0.06)",
  };
  if (url) {
    return (
      <a href={url} target="_blank">
        <div
          data-tooltip-id="tooltip"
          data-tooltip-html={
            today
              ? `${date}: Today!`
              : summary
              ? `${date}: <br /> ${summary}`
              : date
          }
          id={today ? "today" : undefined}
          className="w-3 h-3 rounded-sm"
          style={divStyle}
        ></div>
      </a>
    );
  }
  return (
    <div
      data-tooltip-id="tooltip"
      data-tooltip-html={
        today
          ? `${date}: Today!`
          : summary
          ? `${date}: <br /> ${summary}`
          : date
      }
      id={today ? "today" : undefined}
      className="w-3 h-3 rounded-sm"
      style={divStyle}
    ></div>
  );
};

export default Day;
