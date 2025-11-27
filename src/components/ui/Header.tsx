"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-transparent py-4 px-6 flex items-center justify-between">
        <Link
          key={"/"}
          href={"/"}
          className={["relative transition-colors"].join(" ")}
        >
          <Image
            src="/images/logo_white.png"
            alt="logo"
            width={50}
            height={30}
          />
        </Link>

        {/* 데스크톱 메뉴 */}
        <nav className="hidden md:flex items-center gap-8 text-white font-semibold">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "relative transition-colors",
                "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-pink-400 after:transition-all after:duration-300",
                isActive(item.href)
                  ? "text-pink-300 after:w-full"
                  : "hover:text-pink-300 hover:after:w-full",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}
          <Link
            key={"https://github.com/onssu"}
            href={"https://github.com/onssu"}
            onClick={() => setOpen(false)}
            className={["text-lg font-semibold tracking-tight"].join(" ")}
          >
            Github
          </Link>

          <Link
            key={"https://onssu.tistory.com/"}
            href={"https://onssu.tistory.com/"}
            onClick={() => setOpen(false)}
            className={["text-lg font-semibold tracking-tight"].join(" ")}
          >
            Blog
          </Link>
        </nav>

        {/* 모바일 햄버거 버튼 */}
        <button
          className={"md:hidden text-white"}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </header>

      <div
        className={[
          "fixed inset-0 z-60 transition-opacity duration-300",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <button
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        />
        <div
          className={[
            "absolute top-0 right-0 h-full w-3/4 max-w-[260px]",
            "bg-gradient-to-b from-black/95 via-black/90 to-zinc-900",
            "border-l border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.8)]",
            "flex flex-col gap-6 text-white p-6",
            "transform transition-transform duration-500",
            "ease-[cubic-bezier(0.22,0.61,0.36,1)]",
            open ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm uppercase tracking-[0.25em] text-pink-300/80">
              Menu
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="text-white hover:text-pink-300 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-4 mt-2">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={[
                  "text-lg font-semibold tracking-tight",
                  "transition-all duration-300",
                  `delay-[${index * 60}ms]`,
                  isActive(item.href)
                    ? "text-pink-300"
                    : "text-white/90 hover:text-pink-300",
                ].join(" ")}
              >
                {item.label}
              </Link>
            ))}
            <Link
              key={"https://github.com/onssu"}
              href={"https://github.com/onssu"}
              onClick={() => setOpen(false)}
              className={["text-lg font-semibold tracking-tight"].join(" ")}
            >
              Github
            </Link>
            <Link
              key={"https://onssu.tistory.com/"}
              href={"https://onssu.tistory.com/"}
              onClick={() => setOpen(false)}
              className={["text-lg font-semibold tracking-tight"].join(" ")}
            >
              Blog
            </Link>
          </nav>

          <div className="mt-auto text-xs text-slate-400">
            <p>© {new Date().getFullYear()} yurigeem</p>
          </div>
        </div>
      </div>
    </>
  );
}
