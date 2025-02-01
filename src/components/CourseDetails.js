// import React, { useState } from 'react';
// import CourseImage1 from "../assets/img/courses2/100H.jpg";
// import CourseImage2 from "../assets/img/courses2/200H1.jpg";
// import CourseImage3 from "../assets/img/courses2/30H1.jpg";
// import CourseSelection from './CourseSelection';
// import RetreatImage from "../assets/img/retreat/about.jpg";
// import Typical from 'react-typical';

// const CourseDetails = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [selectedCourse, setSelectedCourse] = useState(null);

//     const courses = [
//         {
//             id: 1,
//             title: "200H TTC Kundalini Yoga & Meditation",
//             summary: "Trở thành giáo viên Kundalini Yoga & Thiền chứng chỉ Quốc Tế",
//             price: "40,000,000 VND",
//             discountPrice: "35,000,000 VND (until 31/12/2024)",
//             time: "7/26 - 8/18",
//             location: "KDL Ba Hồ, Ninh Hoà",
//             image: CourseImage2,
//         },
//         {
//             id: 2,
//             title: "Kundalini Yoga & Thiền Mantra - 100h Foundation",
//             summary: "Khoá học để trở thành người thầy của chính mình",
//             price: "12,000,000 VND",
//             discountPrice: "10,000,000 VND (until 31/12/2024)",
//             time: "3/3 - 2/4 & 17/3 - 16/4",
//             location: "Online",
//             image: CourseImage1,
//         },
//         {
//             id: 3,
//             title: "30hrs Chakra Healing",
//             summary: "Năng lượng và chữa lành",
//             price: "4,500,000 VND",
//             discountPrice: "3,500,000 VND (5 first slots)",
//             time: "18/4 - 20/4",
//             location: "Kim Yoga Academy Đà Nẵng",
//             image: CourseImage3,
//         },
//     ];

//     const openBookingForm = (course) => {
//         setSelectedCourse(course);
//         setIsOpen(true);
//         console.log(`Opening booking form for course ID: ${course.id}`);
//     };

//     return (
//         <div className="bg-gray-50 min-h-screen mt-12">
//             {/* Hero Section */}
//             <div className="relative">
//                 <img
//                     src={RetreatImage}
//                     alt="Retreat"
//                     className="w-full h-[600px] object-cover object-top"
//                 />
//             </div>

//             {/* Course Details Section */}
//             <div className="py-16 px-8 max-w-7xl mx-auto text-center">
//                 <h2 className="text-5xl font-bold text-gray-800 mb-6">
//                     <Typical
//                         steps={['Khóa học Yoga của chúng tôi', 2000]}
//                         loop={1}
//                         wrapper="span"
//                         className="font-bold text-gray-800"
//                     />
//                 </h2>

//                 <p className="text-gray-700 text-lg leading-relaxed mb-10 font-bold">
//                     <Typical
//                         steps={['Tại học viện yoga của chúng tôi, chúng tôi cung cấp một loạt các khóa học để phục vụ cho tất cả các cấp độ thực hành.', 2000]}
//                         loop={1}
//                         wrapper="span"
//                         className="font-bold text-gray-800"
//                     />
//                 </p>

//                 <p className="text-gray-700 text-lg leading-relaxed mb-10 font-bold">
//                     Chúng tôi có các khóa học với mức giá hợp lý, bao gồm:
//                     <ul className="list-disc pl-5 mb-4 inline-block text-left">
//                         <li>200H TTC Kundalini Yoga & Meditation: 35,000,000 VND (giảm giá đến 31/12/2024)</li>
//                         <li>Kundalini Yoga & Thiền Mantra - 100h Foundation: 10,000,000 VND (giảm giá đến 31/12/2024)</li>
//                         <li>30hrs Chakra Healing: 3,500,000 VND (cho 5 slot đầu tiên)</li>
//                     </ul>
//                     <span className="block text-center">
//                         Thời gian học linh hoạt, với các khóa học diễn ra từ tháng 3 đến tháng 8. Hãy tham gia cùng chúng tôi để trải nghiệm những bài học sâu sắc và bổ ích.
//                     </span>
//                 </p>

