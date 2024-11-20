import React from "react";
import { Link } from 'react-router-dom';
//  import data

import { courses } from "../data";

// import icons
import { BsStarFill, BsStarHalf } from "react-icons/bs";

const Courses = () => {
  return (
    <section className="section-sm lg:section-lg">
      <div className="container mx-auto">
        {/* Text */}
        <div className="text-center mb-16 lg:mb-32">
          <h2 className="h2 mb-3 lg:mb-[18px]">Courses</h2>
          <p className="max-w-[480px] mx-auto">
            Practice Anywhere, anytime. Explore a new way to excercises and
            learn more about yourself.We are providing the best.
          </p>
        </div>
        {/* Courses List */}
        <div
          className="flex flex-col lg:flex-row lg:gap-x-[33px] gap-y-24 mb-7
      lg:mb-14"
        >
          {courses.map((item, index) => {
            // destructure item
            const { image, title, desc, link, delay } = item;
            return (
              <div className='w-full bg-white hover:shadow-primary 
              max-width-[368px] px-[18px] pb-[26px] 
              lg:pb-[38px] lg:px-[28px] flex flex-col rounded-[14px] 
              mx-auto transition'
               key={index}>
                {/* image */}
                <div className="-mt-[38px] lg:-mt-12 mb-4 lg:mb-6">
                  <img src={image} alt="" />
                </div>
                {/* text  */}
                <div>
                  <h4 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-4">
                    {title}
                  </h4>
                  <p>{desc}</p>
                </div>
                {/* Bottom  */}
                <div className="flex items-scenter 
                justify-between mt-8 mb-2 lg:mb-0">
                  {/* stars  */}
                  <div className="flex text-orange gap-x-2">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                  </div>
                  {/* link  */}
                  <Link className="font-medium" to={`/course-selection/${link}`}>Get Started</Link>
                </div>
              </div>
            );
          })}
        </div>
        {/* btn */}
        <div className="flex justify-center">
          <button className="btn btn-sm btn-orange">
            <Link to="/AllCourses">Browse All</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
