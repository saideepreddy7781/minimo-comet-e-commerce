"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Stars, OrbitControls } from "@react-three/drei";
import { useEffect, useMemo, useState } from "react";
import { products } from "@/lib/products";
import { useCart } from "@/components/CartProvider";

function Planet() {
  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.8}>
      <mesh>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshStandardMaterial color="#7aa2ff" metalness={0.2} roughness={0.3} />
      </mesh>
      {/* ring */}
      <mesh rotation={[Math.PI / 2.8, 0, 0]}>
        <torusGeometry args={[2.1, 0.04, 32, 128]} />
        <meshStandardMaterial color="#e60023" emissive="#e60023" emissiveIntensity={0.3} />
      </mesh>
    </Float>
  );
}

function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <Stars radius={80} depth={60} count={1000} factor={4} saturation={0} fade speed={0.6} />
        <Planet />
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
    </div>
  );
}

function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/30 dark:bg-black/30 backdrop-blur-xl shadow-[0_0_1px_0_rgba(255,255,255,0.3)_inset,0_20px_80px_-20px_rgba(99,102,241,0.35)] ${className}`}>
      {children}
    </div>
  );
}

function useOnboarding() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const done = localStorage.getItem("minimo_onboarded");
    setShow(!done);
  }, []);
  const complete = () => {
    localStorage.setItem("minimo_onboarded", "1");
    setShow(false);
  };
  return { show, complete };
}

function OnboardingSlide({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <GlassCard className="p-6 md:p-8 w-[min(90vw,680px)]">
      <div className="relative h-[280px] md:h-[340px] rounded-xl overflow-hidden">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[3, 5, 5]} intensity={1.1} />
          <Stars radius={60} depth={40} count={600} factor={3} fade speed={0.7} />
          <Float speed={2} rotationIntensity={1} floatIntensity={0.9}>
            <mesh rotation={[0.2, 0.2, 0]}>
              <icosahedronGeometry args={[1.2, 0]} />
              <meshStandardMaterial color="#a78bfa" roughness={0.2} metalness={0.6} />
            </mesh>
          </Float>
        </Canvas>
      </div>
      <div className="mt-5">
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight">{title}</h3>
        <p className="text-sm md:text-base opacity-80 mt-1">{subtitle}</p>
      </div>
    </GlassCard>
  );
}

function OnboardingModal({ onDone }: { onDone: () => void }) {
  const [index, setIndex] = useState(0);
  const slides = useMemo(
    () => [
      { title: "Welcome to MINIMO", subtitle: "Futuristic retail with comet-inspired UI and micro-motion." },
      { title: "Immersive 3D", subtitle: "Explore orbiting visuals, starfields and floating products." },
      { title: "Seamless Shopping", subtitle: "Glassmorphic cart and lightning-fast checkout." },
    ],
    []
  );

  const next = () => setIndex((i) => Math.min(i + 1, slides.length - 1));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const done = () => onDone();

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-[radial-gradient(60%_60%_at_50%_50%,rgba(255,255,255,0.8),transparent_70%)] dark:bg-[radial-gradient(60%_60%_at_50%_50%,rgba(0,0,0,0.8),transparent_70%)] p-4">
      <div className="relative">
        <OnboardingSlide key={index} title={slides[index].title} subtitle={slides[index].subtitle} />
        <div className="mt-4 flex items-center justify-between">
          <button onClick={prev} disabled={index === 0} className="px-4 h-10 rounded-full border border-border/70 bg-background/60 disabled:opacity-40">Back</button>
          {index < slides.length - 1 ? (
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {slides.map((_, i) => (
                  <span key={i} className={`h-1.5 w-6 rounded-full ${i === index ? "bg-foreground/80" : "bg-foreground/20"}`} />
                ))}
              </div>
              <button onClick={next} className="px-5 h-10 rounded-full border border-transparent bg-foreground text-background hover:opacity-90 transition">Next</button>
            </div>
          ) : (
            <button onClick={done} className="px-5 h-10 rounded-full border border-transparent bg-foreground text-background hover:opacity-90 transition">Start exploring</button>
          )}
        </div>
        <button onClick={done} className="absolute -top-2 -right-2 h-9 w-9 rounded-full border border-border/70 bg-background/70">✕</button>
      </div>
    </div>
  );
}

export default function Home() {
  const { show, complete } = useOnboarding();
  const { add } = useCart();

  // Tabs: New Arrivals / Best Sellers
  const [tab, setTab] = useState<"new" | "best">("new");
  const newProducts = useMemo(() => products.slice(0, 3), []);
  const bestProducts = useMemo(() => products.slice(3), []);
  const display = tab === "new" ? newProducts : bestProducts;

  // Hero slider (simple auto-play)
  const [slide, setSlide] = useState(0);
  const slides = useMemo(() => [products[0]?.image, products[1]?.image, products[2]?.image].filter(Boolean) as string[], []);
  useEffect(() => {
    if (!slides.length) return;
    const id = setInterval(() => setSlide((s) => (s + 1) % slides.length), 4000);
    return () => clearInterval(id);
  }, [slides.length]);

  // Category tiles (derive cover per category)
  const categoryCovers = useMemo(() => {
    const cats = ["Accessories", "Apparel", "Electronics", "Footwear"] as const;
    return cats.map((c) => ({
      name: c,
      href: `/shop?category=${encodeURIComponent(c.toLowerCase())}`,
      image: products.find((p) => p.category === c)?.image,
    }));
  }, []);

  return (
    <main className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
      {/* Promo bar (MINISO style) */}
      <div className="relative z-10 bg-[#E4002B] text-white text-xs md:text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex flex-col sm:flex-row items-center gap-2 sm:gap-3 sm:justify-between">
          <span className="font-medium">New Arrivals • Festive Offers Live</span>
          <div className="flex gap-4 opacity-95">
            <a href="/shop" className="underline-offset-2 hover:underline">Shop</a>
            <a href="/contact" className="underline-offset-2 hover:underline">Contact</a>
          </div>
        </div>
      </div>

      {/* Comet gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent_80%)]">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[60rem] w-[60rem] rounded-full bg-[conic-gradient(at_30%_30%,#E4002B_0deg,#a78bfa_120deg,#22d3ee_240deg,#E4002B_360deg)] blur-3xl opacity-40" />
      </div>

      <Hero3D />

      {/* Hero copy */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-6 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          MINIMO
          <span className="block text-base md:text-lg tracking-[0.4em] mt-2 opacity-70">RETAIL BANGALORE</span>
        </h1>
        <p className="mt-4 text-base md:text-lg opacity-80 max-w-2xl mx-auto">
          A comet-borne shopping experience. Nebula gradients, glassmorphic cards, and orbiting visuals come together for the future of retail.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="/shop" className="px-6 h-12 rounded-full bg-[#E4002B] text-white shadow hover:opacity-90 transition">New Arrivals</a>
          <a href="#learn" className="px-6 h-12 rounded-full border border-border/70 bg-background/60 backdrop-blur hover:bg-accent/40 transition">Learn more</a>
        </div>
      </section>

      {/* Hero slider */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-12">
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/30 dark:bg-black/30 backdrop-blur-xl">
          <div className="relative h-[200px] sm:h-[280px] md:h-[360px]">
            <div className="absolute inset-0 flex transition-transform duration-700" style={{ transform: `translateX(-${slide * 100}%)` }}>
              {slides.map((src, i) => (
                <div key={i} className="min-w-full h-full relative">
                  <img src={src} alt="Banner" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                </div>
              ))}
            </div>
            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, i) => (
                <button key={i} onClick={() => setSlide(i)} className={`h-1.5 w-6 rounded-full ${i === slide ? "bg-foreground/80" : "bg-foreground/30"}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick categories (MINISO-like) */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 -mt-2 pb-8">
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/shop?category=new" className="px-4 h-10 rounded-full border border-[#E4002B]/30 bg-white text-[#E4002B] hover:bg-[#E4002B] hover:text-white transition">New</a>
          <a href="/shop?category=toys" className="px-4 h-10 rounded-full border border-[#E4002B]/30 bg-white text-[#E4002B] hover:bg-[#E4002B] hover:text-white transition">Toys</a>
          <a href="/shop?category=home" className="px-4 h-10 rounded-full border border-[#E4002B]/30 bg-white text-[#E4002B] hover:bg-[#E4002B] hover:text-white transition">Home</a>
          <a href="/shop?category=beauty" className="px-4 h-10 rounded-full border border-[#E4002B]/30 bg-white text-[#E4002B] hover:bg-[#E4002B] hover:text-white transition">Beauty</a>
          <a href="/shop?category=stationery" className="px-4 h-10 rounded-full border border-[#E4002B]/30 bg-white text-[#E4002B] hover:bg-[#E4002B] hover:text-white transition">Stationery</a>
        </div>
      </section>

      {/* Shop by Category tiles */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categoryCovers.map((c) => (
            <a key={c.name} href={c.href} className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/20 dark:bg-black/20 backdrop-blur-xl">
              {c.image && <img src={c.image} alt={c.name} className="h-40 md:h-48 w-full object-cover group-hover:scale-105 transition" />}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-full bg-[#E4002B] text-white text-xs font-medium">{c.name}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Featured products with tabs */}
      <section id="learn" className="relative z-10 max-w-7xl mx-auto px-6 pb-28">
        <div className="mb-5 flex items-center justify-center gap-2">
          <button onClick={() => setTab("new")} className={`px-4 h-9 rounded-full border transition ${tab === "new" ? "bg-[#E4002B] text-white border-transparent" : "bg-background/70 border-border/70 hover:bg-accent/40"}`}>New Arrivals</button>
          <button onClick={() => setTab("best")} className={`px-4 h-9 rounded-full border transition ${tab === "best" ? "bg-[#E4002B] text-white border-transparent" : "bg-background/70 border-border/70 hover:bg-accent/40"}`}>Best Sellers</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {display.map((p, idx) => (
            <GlassCard key={p.id} className="p-4 group relative overflow-hidden">
              <div className="absolute -inset-20 bg-gradient-to-tr from-orange-400/20 via-violet-400/20 to-cyan-300/20 blur-3xl opacity-0 group-hover:opacity-100 transition" />
              <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
                <a href={`/product/${p.slug}`}>
                  <img
                    alt={p.name}
                    src={p.image}
                    className="h-full w-full object-cover"
                  />
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                {/* Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium bg-[#E4002B] text-white">{tab === "new" ? "NEW" : idx % 2 === 0 ? "HOT" : "-20%"}</div>
              </div>
              <div className="mt-3 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-medium">{p.name}</h3>
                  <p className="text-sm opacity-70">{p.color}</p>
                  <p className="text-sm mt-1 font-semibold">₹{p.price.toLocaleString("en-IN")}</p>
                </div>
                <button onClick={() => add(p, 1)} className="px-3 h-9 rounded-full border border-border/70 bg-background/70 hover:bg-accent/40 transition">Add</button>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Store locator */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        <GlassCard className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight">Visit our Bengaluru store</h3>
            <p className="mt-2 text-sm opacity-80">582, 10th Main Road, ISRO Layout, Bengaluru, Karnataka, 560076</p>
          </div>
          <a href="https://www.google.com/maps/search/?api=1&query=582,+10th+Main+Road,+ISRO+Layout,+Bengaluru,+Karnataka,+560076" className="px-5 h-11 rounded-full bg-[#E4002B] text-white hover:opacity-90 transition">Open in Maps</a>
        </GlassCard>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/60 bg-background/60 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div>
            <div className="text-lg font-semibold">MINIMO</div>
            <div className="text-[10px] tracking-[0.2em] opacity-70">RETAIL BANGALORE</div>
            <div className="mt-2 text-xs opacity-70">582, 10th Main Road, ISRO Layout, Bengaluru, Karnataka, 560076</div>
          </div>
          <nav className="flex gap-6 justify-center text-sm">
            <a href="/about" className="opacity-80 hover:opacity-100">About</a>
            <a href="/contact" className="opacity-80 hover:opacity-100">Contact</a>
            <a href="/shop" className="opacity-80 hover:opacity-100">Shop</a>
          </nav>
          <div className="text-sm md:text-right opacity-70">© {new Date().getFullYear()} MINIMO</div>
        </div>
      </footer>

      {show && <OnboardingModal onDone={complete} />}
    </main>
  );
}