"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects, TechStack } from "@/data/projects";
import { CompanyBadge } from "@/components/CompanyLogo";

type SortOption = "newest" | "oldest" | "longest";
type LayoutOption = "grid2" | "grid3" | "list";
type FilterValue = TechStack | "ALL";

export const TECH_ICONS: Record<string, string> = {
  React: "/logo/React.png",
  "Vue 2": "/logo/Vue.png",
  "Vue 3": "/logo/Vue.png",
  Flutter: "/logo/Flutter.png",
};

// "2023.01 ~ 2023.06", "2022.12 ~ 진행중" 같은 period 문자열을 기준으로 정렬용 Date/기간 계산
function parseDateFromPeriodPart(part: string | undefined): Date | undefined {
  if (!part) return undefined;
  if (part.includes("진행")) {
    // 진행중이면 현재 시점으로
    return new Date();
  }

  // "2023.01", "2024.1" 패턴만 잡아서 사용
  const match = part.match(/\d{4}\.\d{1,2}/);
  if (!match) return undefined;

  const [yearStr, monthStr] = match[0].split(".");
  const year = Number(yearStr);
  const month = Number(monthStr); // 1~12
  if (!year || !month) return undefined;

  return new Date(year, month - 1, 1);
}

function parsePeriod(period: string) {
  const [startRaw, endRaw] = period.split("~").map((p) => p?.trim());
  const start = parseDateFromPeriodPart(startRaw);
  const end = parseDateFromPeriodPart(endRaw);
  return { start, end };
}

function getDurationMonths(period: string) {
  const { start, end } = parsePeriod(period);
  if (!start || !end) return 0;

  const years = end.getFullYear() - start.getFullYear();
  const months = end.getMonth() - start.getMonth();
  // +1 해서 대략적인 작업 개월 수(시작/끝 포함 느낌)
  return years * 12 + months + 1;
}

