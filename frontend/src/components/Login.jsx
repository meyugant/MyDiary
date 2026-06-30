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
      <form onSubmit={handleSubmit} className="space-y-6">
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

        <div className="flex justify-end">
          <Link
            to="/update"
            className="text-violet-400 hover:text-violet-300 text-sm"
          >
            Recover Account
          </Link>
        </div>

        <AuthButton loading={loading}>Login</AuthButton>

        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-slate-700" />
          <span className="text-slate-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-slate-700" />
        </div>

        <GoogleButton onClick={handleGoogleLogin} />

        <p className="text-center text-slate-400">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-violet-400 hover:text-violet-300"
          >
            Register
          </Link>
        </p>
      </form>
    </AuthCard>
  );
}
