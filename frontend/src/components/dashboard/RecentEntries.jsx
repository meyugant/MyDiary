import { CalendarDays, Eye, Trash2, Heart, ChevronRight } from "lucide-react";
import { useState } from "react";
import DeleteModal from "./DeleteModal";

export default function RecentEntries({
  entries,
  deleteNote,
  toggleLike,
  viewEntry,
  setActivePage,
}) {
  const [showDelete, setShowDelete] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);

  return (
    <section className="mb-12">
      {/* Header */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Recent Entries ({entries.length})
          </h2>

          <p className="text-slate-400 mt-2">Continue where you left off.</p>
        </div>

        <button
          onClick={() => setActivePage("AllEntries")}
          className="text-violet-400 hover:text-violet-300 flex items-center gap-2"
        >
          View All
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Empty State */}

      {entries.length === 0 ? (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 md:p-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            No diary entries yet
          </h3>

          <p className="text-slate-400 mt-4">
            Write your first journal entry to get started.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {entries.slice(0, 5).map((entry) => (
            <div
              key={entry.id}
              className="
                bg-slate-900
                border
                border-slate-800
                rounded-3xl
                p-5
                md:p-6
                transition-all
                duration-300
                hover:border-violet-500
                hover:-translate-y-1
                hover:shadow-xl
                hover:shadow-violet-600/20
              "
            >
              <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
                {/* Left */}

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <CalendarDays size={15} />

                    {new Date(entry.dt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </div>

                  <h3 className="text-xl md:text-2xl font-semibold text-white mt-3 break-words">
                    {entry.sub}
                  </h3>

                  <p className="text-violet-400 text-sm mt-1">
                    Entry #{entry.entry_no}
                  </p>

                  <p className="mt-4 text-slate-300 break-words">
                    {entry.cont.length > 120
                      ? entry.cont.substring(0, 120) + "..."
                      : entry.cont}
                  </p>
                </div>

                {/* Right */}

                <div className="flex justify-end lg:justify-start gap-3">
                  <button
                    className="bg-slate-800 p-3 rounded-xl hover:bg-violet-600 transition"
                    onClick={() => toggleLike(entry.id)}
                  >
                    <Heart
                      size={18}
                      fill={entry.liked ? "currentColor" : "none"}
                      className={
                        entry.liked ? "text-red-500" : "text-slate-300"
                      }
                    />
                  </button>

                  <button
                    className="bg-slate-800 p-3 rounded-xl hover:bg-blue-600 transition"
                    onClick={() => viewEntry(entry)}
                  >
                    <Eye size={18} />
                  </button>

                  <button
                    className="bg-slate-800 p-3 rounded-xl hover:bg-red-600 transition"
                    onClick={() => {
                      setSelectedEntry(entry);
                      setShowDelete(true);
                    }}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <DeleteModal
        open={showDelete}
        title={selectedEntry?.sub}
        onCancel={() => setShowDelete(false)}
        onConfirm={() => {
          deleteNote(selectedEntry.id);
          setShowDelete(false);
        }}
      />
    </section>
  );
}
