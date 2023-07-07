'use client'

import { useEffect, useState } from "react"
import { MdKeyboardArrowUp } from "react-icons/md";
 
const BackToTop = () => {
    const [backToTop, setBackToTop] = useState(false);

    useEffect(() =>{
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                setBackToTop(true)
            } else {
                setBackToTop(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

  return (
    <div className='text-2xl text-violet-400 hover:text-violet-700 rounded-lg'>
        {backToTop && (
            <button 
                style={{
                    position: 'fixed',
                    bottom: '50px',
                    right: '50px',
                    width: '50px',
                    fontSize: '50px',
            }}
            onClick={scrollUp}
            > <MdKeyboardArrowUp /> </button>
        )}
    </div>
  )
}

export default BackToTop