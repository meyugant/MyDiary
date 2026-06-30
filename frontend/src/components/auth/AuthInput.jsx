import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function AuthInput({
  icon: Icon,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div>
      <label className="text-slate-300 text-sm">{label}</label>

      <div className="mt-2 flex items-center bg-slate-800 rounded-xl px-4 py-3 border border-slate-700 focus-within:border-violet-500 transition">
        <Icon size={20} className="text-slate-400" />

        <input
          type={isPassword ? (showPassword ? "text" : "password") : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
          className="ml-3 bg-transparent outline-none text-white w-full"
        />

        {isPassword && (
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <EyeOff size={20} className="text-slate-400" />
            ) : (
              <Eye size={20} className="text-slate-400" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}
