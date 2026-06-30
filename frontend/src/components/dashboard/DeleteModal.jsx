export default function DeleteModal({ open, title, onCancel, onConfirm }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 w-[420px]">
        <h2 className="text-2xl font-bold text-white">Delete "{title}"?</h2>

        <p className="text-slate-400 mt-4">This action cannot be undone.</p>

        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={onCancel}
            className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
