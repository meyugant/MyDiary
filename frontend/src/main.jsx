import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
import Register from "./components/Register";
import UpdateDetails from "./components/Update";
import IntroPage from "./components/MyDiary";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/MyDiary/login" element={<Login />} />
      <Route path="/MyDiary/register" element={<Register />} />
      <Route path="/MyDiary/home" element={<App />} />
      <Route path="/MyDiary/update" element={<UpdateDetails />} />
      <Route path="/MyDiary" element={<IntroPage />} />
    </Routes>
  </BrowserRouter>
);
