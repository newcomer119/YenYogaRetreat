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
    <section id="courses" className={newpage ? "top-section" : "section mt-8"}>
      <h1 className="h2 text-gray-800 mx-3" data-aos="fade-up">
        {sectionHeaders[language].courses}
      </h1>

      {/* Courses List */}
      <div className="grid grid-cols-1 mob2:grid-cols-2 lap:grid-cols-3 gap-8 mb-16 ">
        {courses.map((course, index) => (
          <div key={index} className="tab2:hover:scale-[1.1] transition-all col-span-1">
            <CourseCard course={course} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
