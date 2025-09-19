import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/40 dark:bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-white/30 
          shadow-[inset_0_0_1px_rgba(255,255,255,0.35),0_20px_60px_-20px_rgba(99,102,241,0.45)]">
          <nav className="flex items-center justify-between px-4 sm:px-6 h-14">
            <Link href="#" className="inline-flex items-center gap-2 group">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.25)] group-hover:scale-110 transition" />
              <span className="text-sm font-semibold">SoftUI</span>
            </Link>

            <div className="hidden md:flex items-center gap-6 text-sm">
              <a href="#features" className="opacity-80 hover:opacity-100 transition">Features</a>
              <a href="#testimonials" className="opacity-80 hover:opacity-100 transition">Testimonials</a>
              <a href="#get-started" className="opacity-80 hover:opacity-100 transition">Get Started</a>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="#get-started"
                className="px-4 h-9 rounded-full bg-foreground text-background text-sm shadow-lg shadow-black/10 hover:shadow-xl hover:-translate-y-0.5 transition will-change-transform"
              >
                Try Now
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}