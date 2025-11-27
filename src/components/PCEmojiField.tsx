"use client";

import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { YurigeemLookAtCursor } from "./ModelCursor";
import { Environment } from "@react-three/drei";

const EMOJIS = ["🐱", "🎮", "☕", "🎧", "📸", "📚", "🧸", "💗"];

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  vr: number;
};

export default function PCEmojiField() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const emojiElsRef = useRef<HTMLSpanElement[]>([]);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });
  const frameRef = useRef<number | null>(null);

  // 초기 파티클 세팅
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const count = 20;
    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * -height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: Math.random() * 0.5,
        rotation: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 0.02,
      });
    }

    particlesRef.current = particles;
  }, []);

  // 마우스 추적 (이모지 튕겨나가는 용도)
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
    };
    const handleLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerleave", handleLeave);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  // 애니메이션 루프
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    let width = rect.width;
    let height = rect.height;

    const onResize = () => {
      const r = container.getBoundingClientRect();
      width = r.width;
      height = r.height;
    };
    window.addEventListener("resize", onResize);

    const gravity = 0.015;
    const bounce = 0.7;
    const friction = 0.995;
    const mouseRadius = 120;
    const mouseForce = 0.12;

    const loop = () => {
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      particles.forEach((p, i) => {
        p.vy += gravity;

        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;

          if (dist < mouseRadius) {
            const force = (mouseRadius - dist) * mouseForce * 0.001;
            p.vx += (dx / dist) * force * 150;
            p.vy += (dy / dist) * force * 150;
          }
        }

        p.vx *= friction;
        p.vy *= friction;
        p.x += p.vx;
        p.y += p.vy;

        p.rotation += p.vr;

        const size = 32;
        const half = size / 2;

        if (p.x < half) {
          p.x = half;
          p.vx *= -bounce;
        } else if (p.x > width - half) {
          p.x = width - half;
          p.vx *= -bounce;
        }

        if (p.y < -height) {
          p.y = -height;
          p.vy = 0.2;
        }

        if (p.y > height - half) {
          p.y = height - half;
          p.vy *= -bounce;
          if (Math.abs(p.vy) < 0.3) {
            p.vy = -0.4 - Math.random() * 0.4;
          }
        }

        const el = emojiElsRef.current[i];
        if (el) {
          el.style.transform = `translate(${p.x - half}px, ${
            p.y - half
          }px) rotate(${p.rotation}rad)`;
        }
      });

      frameRef.current = requestAnimationFrame(loop);
    };

    frameRef.current = requestAnimationFrame(loop);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-screen h-screen overflow-hidden"
    >
      <Canvas
        className="absolute inset-0"
        camera={{ position: [0, 0, 5], fov: 45 }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 4, 5]} intensity={1} />

        <YurigeemLookAtCursor />

        <Environment preset="studio" />
      </Canvas>

      <div className="absolute inset-0 pointer-events-none z-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            ref={(el) => {
              if (el) emojiElsRef.current[i] = el;
            }}
            className="absolute text-3xl md:text-4xl select-none will-change-transform drop-shadow-[0_0_10px_rgba(0,0,0,0.7)]"
            style={{
              transform: "translate(-100px, -100px)",
            }}
          >
            {EMOJIS[i % EMOJIS.length]}
          </span>
        ))}
      </div>
    </section>
  );
}
