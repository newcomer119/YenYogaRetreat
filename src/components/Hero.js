import React from "react";

// import parallax
import { Parallax } from "react-parallax";

// import images
import Image from "../assets/img/hero/guy4.png";

const Hero = () => {
  return (
    <section className="min-h-[[618px] lg:min-h-[815px] pt-9 lg:bg-circle lg:bg-no-repeat lg:bg-right-top">
      <div className="lg:pl-32 mx-auto">
        <div className="flex flex-col items-center lg:flex-row lg:items-start pt-10 lg:pt-32">
          <div className=" flex-1 mt-12 mx-10 md:ml-0">
            <h1
              className="h1 mb-3 lg:mb-[22px]"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              Reconnect with Mind, Body and Soul
            </h1>
            <p
              className="mb-6 lg:mb-12 max-w-[480px] lg:text-lg"
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
              hover:bg-stroke-3 hover:shadow-lg hover:-translate-y-1 hover:text-orange transition-all duration-300"
              >
                Book Now
              </button>
              <button className="btn btn-sm lg:btn-lg bg-egreen hover:text-lg text-white hover:bg-[#7a8f3f] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                Gallery {">"}
              </button>
            </div>
          </div>
          {/* images */}
          <div className="w-full bg-circle bg-cover lg:bg-none lg:w-auto">
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="w-[234px] h-[234px] lg:w-[504px] lg:h-[744px] lg:mt-0">
                <Parallax
                  className="w-full h-full p-28 lg:p-16"
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
