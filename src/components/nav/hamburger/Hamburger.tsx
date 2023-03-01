import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import HamburgerMenu from './HamburgerMenu';

const Hamburger = () => {
  const [ show, setShow ] = useState(false)
  const handleShow = ()=> {
    setShow(prev=> !prev)
  }
  return (
    <div className='relative items-start transition transform-all duration-500 ease-in-out' style={show ? {left:'90%'}:{left:'100%'}}>
      <button className='md:hidden absolute' style={{right: '100%'}} onClick={handleShow}>
        <GiHamburgerMenu className='fill-green-500' size='2em'/>
      </button>
        <HamburgerMenu/>
    </div>
  )
}

export default Hamburger