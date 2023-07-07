import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tech Talks | TechStack',
  description: 'TechStack by UCoder',
}  

export default function TechTalksLayout({ children }) {
  return (
    <div>{children}</div>
  )
}
