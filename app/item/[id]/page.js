import Navbar from '../../../components/Navbar'
import ItemDetails from '../../../components/ItemDetails'
import menu from '../../../data/menuData'

export default function ItemPage({ params }) {
  const id = params.id
  const item = menu.find(m => m.id === id)

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto p-4">
        <ItemDetails item={item} />
      </main>
    </>
  )
}
