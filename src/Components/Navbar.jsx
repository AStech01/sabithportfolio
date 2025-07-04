import React from 'react'
import logo from '../assets/raviKumarLogo.webp'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { motion } from 'framer-motion'

// Hover animation variant
const hoverVariant = {
  hover: {
    y: -6,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 10,
    }
  }
}

function Navbar() {
  return (
    <nav className='flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        {/* Uncomment and update logo if needed */}
        {/* <a href="/" aria-label='Home'>
          <img src={logo} className='mx-2' width={50} height={33} alt="logo" />
        </a> */}
      </div>

      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <motion.a
          href="https://www.linkedin.com/in/ahamed-sabith-51002b322"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          variants={hoverVariant}
          whileHover="hover"
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          href="https://www.instagram.com/YOUR_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          variants={hoverVariant}
          whileHover="hover"
        >
          <FaInstagram />
        </motion.a>

        <motion.a
          href="https://github.com/AStech01"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          variants={hoverVariant}
          whileHover="hover"
        >
          <FaGithub />
        </motion.a>

        <motion.a
          href="https://twitter.com/YOUR_HANDLE"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          variants={hoverVariant}
          whileHover="hover"
        >
          <FaSquareXTwitter />
        </motion.a>
      </div>
    </nav>
  )
}

export default Navbar
