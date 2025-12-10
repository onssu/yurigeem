"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { projects, TechStack } from "@/data/projects";

type FilterValue = TechStack | "ALL";

export default function PortfolioPage() {
  const [selected, setSelected] = useState<FilterValue>("ALL");

  const allTechs = useMemo<TechStack[]>(() => {
    const set = new Set<TechStack>();
    projects.forEach((p) => p.techs.forEach((t) => set.add(t)));
    return Array.from(set);
  }, []);

  const filtered = useMemo(() => {
    if (selected === "ALL") return projects;
    return projects.filter((p) => p.techs.includes(selected));
  }, [selected]);

  return (
    <main className="min-h-screen pt-24 px-6 bg-slate-50">
      <section className="max-w-6xl mx-auto space-y-10">
        <header className="space-y-3">
          <p className="text-sm tracking-[0.2em] uppercase text-sky-500/80">
            Projects
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            유리의 프로젝트들
          </h1>
          <p className="text-sm md:text-base text-slate-600">
            사용한 기술 스택을 클릭하여 필터링이 가능합니다.
          </p>
        </header>

        {/* 카드 리스트 */}
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => {
            const mainContribution =
              project.contributions.find((c) => c.phase === "overall") ??
              project.contributions[0];

            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-md hover:border-sky-300 hover:bg-sky-50/40 transition-all"
              >
                {/* 썸네일 */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  {project.thumbnail ? (
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xs text-slate-400">
                      No image
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* 내용 */}
                <div className="p-4 flex flex-col gap-3 flex-1">
                  <div className="flex flex-col gap-1">
                    <h2 className="text-base md:text-lg font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-xs text-slate-500">
                      {project.company}
                      {project.client ? ` · ${project.client}` : ""}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span>{project.period}</span>
                    {mainContribution && (
                      <span>
                        기여도 {mainContribution.contributionPercent}%
                      </span>
                    )}
                  </div>

                  <p className="text-xs md:text-sm text-slate-600 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mt-auto">
                    {project.techs.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-[2px] rounded-full bg-slate-100 text-[10px] text-slate-700 border border-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}

          {filtered.length === 0 && (
            <p className="text-sm text-slate-500 col-span-full">
              선택한 스택으로 등록된 프로젝트가 아직 없어요.
            </p>
          )}
        </section>
      </section>
    </main>
  );
}
