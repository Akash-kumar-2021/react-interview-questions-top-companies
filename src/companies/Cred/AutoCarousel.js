import React, { useState, useEffect } from "react";

const images = [
  "https://avatars.githubusercontent.com/u/78096363?v=4",
  "https://avatars.githubusercontent.com/u/78096363?v=4",
  "https://avatars.githubusercontent.com/u/78096363?v=4",
];

export default function AutoCarousel() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIdx((i) => (i + 1) % images.length), 2000);
    return () => clearTimeout(timer);
  }, [idx]);

  return (
    <div style={{ padding: 18, textAlign: "center" }}>
      <img src={images[idx]} alt="" style={{ borderRadius: 10, boxShadow: "0 2px 8px #eee" }} />
      <div style={{ marginTop: 8 }}>
        {images.map((_, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              margin: "0 3px",
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: i === idx ? "#0077ee" : "#bbb"
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}
