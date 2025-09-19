"use client";

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 pt-24">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">About Minimo Retail</h1>
      <div className="mt-8 space-y-6">
        <p className="text-lg opacity-90">
          Your one-stop shop in Bangalore for toys, viral products, cosmetics, décor, bags, stationery & daily essentials.
        </p>
        <p className="opacity-80">
          Minimo Retail is a one-stop shop offering toys, trending viral products, cosmetics, home décor items, ladies' handbags, stationery, and daily essentials—all at the lowest prices in Bangalore.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div>
            <h2 className="text-xl font-semibold mb-4">Our Product Range</h2>
            <ul className="space-y-2 opacity-80">
              <li>• Toys & Games for all ages</li>
              <li>• Trending viral products</li>
              <li>• Beauty & cosmetics</li>
              <li>• Home décor items</li>
              <li>• Ladies' handbags</li>
              <li>• Stationery supplies</li>
              <li>• Daily essentials</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Why Choose Us</h2>
            <ul className="space-y-2 opacity-80">
              <li>• Lowest prices in Bangalore</li>
              <li>• Wide variety of products</li>
              <li>• Quality guaranteed</li>
              <li>• Convenient location</li>
              <li>• Friendly customer service</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}