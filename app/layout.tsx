import './globals.css'
export const metadata = {
  title: 'Abhishek Suman',
  description: 'Generated with next app by Abhishek Suman ',
}

import { Bodoni_Moda } from '@next/font/google'

const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={bodoniModa.className}>
      <body>{children}</body>
    </html>
  )
}
