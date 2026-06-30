import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
import Register from "./components/Register";
import UpdateDetails from "./components/Update";
import IntroPage from "./components/MyDiary";
import { Toaster } from "react-hot-toast";
import Privacy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        style: {
          background: "#0f172a",
          color: "#fff",
          border: "1px solid #334155",
        },
        success: {
          iconTheme: {
            primary: "#7c3aed",
            secondary: "#fff",
          },
        },
      }}
    />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<App />} />
      <Route path="/update" element={<UpdateDetails />} />
      <Route path="/" element={<IntroPage />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  </BrowserRouter>,
);
