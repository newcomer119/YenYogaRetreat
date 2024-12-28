import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { buttons } from "../data";
import { useLanguage } from "../context/LanguageContext";

const CourseCard = ({ course, index }) => {
  const { language } = useLanguage();
  const [mobile, setMobile] = useState(window.innerWidth <= 769);
  const { id, image } = course;
  const { title, summary, type } = course[language];

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 769);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getDates = (x) => {
    if (!type[x]) {
      return "Not Available";
    }
    const { startDate, endDate } = type[x];
    return `${startDate} - ${endDate}`;
  };

  return (
    <div
      className={`relative flex flex-col w-full mx-auto bg-white rounded-b-lg shadow-lg `}
      data-aos="fade-up"
      data-aos-delay={50 * index}
    >
      {/* Image Section */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full object-cover"
          style={{ height: "200px" }}
        />
        {!mobile && (
          <div className="absolute inset-0 flex justify-center items-center gap-4 opacity-0 hover:opacity-100 bg-blue bg-opacity-40 transition-all duration-200">
            <Link
              to={`/course-selection/${id}`}
              className="bg-orange text-white py-2 px-4 rounded-lg shadow-lg hover:bg-orange-hover transition-all"
            >
              {buttons[language].bookNow}
            </Link>
            <Link
              to={`/courses/${id}`}
              className="bg-gray text-green py-2 px-4 rounded-lg shadow-lg hover:bg-gray-600 hover:text-white transition-all"
            >
              {buttons[language].moreInfo}
            </Link>
          </div>
        )}
      </div>

      {/* Text Section */}
      <div className="p-4 divide-y divide-dotted divide-gray">
        <div>
          <div className="text-base font-bold mb-12 leading-tight h-10 text-orange">
            <Link to={`/courses/${id}`} className="hover:text-blue">
              {title}
            </Link>
            <p className="text-xs font-medium mt-2 line-clamp-2 h-8 text-[#000]">
              {summary}
            </p>
          </div>
          {mobile && (
            <div className="flex justify-center items-center gap-4 text-xs">
              <Link
                to={`/courses/${id}`}
                className="bg-orange text-white py-2 px-4 rounded-lg hover:bg-orange-hover transition-all"
              >
                {buttons[language].bookNow}
              </Link>
              <Link
                to={`/courses/${id}`}
                className="bg-gray text-green py-2 px-4 rounded-lg hover:bg-gray-600 hover:text-white transition-all"
              >
                {buttons[language].moreInfo}
              </Link>
            </div>
          )}
        </div>

        <div className="text-xs mt-2 h-10 text-[#000]">
          <div className="pt-1 font-light line-clamp-1">
            <span className="text-sm font-medium text-green">
              {buttons[language].online} :{" "}
            </span>
            {getDates("online")}
          </div>
          <div className="pb-1 font-light line-clamp-1">
            <span className="text-sm font-medium text-yellow">
              {buttons[language].offline}:{" "}
            </span>
            {getDates("offline")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
