import "../../public/styles/Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // ✅ Don't forget this

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/login`,
        form,
        {
          withCredentials: true,
        }
      );
      alert("Login successful!");
      window.location.href = "/MyDiary/home";
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  const handleGoogleLogin = () => {
    window.open(`${import.meta.env.VITE_API_URL}/auth/google`, "_self");
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Welcome Back to MyDiary</h2>
        <input
          type="text"
          placeholder="Username" // ✅ Changed from Email to Username
          required
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit">Login</button>
        <div className="divider">OR</div>

        <button
          type="button"
          className="google-login-button"
          onClick={handleGoogleLogin}>
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google Logo"
            style={{ width: "20px", marginRight: "10px" }}
          />
          Continue with Google
        </button>
        <p className="switch-form">
          Don't have an account? <Link to="/MyDiary/register">Register</Link>
        </p>
        <p className="forgot-details">
          <Link to="/MyDiary/update">Forgot password or Username ?</Link>
        </p>
      </form>
    </div>
  );
}
