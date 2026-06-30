import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

import { Mail, User, Lock } from "lucide-react";

import AuthCard from "../components/auth/AuthCard";
import AuthInput from "../components/auth/AuthInput";
import AuthButton from "../components/auth/AuthButton";

export default function UpdateDetails() {
  const apiBaseUrl = import.meta.env.VITE_API_URL;

  const [mode, setMode] = useState("username");
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [value, setValue] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    const endpoint =
      mode === "username" ? "recover-username" : "recover-password";

    try {
      await axios.post(`${apiBaseUrl}/update/${endpoint}`, {
        email,
        value,
      });

      toast.success(
        mode === "username"
          ? "Username updated successfully!"
          : "Password updated successfully!",
      );

      window.location.href = "/login";
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthCard
      title="Recover Account"
      subtitle="Update your username or password."
    >
      <div className="flex rounded-xl overflow-hidden border border-slate-700 mb-8">
        <button
          type="button"
          onClick={() => {
            setMode("username");
            setValue("");
          }}
          className={`flex-1 py-3 transition ${
            mode === "username"
              ? "bg-violet-600 text-white"
              : "bg-slate-800 text-slate-400"
          }`}
        >
          Username
        </button>

        <button
          type="button"
          onClick={() => {
            setMode("password");
            setValue("");
          }}
          className={`flex-1 py-3 transition ${
            mode === "password"
              ? "bg-violet-600 text-white"
              : "bg-slate-800 text-slate-400"
          }`}
        >
          Password
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <AuthInput
          icon={Mail}
          label="Registered Email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {mode === "username" ? (
          <AuthInput
            icon={User}
            label="New Username"
            placeholder="Enter new username"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        ) : (
          <AuthInput
            icon={Lock}
            type="password"
            label="New Password"
            placeholder="Enter new password"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        )}

        <AuthButton loading={loading}>Update</AuthButton>

        <p className="text-center text-slate-400">
          Remember your credentials?{" "}
          <Link to="/login" className="text-violet-400 hover:text-violet-300">
            Login
          </Link>
        </p>
      </form>
    </AuthCard>
  );
}
