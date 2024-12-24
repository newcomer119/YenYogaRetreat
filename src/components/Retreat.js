import React from "react";
import { Link } from "react-router-dom"; 
import yogaImage from "../assets/img/retreat/yogaImage.jpg";
import hatha from "../assets/img/retreat/hatha.jpg";
import { useLanguage } from "../context/LanguageContext";

const Retreat = () => {
  const { language } = useLanguage();

  const texts = {
    en: {
      heroTitle: "Yoga Retreat in Vietnam",
      buttonText: "View our schedule",
      eventTitle: "Hatha Yoga",
      eventDescription: [
        "Hatha yoga is a branch of yoga. The Sanskrit word hatha literally means 'force' and thus alludes to a system of physical techniques.",
        "In India, hatha yoga is associated with popular yoga traditions that emphasize strength, flexibility, and breathwork."
      ],
      learnMore: "Learn More",
      highlightsTitle: "What You'll Experience",
      experiences: [
        {
          title: "Daily Yoga Classes",
          description: "Start your mornings with energizing yoga sessions led by experienced instructors."
        },
        {
          title: "Guided Meditations",
          description: "Relax your mind and body with calming evening meditations in serene locations."
        },
        {
          title: "Delicious Healthy Meals",
          description: "Enjoy locally sourced, nutritious meals prepared with love and care."
        }
      ]
    },
    vn: {
      heroTitle: "Khóa Tu Yoga Tại Việt Nam",
      buttonText: "Xem lịch của chúng tôi",
      eventTitle: "Yoga Hatha",
      eventDescription: [
        "Yoga Hatha là một nhánh của yoga. Từ tiếng Phạn hatha có nghĩa là 'sức mạnh' và ám chỉ đến một hệ thống các kỹ thuật thể chất.",
        "Tại Ấn Độ, yoga hatha liên quan đến các truyền thống yoga phổ biến nhấn mạnh sức mạnh, sự linh hoạt và hơi thở."
      ],
      learnMore: "Tìm Hiểu Thêm",
      highlightsTitle: "Những Gì Bạn Sẽ Trải Nghiệm",
      experiences: [
        {
          title: "Lớp Học Yoga Hàng Ngày",
          description: "Bắt đầu buổi sáng của bạn với các buổi yoga đầy năng lượng do các giảng viên có kinh nghiệm dẫn dắt."
        },
        {
          title: "Thiền Hướng Dẫn",
          description: "Thư giãn tâm trí và cơ thể của bạn với các buổi thiền buổi tối trong những địa điểm yên tĩnh."
        },
        {
          title: "Bữa Ăn Ngon Lành Khỏe Mạnh",
          description: "Thưởng thức những bữa ăn dinh dưỡng được chế biến từ nguyên liệu địa phương với tình yêu và sự chăm sóc."
        }
      ]
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-800 to-purple-900 min-h-screen pb-12">
      {/* Hero Section */}
      <div
        className="relative h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${yogaImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            {texts[language].heroTitle}
          </h1>
          
          <Link to="/classes">
            <button className="bg-pink-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-pink-600">
              {texts[language].buttonText}
            </button>
          </Link>
        </div>
      </div>

      {/* Event Details Section */}
      <div className="max-w-6xl mx-auto mt-12 px-4">
        <h2 className="text-4xl font-extrabold text-black mb-6 text-center">{texts[language].eventTitle}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <img
              src={hatha}
              alt="Hatha Yoga"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="text-dark space-y-4 text-center">
            {texts[language].eventDescription.map((desc, index) => (
              <p key={index} className="text-lg font-bold leading-relaxed mt-12">{desc}</p>
            ))}
            <div className="flex justify-center px-4 py-2 border-t">
              <Link to="/classes" className="border border-orange text-orange py-2 px-6 rounded-lg hover:bg-orange hover:text-white transition">
                {texts[language].learnMore}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="max-w-6xl mx-auto mt-16 px-4">
        <h2 className="text-3xl text-dark font-bold mb-6 text-center">
          {texts[language].highlightsTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {texts[language].experiences.map((experience, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={hatha}
                alt={`Experience ${index + 1}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{experience.title}</h3>
                <p className="text-gray-600">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Retreat;
