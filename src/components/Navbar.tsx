// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setMounted(true);
    const saved = (typeof window !== "undefined" && localStorage.getItem("minimo_theme")) as
      | "light"
      | "dark"
      | null;
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const next = saved ?? (prefersDark ? "dark" : "light");
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (typeof window !== "undefined") {
      localStorage.setItem("minimo_theme", next);
    }
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/40 dark:bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-white/30 
          shadow-[inset_0_0_1px_rgba(255,255,255,0.35),0_20px_60px_-20px_rgba(255,149,0,0.45)]">
          <nav className="flex items-center justify-between px-4 sm:px-6 h-14">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <span className="relative inline-flex h-7 w-7 items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-[#FF9500] shadow-[0_8px_20px_-8px_rgba(255,149,0,0.6)]" />
                <span className="relative flex gap-1">
                  <span className="h-4 w-2 rounded-full bg-white translate-y-[1px] rotate-[-6deg]" />
                  <span className="h-4 w-2 rounded-full bg-white translate-y-[1px] rotate-[6deg]" />
                </span>
              </span>
              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-wide">MINIMO</div>
                <div className="text-[10px] tracking-[0.22em] opacity-70">RETAIL BANGALORE</div>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/" className="opacity-80 hover:opacity-100 transition">Home</Link>
              <Link href="/about" className="opacity-80 hover:opacity-100 transition">About</Link>
              <Link href="/contact" className="opacity-80 hover:opacity-100 transition">Contact</Link>
            </div>

            <div className="flex items-center gap-2">
              <Link href="https://www.facebook.com/share/16s9TDbrp4/" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full border border-border/70 bg-background/70 hover:bg-accent/40 transition grid place-items-center">
                <FaFacebook className="h-4 w-4 text-foreground" />
              </Link>
              <Link href="https://www.instagram.com/minimoretail?igsh=MXcweWE0emgxYW0=" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full border border-border/70 bg-background/70 hover:bg-accent/40 transition grid place-items-center">
                <FaInstagram className="h-4 w-4 text-foreground" />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
