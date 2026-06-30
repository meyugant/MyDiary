export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-600/30",

    secondary:
      "border border-slate-600 hover:border-violet-500 hover:bg-slate-800 text-white",

    white: "bg-white hover:bg-slate-100 text-slate-900",
  };

  return (
    <button
      {...props}
      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
