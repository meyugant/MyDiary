import { Calendar, ChevronLeft, PenLine, Save } from "lucide-react";

export default function WriteEntryPage({
  title,
  setTitle,
  text,
  setText,
  date,
  addNote,
  mood,
  setMood,
  setActivePage,
}) {
  const moods = [
    "😊 Happy",
    "😌 Calm",
    "😎 Motivated",
    "🤩 Excited",
    "😢 Sad",
    "😡 Angry",
    "😴 Tired",
    "😰 Anxious",
  ];

  const handleSave = () => {
    addNote({
      sub: title,
      cont: text,
      dt: date,
      mood: mood,
    });

    setTitle("");
    setText("");

    setActivePage("home");
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      {/* Back */}

      <button
        onClick={() => setActivePage("home")}
        className="
          group
          flex
          items-center
          gap-2
          text-sm
          text-slate-400
          hover:text-white
          transition-colors
          mb-6
        "
      >
        <ChevronLeft
          size={18}
          className="transition-transform duration-200 group-hover:-translate-x-1"
        />
        Back to Dashboard
      </button>

      {/* Main Card */}

      <section className="relative overflow-hidden bg-slate-900/90 border border-slate-800 rounded-3xl shadow-2xl">
        {/* Background glow */}

        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-violet-600/10 blur-3xl" />

        <div className="absolute -bottom-40 left-1/3 w-96 h-96 rounded-full bg-blue-600/5 blur-3xl" />

        <div className="relative p-6 md:p-8 lg:p-10">
          {/* Header */}

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
            <div className="flex items-start gap-4">
              <div
                className="
                  w-14
                  h-14
                  shrink-0
                  rounded-2xl
                  bg-violet-600/15
                  border
                  border-violet-500/30
                  flex
                  items-center
                  justify-center
                  shadow-lg
                  shadow-violet-600/10
                "
              >
                <PenLine size={27} className="text-violet-400" />
              </div>

              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Write Today's Entry
                </h1>

                <p className="text-slate-400 mt-2 text-sm md:text-base">
                  A safe space for your thoughts, feelings and memories.
                </p>
              </div>
            </div>

            {/* Date */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                w-fit
                px-4
                py-2.5
                rounded-xl
                bg-slate-800/70
                border
                border-slate-700
                text-sm
                text-slate-400
              "
            >
              <Calendar size={17} />

              {new Date(date || new Date()).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </div>
          </div>

          {/* Mood */}

          <div
            className="
              bg-slate-950/40
              border
              border-slate-800
              rounded-2xl
              p-5
              md:p-6
              mb-7
            "
          >
            <p className="text-sm font-medium text-slate-200 mb-4">
              How are you feeling today?
            </p>

            <div className="flex flex-wrap gap-2.5">
              {moods.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setMood(item)}
                  className={`
                    px-4
                    py-2.5
                    rounded-xl
                    text-sm
                    border
                    transition-all
                    duration-200
                    ${
                      mood === item
                        ? "bg-gradient-to-r from-violet-600 to-purple-600 border-violet-500 text-white shadow-lg shadow-violet-600/20"
                        : "bg-slate-800/80 border-slate-700 text-slate-400 hover:text-white hover:bg-slate-700 hover:border-slate-600"
                    }
                  `}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Title */}

          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-300 mb-2.5">
              Give your entry a title
            </label>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Give your entry a title..."
              className="
                w-full
                h-14
                px-5
                rounded-xl
                bg-slate-800/70
                border
                border-slate-700
                text-white
                placeholder:text-slate-500
                outline-none
                focus:border-violet-500/60
                focus:ring-2
                focus:ring-violet-500/10
                transition-all
              "
            />
          </div>

          {/* Writing Area */}

          <div className="mb-7">
            <label className="block text-sm font-medium text-slate-300 mb-2.5">
              Start writing your thoughts
            </label>

            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Start writing your thoughts..."
              rows={16}
              className="
                w-full
                min-h-[420px]
                md:min-h-[500px]
                px-5
                py-5
                rounded-2xl
                bg-slate-800/50
                border
                border-slate-700
                text-white
                placeholder:text-slate-500
                outline-none
                resize-y
                leading-7
                focus:border-violet-500/60
                focus:ring-2
                focus:ring-violet-500/10
                transition-all
              "
            />
          </div>

          {/* Footer */}

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-xs md:text-sm text-slate-500">
              Your thoughts are yours. Write freely.
            </p>

            <button
              onClick={handleSave}
              className="
                inline-flex
                items-center
                justify-center
                gap-2.5
                px-6
                py-3.5
                rounded-xl
                bg-gradient-to-r
                from-violet-600
                to-purple-600
                text-white
                text-sm
                font-semibold
                shadow-lg
                shadow-violet-600/20
                hover:from-violet-500
                hover:to-purple-500
                hover:-translate-y-0.5
                transition-all
                duration-200
              "
            >
              <Save size={18} />
              Save Entry
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
