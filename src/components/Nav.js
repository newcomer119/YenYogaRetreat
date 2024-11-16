import React, { useState } from "react";

// Import data
import { navigation } from "../data";

const Nav = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track active index

  const handleClick = (index) => {
    setActiveIndex(index); // Set active index on click
  };

  return (
    <nav>
      <ul className="flex gap-x-[42px]">
        {navigation.map((item, index) => {
          return (
            <li key={index} className="relative">
              <a
                href={item.href}
                onClick={() => handleClick(index)} // Handle click event
                className="transition"
              >
                {item.name}
                {activeIndex === index && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-egreen-70 opacity-70"
                  />
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
