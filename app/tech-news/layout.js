import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tech News | TechStack',
  description: 'TechStack by UCoder',
}  

export default function TechNewsLayout({ children }) {
  return (
    <>
 

    <div>{children}</div>
    </>
  )
}
