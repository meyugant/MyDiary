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
    <section className="max-w-7xl mx-auto px-6 md:px-8 py-10">
      <button
        onClick={() => setActivePage("home")}
        className="flex items-center gap-2 text-violet-400 hover:text-violet-300 mb-8"
      >
        <ArrowLeft size={20} />
        Back to Dashboard
      </button>

      <h1 className="text-4xl font-bold text-white mb-2">
        All Entries
      </h1>

      <p className="text-slate-400 mb-10">
        {entries.length} journal entries
      </p>

      <div className="space-y-5">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-violet-500 transition"
          >
            <div className="flex justify-between">
              <div>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <CalendarDays size={15} />
                  {new Date(entry.dt).toLocaleDateString("en-IN")}
                </div>

                <h2 className="text-2xl font-semibold text-white mt-3">
                  {entry.sub}
                </h2>

                <p className="text-slate-400 mt-3">
                  {entry.cont.length > 150
                    ? entry.cont.substring(0, 150) + "..."
                    : entry.cont}
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => toggleLike(entry.id)}
                  className="p-3 rounded-xl bg-slate-800 hover:bg-pink-600"
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
                  className="p-3 rounded-xl bg-slate-800 hover:bg-blue-600"
                >
                  <Eye />
                </button>

                <button
                  onClick={() => deleteNote(entry.id)}
                  className="p-3 rounded-xl bg-slate-800 hover:bg-red-600"
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