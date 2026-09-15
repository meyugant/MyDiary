import { BookOpen, CalendarDays, Sprout } from "lucide-react";

export default function StatsCards({ entries }) {
  const totalEntries = entries?.length || 0;

  const sortedEntries = [...(entries || [])].sort(
    (a, b) => new Date(b.dt) - new Date(a.dt),
  );

  const latestEntry = sortedEntries[0];

  const lastEntryDate = latestEntry
    ? new Date(latestEntry.dt).toLocaleDateString("en-IN", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "No entries yet";

  let streak = 0;

  if (sortedEntries.length > 0) {
    const uniqueDates = [
      ...new Set(
        sortedEntries.map((entry) =>
          new Date(entry.dt).toLocaleDateString("en-CA"),
        ),
      ),
    ];

    let currentDate = new Date(uniqueDates[0] + "T00:00:00");

    for (let i = 0; i < uniqueDates.length; i++) {
      const entryDate = new Date(uniqueDates[i] + "T00:00:00");

      const difference = (currentDate - entryDate) / (1000 * 60 * 60 * 24);

      if (difference === 0) {
        streak++;
        currentDate.setDate(currentDate.getDate() - 1);
      } else {
        break;
      }
    }
  }

  const cards = [
    {
      title: "Entries",
      value: totalEntries,
      description: "Every entry counts",
      icon: BookOpen,
      iconStyle: "bg-violet-500/15 text-violet-400 border-violet-500/20",
      glow: "bg-violet-600/10",
      accent: "bg-violet-500",
    },
    {
      title: "Last Entry",
      value: lastEntryDate,
      description: latestEntry
        ? "Your latest memory"
        : "Start your first entry",
      icon: CalendarDays,
      iconStyle: "bg-blue-500/15 text-blue-400 border-blue-500/20",
      glow: "bg-blue-600/10",
      accent: "bg-blue-500",
    },
    {
      title: "Writing Streak",
      value: streak,
      description: streak === 1 ? "day" : "days",
      icon: Sprout,
      iconStyle: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
      glow: "bg-emerald-600/10",
      accent: "bg-emerald-500",
    },
  ];

  return (
    <section className="mb-6 md:mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="
                relative
                overflow-hidden
                min-h-[132px]
                rounded-2xl
                border
                border-slate-800
                bg-slate-900/90
                p-5
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-slate-700
              "
            >
              {/* Soft glow */}

              <div
                className={`absolute -top-16 -right-16 w-40 h-40 rounded-full ${card.glow} blur-3xl`}
              />

              {/* Content */}

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-400">
                    {card.title}
                  </p>

                  <h3
                    className={`
                      mt-2
                      text-2xl
                      md:text-3xl
                      font-bold
                      tracking-tight
                      text-white
                      ${
                        card.title === "Last Entry"
                          ? "text-lg md:text-xl mt-3"
                          : ""
                      }
                    `}
                  >
                    {card.value}
                  </h3>

                  <p className="mt-1.5 text-xs text-slate-500">
                    {card.description}
                  </p>
                </div>

                <div
                  className={`
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    ${card.iconStyle}
                  `}
                >
                  <Icon size={21} strokeWidth={2} />
                </div>
              </div>

              {/* Bottom accent */}

              <div
                className={`
                  absolute
                  bottom-0
                  left-5
                  right-5
                  h-px
                  opacity-50
                  ${card.accent}
                `}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
