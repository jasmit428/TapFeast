"use client";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import MenuCard from "../../components/MenuCard";
import menu from "../../data/menuData";

export default function MenuPage() {
  const [category, setCategory] = useState("Food");

  // Filter items based on selected category
  const filteredMenu = menu.filter((item) => {
    if (category === "Food") return item.category === "Pizzas" || item.category === "Salads" || item.category === "Main";
    if (category === "Beverages") return item.category === "Drinks";
    if (category === "Desserts") return item.category === "Desserts";
    return false;
  });

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto p-6 text-center">
        <h1 className="text-4xl font-bold mb-8 tracking-wide uppercase">Restaurant Food Menu</h1>

        {/* Category buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {["Food", "Beverages", "Desserts"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                category === cat
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {filteredMenu.length > 0 ? (
            filteredMenu.map((item) => <MenuCard key={item.id} item={item} />)
          ) : (
            <p className="col-span-full text-gray-500">No items found for this category.</p>
          )}
        </div>
      </main>
    </>
  );
}
