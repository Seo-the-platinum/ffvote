import React from 'react'
import Link from 'next/link'
import ResizeHook from '../../utils/hooks/ResizeHook'
import Hamburger from './hamburger/Hamburger'
import Search from './Search'

const Navbar = () => {
  const windowWidth = ResizeHook()

  return (
    <div className='h-10 md:h-20 md:flex-col-reverse md:pr-2 w-full md:max-w-7xl lg:flex-row fixed md:overflow-hidden flex justify-center md:items-end gap-2 lg:gap-4 lg:justify-evenly lg:items-center'>
      <Search/>
      {
        windowWidth > 767 ?
        <div className='hidden md:flex justify-end gap-8'>
          <Link className='text-slate-300 text-sm md:text-xl font-serif' href='/'> Home </Link>
          <Link className='text-slate-300 text-sm md:text-xl font-serif' href='/results/characters'> Character Results </Link>
          <Link className='text-slate-300 text-sm md:text-xl font-serif' href='/results/games'> Game Results </Link>
          <Link className='text-slate-300 text-sm md:text-xl font-serif' href='/characters'> Characters </Link>
          <Link className='text-slate-300 text-sm md:text-xl font-serif' href='/games'> Games </Link>
        </div> :
        <Hamburger/>
      }
    </div>
  )
}

export default Navbar