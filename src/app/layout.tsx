'use client'

import type { Metadata } from 'next'
import Navbar, { NavbarSmall } from '../components/Navbar'
import './globals.css'
import { AnimatePresence, motion } from 'framer-motion'

export const metadata: Metadata = {
  title: 'Swaraj Saxena',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='relative flex justify-center min-h-screen p-4 capitalize text-newGrey bg-zinc-50'>
        <div className='relative w-full max-w-xl pt-8 mb-20'>
          <Navbar />
          {children}
        </div>
        <NavbarSmall />
      </body>
    </html>
  )
}
