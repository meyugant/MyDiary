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
      {/* Label */}

      <label className="block text-sm font-medium text-slate-300">
        {label}
      </label>

      {/* Input */}

      <div
        className="
          mt-1.5
          h-12
          flex
          items-center
          bg-slate-800/80
          rounded-xl
          px-4
          border
          border-slate-700
          transition-all
          duration-200
          focus-within:border-violet-500
          focus-within:ring-2
          focus-within:ring-violet-500/15
        "
      >
        <Icon
          size={18}
          strokeWidth={1.8}
          className="
            shrink-0
            text-slate-400
          "
        />

        <input
          type={isPassword ? (showPassword ? "text" : "password") : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
          className="
            ml-3
            bg-transparent
            outline-none
            text-white
            text-sm
            w-full
            placeholder:text-slate-500
          "
        />

        {/* Password visibility */}

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="
              shrink-0
              ml-2
              p-1
              rounded-lg
              text-slate-400
              hover:text-slate-200
              hover:bg-slate-700/50
              transition-colors
            "
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
    </div>
  );
}
