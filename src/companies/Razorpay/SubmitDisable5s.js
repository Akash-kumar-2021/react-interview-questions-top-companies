import React, { useState, useEffect } from "react";

export default function SubmitDisable5s() {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (!disabled) return;
    const id = setTimeout(() => setDisabled(false), 5000);
    return () => clearTimeout(id);
  }, [disabled]);

  return (
    <button
      disabled={disabled}
      onClick={() => setDisabled(true)}
      style={{
        padding: "10px 28px",
        background: disabled ? "#aaa" : "#ffb200",
        color: "#222", border: "none", borderRadius: 7, fontWeight: 700
      }}
    >
      {disabled ? "Please wait 5s..." : "Submit"}
    </button>
  );
}
