import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        <Link href='/'> Home </Link>
        <Link href='/results'> Results </Link>
    </div>
  )
}

export default Navbar