//                 <p className="text-gray-700 text-lg leading-relaxed mb-10 font-bold">
//                     Các khóa học của chúng tôi không chỉ giúp bạn nâng cao kỹ năng yoga mà còn mang lại nhiều lợi ích cho sức khỏe tinh thần và thể chất. Bạn sẽ được học từ những giảng viên dày dạn kinh nghiệm, những người sẽ hướng dẫn bạn từng bước trong hành trình yoga của mình.
//                 </p>

//                 <p className="text-gray-700 text-lg leading-relaxed mb-10 font-bold">
//                     Để đăng ký, bạn chỉ cần nhấp vào nút "Book Now" bên dưới mỗi khóa học. Chúng tôi sẽ liên hệ với bạn để xác nhận thông tin và hướng dẫn bạn hoàn tất quy trình đăng ký. Hãy nhanh tay vì số lượng chỗ ngồi có hạn!
//                 </p>
//             </div>

//             {/* Courses Section */}
//             <div className="py-16 px-8 max-w-7xl mx-auto">
//                 {courses.map((course) => (
//                     <div
//                         key={course.id}
//                         className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 bg-white shadow-lg rounded-lg overflow-hidden text-center"
//                     >
//                         <img
//                             src={course.image}
//                             alt={course.title}
//                             className="w-full h-48 md:h-80 object-cover object-center"
//                         />
//                         <div className="p-8 flex flex-col justify-between items-center">
//                             <div>
//                                 <h2 className="text-3xl font-bold text-gray-800 mb-4">
//                                     {course.title}
//                                 </h2>
//                                 <p className="text-gray-600 mb-4 font-bold">{course.summary}</p>
//                                 <p className="text-gray-800 mb-2 font-bold">
//                                     <span className="font-semibold">Price:</span> {course.price}
//                                 </p>
//                                 <p className="text-gray-800 mb-2 font-bold">
//                                     <span className="font-semibold">Discount Price:</span> {course.discountPrice}
//                                 </p>
//                                 <p className="text-gray-800 mb-2 font-bold">
//                                     <span className="font-semibold">Time:</span> {course.time}
//                                 </p>
//                                 <p className="text-gray-800 mb-2 font-bold">
//                                     <span className="font-semibold">Location:</span> {course.location}
//                                 </p>
//                             </div>
//                             <button
//                                 className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors"
//                                 onClick={() => openBookingForm(course)}
//                             >
//                                 Book Now
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Booking Form */}
//             <CourseSelection
//                 course={selectedCourse}
//                 isOpen={isOpen}
//                 onClose={() => {
//                     setIsOpen(false);
//                     setSelectedCourse(null);
//                 }}
//             />
//         </div>
//     );
// };

// export default CourseDetails;

import React, { useState } from "react";
import CourseImage1 from "../assets/img/courses2/100H.jpg";
import CourseImage2 from "../assets/img/courses2/200H1.jpg";
import CourseImage3 from "../assets/img/courses2/30H1.jpg";
import CourseSelection from "./CourseSelection";
import RetreatImage from "../assets/img/retreat/about.jpg";
import Typical from "react-typical";

const CourseDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      id: 1,
      title: "200H TTC Kundalini Yoga & Meditation",
      summary: "Trở thành giáo viên Kundalini Yoga & Thiền chứng chỉ Quốc Tế",
      price: "40,000,000 VND (Online) | 55,000,000 VND (Offline)",
      discountPrice:
        "35,000,000 VND (Online) | 48,000,000 VND (Offline) - until 31/12/2024",
      time: "Online: 6/5 - 5/8 | Offline: 26/7 - 18/8",
      location: "Online & KDL Ba Hồ, Ninh Hoà",
      image: CourseImage2,
      certification: "200H Yoga Alliance Certification",
      objectives: [
        "Deepen understanding of Kundalini Yoga and its core principles.",
        "Develop skills to teach Kundalini Yoga Kriyas and meditation.",
        "Learn about Chakra systems, Yoga philosophy, and anatomy.",
        "Practice teaching and guiding students through Kundalini Yoga.",
      ],
      schedule: {
        online: {
          sadhana: "4:30 AM - 6:00 AM (Mon-Fri)",
          theory: "8:00 PM - 10:00 PM (Mon, Tue, Thu, Fri)",
          retreat: "15/8 - 18/8 (4N3Đ)",
        },
        offline: {
          daily: "Full-day training from 26/7 - 18/8",
          activities:
            "Includes vegan meals, nature immersion, and yogic lifestyle practices.",
        },
      },
      instructors: [
        {
          name: "Thầy Hoành Nguyễn",
          bio: "E-RYT 500 certified, 9 years of experience, trained in Kundalini Yoga in India.",
        },
        {
          name: "Cô Yến Nguyễn",
          bio: "E-RYT 500 certified, 10 years of experience, specializes in Mantra music and vegan lifestyle.",
        },
      ],
    },
    {
      id: 2,
      title: "Kundalini Yoga & Thiền Mantra - 100h Foundation",
      summary: "Khoá học để trở thành người thầy của chính mình",
      price: "12,000,000 VND",
      discountPrice: "10,000,000 VND (until 31/12/2024)",
      time: "3/3 - 2/4 & 17/3 - 16/4",
      location: "Online",
      image: CourseImage1,
    },
    {
      id: 3,
      title: "30hrs Chakra Healing",
      summary: "Năng lượng và chữa lành",
      price: "4,500,000 VND",
      discountPrice: "3,500,000 VND (5 first slots)",
      time: "18/4 - 20/4",
      location: "Kim Yoga Academy Đà Nẵng",
      image: CourseImage3,
      certification: "30h Yacep Yoga Alliance Certification",
      objectives: [
        "Understand Chakras and their impact on physical and mental health.",
        "Learn about the 8 Chakras in Kundalini Yoga.",
        "Practice Kriyas to balance Chakras.",
        "Meditation techniques for different Chakra regions.",
      ],
      schedule: {
        daily: "7:00 AM - 5:00 PM",
        activities: [
          "7:00 - 8:30 AM: Kundalini Yoga & Meditation",
          "8:30 - 9:15 AM: Breakfast",
          "9:30 - 11:30 AM: Theory & Practice",
          "11:45 - 1:45 PM: Lunch & Rest",
          "2:00 - 5:00 PM: Theory & Practice",
        ],
      },
      instructors: [
        {
          name: "Thầy Hoành Nguyễn",
          bio: "E-RYT 500 certified, 9 years of experience, trained in Kundalini Yoga in India.",
        },
        {
          name: "Cô Yến Nguyễn",
          bio: "E-RYT 500 certified, 10 years of experience, specializes in Mantra music and vegan lifestyle.",
        },
      ],
    },
  ];

  const openBookingForm = (course) => {
    setSelectedCourse(course);
    setIsOpen(true);
    console.log(`Opening booking form for course ID: ${course.id}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen mt-12">
      {/* Hero Section */}
      <div className="relative">
        <img
          src={RetreatImage}
          alt="Retreat"
          className="w-full h-[600px] object-cover object-top"
        />
      </div>

      {/* Course Details Section */}
      <div className="py-16 px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          <Typical
            steps={["Khóa học Yoga của chúng tôi", 2000]}
            loop={1}
            wrapper="span"
            className="font-bold text-gray-800"
          />
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-10 font-bold">
          <Typical
            steps={[
              "Tại học viện yoga của chúng tôi, chúng tôi cung cấp một loạt các khóa học để phục vụ cho tất cả các cấp độ thực hành.",
              2000,
            ]}
            loop={1}
            wrapper="span"
            className="font-bold text-gray-800"
          />
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-10 font-bold">
          Chúng tôi có các khóa học với mức giá hợp lý, bao gồm:
          <ul className="list-disc pl-5 mb-4 inline-block text-left">
            <li>
              200H TTC Kundalini Yoga & Meditation: 35,000,000 VND (giảm giá đến
              31/12/2024)
            </li>
            <li>
              Kundalini Yoga & Thiền Mantra - 100h Foundation: 10,000,000 VND
              (giảm giá đến 31/12/2024)
            </li>
            <li>30hrs Chakra Healing: 3,500,000 VND (cho 5 slot đầu tiên)</li>
          </ul>
          <span className="block text-center">
            Thời gian học linh hoạt, với các khóa học diễn ra từ tháng 3 đến
            tháng 8. Hãy tham gia cùng chúng tôi để trải nghiệm những bài học
            sâu sắc và bổ ích.
          </span>
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-10 font-bold">
          Các khóa học của chúng tôi không chỉ giúp bạn nâng cao kỹ năng yoga mà
          còn mang lại nhiều lợi ích cho sức khỏe tinh thần và thể chất. Bạn sẽ
          được học từ những giảng viên dày dạn kinh nghiệm, những người sẽ hướng
          dẫn bạn từng bước trong hành trình yoga của mình.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-10 font-bold">
          Để đăng ký, bạn chỉ cần nhấp vào nút "Book Now" bên dưới mỗi khóa học.
          Chúng tôi sẽ liên hệ với bạn để xác nhận thông tin và hướng dẫn bạn
          hoàn tất quy trình đăng ký. Hãy nhanh tay vì số lượng chỗ ngồi có hạn!
        </p>
      </div>

      {/* Courses Section */}
      <div className="py-16 px-8 max-w-7xl mx-auto">
        {courses.map((course) => (
          <div
            key={course.id}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 bg-white shadow-lg rounded-lg overflow-hidden text-center"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 md:h-80 lg:h-96 object-cover object-center"
            />
            <div className="p-8 flex flex-col justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {course.title}
                </h2>
                <p className="text-gray-600 mb-4 font-bold">{course.summary}</p>
                <p className="text-gray-800 mb-2 font-bold">
                  <span className="font-semibold">Price:</span> {course.price}
                </p>
                <p className="text-gray-800 mb-2 font-bold">
                  <span className="font-semibold">Discount Price:</span>{" "}
                  {course.discountPrice}
                </p>
                <p className="text-gray-800 mb-2 font-bold">
                  <span className="font-semibold">Time:</span> {course.time}
                </p>
                <p className="text-gray-800 mb-2 font-bold">
                  <span className="font-semibold">Location:</span>{" "}
                  {course.location}
                </p>

                {/* Certification */}
                {course.certification && (
                  <p className="text-gray-800 mb-4 font-bold">
                    <span className="font-semibold">Certification:</span>{" "}
                    {course.certification}
                  </p>
                )}

                {/* Objectives Section */}
                {course.objectives && (
                  <div className="text-gray-800 mb-4 text-left">
                    <h3 className="text-xl font-semibold mb-2 border-b-2 border-gray-300 pb-1">
                      Objectives
                    </h3>
                    <ul className="list-disc pl-6 space-y-1">
                      {course.objectives.map((obj, index) => (
                        <li key={index} className="text-gray-700">
                          {obj}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Schedule Section */}
                {course.schedule && (
                  <div className="text-gray-800 mb-4 text-left">
                    <h3 className="text-xl font-semibold mb-2 border-b-2 border-gray-300 pb-1">
                      Schedule
                    </h3>
                    {course.schedule.online ? (
                      <div className="space-y-2">
                        <p>
                          <strong>Online Sessions:</strong>
                        </p>
                        <p>
                          <strong>Sadhana:</strong>{" "}
                          {course.schedule.online.sadhana}
                        </p>
                        <p>
                          <strong>Theory:</strong>{" "}
                          {course.schedule.online.theory}
                        </p>
                        <p>
                          <strong>Retreat:</strong>{" "}
                          {course.schedule.online.retreat}
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <p>
                          <strong>Daily:</strong> {course.schedule.daily}
                        </p>
                        <p>
                          <strong>Activities:</strong>{" "}
                          {course.schedule.activities}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Instructors Section */}
                {course.instructors && (
                  <div className="text-gray-800 mb-4 text-left">
                    <h3 className="text-xl font-semibold mb-2 border-b-2 border-gray-300 pb-1">
                      <a href="/trainers" className="hover:text-orange-500">
                        Instructors
                      </a>
                    </h3>
                    <ul className="space-y-2">
                      {course.instructors.map((instructor, index) => (
                        <li key={index}>
                          <p className="font-bold text-gray-900">
                            {instructor.name}
                          </p>
                          <p className="text-gray-700 text-sm">
                            {instructor.bio}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <button
                className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors"
                onClick={() => openBookingForm(course)}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Form */}
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
