import React, { useState, useEffect } from "react";

export default function AutoDismissAlert() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!show) return;
    const id = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(id);
  }, [show]);

  return (
    <div>
      <button
        onClick={() => setShow(true)}
        style={{
          padding: "9px 18px", borderRadius: 7,
          background: "#06e9b7", color: "#222", fontWeight: 600, border: "none"
        }}>
        Show Success Alert
      </button>
      {show && (
        <div style={{
          marginTop: 14,
          background: "#eaffed",
          color: "#15a761",
          borderRadius: 8,
          padding: "12px 22px",
          fontWeight: 600,
          boxShadow: "0 1px 10px #05eaa455"
        }}>
          ✅ Payment Success!
        </div>
      )}
    </div>
  );
}
