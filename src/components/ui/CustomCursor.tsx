"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-6 h-6 bg-pink-400 rounded-full pointer-events-none mix-blend-difference z-[9999]"
      style={{
        transform: `translate(${pos.x - 12}px, ${pos.y - 12}px)`,
      }}
    />
  );
}
