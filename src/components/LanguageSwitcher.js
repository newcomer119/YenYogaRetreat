import React from "react";

const LanguageSwitcher = () => {
  return (
    <div className="absolute top-1 lg:top-2 right-10 lg:right-2 flex items-center bg-[#FFFFFF50] p-1.5 lg:p-2 rounded-md shadow-md">
      <span className="cursor-pointer pr-1.5 lg:pr-2 border-r hover:border-[#000000] text-xs lg:text-sm text-gray-800 hover:text-[#9cb250]">EN</span>
      <span className="cursor-pointer pl-1 lg:pl-1.5 text-xs lg:text-sm text-gray-800 hover:text-[#9cb250]">VN</span>
    </div>
  );
};

export default LanguageSwitcher;