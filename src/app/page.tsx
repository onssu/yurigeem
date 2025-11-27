"use client";

import MobileEmojiField from "@/components/MobileEmojiField";
import PCEmojiField from "@/components/PCEmojiField";

export default function HomePage() {
  return (
    <div className="w-full h-screen bg-[#050509]">
      {/* PC 전용 */}
      <div className="hidden md:block">
        <PCEmojiField />
      </div>

      {/* 모바일 전용 */}
      <div className="block md:hidden">
        <MobileEmojiField />
      </div>
    </div>
  );
}
