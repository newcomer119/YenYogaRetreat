import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import CourseSelection from "./CourseSelection";
import Typical from "react-typical";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { client } from "../lib/sanity";
import { TbFaceIdError } from "react-icons/tb";
import { FaMapPin } from "react-icons/fa6";
import { buttons, sectionHeaders } from "../data";
import DetailsImage1 from "../assets/img/DetailsImage/img1.jpg";
import DetailsImage2 from "../assets/img/DetailsImage/img2.jpg";
import DetailsImage3 from "../assets/img/DetailsImage/img3.jpg";
import DetailsImage4 from "../assets/img/DetailsImage/img4.jpg";
import DetailsImage5 from "../assets/img/DetailsImage/img5.jpg";
import DetailsImage6 from "../assets/img/DetailsImage/img6.jpg";
import DetailsImage7 from "../assets/img/DetailsImage/img7.jpg";
import DetailsImage8 from "../assets/img/DetailsImage/img8.jpg";
import DetailsImage9 from "../assets/img/DetailsImage/img9.jpg";
import DetailsImage10 from "../assets/img/DetailsImage/img10.jpg";
import DetailsImage11 from "../assets/img/DetailsImage/img11.jpg";
import DetailsImage12 from "../assets/img/DetailsImage/img12.jpg";
import DetailsImage13 from "../assets/img/DetailsImage/img13.jpg";
import DetailsImage14 from "../assets/img/DetailsImage/img14.jpg";

import { ImageModal } from "./Gallery";
import Instructors from "./Instructors";

