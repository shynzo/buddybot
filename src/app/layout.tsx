import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { twMerge } from 'tailwind-merge'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BuddyBot',
  description: 'Your favorite language platform!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          'flex h-screen flex-row bg-slate-700 px-10 py-3',
          inter.className,
        )}
      >
        {children}
      </body>
    </html>
  )
}
