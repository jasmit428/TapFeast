import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm py-3 px-4 sticky top-0 z-10">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold">Tablemate</Link>
        <nav className="flex gap-3">
          <Link href="/menu" className="px-3 py-1 rounded hover:bg-gray-100">Menu</Link>
          <Link href="/owner" className="px-3 py-1 rounded hover:bg-gray-100">Owner</Link>
        </nav>
      </div>
    </header>
  )
}
