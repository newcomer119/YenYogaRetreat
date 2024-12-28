import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { inst, sectionHeaders, buttons } from "../data";
import { useLanguage } from "../context/LanguageContext";
import InstructorCard from "./InstructorCard";

const Instructors = () => {
  const { language } = useLanguage();
  const [newpage, setNewpage] = useState(false); // For CSS changes
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.endsWith("/trainers")) {
      setNewpage(true);
    } else {
      setNewpage(false);
    }
  }, [location]);

  return (
    <section
      id="instructors"
      className={`${
        newpage ? "top-section" : "section py-6"
      } mx-0 bg-egreen-70`}
    >
      <h1 className="h2 text-gray-800" data-aos="fade-up">
        {sectionHeaders[language].trainers}
      </h1>

      <div className="flex flex-row gap-5 justify-center items-center ">
        {inst.map((instructor) => (
          <Link
            to={`/trainers/${instructor.id}`}
            data-aos="flip-right"
            data-aos-duration="1500"
          >
            <InstructorCard instructor={instructor[language]} all={true} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Instructors;
