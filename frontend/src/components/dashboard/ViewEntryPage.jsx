import {
  ArrowLeft,
  CalendarDays,
  Hash,
  Heart,
  Trash2,
  Clock,
  FileText,
  Sparkles,
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
    <div className="relative min-h-screen overflow-hidden bg-[#050b1d] px-4 py-6 sm:px-6 md:py-10 lg:px-10">
      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-[1200px]">
        {/* Back Button */}
        <button
          onClick={goBack}
          className="group mb-7 flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-violet-400 transition hover:bg-violet-500/10 hover:text-violet-300"
        >
          <ArrowLeft
            size={19}
            className="transition-transform duration-200 group-hover:-translate-x-1"
          />
          Back to Dashboard
        </button>

        {/* Main Entry Card */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/90 shadow-2xl shadow-black/20">
          {/* Top Glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-violet-600/10 blur-3xl" />

          <div className="relative p-6 sm:p-8 md:p-10 lg:p-12">
            {/* Entry Header */}
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="min-w-0 flex-1">
                {/* Metadata */}
                <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <CalendarDays size={17} className="text-violet-400" />

                    {new Date(entry.dt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </div>

                  <div className="flex items-center gap-2">
                    <Hash size={17} className="text-blue-400" />
                    Entry {entry.entry_no}
                  </div>

                  {entry.mood && (
                    <div className="flex items-center gap-2">
                      <Sparkles size={17} className="text-pink-400" />
                      {entry.mood}
                    </div>
                  )}

                  <div className="flex items-center gap-2">
                    <FileText size={17} className="text-emerald-400" />
                    {wordCount} words
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock size={17} className="text-cyan-400" />
                    {readingTime} min read
                  </div>
                </div>

                {/* Title */}
                <h1 className="mt-7 break-words text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                  {entry.sub}
                </h1>
              </div>

              {/* Like Button */}
              <button
                onClick={() => toggleLike(entry.id)}
                aria-label="Toggle favorite"
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border transition-all duration-200 ${
                  entry.liked
                    ? "border-pink-500/30 bg-pink-500/10 shadow-[0_0_25px_rgba(236,72,153,0.12)]"
                    : "border-slate-800 bg-slate-950/60 hover:border-pink-500/30 hover:bg-pink-500/10"
                }`}
              >
                <Heart
                  size={23}
                  fill={entry.liked ? "currentColor" : "none"}
                  className={
                    entry.liked
                      ? "text-pink-400"
                      : "text-slate-400 transition-colors hover:text-pink-400"
                  }
                />
              </button>
            </div>

            {/* Divider */}
            <div className="my-8 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent md:my-10" />

            {/* Entry Content */}
            <article className="break-words whitespace-pre-wrap text-base font-light leading-8 tracking-wide text-slate-300 sm:text-lg md:text-[21px] md:leading-9">
              <span className="first-letter:text-5xl first-letter:font-bold first-letter:text-violet-400 md:first-letter:text-6xl">
                {entry.cont}
              </span>
            </article>

            {/* Bottom Divider */}
            <div className="mt-10 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent md:mt-12" />

            {/* Footer */}
            <div className="flex flex-col gap-6 pt-7 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 text-sm italic text-slate-500">
                <Heart
                  size={15}
                  fill="currentColor"
                  className="text-pink-500/70"
                />
                Preserved forever using MyDiary.
              </div>

              {/* Delete */}
              <button
                onClick={() => setShowDeleteModal(true)}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-6 py-3 text-sm font-medium text-red-400 transition hover:border-red-500/30 hover:bg-red-500/15 hover:text-red-300 sm:w-auto"
              >
                <Trash2 size={18} />
                Delete Entry
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Modal */}
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
