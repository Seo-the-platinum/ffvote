import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import HamburgerMenu from './HamburgerMenu';

const Hamburger = () => {
  const [ show, setShow ] = useState(false)
  const handleShow = ()=> {
    setShow(prev=> !prev)
  }
  return (
    <div className={`${show ? 'translate-x-1/3 sm:translate-x-3/4' : 'translate-x-full'} transform-translate duration-500 ease-in-out`} >
      <div className='aboslute flex items-start'>
        <button className='absolute right-full' onClick={handleShow}>
          <GiHamburgerMenu className='fill-slate-200' size='2rem'/>
        </button>
        <HamburgerMenu handleShow={handleShow}/>
      </div>
    </div>
  )
}

export default Hamburger