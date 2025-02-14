import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import CourseSelection from "./CourseSelection";
import { Link } from "react-router-dom";
import Typical from "react-typical";
import CourseImage1 from "../assets/img/courses2/100H.jpg";
import CourseImage2 from "../assets/img/courses2/200H1.jpg";
import CourseImage3 from "../assets/img/courses2/30H1.jpg";
import RetreatImage from "../assets/img/retreat/about.jpg";
import DetailsImage from "../assets/img/DetailsImage/img1.jpg";
import DetailsImage1 from "../assets/img/DetailsImage/img2.jpg";
import DetailsImage2 from "../assets/img/DetailsImage/img3.jpg";
import DetailsImage3 from "../assets/img/DetailsImage/img4.jpg";
import DetailsImage4 from "../assets/img/DetailsImage/img5.jpg";
import DetailsImage5 from "../assets/img/DetailsImage/img6.jpg";
import DetailsImage6 from "../assets/img/DetailsImage/img7.jpg";
import DetailsImage7 from "../assets/img/DetailsImage/img8.jpg";
import DetailsImage8 from "../assets/img/DetailsImage/img9.jpg";
import DetailsImage9 from "../assets/img/DetailsImage/img10.jpg";
import DetailsImage10 from "../assets/img/DetailsImage/img11.jpg";
import DetailsImage11 from "../assets/img/DetailsImage/img12.jpg";
import DetailsImage12 from "../assets/img/DetailsImage/img13.jpg";
import DetailsImage13 from "../assets/img/DetailsImage/img14.jpg";
import ActivityImage1 from "../assets/img/activities/act1.jpg";
import ActivityImage2 from "../assets/img/activities/act2.jpg";
import ActivityImage3 from "../assets/img/activities/act3.jpg";
import ActivityImage4 from "../assets/img/activities/act4.jpg";
import ActivityImage5 from "../assets/img/activities/act5.jpg";
import ActivityImage6 from "../assets/img/activities/act6.jpg";
import ActivityImage7 from "../assets/img/activities/act7.jpg";
import ActivityImage8 from "../assets/img/activities/act8.jpg";
import ActivityImage9 from "../assets/img/activities/act9.jpg";
import ActivityImage10 from "../assets/img/activities/act10.jpg";
import courses1 from "../assets/img/coursesimage/course1.jpg";
import courses2 from "../assets/img/coursesimage/course2.jpg";
import courses3 from "../assets/img/coursesimage/course3.jpg";
import courses4 from "../assets/img/coursesimage/course4.jpg";
import courses5 from "../assets/img/coursesimage/course5.jpg";
import courses6 from "../assets/img/coursesimage/course6.jpg";
import courses7 from "../assets/img/coursesimage/course7.jpg";
import courses8 from "../assets/img/coursesimage/course8.jpg";
import courses9 from "../assets/img/coursesimage/course9.jpg";
import courses10 from "../assets/img/coursesimage/course10.jpg";
import courses11 from "../assets/img/coursesimage/course11.jpg";
import courses12 from "../assets/img/coursesimage/course12.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsXSquareFill } from "react-icons/bs";

// Modal component for displaying the clicked image
const ImageModal = ({ isOpen, image, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-30">
      <div className="relative max-w-[70%] max-h-[70%] m-4">
        <img
          src={image}
          alt="Zoomed"
          className="w-full h-full object-contain"
        />
        <BsXSquareFill
          className="absolute -right-8 top-0 text-white cursor-pointer hover:scale-[0.8] transition-all"
          onClick={onClose}
          size={30}
        />
      </div>
    </div>
  );
};

const CourseDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language } = useLanguage();

  // Text content for UI elements
  const texts = {
    en: {
      pageTitle: "Our Yoga Courses",
      introduction:
        "At our yoga institute, we offer a range of courses to serve all levels of practice.",
      priceHeader: "We have courses at reasonable prices, including:",
      timeInfo:
        "Flexible learning times, with courses running from March to August. Join us to experience profound and beneficial lessons.",
      benefits:
        "Our courses not only help you improve your yoga skills but also bring many benefits to mental and physical health. You will learn from experienced instructors who will guide you step by step in your yoga journey.",
      registration:
        'To register, simply click the "Book Now" button below each course. We will contact you to confirm your information and guide you through the registration process. Hurry up as seats are limited!',
      price: "Price",
      discountPrice: "Discount Price",
      time: "Time",
      location: "Location",
      certification: "Certification",
      objectives: "Objectives",
      schedule: "Schedule",
      instructors: "Instructors",
      readMore: "Download Course Details",
      bookNow: "Book Now",
      stayingPlace: "Your Comfortable Retreat Awaits",
      activitiesHeading: "Activities Happening Inside the Course and Retreat"
    },
    vn: {
      pageTitle: "Khóa học Yoga của chúng tôi",
      introduction:
        "Tại học viện yoga của chúng tôi, chúng tôi cung cấp một loạt các khóa học để phục vụ cho tất cả các cấp độ thực hành.",
      priceHeader: "Chúng tôi có các khóa học với mức giá hợp lý, bao gồm:",
      timeInfo:
        "Thời gian học linh hoạt, với các khóa học diễn ra từ tháng 3 đến tháng 8. Hãy tham gia cùng chúng tôi để trải nghiệm những bài học sâu sắc và bổ ích.",
      benefits:
        "Các khóa học của chúng tôi không chỉ giúp bạn nâng cao kỹ năng yoga mà còn mang lại nhiều lợi ích cho sức khỏe tinh thần và thể chất. Bạn sẽ được học từ những giảng viên dày dạn kinh nghiệm, những người sẽ hướng dẫn bạn từng bước trong hành trình yoga của mình.",
      registration:
        'Để đăng ký, bạn chỉ cần nhấp vào nút "Đăng Ký Ngay" bên dưới mỗi khóa học. Chúng tôi sẽ liên hệ với bạn để xác nhận thông tin và hướng dẫn bạn hoàn tất quy trình đăng ký. Hãy nhanh tay vì số lượng chỗ ngồi có hạn!',
      price: "Giá",
      discountPrice: "Giá Ưu Đãi",
      time: "Thời Gian",
      location: "Địa Điểm",
      certification: "Chứng Chỉ",
      objectives: "Mục Tiêu",
      schedule: "Lịch Học",
      instructors: "Giảng Viên",
      readMore: "Tải Thông Tin Khóa Học",
      bookNow: "Đăng Ký Ngay",
      stayingPlace: "Nơi Nghỉ Ngơi Thoải Mái Của Bạn",
      activitiesHeading: "Các Hoạt Động Diễn Ra Trong Khóa Học và Retreat"
    },
  };

  // Course data with both languages
  const courses = [
    {
      id: 1,
      image: CourseImage2,
      syllabus: "/200HOnline.docx",
      en: {
        title: "200H TTC Kundalini Yoga & Meditation (Online)",
        summary:
          "Become a Kundalini Yoga & Meditation Teacher with International Certification - Online Program",
        price: "40,000,000 VND",
        discountPrice: "35,000,000 VND (until 31/12/2024)",
        time: "6/5 - 5/8",
        location: "Online",
        certification: "200H Yoga Alliance Certification",
        objectives: [
          "Deepen understanding of Kundalini Yoga and its core principles",
          "Develop skills to teach Kundalini Yoga Kriyas and meditation",
          "Learn about Chakra systems, Yoga philosophy, and anatomy",
          "Practice teaching and guiding students through Kundalini Yoga",
        ],
        schedule: {
          sadhana: "4:30 AM - 6:00 AM (Mon-Fri)",
          theory: "8:00 PM - 10:00 PM (Mon, Tue, Thu, Fri)",
          retreat: "15/8 - 18/8 (4D3N at Ba Ho Tourist Area)",
        },
        additionalDetails: {
          courseContent: [
            "Alignment and chakra-activating asanas.",
            "Chakra System.",
            "Yoga philosophy & Kundalini origins.",
            "Yoga Anatomy.",
            "Mantra Meditation & Mudras.",
            "Yogic diet & lifestyle.",
            "Teaching methods & classroom management."
          ],
          paymentOptions: [
            "40,000,000 VND.",
            "Discount: 35,000,000 VND if registered before February 28, 2024."
          ],
          importantNotes: [
            "Schedule: May 6 - August 5, 2025.",
            "Live Theory & Practice Sessions.",
            "Retreat 4 Days 3 Nights (August 15-18).",
            "Certification Requirements: Completion of all coursework, practice hours, and assessments."
          ],
        },
        instructors: [
          {
            name: "Master Hoanh Nguyen",
            bio: "E-RYT 500 certified, 9 years of experience, trained in Kundalini Yoga in India",
          },
          {
            name: "Master Yen Nguyen",
            bio: "E-RYT 500 certified, 10 years of experience, specializes in Mantra music and vegan lifestyle",
          },
        ],
      },
      vn: {
        title: "200H TTC Kundalini Yoga & Thiền (Trực tuyến)",
        summary:
          "Trở thành giáo viên Kundalini Yoga & Thiền chứng chỉ Quốc Tế - Chương trình Online",
        price: "40,000,000 VND",
        discountPrice: "35,000,000 VND (đến 31/12/2024)",
        time: "6/5 - 5/8",
        location: "Trực tuyến",
        certification: "Chứng chỉ Yoga Alliance 200H",
        objectives: [
          "Hiểu sâu về Kundalini Yoga và các nguyên tắc cốt lõi",
          "Phát triển kỹ năng giảng dạy Kundalini Yoga Kriyas và thiền",
          "Tìm hiểu về hệ thống Chakra, triết lý Yoga và giải phẫu học",
          "Thực hành giảng dạy và hướng dẫn học viên qua Kundalini Yoga",
        ],
        additionalDetails: {
          courseContent: [
            "Căn chỉnh và các tư thế kích hoạt luân xa.",
            "Hệ thống Luân xa.",
            "Triết lý Yoga & nguồn gốc Kundalini.",
            "Giải phẫu Yoga.",
            "Thiền Mantra & Mudras.",
            "Chế độ ăn uống & lối sống Yoga.",
            "Phương pháp giảng dạy & quản lý lớp học."
          ],
          paymentOptions: [
            "40,000,000 VND.",
            "Giảm giá: 35,000,000 VND nếu đăng ký trước ngày 28 tháng 2 năm 2024."
          ],
          importantNotes: [
            "Lịch trình: Từ 6 tháng 5 đến 5 tháng 8 năm 2025.",
            "Các buổi lý thuyết và thực hành trực tiếp.",
            "Khóa tu 4 ngày 3 đêm (từ 15 đến 18 tháng 8).",
            "Yêu cầu chứng nhận: Hoàn thành tất cả các khóa học, giờ thực hành và đánh giá."
          ],
        },
        instructors: [
          {
            name: "Master Hoanh Nguyen",
            bio: "E-RYT 500 certified, 9 years of experience, trained in Kundalini Yoga in India",
          },
          {
            name: "Master Yen Nguyen",
            bio: "E-RYT 500 certified, 10 years of experience, specializes in Mantra music and vegan lifestyle",
          },
        ],
      },
    },
    {
      id: 2,
      image: CourseImage2,
      syllabus: "/200HOffline.docx",
      en: {
        title: "200H TTC Kundalini Yoga & Meditation (Offline)",
        summary:
          "Become a Kundalini Yoga & Meditation Teacher with International Certification - Immersive Program",
        price: "55,000,000 VND",
        discountPrice: "48,000,000 VND (until 31/12/2024)",
        time: "26/7 - 18/8",
        location: "Ba Ho Tourist Area, Ninh Hoa",
        certification: "200H Yoga Alliance Certification",
        objectives: [
          "Immersive learning experience in a peaceful natural environment",
          "Daily practice of Kundalini Yoga and meditation",
          "In-depth study of Yoga philosophy and teaching methodology",
          "Direct guidance and interaction with experienced teachers",
          "Practical teaching experience with fellow students",
        ],
        schedule: {
          daily: "Full-day intensive training",
          morning:
            "4:30 AM - 12:00 PM: Morning Sadhana, Yoga practice, and Theory",
          afternoon: "2:00 PM - 6:00 PM: Teaching methodology and Practice",
          evening: "7:30 PM - 9:00 PM: Evening meditation and group activities",
          includes: "Accommodation and vegetarian meals included",
        },
        additionalDetails: {
          courseContent: [
            "Alignment and chakra-activating asanas.",
            "Chakra System.",
            "Yoga philosophy & Kundalini origins.",
            "Yoga Anatomy.",
            "Mantra Meditation & Mudras.",
            "Yogic diet & lifestyle.",
            "Teaching methods & classroom management."
          ],
          paymentOptions: [
            "55,000,000 VND.",
            "Discount: 48,000,000 VND if registered before December 31, 2024."
          ],
          importantNotes: [
            "Location: Ninh Hòa, Khánh Hòa.",
            "Schedule: July 26 - August 18, 2025.",
            "24-day immersive retreat.",
            "Includes vegan meals & holistic activities.",
            "Certification Requirements: Completion of all coursework, practice hours, and assessments."
          ],
        },
        instructors: [
          {
            name: "Master Hoanh Nguyen",
            bio: "E-RYT 500 certified, 9 years of experience, trained in Kundalini Yoga in India",
          },
          {
            name: "Master Yen Nguyen",
            bio: "E-RYT 500 certified, 10 years of experience, specializes in Mantra music and vegan lifestyle",
          },
        ],
      },
      vn: {
        title: "200H TTC Kundalini Yoga & Thiền (Offline)",
        summary:
          "Trở thành giáo viên Kundalini Yoga & Thiền chứng chỉ Quốc Tế - Chương trình Tập trung",
        price: "55,000,000 VND",
        discountPrice: "48,000,000 VND (đến 31/12/2024)",
        time: "26/7 - 18/8",
        location: "KDL Ba Hồ, Ninh Hoà",
        certification: "Chứng chỉ Yoga Alliance 200H",
        objectives: [
          "Trải nghiệm học tập chuyên sâu trong môi trường thiên nhiên yên bình",
          "Thực hành Kundalini Yoga và thiền định hàng ngày",
          "Nghiên cứu chuyên sâu về triết lý Yoga và phương pháp giảng dạy",
          "Được hướng dẫn và tương tác trực tiếp với giáo viên có kinh nghiệm",
          "Thực hành giảng dạy với các học viên khác",
        ],
        schedule: {
          daily: "Đào tạo chuyên sâu cả ngày",
          morning:
            "4:30 - 12:00: Sadhana buổi sáng, thực hành Yoga và Lý thuyết",
          afternoon: "14:00 - 18:00: Phương pháp giảng dạy và Thực hành",
          evening: "19:30 - 21:00: Thiền buổi tối và hoạt động nhóm",
          includes: "Đã bao gồm chỗ ở và các bữa ăn chay",
        },
        additionalDetails: {
          courseContent: [
            "Căn chỉnh và các tư thế kích hoạt luân xa.",
            "Hệ thống Luân xa.",
            "Triết lý Yoga & nguồn gốc Kundalini.",
            "Giải phẫu Yoga.",
            "Thiền Mantra & Mudras.",
            "Chế độ ăn uống & lối sống Yoga.",
            "Phương pháp giảng dạy & quản lý lớp học."
          ],
          paymentOptions: [
            "55,000,000 VND.",
            "Giảm giá: 48,000,000 VND nếu đăng ký trước ngày 31 tháng 12 năm 2024."
          ],
          importantNotes: [
            "Địa điểm: Ninh Hòa, Khánh Hòa.",
            "Lịch trình: Từ 26 tháng 7 đến 18 tháng 8 năm 2025.",
            "Khóa tu 24 ngày.",
            "Bao gồm bữa ăn chay & các hoạt động toàn diện.",
            "Yêu cầu chứng nhận: Hoàn thành tất cả các khóa học, giờ thực hành và đánh giá."
          ],
        },
        instructors: [
          {
            name: "Master Hoanh Nguyen",
            bio: "E-RYT 500 certified, 9 years of experience, trained in Kundalini Yoga in India",
          },
          {
            name: "Master Yen Nguyen",
            bio: "E-RYT 500 certified, 10 years of experience, specializes in Mantra music and vegan lifestyle",
          },
        ],
      },
    },
    {
      id: 3,
      image: CourseImage1,
      syllabus: "/100H.docx",
      en: {
        title: "Kundalini Yoga & Meditation Mantra - 100h Foundation",
        summary:
          "Foundation course to begin the journey of 'Becoming your own master'",
        price: "12,000,000 VND",
        discountPrice: "10,000,000 VND (until 31/01/2025)",
        time: "Batch 8: 3/3 - 2/4 (Evening) | Batch 9: 17/3 - 16/4 (Morning)",
        location: "Online",
        certification: "YACEP Yoga Alliance Certification",
        objectives: [
          "Understanding Kundalini Yoga and applying Mantra Meditation in life",
          "Master Chakras and how energy affects health and spirit",
          "Structure of a Kriya: Prana (breath), Asana (posture), Mudra (hand position), Bandha (energy locks), Mantra",
          "Practice Kriyas for balancing health and spirit",
          "Group practice for enhanced practical experience",
        ],
        additionalDetails: {
          courseContent: [
            "What is Kundalini Yoga?",
            "Applying Mantra Meditation in daily life.",
            "Chakras and how energy affects health.",
            "Structure of a Kriya: Prana, Asana, Mudra, Bandha, Mantra.",
            "Important safety and training guidelines.",
            "Practicing Kriyas for physical and mental balance.",
            "Group rotational practice."
          ],
          paymentOptions: [
            "12,000,000 VND.",
            "Discount: 10,000,000 VND if registered before January 31, 2025.",
            "Installment plan: 50% upfront, remaining in 30 days."
          ],
          importantNotes: [
            "Schedule:",
            "Batch 8: March 3 - April 2, 2025.",
            "Practice: 4:30 - 6:00 AM (Monday, Wednesday, Friday - March 5 - May 24)",
            "Theory: 20:00 - 22:00 (Monday, Wednesday, Friday - March 3 - April 2)",
            "Batch 9: March 17 - April 16, 2025.",
            "Practice: 8:30 - 11:45 AM (Monday, Wednesday, Friday - March 17 - April 16)"
          ],
        },
        instructors: [
          {
            name: "Master Hoanh Nguyen",
            bio: "E-RYT 500 certified, 9 years of experience, trained in Kundalini Yoga in India",
          },
          {
            name: "Master Yen Nguyen",
            bio: "E-RYT 500 certified, 10 years of experience, specializes in Mantra music and vegan lifestyle",
          },
        ],
      },
      vn: {
        title: "Kundalini Yoga & Thiền Mantra - 100h Foundation",
        summary:
          "Khoá học nền tảng để bắt đầu hành trình 'Trở thành người thầy của chính mình'",
        price: "12,000,000 VND",
        discountPrice: "10,000,000 VND (đến 31/01/2025)",
        time: "Khoá 8: 3/3 - 2/4 (Tối) | Khoá 9: 17/3 - 16/4 (Sáng)",
        location: "Online",
        certification: "Chứng chỉ YACEP Yoga Alliance",
        objectives: [
          "Hiểu về Kundalini Yoga và ứng dụng Thiền Mantra vào cuộc sống",
          "Nắm vững Luân Xa và cách năng lượng tác động đến sức khỏe và tinh thần",
          "Cấu trúc của một Kriya: Prana (hơi thở), Asana (tư thế), Mudra (Thủ ấn), Bandha (khóa năng lượng), Mantra",
          "Thực hành các Kriya để cân bằng sức khỏe và tinh thần",
          "Thực hành nhóm luân phiên để nâng cao trải nghiệm thực tế",
        ],
        additionalDetails: {
          courseContent: [
            "Kundalini Yoga là gì?",
            "Ứng dụng Thiền Mantra vào cuộc sống hàng ngày.",
            "Luân Xa và cách năng lượng tác động đến sức khỏe.",
            "Cấu trúc của một Kriya: Prana, Asana, Mudra, Bandha, Mantra.",
            "Những lưu ý quan trọng về an toàn và đào tạo.",
            "Thực hành các Kriya để cân bằng sức khỏe thể chất và tinh thần.",
            "Thực hành luân phiên theo nhóm."
          ],
          paymentOptions: [
            "12,000,000 VND.",
            "Giảm giá: 10,000,000 VND nếu đăng ký trước ngày 31 tháng 1 năm 2025.",
            "Kế hoạch trả góp: 50% trước, phần còn lại trong 30 ngày."
          ],
          importantNotes: [
            "Lịch trình:",
            "Khóa 8: Từ 3 tháng 3 đến 2 tháng 4 năm 2025.",
            "Thực hành: 4:30 - 6:00 sáng (Thứ 2, Thứ 4, Thứ 6 - từ 5 tháng 3 đến 24 tháng 5)",
            "Lý thuyết: 20:00 - 22:00 (Thứ 2, Thứ 4, Thứ 6 - từ 3 tháng 3 đến 2 tháng 4)",
            "Khóa 9: Từ 17 tháng 3 đến 16 tháng 4 năm 2025.",
            "Thực hành: 8:30 - 11:45 sáng (Thứ 2, Thứ 4, Thứ 6 - từ 17 tháng 3 đến 16 tháng 4)"
          ],
        },
        instructors: [
          {
            name: "Master Hoanh Nguyen",
            bio: "E-RYT 500 certified, 9 years of experience, trained in Kundalini Yoga in India",
          },
          {
            name: "Master Yen Nguyen",
            bio: "E-RYT 500 certified, 10 years of experience, specializes in Mantra music and vegan lifestyle",
          },
        ],
      },
    },
    {
      id: 4,
      image: CourseImage3,
      syllabus: "/30H.docx",
      en: {
        title: "30hrs Chakra Healing",
        summary: "Energy and Healing",
        price: "4,500,000 VND",
        discountPrice: "3,500,000 VND (5 first slots)",
        time: "18, 19, 20/4/2025 (Friday, Saturday & Sunday)",
        location: "Kim Yoga Academy Da Nang",
        certification: "30h Yacep Yoga Alliance Certification",
        objectives: [
          "Understand Chakras and their impact on physical and mental health",
          "Learn about the 8 Chakras in Kundalini Yoga",
          "Practice Kriyas to balance Chakras",
          "Meditation techniques for different Chakra regions",
        ],
        schedule: {
          daily: [
            "7:00 - 8:30: Kundalini Yoga & Meditation",
            "8:30 - 9:15: Breakfast",
            "9:30 - 11:30: Theory and practice",
            "11:45 - 13:45: Lunch and rest",
            "14:00 - 17:00: Theory and practice",
          ],
        },
        priceDetails: {
          regular: "4,500,000 VND/person",
          earlyBird: "3,500,000 VND/person (first 5 registrations)",
          includes: "Includes course fee and 30h Yacep Yoga Alliance certificate",
        },
        additionalDetails: {
          courseContent: [
            "Understanding Chakras and their impact on physical and mental health.",
            "8 Chakras in Kundalini Yoga.",
            "Kriyas for chakra balancing.",
            "Meditation for different chakra regions in the body.",
            "30-hour YACEP Yoga Alliance Certification."
          ],
          paymentOptions: [
            "4,500,000 VND/person.",
            "Discount: 3,500,000 VND/person for the first 5 registrations.",
            "Includes: Tuition fee & 30H YACEP Yoga Alliance Certificate."
          ],
          importantNotes: [
            "Location: Kim Yoga Academy, Da Nang.",
            "Schedule: Friday, Saturday & Sunday, April 18-20, 2025."
          ],
        },
        instructors: [
          {
            name: "Master Hoanh Nguyen",
            bio: "E-RYT 500 certified, 9 years of experience, trained in Kundalini Yoga in India",
          },
          {
            name: "Master Yen Nguyen",
            bio: "E-RYT 500 certified, 10 years of experience, specializes in Mantra music and vegan lifestyle",
          },
        ],
      },
      vn: {
        title: "Chakra Healing 30h",
        summary: "Năng lượng và chữa lành",
        price: "4,500,000 VND/người",
        discountPrice: "3,500,000 VND/người (5 suất đầu tiên)",
        time: "18, 19, 20/4/2025 (Thứ 6, Thứ 7 & Chủ nhật)",
        location: "Kim Yoga Academy Đà Nẵng",
        certification: "Chứng chỉ 30h Yacep Yoga Alliance",
        objectives: [
          "Hiểu về Luân xa và tác động của luân xa đến sức khỏe thể chất và tinh thần",
          "Tìm hiểu về 8 Luân xa trong Kundalini Yoga",
          "Thực hành Kriyas để cân bằng các luân xa",
          "Kỹ thuật thiền cho các vùng luân xa trên cơ thể",
        ],
        schedule: {
          daily: [
            "7:00 - 8:30: Kundalini Yoga & Thiền",
            "8:30 - 9:15: Ăn sáng",
            "9:30 - 11:30: Học lý thuyết và thực hành",
            "11:45 - 13:45: Ăn trưa và nghỉ trưa",
            "14:00 - 17:00: Học lý thuyết và thực hành",
          ],
        },
        priceDetails: {
          regular: "Giá thường: 4.500.000đ/người",
          earlyBird: "Ưu đãi trước 31/1/2025: 3.500.000đ/người (5 suất đăng ký đầu tiên)",
          includes: "Bao gồm chi phí học và chứng chỉ 30h Yacep Yoga Alliance",
        },
        additionalDetails: {
          courseContent: [
            "Hiểu về Luân xa và tác động của luân xa đến sức khỏe thể chất và tinh thần.",
            "8 Luân xa trong Kundalini Yoga.",
            "Kriya để cân bằng các luân xa.",
            "Thiền cho các vùng luân xa trên cơ thể.",
            "Chứng chỉ YACEP Yoga Alliance 30 giờ."
          ],
          paymentOptions: [
            "4,500,000 VND/người.",
            "Giảm giá: 3,500,000 VND/người cho 5 đăng ký đầu tiên.",
            "Bao gồm: Học phí & Chứng chỉ YACEP Yoga Alliance 30H."
          ],
          importantNotes: [
            "Địa điểm: Kim Yoga Academy, Đà Nẵng.",
            "Lịch trình: Thứ 6, Thứ 7 & Chủ nhật, từ 18-20 tháng 4 năm 2025."
          ],
        },
        instructors: [
          {
            name: "Master Hoanh Nguyen",
            bio: "E-RYT 500 certified, 9 years of experience, trained in Kundalini Yoga in India",
          },
          {
            name: "Master Yen Nguyen",
            bio: "E-RYT 500 certified, 10 years of experience, specializes in Mantra music and vegan lifestyle",
          },
        ],
      },
    },
  ];

  // Array of detail images
  const detailImages = [
    DetailsImage,
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
  ];

  // Slider settings
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
    focusOnSelect: true,
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

  const openBookingForm = (course) => {
    setSelectedCourse(course);
    setIsOpen(true);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
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
            steps={[texts[language].pageTitle, 2000]}
            loop={1}
            wrapper="span"
          />
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-10 font-bold">
          {texts[language].introduction}
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-10 font-bold">
          {texts[language].priceHeader}
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-10 font-bold">
          {texts[language].timeInfo}
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-10 font-bold">
          {texts[language].benefits}
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-10 font-bold">
          {texts[language].registration}
        </p>

        {/* Animated Heading before the slider */}
        <h3 className="text-3xl font-bold text-gray-800 mb-4">
          <Typical
            steps={[texts[language].stayingPlace, 2000]}
            loop={1}
            wrapper="span"
          />
        </h3>

        {/* Image Slider Section */}
        <div className="py-8">
          <Slider {...sliderSettings} className="w-full max-w-4xl mx-auto">
            {detailImages.map((image, index) => (
              <div key={index} className="px-2">
                <img
                  src={image}
                  alt={`Detail ${index + 1}`}
                  className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Courses Section */}
      <div className="py-16 px-8 max-w-7xl mx-auto">
        {courses.map((course) => (
          <div
            key={course.id}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 bg-white shadow-lg rounded-lg overflow-hidden text-center"
          >
            <div className="relative w-full h-48 md:h-80 lg:h-96">
              <img
                src={course.image}
                alt={course[language].title}
                className="w-full h-48 md:h-80 object-cover object-center"
              />
            </div>
            <div className="p-8 flex flex-col justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {course[language].title}
                </h2>
                <p className="text-gray-600 mb-4 font-bold">
                  {course[language].summary}
                </p>
                <p className="text-gray-800 mb-2 font-bold">
                  <span className="font-semibold">
                    {texts[language].price}:
                  </span>{" "}
                  {course[language].price}
                </p>
                <p className="text-gray-800 mb-2 font-bold">
                  <span className="font-semibold">
                    {texts[language].discountPrice}:
                  </span>{" "}
                  {course[language].discountPrice}
                </p>
                <p className="text-gray-800 mb-2 font-bold">
                  <span className="font-semibold">{texts[language].time}:</span>{" "}
                  {course[language].time}
                </p>
                <p className="text-gray-800 mb-2 font-bold">
                  <span className="font-semibold">
                    {texts[language].location}:
                  </span>{" "}
                  {course[language].location}
                </p>

                {course[language].certification && (
                  <p className="text-gray-800 mb-4 font-bold">
                    <span className="font-semibold">
                      {texts[language].certification}:
                    </span>{" "}
                    {course[language].certification}
                  </p>
                )}

                {course[language].objectives && (
                  <div className="text-gray-800 mb-4 text-left">
                    <h3 className="text-xl font-semibold mb-2 border-b-2 border-gray-300 pb-1">
                      {texts[language].objectives}
                    </h3>
                    <ul className="list-disc pl-6 space-y-1">
                      {course[language].objectives.map((obj, index) => (
                        <li key={index} className="text-gray-700">
                          {obj}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Render additional details section */}
                <div className="text-gray-800 mb-4 text-left">
                  <h3 className="text-xl font-semibold mb-2 border-b-2 border-gray-300 pb-1">
                    Additional Details
                  </h3>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Course Content:</span> {course[language].additionalDetails.courseContent.join(", ")}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Payment Options:</span> {course[language].additionalDetails.paymentOptions.join(", ")}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Important Notes:</span> {course[language].additionalDetails.importantNotes.join(", ")}
                  </p>
                </div>

                {course[language].instructors && (
                  <div className="text-gray-800 mb-4 text-left">
                    <h3 className="text-xl font-semibold mb-2 border-b-2 border-gray-300 pb-1">
                      <Link to="/trainers" className="hover:text-orange-500">
                        {texts[language].instructors}
                      </Link>
                    </h3>
                    <ul className="space-y-2">
                      {course[language].instructors.map((instructor, index) => (
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
              {/* Added images centered above the Book Now button for 200H Online course */}
              {course.id === 1 && ( // Check if the course is the 200H Online course
                <div className="flex justify-center mt-8 mb-4"> {/* Centered above the button */}
                  <div className="flex justify-center space-x-4"> {/* Container for images */}
                    <img
                      src={courses5} // First image from detailImages
                      alt="Detail 1"
                      className="w-1/3 h-32 object-cover rounded-lg shadow-md"
                    />
                    <img
                      src={detailImages[1]} // Second image from detailImages
                      alt="Detail 2"
                      className="w-1/3 h-32 object-cover rounded-lg shadow-md"
                    />
                    <img
                      src={courses6} // Third image from detailImages
                      alt="Detail 3"
                      className="w-1/3 h-32 object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
              )}
              
              {/* Added images centered above the Book Now button for 200H Offline course */}
              {course.id === 2 && ( // Check if the course is the 200H Offline course
                <div className="flex justify-center mt-8 mb-4"> {/* Centered above the button */}
                  <div className="flex justify-center space-x-4"> {/* Container for images */}
                    <img
                      src={courses1} // First image from detailImages
                      alt="Detail 1"
                      className="w-1/3 h-32 object-cover rounded-lg shadow-md"
                    />
                    <img
                      src={courses2} // Second image from detailImages
                      alt="Detail 2"
                      className="w-1/3 h-32 object-cover rounded-lg shadow-md"
                    />
                    <img
                      src={detailImages[2]} // Third image from detailImages
                      alt="Detail 3"
                      className="w-1/3 h-32 object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
              )}

              {/* Added images centered above the Book Now button for 30hrs Chakra Healing course */}
              {course.id === 4 && ( // Check if the course is the 30hrs Chakra Healing course
                <div className="flex justify-center mt-8 mb-4"> {/* Centered above the button */}
                  <div className="flex justify-center space-x-4"> {/* Container for images */}
                    <img
                      src={courses9} // First image from detailImages
                      alt="Detail 1"
                      className="w-1/3 h-32 object-cover rounded-lg shadow-md"
                    />
                    <img
                      src={courses10} // Second image from detailImages
                      alt="Detail 2"
                      className="w-1/3 h-32 object-cover rounded-lg shadow-md"
                    />
                    <img
                      src={courses4} // Third image from detailImages
                      alt="Detail 3"
                      className="w-1/3 h-32 object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
              )}
              
              {/* Added images centered above the Book Now button for Kundalini Yoga & Meditation Mantra - 100h Foundation course */}
              {course.id === 3 && ( // Check if the course is the 100h Foundation course
                <div className="flex justify-center mt-8 mb-4"> {/* Centered above the button */}
                  <div className="flex justify-center space-x-4"> {/* Container for images */}
                    <img
                      src={courses3} // First image from detailImages
                      alt="Detail 1"
                      className="w-1/3 h-32 object-cover rounded-lg shadow-md"
                    />
                    <img
                      src={courses7} // Second image from detailImages
                      alt="Detail 2"
                      className="w-1/3 h-32 object-cover rounded-lg shadow-md"
                    />
                    <img
                      src={courses11} // Third image from detailImages
                      alt="Detail 3"
                      className="w-1/3 h-32 object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
                <button
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors"
                  onClick={() => openBookingForm(course)}
                >
                  {texts[language].bookNow}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="py-16 px-8 max-w-7xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">
          <Typical
            steps={[texts[language].activitiesHeading, 2000]}
            loop={1}
            wrapper="span"
          />
        </h3>
        <div className="py-8">
          <Slider {...sliderSettings} className="w-full max-w-4xl mx-auto">
            <div className="px-2">
              <img
                src={ActivityImage1}
                alt="Activity 1"
                className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
              />
            </div>
            <div className="px-2">
              <img
                src={ActivityImage2}
                alt="Activity 2"
                className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
              />
            </div>
            <div className="px-2">
              <img
                src={ActivityImage3}
                alt="Activity 3"
                className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
              />
            </div>
            <div className="px-2">
              <img
                src={ActivityImage4}
                alt="Activity 4"
                className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
              />
            </div>
            <div className="px-2">
              <img
                src={ActivityImage5}
                alt="Activity 5"
                className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
              />
            </div>
            <div className="px-2">
              <img
                src={ActivityImage6}
                alt="Activity 6"
                className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
              />
            </div>
            <div className="px-2">
              <img
                src={ActivityImage7}
                alt="Activity 7"
                className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
              />
            </div>
            <div className="px-2">
              <img
                src={ActivityImage8}
                alt="Activity 8"
                className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
              />
            </div>
            <div className="px-2">
              <img
                src={ActivityImage9}
                alt="Activity 9"
                className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
              />
            </div>
            <div className="px-2">
              <img
                src={ActivityImage10}
                alt="Activity 10"
                className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
              />
            </div>
            {/* Added course images to the activity slider */}
            <div className="px-2">
              <img
                src={courses1}
                alt="Course 1"
                className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
              />
            </div>
            <div className="px-2">
              <img
                src={courses2}
                alt="Course 2"
                className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
              />
            </div>
            <div className="px-2">
              <img
                src={courses3}
                alt="Course 3"
                className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
              />
            </div>
            <div className="px-2">
              <img
                src={courses4}
                alt="Course 4"
                className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
              />
            </div>
            <div className="px-2">
              <img
                src={courses7}
                alt="Course 7"
                className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
              />
            </div>
            <div className="px-2">
              <img
                src={courses8}
                alt="Course 8"
                className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
              />
            </div>
            <div className="px-2">
              <img
                src={courses9}
                alt="Course 9"
                className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
              />
            </div>
            <div className="px-2">
              <img
                src={courses10}
                alt="Course 10"
                className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
              />
            </div>
            <div className="px-2">
              <img
                src={courses11}
                alt="Course 11"
                className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
              />
            </div>
            <div className="px-2">
              <img
                src={courses12}
                alt="Course 12"
                className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
              />
            </div>
          </Slider>
        </div>
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
