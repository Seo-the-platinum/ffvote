import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import HamburgerMenu from './HamburgerMenu';

const Hamburger = () => {
  const [ show, setShow ] = useState(false)
  const handleShow = ()=> {
    setShow(prev=> !prev)
  }
  return (
    <div className='transform-translate duration-500 ease-in-out' style={ !show ? {transform: 'translate(99vw)'} : {transform: 'translate(70%)'}}>
      <div className='aboslute flex items-start'>
        <button className='absolute right-full' onClick={handleShow}>
          <GiHamburgerMenu className='fill-green-500' size='2rem'/>
        </button>
        <HamburgerMenu/>
      </div>
    </div>
  )
}

export default Hamburger