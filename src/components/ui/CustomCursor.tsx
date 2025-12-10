"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  // 1) 클라이언트에 마운트된 뒤에만 커서 렌더
  useEffect(() => {
    setMounted(true);
  }, []);

  // 2) 마운트된 이후에만 mousemove 이벤트 등록
  useEffect(() => {
    if (!mounted) return;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mounted]);

  // 서버 렌더 / 아직 마운트 전에는 아무것도 렌더하지 않음 → hydration mismatch 없음
  if (!mounted) return null;

  return (
    <div
      className="
        fixed top-0 left-0 
        w-6 h-6 
        bg-sky-400 
        rounded-full 
        pointer-events-none
        mix-blend-multiply 
        opacity-70
        transition-transform duration-75
        z-[9999]
      "
      style={{
        transform: `translate(${pos.x - 12}px, ${pos.y - 12}px)`,
      }}
    />
  );
}
