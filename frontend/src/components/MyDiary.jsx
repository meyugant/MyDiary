import { useState, useEffect } from "react";
import { Moon, Sun, BookOpen, Shield, Zap } from "lucide-react";
import "../../public/styles/MyDiary.css";
import { Link } from "react-router-dom";

export default function IntroPage() {
  const [isDark, setIsDark] = useState(true); // Default to dark theme as requested
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Apply theme to document
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Trigger fade-in animation
    setIsVisible(true);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div
      className={`min-h-screen pt-12 transition-all duration-700 ease-in-out ${
        isDark
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
          : "bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50"
      }`}
    >
      {/* Glassmorphism Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isDark
            ? "bg-slate-900/20 backdrop-blur-xl border-slate-700/20"
            : "bg-white/20 backdrop-blur-xl border-white/20"
        } border-b`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <BookOpen
                className={`h-8 w-8 ${
                  isDark ? "text-purple-400" : "text-purple-600"
                }`}
              />
              <span
                className={`text-xl font-bold ${
                  isDark ? "text-white" : "text-slate-800"
                }`}
              >
                MyDiary
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className={`transition-colors duration-300 hover:scale-105 ${
                  isDark
                    ? "text-slate-300 hover:text-purple-400"
                    : "text-slate-600 hover:text-purple-600"
                }`}
              >
                Features
              </a>
              <a
                href="#"
                className={`transition-colors duration-300 hover:scale-105 ${
                  isDark
                    ? "text-slate-300 hover:text-purple-400"
                    : "text-slate-600 hover:text-purple-600"
                }`}
              >
                About
              </a>
              <a
                href="#"
                className={`transition-colors duration-300 hover:scale-105 ${
                  isDark
                    ? "text-slate-300 hover:text-purple-400"
                    : "text-slate-600 hover:text-purple-600"
                }`}
              >
                Contact
              </a>
            </div>

            {/* Auth Buttons & Theme Toggle */}
            <div className="flex items-center space-x-4">
              <Link to={"/login"}>
                <button
                  className={`rounded-full px-6 py-2 transition-all duration-300 hover:scale-105 bg-transparent border-0 cursor-pointer ${
                    isDark
                      ? "text-slate-300 hover:bg-purple-500/20 hover:text-purple-300 hover:shadow-lg hover:shadow-purple-500/25"
                      : "text-slate-600 hover:bg-purple-100 hover:text-purple-700"
                  }`}
                >
                  Login
                </button>
              </Link>
              <Link to={"/register"}>
                <button
                  className={`rounded-full px-6 py-2 transition-all duration-300 hover:scale-105 border-0 cursor-pointer ${
                    isDark
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40"
                      : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg"
                  }`}
                >
                  Register
                </button>
              </Link>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`rounded-full p-2 transition-all duration-300 hover:scale-110 bg-transparent border-0 cursor-pointer ${
                  isDark
                    ? "text-yellow-400 hover:bg-yellow-400/20 hover:shadow-lg hover:shadow-yellow-400/25"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {isDark ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className={`pt-24 pb-16 px-4 sm:px-6 lg:px-8 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1
                  className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight ${
                    isDark ? "text-white" : "text-slate-800"
                  }`}
                >
                  Your Digital
                  <span
                    className={`block ${
                      isDark
                        ? "bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                        : "bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                    }`}
                  >
                    Sanctuary
                  </span>
                </h1>
                <p
                  className={`text-lg sm:text-xl leading-relaxed ${
                    isDark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  Capture your thoughts, dreams, and memories in a beautiful,
                  secure digital diary. Experience journaling like never before
                  with our intuitive and calming interface.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={"/login"}>
                <button
                  className={`rounded-full px-8 py-4 text-lg transition-all duration-300 hover:scale-105 border-0 cursor-pointer ${
                    isDark
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-xl shadow-purple-500/25 hover:shadow-2xl hover:shadow-purple-500/40"
                      : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-xl"
                  }`}
                >
                  Start Writing Today
                </button>
                </Link>
                <Link to={"/login"}>
                <button
                  className={`rounded-full px-8 py-4 text-lg transition-all duration-300 hover:scale-105 border cursor-pointer ${
                    isDark
                      ? "border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:border-purple-400 hover:text-purple-300 bg-transparent"
                      : "border-slate-300 text-slate-600 hover:bg-white/50 bg-transparent"
                    }`}
                    >
                  Learn More
                </button>
                  </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div
                className={`absolute inset-0 rounded-3xl blur-3xl opacity-30 ${
                  isDark
                    ? "bg-gradient-to-r from-purple-500 to-pink-500"
                    : "bg-gradient-to-r from-purple-300 to-pink-300"
                }`}
              ></div>
              <img
                src="/images/MyDiary-main.jpg"
                alt="MyDiary App Interface"
                className="relative rounded-3xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-3xl sm:text-4xl font-bold mb-4 ${
                isDark ? "text-white" : "text-slate-800"
              }`}
            >
              Why Choose MyDiary?
            </h2>
            <p
              className={`text-lg ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Discover the features that make journaling a joy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div
              className={`group transition-all duration-500 hover:scale-105 hover:-translate-y-2 rounded-lg border ${
                isDark
                  ? "bg-slate-800/50 backdrop-blur-xl border-slate-700/50 hover:bg-slate-800/70 hover:shadow-2xl hover:shadow-purple-500/20"
                  : "bg-white/60 backdrop-blur-xl border-white/50 hover:bg-white/80 hover:shadow-2xl"
              }`}
            >
              <div className="p-8 text-center">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 transition-all duration-300 group-hover:scale-110 ${
                    isDark
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/25"
                      : "bg-gradient-to-r from-blue-400 to-cyan-400 shadow-lg"
                  }`}
                >
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3
                  className={`text-xl font-semibold mb-4 ${
                    isDark ? "text-white" : "text-slate-800"
                  }`}
                >
                  Beautiful Writing
                </h3>
                <p
                  className={`${isDark ? "text-slate-300" : "text-slate-600"}`}
                >
                  Enjoy a distraction-free writing experience with our elegant,
                  minimalist interface designed for focus and creativity.
                </p>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div
              className={`group transition-all duration-500 hover:scale-105 hover:-translate-y-2 rounded-lg border ${
                isDark
                  ? "bg-slate-800/50 backdrop-blur-xl border-slate-700/50 hover:bg-slate-800/70 hover:shadow-2xl hover:shadow-green-500/20"
                  : "bg-white/60 backdrop-blur-xl border-white/50 hover:bg-white/80 hover:shadow-2xl"
              }`}
            >
              <div className="p-8 text-center">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 transition-all duration-300 group-hover:scale-110 ${
                    isDark
                      ? "bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg shadow-green-500/25"
                      : "bg-gradient-to-r from-green-400 to-emerald-400 shadow-lg"
                  }`}
                >
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3
                  className={`text-xl font-semibold mb-4 ${
                    isDark ? "text-white" : "text-slate-800"
                  }`}
                >
                  Secure & Private
                </h3>
                <p
                  className={`${isDark ? "text-slate-300" : "text-slate-600"}`}
                >
                  Your thoughts are precious. We use end-to-end encryption to
                  ensure your entries remain completely private and secure.
                </p>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div
              className={`group transition-all duration-500 hover:scale-105 hover:-translate-y-2 rounded-lg border ${
                isDark
                  ? "bg-slate-800/50 backdrop-blur-xl border-slate-700/50 hover:bg-slate-800/70 hover:shadow-2xl hover:shadow-yellow-500/20"
                  : "bg-white/60 backdrop-blur-xl border-white/50 hover:bg-white/80 hover:shadow-2xl"
              }`}
            >
              <div className="p-8 text-center">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 transition-all duration-300 group-hover:scale-110 ${
                    isDark
                      ? "bg-gradient-to-r from-yellow-500 to-orange-500 shadow-lg shadow-yellow-500/25"
                      : "bg-gradient-to-r from-yellow-400 to-orange-400 shadow-lg"
                  }`}
                >
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3
                  className={`text-xl font-semibold mb-4 ${
                    isDark ? "text-white" : "text-slate-800"
                  }`}
                >
                  Smart Features
                </h3>
                <p
                  className={`${isDark ? "text-slate-300" : "text-slate-600"}`}
                >
                  Discover insights about your writing patterns, set reminders,
                  and organize your thoughts with intelligent tagging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`footer ${isDark ? "dark" : "light"}`}>
        <div className="footer-content">
          <p>&copy; 2025 MyDiary. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}