// src/components/Hero.tsx
export const Hero = () => {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-16 md:pt-24 md:pb-24 text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/40 dark:bg-black/30 backdrop-blur px-3 py-1 text-xs shadow-[inset_0_0_1px_0_rgba(255,255,255,0.3),0_12px_40px_-12px_rgba(255,215,0,0.35)] mx-auto">
        <span className="h-2 w-2 rounded-full bg-[#FFD700] shadow-[0_0_0_3px_rgba(255,215,0,0.25)]" />
        MINIMO — RETAIL BANGALORE
      </div>
      <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-center">
        Your one-stop shop in Bangalore
      </h1>
      <p className="mt-5 text-base md:text-lg opacity-80 max-w-2xl mx-auto text-center">
        Minimo Retail is a one-stop shop offering toys, trending viral products, cosmetics, home décor items, ladies' handbags, stationery, and daily essentials—all at the lowest prices in Bangalore.
      </p>
      <div className="mt-8 flex items-center justify-center gap-3">
        <a href="/shop" className="inline-flex items-center justify-center px-6 h-12 rounded-full bg-foreground text-background shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/15 hover:-translate-y-0.5 transition will-change-transform">
          Shop Collection
        </a>
        <a href="#features" className="inline-flex items-center justify-center px-6 h-12 rounded-full border border-border/70 bg-background/60 backdrop-blur hover:bg-accent/40 transition">
          Explore Features
        </a>
      </div>
    </section>
  );
};
