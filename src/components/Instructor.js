import React from "react";
import { useParams, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { TbFaceIdError } from "react-icons/tb";
import { buttons, sectionHeaders, inst } from "../data";
import InstructorCard from "./InstructorCard";

const Instructor = () => {
  const { id } = useParams();
  const instructor = inst.find((ins) => ins.id === id);
  const { language } = useLanguage();

  if (!instructor) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <TbFaceIdError size={60} className="text-red-100" />
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          {sectionHeaders[language].trainerNotFound}
        </h1>
        <Link to="/trainers">
          <button className="px-6 py-3 bg-green-200 text-white rounded-lg shadow-md hover:bg-green-700 transition-all">
            {buttons[language].viewTrainers}
          </button>
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-gray-50  top-section">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Section */}
          <InstructorCard instructor={instructor[language]} all={false} className="col-span-1" />

          {/* Right Section */}
          <div className="col-span-2">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              {sectionHeaders[language].aboutTrainer} {instructor[language].name}
            </h2>
            <ul className="space-y-4 text-gray-700 text-lg">
              {instructor[language].qualifications.map((qual, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  {qual}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <blockquote className="border-l-4 border-green-500 pl-4 text-gray-700 italic text-xl">
                {instructor.bio}
              </blockquote>
            </div>

            <div className="mt-10 text-center lg:text-left">
              <Link to="/trainers">
                <button className="px-6 py-3 bg-green-200 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-all duration-300">
                  {buttons[language].viewTrainers}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
