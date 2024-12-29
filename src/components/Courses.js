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
    <section>
      <div id="courses" className={newpage ? "top-section" : "section"}>
        <div className="sectionHeaders" >
          {sectionHeaders[language].courses}
        </div>

        <div className="grid grid-cols-1 mob2:grid-cols-2 lap:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="tab2:hover:scale-[1.1] transition-all w-full flex justify-center"
            >
              <CourseCard course={course} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
