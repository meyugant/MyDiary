import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../public/styles/Register.css";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    diary_username: "",
    password: "",
    display_name: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/register`,
        form,
        {
          withCredentials: true,
        }
      );
      console.log(res);

      window.location.href = "/MyDiary/home";
    } catch (err) {
      alert("User already exists!!");
      console.log(err.response?.data);
    }
  };

  const handleGoogleSignup = () => {
    window.open(`${import.meta.env.VITE_API_URL}/auth/google`, "_self");
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h1 className="logo">
          My<span>Diary</span>
        </h1>
        <h2>Create Your Account</h2>
        <input
          placeholder="Email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          placeholder="Diary Username"
          required
          value={form.diary_username}
          onChange={(e) => setForm({ ...form, diary_username: e.target.value })}
        />
        <input
          placeholder="Display Name"
          required
          value={form.display_name}
          onChange={(e) => setForm({ ...form, display_name: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit">Register</button>

        <div className="divider">OR</div>

        <button
          type="button"
          className="google-login-button"
          onClick={handleGoogleSignup}>
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google Logo"
            style={{ width: "20px", marginRight: "10px" }}
          />
          Continue with Google
        </button>

        <p className="switch-form">
          Already have an account? <Link to="/MyDiary/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
