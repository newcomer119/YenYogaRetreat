import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { buttons, sectionHeaders, contact } from "../data";

const Unsure = () => {
  const { language } = useLanguage();

  return (
    <section className="bg-primary py-12">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center max-w-[991px]">
        {/* Left Section: Text */}
        <div className="text-center lg:text-left text-white w-[65%]">
          <p className="text-md tracking-wide text-subtext">{contact[language].phone}</p>
          <p className="my-3 text-lg lap:text-2xl big:text-4xl tracking-wide font-light">
            {sectionHeaders[language].call}
          </p>
        </div>

        {/* Right Section: Call Button */}
        <Link to="tel:+84352841208" className="my-6 lg:mt-0">
          <button className="btn-md px-8 py-2 border border-white text-white hover:bg-white hover:text-green transition duration-300 lap2:text-2xl">
            {buttons[language].callUs}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Unsure;
