import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Memento Mori',
  description: 'Life in Github Graph',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
