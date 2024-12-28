import React from "react";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { sectionHeaders, footer } from "../data";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();
  return (
    <footer className="py-[30px]">
      <div className="container mx-auto max-w-[90%]">
        <div
          className="flex flex-col justify-between 
        items-center lg:flex-row gap-y-5"
        >
          {/* logo  */}
          <a href="/">
            <img src={footer.logo} alt="" srcset="" className="w-20 h-auto" />
          </a>
          {/* CopyRight Text  */}
          <p>{sectionHeaders[language].footer}</p>
          {/* social icons  */}
          <div className="flex gap-x-4 text-egreen text-[25px]">
            <a href={footer.social.youtube} target="blank">
              <div
                className="w-[50px] h-[50px] bg-white 
            rounded-full flex justify-center items-center 
            shadow-primary cursor-pointer hover:text-orange transition"
              >
                <FaYoutube />
              </div>
            </a>

            <a href={footer.social.instagram} target="blank">
              <div
                className="w-[50px] h-[50px] bg-white 
            rounded-full flex justify-center items-center 
            shadow-primary cursor-pointer hover:text-orange transition"
              >
                <FaInstagram />
              </div>
            </a>
            <a href={footer.social.facebook} target="blank">
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
