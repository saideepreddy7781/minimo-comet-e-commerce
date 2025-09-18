"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/components/CartProvider";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 select-none">
      <span className="relative inline-flex h-8 w-8 items-center justify-center">
        <svg viewBox="0 0 64 64" className="h-8 w-8">
          <defs>
            <radialGradient id="grad" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#ffb264" />
              <stop offset="50%" stopColor="#ff7a00" />
              <stop offset="100%" stopColor="#ff5e00" />
            </radialGradient>
          </defs>
          <circle cx="32" cy="32" r="28" fill="url(#grad)" />
          {/* white rabbit ears */}
          <g fill="white">
            <ellipse cx="24" cy="18" rx="5" ry="12" transform="rotate(-15 24 18)" />
            <ellipse cx="40" cy="18" rx="5" ry="12" transform="rotate(15 40 18)" />
            <circle cx="32" cy="34" r="10" />
          </g>
        </svg>
      </span>
      <div className="leading-none">
        <div className="text-lg font-semibold tracking-tight">MINIMO</div>
        <div className="text-[10px] tracking-[0.2em] opacity-70">RETAIL BANGALORE</div>
      </div>
    </Link>
  );
}

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);
  const { toggleCart } = useCart();

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("minimo_theme");
    const prefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = saved ? saved === "dark" : prefers;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("minimo_theme", next ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="opacity-80 hover:opacity-100 transition">Home</Link>
          <Link href="/shop" className="opacity-80 hover:opacity-100 transition">Shop</Link>
          <Link href="/about" className="opacity-80 hover:opacity-100 transition">About</Link>
          <Link href="/contact" className="opacity-80 hover:opacity-100 transition">Contact</Link>
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-border/70 bg-background/60 shadow-sm hover:bg-accent/40 transition"
          >
            {mounted && dark ? (
              <span className="i-[moon]">🌙</span>
            ) : (
              <span className="i-[sun]">☀️</span>
            )}
          </button>
          <button
            onClick={toggleCart}
            className="inline-flex items-center justify-center h-9 px-3 rounded-full border border-border/70 bg-background/60 shadow-sm hover:bg-accent/40 transition"
          >
            Cart
          </button>
        </div>
      </div>
    </header>
  );
}