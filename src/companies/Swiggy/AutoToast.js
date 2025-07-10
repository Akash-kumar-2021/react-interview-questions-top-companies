import { useState } from "react";

export default function AutoToast({ inContainer = false }) {
  const [toasts, setToasts] = useState([]);
  const showToast = (msg) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, msg }]);
    setTimeout(() => setToasts((prev) => prev.filter(t => t.id !== id)), 2500);
  };

  return (
    <div>
      <button
        onClick={() => showToast("Order Placed!")}
        style={{
          background: "#ffd700", color: "#23243b", fontWeight: 700,
          border: "none", borderRadius: 8, padding: "10px 22px", marginBottom: 18,
          cursor:"pointer"
        }}
      >
        Show Toast
      </button>
      <div style={{
        position: inContainer ? "absolute" : "fixed",
        top: "50%", right: 36,
        zIndex: 12,
        width: inContainer ? "78%" : "auto",
        maxWidth: 250
      }}>
        {toasts.map((t) => (
          <div key={t.id} style={{
            background: "#23243b",
            color: "#ffe366",
            borderRadius: 8,
            marginBottom: 9,
            padding: "12px 18px",
            fontWeight: 700,
            boxShadow: "0 1px 10px #ffd70099"
          }}>{t.msg}</div>
        ))}
      </div>
    </div>
  );
}
