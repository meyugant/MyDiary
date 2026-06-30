import Button from "../ui/Button";
import { ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero({ isDark }) {
  const navigate = useNavigate();

  return (
    <section className="pt-28 md:pt-36 pb-20 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left */}

        <div className="text-center lg:text-left">
          <span className="bg-violet-600/20 text-violet-400 px-4 py-2 rounded-full">
            ✨ Your private digital journal
          </span>

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

          <p
            className={`mt-6 text-base sm:text-lg lg:text-xl leading-8 ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            A calm, secure and modern journaling experience. Capture your
            memories, emotions and ideas in one beautiful place.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => navigate("/register")}
                className="
                  w-full
                  sm:w-auto
                  max-w-xs
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
                <ArrowRight size={18} />
              </button>
            </div>

            {/* <Button onClick={() => navigate("/learn-more")}>
              <div className="flex items-center gap-2">
                <Play size={18} />
                Learn More
              </div>
            </Button> */}
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <h2 className="text-4xl">🔒</h2>
              <p className={isDark ? "text-slate-400" : "text-slate-600"}>
                Private by Design
              </p>
            </div>

            <div>
              <h2 className="text-4xl">☁️</h2>
              <p className={isDark ? "text-slate-400" : "text-slate-600"}>
                Cloud Synced
              </p>
            </div>

            <div>
              <h2 className="text-4xl">⚡</h2>
              <p className={isDark ? "text-slate-400" : "text-slate-600"}>
                Fast & Responsive
              </p>
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="relative flex justify-center">
          <div className="absolute w-96 h-96 bg-violet-600/20 blur-3xl rounded-full"></div>

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
                className={`text-xl sm:text-2xl font-bold ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                📖 Today's Journal
              </h3>

              <p className="text-slate-400 mt-2">Write. Reflect. Remember.</p>

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

              <div className="grid grid-cols-3 gap-4 mt-8">
                <div
                  className={`rounded-xl p-4 text-center ${
                    isDark ? "bg-slate-800" : "bg-slate-100"
                  }`}
                >
                  <div className="text-xl sm:text-2xl">😊</div>

                  <p className="text-sm text-slate-400 mt-2">Happy</p>
                </div>

                <div
                  className={`rounded-xl p-4 text-center ${
                    isDark ? "bg-slate-800" : "bg-slate-100"
                  }`}
                >
                  <div className="text-xl sm:text-2xl">🔥</div>

                  <p className="text-sm text-slate-400 mt-2">17 Days</p>
                </div>

                <div
                  className={`rounded-xl p-4 text-center ${
                    isDark ? "bg-slate-800" : "bg-slate-100"
                  }`}
                >
                  <div className="text-xl sm:text-2xl">📖</div>

                  <p className="text-sm text-slate-400 mt-2">184 Entries</p>
                </div>
              </div>

              <button
                className="w-full mt-8 bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-xl transition"
                onClick={() => navigate("/register")}
              >
                Continue Writing
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-24 px-4 sm:px-6 lg:px-8">
        <div className={`h-px ${isDark ? "bg-slate-800" : "bg-slate-200"}`} />
      </div>
    </section>
  );
}
