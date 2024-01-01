import type { Metadata } from 'next'
import Navbar, { NavbarSmall } from '../components/Navbar'
import './globals.css'
import { AnimatePresence, motion } from 'framer-motion'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'

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
      <body className='relative flex justify-center min-h-screen p-1 md:p-4 capitalize text-newGrey bg-zinc-50'>
        <div className='relative w-full max-w-xl pt-8 mb-20'>
          <Navbar />
          {children}
        </div>
        <NavbarSmall />
        <Analytics />
      </body>
      <Script src='https://www.googletagmanager.com/gtag/js?id=G-90N70RJLQ2'></Script>
      <Script id='google-analytics'>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-90N70RJLQ2');`}
      </Script>
    </html>
  )
}
