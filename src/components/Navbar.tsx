"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/components/CartProvider";

export default function Navbar() {
  const { openCart, items } = useCart();
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setMounted(true);
    // initialize theme from localStorage or system
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

  const count = items.reduce((s, i) => s + i.qty, 0);

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/40 dark:bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-white/30 
          shadow-[inset_0_0_1px_rgba(255,255,255,0.35),0_20px_60px_-20px_rgba(99,102,241,0.45)]">
          <nav className="flex items-center justify-between px-4 sm:px-6 h-14">
            <Link href="/" className="inline-flex items-center gap-3 group">
              {/* Logo: white rabbit ears on orange circle */}
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
              <Link href="/shop" className="opacity-80 hover:opacity-100 transition">Shop</Link>
              <Link href="/about" className="opacity-80 hover:opacity-100 transition">About</Link>
              <Link href="/contact" className="opacity-80 hover:opacity-100 transition">Contact</Link>
            </div>

            <div className="flex items-center gap-2">
              {/* Dark mode toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                className="h-9 w-9 rounded-full border border-border/70 bg-background/70 hover:bg-accent/40 transition grid place-items-center"
              >
                {mounted && theme === "dark" ? (
                  <span className="i-lucide-moon h-4 w-4">🌙</span>
                ) : (
                  <span className="i-lucide-sun h-4 w-4">☀️</span>
                )}
              </button>

              {/* Cart */}
              <button
                onClick={openCart}
                className="relative h-9 px-3 rounded-full border border-border/70 bg-background/70 hover:bg-accent/40 transition"
              >
                <span className="pr-1">Cart</span>
                {count > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-[#FF9500] text-white text-[10px] grid place-items-center shadow-[0_8px_20px_-8px_rgba(255,149,0,0.8)]">
                    {count}
                  </span>
                )}
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}