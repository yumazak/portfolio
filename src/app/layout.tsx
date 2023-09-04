import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import Header from './components/header'
const notojp = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: 'About uma0317',
  description: 'uma0317\'s Portfolio site',
}

export const runtime = 'edge' // 'nodejs' (default) | 'edge'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>
    <html lang="en">
      <body className={notojp.className}>
        <Header />
        {children}
      </body>
    </html>
  </>
}
