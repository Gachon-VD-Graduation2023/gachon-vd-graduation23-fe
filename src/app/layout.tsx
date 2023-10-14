import MenuBar from '@/components/MenuBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from '@/utils/providers'
import ScrollToTop from '@/utils/ScrollToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GCVD2023',
  description: '2023 가천대학교 시각디자인과 졸업전시',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <ScrollToTop />
      <body className={inter.className}>
        {/* 좌측 메뉴바 */}
        <MenuBar />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
