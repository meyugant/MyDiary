import Button from "../ui/Button";
import {
  ArrowRight,
  Play,
  ShieldCheck,
  Cloud,
  Sparkles,
  BookOpen,
  Flame,
  Smile,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero({ isDark }) {
  const navigate = useNavigate();

  return (
    <section className="pt-28 md:pt-36 pb-20 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left */}

        <div className="text-center lg:text-left">
          {/* Badge */}

          <span className="inline-flex items-center gap-2 bg-violet-600/20 text-violet-400 px-4 py-2 rounded-full">
            <Sparkles size={16} />
            Your private digital journal
          </span>

          {/* Heading */}

          <h1
            className={`mt-8 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Your Thoughts.
            <span className="block text-violet-500">
              Beautifully Protected.
            </span>
          </h1>

          {/* Description */}

          <p
            className={`mt-6 text-base sm:text-lg lg:text-xl leading-8 ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            A calm, secure and modern journaling experience. Capture your
            memories, emotions and ideas in one beautiful place.
          </p>

          {/* CTA */}

          <div className="mt-8 flex justify-center lg:justify-start">
            <button
              onClick={() => navigate("/register")}
              className="
                w-full
                sm:w-auto
                flex
                items-center
                justify-center
                gap-2
                bg-violet-600
                hover:bg-violet-700
                text-white
                px-8
                py-3
                rounded-xl
                font-semibold
                transition
              "
            >
              <span>Start Writing</span>
            </button>
          </div>

          {/* Trust / Highlights */}

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-violet-600/15 flex items-center justify-center">
                <ShieldCheck size={24} className="text-violet-400" />
              </div>

              <p className={isDark ? "text-slate-400" : "text-slate-600"}>
                Private by Design
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-violet-600/15 flex items-center justify-center">
                <Cloud size={24} className="text-violet-400" />
              </div>

              <p className={isDark ? "text-slate-400" : "text-slate-600"}>
                Cloud Synced
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-violet-600/15 flex items-center justify-center">
                <Sparkles size={24} className="text-violet-400" />
              </div>

              <p className={isDark ? "text-slate-400" : "text-slate-600"}>
                Fast & Responsive
              </p>
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="relative flex justify-center">
          {/* Glow */}

          <div className="absolute w-96 h-96 bg-violet-600/20 blur-3xl rounded-full"></div>

          {/* Browser Card */}

          <div
            className={`relative w-full max-w-[430px] rounded-3xl overflow-hidden shadow-2xl border ${
              isDark
                ? "bg-slate-900 border-slate-700"
                : "bg-white border-slate-200"
            }`}
          >
            {/* Browser Bar */}

            <div
              className={`px-5 py-4 border-b flex items-center justify-between ${
                isDark
                  ? "border-slate-700 bg-slate-800"
                  : "border-slate-200 bg-slate-100"
              }`}
            >
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <span className="text-sm text-slate-400">mydiaryweb.com</span>
            </div>

            {/* Content */}

            <div className="p-5 sm:p-8">
              <h3
                className={`flex items-center gap-2 text-xl sm:text-2xl font-bold ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                <BookOpen size={24} className="text-violet-400" />
                Today's Journal
              </h3>

              <p className="text-slate-400 mt-2">Write. Reflect. Remember.</p>

              {/* Journal Preview */}

              <div
                className={`mt-8 rounded-2xl p-5 ${
                  isDark ? "bg-slate-800" : "bg-slate-100"
                }`}
              >
                <h4
                  className={`font-semibold ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  A Moment Worth Remembering
                </h4>

                <p className="text-slate-400 mt-4">
                  Some memories fade with time, but the ones we write down stay
                  with us forever. MyDiary gives you a calm space to capture
                  your thoughts whenever inspiration strikes.
                </p>
              </div>

              {/* Stats */}

              <div className="grid grid-cols-3 gap-4 mt-8">
                {/* Mood */}

                <div
                  className={`rounded-xl p-4 text-center ${
                    isDark ? "bg-slate-800" : "bg-slate-100"
                  }`}
                >
                  <Smile size={24} className="mx-auto text-violet-400" />

                  <p className="text-sm text-slate-400 mt-2">Happy</p>
                </div>

                {/* Streak */}

                <div
                  className={`rounded-xl p-4 text-center ${
                    isDark ? "bg-slate-800" : "bg-slate-100"
                  }`}
                >
                  <Flame size={24} className="mx-auto text-violet-400" />

                  <p className="text-sm text-slate-400 mt-2">17 Days</p>
                </div>

                {/* Entries */}

                <div
                  className={`rounded-xl p-4 text-center ${
                    isDark ? "bg-slate-800" : "bg-slate-100"
                  }`}
                >
                  <BookOpen size={24} className="mx-auto text-violet-400" />

                  <p className="text-sm text-slate-400 mt-2">184 Entries</p>
                </div>
              </div>

              {/* Continue */}

              <button
                className="
                  w-full
                  mt-8
                  bg-violet-600
                  hover:bg-violet-700
                  text-white
                  py-3
                  rounded-xl
                  transition
                  flex
                  items-center
                  justify-center
                  gap-2
                "
                onClick={() => navigate("/register")}
              >
                Continue Writing
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}

      <div className="max-w-7xl mx-auto mt-24 px-4 sm:px-6 lg:px-8">
        <div className={`h-px ${isDark ? "bg-slate-800" : "bg-slate-200"}`} />
      </div>
    </section>
  );
}
