import { ArrowRight } from "lucide-react";

export default function AuthButton({ children, loading }) {
  return (
    <button
      disabled={loading}
      className="
      w-full
      py-4
      rounded-xl
      bg-violet-600
      hover:bg-violet-700
      transition
      text-white
      font-semibold
      flex
      justify-center
      items-center
      gap-2
      disabled:opacity-70
      "
    >
      {loading ? (
        "Please wait..."
      ) : (
        <>
          {children}

          {/* <ArrowRight size={18} /> */}
        </>
      )}
    </button>
  );
}
