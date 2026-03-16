"use client";
import React, { useState, useRef, useEffect } from "react";
import "./AiInsight.css";

export default function AiInsight() {
  const [messages, setMessages] = useState([
    { id: 0, sender: "bot", text: "Hi — I'm Ovyo AI. Ask me about this workspace." },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef(null);

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;
    const userMsg = { id: Date.now(), sender: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Simulated AI reply (stub)
    setTimeout(() => {
      const botMsg = {
        id: Date.now() + 1,
        sender: "bot",
        text: `I received: "${text}" — this is a placeholder response from the AI.`,
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 700);
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="aiinsight-root">
      <div className="aiinsight-header">AI Insight</div>
      <div className="aiinsight-chat" role="log" aria-live="polite">
        {messages.map((m) => (
          <div key={m.id} className={`aiinsight-message ${m.sender}`}>
            <div className="aiinsight-text">{m.text}</div>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <div className="aiinsight-inputBar">
        <input
          className="aiinsight-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
        />
        <button className="aiinsight-send" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}
