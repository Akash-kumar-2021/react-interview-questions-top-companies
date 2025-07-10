import React, { useState, useEffect } from "react";

export default function ShimmerLoader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setLoaded(true), 2000);
    return () => clearTimeout(id);
  }, []);

  return loaded ? (
    <div style={{
      background: "#fff4d4",
      color: "#c9950e",
      fontWeight: 700,
      borderRadius: 8,
      padding: "15px 28px"
    }}>
      ₹ 56,230.90 Available Balance
    </div>
  ) : (
    <div style={{
      width: 190, height: 32,
      background: "linear-gradient(90deg,#292b3d 0%,#ffebae33 55%,#292b3d 100%)",
      backgroundSize: "200% 100%",
      borderRadius: 8,
      animation: "shimmer 1.1s infinite linear"
    }}>
      <style>
        {`
        @keyframes shimmer {
          0% {background-position: -180px 0;}
          100% {background-position: 180px 0;}
        }
        `}
      </style>
    </div>
  );
}
