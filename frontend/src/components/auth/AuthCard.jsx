export default function AuthCard({ title, subtitle, children }) {
  return (
    <div
      className="
        min-h-screen
        bg-slate-950
        flex
        items-center
        justify-center
        px-4
        sm:px-6
        py-6
        relative
        overflow-hidden
      "
    >
      <div
        className="
          absolute
          w-[450px]
          h-[450px]
          bg-violet-700/20
          blur-[140px]
          rounded-full
          -top-48
          -left-48
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          w-[350px]
          h-[350px]
          bg-blue-600/15
          blur-[140px]
          rounded-full
          -bottom-32
          -right-32
          pointer-events-none
        "
      />

      {/*  CARD */}

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl px-6 sm:px-8 py-5 sm:py-6 shadow-2xl shadow-black/30">
          {/*  HEADING*/}

          <div className="text-center mt-4">
            <h1
              className="
                text-3xl
                sm:text-4xl
                font-bold
                tracking-tight
                text-white
              "
            >
              {title}
            </h1>

            <p
              className="
              text-sm
              sm:text-base
              text-slate-400
              mt-2
            "
            >
              {subtitle}
            </p>
          </div>

          {/* FORM  */}

          <div className="mt-7">{children}</div>
        </div>
      </div>
    </div>
  );
}
