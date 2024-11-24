import React from "react";
import { Link } from "react-router-dom";

const Unsure = () => {
  return (
    <section className="bg-green py-12">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center max-w-[991px]">
        {/* Left Section: Text */}
        <div className="text-center lg:text-left text-white w-[65%]">
          <p className="text-md tracking-wide text-green-200">0352 841 208</p>
          <p className="my-3 text-lg tracking-wide font-light">
            Yoga curious? Unsure where to start or which course or class is
            right for you...
          </p>
        </div>

        {/* Right Section: Call Button */}
        <Link to="tel:0477774685" className="my-6 lg:mt-0">
          <button className="btn-md px-8 py-2 border border-white text-white hover:bg-white hover:text-green transition duration-300">
            CALL US
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Unsure;
