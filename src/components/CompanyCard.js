import React, { Suspense, useState } from "react";

const cardThemes = {
  dark: {
    cardBg: "linear-gradient(120deg,rgba(16,18,27,0.95) 78%,#ffde8a17 100%)",
    name: "#ffd700"
  },
  light: {
    cardBg: "linear-gradient(120deg,#fffde2 88%,#ffe58a12 100%)",
    name: "#bfa400"
  }
};

export default function CompanyCard({ company, theme = "dark",onViewCode }) {
  const [openIdx, setOpenIdx] = useState(null);       // UI render for this idx
  const [components, setComponents] = useState({});   

  const t = cardThemes[theme];

  // Lazy import on demand
  const loadComponent = async (q, idx) => {
    if (!components[idx]) {
      const mod = await import(`../companies/${company.folder}/${q.file}`);
      setComponents(prev => ({ ...prev, [idx]: mod.default }));
    }
  };

  return (
    <div
      style={{
        borderRadius: "30px",
        background: t.cardBg,
        boxShadow: `0 6px 24px 0 #ffd70044, 0 1.5px 6px 0 #ffd70018`,
        border: `1.8px solid #ffd70099`,
        padding: "34px 23px 26px 23px",
        minHeight: 320,
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        position: "relative",
        overflow: "hidden",
        zIndex: 3,
        marginBottom: 14
      }}
      tabIndex={0}
    >
      {/* Company Name (top) */}
      <h2 style={{
        fontSize: "1.26rem",
        fontWeight: 900,
        margin: "0 0 13px 0",
        color: t.name,
        letterSpacing: "-0.6px",
        fontFamily: "Orbitron, Inter"
      }}>
        {company.name}
      </h2>

      {company.questions.map((q, idx) => (
        <div
          key={q.file}
          style={{
            marginBottom: 26,
            paddingBottom: 19,
            borderBottom: idx !== company.questions.length - 1 ? "1.5px solid #ffd70022" : "none"
          }}
        >
          {/* Title + View Code */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 5,
            gap: 7
          }}>
            <span
              onClick={async () => {
                if (openIdx === idx) return setOpenIdx(null);
                await loadComponent(q, idx);
                setOpenIdx(idx);
              }}
              style={{
                fontWeight: 800,
                fontSize: "1.08rem",
                color: "#ffd700",
                fontFamily: "inherit",
                cursor: "pointer",
                textDecoration: openIdx === idx ? "underline" : "none",
                letterSpacing: "0.01em",
                paddingRight: 10,
                userSelect: "none"
              }}
              tabIndex={0}
              role="button"
              aria-pressed={openIdx === idx}
            >
              {q.title}
            </span>
                     <button
  style={{
    background: "linear-gradient(90deg,#FFD700 0%,#fffbe6 100%)",
    color: "#191a22",
    fontWeight: 800,
    border: "none",
    borderRadius: 8,
    padding: "8px 17px",
    fontSize: 15,
    boxShadow: "0 2px 8px #FFD70029",
    cursor: "pointer",
    display: "inline-flex",    // icon + text
    alignItems: "center",
    minWidth: 0,               // no fixed width!
    maxWidth: "100%",
    width: "fit-content",
    whiteSpace: "nowrap"       // avoid multi-line unless needed
  }}
  onClick={() => onViewCode(q)}
  aria-label={`View code for ${q.title}`}
>
  <span role="img" aria-label="View code" style={{ marginRight: 5, fontSize: 18 }}>👀</span>
  Code
</button>
          </div>
          {/* UI Render: only if selected */}
          <div style={{ marginTop: 9, minHeight: 64 }}>
            {openIdx === idx && (
              <Suspense fallback={<div style={{ color: "#ffd700" }}>Loading…</div>}>
                {components[idx]
                  ? React.createElement(components[idx], { inContainer: true })
                  : <div style={{ color: "#fffbe6" }}>Loading…</div>
                }
              </Suspense>
            )}
            {/* Not open: prompt */}
            {openIdx !== idx && (
              <div style={{
                color: "#ffd70055",
                fontSize: 13.6,
                textAlign: "left",
                padding: "8px 0 4px 1px",
                fontStyle: "italic"
              }}>
                Click above to show UI
              </div>
            )}
          </div>
         
        </div>
      ))}
    </div>
  );
}



