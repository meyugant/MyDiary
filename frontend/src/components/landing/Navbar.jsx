import { useState } from "react";
import { BookOpen, Moon, Sun, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar({ isDark, toggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b ${
        isDark
          ? "bg-slate-950/80 border-slate-800"
          : "bg-white/80 border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}

        <Link to="/" className="flex items-center gap-3">
          <BookOpen size={30} className="text-violet-500" />

          <span
            className={`text-2xl md:text-3xl font-bold ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            MyDiary
          </span>
        </Link>

        {/* Desktop Links */}

        <div
          className={`hidden lg:flex gap-10 text-lg ${
            isDark ? "text-slate-300" : "text-slate-700"
          }`}
        >
          <a
            href="#features"
            className={`${isDark ? "text-white" : "text-slate-900"} hover:text-violet-500 transition`}
          >
            Features
          </a>

          <a
            href="#feedback"
            className={`${isDark ? "text-white" : "text-slate-900"} hover:text-violet-500 transition`}
          >
            Feedback
          </a>

          <a
            href="#faq"
            className={`${isDark ? "text-white" : "text-slate-900"} hover:text-violet-500 transition`}
          >
            FAQ
          </a>
        </div>

        {/* Desktop Right */}

        <div className="hidden lg:flex items-center gap-5">
          <Link
            to="/login"
            className={`${isDark ? "text-white" : "text-slate-900"} hover:text-violet-500 transition`}
          >
            Login
          </Link>

          <Link to="/register">
            <button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-xl transition">
              Get Started
            </button>
          </Link>

          <button
            onClick={toggleTheme}
            className="hover:rotate-180 transition duration-500"
          >
            {isDark ? <Sun className="text-yellow-400" /> : <Moon />}
          </button>
        </div>

        {/* Mobile Controls */}

        <div className="flex lg:hidden items-center gap-4">
          <button onClick={toggleTheme}>
            {isDark ? <Sun className="text-yellow-400" /> : <Moon />}
          </button>

          <button onClick={() => setOpen(!open)}>
            {open ? (
              <X size={28} className={isDark ? "text-white" : "text-black"} />
            ) : (
              <Menu
                size={28}
                className={isDark ? "text-white" : "text-black"}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {open && (
        <div
          className={`lg:hidden px-6 py-6 border-t ${
            isDark
              ? "bg-slate-950 border-slate-800"
              : "bg-white border-slate-200"
          }`}
        >
          <div
            className={`flex flex-col gap-6 text-lg font-medium ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            <a
              href="#features"
              onClick={() => setOpen(false)}
              className="hover:text-violet-500 transition"
            >
              Features
            </a>

            <a
              href="#feedback"
              onClick={() => setOpen(false)}
              className="hover:text-violet-500 transition"
            >
              Feedback
            </a>

            <a
              href="#faq"
              onClick={() => setOpen(false)}
              className="hover:text-violet-500 transition"
            >
              FAQ
            </a>

            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="hover:text-violet-500 transition"
            >
              Login
            </Link>

            <Link to="/register" onClick={() => setOpen(false)}>
              <button className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-xl font-semibold transition">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
