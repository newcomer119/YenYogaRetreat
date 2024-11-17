import React from "react";

// import parallax
import { Parallax } from "react-parallax";

// import images
import Image from "../assets/img/hero/guy.png";
import LanguageSwitcher from "./LanguageSwitcher";

const Hero = () => {
  return (
    <section className="sm:min-h-[450px] lg:min-h-[500px] pt-9 lg:bg-circle lg:bg-no-repeat lg:bg-right-top">
      <LanguageSwitcher/>
      <div className="lg:pl-32 mx-auto">
        <div className="flex flex-col items-center lg:flex-row lg:items-start pt-10 lg:pt-32 xxl:max-w-[70%]">
          <div className=" flex-1 mt-12 mx-8 md:mx-0 lg:min-w-[50%] ">
            <h1
              className="h1 mb-3 lg:mb-[22px]"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              Reconnect with Mind, Body and Soul
            </h1>
            <p
              className="mb-6 lg:mb-12 max-w-[60%] sm:max-w-full lg:text-lg"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              Experience transformative yoga in the heart of Vietnam, or join us
              online from anywhere in the world. Book today and embark on a
              journey of wellness.
            </p>
            {/* btn group */}
            <div className="mb-6 md:mb-12 space-x-4">
              <button
                className="btn btn-sm lg:btn-lg btn-orange hover:text-lg text-white bg-transparent-border border-stroke-1  
              hover:bg-stroke-3 hover:shadow-lg hover:-translate-y-1 hover:text-orange transition-all duration-300 shadow-primary"
              >
                Book Now
              </button>
              <button className="btn btn-sm lg:btn-lg bg-egreen hover:text-lg text-white hover:bg-[#7a8f3f] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 shadow-primary">
                Gallery {">"}
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
