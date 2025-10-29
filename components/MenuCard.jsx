'use client'
import Link from 'next/link'

export default function MenuCard({ item }) {
  return (
    <article className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-5 flex flex-col items-center text-center">
      {/* Circular Image */}
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-gray-100 shadow-sm">
        {item.image ? (
          <img
            src={item.image}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="text-gray-400 flex items-center justify-center h-full">
            No Image
          </div>
        )}
      </div>

      {/* Item Name and Description */}
      <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{item.description}</p>
      <span className="text-base font-bold text-gray-900 mb-4">${item.price.toFixed(2)}</span>

      {/* Buttons */}
      <div className="flex gap-3 mt-auto">
        <Link
          href={`/item/${item.id}`}
          className="px-4 py-2 text-sm rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
        >
          View
        </Link>
        <button
          onClick={() => alert(`Added ${item.name} to your order!`)}
          className="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Order
        </button>
      </div>
    </article>
  );
}
