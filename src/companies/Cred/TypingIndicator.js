import React, { useState, useEffect } from "react";

export default function TypingIndicator() {
  const [value, setValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (value === "") {
      setIsTyping(false);
      return;
    }
    setIsTyping(true);
    const timeout = setTimeout(() => setIsTyping(false), 100);
    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div style={{ padding: 18 }}>
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Type here..."
        style={{ padding: 8, fontSize: 18, borderRadius: 6, border: "1px solid #ccc" }}
      />
      <div style={{ marginTop: 10, color: "#0077ee", height: 20 }}>
        {isTyping && <span>User is typing…</span>}
      </div>
    </div>
  );
}
