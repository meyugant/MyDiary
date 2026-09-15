import { useState } from "react";
import { BookOpen, Moon, Sun, Menu, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar({ isDark, toggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full border-b backdrop-blur-2xl transition-colors duration-300 ${
        isDark
          ? "border-slate-800/80 bg-[#050b1d]/80"
          : "border-slate-200/80 bg-white/80"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between px-5 sm:px-7 lg:px-10">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-3">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 ${
              isDark
                ? "border-violet-500/20 bg-violet-500/10 group-hover:border-violet-500/40 group-hover:bg-violet-500/15"
                : "border-violet-200 bg-violet-50 group-hover:border-violet-300"
            }`}
          >
            <BookOpen size={21} strokeWidth={1.9} className="text-violet-500" />
          </div>

          <span
            className={`text-xl font-bold tracking-tight sm:text-2xl ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            MyDiary
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div
          className={`hidden items-center gap-9 lg:flex ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          <a
            href="#features"
            className="text-sm font-medium transition-colors hover:text-violet-500"
          >
            Features
          </a>

          <a
            href="#feedback"
            className="text-sm font-medium transition-colors hover:text-violet-500"
          >
            Feedback
          </a>

          <a
            href="#faq"
            className="text-sm font-medium transition-colors hover:text-violet-500"
          >
            FAQ
          </a>
        </div>

        {/* Desktop Right */}
        <div className="hidden items-center gap-4 lg:flex">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 hover:rotate-12 ${
              isDark
                ? "border-slate-800 bg-slate-900/70 hover:border-violet-500/30 hover:bg-violet-500/10"
                : "border-slate-200 bg-white hover:border-violet-300 hover:bg-violet-50"
            }`}
          >
            {isDark ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-slate-700" />
            )}
          </button>

          {/* Login */}
          <Link
            to="/login"
            className={`px-3 py-2 text-sm font-medium transition-colors ${
              isDark
                ? "text-slate-300 hover:text-white"
                : "text-slate-700 hover:text-slate-950"
            }`}
          >
            Login
          </Link>

          {/* Get Started */}
          <Link
            to="/register"
            className="group flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition-all duration-300 hover:bg-violet-500 hover:shadow-violet-600/30"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Theme */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
              isDark
                ? "border-slate-800 bg-slate-900/70"
                : "border-slate-200 bg-white"
            }`}
          >
            {isDark ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-slate-700" />
            )}
          </button>

          {/* Menu */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
              isDark
                ? "border-slate-800 bg-slate-900/70"
                : "border-slate-200 bg-white"
            }`}
          >
            {open ? (
              <X
                size={21}
                className={isDark ? "text-white" : "text-slate-900"}
              />
            ) : (
              <Menu
                size={21}
                className={isDark ? "text-white" : "text-slate-900"}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`border-t px-5 pb-6 pt-5 lg:hidden ${
            isDark
              ? "border-slate-800/80 bg-[#050b1d]/95"
              : "border-slate-200 bg-white/95"
          }`}
        >
          <div className="flex flex-col gap-2">
            <a
              href="#features"
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                isDark
                  ? "text-slate-300 hover:bg-violet-500/10 hover:text-violet-400"
                  : "text-slate-700 hover:bg-violet-50 hover:text-violet-600"
              }`}
            >
              Features
            </a>

            <a
              href="#feedback"
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                isDark
                  ? "text-slate-300 hover:bg-violet-500/10 hover:text-violet-400"
                  : "text-slate-700 hover:bg-violet-50 hover:text-violet-600"
              }`}
            >
              Feedback
            </a>

            <a
              href="#faq"
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                isDark
                  ? "text-slate-300 hover:bg-violet-500/10 hover:text-violet-400"
                  : "text-slate-700 hover:bg-violet-50 hover:text-violet-600"
              }`}
            >
              FAQ
            </a>

            <div
              className={`my-2 h-px ${
                isDark ? "bg-slate-800" : "bg-slate-200"
              }`}
            />

            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                isDark
                  ? "text-slate-300 hover:bg-violet-500/10 hover:text-white"
                  : "text-slate-700 hover:bg-violet-50 hover:text-slate-950"
              }`}
            >
              Login
            </Link>

            <Link
              to="/register"
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:bg-violet-500"
            >
              Get Started
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
