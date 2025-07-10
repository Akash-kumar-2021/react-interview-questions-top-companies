import React, { Suspense, useState } from "react";

const cardThemes = {
  dark: {
    cardBg: "linear-gradient(120deg,rgba(16,18,27,0.95) 78%,#ffde8a17 100%)",
    name: "#ffd700",
    tabActive: "linear-gradient(90deg,#ffd700 0%,#fffbe6 100%)",
    tabInactive: "#292b3d",
    tabTextActive: "#191a22",
    tabTextInactive: "#fffbe6"
  },
  light: {
    cardBg: "linear-gradient(120deg,#fffde2 88%,#ffe58a12 100%)",
    name: "#bfa400",
    tabActive: "linear-gradient(90deg,#ffd700 0%,#fffbe6 100%)",
    tabInactive: "#fffbe6",
    tabTextActive: "#a07900",
    tabTextInactive: "#bfa400"
  }
};

export default function CompanyCard({ company, theme = "dark" }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const question = company.questions[activeIdx];
  const [Component, setComponent] = useState(null);
  const t = cardThemes[theme];

  React.useEffect(() => {
    import(`../companies/${company.folder}/${question.file}`).then((mod) =>
      setComponent(() => mod.default)
    );
  }, [company.folder, question.file]);

  // Gold/amber accents for active tab
  const goldShades = [
    "#FFD700", "#FFEA70", "#FFC400", "#fffbe6", "#FFB200"
  ];
  const glowColor = goldShades[activeIdx % goldShades.length];

  return (
    <div
      style={{
        borderRadius: "30px",
        background: t.cardBg,
        boxShadow: `0 6px 24px 0 ${glowColor}44, 0 1.5px 6px 0 #ffd70018`,
        border: `1.8px solid ${glowColor}99`,
        padding: "34px 23px 26px 23px",
        minHeight: 340,
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        position: "relative",
        overflow: "hidden",
        zIndex: 3,
        transition: "box-shadow 0.21s, border 0.16s, background 0.28s",
        willChange: "box-shadow",
        cursor: "pointer"
      }}
      tabIndex={0}
    >
      {/* Glowing Gold Orbs */}
      <div style={{
        position: "absolute", left: -42, top: -32,
        width: 70, height: 80, borderRadius: "50%",
        background: `radial-gradient(circle at 54% 45%, ${glowColor}22, transparent 90%)`,
        zIndex: 0, pointerEvents: "none",
        filter: "blur(9px)"
      }} />
      <div style={{
        position: "absolute", right: -25, bottom: -15,
        width: 50, height: 58, borderRadius: "50%",
        background: `radial-gradient(circle at 44% 60%, ${glowColor}2c, transparent 88%)`,
        zIndex: 0, pointerEvents: "none",
        filter: "blur(7px)"
      }} />

      {/* Company Name */}
      <h2
        style={{
          fontSize: "1.42rem",
          fontWeight: 900,
          margin: "0 0 17px 0",
          color: t.name,
          letterSpacing: "-0.6px",
          textShadow: `0 2px 21px ${glowColor}44, 0 1.5px 0 #fffbe6`,
          zIndex: 1,
          fontFamily: "Orbitron, Inter"
        }}
      >
        {company.name}
      </h2>

      {/* Tab Buttons */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "13px",
          marginBottom: 18,
          zIndex: 1,
        }}
      >
        {company.questions.map((q, i) => (
          <button
            key={q.file}
            onClick={() => setActiveIdx(i)}
            style={{
              background: activeIdx === i
                ? t.tabActive
                : t.tabInactive,
              color: activeIdx === i
                ? t.tabTextActive
                : t.tabTextInactive,
              border: "none",
              borderRadius: 13,
              padding: "10px 25px",
              fontWeight: 800,
              fontSize: "1.06rem",
              cursor: "pointer",
              boxShadow: activeIdx === i
                ? `0 2.5px 13px ${glowColor}44`
                : "0 1.5px 4px #ffd70018",
              outline: "none",
              letterSpacing: "0.04em",
              filter: activeIdx === i ? `drop-shadow(0 2px 10px ${glowColor}33)` : "none",
              transition: "all 0.19s cubic-bezier(.39,.6,.6,1.2)",
              borderBottom: activeIdx === i ? `4px solid #fffbe6` : "4px solid transparent"
            }}
            onMouseOver={e =>
              e.currentTarget.style.background =
                t.tabActive
            }
            onMouseOut={e =>
              e.currentTarget.style.background =
                activeIdx === i
                  ? t.tabActive
                  : t.tabInactive
            }
          >
            {q.title}
          </button>
        ))}
      </div>

      {/* Question Content */}
      <div style={{ flex: 1, minHeight: 90, zIndex: 2, marginTop: 7 }}>
        <Suspense fallback={<div style={{ color: "#ffd700" }}>Loading…</div>}>
          {Component ? <Component /> : <div style={{ color: "#fffbe6" }}>Loading…</div>}
        </Suspense>
      </div>
    </div>
  );
}
