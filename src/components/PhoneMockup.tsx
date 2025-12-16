// components/PhoneMockupScroll.tsx
"use client";

import Image from "next/image";

type PhoneMockupScrollProps = {
  src: string; // 세로로 긴 앱 캡처(스크롤용)
  alt: string;
  priority?: boolean;
  className?: string;
  /** 화면(보이는 영역) 높이 - 취향대로 조절 */
  viewportHeight?: number; // px
};

export default function PhoneMockupScroll({
  src,
  alt,
  priority,
  className = "",
  viewportHeight = 560,
}: PhoneMockupScrollProps) {
  return (
    <div
      className={["relative mx-auto w-full max-w-[420px]", className].join(" ")}
    >
      <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[36px] bg-gradient-to-b from-sky-200/40 via-indigo-200/20 to-transparent blur-2xl" />

      <div className="rounded-3xl border border-slate-200 bg-white shadow-[0_18px_50px_-30px_rgba(2,132,199,.45)]">
        <div className="relative mx-auto my-6 w-[78%] min-w-[260px] max-w-[320px]">
          <div className="relative rounded-[36px] bg-slate-950 p-[10px] shadow-[0_22px_60px_-30px_rgba(0,0,0,.55)]">
            <div className="pointer-events-none absolute inset-0 rounded-[36px] ring-1 ring-white/10" />

            {/* side buttons */}
            <div className="pointer-events-none absolute -left-[3px] top-[78px] h-10 w-[3px] rounded-full bg-slate-700/80" />
            <div className="pointer-events-none absolute -left-[3px] top-[124px] h-14 w-[3px] rounded-full bg-slate-700/80" />
            <div className="pointer-events-none absolute -right-[3px] top-[108px] h-16 w-[3px] rounded-full bg-slate-700/80" />

            {/* screen */}
            <div className="relative overflow-hidden rounded-[28px] bg-white">
              {/* notch */}
              <div className="pointer-events-none absolute left-1/2 top-2 z-20 h-6 w-32 -translate-x-1/2 rounded-full bg-slate-950/95 ring-1 ring-white/10" />
              <div className="pointer-events-none absolute left-1/2 top-[14px] z-30 h-[6px] w-[6px] translate-x-[54px] rounded-full bg-slate-600" />

              {/* ✅ scroll viewport */}
              <div
                className="relative z-10 overflow-y-auto overscroll-contain"
                style={{ height: viewportHeight }}
              >
                {/* iOS-like scrollbars (optional) */}
                <div className="relative w-full">
                  {/* 이미지가 길어야 스크롤이 생깁니다 */}
                  <Image
                    src={src}
                    alt={alt}
                    width={900}
                    height={2400}
                    priority={priority}
                    className="h-auto w-full select-none"
                    draggable={false}
                  />
                </div>
              </div>

              {/* screen gloss */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10" />
            </div>
          </div>

          <div className="pointer-events-none absolute -bottom-6 left-1/2 h-10 w-[92%] -translate-x-1/2 rounded-full bg-slate-900/10 blur-xl" />
        </div>
      </div>

      {/* 스크롤바 살짝 예쁘게(웹킷) */}
      <style jsx global>{`
        /* 스크롤 영역에만 적용하려면 className으로 범위 좁혀도 됩니다 */
        .phone-scroll::-webkit-scrollbar {
          width: 8px;
        }
        .phone-scroll::-webkit-scrollbar-thumb {
          background: rgba(15, 23, 42, 0.25);
          border-radius: 999px;
          border: 2px solid rgba(255, 255, 255, 0.6);
        }
      `}</style>
    </div>
  );
}
