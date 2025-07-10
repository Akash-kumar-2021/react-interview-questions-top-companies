import React, { useState, useEffect } from "react";

export default function SplashScreen({ company = "CRED" }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0,
        width: "100vw",
        height: "100vh",
        background: "radial-gradient(circle at 70% 20%, #292b3d 0%, #10172a 100%)",
        color: "#fffde2",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontSize: "clamp(2rem, 6vw, 2.7rem)",
        zIndex: 9999,
        letterSpacing: ".03em",
        fontWeight: 900,
        overflow: "hidden"
      }}
    >
      {/* Glowing Animation Blob */}
      <div style={{
        position: "absolute", width: 220, height: 220,
        borderRadius: "50%", left: "50%", top: "50%",
        transform: "translate(-50%,-55%)",
        background: "radial-gradient(circle, #ffd70044 20%, transparent 80%)",
        filter: "blur(32px)", zIndex: 0
      }} />
      <span style={{
        position: "relative",
        zIndex: 2,
        display: "flex",
        alignItems: "center",
        gap: 18
      }}>
        <span
          role="img"
          aria-label="rocket"
          style={{
            fontSize: "2.2em",
            filter: "drop-shadow(0 0 15px #ffebc2bb)"
          }}
        >🚀</span>
        Welcome to
        <span style={{
          background: "linear-gradient(90deg,#fffbe6 10%,#ffd700 60%,#ffb200 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 2px 22px #ffd70033, 0 1px 0 #fff",
          marginLeft: 10
        }}>
          {company} Interview
        </span>
      </span>
    </div>
  );
}
