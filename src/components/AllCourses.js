// src/components/AllCourses.js
import React, { useContext, useState } from 'react';
import Navbar from './Navbar'; // Import Navbar
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; // Import CartContext
// import data
import { courses } from "../data";
// import icons
import { BsStarFill, BsStarHalf } from "react-icons/bs";

const AllCourses = () => {
  // const { addToCart, cart, isLoggedIn } = useContext(CartContext); // Access addToCart function and isLoggedIn from context
  const [successMessage, setSuccessMessage] = useState(''); // State for success message
  const navigate = useNavigate(); // Initialize useNavigate



  return (
    <section className="section-sm lg:section-lg">
      <div className="container mx-auto">
        {/* Success Message */}
        {successMessage && (
          <div className="bg-green-100 text-green-800 p-4 rounded-md mb-4">
            {successMessage}
          </div>
        )}
        {/* Text */}
        <div className="text-center mb-16 lg:mb-32">
          <h2 className="h2 mb-3 lg:mb-[18px]  text-2xl font-bold">Courses</h2>
          <p className="max-w-[480px] mx-auto">
            Practice Anywhere, anytime. Explore a new way to exercises and
            learn more about yourself. We are providing the best.
          </p>
        </div>
        {/* Courses List */}
        <div
          className="flex flex-col lg:flex-row lg:gap-x-[33px] gap-y-24 mb-7
          lg:mb-14"
        >
          {courses.map((item, index) => {
            // destructure item
            const { image, title, desc, link, id } = item; // Assuming each course has an id
            return (
              <div className='w-full bg-white border border-gray-300 shadow-md 
              max-w-[368px] px-[18px] pb-[26px] 
              lg:pb-[38px] lg:px-[28px] flex flex-col rounded-[14px] 
              mx-auto transition'
               key={index}>
                {/* image */}
                <div className="-mt-[8px] lg:-mt-12 mb-4 lg:mb-6">
                  <img src={image} alt={title} />
                </div>
                {/* text */}
                <div>
                  <h4 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-4">
                    {title}
                  </h4>
                  <p>{desc}</p>
                </div>
                {/* Bottom */}
                <div className="flex items-center justify-between mt-8 mb-2 lg:mb-0">
                  {/* stars */}
                  <div className="flex text-orange gap-x-2">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                  </div>
                  {/* Add to Cart button */}
                  <button 
                    onClick={() => navigate(`/course-selection/${item.link}`)} // Navigate to CourseSelection
                    className="font-medium text-blue-500 hover:underline"
                  >
                    Buy Course
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {/* btn */}
        <div className="flex justify-center">
        </div>
      </div>
    </section>
  );
};

export default AllCourses;