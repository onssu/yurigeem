"use client";

import { useEffect, useRef } from "react";
import YurigeemModel from "./Model";

const DEFAULT_EMOJIS = ["🐱", "🎮", "☕", "🎧", "📸", "📚", "🧸"];

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  vr: number;
};

type MobileEmojiFieldProps = {
  /** 사용할 이모지들 (기본: 취미 관련 이모지들) */
  emojis?: string[];
  /** 이모지 개수 */
  count?: number;
  /** 섹션 커스텀 클래스 (기본: w-screen h-screen) */
  className?: string;
};

export default function MobileEmojiField({
  emojis = DEFAULT_EMOJIS,
  count = 20,
  className = "w-screen h-screen",
}: MobileEmojiFieldProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const emojiElsRef = useRef<HTMLSpanElement[]>([]);
  const frameRef = useRef<number | null>(null);

  // 초기 파티클 세팅
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height, // 화면 안 어딘가에서 시작
        vx: (Math.random() - 0.5) * 0.4, // 좌우 랜덤 속도
        vy: Math.random() * 0.6, // 아래로 떨어지는 속도
        rotation: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 0.03, // 회전 속도
      });
    }

    particlesRef.current = particles;
  }, [count]);

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

    const gravity = 0.001;
    const bounce = 0.75;
    const friction = 0.995;

    const loop = () => {
      const particles = particlesRef.current;

      particles.forEach((p, i) => {
        // 중력
        p.vy += gravity;

        // 가끔 좌우로 랜덤하게 흔들리도록 살짝 노이즈
        p.vx += (Math.random() - 0.5) * 0.01;

        // 마찰
        p.vx *= friction;
        p.vy *= friction;

        // 위치 업데이트
        p.x += p.vx;
        p.y += p.vy;

        // 회전
        p.rotation += p.vr;

        const size = 32;
        const half = size / 2;

        // 좌우 벽 튕김
        if (p.x < half) {
          p.x = half;
          p.vx *= -bounce;
        } else if (p.x > width - half) {
          p.x = width - half;
          p.vx *= -bounce;
        }

        // 바닥 튕김
        if (p.y > height - half) {
          p.y = height - half;
          p.vy *= -bounce;

          // 거의 멈추면, 다시 위로 튕기게 살짝 랜덤 부스터
          if (Math.abs(p.vy) < 0.3) {
            p.vy = -0.6 - Math.random() * 0.6;
            // 가끔 좌우로도 튕기기
            p.vx += (Math.random() - 0.5) * 0.5;
          }
        }

        // 너무 위로 나가면 다시 아래로 떨어지도록 살짝 내려놓기
        if (p.y < -height) {
          p.y = -height * 0.5;
          p.vy = Math.abs(p.vy);
        }

        // DOM 반영
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
      className={`relative overflow-hidden ${className}`}
    >
      <YurigeemModel />
      {/* 이모지 파티클들 */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: count }).map((_, i) => (
          <span
            key={i}
            ref={(el) => {
              if (el) emojiElsRef.current[i] = el;
            }}
            className="absolute text-3xl select-none will-change-transform drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]"
            style={{
              transform: "translate(-100px, -100px)",
            }}
          >
            {emojis[i % emojis.length]}
          </span>
        ))}
      </div>
    </section>
  );
}
