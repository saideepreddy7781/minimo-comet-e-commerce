export default function Home() {
  return (
    <main className="min-h-[calc(100vh-4rem)]">
      {/* Background illustration */}
      <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent_80%)]">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[60rem] w-[60rem] rounded-full bg-[conic-gradient(at_30%_30%,#93c5fd_0deg,#c4b5fd_120deg,#99f6e4_240deg,#93c5fd_360deg)] blur-3xl opacity-30" />
      </div>

      {/* Hero */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-16 md:pt-24 md:pb-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/40 dark:bg-black/30 backdrop-blur px-3 py-1 text-xs shadow-[inset_0_0_1px_0_rgba(255,255,255,0.3),0_12px_40px_-12px_rgba(99,102,241,0.35)]">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(16,185,129,0.25)]" />
          Modern UI Kit
        </div>
        <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
          Design that feels light, soft, and alive
        </h1>
        <p className="mt-5 text-base md:text-lg opacity-80 max-w-2xl mx-auto">
          Build beautiful, responsive interfaces with glassmorphism, soft shadows, and silky hover effects — production ready with Tailwind CSS.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#get-started" className="px-6 h-12 rounded-full bg-foreground text-background shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/15 hover:-translate-y-0.5 transition will-change-transform">
            Get Started
          </a>
          <a href="#features" className="px-6 h-12 rounded-full border border-border/70 bg-background/60 backdrop-blur hover:bg-accent/40 transition">
            Explore Features
          </a>
        </div>
        {/* Illustration */}
        <div className="mt-12">
          <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-white/30 dark:bg-black/30 backdrop-blur-xl overflow-hidden shadow-[inset_0_0_1px_rgba(255,255,255,0.3),0_30px_120px_-40px_rgba(99,102,241,0.45)]">
            <div className="aspect-[16/9] bg-gradient-to-br from-sky-200/50 via-violet-200/50 to-teal-200/50 dark:from-sky-950/40 dark:via-violet-950/40 dark:to-teal-950/40 relative">
              <div className="absolute inset-0 grid grid-cols-6 gap-2 p-6">
                {[...Array(18)].map((_, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-sm shadow-[0_10px_30px_-12px_rgba(37,99,235,0.25)] hover:shadow-[0_18px_50px_-12px_rgba(37,99,235,0.35)] transition duration-300"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 max-w-6xl mx-auto px-6 pb-20 md:pb-28">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Everything you need to ship</h2>
          <p className="mt-2 opacity-70">Reusable components, refined shadows, and a consistent palette.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Glassmorphism", desc: "Translucent surfaces with tasteful blur and inner glow.", icon: (
              <svg viewBox="0 0 24 24" className="h-6 w-6"><path fill="currentColor" d="M5 4h14a1 1 0 0 1 1 1v8.5a4.5 4.5 0 0 1-4.5 4.5H9A5 5 0 0 1 4 13V5a1 1 0 0 1 1-1Z"/></svg>
            )},
            { title: "Soft Shadows", desc: "Neumorphic depth with gentle, layered drop shadows.", icon: (
              <svg viewBox="0 0 24 24" className="h-6 w-6"><path fill="currentColor" d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z"/></svg>
            )},
            { title: "Smooth Hover", desc: "Micro-interactions that feel delightful and responsive.", icon: (
              <svg viewBox="0 0 24 24" className="h-6 w-6"><path fill="currentColor" d="M3 12h18M12 3v18"/></svg>
            )},
            { title: "Responsive", desc: "Looks perfect on phones, tablets, and desktops.", icon: (
              <svg viewBox="0 0 24 24" className="h-6 w-6"><path fill="currentColor" d="M3 6h18v10H3zM7 18h10v2H7z"/></svg>
            )},
          ].map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-white/10 bg-white/30 dark:bg-black/30 backdrop-blur-xl p-5 shadow-[inset_0_0_1px_rgba(255,255,255,0.3),0_20px_80px_-30px_rgba(99,102,241,0.45)] hover:shadow-[inset_0_0_1px_rgba(255,255,255,0.35),0_30px_120px_-30px_rgba(99,102,241,0.55)] transition duration-300 will-change-transform hover:-translate-y-0.5"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400/20 to-violet-400/20 text-foreground shadow-inner">
                {f.icon}
              </div>
              <h3 className="mt-3 font-medium">{f.title}</h3>
              <p className="mt-1 text-sm opacity-70">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative z-10 max-w-6xl mx-auto px-6 pb-20 md:pb-28">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Loved by designers and developers</h2>
          <p className="mt-2 opacity-70">Hear what people say about the experience.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Ava Thompson", role: "Product Designer", quote: "The soft-shadow aesthetic is gorgeous out of the box." },
            { name: "Liam Carter", role: "Frontend Engineer", quote: "Animations feel buttery smooth without extra libraries." },
            { name: "Maya Patel", role: "Founder", quote: "I shipped a polished site in a day. It just works." },
          ].map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-white/10 bg-white/30 dark:bg-black/30 backdrop-blur-xl p-6 shadow-[inset_0_0_1px_rgba(255,255,255,0.3),0_24px_90px_-30px_rgba(99,102,241,0.45)] hover:shadow-[inset_0_0_1px_rgba(255,255,255,0.35),0_36px_140px_-30px_rgba(99,102,241,0.55)] transition duration-300"
            >
              <blockquote className="text-sm opacity-80">"{t.quote}"</blockquote>
              <figcaption className="mt-4">
                <div className="font-medium">{t.name}</div>
                <div className="text-xs opacity-60">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="get-started" className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
        <div className="rounded-2xl border border-white/10 bg-white/30 dark:bg-black/30 backdrop-blur-xl p-8 md:p-12 text-center shadow-[inset_0_0_1px_rgba(255,255,255,0.3),0_30px_120px_-40px_rgba(99,102,241,0.45)]">
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight">Ready to craft something beautiful?</h3>
          <p className="mt-2 opacity-75">Start with our modern, soft-shadow UI patterns and ship today.</p>
          <div className="mt-6">
            <a className="inline-flex items-center justify-center px-6 h-12 rounded-full bg-foreground text-background shadow-lg shadow-black/10 hover:shadow-xl hover:-translate-y-0.5 transition" href="#">
              Build your page
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/60 bg-background/60 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div>
            <div className="text-lg font-semibold">SoftUI</div>
            <div className="text-[10px] tracking-[0.2em] opacity-70">MODERN LANDING</div>
          </div>
          <nav className="flex gap-6 justify-center text-sm">
            <a href="#features" className="opacity-80 hover:opacity-100 transition">Features</a>
            <a href="#" className="opacity-80 hover:opacity-100 transition">Docs</a>
            <a href="#" className="opacity-80 hover:opacity-100 transition">Contact</a>
          </nav>
          <div className="text-sm md:text-right opacity-70">© {new Date().getFullYear()} SoftUI</div>
        </div>
      </footer>
    </main>
  );
}