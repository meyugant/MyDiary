import { Heart, Eye, Search } from "lucide-react";
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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Favorite Entries ({favorites.length})
          </h1>

          <p className="text-slate-400 mt-2">Your most loved memories.</p>
        </div>

        <div className="flex items-center bg-slate-900 rounded-xl px-4 py-3 w-full lg:w-80">
          <Search size={18} className="text-slate-400" />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search favorites..."
            className="ml-3 bg-transparent outline-none text-white w-full placeholder:text-slate-500"
          />
        </div>
      </div>

      {/* Empty */}

      {favorites.length === 0 ? (
        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-10 md:p-20 text-center">
          <Heart className="mx-auto text-pink-500" size={60} />

          <h2 className="text-2xl md:text-3xl text-white mt-6">
            No Favorite Entries
          </h2>

          <p className="text-slate-400 mt-4">
            Like a journal entry to see it here.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {favorites.map((entry) => (
            <div
              key={entry.id}
              className="
                bg-slate-900
                rounded-3xl
                border
                border-slate-800
                p-5
                md:p-8
                hover:border-violet-500
                hover:-translate-y-1
                hover:shadow-xl
                hover:shadow-violet-500/10
                transition-all
              "
            >
              <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
                {/* Left */}

                <div className="flex-1">
                  <p className="text-violet-400 text-sm">
                    {new Date(entry.dt).toLocaleDateString("en-IN")}
                  </p>

                  <h2 className="text-xl md:text-2xl font-semibold text-white mt-2 break-words">
                    {entry.sub}
                  </h2>

                  <p className="text-slate-400 mt-4 break-words">
                    {entry.cont.length > 120
                      ? entry.cont.substring(0, 120) + "..."
                      : entry.cont}
                  </p>
                </div>

                {/* Buttons */}

                <div className="flex justify-end lg:justify-start gap-3">
                  <button
                    onClick={() => viewEntry(entry)}
                    className="
                      p-3
                      rounded-xl
                      bg-slate-800
                      hover:bg-blue-600
                      transition
                    "
                  >
                    <Eye size={20} />
                  </button>

                  <button
                    onClick={() => toggleLike(entry.id)}
                    className="
                      p-3
                      rounded-xl
                      bg-pink-600
                      hover:bg-red-600
                      transition
                    "
                  >
                    <Heart fill="currentColor" size={20} />
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
