module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Inter",
      roboto: ["Roboto", "sans-serif"],
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "0",
      },
    },
    screens: {
      sm: "426px",
      md: "769px",
      lg: "1025px",
      xl: "1441px",
      xxl: "2560px",
      mob1: "370px",
      mob2: "640px",
      tab: "768px",
      tab1: "960px",
      tab2: "1024px",
      lap: "1280px",
      lap1: "1440px",
      lap2: "1600px",
      big: "1920px",
    },
    colors: {
      primary: "#9DB350",
      bg1: "#F1E0C6",
      bg2: "#FAF9F6",
      cta1: "#FF8C65",
      cta2: "#1D3557",
      accent1: "#D5C6E0",
      body: "#333333",
      headings1: "#003366",
      headings2: "#4C9F70",
      subtext: "#888888",
      highlight2: "#BFD9DB",
      ctatext1: "#F1E0C6",
      white: "#FFFFFF",
      link: "#FF6F61",
      hover1: "#F8C8A4",
      hover2: "#D4AF37",
      light: "#D3D3D3",
      transparent: "#00000080",

      blue: "#003087",
      white: "#FFFFFF",
      youtube: "#FF0000",
      instagram: "#962fbf",
      facebook: "#316FF6",
      gray: {
        DEFAULT: "#d1d5db",
        100: "#f5f5f5",
        500: "#6b7280",
        600: "#4A5568", // used for text-gray-600
        700: "#374151", // used for text-gray-700 2D3748
        800: "#2B2B2B", // used for text-gray-800
        400: "#CBD5E0", // used for bg-gray-400
      },
      yellow: {
        DEFAULT: "#EDC988",
        600: "#D97706",
      },
      egreen: {
        DEFAULT: "#9CB250",
        70: "#9CB25070",
        90: "#9CB25090",
      },
      orange: {
        DEFAULT: "#FF9F66",
        // 100: "#FFF1E8",
        200: "#FFB081",
        500: "#f97316",
        100: "#ffedd5",
        hover: "#FF9454",
      },
      green: {
        DEFAULT: "#258650",
        50: "#f0fdf4",
        700: "#047857",
        100: "#D4EEE9",
        200: "#94CAC0",
        300: "#45A090",
      },
      pink: {
        DEFAULT: "FF7D6B",
        100: "#FFE9E4",
        200: "#FEAEA3",
      },
      red: {
        100: "#D10000",
        500: "#F56565",
      },
      heading: "#1C0A0A",
      paragraph: "#584F49",
      stroke: {
        1: "#B0B4C0",
        2: "#CFCFCF",
        3: "#F4F5F7",
      },
      section: "#F5F6F9",
      shape: "#E8EEF0",
      transparent: "#000000A0",
    },
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/img/hero/bg.jpg')",
        people: "url('/src/assets/img/courses/course-8-removebg.png')",
        cardsBg: "url('/src/assets/img/cards/bg.png')",
        video: "url('/src/assets/img/video/video.png')",
        contact: "url('/src/assets/img/contact/bg.png')",
      },
      boxShadow: {
        header: "0px 18px 36px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};



// import React, { useState } from "react";
// import { useLanguage } from "../context/LanguageContext";
// import CourseSelection from "./CourseSelection";
// import { Link } from "react-router-dom";
// import Typical from "react-typical";
// import CourseImage1 from "../assets/img/courses2/100H.jpg";
// import CourseImage2 from "../assets/img/courses2/200H1.jpg";
// import CourseImage3 from "../assets/img/courses2/30H1.jpg";
// import RetreatImage from "../assets/img/retreat/about.jpg";
// import DetailsImage from "../assets/img/DetailsImage/img1.jpg";
// import DetailsImage1 from "../assets/img/DetailsImage/img2.jpg";
// import DetailsImage2 from "../assets/img/DetailsImage/img3.jpg";
// import DetailsImage3 from "../assets/img/DetailsImage/img4.jpg";
// import DetailsImage4 from "../assets/img/DetailsImage/img5.jpg";
// import DetailsImage5 from "../assets/img/DetailsImage/img6.jpg";
// import DetailsImage6 from "../assets/img/DetailsImage/img7.jpg";
// import DetailsImage7 from "../assets/img/DetailsImage/img8.jpg";
// import DetailsImage8 from "../assets/img/DetailsImage/img9.jpg";
// import DetailsImage9 from "../assets/img/DetailsImage/img10.jpg";
// import DetailsImage10 from "../assets/img/DetailsImage/img11.jpg";
// import DetailsImage11 from "../assets/img/DetailsImage/img12.jpg";
// import DetailsImage12 from "../assets/img/DetailsImage/img13.jpg";
// import DetailsImage13 from "../assets/img/DetailsImage/img14.jpg";
// import ActivityImage1 from "../assets/img/activities/act1.jpg";
// import ActivityImage2 from "../assets/img/activities/act2.jpg";
// import ActivityImage3 from "../assets/img/activities/act3.jpg";
// import ActivityImage4 from "../assets/img/activities/act4.jpg";
// import ActivityImage5 from "../assets/img/activities/act5.jpg";
// import ActivityImage6 from "../assets/img/activities/act6.jpg";
// import ActivityImage7 from "../assets/img/activities/act7.jpg";
// import ActivityImage8 from "../assets/img/activities/act8.jpg";
// import ActivityImage9 from "../assets/img/activities/act9.jpg";
// import ActivityImage10 from "../assets/img/activities/act10.jpg";
// import courses1 from "../assets/img/coursesimage/course1.jpg";
// import courses2 from "../assets/img/coursesimage/course2.jpg";
// import courses3 from "../assets/img/coursesimage/course3.jpg";
// import courses4 from "../assets/img/coursesimage/course4.jpg";
// import courses5 from "../assets/img/coursesimage/course5.jpg";
// import courses6 from "../assets/img/coursesimage/course6.jpg";
// import courses7 from "../assets/img/coursesimage/course7.jpg";
// import courses8 from "../assets/img/coursesimage/course8.jpg";
// import courses9 from "../assets/img/coursesimage/course9.jpg";
// import courses10 from "../assets/img/coursesimage/course10.jpg";
// import courses11 from "../assets/img/coursesimage/course11.jpg";
// import courses12 from "../assets/img/coursesimage/course12.jpg";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { BsXSquareFill } from "react-icons/bs";

// // Modal component for displaying the clicked image
// const ImageModal = ({ isOpen, image, onClose }) => {
//   if (!isOpen) return null;
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-30">
//       <div className="relative max-w-[70%] max-h-[70%] m-4">
//         <img
//           src={image}
//           alt="Zoomed"
//           className="w-full h-full object-contain"
//         />
//         <BsXSquareFill
//           className="absolute -right-8 top-0 text-white cursor-pointer hover:scale-[0.8] transition-all"
//           onClick={onClose}
//           size={30}
//         />
//       </div>
//     </div>
//   );
// };

// const CourseDetails = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const { language } = useLanguage();

//   // Text content for UI elements
//   const texts = {
//     en: {
//       pageTitle: "Our Yoga Courses",
//       introduction:
//         "At our yoga institute, we offer a range of courses to serve all levels of practice.",
//       priceHeader: "We have courses at reasonable prices, including:",
//       timeInfo:
//         "Flexible learning times, with courses running from March to August. Join us to experience profound and beneficial lessons.",
//       benefits:
//         "Our courses not only help you improve your yoga skills but also bring many benefits to mental and physical health. You will learn from experienced instructors who will guide you step by step in your yoga journey.",
//       registration:
//         'To register, simply click the "Book Now" button below each course. We will contact you to confirm your information and guide you through the registration process. Hurry up as seats are limited!',
//       price: "Price",
//       discountPrice: "Discount Price",
//       time: "Time",
//       location: "Location",
//       certification: "Certification",
//       objectives: "Objectives",
//       schedule: "Schedule",
//       instructors: "Instructors",
//       readMore: "Download Course Details",
//       bookNow: "Book Now",
//       stayingPlace: "Your Comfortable Retreat Awaits",
//       activitiesHeading: "Activities Happening Inside the Course and Retreat"
//     },
//     vn: {
//       pageTitle: "Khóa học Yoga của chúng tôi",
//       introduction:
//         "Tại học viện yoga của chúng tôi, chúng tôi cung cấp một loạt các khóa học để phục vụ cho tất cả các cấp độ thực hành.",
//       priceHeader: "Chúng tôi có các khóa học với mức giá hợp lý, bao gồm:",
//       timeInfo:
//         "Thời gian học linh hoạt, với các khóa học diễn ra từ tháng 3 đến tháng 8. Hãy tham gia cùng chúng tôi để trải nghiệm những bài học sâu sắc và bổ ích.",
//       benefits:
//         "Các khóa học của chúng tôi không chỉ giúp bạn nâng cao kỹ năng yoga mà còn mang lại nhiều lợi ích cho sức khỏe tinh thần và thể chất. Bạn sẽ được học từ những giảng viên dày dạn kinh nghiệm, những người sẽ hướng dẫn bạn từng bước trong hành trình yoga của mình.",
//       registration:
//         'Để đăng ký, bạn chỉ cần nhấp vào nút "Đăng Ký Ngay" bên dưới mỗi khóa học. Chúng tôi sẽ liên hệ với bạn để xác nhận thông tin và hướng dẫn bạn hoàn tất quy trình đăng ký. Hãy nhanh tay vì số lượng chỗ ngồi có hạn!',
//       price: "Giá",
//       discountPrice: "Giá Ưu Đãi",
//       time: "Thời Gian",
//       location: "Địa Điểm",
//       certification: "Chứng Chỉ",
//       objectives: "Mục Tiêu",
//       schedule: "Lịch Học",
//       instructors: "Giảng Viên",
//       readMore: "Tải Thông Tin Khóa Học",
//       bookNow: "Đăng Ký Ngay",
//       stayingPlace: "Nơi Nghỉ Ngơi Thoải Mái Của Bạn",
//       activitiesHeading: "Các Hoạt Động Diễn Ra Trong Khóa Học và Retreat"
//     },
//   };

//   // Course data with both languages
//   const courses = [
//     {
//       id: 1,
//       image: CourseImage2,
//       syllabus: "/200HOnline.docx",
//       en: {
//         title: "200H TTC Kundalini Yoga & Meditation (Online)",
//         summary:
//           "Become a Kundalini Yoga & Meditation Teacher with International Certification - Online Program",
//         price: "40,000,000 VND",
//         discountPrice: "35,000,000 VND (until 31/12/2024)",
//         time: "6/5 - 5/8",
//         location: "Online",
//         certification: "200H Yoga Alliance Certification",
//         objectives: [
//           "Deepen understanding of Kundalini Yoga and its core principles",
//           "Develop skills to teach Kundalini Yoga Kriyas and meditation",
//           "Learn about Chakra systems, Yoga philosophy, and anatomy",
//           "Practice teaching and guiding students through Kundalini Yoga",
//         ],
//         schedule: {
//           sadhana: "4:30 AM - 6:00 AM (Mon-Fri)",
//           theory: "8:00 PM - 10:00 PM (Mon, Tue, Thu, Fri)",
//           retreat: "15/8 - 18/8 (4D3N at Ba Ho Tourist Area)",
//         },
//         instructors: [
//           {
//             name: "Master Hoanh Nguyen",
//             bio: "E-RYT 500 certified, 9 years of experience, trained in Kundalini Yoga in India",
//           },
//           {
//             name: "Master Yen Nguyen",
//             bio: "E-RYT 500 certified, 10 years of experience, specializes in Mantra music and vegan lifestyle",
//           },
//         ],
//       },
//       vn: {
//         title: "200H TTC Kundalini Yoga & Thiền (Trực tuyến)",
//         summary:
//           "Trở thành giáo viên Kundalini Yoga & Thiền chứng chỉ Quốc Tế - Chương trình Online",
//         price: "40,000,000 VND",
//         discountPrice: "35,000,000 VND (đến 31/12/2024)",
//         time: "6/5 - 5/8",
//         location: "Trực tuyến",
//         certification: "Chứng chỉ Yoga Alliance 200H",
//         objectives: [
//           "Hiểu sâu về Kundalini Yoga và các nguyên tắc cốt lõi",
//           "Phát triển kỹ năng giảng dạy Kundalini Yoga Kriyas và thiền",
//           "Tìm hiểu về hệ thống Chakra, triết lý Yoga và giải phẫu học",
//           "Thực hành giảng dạy và hướng dẫn học viên qua Kundalini Yoga",
//         ],
//         schedule: {
//           sadhana: "4:30 - 6:00 sáng (Thứ 2-6)",
//           theory: "8:00 - 10:00 tối (Thứ 2, 3, 5, 6)",
//           retreat: "15/8 - 18/8 (4N3Đ tại KDL Ba Hồ)",
//         },
//         instructors: [
//           {
//             name: "Thầy Hoành Nguyễn",
//             bio: "Chứng chỉ E-RYT 500, 9 năm kinh nghiệm, đào tạo Kundalini Yoga tại Ấn Độ",
//           },
//           {
//             name: "Cô Yến Nguyễn",
//             bio: "Chứng chỉ E-RYT 500, 10 năm kinh nghiệm, chuyên về âm nhạc Mantra và lối sống thuần chay",
//           },
//         ],
//       },
//     },
//     {
//       id: 2,
//       image: CourseImage2,
//       syllabus: "/200HOffline.docx",
//       en: {
//         title: "200H TTC Kundalini Yoga & Meditation (Offline)",
//         summary:
//           "Become a Kundalini Yoga & Meditation Teacher with International Certification - Immersive Program",
//         price: "55,000,000 VND",
//         discountPrice: "48,000,000 VND (until 31/12/2024)",
//         time: "26/7 - 18/8",
//         location: "Ba Ho Tourist Area, Ninh Hoa",
//         certification: "200H Yoga Alliance Certification",
//         objectives: [
//           "Immersive learning experience in a peaceful natural environment",
//           "Daily practice of Kundalini Yoga and meditation",
//           "In-depth study of Yoga philosophy and teaching methodology",
//           "Direct guidance and interaction with experienced teachers",
//           "Practical teaching experience with fellow students",
//         ],
//         schedule: {
//           daily: "Full-day intensive training",
//           morning:
//             "4:30 AM - 12:00 PM: Morning Sadhana, Yoga practice, and Theory",
//           afternoon: "2:00 PM - 6:00 PM: Teaching methodology and Practice",
//           evening: "7:30 PM - 9:00 PM: Evening meditation and group activities",
//           includes: "Accommodation and vegetarian meals included",
//         },
//         instructors: [
//           {
//             name: "Master Hoanh Nguyen",
//             bio: "E-RYT 500 certified, 9 years of experience, trained in Kundalini Yoga in India",
//           },
//           {
//             name: "Master Yen Nguyen",
//             bio: "E-RYT 500 certified, 10 years of experience, specializes in Mantra music and vegan lifestyle",
//           },
//         ],
//       },
//       vn: {
//         title: "200H TTC Kundalini Yoga & Thiền (Offline)",
//         summary:
//           "Trở thành giáo viên Kundalini Yoga & Thiền chứng chỉ Quốc Tế - Chương trình Tập trung",
//         price: "55,000,000 VND",
//         discountPrice: "48,000,000 VND (đến 31/12/2024)",
//         time: "26/7 - 18/8",
//         location: "KDL Ba Hồ, Ninh Hoà",
//         certification: "Chứng chỉ Yoga Alliance 200H",
//         objectives: [
//           "Trải nghiệm học tập chuyên sâu trong môi trường thiên nhiên yên bình",
//           "Thực hành Kundalini Yoga và thiền định hàng ngày",
//           "Nghiên cứu chuyên sâu về triết lý Yoga và phương pháp giảng dạy",
//           "Được hướng dẫn và tương tác trực tiếp với giáo viên có kinh nghiệm",
//           "Thực hành giảng dạy với các học viên khác",
//         ],
//         schedule: {
//           daily: "Đào tạo chuyên sâu cả ngày",
//           morning:
//             "4:30 - 12:00: Sadhana buổi sáng, thực hành Yoga và Lý thuyết",
//           afternoon: "14:00 - 18:00: Phương pháp giảng dạy và Thực hành",
//           evening: "19:30 - 21:00: Thiền buổi tối và hoạt động nhóm",
//           includes: "Đã bao gồm chỗ ở và các bữa ăn chay",
//         },
//         instructors: [
//           {
//             name: "Thầy Hoành Nguyễn",
//             bio: "Chứng chỉ E-RYT 500, 9 năm kinh nghiệm, đào tạo Kundalini Yoga tại Ấn Độ",
//           },
//           {
//             name: "Cô Yến Nguyễn",
//             bio: "Chứng chỉ E-RYT 500, 10 năm kinh nghiệm, chuyên về âm nhạc Mantra và lối sống thuần chay",
//           },
//         ],
//       },
//     },
//     {
//       id: 3,
//       image: CourseImage1,
//       syllabus: "/100H.docx",
//       en: {
//         title: "Kundalini Yoga & Meditation Mantra - 100h Foundation",
//         summary:
//           "Foundation course to begin the journey of 'Becoming your own master'",
//         price: "12,000,000 VND",
//         discountPrice: "10,000,000 VND (until 31/01/2025)",
//         time: "Batch 8: 3/3 - 2/4 (Evening) | Batch 9: 17/3 - 16/4 (Morning)",
//         location: "Online",
//         certification: "YACEP Yoga Alliance Certification",
//         objectives: [
//           "Understanding Kundalini Yoga and applying Mantra Meditation in life",
//           "Master Chakras and how energy affects health and spirit",
//           "Structure of a Kriya: Prana (breath), Asana (posture), Mudra (hand position), Bandha (energy locks), Mantra",
//           "Practice Kriyas for balancing health and spirit",
//           "Group practice for enhanced practical experience",
//         ],
//         instructors: [
//           {
//             name: "Thầy Hoành Nguyễn",
//             bio: "E-RYT 500 certified, 9 years of experience, trained in Kundalini Yoga in India",
//           },
//           {
//             name: "Cô Yến Nguyễn",
//             bio: "E-RYT 500 certified, 10 years of experience, specializes in Mantra music and vegan lifestyle",
//           },
//         ],
//       },
//       vn: {
//         title: "Kundalini Yoga & Thiền Mantra - 100h Foundation",
//         summary:
//           "Khoá học nền tảng để bắt đầu hành trình 'Trở thành người thầy của chính mình'",
//         price: "12,000,000 VND",
//         discountPrice: "10,000,000 VND (đến 31/01/2025)",
//         time: "Khoá 8: 3/3 - 2/4 (Tối) | Khoá 9: 17/3 - 16/4 (Sáng)",
//         location: "Online",
//         certification: "Chứng chỉ YACEP Yoga Alliance",
//         objectives: [
//           "Hiểu về Kundalini Yoga và ứng dụng Thiền Mantra vào cuộc sống",
//           "Nắm vững Luân Xa và cách năng lượng tác động đến sức khỏe và tinh thần",
//           "Cấu trúc của một Kriya: Prana (hơi thở), Asana (tư thế), Mudra (Thủ ấn), Bandha (khóa năng lượng), Mantra",
//           "Thực hành các Kriya để cân bằng sức khỏe và tinh thần",
//           "Thực hành nhóm luân phiên để nâng cao trải nghiệm thực tế",
//         ],
//         instructors: [
//           {
//             name: "Thầy Hoành Nguyễn",
//             bio: "Chứng chỉ E-RYT 500, 9 năm kinh nghiệm, đào tạo Kundalini Yoga tại Ấn Độ",
//           },
//           {
//             name: "Cô Yến Nguyễn",
//             bio: "Chứng chỉ E-RYT 500, 10 năm kinh nghiệm, chuyên về âm nhạc Mantra và lối sống thuần chay",
//           },
//         ],
//       },
//     },
//     {
//       id: 4,
//       image: CourseImage3,
//       syllabus: "/30H.docx",
//       en: {
//         title: "30hrs Chakra Healing",
//         summary: "Energy and Healing",
//         price: "4,500,000 VND",
//         discountPrice: "3,500,000 VND (5 first slots)",
//         time: "18/4 - 20/4",
//         location: "Kim Yoga Academy Da Nang",
//         certification: "30h Yacep Yoga Alliance Certification",
//         objectives: [
//           "Understand Chakras and their impact on physical and mental health",
//           "Learn about the 8 Chakras in Kundalini Yoga",
//           "Practice Kriyas to balance Chakras",
//           "Meditation techniques for different Chakra regions",
//         ],
//         instructors: [
//           {
//             name: "Thầy Hoành Nguyễn",
//             bio: "Chứng chỉ E-RYT 500, 9 năm kinh nghiệm, đào tạo Kundalini Yoga tại Ấn Độ",
//           },
//           {
//             name: "Cô Yến Nguyễn",
//             bio: "Chứng chỉ E-RYT 500, 10 năm kinh nghiệm, chuyên về âm nhạc Mantra và lối sống thuần chay",
//           },
//         ],
//       },
//       vn: {
//         title: "30hrs Chakra Healing",
//         summary: "Năng lượng và chữa lành",
//         price: "4,500,000 VND",
//         discountPrice: "3,500,000 VND (5 suất đầu tiên)",
//         time: "18/4 - 20/4",
//         location: "Kim Yoga Academy Đà Nẵng",
//         certification: "Chứng chỉ 30h Yacep Yoga Alliance",
//         objectives: [
//           "Hiểu về Chakra và tác động của chúng đến sức khỏe thể chất và tinh thần",
//           "Tìm hiểu về 8 Chakra trong Kundalini Yoga",
//           "Thực hành Kriyas để cân bằng Chakra",
//           "Kỹ thuật thiền định cho các vùng Chakra khác nhau",
//         ],
//         instructors: [
//           {
//             name: "Thầy Hoành Nguyễn",
//             bio: "Chứng chỉ E-RYT 500, 9 năm kinh nghiệm, đào tạo Kundalini Yoga tại Ấn Độ",
//           },
//           {
//             name: "Cô Yến Nguyễn",
//             bio: "Chứng chỉ E-RYT 500, 10 năm kinh nghiệm, chuyên về âm nhạc Mantra và lối sống thuần chay",
//           },
//         ],
//       },
//     },
//   ];

//   // Array of detail images
//   const detailImages = [
//     DetailsImage,
//     DetailsImage1,
//     DetailsImage2,
//     DetailsImage3,
//     DetailsImage4,
//     DetailsImage5,
//     DetailsImage6,
//     DetailsImage7,
//     DetailsImage8,
//     DetailsImage9,
//     DetailsImage10,
//     DetailsImage11,
//     DetailsImage12,
//     DetailsImage13,
//   ];

//   // Slider settings
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     centerMode: true,
//     centerPadding: "60px",
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     focusOnSelect: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           centerPadding: "40px",
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           centerPadding: "20px",
//         },
//       },
//     ],
//   };

//   const openBookingForm = (course) => {
//     setSelectedCourse(course);
//     setIsOpen(true);
//   };

//   const openModal = (image) => {
//     setSelectedImage(image);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedImage(null);
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen mt-12">
//       {/* Hero Section */}
//       <div className="relative">
//         <img
//           src={RetreatImage}
//           alt="Retreat"
//           className="w-full h-[600px] object-cover object-top"
//         />
//       </div>

//       {/* Course Details Section */}
//       <div className="py-16 px-8 max-w-7xl mx-auto text-center">
//         <h2 className="text-5xl font-bold text-gray-800 mb-6">
//           <Typical
//             steps={[texts[language].pageTitle, 2000]}
//             loop={1}
//             wrapper="span"
//           />
//         </h2>

//         <p className="text-gray-700 text-lg leading-relaxed mb-10 font-bold">
//           {texts[language].introduction}
//         </p>

//         <p className="text-gray-700 text-lg leading-relaxed mb-10 font-bold">
//           {texts[language].priceHeader}
//         </p>

//         <p className="text-gray-700 text-lg leading-relaxed mb-10 font-bold">
//           {texts[language].timeInfo}
//         </p>

//         <p className="text-gray-700 text-lg leading-relaxed mb-10 font-bold">
//           {texts[language].benefits}
//         </p>

//         <p className="text-gray-700 text-lg leading-relaxed mb-10 font-bold">
//           {texts[language].registration}
//         </p>

//         {/* Animated Heading before the slider */}
//         <h3 className="text-3xl font-bold text-gray-800 mb-4">
//           <Typical
//             steps={[texts[language].stayingPlace, 2000]}
//             loop={1}
//             wrapper="span"
//           />
//         </h3>

//         {/* Image Slider Section */}
//         <div className="py-8">
//           <Slider {...sliderSettings} className="w-full max-w-4xl mx-auto">
//             {detailImages.map((image, index) => (
//               <div key={index} className="px-2">
//                 <img
//                   src={image}
//                   alt={`Detail ${index + 1}`}
//                   className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
//                 />
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>

//       {/* Courses Section */}
//       <div className="py-16 px-8 max-w-7xl mx-auto">
//         {courses.map((course) => (
//           <div
//             key={course.id}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 bg-white shadow-lg rounded-lg overflow-hidden text-center"
//           >
//             <div className="relative w-full h-48 md:h-80 lg:h-96">
//               <img
//                 src={course.image}
//                 alt={course[language].title}
//                 className="w-full h-48 md:h-80 object-cover object-center"
//               />
//             </div>
//             <div className="p-8 flex flex-col justify-between items-center">
//               <div>
//                 <h2 className="text-3xl font-bold text-gray-800 mb-4">
//                   {course[language].title}
//                 </h2>
//                 <p className="text-gray-600 mb-4 font-bold">
//                   {course[language].summary}
//                 </p>
//                 <p className="text-gray-800 mb-2 font-bold">
//                   <span className="font-semibold">
//                     {texts[language].price}:
//                   </span>{" "}
//                   {course[language].price}
//                 </p>
//                 <p className="text-gray-800 mb-2 font-bold">
//                   <span className="font-semibold">
//                     {texts[language].discountPrice}:
//                   </span>{" "}
//                   {course[language].discountPrice}
//                 </p>
//                 <p className="text-gray-800 mb-2 font-bold">
//                   <span className="font-semibold">{texts[language].time}:</span>{" "}
//                   {course[language].time}
//                 </p>
//                 <p className="text-gray-800 mb-2 font-bold">
//                   <span className="font-semibold">
//                     {texts[language].location}:
//                   </span>{" "}
//                   {course[language].location}
//                 </p>

//                 {course[language].certification && (
//                   <p className="text-gray-800 mb-4 font-bold">
//                     <span className="font-semibold">
//                       {texts[language].certification}:
//                     </span>{" "}
//                     {course[language].certification}
//                   </p>
//                 )}

//                 {course[language].objectives && (
//                   <div className="text-gray-800 mb-4 text-left">
//                     <h3 className="text-xl font-semibold mb-2 border-b-2 border-gray-300 pb-1">
//                       {texts[language].objectives}
//                     </h3>
//                     <ul className="list-disc pl-6 space-y-1">
//                       {course[language].objectives.map((obj, index) => (
//                         <li key={index} className="text-gray-700">
//                           {obj}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}

//                 {course[language].instructors && (
//                   <div className="text-gray-800 mb-4 text-left">
//                     <h3 className="text-xl font-semibold mb-2 border-b-2 border-gray-300 pb-1">
//                       <Link to="/trainers" className="hover:text-orange-500">
//                         {texts[language].instructors}
//                       </Link>
//                     </h3>
//                     <ul className="space-y-2">
//                       {course[language].instructors.map((instructor, index) => (
//                         <li key={index}>
//                           <p className="font-bold text-gray-900">
//                             {instructor.name}
//                           </p>
//                           <p className="text-gray-700 text-sm">
//                             {instructor.bio}
//                           </p>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//               {/* Added images centered above the Book Now button for 200H Online course */}
//               {course.id === 1 && ( // Check if the course is the 200H Online course
//                 <div className="flex justify-center mt-8 mb-4"> {/* Centered above the button */}
//                   <div className="flex justify-center space-x-4"> {/* Container for images */}
//                     <img
//                       src={courses5} // First image from detailImages
//                       alt="Detail 1"
//                       className="w-1/3 h-32 object-cover rounded-lg shadow-md"
//                     />
//                     <img
//                       src={detailImages[1]} // Second image from detailImages
//                       alt="Detail 2"
//                       className="w-1/3 h-32 object-cover rounded-lg shadow-md"
//                     />
//                     <img
//                       src={courses6} // Third image from detailImages
//                       alt="Detail 3"
//                       className="w-1/3 h-32 object-cover rounded-lg shadow-md"
//                     />
//                   </div>
//                 </div>
//               )}
              
//               {/* Added images centered above the Book Now button for 200H Offline course */}
//               {course.id === 2 && ( // Check if the course is the 200H Offline course
//                 <div className="flex justify-center mt-8 mb-4"> {/* Centered above the button */}
//                   <div className="flex justify-center space-x-4"> {/* Container for images */}
//                     <img
//                       src={courses1} // First image from detailImages
//                       alt="Detail 1"
//                       className="w-1/3 h-32 object-cover rounded-lg shadow-md"
//                     />
//                     <img
//                       src={courses2} // Second image from detailImages
//                       alt="Detail 2"
//                       className="w-1/3 h-32 object-cover rounded-lg shadow-md"
//                     />
//                     <img
//                       src={detailImages[2]} // Third image from detailImages
//                       alt="Detail 3"
//                       className="w-1/3 h-32 object-cover rounded-lg shadow-md"
//                     />
//                   </div>
//                 </div>
//               )}

//               {/* Added images centered above the Book Now button for 30hrs Chakra Healing course */}
//               {course.id === 4 && ( // Check if the course is the 30hrs Chakra Healing course
//                 <div className="flex justify-center mt-8 mb-4"> {/* Centered above the button */}
//                   <div className="flex justify-center space-x-4"> {/* Container for images */}
//                     <img
//                       src={courses9} // First image from detailImages
//                       alt="Detail 1"
//                       className="w-1/3 h-32 object-cover rounded-lg shadow-md"
//                     />
//                     <img
//                       src={courses10} // Second image from detailImages
//                       alt="Detail 2"
//                       className="w-1/3 h-32 object-cover rounded-lg shadow-md"
//                     />
//                     <img
//                       src={courses4} // Third image from detailImages
//                       alt="Detail 3"
//                       className="w-1/3 h-32 object-cover rounded-lg shadow-md"
//                     />
//                   </div>
//                 </div>
//               )}
              
//               {/* Added images centered above the Book Now button for Kundalini Yoga & Meditation Mantra - 100h Foundation course */}
//               {course.id === 3 && ( // Check if the course is the 100h Foundation course
//                 <div className="flex justify-center mt-8 mb-4"> {/* Centered above the button */}
//                   <div className="flex justify-center space-x-4"> {/* Container for images */}
//                     <img
//                       src={courses3} // First image from detailImages
//                       alt="Detail 1"
//                       className="w-1/3 h-32 object-cover rounded-lg shadow-md"
//                     />
//                     <img
//                       src={courses7} // Second image from detailImages
//                       alt="Detail 2"
//                       className="w-1/3 h-32 object-cover rounded-lg shadow-md"
//                     />
//                     <img
//                       src={courses11} // Third image from detailImages
//                       alt="Detail 3"
//                       className="w-1/3 h-32 object-cover rounded-lg shadow-md"
//                     />
//                   </div>
//                 </div>
//               )}
              
//               <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
//                 <button
//                   className="bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors"
//                   onClick={() => openBookingForm(course)}
//                 >
//                   {texts[language].bookNow}
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="py-16 px-8 max-w-7xl mx-auto text-center">
//         <h3 className="text-3xl font-bold text-gray-800 mb-4">
//           <Typical
//             steps={[texts[language].activitiesHeading, 2000]}
//             loop={1}
//             wrapper="span"
//           />
//         </h3>
//         <div className="py-8">
//           <Slider {...sliderSettings} className="w-full max-w-4xl mx-auto">
//             <div className="px-2">
//               <img
//                 src={ActivityImage1}
//                 alt="Activity 1"
//                 className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
//               />
//             </div>
//             <div className="px-2">
//               <img
//                 src={ActivityImage2}
//                 alt="Activity 2"
//                 className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
//               />
//             </div>
//             <div className="px-2">
//               <img
//                 src={ActivityImage3}
//                 alt="Activity 3"
//                 className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
//               />
//             </div>
//             <div className="px-2">
//               <img
//                 src={ActivityImage4}
//                 alt="Activity 4"
//                 className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
//               />
//             </div>
//             <div className="px-2">
//               <img
//                 src={ActivityImage5}
//                 alt="Activity 5"
//                 className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
//               />
//             </div>
//             <div className="px-2">
//               <img
//                 src={ActivityImage6}
//                 alt="Activity 6"
//                 className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
//               />
//             </div>
//             <div className="px-2">
//               <img
//                 src={ActivityImage7}
//                 alt="Activity 7"
//                 className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
//               />
//             </div>
//             <div className="px-2">
//               <img
//                 src={ActivityImage8}
//                 alt="Activity 8"
//                 className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
//               />
//             </div>
//             <div className="px-2">
//               <img
//                 src={ActivityImage9}
//                 alt="Activity 9"
//                 className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
//               />
//             </div>
//             <div className="px-2">
//               <img
//                 src={ActivityImage10}
//                 alt="Activity 10"
//                 className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
//               />
//             </div>
//             {/* Added course images to the activity slider */}
//             <div className="px-2">
//               <img
//                 src={courses1}
//                 alt="Course 1"
//                 className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
//               />
//             </div>
//             <div className="px-2">
//               <img
//                 src={courses2}
//                 alt="Course 2"
//                 className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
//               />
//             </div>
//             <div className="px-2">
//               <img
//                 src={courses3}
//                 alt="Course 3"
//                 className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
//               />
//             </div>
//             <div className="px-2">
//               <img
//                 src={courses4}
//                 alt="Course 4"
//                 className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
//               />
//             </div>
//             <div className="px-2">
//               <img
//                 src={courses7}
//                 alt="Course 7"
//                 className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
//               />
//             </div>
//             <div className="px-2">
//               <img
//                 src={courses8}
//                 alt="Course 8"
//                 className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
//               />
//             </div>
//             <div className="px-2">
//               <img
//                 src={courses9}
//                 alt="Course 9"
//                 className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
//               />
//             </div>
//             <div className="px-2">
//               <img
//                 src={courses10}
//                 alt="Course 10"
//                 className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
//               />
//             </div>
//             <div className="px-2">
//               <img
//                 src={courses11}
//                 alt="Course 11"
//                 className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
//               />
//             </div>
//             <div className="px-2">
//               <img
//                 src={courses12}
//                 alt="Course 12"
//                 className="rounded-lg shadow-md w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
//               />
//             </div>
//           </Slider>
//         </div>
//       </div>

//       {/* Booking Form */}
//       <CourseSelection
//         course={selectedCourse}
//         isOpen={isOpen}
//         onClose={() => {
//           setIsOpen(false);
//           setSelectedCourse(null);
//         }}
//       />
//     </div>
//   );
// };

// export default CourseDetails;
