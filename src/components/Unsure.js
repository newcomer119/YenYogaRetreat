import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const Unsure = () => {
  const { language } = useLanguage();

  // Define text based on the selected language
  const texts = {
    en: {
      phone: "0352 841 208",
      description: "Yoga curious? Unsure where to start or which course or class is right for you...",
      buttonText: "CALL US",
    },
    vn: {
      phone: "0352 841 208",
      description: "Bạn đang tò mò về yoga? Không chắc bắt đầu từ đâu hoặc khóa học nào là phù hợp với bạn...",
      buttonText: "GỌI CHÚNG TÔI",
    },
  };

  return (
    <section className="bg-green py-12">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center max-w-[991px]">
        {/* Left Section: Text */}
        <div className="text-center lg:text-left text-white w-[65%]">
          <p className="text-md tracking-wide text-green-200">{texts[language].phone}</p>
          <p className="my-3 text-lg tracking-wide font-light">
            {texts[language].description}
          </p>
        </div>

        {/* Right Section: Call Button */}
        <Link to="tel:+84352841208" className="my-6 lg:mt-0">
          <button className="btn-md px-8 py-2 border border-white text-white hover:bg-white hover:text-green transition duration-300">
            {texts[language].buttonText}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Unsure;
