import Image from "next/image";

export const COMPANY_LOGOS: Record<string, string> = {
  "(주)엑스티": "/logo/company/xt.png",
  한화시스템: "/logo/company/hanwha.png",
  아워홈: "/logo/company/ourhome.png",
  SK텔링크: "/logo/company/sktelink.png",
  농심: "/logo/company/nongshim.png",
  미디어윌: "/logo/company/mediawill.png",
};

export function CompanyBadge({ company }: { company: string }) {
  const logoSrc = COMPANY_LOGOS[company];

  return (
    <div className="flex items-center gap-2">
      {logoSrc ? (
        <span className="relative h-4 w-4 overflow-hidden rounded-sm bg-white">
          <Image
            src={logoSrc}
            alt={`${company} 로고`}
            fill
            className="object-contain"
            sizes="16px"
          />
        </span>
      ) : null}

      <p className="text-xs text-slate-500">{company}</p>
    </div>
  );
}
