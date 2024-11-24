import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { inst } from "../data";

const Instructor = () => {
  const { id } = useParams();
  const instructor = inst.instructors.find((ins) => ins.id === id);

  if (!instructor) {
    return (
      <div className="h-[70vh] text-center py-12">
        <h1 className="mt-8 mb-16 text-gray-800 h2 text-center">
          Instructor Not Found
        </h1>
        <Link to="/instructors">
          <button className="btn-md bg-egreen-90 hover:bg-egreen text-white transition-all duration-300">
            Back to Instructors
          </button>
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-egreen-70 py-12">
      <div className="mx-auto md:px-24 px-4">
        <h1 className="mt-8 mb-4 text-gray-800 h2 text-center">
          {instructor.name}
        </h1>
        <p className=" mb-10 text-md font-semibold text-center">
          {instructor.title}
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch w-full h-auto">
          {/* Left Section */}
          <div className="relative flex flex-col w-full md:w-[1/5] h-auto items-center pb-2">
            {/* Image */}
            <div className="w-[300px] h-auto">
              <img
                src={instructor.imageS}
                alt={instructor.name}
                className="w-full h-full object-cover "
              />
            </div>

            {/* IVF Divs */}
            <div className="flex flex-row w-full  h-auto justify-center gap-8 text-[40px] py-3 text-green ">
              <FaYoutube
                className="w-[50px] h-[50px] flex justify-center items-center 
            cursor-pointer hover:text-youtube transition"
              />
              <RiInstagramFill 
              className="w-[50px] h-[50px] flex justify-center items-center
              cursor-pointer hover:text-instagram transition" />
              <FaFacebook
                className="w-[50px] h-[50px] flex justify-center items-center 
            cursor-pointer hover:text-facebook transition"
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="p-6 flex flex-col items-center justify-between w-full md:w-[4/5] h-auto">
            <ul className="mt-4 space-y-2 text-gray-800 lg:text-lg md:text-md">
              {instructor.qualifications.map((qual, index) => (
                <li key={index} className="list-disc list-inside lg:pt-3">
                  {qual}
                </li>
              ))}
            </ul>
            <Link to={`/instructors`}>
              <button className="btn-md bg-orange-200 hover:bg-orange text-white mt-4 transition-all duration-300">
                Back to Instructors
              </button>
            </Link>
          </div>
        </div>

        <figure class="max-w-screen-md mx-auto text-center mt-5">
          <svg
            class="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p class="text-2xl italic font-medium text-gray-900 dark:text-[#6A8A30]">
              {instructor.bio}
            </p>
          </blockquote>
        </figure>
      </div>
    </section>
  );
};

export default Instructor;
