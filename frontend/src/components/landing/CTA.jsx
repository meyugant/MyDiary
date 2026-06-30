import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CTA({ isDark }) {
  const navigate = useNavigate();

  return (
    <section className="py-10 md:py-14 px-4 sm:px-6 lg:px-8">
      <div
        className={`max-w-6xl mx-auto rounded-3xl overflow-hidden ${
          isDark
            ? "bg-gradient-to-r from-violet-700 to-indigo-700"
            : "bg-gradient-to-r from-violet-600 to-indigo-600"
        }`}
      >
        <div className="px-6 md:px-10 py-12 md:py-14 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
            Start your journaling
            <br />
            journey today.
          </h2>

          <p className="mt-5 text-base md:text-lg text-violet-100 max-w-xl mx-auto">
            Capture every thought, every memory, and every emotion in one
            beautiful and secure place.
          </p>

          <button
            onClick={() => navigate("/register")}
            className="mt-8 bg-white text-violet-700 px-7 py-3 rounded-xl font-bold flex items-center gap-2 mx-auto hover:scale-105 transition-all duration-300"
          >
            Get Started
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
