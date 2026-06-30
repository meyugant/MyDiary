import { ShieldCheck } from "lucide-react";

export default function Privacy({ isDark }) {
  return (
    <section className="py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div
          className={`rounded-[40px] p-16 text-center ${
            isDark
              ? "bg-slate-800 border border-slate-700"
              : "bg-white shadow-xl"
          }`}
        >
          <ShieldCheck size={60} className="mx-auto text-violet-500" />

          <h2
            className={`mt-8 text-4xl font-bold ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Privacy Comes First
          </h2>

          <p
            className={`mt-8 text-xl leading-9 ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Your journal belongs to you. We never read your entries, sell your
            data, or compromise your privacy.
          </p>
        </div>
      </div>
    </section>
  );
}
