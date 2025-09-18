"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "@/lib/products";

export type CartItem = { id: number; name: string; price: number; qty: number; image?: string; slug?: string };

type CartContextType = {
  items: CartItem[];
  subtotal: number;
  add: (p: Product, qty?: number) => void;
  remove: (id: number) => void;
  update: (id: number, qty: number) => void;
  clear: () => void;
  open: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export default function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  // hydrate from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem("minimo_cart");
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  // persist
  useEffect(() => {
    try {
      localStorage.setItem("minimo_cart", JSON.stringify(items));
    } catch {}
  }, [items]);

  const subtotal = useMemo(() => items.reduce((s, i) => s + i.price * i.qty, 0), [items]);

  const add = (p: Product, qty = 1) => {
    setItems((prev) => {
      const idx = prev.findIndex((x) => x.id === p.id);
      if (idx !== -1) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + qty };
        return next;
      }
      return [...prev, { id: p.id, name: p.name, price: p.price, qty, image: p.image, slug: p.slug }];
    });
    setOpen(true);
  };

  const remove = (id: number) => setItems((prev) => prev.filter((i) => i.id !== id));
  const update = (id: number, qty: number) =>
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i)));
  const clear = () => setItems([]);

  const value: CartContextType = {
    items,
    subtotal,
    add,
    remove,
    update,
    clear,
    open,
    openCart: () => setOpen(true),
    closeCart: () => setOpen(false),
    toggleCart: () => setOpen((v) => !v),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}