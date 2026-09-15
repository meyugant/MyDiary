import { Heart, Eye, Search, CalendarDays } from "lucide-react";
import { useState } from "react";

export default function FavoritesPage({ entries, viewEntry, toggleLike }) {
  const [search, setSearch] = useState("");

  const favorites = entries.filter(
    (entry) =>
      entry.liked &&
      (entry.sub.toLowerCase().includes(search.toLowerCase()) ||
        entry.cont.toLowerCase().includes(search.toLowerCase())),
  );

  return (
    <section className="max-w-[1400px] mx-auto">
      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] font-semibold text-violet-400 mb-2">
            Your journal
          </p>

          <div className="flex items-center gap-3">
            <Heart
              size={28}
              className="text-pink-500"
              fill="currentColor"
              strokeWidth={2}
            />

            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Favorite Entries
              <span className="ml-2 text-slate-500 font-medium">
                ({favorites.length})
              </span>
            </h1>
          </div>

          <p className="text-slate-400 mt-2 text-sm md:text-base">
            The memories you chose to keep close.
          </p>
        </div>

        {/* Search */}

        <div
          className="
            group
            flex
            items-center
            w-full
            lg:w-[320px]
            h-12
            px-4
            bg-slate-900/80
            border
            border-slate-800
            rounded-2xl
            transition-all
            duration-200
            focus-within:border-violet-500/50
            focus-within:ring-2
            focus-within:ring-violet-500/10
          "
        >
          <Search
            size={18}
            className="
              text-slate-500
              group-focus-within:text-violet-400
              transition-colors
            "
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search favorites..."
            className="
              ml-3
              w-full
              bg-transparent
              outline-none
              text-sm
              text-white
              placeholder:text-slate-500
            "
          />
        </div>
      </div>

      {/* Favorite Entries */}

      {favorites.length === 0 ? (
        <div
          className="
            relative
            overflow-hidden
            bg-slate-900/80
            border
            border-slate-800
            rounded-3xl
            p-10
            md:p-20
            text-center
            shadow-xl
          "
        >
          {/* Background glow */}

          <div
            className="
              absolute
              -top-24
              left-1/2
              -translate-x-1/2
              w-72
              h-72
              rounded-full
              bg-pink-600/10
              blur-3xl
            "
          />

          <div className="relative">
            <div
              className="
                w-16
                h-16
                mx-auto
                rounded-2xl
                bg-pink-500/10
                border
                border-pink-500/20
                flex
                items-center
                justify-center
              "
            >
              <Heart size={28} className="text-pink-400" fill="currentColor" />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-6">
              No Favorite Entries
            </h2>

            <p className="text-slate-400 mt-3 max-w-md mx-auto text-sm md:text-base">
              Entries you mark as favorites will appear here.
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-5">
          {favorites.map((entry) => (
            <div
              key={entry.id}
              className="
                group
                relative
                overflow-hidden
                bg-slate-900
                border
                border-slate-800
                rounded-3xl
                p-5
                md:p-6
                transition-all
                duration-300
                hover:border-slate-700
              "
            >
              {/* Subtle pink glow */}

              <div
                className="
                  absolute
                  -right-24
                  -top-24
                  w-56
                  h-56
                  rounded-full
                  bg-pink-500/5
                  blur-3xl
                  pointer-events-none
                "
              />

              <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                {/* Entry Content */}

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

                  <h2
                    className="
                      text-xl
                      md:text-2xl
                      font-semibold
                      text-white
                      mt-3
                      break-words
                      group-hover:text-violet-100
                      transition-colors
                    "
                  >
                    {entry.sub}
                  </h2>

                  {/* Entry Number */}

                  <p className="text-violet-400/80 text-xs md:text-sm mt-1.5">
                    Entry #{entry.entry_no}
                  </p>

                  {/* Content */}

                  <p
                    className="
                      mt-4
                      text-sm
                      md:text-base
                      leading-7
                      text-slate-400
                      break-words
                      max-w-4xl
                    "
                  >
                    {entry.cont.length > 180
                      ? entry.cont.substring(0, 180) + "..."
                      : entry.cont}
                  </p>
                </div>

                {/* Actions */}

                <div className="flex items-center gap-2.5 lg:shrink-0">
                  {/* View */}

                  <button
                    onClick={() => viewEntry(entry)}
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
                  >
                    <Eye size={18} />
                  </button>

                  {/* Favorite */}

                  <button
                    onClick={() => toggleLike(entry.id)}
                    aria-label="Remove from favorites"
                    className="
                      w-10
                      h-10
                      flex
                      items-center
                      justify-center
                      rounded-xl
                      bg-pink-500/10
                      border
                      border-pink-500/20
                      text-pink-400
                      hover:bg-pink-500/20
                      hover:border-pink-500/40
                      transition-all
                      duration-200
                    "
                  >
                    <Heart size={18} fill="currentColor" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
