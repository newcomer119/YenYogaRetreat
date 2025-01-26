import React, { useState } from 'react';
import CourseImage1 from "../assets/img/courses2/100H.jpg"
import CourseImage2 from "../assets/img/courses2/200H1.jpg"
import CourseImage3 from "../assets/img/courses2/30H1.jpg"
import CourseSelection from './CourseSelection';

const CourseDetails = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);

    const courses = [
        {
            id: 1,
            title: "200H TTC Kundalini Yoga & Meditation",
            summary:
                "Trở thành giáo viên Kundalini Yoga & Thiền chứng chỉ Quốc Tế",
            price: "40,000,000 VND",
            discountPrice: "35,000,000 VND (until 31/12/2024)",
            time: "7/26 - 8/18",
            location: "KDL Ba Hồ, Ninh Hoà",
            image: CourseImage2, // Placeholder image
        },
        {
            id: 2,
            title: "Kundalini Yoga & Thiền Mantra - 100h Foundation",
            summary:
                "Khoá học để trở thành người thầy của chính mình",
            price: "12,000,000 VND",
            discountPrice: "10,000,000 VND (until 31/12/2024)",
            time: "3/3 - 2/4 & 17/3 - 16/4",
            location: "Online",
            image: CourseImage1, // Placeholder image
        },
        {
            id: 3,
            title: "30hrs Chakra Healing",
            summary: "Năng lượng và chữa lành",
            price: "4,500,000 VND",
            discountPrice: "3,500,000 VND (5 first slots)",
            time: "18/4 - 20/4",
            location: "Kim Yoga Academy Đà Nẵng",
            image: CourseImage3, // Placeholder image
        },
    ];

    const openBookingForm = (course) => {
        setSelectedCourse(course);
        setIsOpen(true);
        console.log(`Opening booking form for course ID: ${course.id}`);
    };

    return (
        <div className="bg-gray-50 min-h-screen mt-16 py-10 px-5">
            <h1 className="text-4xl font-bold text-center text-blue-600 mb-5">Course Details</h1>
            <p className="text-center text-lg text-gray-800 mb-10">Explore our courses and take the first step towards your journey!</p>
            <div className="space-y-10">
                {courses.map((course) => (
                    <div key={course.id} className="bg-white p-5 shadow-lg rounded-lg transition-transform transform hover:scale-105 max-w-[80%] mx-auto">
                        <h2 className="text-3xl font-semibold mb-2 text-center text-blue-500">{course.title}</h2>
                        <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-auto mb-4 rounded-lg object-cover"
                        />
                        <p className="text-gray-700 mb-4">{course.summary}</p>
                        <p className="text-gray-700 mb-2">
                            <span className="font-bold">Price:</span> {course.price}
                        </p>
                        <p className="text-gray-700 mb-2">
                            <span className="font-bold">Discount Price:</span> {course.discountPrice}
                        </p>
                        <p className="text-gray-700 mb-2">
                            <span className="font-bold">Time:</span> {course.time}
                        </p>
                        <p className="text-gray-700 mb-2">
                            <span className="font-bold">Location:</span> {course.location}
                        </p>
                        <div className="flex justify-center">
                            <button 
                                className="bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors duration-300"
                                onClick={() => openBookingForm(course)}
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <CourseSelection 
                course={selectedCourse}
                isOpen={isOpen} 
                onClose={() => {
                    setIsOpen(false);
                    setSelectedCourse(null);
                }}
            />
        </div>
    );
};

export default CourseDetails;
