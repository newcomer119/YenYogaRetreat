// src/components/AllCourses.js
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import data
import { courses } from "../data";
// import icons
import { FaLocationDot } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { BsCalendar2DateFill } from "react-icons/bs";

const AllCourses = () => {
  // const { addToCart, cart, isLoggedIn } = useContext(CartContext); // Access addToCart function and isLoggedIn from context
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const navigate = useNavigate(); // Initialize useNavigate
  const [hovered, setHovered] = useState({ id: null, type: null });
  const [hoveredPricing, setHoveredPricing] = useState({
    id: null,
    type: null,
  });
  // Function to toggle state
  const handleToggleHover = (id) => {
    setHoveredPricing((prev) =>
      prev.id === id ? { id: null, type: null } : { id, type: "view" }
    );
  };

  return (
    <section id="courses" className="py-12">
      <div className="mx-auto">
        {/* Success Message */}
        {successMessage && (
          <div className="bg-green-100 text-green-800 p-4 rounded-md mb-4">
            {successMessage}
          </div>
        )}

        <h1 className="h2 text-gray-800" data-aos="fade-up">
          Upcoming Events & Classes
        </h1>

        <div className="px-4 lg:px-16 mx-10 mb-16 flex flex-col gap-10">
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
              duration,
              description,
              details,
              pricing,
              certificate,
              location,
              type,
            } = course;
            return (
              <div
                className={`flex flex-col gap-12 p-5 rounded-lg bg-egreen-70 shadow-primary items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div
                  key={index}
                  id={link}
                  className={`${
                    hot ? "hot" : ""
                  } w-full max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg focus:transition-none transition-all duration-300`}
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
                      <div className={`flex items-center gap-5 text-[20px]`}>
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
                          <IoPerson className="text-2xl cursor-pointer hover:text-green" />
                          {hovered.id === index &&
                            hovered.type === "person" && (
                              <div className=" absolute left-4 bottom-8 mt-2 p-2 w-40 md:w-64 bg-gray-400 text-green text-sm rounded shadow-lg z-10">
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
                            <FaLocationDot className="text-2xl cursor-pointer hover:text-green" />
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
                          <BsCalendar2DateFill className="text-2xl cursor-pointer hover:text-green" />
                          {hovered.id === index && hovered.type === "date" && (
                            <div className="absolute left-4 bottom-8 mt-2 p-2 w-40 md:w-64 bg-gray-400 text-green text-sm rounded shadow-lg z-10">
                              {date === "" ? "Date unavailable" : date}
                            </div>
                          )}
                        </div>
                      </div>
                      <span className="text-sm text-green">{mode}</span>
                    </div>
                  </div>

                  <Link to={`/course-selection/${link}`}>
                    <div
                      className={`${
                        hot
                          ? "hover:bg-red-500 text-red-500"
                          : "hover:bg-orange"
                      } text-center p-4 border-t hover:bg-orange hover:text-white transition-all duration-200`}
                    >
                      <div className=" px-4">Book Now</div>
                    </div>
                  </Link>
                </div>
                <div className="w-full h-auto">
                  <h2 className="my-3 text-xl font-semibold ">Description:</h2>
                  {description}

                  <h2 className="my-3 text-xl font-semibold ">Details:</h2>
                  {details.map((instructor, i) => (
                    <div key={i} className="mb-1">
                      - {details[i]}
                    </div>
                  ))}

                  {certificate === "" ? (
                    ""
                  ) : (
                    <>
                      <h2 className="my-3 text-xl font-semibold">
                        Certification:
                      </h2>
                      <p>{certificate}</p>
                    </>
                  )}
                </div>
              </div>

              /* { <div
                  className="relative group text-center my-5"
                  onClick={() => handleToggleHover(index)}
                >
                  <button
                    className={`text-lg cursor-pointer p-4 text-green ${
                      hot ? "hover:text-red-500" : "hover:text-orange"
                    }`}
                  >
                    View Pricing »»
                  </button>

                  {hoveredPricing.id === index &&
                    hoveredPricing.type === "view" && (
                      <div className="w-full h-auto ">
                        {Array.isArray(pricing) &&
                          pricing.map((item, i) => (
                            <div key={i} className="mb-2">
                              <div className="font-semibold">{item.type}</div>
                              <div>{item.price}</div>
                              {item.discount && item.discount.price && (
                                <div className="text-sm text-gray-700 mt-1">
                                  <strong>Discount: </strong>
                                  {item.discount.price}{" "}
                                  <span className="block text-xs">
                                    {item.discount.eligible}
                                  </span>
                                </div>
                              )}
                            </div>
                          ))}
                      </div>
                    )}
                </div> } */
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AllCourses;
