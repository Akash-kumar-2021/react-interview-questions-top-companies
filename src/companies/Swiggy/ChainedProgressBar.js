import React, { useState, useEffect } from "react";

export default function ChainedProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress >= 100) return;
    const id = setTimeout(() => setProgress(progress + 10), 300);
    return () => clearTimeout(id);
  }, [progress]);

  const reset = () => setProgress(0);

  return (
    <div style={{
      width: 300, margin: "30px auto", textAlign: "center"
    }}>
      <div style={{
        width: "100%", height: 24, background: "#eee", borderRadius: 13,
        overflow: "hidden", boxShadow: "0 1px 4px #ffd70022"
      }}>
        <div style={{
          width: `${progress}%`, height: "100%",
          background: "linear-gradient(90deg,#ffd700 0%,#ffea70 100%)",
          transition: "width 0.23s cubic-bezier(.4,.95,.6,1.22)"
        }} />
      </div>
      <div style={{ margin: "11px 0" }}>{progress}%</div>
      <button onClick={reset} disabled={progress === 0}>Reset</button>
    </div>
  );
}
