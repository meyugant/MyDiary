import { Calendar, Save } from "lucide-react";

export default function JournalEditor({
  title,
  setTitle,
  text,
  setText,
  date,
  addNote,
}) {
  const handleSave = () => {
    addNote({
      sub: title,
      cont: text,
      dt: date,
    });

    setTitle("");
    setText("");
  };

  return (
    <section className="mb-10 md:mb-12">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 md:p-8 shadow-xl">
        {/* Header */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Today's Journal
            </h2>

            <p className="text-sm md:text-base text-slate-400 mt-2">
              Write down everything on your mind.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm md:text-base text-slate-400">
            <Calendar size={18} />
            {new Date().toLocaleDateString()}
          </div>
        </div>

        {/* Body */}

        <div className="space-y-5">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Entry title..."
            className="
              w-full
              bg-slate-800
              border
              border-slate-700
              rounded-xl
              px-5
              py-4
              text-white
              placeholder:text-slate-500
              focus:outline-none
              focus:border-violet-500
              transition
            "
          />

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={10}
            placeholder="Write your thoughts..."
            className="
              w-full
              min-h-[220px]
              md:min-h-[300px]
              bg-slate-800
              border
              border-slate-700
              rounded-xl
              px-5
              py-4
              text-white
              placeholder:text-slate-500
              resize-none
              focus:outline-none
              focus:border-violet-500
              transition
            "
          />

          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="
                w-full
                sm:w-auto
                flex
                items-center
                justify-center
                gap-2
                bg-gradient-to-r
                from-violet-600
                to-purple-600
                px-8
                py-3
                rounded-xl
                text-white
                font-semibold
                hover:scale-105
                transition
              "
            >
              <Save size={18} />
              Save Entry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
