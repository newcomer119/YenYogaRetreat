import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { about, buttons, sectionHeaders } from "../data";

const About = () => {
  const { language } = useLanguage();

  return (
    <section className="top-section">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {sectionHeaders[language].about}
          </h1>
          <p className="text-lg text-gray-600">{about[language].established}</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left Section */}
          <div className="lg:w-1/3 w-full">
            <img
              src={about.image}
              alt="Yên Yoga & Retreat"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Details Section */}
          <div className="lg:w-2/3 w-full">
            <ul className="space-y-4 text-gray-700 text-lg">
              {about[language].details.map((detail, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-orange-500">•</span>
                  {detail}
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center lg:text-left">
              <Link to="/trainers">
                <button className="px-6 py-3 bg-orange text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300">
                  {buttons[language].meetOurTrainers}
                </button>
              </Link>
              <Link to="/courses">
                <button className="ml-4 px-6 py-3 bg-orange text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300">
                  {buttons[language].viewCourses}
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <blockquote className="italic text-2xl text-gray-700">
            {about[language].quote}
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;
