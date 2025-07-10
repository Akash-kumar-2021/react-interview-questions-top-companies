import React, { useState, useRef, useEffect } from "react";

export default function AutoResetForm() {
  const [value, setValue] = useState("");
  const timer = useRef(null);

  const reset = () => setValue("");

  useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(reset, 10000); // 10s
    return () => clearTimeout(timer.current);
  }, [value]);

  // Also reset timer on typing/click
  useEffect(() => {
    const resetTimer = () => {
      clearTimeout(timer.current);
      timer.current = setTimeout(reset, 10000);
    };
    window.addEventListener("keydown", resetTimer);
    window.addEventListener("click", resetTimer);
    return () => {
      window.removeEventListener("keydown", resetTimer);
      window.removeEventListener("click", resetTimer);
    };
  }, []);

  return (
    <form style={{ display: "flex", gap: 10 }}>
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Type something..."
        style={{ padding: 8, borderRadius: 7, border: "1.3px solid #ffd700", minWidth: 180 }}
      />
      <button type="button" onClick={reset}>Clear</button>
    </form>
  );
}
