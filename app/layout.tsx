import './globals.css'

export const metadata = {
  title: 'Abhishek Suman',
  description: 'Generated with next app by Abhishek Suman ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
