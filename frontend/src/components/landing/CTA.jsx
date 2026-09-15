import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CTA({ isDark }) {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div
        className={`
          relative
          max-w-6xl
          mx-auto
          rounded-3xl
          overflow-hidden
          ${
            isDark
              ? "bg-gradient-to-br from-violet-700 via-violet-700 to-indigo-700 shadow-2xl shadow-violet-950/40"
              : "bg-gradient-to-br from-violet-600 via-violet-600 to-indigo-600 shadow-2xl shadow-violet-200"
          }
        `}
      >
        {/* Decorative background glow */}

        <div
          className="
            absolute
            -top-32
            -right-32
            w-80
            h-80
            rounded-full
            bg-white/10
            blur-3xl
            pointer-events-none
          "
        />

        <div
          className="
            absolute
            -bottom-40
            -left-24
            w-72
            h-72
            rounded-full
            bg-indigo-300/10
            blur-3xl
            pointer-events-none
          "
        />

        {/* Decorative stars */}

        <Sparkles size={22} className="absolute top-8 left-8 text-white/20" />

        <Sparkles
          size={16}
          className="absolute bottom-10 right-10 text-white/20"
        />

        {/* Content */}

        <div className="relative px-6 sm:px-10 md:px-16 py-14 md:py-16 text-center">
          {/* Label */}

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-violet-100 text-sm font-medium backdrop-blur-sm">
            <Sparkles size={15} />
            Your thoughts deserve a place
          </div>

          {/* Heading */}

          <h2 className="mt-7 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight">
            Start your journaling
            <span className="block">journey today.</span>
          </h2>

          {/* Description */}

          <p className="mt-6 text-base sm:text-lg text-violet-100/90 max-w-2xl mx-auto leading-8">
            Capture every thought, every memory, and every emotion in one
            beautiful and secure place.
          </p>

          {/* CTA Button */}

          <button
            type="button"
            onClick={() => navigate("/register")}
            className="
              group
              mt-9
              inline-flex
              items-center
              justify-center
              gap-2.5
              bg-white
              text-violet-700
              px-7
              sm:px-8
              py-3.5
              rounded-xl
              font-bold
              shadow-lg
              shadow-black/10
              hover:shadow-xl
              hover:-translate-y-0.5
              active:translate-y-0
              transition-all
              duration-300
            "
          >
            <span>Get Started</span>
          </button>

          {/* Small reassurance */}

          <p className="mt-5 text-sm text-white/60">
            Start writing in just a few moments.
          </p>
        </div>
      </div>
    </section>
  );
}
