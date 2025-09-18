"use client";

import { useCart } from "@/components/CartProvider";

export default function CheckoutPage() {
  const { items, subtotal, clear } = useCart();

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-5 gap-10">
      <section className="lg:col-span-3">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Checkout</h1>
        <form className="mt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm opacity-70">First name</label>
              <input className="mt-1 w-full h-11 rounded-xl border border-border/60 bg-transparent px-3" />
            </div>
            <div>
              <label className="text-sm opacity-70">Last name</label>
              <input className="mt-1 w-full h-11 rounded-xl border border-border/60 bg-transparent px-3" />
            </div>
          </div>
          <div>
            <label className="text-sm opacity-70">Email</label>
            <input type="email" className="mt-1 w-full h-11 rounded-xl border border-border/60 bg-transparent px-3" />
          </div>
          <div>
            <label className="text-sm opacity-70">Address</label>
            <input className="mt-1 w-full h-11 rounded-xl border border-border/60 bg-transparent px-3" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm opacity-70">City</label>
              <input className="mt-1 w-full h-11 rounded-xl border border-border/60 bg-transparent px-3" />
            </div>
            <div>
              <label className="text-sm opacity-70">State</label>
              <input className="mt-1 w-full h-11 rounded-xl border border-border/60 bg-transparent px-3" />
            </div>
            <div>
              <label className="text-sm opacity-70">Postal code</label>
              <input className="mt-1 w-full h-11 rounded-xl border border-border/60 bg-transparent px-3" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm opacity-70">Card number</label>
              <input className="mt-1 w-full h-11 rounded-xl border border-border/60 bg-transparent px-3" placeholder="4242 4242 4242 4242" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm opacity-70">Expiry</label>
                <input className="mt-1 w-full h-11 rounded-xl border border-border/60 bg-transparent px-3" placeholder="MM/YY" />
              </div>
              <div>
                <label className="text-sm opacity-70">CVC</label>
                <input className="mt-1 w-full h-11 rounded-xl border border-border/60 bg-transparent px-3" placeholder="123" />
              </div>
            </div>
          </div>
          <button type="button" className="mt-4 h-12 px-6 rounded-full bg-foreground text-background" onClick={clear}>
            Place order
          </button>
        </form>
      </section>

      <aside className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/30 dark:bg-black/30 backdrop-blur-xl p-4 h-fit">
        <h2 className="font-medium">Order Summary</h2>
        <div className="mt-3 space-y-3">
          {items.length === 0 ? (
            <p className="opacity-70">No items in cart.</p>
          ) : (
            items.map((i) => (
              <div key={i.id} className="flex items-center gap-3">
                <img src={i.image || ''} alt={i.name} className="h-14 w-14 rounded object-cover" />
                <div className="flex-1">
                  <div className="text-sm font-medium">{i.name}</div>
                  <div className="text-xs opacity-70">Qty {i.qty}</div>
                </div>
                <div className="text-sm font-medium">${(i.price * i.qty).toFixed(2)}</div>
              </div>
            ))
          )}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="opacity-80">Subtotal</span>
          <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </div>
      </aside>
    </main>
  );
}