"use client";

import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/products";
import { useCart } from "@/components/CartProvider";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  const { add } = useCart();
  if (!product) return notFound();

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/20 dark:bg-black/20 backdrop-blur">
        <img src={product.image} alt={product.name} className="w-full h-[420px] object-cover" />
        <div className="grid grid-cols-4 gap-2 p-3">
          {(product.images || []).map((src, idx) => (
            <img key={idx} src={src} alt={`${product.name} ${idx + 1}`} className="h-20 w-full object-cover rounded" />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{product.name}</h1>
        <p className="mt-1 opacity-70">{product.color}</p>
        <div className="mt-4 text-2xl font-semibold">${product.price.toFixed(2)}</div>
        <div className="mt-6 flex gap-3">
          <button onClick={() => add(product, 1)} className="h-12 px-6 rounded-full bg-foreground text-background">Add to cart</button>
          <a href="/checkout" className="h-12 px-6 rounded-full border border-border/70 bg-background/60 flex items-center">Buy now</a>
        </div>
        <div className="mt-8">
          <h2 className="font-medium">Details</h2>
          <p className="opacity-80 mt-2">Experience comet-grade craftsmanship with premium materials, micro-motion details, and nebula gradients.</p>
        </div>
      </div>
    </main>
  );
}