import { Search, CalendarDays, Heart, ArrowRight } from "lucide-react";

export default function Features({ isDark }) {
  return (
    <section
      id="features"
      className={`py-32 ${isDark ? "bg-slate-950" : "bg-slate-50"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="text-center">
          <span className="text-violet-500 font-semibold tracking-widest uppercase">
            Features
          </span>

          <h2
            className={`mt-5 text-5xl font-bold ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Designed for effortless journaling.
          </h2>

          <p
            className={`mt-6 text-lg max-w-3xl mx-auto ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Everything you need to capture memories, organize your thoughts and
            build a consistent writing habit.
          </p>
        </div>

        {/* ---------- Block 1 ---------- */}

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-28">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-violet-600/20 flex items-center justify-center text-violet-500">
              <Search size={28} />
            </div>

            <h3
              className={`mt-8 text-4xl font-bold ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Find every memory instantly.
            </h3>

            <p
              className={`mt-6 leading-8 ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Search by title, keyword, emotion or date. Never lose an important
              memory again.
            </p>

            <button className="mt-8 flex items-center gap-2 text-violet-500 font-semibold hover:gap-4 transition-all">
              Learn More
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Preview */}

          <div
            className={`rounded-3xl p-8 ${
              isDark
                ? "bg-slate-900 border border-slate-800"
                : "bg-white shadow-xl"
            }`}
          >
            <div
              className={`rounded-xl px-4 py-3 ${
                isDark ? "bg-slate-800" : "bg-slate-100"
              }`}
            >
              🔍 Search your memories...
            </div>

            <div className="space-y-5 mt-8">
              <div
                className={`rounded-2xl p-5 ${
                  isDark ? "bg-slate-800" : "bg-slate-100"
                }`}
              >
                🌅 Goa Trip 2025
              </div>

              <div
                className={`rounded-2xl p-5 ${
                  isDark ? "bg-slate-800" : "bg-slate-100"
                }`}
              >
                🎓 Graduation Day
              </div>

              <div
                className={`rounded-2xl p-5 ${
                  isDark ? "bg-slate-800" : "bg-slate-100"
                }`}
              >
                💖 First Job
              </div>
            </div>
          </div>
        </div>

        {/* ---------- Block 2 ---------- */}

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-40">
          <div
            className={`order-2 lg:order-1 rounded-3xl p-8 ${
              isDark
                ? "bg-slate-900 border border-slate-800"
                : "bg-white shadow-xl"
            }`}
          >
            <div className="grid grid-cols-7 gap-3">
              {Array.from({ length: 35 }).map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-xl ${
                    i === 9 || i === 14 || i === 21
                      ? "bg-violet-500"
                      : isDark
                        ? "bg-slate-800"
                        : "bg-slate-200"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="w-14 h-14 rounded-2xl bg-violet-600/20 flex items-center justify-center text-violet-500">
              <CalendarDays size={28} />
            </div>

            <h3
              className={`mt-8 text-4xl font-bold ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Visual calendar timeline.
            </h3>

            <p
              className={`mt-6 leading-8 ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Browse your life month by month and revisit memories from any
              date.
            </p>
          </div>
        </div>

        {/* ---------- Block 3 ---------- */}

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-40">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-violet-600/20 flex items-center justify-center text-violet-500">
              <Heart size={28} />
            </div>

            <h3
              className={`mt-8 text-4xl font-bold ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Understand your emotions.
            </h3>

            <p
              className={`mt-6 leading-8 ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Track your mood every day and discover patterns that help improve
              your wellbeing.
            </p>
          </div>

          <div
            className={`rounded-3xl p-10 ${
              isDark
                ? "bg-slate-900 border border-slate-800"
                : "bg-white shadow-xl"
            }`}
          >
            <div className="flex justify-between items-end h-60 gap-2">
              <div className="flex-1 h-28 rounded-full bg-violet-300"></div>
              <div className="flex-1 h-36 rounded-full bg-violet-400"></div>
              <div className="flex-1 h-48 rounded-full bg-violet-500"></div>
              <div className="flex-1 h-60 rounded-full bg-violet-600"></div>
              <div className="flex-1 h-44 rounded-full bg-violet-500"></div>
              <div className="flex-1 h-36 rounded-full bg-violet-400"></div>
              <div className="flex-1 h-24 rounded-full bg-violet-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
