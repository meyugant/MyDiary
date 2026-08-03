import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CalendarPage({ entries }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const firstWeekday = firstDay.getDay();
  const daysInMonth = lastDay.getDate();

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const hasEntry = (day) => {
    return entries.some((entry) => {
      const d = new Date(entry.dt);

      return (
        d.getDate() === day &&
        d.getMonth() === month &&
        d.getFullYear() === year
      );
    });
  };

  const selectedEntries = entries.filter((entry) => {
    const d = new Date(entry.dt);

    return (
      d.getDate() === selectedDate.getDate() &&
      d.getMonth() === selectedDate.getMonth() &&
      d.getFullYear() === selectedDate.getFullYear()
    );
  });

  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="flex justify-between items-center">
        <button
          onClick={prevMonth}
          className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800"
        >
          <ChevronLeft />
        </button>

        <h1 className="text-3xl font-bold text-white">
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h1>

        <button
          onClick={nextMonth}
          className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Week Names */}

      <div className="grid grid-cols-7 gap-3 text-center text-slate-400 font-semibold">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* Calendar */}

      <div className="grid grid-cols-7 gap-3">
        {Array.from({ length: firstWeekday }).map((_, i) => (
          <div key={i}></div>
        ))}

        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;

          const today =
            day === new Date().getDate() &&
            month === new Date().getMonth() &&
            year === new Date().getFullYear();

          const selected =
            day === selectedDate.getDate() &&
            month === selectedDate.getMonth() &&
            year === selectedDate.getFullYear();

          return (
            <button
              key={day}
              onClick={() => setSelectedDate(new Date(year, month, day))}
              className={`
                h-20 rounded-2xl relative transition
                ${
                  selected
                    ? "bg-violet-600 text-white"
                    : "bg-slate-900 text-slate-300 hover:bg-slate-800"
                }
                ${today ? "ring-2 ring-blue-500" : ""}
              `}
            >
              <div className="mt-2">{day}</div>

              {hasEntry(day) && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-violet-400"></div>
              )}
            </button>
          );
        })}
      </div>

      {/* Entries */}

      <div className="bg-slate-900 rounded-3xl p-6">
        <h2 className="text-2xl font-bold text-white mb-6">
          Entries on{" "}
          {selectedDate.toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </h2>

        {selectedEntries.length === 0 ? (
          <p className="text-slate-400">No entries for this day.</p>
        ) : (
          <div className="space-y-4">
            {selectedEntries.map((entry) => (
              <div key={entry.id} className="bg-slate-800 rounded-2xl p-5">
                <h3 className="text-xl font-semibold text-white">
                  {entry.sub}
                </h3>

                <p className="text-slate-400 mt-2">
                  {entry.cont.substring(0, 150)}
                  {entry.cont.length > 150 && "..."}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
