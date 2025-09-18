"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";

export default function CartDrawer() {
  const { items, subtotal, remove, update, clear, open, closeCart } = useCart();

  return (
    <div className={`fixed inset-0 z-50 ${open ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!open}>
      <div
        className={`absolute inset-0 transition ${open ? "bg-black/40 backdrop-blur" : "bg-transparent"}`}
        onClick={closeCart}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md border-l border-white/10 bg-white/30 dark:bg-black/30 backdrop-blur-xl shadow-[0_0_1px_0_rgba(255,255,255,0.2)_inset,0_20px_80px_-20px_rgba(99,102,241,0.35)] transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex items-center justify-between border-b border-white/10">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button onClick={closeCart} className="h-9 w-9 rounded-full border border-border/70 bg-background/70">✕</button>
        </div>
        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-180px)]">
          {items.length === 0 ? (
            <p className="opacity-70">Your cart is empty.</p>
          ) : (
            items.map((i) => (
              <div key={i.id} className="flex gap-3 items-center">
                <img src={i.image || ''} alt={i.name} className="h-16 w-16 rounded object-cover" />
                <div className="flex-1">
                  <div className="font-medium leading-none">{i.name}</div>
                  <div className="text-sm opacity-70">${i.price.toFixed(2)}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <button onClick={() => update(i.id, i.qty - 1)} className="h-7 w-7 rounded-full border">-</button>
                    <span className="min-w-6 text-center">{i.qty}</span>
                    <button onClick={() => update(i.id, i.qty + 1)} className="h-7 w-7 rounded-full border">+</button>
                  </div>
                </div>
                <button onClick={() => remove(i.id)} className="text-sm opacity-70 hover:opacity-100">Remove</button>
              </div>
            ))
          )}
        </div>
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center justify-between">
            <span className="opacity-80">Subtotal</span>
            <span className="font-semibold">${subtotal.toFixed(2)}</span>
          </div>
          <div className="mt-3 flex gap-2">
            <button onClick={clear} className="h-10 px-4 rounded-full border border-border/70 bg-background/60">Clear</button>
            <Link href="/checkout" className="h-10 px-4 rounded-full bg-foreground text-background flex items-center justify-center flex-1 text-center">
              Checkout
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}