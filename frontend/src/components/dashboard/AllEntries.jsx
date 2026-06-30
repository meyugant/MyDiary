import {
  CalendarDays,
  Heart,
  Eye,
  Trash2,
  ArrowLeft,
} from "lucide-react";

export default function AllEntriesPage({
  entries,
  toggleLike,
  deleteNote,
  viewEntry,
  setActivePage,
}) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      {/* Back Button */}

      <button
        onClick={() => setActivePage("home")}
        className="flex items-center gap-2 text-violet-400 hover:text-violet-300 mb-8 transition"
      >
        <ArrowLeft size={20} />
        Back to Dashboard
      </button>

      {/* Heading */}

      <h1 className="text-3xl sm:text-4xl font-bold text-white">
        All Entries
      </h1>

      <p className="text-slate-400 mt-2 mb-8 sm:mb-10">
        {entries.length} journal entries
      </p>

      {/* Entries */}

      <div className="space-y-5">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 hover:border-violet-500 transition"
          >
            <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
              {/* Left */}

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 text-slate-400 text-sm flex-wrap">
                  <CalendarDays size={15} />

                  {new Date(entry.dt).toLocaleDateString("en-IN")}
                </div>

                <h2 className="text-xl sm:text-2xl font-semibold text-white mt-3 break-words">
                  {entry.sub}
                </h2>

                <p className="text-slate-400 mt-3 break-words leading-7">
                  {entry.cont.length > 150
                    ? entry.cont.substring(0, 150) + "..."
                    : entry.cont}
                </p>
              </div>

              {/* Right */}

              <div className="flex justify-end lg:justify-start gap-3 flex-wrap">
                <button
                  onClick={() => toggleLike(entry.id)}
                  className="p-3 rounded-xl bg-slate-800 hover:bg-pink-600 transition"
                >
                  <Heart
                    fill={entry.liked ? "currentColor" : "none"}
                    className={
                      entry.liked
                        ? "text-pink-500"
                        : "text-white"
                    }
                  />
                </button>

                <button
                  onClick={() => viewEntry(entry)}
                  className="p-3 rounded-xl bg-slate-800 hover:bg-blue-600 transition"
                >
                  <Eye />
                </button>

                <button
                  onClick={() => deleteNote(entry.id)}
                  className="p-3 rounded-xl bg-slate-800 hover:bg-red-600 transition"
                >
                  <Trash2 />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
