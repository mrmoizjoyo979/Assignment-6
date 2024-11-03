import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <nav className='bg-white text-black h-7 py-7 px-9 flex justify-between items-center'>
        <div>
            <a href='#!'>
            <img className='w-10 h-8' src='Group 11.png' alt='logo'></img>
            </a>
        </div>
        <div>
            <ul className='flex space-x-9 text-[15px] '>
             <li className='border-y border-black font-sans'><Link href={'/'}>MAIN</Link></li>
             <li className='font-sans'><Link href={'/'}>GALLERY</Link></li>
             <li className='font-sans'><Link href={'/'}>PROJECTS</Link></li>
             <li className='font-sans'><Link href={'/'}>CERTIFICATIONS</Link></li>
             <li className='font-sans'><Link href={'/'}>CONTACTS</Link></li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
