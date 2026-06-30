import { ShieldCheck, Lock, Cloud, HeartPulse, Sparkles } from "lucide-react";

const items = [
  {
    icon: <ShieldCheck size={28} />,
    title: "100% Private",
    desc: "Only you can access your journal.",
  },
  {
    icon: <Lock size={28} />,
    title: "Encrypted",
    desc: "Your memories stay safe and secure.",
  },
  {
    icon: <Cloud size={28} />,
    title: "Cloud Sync",
    desc: "Write anywhere, continue everywhere.",
  },
  {
    icon: <HeartPulse size={28} />,
    title: "Mood Tracking",
    desc: "Discover patterns in your emotions.",
  },
  {
    icon: <Sparkles size={28} />,
    title: "AI Reflection",
    desc: "Coming soon.",
  },
];

export default function TrustBar({ isDark }) {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center">
          <span className="text-violet-500 font-semibold tracking-widest uppercase">
            Why MyDiary?
          </span>

          <h2
            className={`mt-5 text-5xl font-bold ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Built for people who love journaling.
          </h2>

          <p
            className={`mt-6 max-w-2xl mx-auto text-lg ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            More than a notes app. MyDiary helps you build a lifelong journaling
            habit while keeping every memory safe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-20">
          {items.map((item, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 transition duration-300 hover:-translate-y-3
                hover:shadow-violet-500/20
                hover:shadow-2xl
                cursor-pointer ${
                  isDark
                    ? "bg-slate-900 border border-slate-800"
                    : "bg-white border border-slate-200 shadow-lg"
                }`}
            >
              <div className="w-14 h-14 rounded-2xl bg-violet-600/20 flex items-center justify-center text-violet-500 mb-6">
                {item.icon}
              </div>

              <h3
                className={`font-bold text-xl ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                {item.title}
              </h3>

              <p
                className={`mt-3 leading-7 text-sm ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
