"use client"
import { Tooltip } from "react-tooltip";
import { generator } from "./utils/generator";
import Day from "./components/Day";
import "./globals.css";

function App() {
  const days = generator();
  return (
    <main className="p-16 sm:p-24">
      <section className="pb-12 md:text-xl grid justify-center text-center">
        <h1 className="text-5xl md:text-7xl uppercase pb-8">memento mori</h1>
        <div className="text-left">
          <p className="italic font-extralight pl-4">noun</p>
          <p className="italic font-light pl-16">
            an object kept as a reminder of the inevitability of death
          </p>
        </div>
      </section>
      <section id="container">
        {days.map((day, i) => {
          return (
            <Day
              key={i}
              date={day.date}
              past={day.past}
              url={day.url}
              today={day.today}
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
