import React from 'react'
import Link from 'next/link'
import { FaFacebookF , FaTwitter , FaLinkedin , FaPinterestP} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className='bg-gray-950 py-8 px-10 text-white flex justify-between'>
        <div><img className=' w-15 h-12' src='/Group 11 1.png' alt='logo'></img></div>
        <div className='px-9 font-sans'><h1><b>Information</b></h1><h1 className='py-5'><b>Main<br/>Gallery<br/>Projects<br/>Certifications<br/>Contact</b></h1></div>
        <div className=' px-9 font-sans'><h1><b>Contacts</b></h1><h1 className='flex'><img className='pr-2 py-2 h-9 w-5.5' src='/Vector.png' alt='pic'></img><b>1234 Sample Street<br/>Austin Texas 78704</b></h1><h1 className='flex py-2.5'><img className='pr-2 h-4 w-7' src='/Group.PNG' alt='pic'></img><b>512.333.2222</b></h1><h1 className='flex py-3'><img className='pr-2 h-3 w-7' src='Group (1).png' alt='pic'></img><b>sampleemail@gmail.com</b></h1></div>
        <div className='font-sans'>
          <h1><b>Social  Media</b></h1>
          <div className='flex'>
          <Link className='py-2' href={'/#'}><FaFacebookF/></Link>
          <Link className='py-2 px-2' href={'/#'}><FaTwitter/></Link>
          <Link className='py-2 px-2' href={'/#'}><FaLinkedin/></Link>
          <Link className='py-2 px-2' href={'/#'}><FaPinterestP/></Link>
          </div>
        </div>
      </footer>
      <footer className='bg-gray-950 px-1 text-white text-opacity-60 font-sans text-xs flex justify-center'>
        <div><h1>&copy; 2021 All Rights Reserved</h1></div>
      </footer>
    </div>
  )
}

export default Footer
