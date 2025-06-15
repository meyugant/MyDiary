import React from "react";
import { useState } from "react";
import "../../public/styles/Update.css";
import axios from "axios";

function UpdateDetails() {
  const [mode, setMode] = useState("username");
  const [email, setEmail] = useState("");
  const [value, setValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send POST request to `/recover-username` or `/recover-password` based on mode
    const endpoint =
      mode === "username" ? "recover-username" : "recover-password";
    console.log(`POST ${endpoint}`, { email, value });

    try {
      // axios.post(endpoint, { email, value })...
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/update/${endpoint}`,
        {
          email,
          value,
        }
      );
      console.log(res.message);
      window.location.href = "/login";
    } catch (err) {
      console.error("Some error occured :", err);
    }
  };

  return (
    <>
      <div className="recover-box">
        <h2>Recover Account</h2>

        <div className="toggle-mode">
          <button
            className={mode === "username" ? "active" : ""}
            onClick={() => setMode("username")}>
            Update Username
          </button>
          <button
            className={mode === "password" ? "active" : ""}
            onClick={() => setMode("password")}>
            Update Password
          </button>
        </div>

        <form onSubmit={handleSubmit} className="recover-form">
          <input
            type="email"
            required
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {mode === "username" ? (
            <input
              type="text"
              required
              placeholder="Enter new username"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          ) : (
            <input
              type="password"
              required
              placeholder="Enter new password"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          )}
          <button type="submit">Submit</button>
        </form>
      </div>
      <footer>Copyright reserved @MyDiary</footer>
    </>
  );
}

export default UpdateDetails;
