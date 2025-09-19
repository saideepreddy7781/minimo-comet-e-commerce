// src/app/page.tsx
import { Hero } from "@/components/Hero";
import { SiteFooter } from "@/components/SiteFooter";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { CallToAction } from "@/components/CallToAction";

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent_80%)]">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[60rem] w-[60rem] rounded-full bg-[conic-gradient(at_30%_30%,#FFD700_0deg,#FFEB3B_120deg,#FFF9C4_240deg,#FFD700_360deg)] blur-3xl opacity-30" />
      </div>

      <Hero />
      <Features />
      <Testimonials />
      <CallToAction />
      <SiteFooter />
    </main>
  );
}
