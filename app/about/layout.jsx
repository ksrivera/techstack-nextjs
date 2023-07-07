import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'About | TechStack',
  description: 'TechStack by UCoder',
}  

export default function AboutLayout({ children }) {
  return (
    <div>
      {children}
    </div>
  
  )
}
