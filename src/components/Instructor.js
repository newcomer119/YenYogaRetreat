import React from "react";

// Import images for instructors
import Teacher1Image from "../assets/img/hero/guy.png";
import Teacher2Image from "../assets/img/hero/guy.png";

const Instructors = () => {
  return (
    <section id="instructors" className="instructors-section py-12 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-12 text-gray-800">
          Meet Our Instructors
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {/* Instructor 1 */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
            <img
              src={Teacher1Image}
              alt="Khanh Vo"
              className="w-44 h-44 rounded-full border-4 border-orange-500 shadow-lg"
            />
            <p className="mt-4 text-lg font-semibold text-gray-800">
              Khanh Vo
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Professional Musician & Guitar Instructor
            </p>
          </div>

          {/* Instructor 2 */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
            <img
              src={Teacher2Image}
              alt="Heather Drageset"
              className="w-44 h-44 rounded-full border-4 border-orange-500 shadow-lg"
            />
            <p className="mt-4 text-lg font-semibold text-gray-800">
              Heather Drageset
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Yoga Enthusiast & Wellness Coach
            </p>
          </div>
        </div>
        <button className="mt-12 px-6 py-3 bg-orange-500 black font-semibold rounded-lg shadow-md hover:bg-orange-600 transition">
          See More
        </button>
      </div>
    </section>
  );
};

export default Instructors;
