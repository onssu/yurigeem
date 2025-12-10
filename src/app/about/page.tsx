"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import LifeTimeline from "@/components/ui/LifeTimeLine";

export default function AboutPage() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const container = rootRef.current;
    if (!container) return;

    const sections = Array.from(
      container.querySelectorAll<HTMLElement>(".fullpage-section")
    );
    if (!sections.length) return;

    let currentIndex = 0;
    let isAnimating = false;
    let touchStartY = 0;

    const scrollToSection = (index: number) => {
      const target = sections[index];
      if (!target) return;
      isAnimating = true;

      gsap.to(container, {
        scrollTop: target.offsetTop,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          isAnimating = false;
        },
      });
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isAnimating) return;

      if (e.deltaY > 0 && currentIndex < sections.length - 1) {
        currentIndex += 1;
        scrollToSection(currentIndex);
      } else if (e.deltaY < 0 && currentIndex > 0) {
        currentIndex -= 1;
        scrollToSection(currentIndex);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0]?.clientY ?? 0;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isAnimating) return;

      const endY = e.changedTouches[0]?.clientY ?? 0;
      const deltaY = touchStartY - endY;

      // 너무 작은 움직임은 무시
      if (Math.abs(deltaY) < 20) return;

      if (deltaY > 0 && currentIndex < sections.length - 1) {
        currentIndex += 1;
        scrollToSection(currentIndex);
      } else if (deltaY < 0 && currentIndex > 0) {
        currentIndex -= 1;
        scrollToSection(currentIndex);
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });

    // 처음 로드 시 맨 위로
    container.scrollTop = 0;

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
      gsap.killTweensOf(container);
    };
  }, []);

  return (
    <main
      ref={rootRef}
      className="h-screen w-full overflow-y-scroll overscroll-none scroll-smooth"
    >
      {/* 섹션 1 - 인사 & 핵심 역량 */}
      <section className="fullpage-section h-screen w-full flex flex-col items-center justify-center gap-6 px-6">
        <div className="text-center space-y-2">
          <h1 className="text-xl md:text-2xl font-semibold">
            안녕하세요, 4년차 프론트앤드 김유리입니다.
          </h1>
          <p className="text-sm md:text-base text-zinc-600">
            소중한 시간을 내어 제 홈페이지에 방문해주셔서 감사합니다!
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 w-full max-w-4xl mt-6">
          <div className="group p-6 rounded-2xl border border-zinc-200 bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 tracking-tight">
              사용자 중심 개발
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              기획·디자인과 협업하며 자연스러운 사용자 흐름과 명확한 인터랙션을
              구현합니다.
            </p>
          </div>

          <div className="group p-6 rounded-2xl border border-zinc-200 bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 tracking-tight">
              문제 해결 능력
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              복잡한 요구사항도 구조화하여 효율적인 UI·상태·데이터 흐름을
              설계합니다.
            </p>
          </div>

          <div className="group p-6 rounded-2xl border border-zinc-200 bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2 tracking-tight">
              성능 및 품질 개선
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              접근성, 렌더링 최적화, 코드 리팩터링 등 사용자 경험과 서비스
              안정성을 높입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 섹션 2 - EDUCATION + CAREER 같이 */}
      <section className="fullpage-section h-screen w-full flex flex-col items-center justify-center px-6 py-20 bg-slate-50">
        <div className="max-w-3xl w-full space-y-16">
          {/* EDUCATION */}
          <div>
            <h2 className="text-2xl font-bold text-sky-600 mb-6 tracking-wide">
              📖 EDUCATION
            </h2>

            <div className="relative border-l-2 border-sky-300 pl-6 space-y-8">
              <div className="relative">
                <span className="absolute -left-[14px] top-[6px] w-2 h-2 bg-sky-400 rounded-full shadow" />
                <p className="text-sm font-semibold text-sky-600">
                  2012 ~ 2015
                </p>
                <p className="text-base text-slate-700">
                  경남 진해여자고등학교 이공계 졸업
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[14px] top-[6px] w-2 h-2 bg-sky-400 rounded-full shadow" />
                <p className="text-sm font-semibold text-sky-600">
                  2018.04 ~ 2019.01 (약 9개월)
                </p>
                <p className="text-base text-slate-700">
                  (휴학) 일본 워킹홀리데이
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[14px] top-[6px] w-2 h-2 bg-sky-400 rounded-full shadow" />
                <p className="text-sm font-semibold text-sky-600">
                  2015 ~ 2020
                </p>
                <p className="text-base text-slate-700">
                  부산 동아대학교 승학캠퍼스 컴퓨터공학과 졸업
                </p>
              </div>
            </div>
          </div>

          {/* CAREER */}
          <div>
            <h2 className="text-2xl font-bold text-sky-600 mb-6 tracking-wide">
              💻 CAREER
            </h2>

            <div className="relative border-l-2 border-sky-300 pl-6 space-y-8">
              <div className="relative">
                <span className="absolute -left-[14px] top-[6px] w-2 h-2 bg-sky-400 rounded-full shadow" />
                <p className="text-sm font-semibold text-sky-600">
                  2021.04 ~ 2024.08 (약 3년 4개월)
                </p>
                <p className="text-base text-slate-700">
                  (주)엑스티 — 프론트엔드 대리
                </p>
                <p className="text-sm text-slate-600 mt-2">
                  에이전시 환경보다 인하우스 서비스에 깊이 관여하며 더 깊은
                  고민과 개발을 경험하고 싶어 퇴사했습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fullpage-section h-screen w-full flex flex-col items-center justify-center px-6 py-20 bg-white">
        <div className="max-w-3xl w-full space-y-16">
          {/* CERTIFICATE */}
          <div>
            <h2 className="text-2xl font-bold text-sky-600 mb-6 tracking-wide">
              📄 CERTIFICATE
            </h2>

            <div className="relative border-l-2 border-sky-300 pl-6 space-y-8">
              <div className="relative">
                <span className="absolute -left-[14px] top-[6px] w-2 h-2 bg-sky-400 rounded-full shadow" />
                <p className="text-sm font-semibold text-sky-600">2020.12</p>
                <p className="text-base text-slate-700">정보처리기사 취득</p>
              </div>
            </div>
          </div>

          {/* ACTIVITIES */}
          <div>
            <h2 className="text-2xl font-bold text-sky-600 mb-6 tracking-wide">
              🎯 ACTIVITIES
            </h2>

            <div className="relative border-l-2 border-sky-300 pl-6 space-y-10">
              <div className="relative">
                <span className="absolute -left-[14px] top-[6px] w-2 h-2 bg-sky-400 rounded-full shadow" />
                <p className="text-sm font-semibold text-sky-600">
                  동아대학교 스마트캠퍼스 어플리케이션 동아리
                </p>
                <p className="text-base text-slate-700">DSIS — 부회장 역임</p>
              </div>

              <div className="relative">
                <span className="absolute -left-[14px] top-[6px] w-2 h-2 bg-sky-400 rounded-full shadow" />
                <p className="text-sm font-semibold text-sky-600">
                  외주 프로젝트
                </p>
                <p className="text-base text-slate-700">
                  미래기업 홈페이지 제작 (외주)
                </p>
              </div>
            </div>
          </div>

          <LifeTimeline />
        </div>
      </section>
    </main>
  );
}
