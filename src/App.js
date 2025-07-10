import React, { useState } from "react";
import { companies } from "./data/companies";
import CompanyCard from "./components/CompanyCard";

// --------- Theme Colors ---------
const themes = {
  dark: {
    background: "linear-gradient(135deg, #11131a 0%, #23243b 100%)",
    orb1: "radial-gradient(circle at 50% 50%, #FFD70033 0%, transparent 78%)",
    orb2: "radial-gradient(circle at 60% 40%, #FFC40044 10%, transparent 80%)",
    orb3: "radial-gradient(circle at 80% 90%, #FFEA70 15%, transparent 90%)",
    headerText: "linear-gradient(95deg,#fffbe6 10%,#ffd700 48%,#ffb200 80%)",
    subText: "#ffe366",
    mainText: "#fffde2",
    footerBg: "rgba(16,18,27,0.97)",
    cardBg: "linear-gradient(120deg,rgba(16,18,27,0.95) 78%,#ffde8a17 100%)"
  },
  light: {
    background: "linear-gradient(135deg, #faf9f6 0%, #fffbe6 100%)",
    orb1: "radial-gradient(circle at 50% 50%, #ffe37e2e 0%, transparent 78%)",
    orb2: "radial-gradient(circle at 60% 40%, #ffd70024 10%, transparent 80%)",
    orb3: "radial-gradient(circle at 80% 90%, #ffe588 15%, transparent 90%)",
    headerText: "linear-gradient(95deg,#f5ce83 10%,#d7b000 48%,#ffae1a 80%)",
    subText: "#bfa400",
    mainText: "#352900",
    footerBg: "rgba(255,251,214,0.97)",
    cardBg: "linear-gradient(120deg,#fffde2 88%,#ffe58a12 100%)"
  }
};

export default function App() {
  const [theme, setTheme] = useState("dark");
  const t = themes[theme];

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: t.background,
        position: "relative",
        fontFamily: "'Orbitron', 'Inter', Arial, sans-serif",
        overflowX: "hidden",
        transition: "background 0.33s"
      }}
    >
      {/* Theme Toggle Button */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        style={{
          position: "fixed",
          top: 18, right: 22, zIndex: 1201,
          background: theme === "dark"
            ? "rgba(24, 22, 34, 0.87)"
            : "rgba(255,255,255,0.84)",
          color: theme === "dark" ? "#ffd700" : "#a07900",
          border: `2.5px solid ${theme === "dark" ? "#ffd700" : "#ffe366"}`,
          borderRadius: 30,
          padding: "8px 28px",
          fontSize: 18,
          fontWeight: 700,
          cursor: "pointer",
          boxShadow: "0 6px 22px 0 #00000022, 0 2px 6px 0 #ffd70022",
          backdropFilter: "blur(8px)",
          outline: "none",
          transition: "all 0.22s cubic-bezier(.39,.6,.6,1.2)",
          userSelect: "none"
        }}>
        {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* Glowing Orbs */}
      <div style={{
        position: "absolute", left: "-12vw", top: "-10vw", width: 350, height: 250,
        borderRadius: "50%",
        background: t.orb1,
        filter: "blur(36px)", zIndex: 0, pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute", right: "-8vw", top: "14vw", width: 210, height: 180,
        borderRadius: "50%",
        background: t.orb2,
        filter: "blur(30px)", zIndex: 0, pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute", left: "55vw", bottom: "-7vw", width: 260, height: 140,
        borderRadius: "50%",
        background: t.orb3,
        filter: "blur(24px)", zIndex: 0, pointerEvents: "none"
      }} />

      {/* HEADER */}
      <header style={{
        padding: "60px 0 32px 0",
        textAlign: "center",
        zIndex: 2,
        position: "relative"
      }}>
        <div style={{
          fontSize: "clamp(2.5rem, 6vw, 4rem)",
          fontWeight: 900,
          background: t.headerText,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "-2.1px",
          textShadow: "0 6px 34px #ffd70033, 0 1px 0 #fff",
          // filter: "drop-shadow(0 1px 10px #ffb20055)"
        }}>
          React Interview Coding Questions by Company
        </div>
        <div style={{
          fontSize: "clamp(1.09rem, 2vw, 1.31rem)",
          color: t.subText,
          fontWeight: 600,
          marginTop: 13,
          letterSpacing: "0.01em",
          textShadow: "0 2px 14px #ffd70022"
        }}>
          100+ real-world React coding tasks from actual company interviews.
        </div>
      </header>

      {/* GRID */}
      <main
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "36px",
          padding: "0 6vw 80px 6vw",
          maxWidth: 1700,
          margin: "0 auto",
          zIndex: 2,
          position: "relative"
        }}
      >
        {companies.map((company, i) => (
          <CompanyCard key={company.name + i} company={company} theme={theme} />
        ))}
      </main>

      {/* Fixed Footer */}
      <footer style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100vw",
        textAlign: "center",
        padding: "20px 0 16px",
        background: t.footerBg,
        fontSize: 18,
        color: t.subText,
        letterSpacing: "0.05em",
        fontWeight: 700,
        borderTop: "1.5px solid #ffd70044",
        zIndex: 999,
        boxShadow: "0 0px 22px #ffc40009",
        backdropFilter: "blur(2.5px)",
        transition: "background 0.28s,color 0.19s"
      }}>
        <span style={{ color: "#ffd700", fontWeight: 900 }}>© {new Date().getFullYear()}</span>
        {" | "}
        <span style={{ color: t.subText, fontWeight: 800 }}>React Interview UI</span>
        {" | "}
        <span style={{ color: t.mainText, fontWeight: 900 }}>Akash Kumar</span>
      </footer>
    </div>
  );
}
