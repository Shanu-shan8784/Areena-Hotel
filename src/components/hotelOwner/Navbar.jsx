import React from 'react'
import { Link } from 'react-router'
import { assets } from '../../assets/assets'
import { UserButton } from '@clerk/clerk-react'

function Navbar() {
  return (
    <div className='flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-[#001F3F] transition-all duration-300'>
      <Link to='/'>
      <img src="/src/assets/logo3.png" alt="logo" className='h-24 opacity-80'/>
      </Link>
      <UserButton/>
    </div>
  )
}

export default Navbar
