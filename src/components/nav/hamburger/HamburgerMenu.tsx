import React from 'react'
import Link from 'next/link'

const HamburgerMenu = () => {
  return (
    <div className='flex flex-col bg-slate-300 min-h-screen w-2/4 p-4'>
        <Link className='md:text-4xl font-serif' href='/'> Home </Link>
        <Link className='md:text-4xl font-serif' href='/results/characters'> Character Results </Link>
        <Link className='md:text-4xl font-serif' href='/results/games'> Game Results </Link>
        <Link className='md:text-4xl font-serif' href='/characters'> Characters </Link>
        <Link className='md:text-4xl font-serif' href='/monsters'> Monsters </Link>
        <Link className='md:text-4xl font-serif' href='/games'> Games </Link>
    </div>
  )
}

export default HamburgerMenu