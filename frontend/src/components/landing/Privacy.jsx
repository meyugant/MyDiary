import {
  ShieldCheck,
  LockKeyhole,
  UserRound,
  EyeOff,
  Check,
} from "lucide-react";

const privacyPoints = [
  {
    icon: UserRound,
    title: "Your journal is yours",
    desc: "Your personal entries belong to your account and are not publicly visible.",
  },
  {
    icon: EyeOff,
    title: "Private by design",
    desc: "Your thoughts are kept within your personal journaling space.",
  },
  {
    icon: LockKeyhole,
    title: "Secure access",
    desc: "Your journal is protected behind your account authentication.",
  },
];

export default function Privacy({ isDark }) {
  return (
    <section
      className={`py-24 md:py-32 px-4 sm:px-6 lg:px-8 ${
        isDark ? "bg-slate-950" : "bg-slate-50"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/*  SECTION LABEL  */}

        <div className="flex items-center justify-center gap-4 mb-6">
          <div
            className={`hidden sm:block h-px w-16 ${
              isDark ? "bg-slate-800" : "bg-slate-200"
            }`}
          />

          <span className="text-violet-500 text-sm font-semibold tracking-[0.2em] uppercase">
            Privacy
          </span>

          <div
            className={`hidden sm:block h-px w-16 ${
              isDark ? "bg-slate-800" : "bg-slate-200"
            }`}
          />
        </div>

        {/*  MAIN CARD  */}

        <div
          className={`
            relative
            overflow-hidden
            rounded-[2rem]
            md:rounded-[2.5rem]
            border
            ${
              isDark
                ? "bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border-slate-800"
                : "bg-white border-slate-200 shadow-xl"
            }
          `}
        >
          {/* Background glow */}

          <div
            className="
              absolute
              -top-40
              -right-40
              w-96
              h-96
              rounded-full
              bg-violet-600/10
              blur-3xl
              pointer-events-none
            "
          />

          <div
            className="
              absolute
              -bottom-40
              -left-40
              w-96
              h-96
              rounded-full
              bg-indigo-600/5
              blur-3xl
              pointer-events-none
            "
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 p-7 sm:p-10 md:p-14 lg:p-16">
            {/*  LEFT  */}

            <div className="flex flex-col justify-center">
              {/* Icon */}

              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  bg-violet-600/15
                  border
                  border-violet-500/20
                  text-violet-400
                  mb-7
                "
              >
                <ShieldCheck size={32} strokeWidth={1.8} />
              </div>

              <h2
                className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                Privacy comes first.
              </h2>

              <p
                className={`mt-6 text-base sm:text-lg leading-8 ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Your journal is a personal space for your thoughts, memories,
                and emotions. MyDiary is built to keep that experience private
                and personal.
              </p>

              {/* Privacy points */}

              <div className="mt-8 space-y-5">
                {privacyPoints.map((point, index) => {
                  const Icon = point.icon;

                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div
                        className={`
                          shrink-0
                          w-10
                          h-10
                          rounded-xl
                          flex
                          items-center
                          justify-center
                          ${
                            isDark
                              ? "bg-slate-800 text-violet-400"
                              : "bg-violet-50 text-violet-600"
                          }
                        `}
                      >
                        <Icon size={19} />
                      </div>

                      <div>
                        <h3
                          className={`font-semibold ${
                            isDark ? "text-white" : "text-slate-900"
                          }`}
                        >
                          {point.title}
                        </h3>

                        <p
                          className={`mt-1 text-sm leading-6 ${
                            isDark ? "text-slate-500" : "text-slate-500"
                          }`}
                        >
                          {point.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/*  RIGHT VISUAL  */}

            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md">
                {/* Glow */}

                <div
                  className="
                    absolute
                    inset-10
                    bg-violet-600/15
                    blur-3xl
                    rounded-full
                  "
                />

                {/* Security Card */}

                <div
                  className={`
                    relative
                    rounded-3xl
                    border
                    p-7
                    sm:p-8
                    ${
                      isDark
                        ? "bg-slate-800/80 border-slate-700 backdrop-blur-sm"
                        : "bg-slate-50 border-slate-200"
                    }
                  `}
                >
                  {/* Header */}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="
                          w-11
                          h-11
                          rounded-xl
                          bg-violet-600
                          flex
                          items-center
                          justify-center
                          text-white
                        "
                      >
                        <LockKeyhole size={21} />
                      </div>

                      <div>
                        <p
                          className={`font-semibold ${
                            isDark ? "text-white" : "text-slate-900"
                          }`}
                        >
                          Private Journal
                        </p>

                        <p className="text-xs text-slate-500">
                          Your personal space
                        </p>
                      </div>
                    </div>

                    <div
                      className="
                        w-8
                        h-8
                        rounded-full
                        bg-emerald-500/10
                        flex
                        items-center
                        justify-center
                        text-emerald-500
                      "
                    >
                      <Check size={16} />
                    </div>
                  </div>

                  {/* Divider */}

                  <div
                    className={`my-7 h-px ${
                      isDark ? "bg-slate-700" : "bg-slate-200"
                    }`}
                  />

                  {/* Privacy status */}

                  <div className="space-y-4">
                    <div
                      className={`
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        px-4
                        py-3
                        ${isDark ? "bg-slate-900/70" : "bg-white"}
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <ShieldCheck size={18} className="text-violet-500" />

                        <span
                          className={`text-sm ${
                            isDark ? "text-slate-300" : "text-slate-700"
                          }`}
                        >
                          Account protected
                        </span>
                      </div>

                      <Check size={17} className="text-emerald-500" />
                    </div>

                    <div
                      className={`
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        px-4
                        py-3
                        ${isDark ? "bg-slate-900/70" : "bg-white"}
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <EyeOff size={18} className="text-violet-500" />

                        <span
                          className={`text-sm ${
                            isDark ? "text-slate-300" : "text-slate-700"
                          }`}
                        >
                          Personal entries
                        </span>
                      </div>

                      <Check size={17} className="text-emerald-500" />
                    </div>

                    <div
                      className={`
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        px-4
                        py-3
                        ${isDark ? "bg-slate-900/70" : "bg-white"}
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <UserRound size={18} className="text-violet-500" />

                        <span
                          className={`text-sm ${
                            isDark ? "text-slate-300" : "text-slate-700"
                          }`}
                        >
                          Only your account
                        </span>
                      </div>

                      <Check size={17} className="text-emerald-500" />
                    </div>
                  </div>

                  {/* Footer */}

                  <div className="mt-7 flex items-center justify-center gap-2 text-xs text-slate-500">
                    <ShieldCheck size={14} />
                    Privacy is part of the experience.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
