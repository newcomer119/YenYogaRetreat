import React from "react";
import { Link } from "react-router-dom";
import aboutImage from "../assets/img/retreat/yogaImage.jpg";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { language } = useLanguage();

  const texts = {
    en: {
      title: "About Yên Yoga & Retreat",
      established: "Established in 2017 by Hoành Nguyễn and Yến Nguyễn",
      details: [
        "Founded in 2017 to provide deeper experiences in Yoga and Meditation.",
        "Pioneer in organizing wellness tours since 2018 for individuals, groups, and businesses.",
        "Offers 200h and 300h Yoga instructor training with international certifications.",
        "Collaborated with notable brands like Viettravel, Legato Entertainment, and Radisson Blu Resort Cam Ranh.",
        "Focused on promoting a healthy lifestyle, nature connection, and inner balance."
      ],
      buttonText: "Meet Our Instructors",
      quote: "“At Yên Yoga & Retreat, we aim to inspire a harmonious balance of body, mind, and soul, helping individuals discover their authentic selves.”"
    },
    vn: {
      title: "Giới Thiệu Về Yên Yoga & Retreat",
      established: "Thành lập năm 2017 bởi Hoành Nguyễn và Yến Nguyễn",
      details: [
        "Thành lập năm 2017 để cung cấp những trải nghiệm sâu sắc hơn trong Yoga và Thiền.",
        "Tiên phong trong việc tổ chức các tour wellness từ năm 2018 cho cá nhân, nhóm và doanh nghiệp.",
        "Cung cấp đào tạo giảng viên Yoga 200h và 300h với chứng chỉ quốc tế.",
        "Hợp tác với các thương hiệu nổi bật như Viettravel, Legato Entertainment và Radisson Blu Resort Cam Ranh.",
        "Tập trung vào việc thúc đẩy lối sống lành mạnh, kết nối với thiên nhiên và cân bằng nội tâm."
      ],
      buttonText: "Gặp Gỡ Các Giảng Viên Của Chúng Tôi",
      quote: "“Tại Yên Yoga & Retreat, chúng tôi mong muốn truyền cảm hứng cho sự cân bằng hài hòa giữa cơ thể, tâm trí và linh hồn, giúp mọi người khám phá bản thân thật sự của mình.”"
    }
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{texts[language].title}</h1>
          <p className="text-lg text-gray-600">
            {texts[language].established}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left Section */}
          <div className="lg:w-1/3 w-full">
            <img
              src={aboutImage}
              alt="Yên Yoga & Retreat"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Details Section */}
          <div className="lg:w-2/3 w-full">
            <ul className="space-y-4 text-gray-700 text-lg">
              {texts[language].details.map((detail, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-orange-500">•</span>
                  {detail}
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center lg:text-left">
              <Link to="/instructors">
                <button className="px-6 py-3 bg-orange text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300">
                  {texts[language].buttonText}
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <blockquote className="italic text-2xl text-gray-700">
            {texts[language].quote}
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;
