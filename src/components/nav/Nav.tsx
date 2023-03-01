import React from 'react'
import Link from 'next/link'
import ResizeHook from '../../utils/hooks/ResizeHook'
import Hamburger from './hamburger/Hamburger'

const Navbar = () => {
  const windowWidth = ResizeHook()

  return (
    <div className='bg-gradient-to-r from-[#010049] to-[#010049b1] flex justify-center px-2 w-full py-2 border-b-2 border-[#03033860] fixed overflow-hidden h-20'>
      {
        windowWidth > 768 ?
        <div className='hidden md:flex gap-x-4 md:gap-x-8 justify-end w-10/12'>
          <Link className='text-slate-300 text-sm md:text-2xl font-serif' href='/'> Home </Link>
          <Link className='text-slate-300 text-sm md:text-2xl font-serif' href='/results/characters'> Character Results </Link>
          <Link className='text-slate-300 text-sm md:text-2xl font-serif' href='/results/games'> Game Results </Link>
          <Link className='text-slate-300 text-sm md:text-2xl font-serif' href='/characters'> Characters </Link>
          <Link className='text-slate-300 text-sm md:text-2xl font-serif' href='/games'> Games </Link>
        </div> :
        <Hamburger/>
      }
    </div>
  )
}

export default Navbar