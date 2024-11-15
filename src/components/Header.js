import React, {useState, useEffect}from 'react';
import logo from "../assets/img/logo.png"

import Nav from './Nav';
import NavMobile from './NavMobile';

import Logo from '../assets/img/logo.png'

const Header = () => {
  const [header, setHeader] = useState('false');

  useEffect(() => { 
    // scroll event listener 
    window.addEventListener('scroll', () => {
      window.scrollY > 36 ? setHeader(true) : setHeader(false);
    })
  })

  return(
    <header className={`${header ? 'top-0' : 'top-9'} fixed bg-white w-full max-w-[90vw] lg:max-w-[1170px]
    mx-6 my-6  rounded-md h-[90px] shadow-primary px-4 lg:px-6 
    z-20 transition-all duration-500 flex items-center justify-between`}>
      <div className="flex items-center">
        {/* Logo */}
        <a href='#'>
          <img src={logo} alt=''/>
        </a>
        {/* nav */}
        <div className='hidden lg:flex'>
          <Nav/>
        </div>
      </div>
      <div className='flex items-center'>
        {/* buttons */}
        <div className='flex gap-5 '>
          <button className='text-heading font-medium text-sm lg:text-base hover:text-orange-100 transition'>Sign In</button>
          <button className='btn btn-md lg:px-[30px] bg-orange-100 border border-orange text-orange font-medium text-sm 
          lg:text-base hover:bg-orange-200 hover:text-white transition'>Sign Up</button>
        </div>
        {/* nav mobile */}
        <NavMobile/>
      </div>
    </header>
  );
};

export default Header;
