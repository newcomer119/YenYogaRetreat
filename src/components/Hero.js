import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import { useLanguage } from "../context/LanguageContext"; // Import the useLanguage hook
import { buttons, hero, images } from "../data";
import HeroImage from "../assets/img/courses/course-8-removebg.png";
import HeroImage2 from "../assets/img/courses/course-81.jpg"

const Hero = () => {
  const { language } = useLanguage(); // Use the language context
  const [isImageLoaded, setIsImageLoaded] = useState(false); // State to track image loading

  const scrollToGallery = () => {
    const gallerySection = document.getElementById("gallery");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to handle image load
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <section className="relative h-svh max-h-[1000px] bg-hero bg-no-repeat tab:bg-fixed bg-bottom bg-cover">
      <div className="heroOverlay top-section pb-10 h-full">
        <div className="h-full heroImage sm:pb-24" style={{ backgroundImage: isImageLoaded ? `url(${HeroImage})` : 'none', backgroundPosition: 'right-center', backgroundSize: 'contain' }}>
          <img src={HeroImage} alt="Hero" onLoad={handleImageLoad} style={{ display: 'none' }} /> {/* Lazy load image */}
          <div className="grid grid-cols-1 tab:grid-cols-12 gap-x-8 pt-2 mob1:pt-16 lap1:pt-24 big:pt-32 sm:pt-8 sm:gap-y-4">
            <div
              className="col-span-1 tab:col-span-12 tab2:col-span-4 preheader text-md"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              {hero[language].preheader}
            </div>
            <div
              className="headline row-start-2 tab:col-span-10 tab2:col-span-5 mt-2 mb-4 text-[38px] line-clamp-3"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              {hero[language].headline.noSpan}{" "}
              <span className="text-cta2 font-bold text-md">
                {hero[language].headline.span}{" "}
              </span>
            </div>
            <div
              className="ml-1 row-start-3 col-span-1 tab:col-span-8 tagline mb-6 text-md"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              {hero[language].text}
            </div>
            <Link
              to="/courses"
              className="ml-1 row-start-4 col-span-1 tab:col-span-3"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              <button className="btn bg-cta2 rounded-lg text-white hover:bg-highlight2 hover:shadow-lg hover:-translate-y-1 hover:text-cta2 transition-all duration-300 mb-2">
                {buttons[language].viewCourses}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
