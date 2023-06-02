import NavBar from '@/app/NavBar'
import './globals.css'
import Footer from '@/app/Footer'

export const metadata = {
  title: 'GamingUp',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <body>
        <NavBar>{children}</NavBar>
        <Footer />
      </body>
    </html>
  )
}
