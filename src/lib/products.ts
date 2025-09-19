export type Product = {
  id: number;
  slug: string;
  name: string;
  price: number;
  category: string;
  image: string;
  images?: string[];
  color?: string;
};

export const products: Product[] = [
  {
    id: 1,
    slug: "kids-educational-toy-set",
    name: "Educational Toy Set",
    price: 899,
    category: "Toys",
    image:
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
    ],
    color: "Multicolor",
  },
  {
    id: 2,
    slug: "viral-led-strip-lights",
    name: "Viral LED Strip Lights",
    price: 1299,
    category: "Viral Products",
    image:
      "https://images.unsplash.com/photo-1585076641399-5c06d1b3365f?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1585076641399-5c06d1b3365f?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
    ],
    color: "RGB Multicolor",
  },
  {
    id: 3,
    slug: "makeup-cosmetics-kit",
    name: "Complete Makeup Kit",
    price: 1599,
    category: "Cosmetics",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
    ],
    color: "Natural Tones",
  },
  {
    id: 4,
    slug: "designer-handbag",
    name: "Designer Ladies Handbag",
    price: 2499,
    category: "Bags",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
    ],
    color: "Black Leather",
  },
  {
    id: 5,
    slug: "stationery-bundle",
    name: "Premium Stationery Bundle",
    price: 799,
    category: "Stationery",
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1586281010291-0a52aee5b1fd?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
    ],
    color: "Assorted Colors",
  },
  {
    id: 6,
    slug: "home-decor-set",
    name: "Modern Home Décor Set",
    price: 1899,
    category: "Décor",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
    ],
    color: "Natural Wood",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}