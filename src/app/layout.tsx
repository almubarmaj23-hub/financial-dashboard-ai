import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'لوحة التحليل المالي الذكي',
  description: 'Advanced AI-Powered Financial Analytics Dashboard',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
