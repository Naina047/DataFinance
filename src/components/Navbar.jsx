import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const[nav, setNav]= useState(false)

    const handleNav =() => { 
        setNav(!nav)
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] max-auto px-4 text-white'>
        <h1 className='text-[#00df9a] w-full text-3xl font-bold  '>REACT.</h1>
        <ul className=' hidden md:flex '>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/>}
            
        </div>
        <div className={!nav ? 'fixed left-[-100%]':'fixed left-0 top-0 w-80 h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' } >
        <h1 className='text-[#00df9a] w-full text-3xl font-bold p-7 '>REACT.</h1>
        <ul className=' pt-20 p-5 uppercase'>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>Company</li>
            <li className='p-4 border-b border-gray-600'>Resources</li>
            <li className='p-4 border-b border-gray-600'>about</li>
            <li className='p-4 border-b border-gray-600'>Contact</li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar