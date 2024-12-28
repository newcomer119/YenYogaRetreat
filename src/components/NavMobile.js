import React, { useState, useEffect } from "react";

// import menu btn icon
import { BiMenu } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";

// import data
import { nav } from "../data";
import { useLanguage } from "../context/LanguageContext";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();

  return (
    <nav className="ml-2 tab2:hidden">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`text-3xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}
      >
        {isOpen ? <IoCloseSharp /> : <BiMenu />}
      </div>
      <div
        className={`${
          isOpen ? "h-auto" : "hidden"
        } absolute top-20 right-4 w-full mob1:w-2/3 mob2:w-1/2 pl-8 tab:pr-12`}
      >
        <ul className="max-h-svh p-1 flex flex-col bg-white shadow-primary rounded-lg overflow-hidden divide-y divide-dotted transition-all">
          {nav.map((item, index) => {
            return (
              <a href={item[language].href}>
                <li key={index} className="p-4">
                  {item[language].name}
                </li>
              </a>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavMobile;
