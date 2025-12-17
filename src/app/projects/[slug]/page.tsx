import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import PhoneMockup from "@/components/PhoneMockup";
import { CompanyBadge } from "@/components/CompanyLogo";

type Props = {
  params: Promise<{ slug: string }>;
};

export const TECH_ICONS: Record<string, string> = {
  React: "/logo/React.png",
  "Vue 2": "/logo/Vue.png",
  "Vue 3": "/logo/Vue.png",
  Flutter: "/logo/Flutter.png",
};

const phaseLabel = (phase: string) => {
  switch (phase) {
    case "overall":
      return "전체";
    case "planning":
      return "기획";
    case "design":
      return "디자인";
    case "development":
      return "개발";
    case "operation":
      return "운영/유지보수";
    case "build":
      return "구축";
    case "maintenance":
      return "운영/유지보수";
    default:
      return phase;
  }
};

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const mainContribution =
    project.contributions.find((c) => c.phase === "overall") ??
    project.contributions[0];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 py-24 px-4 md:px-6">
      <section className="max-w-4xl mx-auto space-y-8">
        {/* ========== 1. HEADER CARD ========== */}
        <header className="rounded-3xl border border-slate-200 bg-white/80 shadow-sm p-5 md:p-7 space-y-4">
          {/* 상단: 제목 + 회사/기간 + (선택) 주요 기여도 요약 */}
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="space-y-3">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-sky-500">
                Project
              </p>

              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                {project.title}
              </h1>

              <div className="space-y-1 text-sm md:text-md text-slate-600">
                <CompanyBadge company={project.company} />
                <p className="text-slate-500 mt-1">{project.description}</p>

                <p className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-[3px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-[11px] md:text-xs text-slate-700">
                      {project.period}
                      {project.duration && (
                        <span className="pl-1 text-slate-400">
                          ({project.duration})
                        </span>
                      )}
                    </span>
                  </span>
                </p>
              </div>
            </div>

            {/* 우측: 주요 기여도 요약 (있을 때만) */}
            {/* {mainContribution && (
              <div className="flex flex-col items-start md:items-end gap-2 text-[11px] md:text-xs text-slate-600">
                <span className="inline-flex items-center gap-1 rounded-full bg-sky-50 px-3 py-1 text-[11px] font-medium text-sky-700 border border-sky-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                  주요 기여도{" "}
                  <span className="font-semibold text-sky-800">
                    {mainContribution.contributionPercent}%
                  </span>
                </span>
                {mainContribution.breakdown && (
                  <span className="text-[11px] text-slate-500">
                    인원 구성 (기획 / 디자인 / 백엔드 / 프론트){" "}
                    <span className="font-medium text-slate-700">
                      {[
                        mainContribution.breakdown.planning ?? 0,
                        mainContribution.breakdown.design ?? 0,
                        mainContribution.breakdown.backend ?? 0,
                        mainContribution.breakdown.frontend ?? 0,
                      ].join(" / ")}
                    </span>
                  </span>
                )}
              </div>
            )} */}
          </div>

          {/* Tech 스택 */}
          <div className="flex flex-wrap gap-1.5">
            {project.techs.map((t) => (
              <span
                key={t}
                className="flex items-center gap-1.5 px-2.5 py-[5px] rounded-full
                   bg-sky-50 text-[13px] text-sky-800 border border-sky-100"
              >
                {TECH_ICONS[t] && (
                  <Image
                    src={TECH_ICONS[t]}
                    alt={t}
                    width={16}
                    height={16}
                    className="inline-block"
                  />
                )}
                {t}
              </span>
            ))}
          </div>

          {/* 플랫폼 링크: 톤 낮게, 보조 정보 느낌으로 */}
          {project.links && (
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-[11px] font-medium text-slate-500">
                배포 링크
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.links.web && (
                  <a
                    href={project.links.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-[4px] rounded-full
                       border border-slate-200 text-[11px] text-slate-600
                       hover:bg-slate-50 hover:text-slate-800 transition"
                  >
                    🌐 Web
                  </a>
                )}
                {project.links.android && (
                  <a
                    href={project.links.android}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-[4px] rounded-full
                       border border-slate-200 text-[11px] text-slate-600
                       hover:bg-slate-50 hover:text-slate-800 transition"
                  >
                    🤖 Android
                  </a>
                )}
                {project.links.ios && (
                  <a
                    href={project.links.ios}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-[4px] rounded-full
                       border border-slate-200 text-[11px] text-slate-600
                       hover:bg-slate-50 hover:text-slate-800 transition"
                  >
                    🍎 iOS
                  </a>
                )}
              </div>
            </div>
          )}

          {/* 기여도 테이블 */}
          <div className="space-y-3">
            <h2 className="text-md font-semibold text-slate-900">
              기여도 & 팀 구성
            </h2>

            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-slate-50/60">
              <table className="w-full text-xs md:text-sm">
                <thead className="bg-sky-50">
                  <tr>
                    <th className="px-3 py-1 text-left font-semibold text-slate-700">
                      단계
                    </th>
                    <th className="px-3 py-1 text-left font-semibold text-slate-700">
                      인원 구성 (기획 / 디자인 / 백엔드 / 프론트)
                    </th>
                    <th className="px-3 py-1 text-left font-semibold text-slate-700">
                      기여도
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {project.contributions.map((c, idx) => (
                    <tr
                      key={idx}
                      className="border-t border-slate-200 odd:bg-white even:bg-slate-50/70"
                    >
                      <td className="px-3 py-1 text-slate-700">
                        {phaseLabel(c.phase)}
                      </td>
                      <td className="px-3 py-1 text-slate-700">
                        {[
                          c.breakdown.planning ?? 0,
                          c.breakdown.design ?? 0,
                          c.breakdown.backend ?? 0,
                          c.breakdown.frontend ?? 0,
                        ].join(" / ")}
                      </td>
                      <td className="px-3 py-1 text-slate-700">
                        {c.contributionPercent}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </header>

        {/* ========== 2. 기여도 + 주요 성과 카드 ========== */}
        <section className="rounded-3xl border border-slate-200 bg-white shadow-sm p-5 md:p-7 space-y-6">
          {/* 주요 성과 리스트 */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-md font-semibold text-slate-900">
                주요 성과
              </h2>

              <ul className="mt-2 space-y-3">
                {project.highlights.map((h, idx) => (
                  <li key={idx} className="flex gap-3">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0" />
                    <div className="space-y-1">
                      <p className="text-[14px] md:text-sm font-semibold text-slate-900">
                        {h.title}
                      </p>
                      {h.body.map((line, i) => (
                        <p
                          key={i}
                          className="text-[12px] md:text-[14px] text-slate-700 leading-relaxed"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* ========== 3. 썸네일 카드 ========== */}
        {project.thumbnail && (
          <section>
            <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="block w-full h-auto"
              />
            </div>
          </section>
        )}
        {/* <PhoneMockup
          src={project.thumbnail!}
          alt={project.title}
          className="block w-full h-auto"
        /> */}
      </section>
    </main>
  );
}
