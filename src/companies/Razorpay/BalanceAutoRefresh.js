import React, { useState, useEffect } from "react";

function getRandomBalance() {
  // Simulate random balance for demo
  return (56000 + Math.floor(Math.random() * 2000)).toLocaleString("en-IN", { style: "currency", currency: "INR" });
}

export default function BalanceAutoRefresh() {
  const [balance, setBalance] = useState(getRandomBalance());

  useEffect(() => {
    let isMounted = true;
    let timerId;
    function refresh() {
      if (!isMounted) return;
      setBalance(getRandomBalance());
      timerId = setTimeout(refresh, 10000);
    }
    timerId = setTimeout(refresh, 10000);
    return () => {
      isMounted = false;
      clearTimeout(timerId);
    };
  }, []);

  return (
    <div style={{
      background: "#fff8dc",
      color: "#c9950e",
      fontWeight: 700,
      borderRadius: 8,
      padding: "17px 28px",
      fontSize: "1.3rem",
      boxShadow: "0 2px 15px #ffd70018",
      letterSpacing: "0.04em"
    }}>
      🔁 Current Balance: {balance}
    </div>
  );
}
