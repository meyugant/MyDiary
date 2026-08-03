import {
  ArrowLeft,
  CalendarDays,
  Hash,
  Heart,
  Trash2,
  Clock,
  FileText,
  Smile,
} from "lucide-react";

import DeleteModal from "./DeleteModal";
import { useState } from "react";

export default function ViewEntryPage({
  entry,
  goBack,
  toggleLike,
  deleteNote,
}) {
  const wordCount = entry.cont.trim().split(/\s+/).filter(Boolean).length;
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const readingTime = Math.max(1, Math.ceil(wordCount / 200));
  return (
    <div className="min-h-screen bg-slate-950 px-4 sm:px-6 lg:px-8 py-6 md:py-12 flex justify-center">
      <div className="w-full max-w-4xl">
        {/* Back */}

        <button
          onClick={goBack}
          className="flex items-center gap-2 text-violet-400 hover:text-violet-300 mb-8 transition"
        >
          <ArrowLeft size={20} />
          Back to Dashboard
        </button>

        {/* Card */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10">
          {/* Top */}

          <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
            <div className="flex-1">
              <div className="flex flex-wrap gap-6 text-slate-400 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <CalendarDays size={18} />

                  {new Date(entry.dt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </div>

                <div className="flex items-center gap-2">
                  <Hash size={18} />
                  Entry {entry.entry_no}
                </div>

                <div className="flex items-center gap-2">
                  {/* <Smile size={18} /> */}
                  {entry.mood}
                </div>

                <div className="flex items-center gap-2">
                  <FileText size={18} />
                  {wordCount} words
                </div>

                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  {readingTime} min read
                </div>
              </div>

              <h1 className="mt-6 text-3xl md:text-5xl font-bold text-white break-words leading-tight">
                {entry.sub}
              </h1>
            </div>

            <button
              onClick={() => toggleLike(entry.id)}
              className="
                self-start
                bg-slate-800
                p-4
                rounded-2xl
                hover:bg-pink-600
                transition
              "
            >
              <Heart
                size={22}
                fill={entry.liked ? "currentColor" : "none"}
                className={entry.liked ? "text-pink-500" : "text-white"}
              />
            </button>
          </div>

          {/* Divider */}

          <div className="h-px bg-slate-800 my-8 md:my-10" />

          {/* Content */}

          <article
            className="
              whitespace-pre-wrap
              break-words
              text-slate-300
              text-lg
              md:text-[22px]
              leading-9
              tracking-wide
              font-light
            "
          >
            <span className="first-letter:text-5xl first-letter:font-bold first-letter:text-violet-400">
              {entry.cont}
            </span>
          </article>

          {/* Divider */}

          <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent mt-10" />

          {/* Footer */}

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 pt-8">
            <p className="text-slate-500 italic text-sm md:text-base">
              Preserved forever with ❤️ using MyDiary.
            </p>

            <button
              onClick={() => setShowDeleteModal(true)}
              className="
                flex
                justify-center
                items-center
                gap-2
                bg-red-600
                hover:bg-red-700
                px-6
                py-3
                rounded-xl
                text-white
                transition
                w-full
                sm:w-auto
              "
            >
              <Trash2 size={18} />
              Delete Entry
            </button>
          </div>
        </div>
      </div>
      <DeleteModal
        open={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={() => {
          deleteNote(entry.id);
          goBack();
          setShowDeleteModal(false);
        }}
      />
    </div>
  );
}
