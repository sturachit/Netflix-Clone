import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LogOut, Menu, Search } from 'lucide-react'

const Navbar = () => {
    const [isMobileMenuOpen,setIsMobileMenuOpen]= useState("")
    const toggleMobileMenu =()=> setIsMobileMenuOpen(!isMobileMenuOpen)
  return (
    <header className='max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20'>
        <div className='flex items-center gap-10 z-50'>
    <Link to="/">
        <img src="/netflix-logo.png" alt="Netflix logo" className='w-32 sm:w-40' />
    </Link>
    {/* desktop navbar items */}
    <div className='hidden sm:flex gap-2 items-center'>
        <Link to="/" className='hover:underline'>
        Movies
        </Link>
        <Link to="/" className='hover:underline'>
        Tv Shows
        </Link>
        <Link to="/history" className='hover:underline'>
        Search History
        </Link>
       </div>
       </div>
       <div className='flex gap-2 items-center z-50'>
         <Link to={'/search'}>
         <Search className='size-6 cursor-pointer'/>
        </Link>
        <img src="/avatar2.png" alt="avatar" className='h-8 rounded cursor-pointer' />
        <LogOut className='size-6 cursor-pointer' />
        <div className='sm:hidden'>
             <Menu className="size-6 cursor-pointer" onClick={toggleMobileMenu}/>
            
            </div > 
       </div>
      
      {/* mobile Navbar itmes */}
      {
        isMobileMenuOpen && (
            <div className='w-full sm:hidden mt-4 z-50 bg-black border rounded border-gray-800'>
                <Link to={"/"} className='block hover:underline' onClick={toggleMobileMenu}>
                Movies
                </Link>
                <Link to={"/"} className='block hover:underline' onClick={toggleMobileMenu}>
                TV Shows
                </Link>
                <Link to={"/"} className='block hover:underline' onClick={toggleMobileMenu}>
                Search History
                </Link>
            </div>
        )
      }
    </header>
  )
}

export default Navbar