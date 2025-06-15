import React from "react";
// import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import "../../public/styles/MyDiary.css";

function IntroPage() {
  const navigate = useNavigate();

  return (
    <div className="intro-container">
      {/* Top Navigation Bar */}
      <div className="intro-navbar">
        <h1 className="logo">
          My<span>Diary</span>
        </h1>
        <div className="intro-auth-buttons">
          <button onClick={() => navigate("/MyDiary/login")}>Login</button>
          <button onClick={() => navigate("/MyDiary/register")}>
            Register
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="intro-hero">
        <div className="intro-text">
          <h1>Welcome to MyDiary</h1>
          <p>Your personal and private digital sanctuary.</p>
          <p>
            MyDiary is a safe place to pen down your thoughts, reflect on your
            emotions, and document your journey. Whether you're happy, lost,
            excited, or confused—this is your space.
          </p>
        </div>
        <img
          src="/MyDiary/images/MyDiary-main.jpg"
          alt="Writing in diary"
          className="intro-image"
        />
      </div>

      {/* Features Section */}
      <div className="intro-features">
        <div className="feature">
          <img src="/MyDiary/images/safe-secure.jpg" alt="Safe thoughts" />
          <h3>Private & Secure</h3>
          <p>Everything you write stays with you. Your diary, your rules.</p>
        </div>
        <div className="feature">
          <img
            src="/MyDiary/images/self-reflection.jpg"
            alt="Self reflection"
          />
          <h3>Self Reflection</h3>
          <p>Keep track of your emotions and grow through your experiences.</p>
        </div>
        <div className="feature">
          <img
            src="/MyDiary/images/beautiful-ui.webp"
            alt="Consistent journaling"
          />
          <h3>Consistency</h3>
          <p>Beautiful UI to motivate you to write every single day.</p>
        </div>
      </div>

      <footer className="intro-footer">
        © 2025 MyDiary | Made with ❤️ for your stories.
      </footer>
    </div>
  );
}

export default IntroPage;
