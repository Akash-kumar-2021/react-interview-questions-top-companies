import React, { useState } from "react";
import { companies } from "./data/companies";
import CompanyCard from "./components/CompanyCard";
import CodeModal from "./components/CodeModal";

// --- Theme config ---
const themes = {
  dark: {
    background: "linear-gradient(135deg, #171820 0%, #191c26 100%)",
    headerText: "linear-gradient(95deg,#fffbe6 10%,#FFD700 48%,#ffb200 80%)",
    subText: "#FFD700",
    mainText: "#fffbe6",
    footerBg: "rgba(23,24,32,0.98)"
  },
  light: {
    background: "linear-gradient(135deg, #fffbe6 0%, #fdf4b1 100%)",
    headerText: "linear-gradient(95deg,#ffefb4 10%,#e3c341 50%,#FFD700 80%)",
    subText: "#bfa400",
    mainText: "#352900",
    footerBg: "rgba(255,251,214,0.98)"
  }
};

export default function App() {
  const [theme, setTheme] = useState("dark");
  const t = themes[theme];
  const [modal, setModal] = useState({ open: false, code: "", title: "" });
  const [hover, setHover] = useState(false);

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
            : "rgba(255,255,255,0.89)",
          color: theme === "dark" ? "#FFD700" : "#bfa400",
          border: `2.5px solid ${theme === "dark" ? "#FFD700" : "#ffe366"}`,
          borderRadius: 30,
          padding: "8px 28px",
          fontSize: 18,
          fontWeight: 700,
          cursor: "pointer",
          boxShadow: "0 6px 22px 0 #FFD70017, 0 2px 6px 0 #FFD70019",
          backdropFilter: "blur(8px)",
          outline: "none",
          transition: "all 0.22s cubic-bezier(.39,.6,.6,1.2)",
          userSelect: "none"
        }}>
        {theme === "dark" ? "☀️" : "🌙"}
      </button>

      {/* HEADER */}
      <header style={{
        padding: "60px 0 32px 0",
        textAlign: "center",
        zIndex: 2,
        position: "relative"
      }}>
        <div
      style={{
        fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
        fontWeight: 900,
        background: "linear-gradient(95deg,#e0e6ff 10%,#3fa9ff 70%,#002c57 120%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        letterSpacing: "-2.1px",
        textShadow: "0 6px 34px #aee1ff22, 0 1px 0 #fff",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        position: "relative"
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
       <span style={{ position: "relative", display: "inline-block" }}>
        {/* Animated blue-white glow */}
        <span
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%,-50%) scale(${hover ? 1.3 : 1})`,
            width: hover ? 52 : 38,
            height: hover ? 52 : 38,
            borderRadius: "50%",
            opacity: hover ? 0.7 : 0.16,
            // background: "radial-gradient(circle, #66bfff 60%, #e0f6ff 80%, transparent 100%)",
            filter: `blur(${hover ? 6 : 4}px)`,
            transition: "all 0.36s cubic-bezier(.42,0,.4,1.32)",
            zIndex: 0
          }}
        />
        <span
          role="img"
          aria-label="bulb"
          style={{
            position: "relative",
            zIndex: 1,
            transition: "all 0.3s cubic-bezier(.46,1.54,.45,1.21)",
            filter: hover ? "drop-shadow(0 0 4px #FFD700 )" : "none"
          }}
        >
          💡
        </span>
      </span>
      React Interview Coding Questions{" "}
      <span style={{ position: "relative", display: "inline-block" }}>
        {/* Animated blue-white glow */}
        <span
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%,-50%) scale(${hover ? 1.3 : 1})`,
            width: hover ? 52 : 38,
            height: hover ? 52 : 38,
            borderRadius: "50%",
            opacity: hover ? 0.7 : 0.16,
            // background: "radial-gradient(circle, #66bfff 60%, #e0f6ff 80%, transparent 100%)",
            filter: `blur(${hover ? 6 : 4}px)`,
            transition: "all 0.36s cubic-bezier(.42,0,.4,1.32)",
            zIndex: 0
          }}
        />
        <span
          role="img"
          aria-label="bulb"
          style={{
            position: "relative",
            zIndex: 1,
            transition: "all 0.3s cubic-bezier(.46,1.54,.45,1.21)",
            filter: hover ? "drop-shadow(0 0 4px #FFD700 )" : "none"
          }}
        >
          💡
        </span>
      </span>
    </div>
        <div style={{
          fontSize: "clamp(1.09rem, 2vw, 1.31rem)",
          color: t.subText,
          fontWeight: 600,
          marginTop: 13,
          letterSpacing: "0.01em",
          textShadow: "0 2px 14px #FFD70019"
        }}>
         100+ real-world React coding tasks Most-Asked by India's Leading Tech Companies
    
        </div>
      </header>

      {/* CARD GRID */}
      <main
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "32px",
          padding: "0 4vw 82px 4vw",
          maxWidth: 1700,
          margin: "0 auto",
          zIndex: 2,
          position: "relative"
        }}
      >
        {companies.map((company, i) => (
          <CompanyCard
            key={company.name + i}
            company={company}
            theme={theme}
            onViewCode={q =>
              setModal({ open: true, code: q.code, title: `${company.name} / ${q.title}` })
            }
          />
        ))}
      </main>

      {/* Global Code Modal */}
      <CodeModal
        open={modal.open}
        code={modal.code}
        title={modal.title}
        onClose={() => setModal({ open: false, code: "", title: "" })}
      />

      {/* Footer */}
      <footer style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100vw",
        textAlign: "center",
        padding: "16px 0 12px",
        background: t.footerBg,
        fontSize: 16.6,
        color: t.subText,
        letterSpacing: "0.05em",
        fontWeight: 700,
        borderTop: "1.5px solid #FFD70044",
        zIndex: 100,
        boxShadow: "0 0px 18px #FFD70013",
        backdropFilter: "blur(2.5px)",
        transition: "background 0.28s,color 0.19s"
      }}>
        <span style={{ color: "#FFD700", fontWeight: 900 }}>© {new Date().getFullYear()}</span>
        {" | "}
        <span style={{ color: t.subText, fontWeight: 800 }}>React Interview UI</span>
        {" | "}
        <span style={{ color: t.mainText, fontWeight: 900 }}>Akash Kumar</span>
      </footer>
      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 800px) {
          main {
            grid-template-columns: 1fr !important;
            gap: 19px !important;
            padding: 0 2vw 95px 2vw !important;
          }
          header {
            padding: 42px 0 19px 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
