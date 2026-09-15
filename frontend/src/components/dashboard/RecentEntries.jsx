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

      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 mt-5">
        <div>
          <p className="text-xs uppercase tracking-wider font-semibold text-violet-400 mb-2">
            Your journal
          </p>

          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            Recent Entries
            <span className="ml-2 text-slate-500 font-medium">
              ({entries.length})
            </span>
          </h2>

          <p className="text-slate-400 mt-2 text-sm md:text-base">
            Continue where you left off.
          </p>
        </div>

        <button
          onClick={() => setActivePage("AllEntries")}
          className="
            group
            flex
            items-center
            gap-1.5
            text-sm
            font-medium
            text-violet-400
            hover:text-violet-300
            transition-colors
          "
        >
          View All
          <ChevronRight
            size={17}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </button>
      </div>

      {/* Empty State */}

      {entries.length === 0 ? (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 md:p-16 text-center">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
            <CalendarDays size={24} className="text-violet-400" />
          </div>

          <h3 className="mt-5 text-2xl md:text-3xl font-bold text-white">
            No diary entries yet
          </h3>

          <p className="text-slate-400 mt-3 max-w-md mx-auto">
            Write your first journal entry to get started.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {entries.slice(0, 5).map((entry) => (
            <div
              key={entry.id}
              className="
                group
                bg-slate-900
                border
                border-slate-800
                rounded-3xl
                p-5
                md:p-6
                transition-all
                duration-300
                hover:border-slate-700
                hover:-translate-y-0.5
                hover:shadow-xl
                hover:shadow-black/20
              "
            >
              <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
                {/* Left */}

                <div className="flex-1 min-w-0">
                  {/* Date */}

                  <div className="inline-flex items-center gap-2 text-slate-500 text-xs md:text-sm">
                    <CalendarDays size={15} />

                    {new Date(entry.dt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </div>

                  {/* Title */}

                  <h3 className="text-xl md:text-2xl font-semibold text-white mt-3 break-words group-hover:text-violet-100 transition-colors">
                    {entry.sub}
                  </h3>

                  {/* Entry Number */}

                  <p className="text-violet-400/80 text-xs md:text-sm mt-1.5">
                    Entry #{entry.entry_no}
                  </p>

                  {/* Content Preview */}

                  <p className="mt-4 text-sm md:text-base leading-7 text-slate-400 break-words">
                    {entry.cont.length > 120
                      ? entry.cont.substring(0, 120) + "..."
                      : entry.cont}
                  </p>
                </div>

                {/* Actions */}

                <div className="flex justify-end lg:justify-start items-center gap-2.5">
                  {/* Favorite */}

                  <button
                    aria-label="Favorite entry"
                    className="
                      w-10
                      h-10
                      flex
                      items-center
                      justify-center
                      rounded-xl
                      bg-slate-800
                      border
                      border-slate-700
                      hover:bg-slate-700
                      hover:border-slate-600
                      transition-all
                      duration-200
                    "
                    onClick={() => toggleLike(entry.id)}
                  >
                    <Heart
                      size={18}
                      fill={entry.liked ? "currentColor" : "none"}
                      className={
                        entry.liked ? "text-red-500" : "text-slate-400"
                      }
                    />
                  </button>

                  {/* View */}

                  <button
                    aria-label="View entry"
                    className="
                      w-10
                      h-10
                      flex
                      items-center
                      justify-center
                      rounded-xl
                      bg-slate-800
                      border
                      border-slate-700
                      text-slate-400
                      hover:bg-violet-600
                      hover:border-violet-500
                      hover:text-white
                      transition-all
                      duration-200
                    "
                    onClick={() => viewEntry(entry)}
                  >
                    <Eye size={18} />
                  </button>

                  {/* Delete */}

                  <button
                    aria-label="Delete entry"
                    className="
                      w-10
                      h-10
                      flex
                      items-center
                      justify-center
                      rounded-xl
                      bg-slate-800
                      border
                      border-slate-700
                      text-slate-400
                      hover:bg-red-500/10
                      hover:border-red-500/30
                      hover:text-red-400
                      transition-all
                      duration-200
                    "
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

      {/* Delete Modal */}

      <DeleteModal
        open={showDelete}
        onClose={() => setShowDelete(false)}
        onConfirm={() => {
          deleteNote(selectedEntry.id);
          setShowDelete(false);
        }}
      />
    </section>
  );
}
