import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import HamburgerMenu from './HamburgerMenu';

const Hamburger = () => {
  const [ show, setShow ] = useState(false)
  return (
    <div>
      <button className='md:hidden'>
        <GiHamburgerMenu/>
      </button>
        <HamburgerMenu/>
    </div>
  )
}

export default Hamburger