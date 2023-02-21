import React from 'react'
import Link from 'next/link'

const HamburgerMenu = () => {
  return (
    <div className='flex flex-col'>
        <Link className='text-slate-300 text-sm md:text-2xl font-serif' href='/'> Home </Link>
        <Link className='text-slate-300 text-sm md:text-2xl font-serif' href='/results/characters'> Character Results </Link>
        <Link className='text-slate-300 text-sm md:text-2xl font-serif' href='/results/games'> Game Results </Link>
        <Link className='text-slate-300 text-sm md:text-2xl font-serif' href='/characters'> Characters </Link>
        <Link className='text-slate-300 text-sm md:text-2xl font-serif' href='/monsters'> Monsters </Link>
        <Link className='text-slate-300 text-sm md:text-2xl font-serif' href='/games'> Games </Link>
    </div>
  )
}

export default HamburgerMenu