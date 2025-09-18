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
    slug: "comet-sneaker-violet",
    name: "Comet Sneaker Violet",
    price: 129,
    category: "Footwear",
    image:
      "https://images.unsplash.com/photo-1520975922284-9d56f58f0cdb?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1520975922284-9d56f58f0cdb?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
    ],
    color: "Nebula Violet",
  },
  {
    id: 2,
    slug: "orbit-jacket-amber",
    name: "Orbit Jacket Amber",
    price: 219,
    category: "Apparel",
    image:
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
    ],
    color: "Comet Amber",
  },
  {
    id: 3,
    slug: "nebula-pack-cyan",
    name: "Nebula Pack Cyan",
    price: 89,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa0?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
    ],
    color: "Ionic Cyan",
  },
  {
    id: 4,
    slug: "starlite-headphones",
    name: "Starlite Headphones",
    price: 159,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1518449090060-0e3b826df857?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1518449090060-0e3b826df857?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
    ],
    color: "Star Black",
  },
  {
    id: 5,
    slug: "meteor-watch",
    name: "Meteor Watch",
    price: 199,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1549482199-bc1ca6f58502?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1549482199-bc1ca6f58502?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1518441902110-38a48c1ac92a?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
    ],
    color: "Solar Steel",
  },
  {
    id: 6,
    slug: "galaxy-tee-violet",
    name: "Galaxy Tee Violet",
    price: 39,
    category: "Apparel",
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",
    ],
    color: "Nebula Violet",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}