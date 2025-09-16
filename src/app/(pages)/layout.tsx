import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Boilerplate',
  description: 'Boilerplate para projetos Next.js'
}

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="pt-br" suppressHydrationWarning={true}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export default RootLayout
