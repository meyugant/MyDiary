import { FileText, Sigma, Heart } from "lucide-react";

export default function WritingAnalytics({ entries }) {
  const totalWords = entries.reduce(
    (sum, entry) => sum + entry.cont.trim().split(/\s+/).length,
    0,
  );

  const averageWords =
    entries.length > 0 ? Math.round(totalWords / entries.length) : 0;

  const liked = entries.filter((e) => e.liked).length;

  const favoriteRate =
    entries.length > 0 ? Math.round((liked / entries.length) * 100) : 0;

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-white mb-8">Writing Analytics</h2>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-orange-500 transition">
          <Flame size={34} className="text-orange-500" />

          <h3 className="text-4xl text-white mt-5">🔥</h3>

          <p className="text-slate-400 mt-2">Streak</p>
        </div> */}

        <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-violet-500 transition">
          <FileText size={34} className="text-violet-500" />

          <h3 className="text-4xl text-white mt-5">{totalWords}</h3>

          <p className="text-slate-400 mt-2">Total Words</p>
        </div>

        <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-blue-500 transition">
          <Sigma size={34} className="text-blue-500" />

          <h3 className="text-4xl text-white mt-5">{averageWords}</h3>

          <p className="text-slate-400 mt-2">Avg Words</p>
        </div>

        <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-pink-500 transition">
          <Heart size={34} className="text-pink-500" />

          <h3 className="text-4xl text-white mt-5">{favoriteRate}%</h3>

          <p className="text-slate-400 mt-2">Favorite Rate</p>
        </div>
      </div>
    </section>
  );
}
