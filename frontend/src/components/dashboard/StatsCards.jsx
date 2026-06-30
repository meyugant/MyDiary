import { BookOpen, FileText, Heart } from "lucide-react";

export default function StatsCards({ entries }) {
  const totalEntries = entries?.length || 0;

  const totalFavorites = entries.filter((entry) => entry.liked).length;

  const totalWords = entries.reduce((sum, entry) => {
    if (!entry.cont || entry.cont.trim() === "") return sum;

    return sum + entry.cont.trim().split(/\s+/).length;
  }, 0);

  const cards = [
    {
      title: "Entries",
      value: totalEntries,
      icon: <BookOpen size={26} />,
      color: "from-violet-500 to-purple-600",
    },
    {
      title: "Favorites",
      value: totalFavorites,
      icon: <Heart size={26} />,
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Words",
      value: totalWords,
      icon: <FileText size={26} />,
      color: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <section className="mb-8 md:mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="
              bg-slate-900
              border
              border-slate-800
              rounded-3xl
              p-5
              md:p-7
              transition-all
              duration-300
              hover:border-violet-500
              hover:-translate-y-1
              hover:shadow-xl
              hover:shadow-violet-500/10
            "
          >
            <div
              className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center text-white bg-gradient-to-r ${card.color}`}
            >
              {card.icon}
            </div>

            <h3 className="mt-5 text-2xl md:text-3xl font-bold text-white">
              {card.value}
            </h3>

            <p className="mt-2 text-sm md:text-base text-slate-400">
              {card.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
