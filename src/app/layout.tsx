import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Pedro Moraes',
  description: 'See my portifolio!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} w-dvw bg-background text-secondary antialiased`}
      >
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');
        </style>
        {children}
      </body>
    </html>
  )
}
