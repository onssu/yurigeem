import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
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
    <main className="min-h-screen bg-slate-50 text-slate-800 pt-24 px-6">
      <section className="max-w-4xl mx-auto space-y-10">
        {/* HEADER */}
        <header className="space-y-4">
          <p className="text-sm tracking-[0.2em] uppercase text-sky-500/80">
            Project
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            {project.title}
          </h1>

          <div className="space-y-1 text-sm text-slate-600">
            <p>
              <span className="font-semibold">{project.company}</span>
              {project.client && <span> · {project.client}</span>}
            </p>

            <p>기간: {project.period}</p>
            {project.duration && <p>기간 상세: {project.duration}</p>}
            <p>역할: {project.role}</p>

            {mainContribution && (
              <p>주요 기여도: {mainContribution.contributionPercent}%</p>
            )}
          </div>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2 mt-2">
            {project.techs.map((t) => (
              <span
                key={t}
                className="px-2 py-[2px] rounded-full bg-sky-100 text-[11px] text-sky-700 border border-sky-200"
              >
                {t}
              </span>
            ))}
          </div>
        </header>

        {/* THUMBNAIL */}
        {project.thumbnail && (
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
            <Image
              src={project.thumbnail}
              alt={project.title}
              width={1200}
              height={630}
              className="w-full max-h-[420px] object-cover"
            />
          </div>
        )}

        {/* DESCRIPTION */}
        <section className="space-y-4 text-sm md:text-base text-slate-700 leading-relaxed">
          <p>{project.description}</p>
        </section>

        {/* CONTRIBUTION TABLE */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">기여도</h2>

          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-xs md:text-sm">
              <thead className="bg-sky-50">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">
                    단계
                  </th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">
                    기여도
                  </th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">
                    인원 구성 (기획 / 디자인 / 백엔드 / 프론트)
                  </th>
                </tr>
              </thead>

              <tbody>
                {project.contributions.map((c, idx) => (
                  <tr
                    key={idx}
                    className="border-t border-slate-200 odd:bg-white even:bg-slate-50/70"
                  >
                    <td className="px-3 py-2 text-slate-700">
                      {phaseLabel(c.phase)}
                    </td>
                    <td className="px-3 py-2 text-slate-700">
                      {c.contributionPercent}%
                    </td>
                    <td className="px-3 py-2 text-slate-700">
                      {[
                        c.breakdown.planning ?? 0,
                        c.breakdown.design ?? 0,
                        c.breakdown.backend ?? 0,
                        c.breakdown.frontend ?? 0,
                      ].join(" / ")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </main>
  );
}
