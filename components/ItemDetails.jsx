'use client'
export default function ItemDetails({ item }) {
  if (!item) return <div>Item not found</div>
  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow">
      <div className="h-72 mb-4 overflow-hidden rounded-md bg-gray-100">
        {item.image ? <img src={item.image} alt={item.name} className="w-full h-full object-cover" /> : null}
      </div>
      <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
      <p className="text-gray-600 mb-4">{item.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-xl font-semibold">${item.price.toFixed(2)}</span>
        <div>
          <button className="px-4 py-2 bg-green-600 text-white rounded mr-2">Add to order</button>
          <button className="px-4 py-2 bg-gray-200 rounded">Back</button>
        </div>
      </div>
    </div>
  )
}
