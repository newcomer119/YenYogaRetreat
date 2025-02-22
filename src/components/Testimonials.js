import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { sectionHeaders } from "../data";

const Testimonials = () => {
  const { language } = useLanguage();

  const testimonials = {
    en: [
      {
        name: "Sarah Chen",
        role: "Yoga Practitioner",
        quote: "The Kundalini Yoga training at Yen Yoga transformed my practice completely. The instructors' deep knowledge and personal attention made this journey truly special.",
      },
      {
        name: "Michael Thompson",
        role: "Corporate Professional",
        quote: "As a busy professional, finding peace through meditation seemed impossible. The Mantra Meditation course helped me find balance and clarity in my hectic life.",
      },
      {
        name: "Emma Nguyen",
        role: "Yoga Teacher",
        quote: "The 200-hour Teacher Training was comprehensive and life-changing. The blend of traditional knowledge with modern teaching methods was perfect.",
      },
      {
        name: "David Park",
        role: "Wellness Enthusiast",
        quote: "The retreat experience was beyond my expectations. The peaceful environment, combined with expert guidance, helped me deepen my practice significantly.",
      },
      {
        name: "Lisa Martinez",
        role: "Health Coach",
        quote: "The holistic approach to yoga and meditation here is remarkable. The instructors don't just teach poses; they inspire a complete lifestyle transformation.",
      }
    ],
    vn: [
      {
        name: "Sarah Chen",
        role: "Người Tập Yoga",
        quote: "Khóa học Kundalini Yoga tại Yen Yoga đã hoàn toàn thay đổi việc luyện tập của tôi. Kiến thức sâu rộng và sự quan tâm cá nhân của các giảng viên đã làm cho hành trình này thực sự đặc biệt.",
      },
      {
        name: "Michael Thompson",
        role: "Chuyên Gia Doanh Nghiệp",
        quote: "Là một người bận rộn, việc tìm thấy sự bình an thông qua thiền định dường như không thể. Khóa học Thiền Mantra đã giúp tôi tìm thấy sự cân bằng và sáng suốt trong cuộc sống bận rộn.",
      },
      {
        name: "Emma Nguyen",
        role: "Giáo Viên Yoga",
        quote: "Khóa đào tạo giáo viên 200 giờ rất toàn diện và thay đổi cuộc sống. Sự kết hợp giữa kiến thức truyền thống và phương pháp giảng dạy hiện đại thật hoàn hảo.",
      },
      {
        name: "David Park",
        role: "Người Đam Mê Sức Khỏe",
        quote: "Trải nghiệm retreat vượt xa mong đợi của tôi. Môi trường yên bình, kết hợp với hướng dẫn chuyên môn, đã giúp tôi đào sâu việc luyện tập của mình.",
      },
      {
        name: "Lisa Martinez",
        role: "Huấn Luyện Viên Sức Khỏe",
        quote: "Cách tiếp cận toàn diện về yoga và thiền tại đây thật đáng kinh ngạc. Các giảng viên không chỉ dạy các tư thế; họ truyền cảm hứng cho một sự chuyển đổi lối sống hoàn toàn.",
      }
    ]
  };

  return (
    <section className="section bg-bg1 bg-opacity-30">
      <div className="container mx-auto">
        <h2 className="sectionHeaders mb-12" data-aos="fade-up">
          {language === "en" ? "What Our Students Say" : "Học Viên Nói Gì Về Chúng Tôi"}
        </h2>
        
        <div className="flex flex-col items-center">
          {/* First row with 3 testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-8">
            {testimonials[language].slice(0, 3).map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
                data-aos="flip-left"
                data-aos-delay={index * 100}
              >
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-headings1 mb-1">{testimonial.name}</h3>
                  <p className="text-orange text-sm font-medium">{testimonial.role}</p>
                </div>
                <p className="text-gray-700 leading-relaxed italic">{testimonial.quote}</p>
              </div>
            ))}
          </div>

          {/* Second row with 2 centered testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[800px]">
            {testimonials[language].slice(3, 5).map((testimonial, index) => (
              <div 
                key={index + 3}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
                data-aos="flip-left"
                data-aos-delay={(index + 3) * 100}
              >
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-headings1 mb-1">{testimonial.name}</h3>
                  <p className="text-orange text-sm font-medium">{testimonial.role}</p>
                </div>
                <p className="text-gray-700 leading-relaxed italic">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
