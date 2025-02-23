import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { sectionHeaders } from "../data";
import FeedbackImg from "../assets/img/cards/Feedback1.jpg";
import FeedbackImg2 from "../assets/img/cards/Feedback2.jpg";
import FeedbackImg3 from "../assets/img/cards/Feedback3.jpg";
import FeedbackImg4 from "../assets/img/cards/Feedback4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsXSquareFill } from "react-icons/bs";

// Add ImageModal component at the top level
const ImageModal = ({ isOpen, image, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent z-30">
      <div className="relative max-w-[70%] max-h-[70%] m-4">
        <img
          src={image}
          alt="Zoomed"
          className="w-full h-full object-contain"
        />
        <BsXSquareFill
          className="absolute -right-8 top-0 text-red-100 cursor-pointer hover:scale-[0.8] transition-all"
          onClick={onClose}
          size={30}
        />
      </div>
    </div>
  );
};

const Testimonials = () => {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "60px",
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  const testimonials = {
    vn: [
      {
        name: "Đỗ Thành Đạt",
        course: "Khoá đào tạo HLV Yoga 200h K23",
        quote:
          "Sau khoá học, em đón nhận được sự thực tập sâu từ nguồn gốc, lấy lại được nền tảng tập luyện cũng như triết lý và lối sống yoga để mình luôn có điểm tựa mỗi khi đi lệch hướng. Khi mình chấp nhận bản thân, đối diện và hướng vào bên trong chăm sóc lại cho chính mình thì sức mạnh đó được mở rộng. Tư duy tập luyện mình cũng được thay đổi, ý định để bắt đầu cho một điều gì đó là vô cùng quan trọng.",
      },
      {
        name: "Huỳnh Anh Nhật Vy",
        course: "Khoá đào tạo HLV Yoga 200h K23",
        quote:
          "Sau khi trở về nhà, bản thân em vẫn chưa quen lắm khi phải thay đổi lịch trình mỗi ngày, và phải cân nhắc, sắp xếp lại cuộc sống để có thể cân bằng đời sống hiện thực và những điều muốn theo đuổi. Cám ơn những bài luyện tập Mantra đã giúp em ngồi lại, quay về bên trong để nhìn nhận những sự thật, thấu hiểu, và yêu thương để đưa ra cho mình quyết định. Mỗi buổi sáng của em vẫn bắt đầu với ly nước chanh mật ong ấm, 20 phút luyện tập Kundalini, một vòng chào mặt trời và một bài thiền Mantra.",
      },
      {
        name: "Nguyễn Thị Mai",
        course: "Khoá đào tạo HLV Yoga 200h K22",
        quote:
          "Khoá học không chỉ mang đến kiến thức sâu sắc mà còn giúp em kết nối với chính mình. Em học được cách lắng nghe cơ thể, tôn trọng giới hạn của bản thân và phát triển sự kiên nhẫn trong tập luyện. Cám ơn thầy cô và các bạn đã tạo nên một môi trường học tập tuyệt vời.",
      },
      {
        name: "Trần Văn Hùng",
        course: "Khoá đào tạo HLV Yoga 300h K21",
        quote:
          "Khoá học 300h đã cho em cơ hội nâng cao kiến thức, đào sâu vào triết lý yoga và ứng dụng chúng vào cuộc sống. Em thấy bản thân trưởng thành hơn, không chỉ về kỹ năng mà còn cả về tinh thần. Đây là một hành trình tuyệt vời và em rất biết ơn vì đã có cơ hội trải nghiệm.",
      },
      {
        name: "Lê Minh Tuấn",
        course: "Khoá đào tạo HLV Yoga 200h K24",
        quote:
          "Từ khi tham gia khoá học, em đã học được cách điều chỉnh hơi thở, điều hoà cơ thể và quan trọng nhất là kiểm soát tâm trí. Khoá học giúp em hiểu rõ hơn về triết lý yoga và áp dụng chúng vào cuộc sống hàng ngày.",
      },
      {
        name: "Phạm Thị Hoa",
        course: "Khoá đào tạo HLV Yoga 300h K22",
        quote:
          "Thật tuyệt vời khi có cơ hội đào sâu vào thế giới yoga. Khoá học không chỉ giúp em nâng cao kỹ thuật mà còn giúp em mở rộng sự hiểu biết về tâm linh và sự kết nối với cơ thể mình.",
      },
      {
        name: "Ngô Quang Huy",
        course: "Khoá đào tạo HLV Yoga 200h K23",
        quote:
          "Khoá học là một trải nghiệm thay đổi cuộc sống đối với em. Em đã học cách thực hành yoga không chỉ trên thảm mà còn trong từng khoảnh khắc của cuộc sống. Cám ơn các thầy cô đã truyền cảm hứng và hướng dẫn tận tình.",
      },
      {
        name: "Trịnh Thanh Hằng",
        course: "Khoá đào tạo HLV Yoga 300h K23",
        quote:
          "Một khoá học vô cùng ý nghĩa, giúp em không chỉ rèn luyện cơ thể mà còn giúp em tìm lại sự cân bằng trong tâm hồn. Yoga thực sự là một phần không thể thiếu trong cuộc sống của em.",
      },
      {
        name: "John Miller",
        role: "Huấn Luyện Viên Thể Hình",
        course: "Khóa Học Vinyasa Flow",
        quote: "Khóa học Vinyasa Flow đã vượt qua mọi kỳ vọng. Sự chú ý đến chi tiết trong căn chỉnh và thở đã hoàn toàn nâng cao phương pháp giảng dạy của tôi.",
      },
      {
        name: "Maria Garcia",
        role: "Học Viên",
        course: "Chương Trình Yoga Cho Người Mới Bắt Đầu",
        quote: "Là người mới hoàn toàn, lúc đầu tôi đã rất lo lắng. Môi trường hỗ trợ và các giảng viên kiên nhẫn đã làm cho hành trình yoga của tôi trở thành một trải nghiệm tuyệt vời.",
      },
      {
        name: "Tom Wilson",
        role: "Người Đam Mê Thiền",
        course: "Thiền Nâng Cao",
        quote: "Khóa thiền nâng cao đã mở ra những chiều kích mới trong việc thực hành của tôi. Các kỹ thuật cổ xưa được dạy ở đây đã ảnh hưởng sâu sắc đến cuộc sống hàng ngày của tôi.",
      }
    ],
    en: [
      {
        name: "Do Thanh Dat",
        course: "200h Yoga Teacher Training Course K23",
        quote:
          "After the course, I embraced deep practice from its roots, regaining my training foundation as well as the philosophy and lifestyle of yoga, providing me with a solid anchor whenever I drift. When I accept myself, face my inner self, and nurture my own well-being, that strength expands. My training mindset has also changed—having a clear intention before starting something new is incredibly important.",
      },
      {
        name: "Huynh Anh Nhat Vy",
        course: "200h Yoga Teacher Training Course K23",
        quote:
          "After returning home, I still struggled to adjust to the daily routine changes, needing to reconsider and reorganize my life to balance reality with my aspirations. I am grateful for the Mantra practices that allowed me to sit down, turn inward, and reflect on the truths, fostering understanding and self-love to make my decisions. Every morning, I still start with a warm honey-lemon drink, 20 minutes of Kundalini practice, a Sun Salutation sequence, and a Mantra meditation.",
      },
      {
        name: "Nguyen Thi Mai",
        course: "200h Yoga Teacher Training Course K22",
        quote:
          "The course not only provided deep knowledge but also helped me connect with myself. I learned to listen to my body, respect my limits, and develop patience in practice. Thank you to the teachers and fellow students for creating such a wonderful learning environment.",
      },
      {
        name: "Tran Van Hung",
        course: "300h Yoga Teacher Training Course K21",
        quote:
          "The 300-hour course gave me the opportunity to enhance my knowledge, delve deeper into yoga philosophy, and apply it to my life. I feel more mature, not just in skills but also in spirit. This has been an incredible journey, and I am deeply grateful for the experience.",
      },
      {
        name: "Le Minh Tuan",
        course: "200h Yoga Teacher Training Course K24",
        quote:
          "Since joining the course, I have learned how to regulate my breathing, balance my body, and most importantly, control my mind. The course helped me understand yoga philosophy better and apply it to daily life.",
      },
      {
        name: "Pham Thi Hoa",
        course: "300h Yoga Teacher Training Course K22",
        quote:
          "It was amazing to have the opportunity to dive deep into the world of yoga. The course not only improved my technical skills but also expanded my understanding of spirituality and my connection to my body.",
      },
      {
        name: "Ngo Quang Huy",
        course: "200h Yoga Teacher Training Course K23",
        quote:
          "The course was a life-changing experience for me. I learned to practice yoga not just on the mat but in every moment of life. Thank you to the teachers for the inspiration and dedicated guidance.",
      },
      {
        name: "Trinh Thanh Hang",
        course: "300h Yoga Teacher Training Course K23",
        quote:
          "A truly meaningful course that helped me not only train my body but also find balance in my soul. Yoga has become an essential part of my life.",
      },
      {
        name: "Sarah Chen",
        role: "Yoga Practitioner",
        course: "Kundalini Yoga Training",
        quote: "The Kundalini Yoga training at Yen Yoga transformed my practice completely. The instructors' deep knowledge and personal attention made this journey truly special.",
      },
      {
        name: "Michael Thompson",
        role: "Corporate Professional",
        course: "Mantra Meditation Course",
        quote: "As a busy professional, finding peace through meditation seemed impossible. The Mantra Meditation course helped me find balance and clarity in my hectic life.",
      },
      {
        name: "Emma Nguyen",
        role: "Yoga Teacher",
        course: "200-Hour Teacher Training",
        quote: "The 200-hour Teacher Training was comprehensive and life-changing. The blend of traditional knowledge with modern teaching methods was perfect.",
      },
      {
        name: "David Park",
        role: "Wellness Enthusiast",
        course: "Yoga Retreat Program",
        quote: "The retreat experience was beyond my expectations. The peaceful environment, combined with expert guidance, helped me deepen my practice significantly.",
      },
      {
        name: "Lisa Martinez",
        role: "Health Coach",
        course: "Advanced Yoga Workshop",
        quote: "The holistic approach to yoga and meditation here is remarkable. The instructors don't just teach poses; they inspire a complete lifestyle transformation.",
      },
      {
        name: "John Miller",
        role: "Fitness Trainer",
        course: "Vinyasa Flow Training",
        quote: "The Vinyasa Flow training exceeded all expectations. The attention to detail in alignment and breath work has completely elevated my teaching approach.",
      },
      {
        name: "Maria Garcia",
        role: "Student",
        course: "Beginners Yoga Program",
        quote: "As a complete beginner, I was nervous at first. The supportive environment and patient instructors made my yoga journey a wonderful experience.",
      },
      {
        name: "Tom Wilson",
        role: "Meditation Enthusiast",
        course: "Advanced Meditation",
        quote: "The advanced meditation course opened new dimensions in my practice. The ancient techniques taught here have profoundly impacted my daily life.",
      }
    ],
  };

  return (
    <section className="section bg-bg1 bg-opacity-30">
      <div className="container mx-auto">
        <h2 className="sectionHeaders mb-12" data-aos="fade-up">
          {language === "en" ? "What Our Students Say" : "Học Viên Nói Gì Về Chúng Tôi"}
        </h2>

        {/* Image slider section with click handlers */}
        <div className="mb-16">
          <Slider {...sliderSettings}>
            <div className="p-3">
              <div className="h-[400px] relative cursor-pointer" onClick={() => openModal(FeedbackImg)}>
                <img
                  src={FeedbackImg}
                  alt="Feedback 1"
                  className="rounded-lg shadow-md w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="p-3">
              <div className="h-[400px] relative cursor-pointer" onClick={() => openModal(FeedbackImg2)}>
                <img
                  src={FeedbackImg2}
                  alt="Feedback 2"
                  className="rounded-lg shadow-md w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="p-3">
              <div className="h-[400px] relative cursor-pointer" onClick={() => openModal(FeedbackImg3)}>
                <img
                  src={FeedbackImg3}
                  alt="Feedback 3"
                  className="rounded-lg shadow-md w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="p-3">
              <div className="h-[400px] relative cursor-pointer" onClick={() => openModal(FeedbackImg4)}>
                <img
                  src={FeedbackImg4}
                  alt="Feedback 4"
                  className="rounded-lg shadow-md w-full h-full object-contain"
                />
              </div>
            </div>
          </Slider>
        </div>

        {/* Add Modal component */}
        <ImageModal
          isOpen={isModalOpen}
          image={selectedImage}
          onClose={closeModal}
        />

        <div className="flex flex-col items-center">
          {/* First row with 3 smaller testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-8 max-w-[85%] mx-auto">
            {testimonials[language].slice(0, 3).map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                data-aos="flip-left"
                data-aos-delay={index * 100}
              >
                <div className="mb-3">
                  <h3 className="text-base font-semibold text-headings1 mb-1">{testimonial.name}</h3>
                  <p className="text-orange text-xs font-medium mb-1">{testimonial.role}</p>
                  <p className="text-orange text-xs italic">{testimonial.course}</p>
                </div>
                <p className="text-gray-700 text-xs leading-relaxed italic">{testimonial.quote}</p>
              </div>
            ))}
          </div>

          {/* Second row with 4 testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
            {testimonials[language].slice(3, 7).map((testimonial, index) => (
              <div 
                key={index + 3}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                data-aos="flip-left"
                data-aos-delay={(index + 3) * 100}
              >
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-headings1 mb-1">{testimonial.name}</h3>
                  <p className="text-orange text-sm font-medium mb-1">{testimonial.role}</p>
                  <p className="text-orange text-sm italic">{testimonial.course}</p>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed italic">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
