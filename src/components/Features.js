import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "../video.scss";
import { BsPlayCircleFill } from "react-icons/bs";

const Features = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="section px-2 big:px-40" data-aos="zoom-in" data-aos-duration="1000">
      {/* Video Background */}
      <div className="bg-video bg-cover bg-center bg-no-repeat w-full h-60 tab:h-96  tab2:h-[600px] big:h-[1000px] flex justify-center items-center rounded-lg">
        {/* Video Play Button */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="text-6xl tab2:text-9xl cursor-pointer hover:scale-110 text-orange transition"
        >
          <BsPlayCircleFill className="text-transparent hover:text-cta1"/>
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
