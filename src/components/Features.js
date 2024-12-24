import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import "../video.scss";
import { BsPlayCircleFill } from "react-icons/bs";
import { useLanguage } from "../context/LanguageContext";

const Features = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();

  // Define text based on the selected language
  const titles = {
    en: {
      mainTitle: "The Better Way to Start Yoga",
      description: "Practice anywhere, anytime. Explore a new way to exercise and learn more about yourself. We are giving you the best.",
      buttonText: "Get Started",
    },
    vn: {
      mainTitle: "Cách Tốt Hơn Để Bắt Đầu Yoga",
      description: "Thực hành ở bất cứ đâu, bất cứ lúc nào. Khám phá một cách mới để tập thể dục và tìm hiểu thêm về bản thân. Chúng tôi đang mang đến cho bạn điều tốt nhất.",
      buttonText: "Bắt Đầu",
    },
  };

  return (
    <section className="bg-light-blue min-h-[428px] pt-8 pb-[38px] lg:pb-[150px] mt-[120px] lg:mt-[130px]">
      <div className="container mx-auto">
        {/* Video Background */}
        <div className="bg-video h-[310px] bg-cover bg-center bg-no-repeat lg:h-[622px] w-full flex justify-center items-center rounded-md lg:-mt-[150px] mb-[28px] lg:mb-20">
          {/* Video Play Button */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="text-6xl lg:text-[120px] cursor-pointer hover:scale-110 text-orange transition"
          >
            <BsPlayCircleFill />
          </div>
        </div>
        {/* Text Section */}
        <div className="flex flex-col items-center text-center">
          <h2 className="h2 mb-3 lg:mb-4">
            {titles[language].mainTitle}
          </h2>
          <p className="max-w-[450px] mb-[1px] lg:mb-[18px]">
            {titles[language].description}
          </p>
          <Link to="/classes">
            <button className="btn btn-sm btn-orange">
              {titles[language].buttonText}
            </button>
          </Link>
        </div>
      </div>
      {/* Modal Video */}
      <ModalVideo 
        channel="youtube"
        autoplay 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        videoId="Htgzlf9j0oA" 
      />
    </section>
  );
};

export default Features;