export default function PortfolioPage() {
  // ✅ 기술 스택: 단일 선택 ("ALL" = 전체)
  const [selectedTech, setSelectedTech] = useState<FilterValue>("ALL");
  // ✅ 정렬 옵션
  const [sortOption, setSortOption] = useState<SortOption>("newest");
  // ✅ 레이아웃 옵션
  const [layout, setLayout] = useState<LayoutOption>("grid3");

  const filterableTechs: TechStack[] = ["React", "Vue 2", "Vue 3", "Flutter"];

  const filteredAndSorted = useMemo(() => {
    // 1) 스택 필터링
    let result = projects;

    if (selectedTech !== "ALL") {
      result = result.filter((p) => p.techs.includes(selectedTech));
    }

    // 2) 정렬
    const sorted = [...result].sort((a, b) => {
      const aPeriod = parsePeriod(a.period);
      const bPeriod = parsePeriod(b.period);

      const aEnd = (aPeriod.end ?? aPeriod.start)?.getTime() ?? 0;
      const bEnd = (bPeriod.end ?? bPeriod.start)?.getTime() ?? 0;

      if (sortOption === "newest") {
        // 종료 시점 기준 최신→오래된 순
        return bEnd - aEnd;
      }

      if (sortOption === "oldest") {
        // 종료 시점 기준 오래된→최신 순
        return aEnd - bEnd;
      }

      if (sortOption === "longest") {
        const aDur = getDurationMonths(a.period);
        const bDur = getDurationMonths(b.period);
        // 작업기간 긴 순
        return bDur - aDur;
      }

      return 0;
    });

    return sorted;
  }, [selectedTech, sortOption]);

  const gridClass =
    layout === "list"
      ? "space-y-4"
      : layout === "grid2"
      ? "grid gap-6 md:grid-cols-2"
      : "grid gap-6 md:grid-cols-2 lg:grid-cols-3";

  return (
    <main className="min-h-screen py-24 px-6 bg-slate-50">
      <section className="max-w-6xl mx-auto space-y-4">
        {/* 헤더 */}
        <header className="space-y-2">
          <p className="text-sm tracking-[0.2em] uppercase text-sky-500/80">
            Projects
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            유리의 프로젝트들
          </h1>
          <p className="text-sm md:text-base text-slate-600">
            기술 스택 뱃지를 눌러 단일 선택 필터링을 할 수 있고, 정렬과
            레이아웃도 변경할 수 있어요.
          </p>
        </header>

        {/* 상단 컨트롤 영역: 스택 필터 + 정렬/레이아웃 */}
        <section className="space-y-3">
          {/* 기술 스택 필터 */}
          <div className="flex flex-wrap gap-3">
            {/* 전체(기본값) */}
            <button
              type="button"
              onClick={() => setSelectedTech("ALL")}
              className={[
                "px-4 py-2 rounded-full border transition",
                "text-[13px] font-medium",
                selectedTech === "ALL"
                  ? "bg-sky-600 text-white border-sky-600"
                  : "bg-white text-slate-700 border-slate-200 hover:border-sky-300 hover:bg-sky-50",
              ].join(" ")}
            >
              전체
            </button>

            {filterableTechs.map((tech) => {
              const active = selectedTech === tech;
              return (
                <button
                  key={tech}
                  type="button"
                  onClick={() => setSelectedTech(tech)}
                  className={[
                    "px-4 py-2",
                    "flex items-center gap-2",
                    "rounded-full border transition whitespace-nowrap",
                    "text-[13px] font-medium",
                    active
                      ? "bg-sky-100 text-sky-700 border-sky-400"
                      : "bg-white text-slate-700 border-slate-200 hover:border-sky-300 hover:bg-sky-50",
                  ].join(" ")}
                >
                  {TECH_ICONS[tech] && (
                    <Image
                      src={TECH_ICONS[tech]}
                      alt={tech}
                      width={18}
                      height={18}
                      className="inline-block"
                    />
                  )}
                  {tech}
                </button>
              );
            })}
          </div>

          {/* 정렬 + 레이아웃 스위처 */}
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mt-3">
            {/* 정렬 */}
            <div className="flex items-center gap-2 text-xs md:text-sm">
              <span className="text-slate-500">정렬</span>
              <div className="inline-flex rounded-lg border border-slate-200 bg-white p-[2px]">
                <button
                  type="button"
                  onClick={() => setSortOption("newest")}
                  className={[
                    "px-3 py-1 rounded-md text-xs md:text-sm",
                    sortOption === "newest"
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:bg-slate-50",
                  ].join(" ")}
                >
                  최신순
                </button>
                <button
                  type="button"
                  onClick={() => setSortOption("oldest")}
                  className={[
                    "px-3 py-1 rounded-md text-xs md:text-sm",
                    sortOption === "oldest"
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:bg-slate-50",
                  ].join(" ")}
                >
                  오래된순
                </button>
                <button
                  type="button"
                  onClick={() => setSortOption("longest")}
                  className={[
                    "px-3 py-1 rounded-md text-xs md:text-sm",
                    sortOption === "longest"
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:bg-slate-50",
                  ].join(" ")}
                >
                  작업기간 긴 순
                </button>
              </div>
            </div>

            {/* 레이아웃 */}
            <div className="flex items-center gap-2 text-xs md:text-sm">
              <span className="text-slate-500">레이아웃</span>
              <div className="inline-flex rounded-lg border border-slate-200 bg-white p-[2px]">
                <button
                  type="button"
                  onClick={() => setLayout("grid2")}
                  className={[
                    "px-3 py-1 rounded-md text-xs md:text-sm",
                    layout === "grid2"
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:bg-slate-50",
                  ].join(" ")}
                >
                  2분할
                </button>
                <button
                  type="button"
                  onClick={() => setLayout("grid3")}
                  className={[
                    "px-3 py-1 rounded-md text-xs md:text-sm",
                    layout === "grid3"
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:bg-slate-50",
                  ].join(" ")}
                >
                  3분할
                </button>
                <button
                  type="button"
                  onClick={() => setLayout("list")}
                  className={[
                    "px-3 py-1 rounded-md text-xs md:text-sm",
                    layout === "list"
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:bg-slate-50",
                  ].join(" ")}
                >
                  목록형
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 카드 리스트 */}
        <section className={gridClass}>
          {filteredAndSorted.map((project) => {
            const mainContribution =
              project.contributions.find((c) => c.phase === "overall") ??
              project.contributions[0];

            // 목록형일 때는 1열 카드 느낌으로 조금 다르게 보이도록
            const isList = layout === "list";

            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className={[
                  "group bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-md hover:border-sky-300 hover:bg-sky-50/40 transition-all",
                  isList ? "md:flex-row" : "",
                ].join(" ")}
              >
                {/* 썸네일 */}
                <div
                  className={[
                    "relative overflow-hidden bg-slate-100",
                    isList
                      ? "w-full md:w-1/3 aspect-[4/3] md:aspect-auto"
                      : "aspect-[4/3]",
                  ].join(" ")}
                >
                  {project.thumbnail ? (
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xs text-slate-400">
                      No image
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* 내용 */}
                <div
                  className={[
                    "p-4 flex flex-col gap-3 flex-1",
                    isList ? "md:p-5" : "",
                  ].join(" ")}
                >
                  <div className="flex flex-col gap-1">
                    <h2 className="text-base md:text-lg font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {project.title}
                    </h2>
                    <CompanyBadge company={project.company} />
                  </div>
                  <div className="flex items-start justify-between text-[11px] text-slate-500 gap-2">
                    {/* 왼쪽: 날짜 + 개별 작업기간 */}
                    <div className="leading-snug">
                      {project.period.split(",").map((line, i) => {
                        const trimmed = line.trim();
                        return (
                          <div key={i} className="flex mb-1">
                            <div>{trimmed}</div>
                            <div className="text-[10px] text-slate-400 pl-1 pt-0.5">
                              ({getDurationMonths(trimmed)}개월)
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* 오른쪽: 기여도 */}
                    {/* {mainContribution && (
                      <span className="whitespace-nowrap text-right">
                        기여도 {mainContribution.contributionPercent}%
                      </span>
                    )} */}
                  </div>

                  <p
                    className={[
                      "text-xs md:text-sm text-slate-600",
                      isList ? "line-clamp-2 md:line-clamp-3" : "line-clamp-3",
                    ].join(" ")}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mt-auto">
                    {project.techs.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-[2px] flex items-center gap-1 rounded-full bg-slate-100 text-[10px] text-slate-700 border border-slate-200 whitespace-nowrap"
                      >
                        {TECH_ICONS[t] && (
                          <Image
                            src={TECH_ICONS[t]}
                            alt={t}
                            width={16}
                            height={16}
                          />
                        )}
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}

          {filteredAndSorted.length === 0 && (
            <p className="text-sm text-slate-500 col-span-full">
              선택한 조건에 해당하는 프로젝트가 아직 없어요.
            </p>
          )}
        </section>
      </section>
    </main>
  );
}
