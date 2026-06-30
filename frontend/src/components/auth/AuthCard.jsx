import { BookOpen } from "lucide-react";

export default function AuthCard({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background */}

      <div className="absolute w-[500px] h-[500px] bg-violet-700/20 blur-[140px] rounded-full -top-40 -left-40" />

      <div className="absolute w-[400px] h-[400px] bg-blue-600/20 blur-[140px] rounded-full bottom-0 right-0" />

      {/* Card */}

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-10 shadow-2xl">
          {/* Logo */}

          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-violet-600 flex items-center justify-center">
              <BookOpen size={34} className="text-white" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-center text-white">{title}</h1>

          <p className="text-center text-slate-400 mt-3">{subtitle}</p>

          <div className="mt-10">{children}</div>
        </div>
      </div>
    </div>
  );
}
