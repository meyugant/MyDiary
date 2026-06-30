import { UserPlus, Pen, BookOpenCheck } from "lucide-react";

const steps = [
  {
    icon: <UserPlus size={40} />,
    title: "Create an account",
    desc: "Sign up in less than a minute.",
  },
  {
    icon: <Pen size={40} />,
    title: "Write daily",
    desc: "Capture your thoughts and emotions.",
  },
  {
    icon: <BookOpenCheck size={40} />,
    title: "Reflect anytime",
    desc: "Read your memories whenever you want.",
  },
];

export default function HowItWorks({ isDark }) {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center">
          <h2
            className={`text-5xl font-bold ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            How it works
          </h2>

          <p
            className={`mt-6 text-lg ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Three simple steps to build your journaling habit.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mt-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`rounded-3xl p-10 text-center ${
                isDark
                  ? "bg-slate-900 border border-slate-800"
                  : "bg-white shadow-xl"
              }`}
            >
              <div className="text-violet-500 flex justify-center mb-6">
                {step.icon}
              </div>

              <div className="text-violet-500 font-black text-5xl mb-6">
                0{index + 1}
              </div>

              <h3
                className={`text-2xl font-bold ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                {step.title}
              </h3>

              <p
                className={`mt-5 leading-8 ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
