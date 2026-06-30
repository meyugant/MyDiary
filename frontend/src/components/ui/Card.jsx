export default function Card({ children, isDark }) {
  return (
    <div
      className={`rounded-3xl p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
        isDark ? "bg-slate-800 border border-slate-700" : "bg-white shadow-lg"
      }`}
    >
      {children}
    </div>
  );
}
