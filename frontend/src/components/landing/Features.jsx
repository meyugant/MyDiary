import {
  Search,
  CalendarDays,
  HeartPulse,
  ArrowRight,
  Smile,
  Sun,
  Sparkles,
} from "lucide-react";

export default function Features({ isDark }) {
  const cardBg = isDark
    ? "bg-slate-900 border border-slate-800"
    : "bg-white border border-slate-200 shadow-xl";

  const previewBg = isDark ? "bg-slate-800/80" : "bg-slate-100";

  const textPrimary = isDark ? "text-white" : "text-slate-900";
  const textSecondary = isDark ? "text-slate-400" : "text-slate-600";

  return (
    <section
      id="features"
      className={`py-28 md:py-32 ${isDark ? "bg-slate-950" : "bg-slate-50"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*  HEADER  */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-violet-400 font-semibold tracking-[0.2em] uppercase text-sm">
            <span className="w-8 h-px bg-violet-500/60"></span>
            Features
            <span className="w-8 h-px bg-violet-500/60"></span>
          </span>

          <h2
            className={`mt-5 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight ${textPrimary}`}
          >
            Designed for effortless journaling.
          </h2>

          <p className={`mt-6 text-base sm:text-lg leading-8 ${textSecondary}`}>
            Everything you need to capture memories, organize your thoughts and
            build a consistent writing habit.
          </p>
        </div>

        {/*  BLOCK 1  */}

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center mt-24 md:mt-28">
          {/* Text */}

          <div>
            <div
              className="
                w-14 h-14
                rounded-2xl
                bg-violet-600/15
                border border-violet-500/10
                flex items-center justify-center
                text-violet-400
                transition-all duration-300
                hover:bg-violet-600/25
                hover:border-violet-500/30
                hover:scale-105
              "
            >
              <Search size={27} strokeWidth={1.8} />
            </div>

            <h3
              className={`mt-7 text-3xl md:text-4xl font-bold leading-tight ${textPrimary}`}
            >
              Find every memory instantly.
            </h3>

            <p
              className={`mt-5 text-base md:text-lg leading-8 ${textSecondary}`}
            >
              Search by title, keyword, emotion or date. Never lose an important
              memory again.
            </p>

            <button
              className="
                mt-7
                group
                inline-flex
                items-center
                gap-2
                text-violet-400
                font-semibold
                transition-all
              "
            >
              Learn More
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* Search Preview */}

          <div
            className={`
              group
              relative
              rounded-3xl
              p-6 sm:p-8
              overflow-hidden
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-2xl
              ${
                isDark
                  ? "bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-violet-500/30 hover:shadow-violet-500/10"
                  : "bg-white border border-slate-200 shadow-xl hover:border-violet-300"
              }
            `}
          >
            {/* Glow */}

            <div className="absolute -top-20 -right-20 w-48 h-48 bg-violet-600/10 blur-3xl rounded-full" />

            {/* Search */}

            <div
              className={`
                relative
                flex
                items-center
                gap-3
                rounded-xl
                px-4
                py-3.5
                ${previewBg}
              `}
            >
              <Search size={19} className="text-violet-400 shrink-0" />

              <span className="text-sm sm:text-base text-slate-400">
                Search your memories...
              </span>
            </div>

            {/* Results */}

            <div className="relative space-y-4 mt-6">
              {[
                {
                  icon: Sun,
                  title: "Goa Trip 2025",
                },
                {
                  icon: Sparkles,
                  title: "Graduation Day",
                },
                {
                  icon: HeartPulse,
                  title: "First Job",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className={`
                      flex
                      items-center
                      gap-4
                      rounded-2xl
                      p-4 sm:p-5
                      transition-all duration-300
                      hover:translate-x-1
                      ${previewBg}
                    `}
                  >
                    <div
                      className="
                        w-10 h-10
                        rounded-xl
                        bg-violet-600/15
                        flex items-center justify-center
                        text-violet-400
                      "
                    >
                      <Icon size={19} strokeWidth={1.8} />
                    </div>

                    <span className={`font-medium ${textPrimary}`}>
                      {item.title}
                    </span>

                    <ArrowRight size={16} className="ml-auto text-slate-500" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/*  BLOCK 2  */}

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center mt-32 md:mt-40">
          {/* Calendar Preview */}

          <div
            className={`
              order-2 lg:order-1
              rounded-3xl
              p-6 sm:p-8
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-2xl
              ${
                isDark
                  ? "bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-violet-500/30 hover:shadow-violet-500/10"
                  : "bg-white border border-slate-200 shadow-xl hover:border-violet-300"
              }
            `}
          >
            {/* Calendar Header */}

            <div className="flex items-center justify-between mb-6">
              <div>
                <p className={`font-semibold ${textPrimary}`}>August 2026</p>

                <p className="text-xs text-slate-500 mt-1">
                  Your memories this month
                </p>
              </div>

              <div
                className="
                  w-10 h-10
                  rounded-xl
                  bg-violet-600/15
                  flex items-center justify-center
                  text-violet-400
                "
              >
                <CalendarDays size={20} />
              </div>
            </div>

            {/* Weekdays */}

            <div className="grid grid-cols-7 gap-2 mb-3">
              {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                <div
                  key={i}
                  className="text-center text-xs text-slate-500 font-medium"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar */}

            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 35 }).map((_, i) => {
                const active = i === 9 || i === 14 || i === 21 || i === 27;

                return (
                  <div
                    key={i}
                    className={`
                      aspect-square
                      rounded-lg
                      flex items-center justify-center
                      text-xs
                      transition-all duration-300
                      ${
                        active
                          ? "bg-violet-600 text-white shadow-lg shadow-violet-600/20"
                          : isDark
                            ? "bg-slate-800 text-slate-500 hover:bg-slate-700"
                            : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                      }
                    `}
                  >
                    {i + 1}
                  </div>
                );
              })}
            </div>

            {/* Legend */}

            <div className="flex items-center gap-4 mt-6 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-violet-500" />
                Journal entry
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                No entry
              </div>
            </div>
          </div>

          {/* Text */}

          <div className="order-1 lg:order-2">
            <div
              className="
                w-14 h-14
                rounded-2xl
                bg-violet-600/15
                border border-violet-500/10
                flex items-center justify-center
                text-violet-400
                transition-all duration-300
                hover:bg-violet-600/25
                hover:border-violet-500/30
                hover:scale-105
              "
            >
              <CalendarDays size={27} strokeWidth={1.8} />
            </div>

            <h3
              className={`mt-7 text-3xl md:text-4xl font-bold leading-tight ${textPrimary}`}
            >
              Visual calendar timeline.
            </h3>

            <p
              className={`mt-5 text-base md:text-lg leading-8 ${textSecondary}`}
            >
              Browse your life month by month and revisit memories from any
              date.
            </p>
          </div>
        </div>

        {/*  BLOCK 3  */}

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center mt-32 md:mt-40">
          {/* Text */}

          <div>
            <div
              className="
                w-14 h-14
                rounded-2xl
                bg-violet-600/15
                border border-violet-500/10
                flex items-center justify-center
                text-violet-400
                transition-all duration-300
                hover:bg-violet-600/25
                hover:border-violet-500/30
                hover:scale-105
              "
            >
              <HeartPulse size={27} strokeWidth={1.8} />
            </div>

            <h3
              className={`mt-7 text-3xl md:text-4xl font-bold leading-tight ${textPrimary}`}
            >
              Understand your emotions.
            </h3>

            <p
              className={`mt-5 text-base md:text-lg leading-8 ${textSecondary}`}
            >
              Track your mood every day and discover patterns that help you
              understand your emotional journey.
            </p>
          </div>

          {/* Mood Preview */}

          <div
            className={`
              rounded-3xl
              p-7 sm:p-10
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-2xl
              ${
                isDark
                  ? "bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-violet-500/30 hover:shadow-violet-500/10"
                  : "bg-white border border-slate-200 shadow-xl hover:border-violet-300"
              }
            `}
          >
            {/* Chart Header */}

            <div className="flex items-center justify-between mb-8">
              <div>
                <p className={`font-semibold ${textPrimary}`}>Mood overview</p>

                <p className="text-xs text-slate-500 mt-1">Last 7 entries</p>
              </div>

              <div
                className="
                  w-10 h-10
                  rounded-xl
                  bg-violet-600/15
                  flex items-center justify-center
                  text-violet-400
                "
              >
                <HeartPulse size={19} />
              </div>
            </div>

            {/* Chart */}

            <div className="flex justify-between items-end h-52 gap-3">
              {["h-24", "h-32", "h-40", "h-52", "h-44", "h-32", "h-20"].map(
                (height, i) => (
                  <div key={i} className="flex-1 h-full flex items-end">
                    <div
                      className={`
                      w-full
                      ${height}
                      rounded-full
                      transition-all duration-500
                      hover:scale-x-110
                      ${
                        i === 3
                          ? "bg-violet-600 shadow-lg shadow-violet-600/20"
                          : i === 2 || i === 4
                            ? "bg-violet-500"
                            : "bg-violet-500/50"
                      }
                    `}
                    />
                  </div>
                ),
              )}
            </div>

            {/* Bottom Labels */}

            <div className="flex justify-between mt-5 text-xs text-slate-500">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
