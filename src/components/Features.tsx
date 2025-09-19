// src/components/Features.tsx
export const Features = () => {
  return (
    <section id="features" className="relative z-10 max-w-6xl mx-auto px-6 pb-20 md:pb-28">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Everything you need, all in one place</h2>
        <p className="mt-2 opacity-70">From toys to trending products, cosmetics to daily essentials—discover our diverse collection.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "Toys & Games",
            desc: "Fun and engaging toys for kids of all ages, from educational to entertainment.",
            icon: (
              <svg viewBox="0 0 24 24" className="h-6 w-6"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            )
          },
          {
            title: "Viral Products",
            desc: "Trending items and viral products that everyone's talking about.",
            icon: (
              <svg viewBox="0 0 24 24" className="h-6 w-6"><path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            )
          },
          {
            title: "Beauty & Cosmetics",
            desc: "Quality cosmetics and beauty products for your daily routine.",
            icon: (
              <svg viewBox="0 0 24 24" className="h-6 w-6"><path fill="currentColor" d="M9 11H7v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9h-2m1-4V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3M9 7h6"/></svg>
            )
          },
          {
            title: "Home & Lifestyle",
            desc: "Décor, bags, stationery, and daily essentials for modern living.",
            icon: (
              <svg viewBox="0 0 24 24" className="h-6 w-6"><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
            )
          },
        ].map((f) => (
          <div
            key={f.title}
            className="group rounded-2xl border border-white/10 bg-white/30 dark:bg-black/30 backdrop-blur-xl p-5 shadow-[inset_0_0_1px_rgba(255,255,255,0.3),0_20px_80px_-30px_rgba(255,215,0,0.45)] hover:shadow-[inset_0_0_1px_rgba(255,255,255,0.35),0_30px_120px_-30px_rgba(255,215,0,0.55)] transition duration-300 will-change-transform hover:-translate-y-0.5"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFD700]/20 to-[#FFEB3B]/20 text-foreground shadow-inner">
              {f.icon}
            </div>
            <h3 className="mt-3 font-medium">{f.title}</h3>
            <p className="mt-1 text-sm opacity-70">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
