import { Heart, Clock3 } from "lucide-react";

export default function WritingAnalytics({ entries }) {
  const sortedEntries = [...entries].sort(
    (a, b) => new Date(b.dt) - new Date(a.dt),
  );

  const currentEntry = sortedEntries[0];
  const previousEntry = sortedEntries[1];

  const formatDate = (date, current = false) => {
    if (!date) return "";

    if (current) return "Today";

    return new Date(date).toLocaleDateString("en-IN", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getMoodEmoji = (mood) => {
    if (!mood) return "—";

    return mood.split(" ")[0];
  };

  const getMoodName = (mood) => {
    if (!mood) return "No mood yet";

    const spaceIndex = mood.indexOf(" ");

    if (spaceIndex === -1) return mood;

    return mood.substring(spaceIndex + 1);
  };

  return (
    <section className="mb-0">
      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-slate-800
          bg-slate-900/90
          p-5
          md:p-6
          shadow-xl
        "
      >
        {/* Ambient glow */}

        <div
          className="
            absolute
            -top-24
            -right-24
            h-64
            w-64
            rounded-full
            bg-pink-600/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-32
            left-1/3
            h-72
            w-72
            rounded-full
            bg-violet-600/5
            blur-3xl
          "
        />

        <div className="relative">
          {/* Header */}

          <div className="mb-5 flex items-start gap-3">
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                border
                border-pink-500/20
                bg-pink-500/10
              "
            >
              <Heart size={20} className="text-pink-500" fill="currentColor" />
            </div>

            <div>
              <h2 className="text-xl font-bold leading-tight text-white md:text-2xl">
                Your Mood
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                How you feel now and how you felt last time.
              </p>
            </div>
          </div>

          {/* Mood Cards */}

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Current Mood */}

            <div
              className="
                relative
                min-h-[138px]
                overflow-hidden
                rounded-2xl
                border
                border-violet-500/40
                bg-gradient-to-br
                from-violet-950/60
                via-slate-900
                to-slate-900
                p-5
                transition-all
                duration-300
                hover:border-violet-500/60
              "
            >
              <div
                className="
                  absolute
                  -bottom-16
                  -right-10
                  h-36
                  w-36
                  rounded-full
                  bg-violet-500/15
                  blur-2xl
                "
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-300">
                    Current Mood
                  </p>

                  <span
                    className="
                      rounded-full
                      border
                      border-violet-500/20
                      bg-violet-500/10
                      px-2.5
                      py-1
                      text-[11px]
                      text-violet-300
                    "
                  >
                    Latest
                  </span>
                </div>

                {currentEntry ? (
                  <div className="mt-5 flex items-center gap-4">
                    <div
                      className="
                        flex
                        h-14
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-violet-400/20
                        bg-violet-500/15
                        text-3xl
                      "
                    >
                      {getMoodEmoji(currentEntry.mood)}
                    </div>

                    <div className="min-w-0">
                      <h3 className="truncate text-xl font-bold text-white md:text-2xl">
                        {getMoodName(currentEntry.mood)}
                      </h3>

                      <p className="mt-1 text-xs text-slate-400 md:text-sm">
                        {formatDate(currentEntry.dt, true)}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="mt-5">
                    <h3 className="text-lg font-semibold text-slate-300">
                      No mood yet
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      Write your first entry.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Last Time Mood */}

            <div
              className="
                relative
                min-h-[138px]
                overflow-hidden
                rounded-2xl
                border
                border-blue-500/40
                bg-gradient-to-br
                from-blue-950/40
                via-slate-900
                to-slate-900
                p-5
                transition-all
                duration-300
                hover:border-blue-500/60
              "
            >
              <div
                className="
                  absolute
                  -bottom-16
                  -right-10
                  h-36
                  w-36
                  rounded-full
                  bg-blue-500/10
                  blur-2xl
                "
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-300">
                    Last Time Mood
                  </p>

                  <Clock3 size={17} className="text-blue-400" />
                </div>

                {previousEntry ? (
                  <div className="mt-5 flex items-center gap-4">
                    <div
                      className="
                        flex
                        h-14
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-blue-400/20
                        bg-blue-500/10
                        text-3xl
                      "
                    >
                      {getMoodEmoji(previousEntry.mood)}
                    </div>

                    <div className="min-w-0">
                      <h3 className="truncate text-xl font-bold text-white md:text-2xl">
                        {getMoodName(previousEntry.mood)}
                      </h3>

                      <p className="mt-1 text-xs text-slate-400 md:text-sm">
                        {formatDate(previousEntry.dt)}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="mt-5">
                    <h3 className="text-lg font-semibold text-slate-300">
                      No previous mood
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      Write another entry to see it here.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
