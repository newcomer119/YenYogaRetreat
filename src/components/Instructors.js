import React from "react";
import { Link } from "react-router-dom";
import { inst } from "../data";

const Instructors = () => {
  return (
    <section id="instructors/hoan" className="bg-egreen-70 py-12">
      <div className="mx-auto">
        <h1
          className="h2 text-gray-800"
          data-aos="fade-up"
        >
          Meet Our Yogis
        </h1>

        <div className="flex flex-col gap-10 items-center md:px-32 px-10 mb-[50px] ">
          {inst.instructors.map((instructor) => (
            <div
              key={instructor.id}
              className={`flex ${
                instructor.id === "yen" ? "md:flex-row-reverse" : "md:flex-row"
              } items-center md:items-stretch flex-col w-full h-auto`}
              data-aos="zoom-out-up"
              data-aos-delay="150"
            >
              <Link
                to={`/instructors/${instructor.id}`}
                className="relative w-full md:w-auto h-[400px] overflow-hidden"
              >
                <img
                  src={instructor.imageL}
                  alt={instructor.name}
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-100"
                />
              </Link>

              <div className="p-[40px] lg:p-[65px] flex flex-col items-start bg-[#ffffffcc] w-full md:w-3/5 h-auto shadow-lg hover:bg-white transition-all duration-300">
                <p className="text-sm font-semibold text-egreen">
                  {instructor.title}
                </p>
                <p className="mt-2 mb-3 lg:mb-5 text-[28px] md:text-[32px] text-gray-800">
                  {instructor.name}
                </p>
                <p className="text-sm font-light mb-2">{instructor.bio}</p>

                <Link to={`/instructors/${instructor.id}`}>
                  <button className="btn-md bg-egreen-90 hover:bg-egreen text-white mt-2 transition-all duration-300">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
