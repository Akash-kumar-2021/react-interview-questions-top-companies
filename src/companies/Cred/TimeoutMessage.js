import React, { useState, useEffect } from "react";

// Use as <TimeoutMessage message="Hello" delay={2000} />
export default function TimeoutMessage({ message, delay = 2000 }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => setShow(false), delay);
    return () => clearTimeout(timer);
  }, [message, delay]);

  return show ? <div style={{ color: "#2d8900", fontWeight: 600 }}>{message}</div> : null;
}
