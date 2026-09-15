import { useState } from "react";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  BookOpen,
} from "lucide-react";

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

  const isToday = (day) => {
    const today = new Date();

    return (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    );
  };

  return (
    <section className="max-w-[1400px] mx-auto space-y-8">
      {/*  HEADER  */}

      <div>
        <p className="text-xs uppercase tracking-[0.18em] font-semibold text-violet-400 mb-2">
          Your journal
        </p>

        <div className="flex items-center gap-3">
          <div
            className="
              w-11
              h-11
              rounded-xl
              bg-violet-600/15
              border
              border-violet-500/25
              flex
              items-center
              justify-center
            "
          >
            <CalendarDays size={22} className="text-violet-400" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Calendar
          </h1>
        </div>

        <p className="text-slate-400 mt-2 text-sm md:text-base">
          Take a look back at the days you've written about.
        </p>
      </div>

      {/*  CALENDAR CARD  */}

      <div
        className="
          relative
          overflow-hidden
          bg-slate-900/80
          border
          border-slate-800
          rounded-3xl
          p-5
          md:p-7
          lg:p-8
          shadow-xl
        "
      >
        {/* Background glow */}

        <div
          className="
            absolute
            -top-32
            -right-32
            w-80
            h-80
            rounded-full
            bg-violet-600/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-40
            left-1/3
            w-80
            h-80
            rounded-full
            bg-blue-600/5
            blur-3xl
          "
        />

        <div className="relative">
          {/* Month Navigation */}

          <div className="flex items-center justify-between mb-7">
            <button
              onClick={prevMonth}
              aria-label="Previous month"
              className="
                w-11
                h-11
                flex
                items-center
                justify-center
                rounded-xl
                bg-slate-800/80
                border
                border-slate-700
                text-slate-400
                hover:bg-violet-600
                hover:border-violet-500
                hover:text-white
                transition-all
                duration-200
              "
            >
              <ChevronLeft size={20} />
            </button>

            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-bold text-white">
                {currentDate.toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                })}
              </h2>

              <p className="text-xs text-slate-500 mt-1">
                {entries.length} {entries.length === 1 ? "entry" : "entries"} in
                your journal
              </p>
            </div>

            <button
              onClick={nextMonth}
              aria-label="Next month"
              className="
                w-11
                h-11
                flex
                items-center
                justify-center
                rounded-xl
                bg-slate-800/80
                border
                border-slate-700
                text-slate-400
                hover:bg-violet-600
                hover:border-violet-500
                hover:text-white
                transition-all
                duration-200
              "
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Week Names */}

          <div className="grid grid-cols-7 gap-2 md:gap-3 mb-3">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="
                    text-center
                    text-[11px]
                    md:text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-slate-500
                    py-2
                  "
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}

          <div className="grid grid-cols-7 gap-2 md:gap-3">
            {/* Empty cells */}

            {Array.from({ length: firstWeekday }).map((_, i) => (
              <div key={`empty-${i}`} className="h-16 md:h-20 lg:h-24" />
            ))}

            {/* Days */}

            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;

              const today = isToday(day);

              const selected =
                day === selectedDate.getDate() &&
                month === selectedDate.getMonth() &&
                year === selectedDate.getFullYear();

              const entryExists = hasEntry(day);

              return (
                <button
                  key={day}
                  onClick={() => setSelectedDate(new Date(year, month, day))}
                  className={`
                    group
                    relative
                    h-16
                    md:h-20
                    lg:h-24
                    rounded-xl
                    border
                    flex
                    flex-col
                    items-center
                    justify-center
                    transition-all
                    duration-200

                    ${
                      selected
                        ? "bg-violet-600 border-violet-500 text-white shadow-lg shadow-violet-600/20"
                        : "bg-slate-800/60 border-slate-800 text-slate-300 hover:bg-slate-800 hover:border-slate-700 hover:text-white"
                    }

                    ${today && !selected ? "ring-1 ring-blue-500/80" : ""}
                  `}
                >
                  {/* Day */}

                  <span
                    className={`
                      text-sm
                      md:text-base
                      font-medium
                      ${
                        selected
                          ? "text-white"
                          : today
                            ? "text-blue-400"
                            : "text-slate-300"
                      }
                    `}
                  >
                    {day}
                  </span>

                  {/* Entry Indicator */}

                  {entryExists && (
                    <span
                      className={`
                        absolute
                        bottom-2.5
                        w-1.5
                        h-1.5
                        rounded-full
                        ${selected ? "bg-white" : "bg-violet-400"}
                      `}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Legend */}

          <div className="flex flex-wrap items-center gap-5 mt-7 pt-5 border-t border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet-400" />

              <span className="text-xs text-slate-500">Journal entry</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400" />

              <span className="text-xs text-slate-500">Today</span>
            </div>
          </div>
        </div>
      </div>

      {/*  SELECTED DATE  */}

      <div
        className="
          relative
          overflow-hidden
          bg-slate-900/80
          border
          border-slate-800
          rounded-3xl
          p-5
          md:p-7
          shadow-xl
        "
      >
        <div className="relative">
          {/* Selected Date Header */}

          <div className="flex items-start gap-4 mb-6">
            <div
              className="
                w-12
                h-12
                shrink-0
                rounded-xl
                bg-blue-500/10
                border
                border-blue-500/20
                flex
                items-center
                justify-center
              "
            >
              <BookOpen size={21} className="text-blue-400" />
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Selected day
              </p>

              <h2 className="text-xl md:text-2xl font-bold text-white mt-1">
                {selectedDate.toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </h2>
            </div>
          </div>

          {/* Selected Entries */}

          {selectedEntries.length === 0 ? (
            <div
              className="
                rounded-2xl
                border
                border-dashed
                border-slate-800
                bg-slate-950/30
                p-8
                text-center
              "
            >
              <p className="text-slate-400 text-sm">No entries for this day.</p>

              <p className="text-slate-600 text-xs mt-2">
                Your memories from this day will appear here.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {selectedEntries.map((entry) => (
                <div
                  key={entry.id}
                  className="
                    group
                    bg-slate-800/60
                    border
                    border-slate-700
                    rounded-2xl
                    p-5
                    transition-all
                    duration-200
                    hover:border-violet-500/40
                  "
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg md:text-xl font-semibold text-white break-words">
                      {entry.sub}
                    </h3>

                    <span className="shrink-0 text-xs text-violet-400">
                      #{entry.entry_no}
                    </span>
                  </div>

                  <p className="text-slate-400 mt-3 text-sm md:text-base leading-7 break-words">
                    {entry.cont.substring(0, 150)}
                    {entry.cont.length > 150 && "..."}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
