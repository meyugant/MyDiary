import { BookOpen, Shield, Heart, Github } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-10">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10">
        <div className="text-center">
          <BookOpen size={60} className="mx-auto text-violet-500" />

          <h1 className="text-3xl md:text-5xl font-bold text-white mt-6">About MyDiary</h1>

          <p className="text-slate-400 mt-6 max-w-3xl mx-auto leading-7 md:leading-8 text-base md:text-lg">
            MyDiary is a secure and modern digital journal that lets you capture
            your thoughts, memories and experiences in one beautiful place.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-16">
          <div className="bg-slate-800 rounded-2xl p-8">
            <Shield className="text-green-400" size={36} />

            <h2 className="text-2xl font-bold text-white mt-5">Secure</h2>

            <p className="text-slate-400 mt-4">
              Your entries remain private and protected using secure
              authentication.
            </p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8">
            <Heart className="text-pink-500" size={36} />

            <h2 className="text-2xl font-bold text-white mt-5">Personal</h2>

            <p className="text-slate-400 mt-4">
              Write your memories, daily experiences and emotions without
              distractions.
            </p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8">
            <Github className="text-violet-500" size={36} />

            <h2 className="text-2xl font-bold text-white mt-5">
              Open Source Ready
            </h2>

            <p className="text-slate-400 mt-4">
              Built with React, Express and PostgreSQL using a modern full-stack
              architecture codebase available on github.
            </p>
          </div>
        </div>

        <div className="mt-10 md:mt-16 border-t border-slate-800 pt-6 md:pt-10 text-center">
          <p className="text-slate-500">Version 1.0.0</p>

          <p className="text-slate-400 mt-2">
            © 2026 MyDiary • Designed and Developed by mydiaryweb team.
          </p>
        </div>
      </div>
    </section>
  );
}
