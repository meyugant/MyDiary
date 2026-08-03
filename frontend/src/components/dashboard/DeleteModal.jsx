import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function DeleteModal({ open, onClose, onConfirm }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Background */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.65 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50"
            onClick={onClose}
          />

          {/* Modal */}

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 flex justify-center items-center z-50 px-5"
          >
            <div className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-md p-8 shadow-2xl">
              <div className="flex justify-center">
                <div className="bg-red-600/20 p-4 rounded-full">
                  <AlertTriangle size={34} className="text-red-500" />
                </div>
              </div>

              <h2 className="mt-6 text-2xl font-bold text-center text-white">
                Delete Entry?
              </h2>

              <p className="mt-4 text-slate-400 text-center leading-7">
                This entry will be permanently deleted.
                <br />
                This action cannot be undone.
              </p>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={onClose}
                  className="flex-1 bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-xl transition"
                >
                  Cancel
                </button>

                <button
                  onClick={onConfirm}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
