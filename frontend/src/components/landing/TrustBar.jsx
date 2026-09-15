import { ShieldCheck, Lock, Cloud, HeartPulse, Sparkles } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "100% Private",
    desc: "Only you can access your journal.",
  },
  {
    icon: Lock,
    title: "Encrypted",
    desc: "Your memories stay safe and secure.",
  },
  {
    icon: Cloud,
    title: "Cloud Sync",
    desc: "Write anywhere, continue everywhere.",
  },
  {
    icon: HeartPulse,
    title: "Mood Tracking",
    desc: "Discover patterns in your emotions.",
  },
  {
    icon: Sparkles,
    title: "AI Reflection",
    desc: "Coming soon.",
    comingSoon: true,
  },
];

export default function TrustBar({ isDark }) {
  return (
    <section className="py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-violet-400 font-semibold tracking-[0.2em] uppercase text-sm">
            <span className="w-8 h-px bg-violet-500/60"></span>
            Why MyDiary?
            <span className="w-8 h-px bg-violet-500/60"></span>
          </span>

          <h2
            className={`mt-5 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Built for people who love journaling.
          </h2>

          <p
            className={`mt-6 text-base sm:text-lg leading-8 ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            More than a notes app. MyDiary helps you build a lifelong journaling
            habit while keeping every memory safe.
          </p>
        </div>

        {/* Cards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6 mt-16 md:mt-20">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`
                  group
                  relative
                  rounded-3xl
                  p-7
                  md:p-8
                  min-h-[245px]
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-2xl
                  ${
                    isDark
                      ? `
                        bg-gradient-to-br
                        from-slate-900
                        to-slate-950
                        border
                        border-slate-800
                        hover:border-violet-500/50
                        hover:shadow-violet-600/10
                      `
                      : `
                        bg-white
                        border
                        border-slate-200
                        shadow-lg
                        hover:border-violet-300
                        hover:shadow-violet-500/10
                      `
                  }
                `}
              >
                {/* Subtle glow */}

                <div
                  className="
                    absolute
                    inset-0
                    rounded-3xl
                    bg-violet-600/0
                    group-hover:bg-violet-600/[0.03]
                    transition
                    duration-300
                    pointer-events-none
                  "
                />

                {/* Icon */}

                <div
                  className="
                    relative
                    w-14
                    h-14
                    rounded-2xl
                    bg-violet-600/15
                    border
                    border-violet-500/10
                    flex
                    items-center
                    justify-center
                    text-violet-400
                    mb-7
                    transition-all
                    duration-300
                    group-hover:bg-violet-600/25
                    group-hover:border-violet-500/30
                    group-hover:scale-105
                    group-hover:-translate-y-1
                  "
                >
                  <Icon size={27} strokeWidth={1.8} />
                </div>

                {/* Content */}

                <div className="relative">
                  <div className="flex items-center gap-2">
                    <h3
                      className={`font-bold text-lg md:text-xl ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {item.title}
                    </h3>

                    {item.comingSoon && (
                      <span className="text-[9px] uppercase tracking-wider text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2 py-1 rounded-full">
                        Soon
                      </span>
                    )}
                  </div>

                  <p
                    className={`mt-3 text-sm leading-7 ${
                      isDark ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
