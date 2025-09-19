"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { products } from "@/lib/products";
import { useCart } from "@/components/CartProvider";

export default function ShopPage() {
  const { add } = useCart();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string | "all">("all");
  const categories = useMemo(() => Array.from(new Set(products.map((p) => p.category))), []);
  const filtered = useMemo(
    () =>
      products.filter(
        (p) => (cat === "all" || p.category === cat) && (p.name.toLowerCase().includes(q.toLowerCase()) || p.category.toLowerCase().includes(q.toLowerCase()))
      ),
    [q, cat]
  );

  return (
    <main className="max-w-7xl mx-auto px-6 py-16 pt-24">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Shop</h1>
      <div className="mt-6 flex flex-col md:flex-row md:items-center gap-4">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search products..."
          className="h-11 w-full md:w-80 rounded-full border border-[#FFD700]/30 bg-white/80 dark:bg-white/10 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50"
        />
        <div className="flex items-center gap-2 flex-wrap">
          <button onClick={() => setCat("all")} className={`h-9 px-4 rounded-full border ${cat === "all" ? "bg-[#FFD700] text-black border-transparent shadow-sm" : "bg-white text-[#FFD700] border-[#FFD700]/30 hover:bg-[#FFD700]/10"}`}>All</button>
          {categories.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`h-9 px-4 rounded-full border ${cat === c ? "bg-[#FFD700] text-black border-transparent shadow-sm" : "bg-white text-[#FFD700] border-[#FFD700]/30 hover:bg-[#FFD700]/10"}`}>{c}</button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <div key={p.id} className="rounded-2xl border border-white/10 bg-white/30 dark:bg-black/30 backdrop-blur-xl p-4 group overflow-hidden">
            <Link href={`/product/${p.slug}`} className="block aspect-[4/3] rounded-xl overflow-hidden">
              <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
            </Link>
            <div className="mt-3 flex items-center justify-between">
              <div>
                <div className="font-medium leading-none">{p.name}</div>
                <div className="text-sm opacity-70">₹{p.price.toLocaleString("en-IN")}</div>
              </div>
              <button onClick={() => add(p, 1)} className="h-9 px-3 rounded-full border border-border/70 bg-background/70 hover:bg-accent/40">Add</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}