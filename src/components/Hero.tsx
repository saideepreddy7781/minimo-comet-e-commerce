// src/components/Hero.tsx
export const Hero = () => {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-16 md:pt-24 md:pb-24 text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/40 dark:bg-black/30 backdrop-blur px-3 py-1 text-xs shadow-[inset_0_0_1px_0_rgba(255,255,255,0.3),0_12px_40px_-12px_rgba(255,149,0,0.35)]">
        <span className="h-2 w-2 rounded-full bg-[#FF9500] shadow-[0_0_0_3px_rgba(255,149,0,0.25)]" />
        MINIMO — RETAIL BANGALORE
      </div>
      <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
        Minimal retail. Maximum vibe.
      </h1>
      <p className="mt-5 text-base md:text-lg opacity-80 max-w-2xl mx-auto">
        Curated essentials with a clean, modern aesthetic. Discover everyday pieces designed for comfort, clarity, and effortless style.
      </p>
      <div className="mt-8 flex items-center justify-center gap-3">
        <a href="#about" className="px-6 h-12 rounded-full bg-foreground text-background shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/15 hover:-translate-y-0.5 transition will-change-transform">
          Learn More
        </a>
        <a href="#contact" className="px-6 h-12 rounded-full border border-border/70 bg-background/60 backdrop-blur hover:bg-accent/40 transition">
          Contact Us
        </a>
      </div>
      <div className="mt-12">
        <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-white/30 dark:bg-black/30 backdrop-blur-xl overflow-hidden shadow-[inset_0_0_1px_rgba(255,255,255,0.3),0_30px_120px_-40px_rgba(255,149,0,0.45)]">
          <div className="aspect-[16/9] bg-gradient-to-br from-sky-200/50 via-violet-200/50 to-teal-200/50 dark:from-sky-950/40 dark:via-violet-950/40 dark:to-teal-950/40 relative">
            <div className="absolute inset-0 grid grid-cols-6 gap-2 p-6">
              {[...Array(18)].map((_, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-sm shadow-[0_10px_30px_-12px_rgba(255,149,0,0.25)] hover:shadow-[0_18px_50px_-12px_rgba(255,149,0,0.35)] transition duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
