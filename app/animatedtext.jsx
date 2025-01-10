"use client";
import { useEffect, useState } from "react";
export function AnimatedText() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <h1
      className={`text-5xl font-extrabold leading-tight tracking-tighter transition-all duration-1000 md:text-6xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
        Elevate
      </span>{" "}
      your social game with{" "}
      <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
        AI-powered
      </span>{" "}
      insights
    </h1>
  );
}
