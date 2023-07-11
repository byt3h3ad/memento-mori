"use client";
import { Tooltip } from "react-tooltip";
import { generator } from "./utils/generator";
import { calculatePercentage } from "./utils/percentage";
import Day from "./components/Day";

function App() {
  const days = generator();
  const percentage = calculatePercentage();
  return (
    <main className="p-16 sm:p-24">
      <section className="pb-12 md:text-xl grid justify-center text-center">
        <h1 className="text-5xl md:text-7xl uppercase pb-8">memento mori</h1>
        <div className="text-left">
          <p className="italic font-extralight pl-4">noun</p>
          <p className="italic font-light pl-16">
            an object kept as a reminder of the inevitability of death
          </p>
          <p className="my-4 slashed-zero oldstyle-nums text-2xl text-bold text-center">
            Life {percentage}% complete.
          </p>
        </div>
      </section>
      <section id="container">
        {days.map((day, idx) => {
          return (
            <Day
              key={idx}
              date={day.date}
              past={day.past}
              url={day.url}
              today={day.today}
              family={day.family}
              summary={day.summary}
              birthday={day.birthday}
            />
          );
        })}
      </section>
      <Tooltip id="tooltip" />
    </main>
  );
}

export default App;
