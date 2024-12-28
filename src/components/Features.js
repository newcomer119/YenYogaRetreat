import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "../video.scss";
import { BsPlayCircleFill } from "react-icons/bs";

const Features = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="section min-h-[428px] pt-8 mt-[120px] lg:mt-[130px]" data-aos="zoom-in" data-aos-duration="1000">
      {/* Video Background */}
      <div className="bg-video h-[310px] bg-cover bg-center bg-no-repeat lg:h-[622px] w-full flex justify-center items-center rounded-md lg:-mt-[150px] mb-[28px] lg:mb-20">
        {/* Video Play Button */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="text-6xl lg:text-[120px] cursor-pointer hover:scale-110 text-orange transition"
        >
          <BsPlayCircleFill className="text-transparent hover:text-orange"/>
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
