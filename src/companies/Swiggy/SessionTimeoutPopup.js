import { useEffect, useState } from "react";

// props: { inContainer }
export default function SessionTimeoutPopup({ inContainer = false }) {
  const [idle, setIdle] = useState(false);
  useEffect(() => {
    let timer;
    const reset = () => {
      setIdle(false);
      clearTimeout(timer);
      timer = setTimeout(() => setIdle(true), 2 * 60 * 1000);
    };
    reset();
    window.addEventListener("mousemove", reset);
    window.addEventListener("keydown", reset);
    window.addEventListener("click", reset);
    return () => {
      window.removeEventListener("mousemove", reset);
      window.removeEventListener("keydown", reset);
      window.removeEventListener("click", reset);
      clearTimeout(timer);
    };
  }, []);
  if (!idle) return null;
  return (
    <div style={{
      position: inContainer ? "absolute" : "fixed",
      top: 0, left: 0,
      width: "100%", height: "100%",
      background: "#222b",
      color: "#ffd700",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 27,
      zIndex: 11,
      fontWeight: 800,
      flexDirection: "column",
      borderRadius: inContainer ? 30 : 0,
    }}>
      <div style={{
        background: "#23243b", padding: "38px 32px", borderRadius: 13,
        boxShadow: "0 6px 28px #0008", border: "2px solid #ffd700"
      }}>
        Session Timeout!<br />
        <span style={{ color: "#fff", fontWeight: 500, fontSize: 16 }}>
          You were idle for 14 minutes.
        </span>
      </div>
    </div>
  );
}