const CourseDetails = () => {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [results, setResults] = useState([]);
  const { language } = useLanguage();
  const { pathname } = useLocation();
  const id = pathname.split("/").pop() - 1;
  const langKey = language === "vn" ? "vi" : language;
  const [showSlider, setShowSlider] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth <= 769);

  // Updated slider settings to ensure continuous movement
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "60px",
    slidesToScroll: 1,
    autoplay: true, // Keep autoplay enabled for all devices
    autoplaySpeed: 3000,
    pauseOnHover: false, // Prevent pausing on hover
    focusOnSelect: true,
    lazyLoad: "progressive",
    waitForAnimate: false,
    swipeToSlide: true,
    cssEase: "linear", // Smoother transitions
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
          swipeToSlide: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
          swipeToSlide: true,
          centerMode: false,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  const handleViewCoursesClick = () => {
    setShowSlider(true);
    setIsModalOpen(false);
  };

  const handleAccommodationClick = () => {
    setShowSlider((prev) => !prev);
    setIsModalOpen(false);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    // Preload critical images
    const preloadImages = () => {
      const imagesToPreload = [course?.imageUrl];
      imagesToPreload.forEach((src) => {
        if (src) {
          const img = new Image();
          img.src = src;
        }
      });
    };

    if (course) {
      preloadImages();
    }
  }, [course]);

  // Modify the fetch query to include certificate requirements
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const query = `*[_type == "course" && isActive == true] | order(order asc) {
          title,
          description,
          duration,
          price,
          summary,
          "imageUrl": image.asset->url,
          features,
          "detailsImages": detailsImage[]{
            "url": asset->url,
            "alt": asset->originalFilename
          },
          certificateRequirements[]
        }`;

        const fetchedResults = await client.fetch(query, {}, {
          cache: "force-cache",
        });

        setResults(fetchedResults);
        setCourse(fetchedResults[id]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching course:", error);
        setLoading(false);
      }
    };

    setLoading(true);
    fetchCourse();

    // Cleanup function
    return () => {
      setResults([]);
      setCourse(null);
    };
  }, [language, id]);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 1025);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen p-4">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="flex flex-col tab2:flex-row gap-8">
            <div className="w-full tab2:w-1/2">
              <div className="h-96 bg-gray-200 rounded"></div>
            </div>
            <div className="w-full tab2:w-1/2">
              <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <TbFaceIdError size={60} className="text-red-100" />
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          {sectionHeaders[language].courseNotFound}
        </h1>
        <Link to="/courses">
          <button className="px-6 py-3 bg-green-200 text-white rounded-lg shadow-md hover:bg-green-700 transition-all">
            {buttons[language].viewCourses}
          </button>
        </Link>
      </div>
    );
  }

  // Ensure course properties exist before accessing them
  const title = course.title ? course.title[langKey] : "Title not available";
  const description = course.description
    ? course.description[langKey]
    : "Description not available";
  const features =
    course.features && course.features.length > 1
      ? course.features
      : ["Feature not available", "Feature not available"];

  console.log(course);

  // Function to get other courses excluding the current one
  const getOtherCourses = () => {
    return results.filter((_, index) => index !== id);
  };

  return (
    <div className="top-section">
      {/* Main Course Title Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-cta2 font-serif">
          {language === "vn" ? "Chi Tiết Khóa Học" : "Course Details"}
        </h1>
      </div>

      {/* Course Title */}
      <div className="sectionHeaders text-cta2 text-2xl md:text-3xl">
        {title}
      </div>

      <div className="flex flex-col tab2:flex-row gap-4 md:gap-8">
        <div className="w-full tab2:w-1/2">
          <div className="relative flex flex-col gap-4">
            <div className="relative">
              <img
                src={course.imageUrl}
                alt={course.title[langKey]}
                className="w-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full flex justify-between items-center px-4">
              <div className="flex gap-2 items-center">
                <FaMapPin className="text-cta2" />
                <div className="text-wrap font-light text-sm">
                  {course.duration[langKey]}
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  className="text-nowrap text-bold text-white text-xl bg-cta2 rounded-lg px-4 py-2 hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  onClick={() => setShowForm(true)}
                >
                  {buttons[language].bookNow}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full tab2:w-1/2 text-body px-2 md:px-0">
          <div className="text-lg md:text-xl font-semibold italic mb-4 md:mb-6 leading-relaxed text-justify border-b-2 border-dotted border-cta2 pb-4">
            <span className="text-cta2 font-serif">"{description}"</span>
          </div>
          {course.summary && (
            <div className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-justify font-light">
              {course.summary[language === "vn" ? "vi" : "en"]}
            </div>
          )}
        </div>
      </div>

      {/* Course Details Section - Features Only */}
      {course.features && course.features.length > 0 && (
        <div className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-cta2 font-serif tracking-wide">
            {language === "vn" ? "Chi Tiết Khóa Học" : "Course Details"}
          </h2>
          <div className="max-w-5xl mx-auto px-6">
            <ul className="space-y-6">
              {course.features.map((feature, index) => (
                <li
                  key={index}
                  className="text-xl leading-relaxed text-center font-bold text-body before:content-['•'] before:mr-3 before:text-cta2 hover:text-cta2 transition-colors duration-300"
                >
                  {feature[language === "vn" ? "vi" : "en"]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Activity Images Slider */}
      {course.detailsImages && course.detailsImages.length > 0 && (
        <div className="my-8 md:my-16">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center text-cta2 font-serif tracking-wide">
            {language === "vn" ? "Hoạt Động Của Chúng Tôi" : "Our Activities"}
          </h2>
          <div className="modal-content px-2 md:px-0">
            <Slider {...sliderSettings}>
              {course.detailsImages.map((image, index) => (
                <div key={index} className="px-2">
                  <img
                    src={image.url}
                    alt={image.alt || `Activity ${index + 1}`}
                    className="rounded-lg shadow-md w-full h-[400px] object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
                    onClick={() => openModal(image.url)}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}

      {/* Add Instructors section here */}
      <div className="my-16">
        <Instructors />
      </div>

      {/* Certificate Requirements section */}
      {course.certificateRequirements && course.certificateRequirements.length > 0 && (
        <div className="border-4 border-green-300 rounded-2xl p-16 mb-8 mt-16 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center text-cta2 font-serif tracking-wide">
            {language === "vn" ? "Chứng chỉ Hình ảnh của khoá học" : "Certificate Requirements"}
          </h3>
          <ul className="space-y-6 px-8">
            {course.certificateRequirements.map((requirement, index) => (
              <li
                key={index}
                className="text-xl leading-relaxed text-center font-medium tracking-wide hover:text-cta2 transition-colors duration-300"
              >
                {requirement[language === "vn" ? "vi" : "en"]}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Price Section */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center text-cta2 font-serif tracking-wide">
            {language === "vn" ? "Học Phí" : "Course Pricing"}
          </h3>
          
          <div className="p-8">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-6">
                <div className="text-gray-600 text-2xl">
                  {language === "vn" 
                    ? "Bao gồm tất cả các tài liệu học tập và chứng chỉ" 
                    : "Including all study materials and certification"}
                </div>
                <div className="text-4xl font-bold text-cta2">
                  {course.price?.[langKey] || (language === "vn" ? "Liên hệ" : "Contact us")}
                </div>
              </div>
              <div className="text-gray-700 space-y-3 mb-8">
                <p className="flex items-center">
                  <span className="text-cta2 mr-2">✓</span>
                  {language === "vn" 
                    ? "Giáo trình và tài liệu học tập chất lượng cao" 
                    : "High-quality curriculum and study materials"}
                </p>
                <p className="flex items-center">
                  <span className="text-cta2 mr-2">✓</span>
                  {language === "vn" 
                    ? "Hướng dẫn trực tiếp từ giảng viên có kinh nghiệm" 
                    : "Direct guidance from experienced instructors"}
                </p>
                <p className="flex items-center">
                  <span className="text-cta2 mr-2">✓</span>
                  {language === "vn" 
                    ? "Chứng chỉ được công nhận quốc tế" 
                    : "Internationally recognized certification"}
                </p>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => setShowForm(true)}
                  className="text-nowrap text-bold text-white text-xl bg-cta2 rounded-lg px-4 py-2 hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* View Courses and Accommodation Buttons */}
      <div className="flex justify-center space-x-4 mt-8 mb-12">
        {id === 0 && (
          <button
            className="px-6 py-3 bg-orange text-white rounded-lg shadow-md hover:bg-blue-500 transition-all duration-300 transform hover:-translate-y-1"
            onClick={handleAccommodationClick}
          >
            {language === "vn" ? "Chỗ Ở" : "Accommodation"}
          </button>
        )}
      </div>

      {/* Accommodation Slider */}
      {showSlider && (
        <div className="my-16">
          <h2 className="text-2xl font-bold mb-6 text-center text-cta2 font-serif tracking-wide">
            {language === "vn" ? "Chỗ Ở" : "Accommodation"}
          </h2>
          <div className="modal-content">
            <Slider {...sliderSettings}>
              {[
                DetailsImage1,
                DetailsImage2,
                DetailsImage3,
                DetailsImage4,
                DetailsImage5,
                DetailsImage6,
                DetailsImage7,
                DetailsImage8,
                DetailsImage9,
                DetailsImage10,
                DetailsImage11,
                DetailsImage12,
                DetailsImage13,
                DetailsImage14,
              ].map((image, index) => (
                <div key={index} className="px-2">
                  <img
                    src={image}
                    alt={`Accommodation ${index + 1}`}
                    className="rounded-lg shadow-md w-full h-[400px] object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
                    onClick={() => openModal(image)}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}

      <ImageModal
        isOpen={isModalOpen}
        image={selectedImage}
        onClose={closeModal}
      />

      {/* Other Courses Section */}
      <div className="S py-8 w-full">
        <h3 className="text-2xl font-bold mb-8 text-center text-black">
          {language === "vn" ? "Khóa Học Khác" : "Other Courses"}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 justify-items-center max-w-7xl mx-auto">
          {getOtherCourses().map((otherCourse, index) => {
            // Calculate the correct course ID
            const courseId = index >= id ? index + 2 : index + 1;

            return (
              <div
                key={index}
                className="relative flex flex-col min-w-72 max-w-[400px] bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image Section */}
                <div className="relative">
                  <img
                    src={otherCourse.imageUrl}
                    alt={otherCourse.title[langKey]}
                    className="w-full object-cover object-center"
                  />
                  {!mobile && (
                    <div className="absolute inset-0 flex justify-center items-center gap-4 opacity-0 hover:opacity-100 bg-primary bg-opacity-40 transition-all duration-200">
                      <button
                        onClick={() => setShowForm(true)}
                        className="bg-cta1 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-hover1 transition-all duration-300"
                      >
                        {buttons[language].bookNow}
                      </button>
                      <Link
                        to={`/course-details/${courseId}`}
                        className="bg-light text-headings2 py-2 px-4 rounded-lg shadow-lg hover:bg-hover2 hover:text-white transition-all"
                      >
                        {buttons[language].moreInfo}
                      </Link>
                    </div>
                  )}
                </div>

                {/* Text Section */}
                <div className="p-4 divide-y divide-dotted divide-gray flex flex-col justify-between h-full">
                  <div>
                    <div className="text-base tab:text-lg tab2:text-xl big:text-2xl font-bold mb-2 leading-tight text-primary line-clamp-3">
                      <Link
                        to={`/course-details/${courseId}`}
                        className="hover:text-headings1"
                      >
                        {otherCourse.title[langKey]}
                      </Link>
                    </div>
                    <p className="text-xs tab1:text-base big:text-lg font-medium line-clamp-4 text-body mb-2">
                      {otherCourse.description[langKey]}
                    </p>
                  </div>

                  <div className="text-xs tab2:text-sm mt-2 text-body pt-4">
                    {mobile && (
                      <div className="flex justify-center items-center gap-4">
                        <button
                          className="bg-cta1 text-white py-2 px-4 rounded-lg"
                          onClick={() => setShowForm(true)}
                        >
                          {buttons[language].bookNow}
                        </button>
                        <Link
                          to={`/course-details/${courseId}`}
                          className="bg-highlight2 text-headings2 py-2 px-4 rounded-lg"
                        >
                          {buttons[language].moreInfo}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default React.memo(CourseDetails);
