"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import LifeTimeline from "@/components/ui/LifeTimeLine";
import Image from "next/image";

const skills = [
  {
    key: "javascript",
    name: "JavaScript / TypeScript",
    logo: "/logo/JavaScript.png", // 실제 경로로 교체
    level: 5, // 1~5
    label: "상",
    desc: "프로젝트 전반에서 타입 설계, 비동기 로직, 리팩토링까지 주도적으로 수행할 수 있어요.",
  },
  {
    key: "react",
    name: "React / Next.js",
    logo: "/logo/React.png",
    level: 5,
    label: "상",
    desc: "상태 관리, 성능 최적화, 라우팅/SSR까지 포함해 서비스 한 개를 end-to-end로 구현할 수 있어요.",
  },
  {
    key: "vue",
    name: "Vue 2 / Vue 3",
    logo: "/logo/Vue.png",
    level: 4,
    label: "중상",
    desc: "컴포넌트 설계, 상태 관리, 라우팅 등을 활용해 중형 규모의 화면 개발을 안정적으로 맡을 수 있어요.",
  },
  {
    key: "flutter",
    name: "Flutter",
    logo: "/logo/Flutter.png",
    level: 3,
    label: "중",
    desc: "한 프로젝트를 끝까지 수행해 본 경험으로, 기존 구조 안에서 신규 화면/기능은 무리 없이 구현할 수 있어요.",
  },
];

export default function AboutPage() {
  const rootRef = useRef<HTMLElement | null>(null);

  return (
    <main
      ref={rootRef}
      className="h-screen w-full overflow-y-scroll overscroll-none scroll-smooth"
    >
      {/* 섹션 1 - 인사 & 핵심 역량 */}
      <section className="fullpage-section h-screen w-full flex flex-col items-center justify-center gap-6 px-6 bg-white">
        <div className="text-center space-y-2">
          <h1 className="text-x text-slate-900 l md:text-2xl font-semibold">
            안녕하세요, 4년차 프론트앤드 김유리입니다.
          </h1>
          <p className="text-sm md:text-base text-zinc-600">
            소중한 시간을 내어 제 홈페이지에 방문해주셔서 감사합니다!
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 w-full max-w-4xl mt-6">
          <div className="group p-6 rounded-2xl border border-zinc-200 bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl text-slate-900 font-semibold mb-2 tracking-tight">
              사용자 중심 개발
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              기획·디자인과 협업하며 자연스러운 사용자 흐름과 명확한 인터랙션을
              구현합니다.
            </p>
          </div>

          <div className="group p-6 rounded-2xl border border-zinc-200 bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl text-slate-900  font-semibold mb-2 tracking-tight">
              문제 해결 능력
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              복잡한 요구사항도 구조화하여 효율적인 UI·상태·데이터 흐름을
              설계합니다.
            </p>
          </div>

          <div className="group p-6 rounded-2xl border border-zinc-200 bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl text-slate-900  font-semibold mb-2 tracking-tight">
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

      <section className="fullpage-section h-screen w-full flex flex-col items-center justify-center px-6 py-20 bg-slate-50">
        <div className="w-full max-w-5xl mx-auto">
          <header className="text-center mb-10">
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-sky-500/80">
              Frontend Skill Map
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
              현재 프론트엔드 기술 활용도
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-600">
              실무 프로젝트 경험을 기준으로, 각 기술을 어느 정도 깊이까지 활용할
              수 있는지 정리했어요.
            </p>
          </header>

          <div className="grid gap-5 md:grid-cols-2">
            {skills.map((skill) => {
              const percent = (skill.level / 5) * 100;

              return (
                <div
                  key={skill.key}
                  className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/60 p-4 shadow-sm bg-white/60"
                >
                  {/* 아이콘 */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                      <Image
                        src={skill.logo}
                        alt={skill.name}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* 내용 */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          {skill.name}
                        </p>
                        <p className="text-[11px] text-slate-500">
                          레벨 {skill.level} / 5
                        </p>
                      </div>
                      <span className="inline-flex items-center rounded-full bg-sky-50 px-2 py-1 text-[11px] font-medium text-sky-700">
                        {skill.label}
                      </span>
                    </div>

                    {/* 게이지 바 */}
                    <div className="h-1.5 w-full rounded-full bg-slate-200 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-sky-500 transition-all"
                        style={{ width: `${percent}%` }}
                      />
                    </div>

                    <p className="text-[11px] leading-snug text-slate-600">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-6 text-[11px] text-slate-400 text-center">
            ※ 레벨 기준: 1 입문 · 2 기초 · 3 중 · 4 중상 · 5 상 (리딩 및 구조
            설계까지 가능)
          </p>
        </div>
      </section>
    </main>
  );
}
