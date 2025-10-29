import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4">Tablemate</h1>
      <p className="mb-6 text-center max-w-xl">
        Tablet-based digital menu and ordering prototype. Tap “Open Menu” to start.
      </p>
      <Link href="/menu" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow">
        Open Menu
      </Link>
    </main>
  )
}
