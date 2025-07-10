import React, { useState, useEffect } from "react";

export default function OTPResendButton() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (timer === 0) return;
    const id = setTimeout(() => setTimer(timer - 1), 1000);
    return () => clearTimeout(id);
  }, [timer]);

  return (
    <div style={{padding:18}}>
      <button
        disabled={timer > 0}
        onClick={() => setTimer(30)}
        style={{
          padding: "10px 24px",
          background: timer > 0 ? "#ccc" : "#02b8ff",
          color: "#fff", border: "none", borderRadius: 7, fontWeight: 600
        }}>
        {timer > 0 ? `Resend OTP in ${timer}s` : "Resend OTP"}
      </button>
    </div>
  );
}
