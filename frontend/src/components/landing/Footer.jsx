import { BookOpen, Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer({ isDark }) {
  return (
    <footer
      className={`border-t ${
        isDark ? "bg-slate-950 border-slate-800" : "bg-white border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* Logo */}

          <div>
            <div className="flex items-center gap-3">
              <BookOpen className="text-violet-500" size={32} />

              <h2
                className={`text-3xl font-bold ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                MyDiary
              </h2>
            </div>

            <p
              className={`mt-6 leading-8 ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Capture your memories, thoughts, and moments in a secure,
              beautiful, and distraction-free digital journal.
            </p>
          </div>

          {/* Product */}

          <div>
            <h3
              className={`font-bold text-xl ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Product
            </h3>

            <div className="mt-6 flex flex-col space-y-4">
              <a
                href="#features"
                className={`transition hover:text-violet-400 ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Features
              </a>

              <a
                href="#feedback"
                className={`transition hover:text-violet-400 ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Feedback
              </a>

              <a
                href="#faq"
                className={`transition hover:text-violet-400 ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                FAQ
              </a>

              <a
                href="/register"
                className={`transition hover:text-violet-400 ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Company */}

          <div>
            <h3
              className={`font-bold text-xl ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Company
            </h3>

            <div className="mt-6 flex flex-col space-y-4">
              <a
                href="#about"
                className={`transition hover:text-violet-400 ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                About
              </a>

              <a
                href="/privacy"
                className={`transition hover:text-violet-400 ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Privacy Policy
              </a>

              <a
                href="/terms"
                className={`transition hover:text-violet-400 ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Terms of Service
              </a>

              <a
                href="mailto:your@email.com"
                className={`transition hover:text-violet-400 ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Connect */}

          <div>
            <h3
              className={`font-bold text-xl ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Connect
            </h3>

            <div className="flex gap-4 mt-8">
              <a
                aria-label="GitHub"
                href="https://github.com/meyugant/mydiary"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-violet-600 text-white hover:bg-violet-700 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
              >
                <Github size={22} />
              </a>

              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/yugant-sidar-b4647541a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-violet-600 text-white hover:bg-violet-700 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
              >
                <Linkedin size={22} />
              </a>

              <a
                aria-label="Send Email"
                href="mailto:mydiaryweb.official@gmail.com"
                className="p-3 rounded-xl bg-violet-600 text-white hover:bg-violet-700 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div
          className={`mt-20 pt-10 border-t flex flex-col md:flex-row justify-between items-center gap-4 ${
            isDark ? "border-slate-800" : "border-slate-200"
          }`}
        >
          <p className={`${isDark ? "text-slate-400" : "text-slate-600"}`}>
            © {new Date().getFullYear()} MyDiary. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <span className={`${isDark ? "text-slate-400" : "text-slate-600"}`}>
              Designed & Developed with
            </span>

            <Heart size={18} className="text-red-500 fill-red-500" />

            <span className={`${isDark ? "text-slate-400" : "text-slate-600"}`}>
              by Yugant
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
