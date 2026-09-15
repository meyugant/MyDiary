import { UserPlus, PenLine, BookOpenCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Create an account",
    desc: "Sign up in less than a minute.",
  },
  {
    icon: PenLine,
    number: "02",
    title: "Write daily",
    desc: "Capture your thoughts and emotions.",
  },
  {
    icon: BookOpenCheck,
    number: "03",
    title: "Reflect anytime",
    desc: "Read your memories whenever you want.",
  },
];

export default function HowItWorks({ isDark }) {
  return (
    <section className="py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*  HEADER  */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-violet-400 font-semibold tracking-[0.2em] uppercase text-sm">
            <span className="w-8 h-px bg-violet-500/60" />
            How it works
            <span className="w-8 h-px bg-violet-500/60" />
          </span>

          <h2
            className={`mt-5 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Start journaling in three simple steps.
          </h2>

          <p
            className={`mt-6 text-base sm:text-lg leading-8 ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Create your space, write what matters and return to your memories
            whenever you want.
          </p>
        </div>

        {/*  STEPS  */}

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mt-16 md:mt-20">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={index} className="relative">
                {/* Connector */}

                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-16 left-[calc(100%+0.5rem)] w-6 items-center justify-center z-10">
                    <ArrowRight
                      size={18}
                      className={isDark ? "text-slate-700" : "text-slate-300"}
                    />
                  </div>
                )}

                {/* Card */}

                <div
                  className={`
                    group
                    relative
                    h-full
                    rounded-3xl
                    p-7 md:p-8
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
                          hover:border-violet-500/40
                          hover:shadow-violet-500/10
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
                  {/* Top row */}

                  <div className="flex items-center justify-between">
                    {/* Icon */}

                    <div
                      className="
                        w-16
                        h-16
                        rounded-2xl
                        bg-violet-600/15
                        border
                        border-violet-500/10
                        flex
                        items-center
                        justify-center
                        text-violet-400
                        transition-all
                        duration-300
                        group-hover:bg-violet-600/25
                        group-hover:border-violet-500/30
                        group-hover:scale-105
                        group-hover:-translate-y-1
                      "
                    >
                      <Icon size={30} strokeWidth={1.8} />
                    </div>

                    {/* Step number */}

                    <span
                      className={`
                        text-4xl
                        font-black
                        tracking-tight
                        transition-colors
                        duration-300
                        ${
                          isDark
                            ? "text-slate-800 group-hover:text-violet-500/20"
                            : "text-slate-100 group-hover:text-violet-100"
                        }
                      `}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}

                  <div className="mt-8">
                    <h3
                      className={`text-2xl font-bold ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {step.title}
                    </h3>

                    <p
                      className={`
                        mt-4
                        text-base
                        leading-7
                        ${isDark ? "text-slate-400" : "text-slate-600"}
                      `}
                    >
                      {step.desc}
                    </p>
                  </div>

                  {/* Bottom accent */}

                  <div
                    className="
                      mt-8
                      h-1
                      w-10
                      rounded-full
                      bg-violet-600/40
                      transition-all
                      duration-300
                      group-hover:w-16
                      group-hover:bg-violet-500
                    "
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
