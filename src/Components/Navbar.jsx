import React from 'react'
import logo from '../assets/raviKumarLogo.webp'
import { FaGithub, FaInstagram, FaLinkedin,  } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
function Navbar() {
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            {/* <a href="/" aria-label='Home'>
            <img src={logo} className='mx-2'width={50} height={33} alt="logo" /></a> */}
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="www.linkedin.com/in/ahamed-sabith-51002b322"
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'>
                <FaLinkedin/>
            </a>
            <a href="www.linkedin.com/in/ahamed-sabith-51002b322"
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Instagram'>
                <FaInstagram/>
            </a>
            <a href="https://github.com/AStech01"
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'>
                <FaGithub/>
            </a>
            <a href="www.linkedin.com/in/ahamed-sabith-51002b322"
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Twitter'>
                <FaSquareXTwitter/>
            </a>

        </div>

    </nav>
  )
}

export default Navbar
