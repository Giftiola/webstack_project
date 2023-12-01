import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Webstack Project',
  description: 'Webstack Project created by Darijo Tepic.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <body className={`${inter.className} `} suppressHydrationWarning={true}>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
