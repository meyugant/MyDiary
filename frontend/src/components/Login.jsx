import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

import { User, Lock } from "lucide-react";

import AuthCard from "../components/auth/AuthCard";
import AuthInput from "../components/auth/AuthInput";
import AuthButton from "../components/auth/AuthButton";
import GoogleButton from "../components/auth/GoogleButton";

export default function Login() {
  const apiBaseUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    try {
      await axios.post(`${apiBaseUrl}/login`, form, {
        withCredentials: true,
      });

      toast.success("Welcome Back!");

      navigate("/home");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login Failed.");
    } finally {
      setLoading(false);
    }
  }

  function handleGoogleLogin() {
    window.open(`${apiBaseUrl}/auth/google`, "_self");
  }

  return (
    <AuthCard title="Welcome Back" subtitle="Your story continues here.">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Username */}

        <AuthInput
          icon={User}
          label="Username"
          placeholder="Enter username"
          value={form.username}
          onChange={(e) =>
            setForm({
              ...form,
              username: e.target.value,
            })
          }
        />

        {/* Password */}

        <AuthInput
          icon={Lock}
          type="password"
          label="Password"
          placeholder="Enter password"
          value={form.password}
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
        />

        {/* Recover */}

        <div className="flex justify-end -mt-1">
          <Link
            to="/update"
            className="
              text-violet-400
              hover:text-violet-300
              text-sm
              transition-colors
            "
          >
            Recover Account
          </Link>
        </div>

        {/* Login */}

        <AuthButton loading={loading}>Login</AuthButton>

        {/* Divider */}

        <div className="flex items-center gap-4 py-1">
          <div className="flex-1 h-px bg-slate-700" />

          <span className="text-slate-500 text-xs font-medium">OR</span>

          <div className="flex-1 h-px bg-slate-700" />
        </div>

        {/* Google */}

        <GoogleButton onClick={handleGoogleLogin} />

        {/* Register */}

        <p className="text-center text-sm text-slate-400 pt-1">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="
              text-violet-400
              hover:text-violet-300
              transition-colors
            "
          >
            Register
          </Link>
        </p>
      </form>
    </AuthCard>
  );
}
