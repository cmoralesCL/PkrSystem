import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">PKR Tracker</h1>
      <p>Welcome to the PKR tracking system.</p>
      <Link href="/pkr">Go to Dashboard</Link>
    </main>
  )
}
