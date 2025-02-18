import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CourseCard from "./CourseCard";
import { useLanguage } from "../context/LanguageContext";
import { client } from '../lib/sanity';

const sectionHeaders = {
  en: {
    courses: "Our Yoga Courses",
  },
  vi: {
    courses: "Các Khóa Học Yoga",
  },
};

const Courses = () => {
  const [newpage, setNewpage] = useState(false);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.endsWith("/courses")) {
      setNewpage(true);
    } else {
      setNewpage(false);
    }
  }, [location]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const query = `*[_type == "course" && isActive == true] | order(order asc) {
          "title": coalesce(${language === 'vi' ? 'titleVi' : 'title'}, title),
          "description": coalesce(${language === 'vi' ? 'descriptionVi' : 'description'}, description),
          duration,
          price,
          "imageUrl": image.asset->url,
          "features": coalesce(${language === 'vi' ? 'featuresVi' : 'features'}, features)
        }`;
        
        const result = await client.fetch(query);
        setCourses(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setLoading(false);
      }
    };

    setLoading(true);
    fetchCourses();
  }, [language]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const headerText = sectionHeaders[language]?.courses || sectionHeaders.en.courses;

  return (
    <section>
      <div id="courses" className={newpage ? "top-section" : "section"}>
        <div className="sectionHeaders">
          {headerText}
        </div>

        <div className="grid grid-cols-1 mob2:grid-cols-2 tab:grid-cols-4 gap-8">
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