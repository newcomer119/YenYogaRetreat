import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { inst } from "../data";
import { useLanguage } from "../context/LanguageContext";

const Instructor = () => {
  const { id } = useParams();
  const instructor = inst.instructors.find((ins) => ins.id === id);
  const { language } = useLanguage();

  // Define text based on the selected language
  const titles = {
    en: {
      notFound: "Instructor Not Found",
      backToInstructors: "Back to Instructors",
      qualifications: "Qualifications",
    },
    vn: {
      notFound: "Không tìm thấy giảng viên",
      backToInstructors: "Quay lại giảng viên",
      qualifications: "Chứng chỉ",
    },
  };

  if (!instructor) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">{titles[language].notFound}</h1>
        <Link to="/instructors">
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-all">
            {titles[language].backToInstructors}
          </button>
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">{instructor.name}</h1>
          <p className="text-lg text-gray-600 font-medium">{instructor.title}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Section */}
          <div className="col-span-1 flex flex-col items-center">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={instructor.imageS}
                alt={instructor.name}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="flex justify-center gap-4 mt-6 text-5xl text-orange">
              {instructor.instagram && (
                <a href={instructor.instagram} target="_blank" rel="noopener noreferrer">
                  <RiInstagramFill className="hover:text-instagram transition-all" />
                </a>
              )}
              {instructor.facebook && (
                <a href={instructor.facebook} target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="hover:text-facebook transition-all" />
                </a>
              )}
            </div>
          </div>

          {/* Right Section */}
          <div className="col-span-2">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">{titles[language].qualifications}</h2>
            <ul className="space-y-4 text-gray-700 text-lg">
              {instructor.qualifications.map((qual, index) => (
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
              <Link to="/instructors">
                <button className="px-6 py-3 bg-egreen text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-all duration-300">
                  {titles[language].backToInstructors}
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
