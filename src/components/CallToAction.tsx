export const CallToAction = () => {
  return (
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
  );
};