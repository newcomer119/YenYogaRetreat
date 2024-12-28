import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { courses, sectionHeaders } from "../data"; // Import your course data
import CourseCard from "./CourseCard"; // Import the CourseCard component
import { useLanguage } from "../context/LanguageContext";

const Courses = () => {
  const [newpage, setNewpage] = useState(false); // For CSS changes
  const { language } = useLanguage(); //Language Change
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.endsWith("/courses")) {
      setNewpage(true);
    } else {
      setNewpage(false);
    }
  }, [location]);

  return (
    <section id="courses" className={newpage ? "top-section" : "section"}>
      <h1 className="h2 text-gray-800" data-aos="fade-up">
        {sectionHeaders[language].courses}
      </h1>

      {/* Courses List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-8 mx-10 mb-16">
        {courses.map((course, index) => (
          <div key={index} className="hover:scale-[1.1] transition-all">
            <CourseCard course={course} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
