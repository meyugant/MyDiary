import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is MyDiary free?",
    a: "Yes. You can start journaling for free. Premium features will be introduced later.",
  },
  {
    q: "Can I export my diary?",
    a: "Yes. You'll be able to export your entries as PDF and other formats.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. Your entries are stored securely and future updates will include end-to-end encryption.",
  },
  {
    q: "Can I use MyDiary on my phone?",
    a: "Absolutely. The application is fully responsive and will soon be available as a Progressive Web App.",
  },
];

export default function FAQ({ isDark }) {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-32">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center">
          <h2
            className={`text-5xl font-bold ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-16 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden ${
                isDark
                  ? "bg-slate-900 border border-slate-800"
                  : "bg-white shadow-lg"
              }`}
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full px-8 py-6 flex justify-between items-center"
              >
                <span
                  className={`font-semibold ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  {faq.q}
                </span>

                <ChevronDown
                  className={`transition-transform ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div
                  className={`px-8 pb-6 ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
