import { Footer } from '@/app/components/Footer'
import Nav from './components/Nav'
import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home | TechStack',
  description: 'TechStack by UCoder',
} 

export default function RootLayout({ children }) {
  return (
    <html lang="en">  
      <body className={inter.className}>
        <Nav/>
          {children}
        <Footer/>
      </body>
    </html>
  )
}
