import { Sparkles, ArrowDown } from "lucide-react";

export default function Welcome({ username }) {
  const hour = new Date().getHours();

  let greeting = "Hello";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";
  else greeting = "Good Evening";

  return (
    <section className="mb-6 md:mb-8">
      <div
        className="
          relative
          min-h-[250px]
          md:min-h-[285px]
          overflow-hidden
          rounded-3xl
          border
          border-slate-800
          bg-slate-900
        "
      >
        {/* Atmospheric background */}

        <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-slate-950 to-blue-950" />

        {/* Moon / ambient glow */}

        <div
          className="
            absolute
            -top-20
            right-[12%]
            w-52
            h-52
            rounded-full
            bg-violet-400/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            top-10
            right-[18%]
            w-20
            h-20
            rounded-full
            bg-violet-300/10
            blur-xl
          "
        />

        {/* Mountain silhouettes */}

        <div
          className="
            absolute
            bottom-0
            left-0
            w-full
            h-[42%]
            bg-gradient-to-t
            from-slate-950
            via-slate-950/90
            to-transparent
            opacity-90
          "
        />

        <div
          className="
            absolute
            -bottom-20
            -left-10
            w-[65%]
            h-48
            rotate-[-8deg]
            bg-slate-950/90
            rounded-[45%]
            blur-sm
          "
        />

        <div
          className="
            absolute
            -bottom-24
            -right-10
            w-[60%]
            h-56
            rotate-[7deg]
            bg-slate-950/95
            rounded-[45%]
          "
        />

        {/* Purple horizon glow */}

        <div
          className="
            absolute
            bottom-12
            left-1/2
            -translate-x-1/2
            w-[70%]
            h-20
            bg-violet-600/10
            blur-3xl
          "
        />

        {/* Content */}

        <div
          className="
            relative
            z-10
            flex
            min-h-[250px]
            md:min-h-[285px]
            flex-col
            justify-center
            px-6
            py-10
            md:px-10
            lg:px-12
          "
        >
          {/* Greeting */}

          <div className="flex items-center gap-2 text-violet-300">
            <div
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-lg
                bg-violet-500/10
                border
                border-violet-500/20
              "
            >
              <Sparkles size={16} />
            </div>

            <p className="text-sm font-medium">{greeting}</p>
          </div>

          {/* Heading */}

          <h1
            className="
              mt-4
              max-w-3xl
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              tracking-tight
              leading-[1.05]
              text-white
            "
          >
            Welcome back,
            <span className="text-violet-400"> {username}</span>
          </h1>

          {/* Subtitle */}

          <p
            className="
              mt-4
              max-w-xl
              text-sm
              md:text-base
              leading-6
              text-slate-300/80
            "
          >
            A new day, a new page. Take a moment to write down what matters to
            you.
          </p>

          {/* Bottom hint */}

          <div className="flex items-center gap-2 mt-7 text-xs text-slate-500">
            <ArrowDown size={14} />

            <span>Your story continues here</span>
          </div>
        </div>

        {/* Bottom fade */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-16
            bg-gradient-to-t
            from-slate-950
            to-transparent
            pointer-events-none
          "
        />
      </div>
    </section>
  );
}
