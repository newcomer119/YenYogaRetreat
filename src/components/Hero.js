import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import Image from "../assets/img/hero/guy.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext"; // Import the useLanguage hook

const translations = {
  en: {
    title: "Reconnect with Mind, Body and Soul",
    description: "Experience transformative yoga in the heart of Vietnam, or join us online from anywhere in the world. Book today and embark on a journey of wellness.",
    bookNow: "Book Now",
    gallery: "Gallery >"
  },
  vn: {
    title: "Kết nối lại với Tâm trí, Cơ thể và Linh hồn",
    description: "Trải nghiệm yoga biến đổi tại trung tâm Việt Nam, hoặc tham gia trực tuyến từ bất kỳ đâu trên thế giới. Đặt chỗ ngay hôm nay và bắt đầu hành trình chăm sóc sức khỏe.",
    bookNow: "Đặt ngay",
    gallery: "Thư viện >"
  }
};

const Hero = () => {
  const { language } = useLanguage(); // Use the language context

  const scrollToGallery = () => {
    const gallerySection = document.getElementById("gallery");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="sm:min-h-[450px] lg:min-h-[500px] pt-9 lg:bg-circle lg:bg-no-repeat lg:bg-right-top">
      <LanguageSwitcher /> {/* Use the same LanguageSwitcher */}
      <div className="lg:pl-32 mx-auto">
        <div className="flex flex-col items-center lg:flex-row lg:items-start pt-10 lg:pt-32 xxl:max-w-[70%]">
          <div className=" flex-1 mt-12 mx-8 md:mx-0 lg:min-w-[50%] ">
            <h1
              className="h1 mb-3 lg:mb-[22px]"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              {translations[language].title} {/* Directly using the title */}
            </h1>
            <p
              className="mb-6 lg:mb-12 max-w-[60%] sm:max-w-full lg:text-lg"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              {translations[language].description} {/* Directly using the description */}
            </p>
            {/* btn group */}
            <div className="mb-6 md:mb-12 space-x-4">
              <Link to="/classes">
                <button
                  className="btn btn-sm lg:btn-lg btn-orange hover:text-lg text-white bg-transparent-border border-stroke-1  
                  hover:bg-stroke-3 hover:shadow-lg hover:-translate-y-1 hover:text-orange transition-all duration-300 shadow-primary"
                >
                  {translations[language].bookNow} {/* Directly using the bookNow */}
                </button>
              </Link>
              <button
                onClick={scrollToGallery}
                className="btn btn-md lg:btn-xl bg-egreen hover:text-xl text-white
                  hover:bg-[#7a8f3f] hover:shadow-xl hover:-translate-y-1.5 
                  transition-all duration-300 shadow-primary border-2
                  px-6 py-3 lg:px-8 lg:py-2 text-lg lg:text-xl rounded-xl"
              >
                {translations[language].gallery} {/* Directly using the gallery */}
              </button>
            </div>
          </div>
          {/* images */}
          <div className="absolute right-0 -top-10  lg:static w-full bg-circle bg-cover w-auto lg:bg-none -z-50 lg:z-0 opacity-60 md:opacity-100">
            <div className=" flex-1 flex justify-end lg:justify-end">
              <div className=" w-[300px] h-[450px] sm:w-[300px] sm:h-[400px] lg:w-[504px] lg:h-[680px] mt-56 lg:mt-10 md:mr-4">
                <Parallax
                  className="w-full h-full p-24 sm:p-16 lg:p-16 xxl:p-20"
                  bgImage={Image}
                  bgImageAlt="image"
                  strength={200}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
