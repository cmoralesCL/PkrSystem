import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'PKR System',
  description: 'Personal OKR tracker'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
