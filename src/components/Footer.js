import React from 'react';

// import logo
import Logo from '../assets/img/logo.png'

// import icons
import{ FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className='pb-[70px]'>
      <div className="container mx-auto">
        <div className='flex flex-col justify-between 
        items-center lg:flex-row gap-y-5'>
           {/* logo  */}
           <a href="/">
            <img src={Logo} alt="" srcset="" />
           </a>
           {/* CopyRight Text  */}
           <p>&copy; 2024. All Rights Reserved</p>
           {/* social icons  */}
           <div className='flex gap-x-4 text-orange text-lg'>
            <div className='w-[50px] h-[50px] bg-white 
            rounded-full flex justify-center items-center 
            shadow-primary cursor-pointer hover:text-paragraph transition'>
              <FaYoutube/>
            </div>
            <div className='w-[50px] h-[50px] bg-white 
            rounded-full flex justify-center items-center 
            shadow-primary cursor-pointer hover:text-paragraph transition'>
              <FaInstagram/>
            </div>
            <div className='w-[50px] h-[50px] bg-white 
            rounded-full flex justify-center items-center 
            shadow-primary cursor-pointer hover:text-paragraph transition'>
              <FaFacebook/>
            </div>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
