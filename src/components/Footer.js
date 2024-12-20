import React from "react";

// import logo
import Logo from "../assets/img/logos/logo-og.png";

// import icons
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="py-[30px]">
      <div className="container mx-auto max-w-[90%]">
        <div
          className="flex flex-col justify-between 
        items-center lg:flex-row gap-y-5"
        >
          {/* logo  */}
          <a href="/">
            <img src={Logo} alt="" srcset="" className="w-32 h-auto" />
          </a>
          {/* CopyRight Text  */}
          <p>&copy; 2024. All Rights Reserved</p>
          {/* social icons  */}
          <div className="flex gap-x-4 text-egreen text-[25px]">
            <a href="https://www.youtube.com/@Yenyogaretreat/videos" target="blank">
              <div
                className="w-[50px] h-[50px] bg-white 
            rounded-full flex justify-center items-center 
            shadow-primary cursor-pointer hover:text-orange transition"
              >
                <FaYoutube />
              </div>
            </a>

            <a href="https://www.instagram.com/yenyogaretreat.nhatrang/" target="blank">
              <div
                className="w-[50px] h-[50px] bg-white 
            rounded-full flex justify-center items-center 
            shadow-primary cursor-pointer hover:text-orange transition"
              >
                <FaInstagram />
              </div>
            </a>
            <a href="https://www.facebook.com/yenyoga.nt" target="blank">
              <div
                className="w-[50px] h-[50px] bg-white 
            rounded-full flex justify-center items-center 
            shadow-primary cursor-pointer hover:text-orange transition"
              >
                <FaFacebook />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
