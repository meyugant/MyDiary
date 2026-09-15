import { BookOpen, Shield, Heart, Github } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-6 md:py-10">
      {/* Main About Card */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/90">
        {/* Background Glow */}
        <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl" />

        <div className="relative p-6 md:p-10 lg:p-14">
          {/* Hero */}
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-violet-500/20 bg-violet-500/10 shadow-[0_0_35px_rgba(139,92,246,0.12)]">
              <BookOpen
                size={38}
                strokeWidth={1.8}
                className="text-violet-400"
              />
            </div>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
              Your private space
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
              About <span className="text-violet-400">MyDiary</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-slate-400 md:text-base md:leading-8">
              MyDiary is a secure and modern digital journal that lets you
              capture your thoughts, memories and experiences in one beautiful
              place.
            </p>
          </div>

          {/* Divider */}
          <div className="my-10 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent md:my-14" />

          {/* Feature Cards */}
          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {/* Secure */}
            <div className="group rounded-3xl border border-slate-800 bg-slate-950/50 p-6 transition-colors duration-300 hover:border-emerald-500/20 md:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/10 bg-emerald-400/10">
                <Shield
                  size={25}
                  strokeWidth={1.8}
                  className="text-emerald-400"
                />
              </div>

              <h2 className="mt-6 text-xl font-semibold text-white">Secure</h2>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Your entries remain private and protected using secure
                authentication.
              </p>
            </div>

            {/* Personal */}
            <div className="group rounded-3xl border border-slate-800 bg-slate-950/50 p-6 transition-colors duration-300 hover:border-pink-500/20 md:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-pink-400/10 bg-pink-400/10">
                <Heart size={25} strokeWidth={1.8} className="text-pink-400" />
              </div>

              <h2 className="mt-6 text-xl font-semibold text-white">
                Personal
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Write your memories, daily experiences and emotions without
                distractions.
              </p>
            </div>

            {/* Open Source */}
            <div className="group rounded-3xl border border-slate-800 bg-slate-950/50 p-6 transition-colors duration-300 hover:border-violet-500/20 md:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/10 bg-violet-400/10">
                <Github
                  size={25}
                  strokeWidth={1.8}
                  className="text-violet-400"
                />
              </div>

              <h2 className="mt-6 text-xl font-semibold text-white">
                Open Source Ready
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Built with React, Express and PostgreSQL using a modern
                full-stack architecture codebase available on github.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-10 border-t border-slate-800 pt-7 text-center md:mt-12">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-600">
              Version 2.5.0
            </p>

            <p className="mt-3 text-sm text-slate-500">
              © 2026 MyDiary • Designed and Developed by mydiaryweb team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
