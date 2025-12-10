"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
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
        <Link href="/" className="relative transition-colors">
          <Image
            src="/images/logo_black.png"
            alt="logo"
            width={50}
            height={30}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-black font-semibold">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "relative transition-colors",
                "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-sky-400 after:transition-all after:duration-300",
                isActive(item.href)
                  ? "text-sky-500 after:w-full"
                  : "hover:text-sky-500 hover:after:w-full",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}

          {/* GitHub */}
          <Link
            href="https://github.com/onssu"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-start gap-1 text-lg font-semibold tracking-tight hover:text-sky-500 transition-colors"
          >
            Github
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 mt-1"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </Link>

          {/* Blog */}
          <Link
            href="https://onssu.tistory.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-start gap-1 text-lg font-semibold tracking-tight hover:text-sky-500 transition-colors"
          >
            Blog
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 mt-1"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
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
            "bg-gradient-to-b from-white via-white/70 to-zinc-100",
            "border-l border-black/10 shadow-[0_0_40px_rgba(0,0,0,0.8)]",
            "flex flex-col gap-6 text-black p-6",
            "transform transition-transform duration-500",
            "ease-[cubic-bezier(0.22,0.61,0.36,1)]",
            open ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm uppercase tracking-[0.25em] text-sky-400/80">
              Menu
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="text-black hover:text-sky-400 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Nav */}
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
                    ? "text-sky-500"
                    : "text-black/90 hover:text-sky-500",
                ].join(" ")}
              >
                {item.label}
              </Link>
            ))}

            {/* GitHub */}
            <Link
              href="https://github.com/onssu"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-start gap-1 text-lg font-semibold tracking-tight hover:text-sky-500 transition-colors"
            >
              Github
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 mt-1"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </Link>

            {/* Blog */}
            <Link
              href="https://onssu.tistory.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-start gap-1 text-lg font-semibold tracking-tight hover:text-sky-500 transition-colors"
            >
              Blog
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 mt-1"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
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
