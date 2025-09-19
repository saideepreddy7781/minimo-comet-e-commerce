// src/components/SiteFooter.tsx
export const SiteFooter = () => {
  return (
    <footer className="relative z-10 border-t border-border/60 bg-background/60 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div>
          <div className="text-lg font-semibold">MINIMO</div>
          <div className="text-[10px] tracking-[0.2em] opacity-70">RETAIL BANGALORE</div>
          <p className="mt-2 text-xs opacity-70">582, 10th Main Road, ISRO Layout, Bengaluru, Karnataka, 560076</p>
        </div>
        <nav className="flex gap-6 justify-center text-sm">
          <a href="#" className="opacity-80 hover:opacity-100 transition">Home</a>
          <a href="#about" className="opacity-80 hover:opacity-100 transition">About</a>
          <a href="#contact" className="opacity-80 hover:opacity-100 transition">Contact</a>
        </nav>
        <div className="text-sm md:text-right opacity-70">© {new Date().getFullYear()} MINIMO</div>
      </div>
    </footer>
  );
};
