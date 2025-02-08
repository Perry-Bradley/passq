import { Inter } from 'next/font/google'
import { ThemeProvider } from "../components/theme-provider"
import React from 'react'

import "../styles/globals.css"  // Updated import path

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "PASSQ - Master Your Exams",
  description: "Practice past questions and improve your exam performance",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}