import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { MessageCircle, Send } from "lucide-react";

export default function Feedback({ isDark }) {
  const apiBaseUrl = import.meta.env.VITE_API_URL;

  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "Suggestion",
    message: "",
  });

  console.log(isDark);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.message.trim()) {
      toast.error("Please enter your feedback.");
      return;
    }

    try {
      await axios.post(`${apiBaseUrl}/feedback`, form);

      toast.success("Thank you for your feedback!");

      setForm({
        name: "",
        email: "",
        type: "Suggestion",
        message: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("Unable to submit feedback.");
    }
  }

  return (
    <section
      id="feedback"
      className={`py-24 px-4 sm:px-6 lg:px-8 ${
        isDark ? "bg-slate-950" : "bg-slate-50"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}

        <div className="text-center mb-14">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-violet-600 mb-6">
            <MessageCircle className="text-white" size={30} />
          </div>

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Help Shape MyDiary 💜
          </h2>

          <p
            className={`mt-5 max-w-2xl mx-auto text-base sm:text-lg ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            We're continuously improving MyDiary. Share your ideas, report bugs
            or simply tell us what you think.
          </p>
        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className={`rounded-3xl border p-6 sm:p-8 md:p-10 transition-all ${
            isDark
              ? "bg-slate-900 border-slate-800 shadow-2xl"
              : "bg-white border-slate-200 shadow-xl"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Your Name (Optional)"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={`rounded-xl px-5 py-4 outline-none border transition ${
                isDark
                  ? "bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-violet-500"
                  : "bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-500 focus:border-violet-500"
              }`}
            />

            <input
              type="email"
              placeholder="Email (Optional)"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={`rounded-xl px-5 py-4 outline-none border transition ${
                isDark
                  ? "bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-violet-500"
                  : "bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-500 focus:border-violet-500"
              }`}
            />
          </div>

          <select
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            className={`mt-5 w-full rounded-xl px-5 py-4 outline-none border transition ${
              isDark
                ? "bg-slate-800 border-slate-700 text-white focus:border-violet-500"
                : "bg-slate-50 border-slate-300 text-slate-900 focus:border-violet-500"
            }`}
          >
            <option>Suggestion</option>
            <option>Bug Report</option>
            <option>General Feedback</option>
          </select>

          <textarea
            rows={6}
            placeholder="Tell us what you think..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={`mt-5 w-full rounded-xl px-5 py-4 outline-none border resize-none transition ${
              isDark
                ? "bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-violet-500"
                : "bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-500 focus:border-violet-500"
            }`}
          />

          <button
            type="submit"
            className="mt-6 w-full bg-violet-600 hover:bg-violet-700 text-white rounded-xl py-4 font-semibold flex items-center justify-center gap-3 transition"
          >
            <Send size={18} />
            Submit Feedback
          </button>

          <p
            className={`mt-5 text-center text-sm ${
              isDark ? "text-slate-500" : "text-slate-500"
            }`}
          >
            Your feedback helps us improve MyDiary. We never share your
            information.
          </p>
        </form>
      </div>
    </section>
  );
}
