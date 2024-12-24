import React, { useState } from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { courses } from "../data"; // Import your course data
import { FaLocationDot } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { BsCalendar2DateFill } from "react-icons/bs";
import { useLanguage } from "../context/LanguageContext";

const Courses = () => {
  const [hovered, setHovered] = useState({ id: null, type: null });
  const { language } = useLanguage();

  // Define text based on the selected language
  const titles = {
    en: {
      mainTitle: "Upcoming Events & Classes",
    },
    vn: {
      mainTitle: "Sự kiện & Lớp học sắp tới",
    },
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: courses.length > 3,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: false,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "40px",
          autoplay: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
          autoplay: true,
        },
      },
    ],
  };

  return (
    <section id="courses" className="py-12">
      <div className="mx-auto">
        <h1 className="h2 text-gray-800" data-aos="fade-up">
          {titles[language].mainTitle}
        </h1>

        {/* Courses Carousel */}
        <div className="px-4 lg:px-16 mx-10 mb-16 ">
          <style>
            {`
            .slick-slide {
            padding: 0 10px;
            }
            .slick-slide:hover{
            border: black;
            }
            .slick-list {
            margin: 0 -10px;
            }
            
    `}
          </style>

          <Slider {...settings}>
            {courses.map((course, index) => {
              const {
                link,
                hot,
                mode,
                image,
                title,
                summary,
                date,
                instructors,
                location,
                type,
                duration,
              } = course;
              return (
                  <div
                    key={index}
                    className={`${
                      hot ? "hot" : ""
                    } w-full max-w-md mx-auto bg-white rounded-lg shadow-lg focus:transition-none transition-all duration-300`}
                    data-aos="fade-up"
                    data-aos-delay="150"
                  >
                    <div className="relative">
                      <img
                        src={image}
                        alt={title}
                        className="w-full h-48 object-cover"
                      />
                      {type === "event" && (
                        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                          Event
                        </span>
                      )}
                    </div>

                    <div className="p-4">
                    <p
                        className={`${
                          hot ? "text-red-500" : "text-orange"
                        } text-xl font-semibold text-center text-gray-900`}
                      >
                        {title}
                      </p>
                      <p className="text-sm text-center text-gray-600 mt-2">
                        {summary}
                      </p>

                      <div className="flex items-center justify-between mt-5 px-2">
                        <div className="flex items-center gap-5 text-[20px]">
                          {/* Tooltip for Person */}
                          <div
                            className="relative group"
                            onMouseEnter={() =>
                              setHovered({ id: index, type: "person" })
                            }
                            onMouseLeave={() =>
                              setHovered({ id: null, type: null })
                            }
                          >
                            <IoPerson className="text-2xl cursor-pointer" />
                            {hovered.id === index &&
                              hovered.type === "person" && (
                                <div className="absolute left-4 bottom-8 mt-2 p-2 w-40 md:w-64 bg-gray-400 text-green text-sm rounded shadow-lg z-10">
                                  {instructors.length === 0
                                    ? "No instructors"
                                    : instructors.map((instructor, i) => (
                                        <div key={i} className="mb-1">
                                          {instructor.name}
                                        </div>
                                      ))}
                                </div>
                              )}
                          </div>

                          {/* Tooltip for Location */}
                          {mode === "Offline" && (
                            <div
                              className="relative group"
                              onMouseEnter={() =>
                                setHovered({ id: index, type: "location" })
                              }
                              onMouseLeave={() =>
                                setHovered({ id: null, type: null })
                              }
                            >
                              <FaLocationDot className="text-2xl cursor-pointer" />
                              {hovered.id === index &&
                                hovered.type === "location" && (
                                  <div className="absolute left-4 bottom-8 mt-2 p-2 w-40 md:w-64 bg-gray-400 text-green text-sm rounded shadow-lg z-10">
                                    {location === ""
                                      ? "Location not available"
                                      : location}
                                  </div>
                                )}
                            </div>
                          )}

                          {/* Tooltip for Date */}
                          <div
                            className="relative group"
                            onMouseEnter={() =>
                              setHovered({ id: index, type: "date" })
                            }
                            onMouseLeave={() =>
                              setHovered({ id: null, type: null })
                            }
                          >
                            <BsCalendar2DateFill className="text-2xl cursor-pointer" />
                            {hovered.id === index &&
                              hovered.type === "date" && (
                                <div className="absolute left-4 bottom-8 mt-2 p-2 w-40 md:w-64 bg-gray-400 text-green text-sm rounded shadow-lg z-10">
                                  {date === "" ? "Date unavailable" : date}
                                </div>
                              )}
                          </div>
                        </div>
                        <span className="text-sm text-green">{duration}</span>
                      </div>
                    </div>

                    <div className="flex justify-between px-4 py-2 border-t">
                      <Link
                        to={`/course-selection/${link}`}
                        className="text-orange py-2 px-4 rounded-lg hover:text-egreen transition"
                      >
                        Book Now
                      </Link>
                      <Link
                        to={`/classes#${link}`}
                        className="text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition"
                      >
                        More Info
                      </Link>
                    </div>
                  </div>
              );
            })}
          </Slider>
        </div>

        {/* Browse All Button */}
        <Link to="/classes" className="flex justify-center">
          <button className="bg-orange-200 text-lg text-white rounded-lg py-2 px-6 hover:bg-orange transition-all">
            Browse All
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Courses;
