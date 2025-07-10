import React, { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [time, setTime] = useState(0);      // Start from 0
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (running) {
      const id = setTimeout(() => setTime(t => t + 1), 500);
      return () => clearTimeout(id);
    }
  }, [running, time]);

  const handleStart = () => setRunning(true);
  const handleStop = () => setRunning(false);
  const handleReset = () => {
    setRunning(false);
    setTime(0);
  };

  // mm:ss format
  const mm = String(Math.floor(time / 60)).padStart(2, "0");
  const ss = String(time % 60).padStart(2, "0");

  return (
    <div style={{
      background: "#191a23",
      borderRadius: 18,
      padding: "32px 30px 25px",
      boxShadow: "0 4px 22px #ffd70033",
      maxWidth: 320,
      margin: "25px auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <div style={{
        fontSize: 44,
        color: "#ffd700",
        fontWeight: 900,
        letterSpacing: "2.5px",
        fontFamily: "Orbitron, 'Inter', Arial, sans-serif",
        marginBottom: 16,
        textShadow: "0 2px 20px #ffd70077"
      }}>
        {mm}:{ss}
      </div>
      <div style={{ display: "flex", gap: 16 }}>
        <button
          onClick={handleStart}
          disabled={running}
          style={{
            background: running ? "#7d7a68" : "#ffd700",
            color: "#191a22",
            border: "none",
            borderRadius: 9,
            padding: "10px 24px",
            fontWeight: 800,
            fontSize: 16,
            boxShadow: "0 1px 8px #ffd70044",
            cursor: running ? "not-allowed" : "pointer",
            opacity: running ? 0.57 : 1,
            transition: "all 0.16s"
          }}>
          Start
        </button>
        <button
          onClick={handleStop}
          disabled={!running}
          style={{
            background: !running ? "#7d7a68" : "#ffd700",
            color: "#191a22",
            border: "none",
            borderRadius: 9,
            padding: "10px 24px",
            fontWeight: 800,
            fontSize: 16,
            boxShadow: "0 1px 8px #ffd70044",
            cursor: !running ? "not-allowed" : "pointer",
            opacity: !running ? 0.57 : 1,
            transition: "all 0.16s"
          }}>
          Stop
        </button>
        <button
          onClick={handleReset}
          style={{
            background: "#191a23",
            color: "#ffd700",
            border: "1.6px solid #ffd700",
            borderRadius: 9,
            padding: "10px 24px",
            fontWeight: 800,
            fontSize: 16,
            boxShadow: "0 1px 8px #ffd70044",
            cursor: "pointer",
            transition: "all 0.16s"
          }}>
          Reset
        </button>
      </div>
    </div>
  );
}
