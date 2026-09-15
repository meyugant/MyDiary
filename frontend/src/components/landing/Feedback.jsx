import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { MessageCircle, Send, Sparkles } from "lucide-react";

export default function Feedback({ isDark }) {
  const apiBaseUrl = import.meta.env.VITE_API_URL;

  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "Suggestion",
    message: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.message.trim()) {
      toast.error("Please enter your feedback.");
      return;
    }

    try {
      await axios.post(`${apiBaseUrl}/feedback`, form);

      toast.success("Thank you for your feedback!");

      setForm({
        name: "",
        email: "",
        type: "Suggestion",
        message: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("Unable to submit feedback.");
    }
  }

  const inputClasses = `
    w-full
    rounded-xl
    px-5
    py-4
    outline-none
    border
    transition-all
    duration-200
    focus:ring-2
    focus:ring-violet-500/20
  `;

  return (
    <section
      id="feedback"
      className={`py-24 md:py-28 px-4 sm:px-6 lg:px-8 ${
        isDark ? "bg-slate-950" : "bg-slate-50"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/*  HEADER  */}

        <div className="text-center mb-14">
          {/* Icon */}

          <div
            className="
              inline-flex
              items-center
              justify-center
              w-16
              h-16
              rounded-2xl
              bg-violet-600/15
              border
              border-violet-500/20
              text-violet-400
              mb-7
              transition-all
              duration-300
              hover:bg-violet-600/25
              hover:border-violet-500/30
              hover:scale-105
            "
          >
            <MessageCircle size={30} strokeWidth={1.8} />
          </div>

          {/* Small Label */}

          <div className="flex items-center justify-center gap-2 text-violet-400 text-sm font-semibold tracking-[0.2em] uppercase">
            <Sparkles size={14} />
            Your voice matters
          </div>

          <h2
            className={`mt-5 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Help shape MyDiary.
          </h2>

          <p
            className={`mt-5 max-w-2xl mx-auto text-base sm:text-lg leading-8 ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            We're continuously improving MyDiary. Share your ideas, report bugs,
            or simply tell us what you think.
          </p>
        </div>

        {/*  FORM  */}

        <form
          onSubmit={handleSubmit}
          className={`
            relative
            overflow-hidden
            rounded-3xl
            border
            p-6
            sm:p-8
            md:p-10
            transition-all
            duration-300
            ${
              isDark
                ? `
                  bg-gradient-to-br
                  from-slate-900
                  to-slate-950
                  border-slate-800
                  shadow-2xl
                  shadow-black/20
                `
                : `
                  bg-white
                  border-slate-200
                  shadow-xl
                `
            }
          `}
        >
          {/* Decorative glow */}

          <div
            className="
              absolute
              -top-24
              -right-24
              w-64
              h-64
              rounded-full
              bg-violet-600/10
              blur-3xl
              pointer-events-none
            "
          />

          <div className="relative">
            {/* Name + Email */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  Name
                  <span className="text-slate-500 font-normal">
                    {" "}
                    (Optional)
                  </span>
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  className={`
                    ${inputClasses}
                    ${
                      isDark
                        ? "bg-slate-800/80 border-slate-700 text-white placeholder:text-slate-500 focus:border-violet-500"
                        : "bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-500 focus:border-violet-500"
                    }
                  `}
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  Email
                  <span className="text-slate-500 font-normal">
                    {" "}
                    (Optional)
                  </span>
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                  className={`
                    ${inputClasses}
                    ${
                      isDark
                        ? "bg-slate-800/80 border-slate-700 text-white placeholder:text-slate-500 focus:border-violet-500"
                        : "bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-500 focus:border-violet-500"
                    }
                  `}
                />
              </div>
            </div>

            {/* Feedback Type */}

            <div className="mt-5">
              <label
                className={`block text-sm font-medium mb-2 ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                Feedback type
              </label>

              <select
                value={form.type}
                onChange={(e) =>
                  setForm({
                    ...form,
                    type: e.target.value,
                  })
                }
                className={`
                  ${inputClasses}
                  ${
                    isDark
                      ? "bg-slate-800/80 border-slate-700 text-white focus:border-violet-500"
                      : "bg-slate-50 border-slate-300 text-slate-900 focus:border-violet-500"
                  }
                `}
              >
                <option>Suggestion</option>
                <option>Bug Report</option>
                <option>General Feedback</option>
              </select>
            </div>

            {/* Message */}

            <div className="mt-5">
              <label
                className={`block text-sm font-medium mb-2 ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                Your feedback
              </label>

              <textarea
                rows={6}
                placeholder="Tell us what you think..."
                value={form.message}
                onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value,
                  })
                }
                className={`
                  ${inputClasses}
                  resize-none
                  ${
                    isDark
                      ? "bg-slate-800/80 border-slate-700 text-white placeholder:text-slate-500 focus:border-violet-500"
                      : "bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-500 focus:border-violet-500"
                  }
                `}
              />
            </div>

            {/* Submit */}

            <button
              type="submit"
              className="
                group
                mt-6
                w-full
                bg-violet-600
                hover:bg-violet-700
                hover:shadow-lg
                hover:shadow-violet-600/20
                text-white
                rounded-xl
                py-4
                font-semibold
                flex
                items-center
                justify-center
                gap-3
                transition-all
                duration-300
              "
            >
              <Send
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
              Submit Feedback
            </button>

            {/* Privacy note */}

            <p
              className={`mt-5 text-center text-sm leading-6 ${
                isDark ? "text-slate-500" : "text-slate-500"
              }`}
            >
              Your feedback helps us improve MyDiary. We never share your
              information.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
