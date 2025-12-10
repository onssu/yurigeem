export default function LifeTimeline() {
  const baseYear = 2012;
  const currentYear = new Date().getFullYear();

  // --- PC 계산 방식 ---
  const endYear = currentYear;
  const totalYears = endYear - baseYear + 1;

  const toLeft = (year: number) => ((year - baseYear) / totalYears) * 100;
  const toWidth = (startYear: number, endYearExclusive: number) =>
    ((endYearExclusive - startYear) / totalYears) * 100;

  return (
    <div className="mt-12 w-full border-t border-slate-200 pt-4">
      <h3 className="text-sm font-semibold text-slate-700 mb-3">Timeline</h3>

      {/* ----------------------------------------------------- */}
      {/* 📌 PC VERSION (absolute timeline) */}
      {/* ----------------------------------------------------- */}
      <div className="relative h-24 w-full hidden md:block">
        {/* baseline */}
        <div className="absolute left-0 right-0 top-1/2 border-t border-slate-300" />

        {/* 고등학교 */}
        <div
          className="absolute top-[45%] h-5 bg-sky-200 rounded-sm"
          style={{
            left: `${toLeft(2012)}%`,
            width: `${toWidth(2012, 2015)}%`,
          }}
        >
          <span className="absolute -top-5 left-1 text-[11px] font-semibold text-sky-800 whitespace-nowrap">
            진해여자고등학교
          </span>
        </div>

        {/* 대학교 */}
        <div
          className="absolute top-[45%] h-5 bg-sky-300 rounded-sm"
          style={{
            left: `${toLeft(2015)}%`,
            width: `${toWidth(2015, 2020)}%`,
          }}
        >
          <span className="absolute -top-5 left-1 text-[11px] font-semibold text-sky-900 whitespace-nowrap">
            동아대학교
          </span>
        </div>

        {/* 해외거주 */}
        <div
          className="absolute top-[45%] h-5 bg-amber-400 rounded-sm"
          style={{
            left: `${toLeft(2018)}%`,
            width: `${toWidth(2018, 2019)}%`,
          }}
        >
          <span className="absolute -top-5 left-1 text-[11px] font-semibold text-amber-800 whitespace-nowrap">
            ✈️ 해외거주
          </span>
        </div>

        {/* 자격증 */}
        <div
          className="absolute top-[40%] flex flex-col items-center"
          style={{ left: `${toLeft(2020)}%` }}
        >
          <div className="w-px h-7 bg-indigo-300" />
          <span className="mt-1 text-[11px] text-indigo-600 font-semibold whitespace-nowrap">
            📁 자격증 1건
          </span>
        </div>

        {/* 엑스티 */}
        <div
          className="absolute top-[45%] h-5 bg-emerald-400 rounded-sm"
          style={{
            left: `${toLeft(2021)}%`,
            width: `${toWidth(2021, 2025)}%`,
          }}
        >
          <span className="absolute -top-5 left-1 text-[11px] font-semibold text-emerald-900 whitespace-nowrap">
            엑스티
          </span>
        </div>
      </div>

      {/* Year labels for PC */}
      <div className="mt-2 hidden md:flex justify-between text-[11px] text-slate-500">
        {Array.from({ length: totalYears }).map((_, idx) => {
          const year = baseYear + idx;
          return <span key={year}>{String(year).slice(2)}</span>;
        })}
      </div>

      {/* ----------------------------------------------------- */}
      {/* 📱 MOBILE VERSION (2줄 GRID) */}
      {/* ----------------------------------------------------- */}
      <div className="md:hidden mt-4 grid grid-cols-2 gap-3 text-sm">
        <div className="flex flex-col">
          <span className="font-semibold text-sky-600">고등학교</span>
          <span className="text-xs text-slate-600">2012 ~ 2015</span>
        </div>

        <div className="flex flex-col">
          <span className="font-semibold text-sky-700">대학교</span>
          <span className="text-xs text-slate-600">2015 ~ 2020</span>
        </div>

        <div className="flex flex-col">
          <span className="font-semibold text-amber-700">✈ 해외거주</span>
          <span className="text-xs text-slate-600">2018 ~ 2019</span>
        </div>

        <div className="flex flex-col">
          <span className="font-semibold text-indigo-700">📁 자격증 1건</span>
          <span className="text-xs text-slate-600">2020</span>
        </div>

        <div className="flex flex-col col-span-2">
          <span className="font-semibold text-emerald-700">직 엑스티</span>
          <span className="text-xs text-slate-600">2021 ~ 현재</span>
        </div>
      </div>
    </div>
  );
}
