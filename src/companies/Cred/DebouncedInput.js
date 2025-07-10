import React, { useState, useEffect } from "react";

export default function DebouncedInput() {
  const [input, setInput] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(input), 600);
    return () => clearTimeout(handler);
  }, [input]);

  useEffect(() => {
    if (debouncedValue !== "") {
      // Simulate API call
      console.log("API called with:", debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <div style={{ padding: 18 }}>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Debounced input"
        style={{ padding: 8, fontSize: 18, borderRadius: 6, border: "1px solid #ccc" }}
      />
      <div style={{ marginTop: 10, color: "#009688" }}>
        {debouncedValue && <span>API called with: {debouncedValue}</span>}
      </div>
    </div>
  );
}
