export const companies = [
  {
    name: "CRED",
    folder: "Cred",
    questions: [
      { file: "TypingIndicator.js", title: "Typing Indicator",code:`import React, { useState, useEffect } from "react";
      
      export default function TypingIndicator() {
        const [value, setValue] = useState("");
        const [isTyping, setIsTyping] = useState(false);
      
        useEffect(() => {
          if (value === "") {
            setIsTyping(false);
            return;
          }
          setIsTyping(true);
          const timeout = setTimeout(() => setIsTyping(false), 2000);
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
      `.trim() },
      { file: "DebouncedInput.js", title: "Debounced Input",code:`` },
      { file: "AutoCarousel.js", title: "Auto Carousel",code:`` },
      { file: "SplashScreen.js", title: "Splash Screen",code:`` },
      { file: "TimeoutMessage.js", title: "Reusable Timeout Message",code:`` }
    ]
  },
  {
    name: "Razorpay",
    folder: "Razorpay",
    questions: [
      { file: "OTPResendButton.js", title: "OTP Resend Button (30s cool down)",code:`` },
      { file: "SubmitDisable5s.js", title: "Disable Submit 5s",code:`` },
      { file: "AutoDismissAlert.js", title: "Success Alert (Auto Dismiss 3s)",code:`` },
      { file: "ShimmerLoader.js", title: "Shimmer Loader (2s to Data)",code:`` },
      { file: "BalanceAutoRefresh.js", title: "Auto Refresh Balance (10s, Chained)",code:`` }
    ]
  },
  {
  name: "Swiggy",
  folder: "Swiggy",
  questions: [
    { file: "SessionTimeoutPopup.js", title: "Session Timeout Popup (14min idle)", code:`` },
    { file: "CountdownTimer.js", title: "Countdown Timer (mm:ss)",code:`` },
    { file: "AutoResetForm.js", title: "Auto-reset Form (10s idle)",code:`` },
    { file: "AutoToast.js", title: "Toast (Auto Disappear)" },
    { file: "ChainedProgressBar.js", title: "Chained Progress Bar (3s)",code:`` }
  ]
}

];
