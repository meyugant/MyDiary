import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
import Register from "./components/Register";
import UpdateDetails from "./components/Update";
import IntroPage from "./components/MyDiary";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<App />} />
      <Route path="/update" element={<UpdateDetails />} />
      <Route path="/" element={<IntroPage />} />
    </Routes>
  </BrowserRouter>
);
