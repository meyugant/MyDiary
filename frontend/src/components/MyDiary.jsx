import { useEffect, useState } from "react";
import Navbar from "./landing/Navbar";
import Hero from "./landing/Hero";
import TrustBar from "./landing/TrustBar";
import Features from "./landing/Features";
import HowItWorks from "./landing/HowItWorks";
import Privacy from "./landing/Privacy";
import CTA from "./landing/CTA";
import Footer from "./landing/Footer";
// import Testimonials from "./landing/Testimonials";
import FAQ from "./landing/FAQ";
import Feedback from "./landing/Feedback";

export default function MyDiary() {
  // Dark mode state
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Save theme
  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDark ? "bg-slate-950" : "bg-slate-50"
      }`}
    >
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <main className="pt-20">
        <Hero isDark={isDark} />

        <TrustBar isDark={isDark} />

        <Features isDark={isDark} />

        <HowItWorks isDark={isDark} />

        {/* <Testimonials isDark={isDark} /> */}
        <Feedback isDark={isDark} />

        <FAQ isDark={isDark} />

        <Privacy isDark={isDark} />

        <CTA isDark={isDark} />
      </main>

      <Footer isDark={isDark} />
    </div>
  );
}
