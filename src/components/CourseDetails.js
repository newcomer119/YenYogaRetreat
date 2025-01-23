import React from 'react';




const CourseDetails = () => {
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
      image: "https://via.placeholder.com/900x400", // Placeholder image
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
      image: "https://via.placeholder.com/900x400", // Placeholder image
    },
    {
      id: 3,
      title: "30hrs Chakra Healing",
      summary: "Năng lượng và chữa lành",
      price: "4,500,000 VND",
      discountPrice: "3,500,000 VND (5 first slots)",
      time: "18/4 - 20/4",
      location: "Kim Yoga Academy Đà Nẵng",
      image: "https://via.placeholder.com/900x400", // Placeholder image
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5">
      <h1 className="text-3xl font-bold text-center mb-10">Course Details</h1>
      <div className="space-y-10">
        {courses.map((course) => (
          <div key={course.id} className="bg-white p-5 shadow-lg rounded-lg transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold mb-2 text-center">{course.title}</h2>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
