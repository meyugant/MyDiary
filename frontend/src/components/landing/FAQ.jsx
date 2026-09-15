import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  ShieldCheck,
  Smartphone,
  Heart,
} from "lucide-react";

const faqs = [
  {
    icon: Heart,
    q: "Is MyDiary free?",
    a: "Yes. You can start journaling with MyDiary for free and use the core journaling experience without a subscription.",
  },
  {
    icon: ShieldCheck,
    q: "Is my data secure?",
    a: "MyDiary is designed with privacy and security in mind. Your diary entries are stored securely and are accessible through your account.",
  },
  {
    icon: Smartphone,
    q: "Can I use MyDiary on my phone?",
    a: "Absolutely. MyDiary is fully responsive, so you can comfortably use it on phones, tablets, laptops, and desktop devices.",
  },
  {
    icon: HelpCircle,
    q: "What can I use MyDiary for?",
    a: "You can use MyDiary to record your thoughts, memories, emotions, daily experiences, and personal reflections in one private digital space.",
  },
];

export default function FAQ({ isDark }) {
  const [open, setOpen] = useState(null);

  return (
    <section
      id="faq"
      className={`py-24 md:py-28 px-4 sm:px-6 lg:px-8 ${
        isDark ? "bg-slate-950" : "bg-slate-50"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/*  HEADER  */}

        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div
              className={`hidden sm:block h-px w-16 ${
                isDark ? "bg-slate-800" : "bg-slate-200"
              }`}
            />

            <span className="text-violet-500 text-sm font-semibold tracking-[0.2em] uppercase">
              FAQ
            </span>

            <div
              className={`hidden sm:block h-px w-16 ${
                isDark ? "bg-slate-800" : "bg-slate-200"
              }`}
            />
          </div>

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Questions, answered.
          </h2>

          <p
            className={`mt-5 max-w-2xl mx-auto text-base sm:text-lg leading-8 ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Everything you need to know about your personal journaling space.
          </p>
        </div>

        {/*  FAQ LIST  */}

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            const isOpen = open === index;

            return (
              <div
                key={index}
                className={`
                  group
                  rounded-2xl
                  border
                  overflow-hidden
                  transition-all
                  duration-300
                  ${
                    isOpen
                      ? isDark
                        ? "bg-slate-900 border-violet-500/40 shadow-lg shadow-violet-950/20"
                        : "bg-white border-violet-300 shadow-lg shadow-violet-100"
                      : isDark
                        ? "bg-slate-900/70 border-slate-800 hover:border-slate-700"
                        : "bg-white border-slate-200 shadow-sm hover:border-violet-200 hover:shadow-md"
                  }
                `}
              >
                {/* Question */}

                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="w-full px-5 sm:px-7 py-5 sm:py-6 flex items-center gap-4 text-left"
                >
                  {/* Icon */}

                  <div
                    className={`
                      shrink-0
                      w-10
                      h-10
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-300
                      ${
                        isOpen
                          ? "bg-violet-600 text-white"
                          : isDark
                            ? "bg-slate-800 text-violet-400 group-hover:bg-violet-600/15"
                            : "bg-violet-50 text-violet-600 group-hover:bg-violet-100"
                      }
                    `}
                  >
                    <Icon size={19} strokeWidth={2} />
                  </div>

                  {/* Question */}

                  <span
                    className={`
                      flex-1
                      font-semibold
                      text-base
                      sm:text-lg
                      transition-colors
                      ${isDark ? "text-white" : "text-slate-900"}
                    `}
                  >
                    {faq.q}
                  </span>

                  {/* Chevron */}

                  <div
                    className={`
                      shrink-0
                      w-9
                      h-9
                      rounded-full
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-300
                      ${
                        isOpen
                          ? "bg-violet-600/15 text-violet-400"
                          : isDark
                            ? "bg-slate-800 text-slate-400"
                            : "bg-slate-100 text-slate-500"
                      }
                    `}
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Answer */}

                <div
                  className={`
                    grid transition-all duration-300 ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`
                        px-5 sm:px-7 pb-6
                        ml-0 sm:ml-14
                        pr-12 sm:pr-16
                        text-sm sm:text-base
                        leading-7
                        ${isDark ? "text-slate-400" : "text-slate-600"}
                      `}
                    >
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/*  BOTTOM NOTE  */}

        <div
          className={`
            mt-10
            flex
            items-center
            justify-center
            gap-2
            text-sm
            ${isDark ? "text-slate-500" : "text-slate-500"}
          `}
        >
          <HelpCircle size={16} />
          <span>Still curious? Explore MyDiary and start writing.</span>
        </div>
      </div>
    </section>
  );
}
