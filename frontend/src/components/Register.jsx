import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

import { Mail, BookUser, User, Lock } from "lucide-react";

import AuthCard from "../components/auth/AuthCard";
import AuthInput from "../components/auth/AuthInput";
import AuthButton from "../components/auth/AuthButton";
import GoogleButton from "../components/auth/GoogleButton";

export default function Register() {
  const apiBaseUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    diary_username: "",
    display_name: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    try {
      await axios.post(`${apiBaseUrl}/register`, form, {
        withCredentials: true,
      });

      toast.success("Account created successfully!");

      navigate("/home");
    } catch (err) {
      toast.error(err.response?.data?.message || "User already exists.");
    } finally {
      setLoading(false);
    }
  }

  function handleGoogleSignup() {
    window.open(`${apiBaseUrl}/auth/google`, "_self");
  }

  return (
    <AuthCard title="Create Account" subtitle="Start preserving your memories.">
      <form onSubmit={handleSubmit} className="space-y-6">
        <AuthInput
          icon={Mail}
          label="Email"
          placeholder="Enter your email"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <AuthInput
          icon={BookUser}
          label="Diary Username"
          placeholder="Choose your diary username"
          value={form.diary_username}
          onChange={(e) =>
            setForm({
              ...form,
              diary_username: e.target.value,
            })
          }
        />

        <AuthInput
          icon={User}
          label="Display Name"
          placeholder="Your display name"
          value={form.display_name}
          onChange={(e) =>
            setForm({
              ...form,
              display_name: e.target.value,
            })
          }
        />

        <AuthInput
          icon={Lock}
          type="password"
          label="Password"
          placeholder="Create a password"
          value={form.password}
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
        />

        <AuthButton loading={loading}>Create Account</AuthButton>

        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-slate-700" />
          <span className="text-slate-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-slate-700" />
        </div>

        <GoogleButton onClick={handleGoogleSignup} />

        <p className="text-center text-slate-400">
          Already have an account?{" "}
          <Link to="/login" className="text-violet-400 hover:text-violet-300">
            Login
          </Link>
        </p>
      </form>
    </AuthCard>
  );
}
