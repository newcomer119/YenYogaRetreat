import React from "react";
import { useLocation } from 'react-router-dom';
import { navigation } from "../data";

const Nav = () => {
  const location = useLocation();

  return (
    <nav>
      <ul className="flex gap-x-[42px]">
        {navigation.map((item, index) => {
          const isActive = location.pathname === item.href;
          
          return (
            <li key={index} className="relative group">
              <a
                href={item.href}
                className={`inline-block text-black hover:text-gray-600 transition-colors duration-300 pb-0.5
                  ${isActive ? 'font-medium' : 'font-normal'}`}
              >
                {item.name}
                <span
                  className={`absolute left-0 bottom-0 w-full h-0.5 bg-egreen-70 transform origin-left transition-transform duration-300 ease-out
                    ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                  style={{ marginTop: '0px' }}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
