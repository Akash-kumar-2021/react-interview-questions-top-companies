import React from "react";

export default function CodeModal({ open, code, onClose, title }) {
  if (!open) return null;
  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0, width: "100vw", height: "100vh",
        background: "rgba(18,20,25,0.97)",
        color: "#FFD700",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: "relative",
          background: "#171820",
          borderRadius: 17,
          boxShadow: "0 0 64px #000a, 0 1.5px 6px #FFD70030",
          padding: "24px 0 15px 0",
          maxWidth: 690,
          width: "96vw",
          maxHeight: "90vh",
          overflow: "auto",
          border: "1.7px solid #FFD70077",
          display: "flex",
          flexDirection: "column"
        }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 13, right: 21,
            background: "#FFD700",
            color: "#191a22",
            border: "none",
            borderRadius: 7,
            padding: "4px 14px",
            fontWeight: 800,
            cursor: "pointer",
            fontSize: 15,
            boxShadow: "0 1px 6px #FFD70066"
          }}
        >
          Close ✕
        </button>
        <div style={{
          fontWeight: 900,
          fontSize: 17,
          color: "#FFD700",
          margin: "0 0 9px 0",
          padding: "0 22px",
          letterSpacing: "-0.8px"
        }}>{title}</div>
        <pre style={{
          color: "#ffe366",
          fontSize: 13.7,
          fontFamily: "JetBrains Mono, Fira Mono, Menlo, monospace",
          margin: "0 0 0 0",
          padding: "22px",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          borderRadius: 11,
          minHeight: 150,
        }}>
          {code || "// Code not available for this component."}
        </pre>
      </div>
    </div>
  );
}
