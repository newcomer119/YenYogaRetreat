// import icons
import { BsCheck, BsChevronRight } from "react-icons/bs";

import Logo from "../src/assets/img/logos/logo-og.png";
import HeroImage from "../src/assets/img/courses/course-8-removebg.png";
import aboutImage from "../src/assets/img/retreat/about.jpg";

// import images
import CourseImage1 from "../src/assets/img/courses/course-1.jpg";
import CourseImage2 from "../src/assets/img/courses/course-2.jpg";
import CourseImage3 from "../src/assets/img/courses/course-3.jpg";
import CourseImage4 from "../src/assets/img/courses/course-4.jpg";
import CourseImage5 from "../src/assets/img/courses/course-5.jpg";
import CourseImage6 from "../src/assets/img/courses/course-6.jpg";
import CourseImage7 from "../src/assets/img/courses/course-7.jpg";

import GalleryImg from "../src/galleryimg/galleryimg.png";
import GalleryImg1 from "../src/galleryimg/galleryimg1.png";
import GalleryImg2 from "../src/galleryimg/galleryimg2.png";
import GalleryImg3 from "../src/galleryimg/galleryimg3.png";
import GalleryImg4 from "../src/galleryimg/galleryimg4.png";
import GalleryImg5 from "../src/galleryimg/galleryimg5.png";
import GalleryImg6 from "../src/galleryimg/galleryimg6.png";
import GalleryImg7 from "../src/galleryimg/galleryimg7.png";
import GalleryImg8 from "../src/galleryimg/galleryimg8.png";

import Instructor1 from "../src/assets/img/instructors/hoan.jpg";
import Instructor2 from "../src/assets/img/instructors/yen.jpg";
import Instructor1s from "../src/assets/img/instructors/ins1.jpg";
import Instructor2s from "../src/assets/img/instructors/ins2.jpg";

const date = new Date();
const discount = (first, second, price1, price2) => {
  let discount = null;
  if (date <= new Date(first)) {
    discount = price1;
  } else if (date <= new Date(second)) {
    discount = price2;
  }
  return discount;
};
const valid = (first, second) => {
  if (date <= new Date(first)) {
    return first;
  } else if (date <= new Date(second)) {
    return second;
  }
};

export const nav = [
  {
    en: {
      name: "Home",
      href: "/",
    },
    vn: {
      name: "Trang Chủ",
      href: "/",
    },
  },
  {
    en: {
      name: "Courses & Training",
      href: "/courses",
    },
    vn: {
      name: "Khoá học",
      href: "/courses",
    },
  },
  {
    en: {
      name: "Event & Retreat",
      href: "/trainers",
    },
    vn: {
      name: "Sự kiện & Retreat",
      href: "/trainers",
    },
  },
  {
    en: {
      name: "Blog",
      href: "/blog",
    },
    vn: {
      name: "Bài Viết",
      href: "/blog",
    },
  },
  {
    en: {
      name: "Shop",
      href: "/shop",
    },
    vn: {
      name: "Shop",
      href: "/shop",
    },
  },
  {
    en: {
      name: "About",
      href: "/about",
    },
    vn: {
      name: "Giới Thiệu",
      href: "/about",
    },
  },
  {
    en: {
      name: "Contact",
      href: "#contact",
    },
    vn: {
      name: "Liên Hệ",
      href: "#contact",
    },
  },
];

export const courses = [
  {
    id: 1,
    image: CourseImage1,
    en: {
      title: "200H TTC Kundalini Yoga & Meditation",
      summary:
        "Become a Kundalini Yoga & Meditation Instructor with an International Certificate",
      text: "The Kundalini Yoga Teacher Training is a Yoga Alliance certification program. At level one, you will gain a deep understanding and experience of the core science of Kundalini Yoga. You will develop the skills to guide students through kriyas and meditations, engage in early morning Sadhana, and experience transformation of your energy, body, mind, and spirit.",
      targetAudience: [
        "Students practicing Kundalini Yoga",
        "Students of other yoga schools",
        "Yoga Teachers",
        "Individuals on a journey of intensive practice of yoga and meditation",
      ],
      courseContent: [
        "Alignment of postures (asanas) and asanas that activate the chakras",
        "Chakra System",
        "Yoga Philosophy and Origin of Kundalini Yoga",
        "Yoga Anatomy and its Application to Kundalini Yoga Practice",
        "Complete lesson content",
        "Mantra & Mudra Meditation",
        "Purpose and results of Kriyas",
        "Elements/Tattvas that make up the body",
        "Yogic Diet, Yoga & Meditation Lifestyle",
        "Music applied to Kundalini Yoga class",
        "Teaching methods: Appropriate appearance and dress, teaching style, student-teacher relationship",
      ],
      type: {
        online: {
          startDate: "May 6, 2025",
          endDate: "August 5, 2025",
          totalHours: 185,
          schedule: {
            sadhana: {
              days: "Monday to Friday",
              time: "4:30 - 6:00 am",
              hours: 97,
            },
            theory: {
              days: "Monday, Tuesday, Thursday & Friday",
              time: "8:00 - 10:00 pm",
              hours: 64,
            },
            retreat: {
              duration: "4N3D",
              dates: "July 15 - July 18, 2025",
              hours: 24,
            },
          },
          homework: {
            duration: "August 6 - October 5, 2025",
            hours: 37,
            selfStudy: 20,
            karmaTeaching: 10,
            meditationPractice: 40,
          },
        },
        offline: {
          startDate: "July 26, 2025",
          endDate: "August 18, 2025",
          totalHours: 184,
          days: 24,
          homework: {
            hours: 37,
            duration: "August 18 - October 18, 2025",
            selfStudy: 20,
            karmaTeaching: 10,
            meditationPractice: 40,
          },
        },
      },
      conditions: [
        "Complete 100% of online/offline live learning hours",
        "Complete all homework assignments",
        "An Oral Test with the Teacher",
        "A Theory Test",
        "20 hours of self-study (not included in course fee)",
        "10 hours of Karma Teaching",
        "Practice 1 Meditation lesson for 40 days, 11 minutes each time",
      ],
    },
    vn: {
      title: "Khoá Đào Tạo Giáo Viên 200H Yoga Kundalini & Thiền",
      summary:
        "Trở thành Giáo Viên Yoga Kundalini & Thiền với Chứng Chỉ Quốc Tế",
      text: "Khóa đào tạo giáo viên Yoga Kundalini là chương trình cấp chứng chỉ của Yoga Alliance. Ở cấp độ một, bạn sẽ có được sự hiểu biết sâu sắc và trải nghiệm về khoa học cốt lõi của Yoga Kundalini. Bạn sẽ phát triển kỹ năng để hướng dẫn học viên qua các kriya và thiền định, tham gia vào Sadhana buổi sáng sớm và trải nghiệm sự chuyển hóa năng lượng, cơ thể, tâm trí và tinh thần.",
      targetAudience: [
        "Học viên đang thực hành Yoga Kundalini",
        "Học viên của các trường phái yoga khác",
        "Giáo viên Yoga",
        "Những người trên hành trình thực hành chuyên sâu về yoga và thiền định",
      ],
      courseContent: [
        "Định tuyến các tư thế (asana) và các asana kích hoạt luân xa",
        "Hệ thống Luân xa",
        "Triết lý Yoga và nguồn gốc của Yoga Kundalini",
        "Giải phẫu học Yoga và ứng dụng vào luyện tập Yoga Kundalini",
        "Nội dung bài học hoàn chỉnh",
        "Thiền Mantra & Mudra",
        "Mục đích và kết quả của các Kriya",
        "Các yếu tố/Tattva cấu thành cơ thể",
        "Chế độ ăn Yogic, lối sống Yoga & Thiền",
        "Âm nhạc ứng dụng vào lớp Yoga Kundalini",
        "Phương pháp giảng dạy: Ngoại hình và cách ăn mặc phù hợp, phong cách giảng dạy, mối quan hệ giữa học viên và giáo viên",
      ],
      type: {
        online: {
          startDate: "Ngày 6 tháng 5, 2025",
          endDate: "Ngày 5 tháng 8, 2025",
          totalHours: 185,
          schedule: {
            sadhana: {
              days: "Thứ Hai đến Thứ Sáu",
              time: "4:30 - 6:00 sáng",
              hours: 97,
            },
            theory: {
              days: "Thứ Hai, Thứ Ba, Thứ Năm & Thứ Sáu",
              time: "8:00 - 10:00 tối",
              hours: 64,
            },
            retreat: {
              duration: "4N3Đ",
              dates: "Ngày 15 tháng 7 - Ngày 18 tháng 7, 2025",
              hours: 24,
            },
          },
          homework: {
            duration: "Ngày 6 tháng 8 - Ngày 5 tháng 10, 2025",
            hours: 37,
            selfStudy: 20,
            karmaTeaching: 10,
            meditationPractice: 40,
          },
        },
        offline: {
          startDate: "Ngày 26 tháng 7, 2025",
          endDate: "Ngày 18 tháng 8, 2025",
          totalHours: 184,
          days: 24,
          homework: {
            hours: 37,
            duration: "Ngày 18 tháng 8 - Ngày 18 tháng 10, 2025",
            selfStudy: 20,
            karmaTeaching: 10,
            meditationPractice: 40,
          },
        },
      },
      conditions: [
        "Hoàn thành 100% giờ học trực tiếp online/offline",
        "Hoàn thành tất cả các bài tập về nhà",
        "Bài kiểm tra vấn đáp với giáo viên",
        "Bài kiểm tra lý thuyết",
        "20 giờ tự học (không bao gồm trong học phí khóa học)",
        "10 giờ dạy Karma",
        "Thực hành 1 bài thiền trong 40 ngày, mỗi lần 11 phút",
      ],
    },
  },
  {
    id: 2,
    image: CourseImage2,
    en: {
      title: "Kundalini Yoga & Mantra Meditation Foundation Course",
      summary:
        "Become a Certified Kundalini Yoga & Meditation Teacher with International Certification",
      text: "A foundational course to embark on the journey of 'Becoming your own teacher'.",
      targetAudience: [
        "For those who wish to become Yoga and Meditation teachers",
        "Individuals seeking personal development and mental well-being",
      ],
      courseContent: [
        "Applying Mantra Meditation in daily life",
        "Chakras and how energy affects physical, emotional, and mental health.",
        "The structure of a Kriya: Prana (breath), Asana (posture), Mudra (hand gesture), Bandha (energy lock), Mantra (chant).",
        "Important notes for safe and effective practice",
        "Practicing Kriyas to balance physical and mental health",
        "The course will commence with a minimum of 6 registered participants",
      ],
      type: {
        online: {
          startDate: "March 3, 2025",
          endDate: "April 2, 2025",
          schedule: {
            sadhana: {
              days: "Monday, Wednesday, Friday",
              time: "4:30 - 6:00 PM",
              hours: "",
            },
            theory: {
              days: "Monday, Wednesday, Friday",
              time: "8:00 - 10:00 PM",
              hours: "",
            },
          },
        },
      },
      conditions: [
        "Complete 100% of the live online classes",
        "Finish all homework assignments",
        "Pass an oral exam with the instructor",
        "Pass a theoretical exam",
        "20 hours of self-study (not included in the course fee)",
        "10 hours of Karma teaching",
        "Practice one meditation for 40 days, 11 minutes each session",
      ],
    },
    vn: {
      title: "Kundalini Yoga & Thiền Mantra Khoá Foundation ",
      summary:
        "Trở thành Giáo Viên Yoga Kundalini & Thiền với Chứng Chỉ Quốc Tế",
      text: "Khóa học nền tảng để bắt đầu hành trình 'Trở thành người thầy của chính mình'.",
      targetAudience: [
        "Dành cho những ai muốn trở thành giáo viên Yoga và Thiền",
        "Người tìm kiếm sự phát triển bản thân và sức khỏe tinh thần",
      ],
      courseContent: [
        "Ứng dụng Thiền Mantra vào cuộc sống hàng ngày",
        "Luân Xa và tác động của năng lượng lên sức khỏe thể chất, cảm xúc và tinh thần.",
        "Cấu trúc của một Kriya: Prana (hơi thở), Asana (tư thế), Mudra (Thủ ấn), Bandha (khóa năng lượng), Mantra (câu chú).",
        "Những lưu ý để luyện tập đúng cách và an toàn",
        "Thực hành các Kriya để cân bằng sức khỏe thể chất và tinh thần",
        "Khóa học sẽ bắt đầu khi có từ 6 học viên đăng ký",
      ],
      type: {
        online: {
          startDate: "3/3/2025",
          endDate: "2/4/2025",
          schedule: {
            sadhana: {
              days: "Thứ hai, thứ tư, thứ sáu",
              time: "4:30 - 6:00",
              hours: "", // Hours not specified
            },
            theory: {
              days: "Thứ hai, thứ tư, thứ sáu",
              time: "20:00 - 22:00",
              hours: "", // Hours not specified
            },
          },
        },
      },
      conditions: [
        "Hoàn thành 100% giờ học trực tiếp online",
        "Hoàn thành tất cả các bài tập về nhà",
        "Bài kiểm tra vấn đáp với giáo viên",
        "Bài kiểm tra lý thuyết",
        "20 giờ tự học (không bao gồm trong học phí khóa học)",
        "10 giờ dạy Karma",
        "Thực hành 1 bài thiền trong 40 ngày, mỗi lần 11 phút",
      ],
    },
  },
  {
    id: 3,
    image: CourseImage3,
    en: {
      title: "Chakra Healing 30h",
      summary:
        "Understand the Chakras and their impact on physical and mental health",
      type: {
        offline: {
          startDate: "April 18–20, 2025",
          endDate: "Kim Yoga Academy Đà nẵng",
        },
      },
    },
    vn: {
      title: "Khóa học Chakra Healing 30h",
      summary:
        "Hiểu về các Chakra và ảnh hưởng của chúng đối với sức khỏe thể chất và tinh thần",
      type: {
        offline: {
          startDate: "Ngày 18–20 tháng 4 năm 2025",
          endDate: "Kim Yoga Academy Đà nẵng",
        },
      },
    },
  },
];

export const prices = [
  {
    en: {
      symbol: "$",
      online: {
        price: 1575,
        discount: discount("12/31/2024", "2/28/2025", 195, 80),
        valid: valid("12/31/2024", "2/28/2025"),
        includes: [
          "Tuition Fees",
          "Retreat Cost (4N3D)",
          "Certificate from Yoga Alliance USA (meets graduation requirements)",
        ],
      },
      offline: {
        two: {
          price: 2360,
          discount: discount("12/31/2024", "4/30/2025", 275, 120),
          valid: valid("12/31/2024", "4/30/2025"),
        },
        four: {
          price: 2165,
          discount: discount("12/31/2024", "4/30/2025", 275, 118),
          valid: valid("12/31/2024", "4/30/2025"),
        },
        includes: [
          "Accommodation and study expenses during official study period.",
          "Certificate from Yoga Alliance USA (meets graduation requirements)",
        ],
      },
      note: "Please consider carefully before registering for the course. Tuition fees paid will not be refunded for any reason. You can transfer the course to someone else before the course starts.",
    },
    vn: {
      symbol: "₫.",
      online: {
        price: 1575,
        discount: discount("12/31/2024", "2/28/2025", 195, 80),
        valid: valid("12/31/2024", "2/28/2025"),
        includes: [
          "Học phí",
          "Chi phí nghỉ dưỡng (4N3D)",
          "Chứng chỉ từ Yoga Alliance USA (đáp ứng yêu cầu tốt nghiệp)",
        ],
      },
      offline: {
        two: {
          price: 2360,
          discount: discount("12/31/2024", "4/30/2025", 275, 120),
          valid: valid("12/31/2024", "4/30/2025"),
        },
        four: {
          price: 2165,
          discount: discount("12/31/2024", "4/30/2025", 275, 118),
          valid: valid("12/31/2024", "4/30/2025"),
        },
        includes: [
          "Chi phí ăn ở và học tập trong thời gian học chính thức.",
          "Chứng chỉ từ Yoga Alliance USA (đáp ứng yêu cầu tốt nghiệp)",
        ],
      },
      note: "Xin hãy cân nhắc kỹ trước khi đăng ký khóa học. Học phí đã thanh toán sẽ không được hoàn lại vì bất kỳ lý do gì. Bạn có thể chuyển khóa học cho người khác trước khi khóa học bắt đầu.",
    },
  },
  {
    en: {
      symbol: "$",
      online: {
        price: 395, // Price in VND
        includes: [
          "Tuition Fee",
          "Certificate from Yoga Alliance USA (upon meeting graduation requirements)",
        ],
      },
      note: `Accomadation is self Funded. Please carefully consider before registering for the course. Tuition fees paid are non-refundable for any reason. You may transfer the course to another person before the course starts.`,
    },
    vn: {
      symbol: "₫",
      online: {
        price: 395, // Price in VND
        includes: [
          "Học phí",
          "Chứng chỉ từ Yoga Alliance USA (đáp ứng yêu cầu tốt nghiệp)",
        ],
      },
      note: "Xin hãy cân nhắc kỹ trước khi đăng ký khóa học. Học phí đã thanh toán sẽ không được hoàn lại vì bất kỳ lý do gì. Bạn có thể chuyển khóa học cho người khác trước khi khóa học bắt đầu.",
    },
  },
];

export const Galleryimgs = [
  {
    image: GalleryImg,
    title: "Gallery Image 1",
  },
  {
    image: GalleryImg1,
    title: "Gallery Image 1",
  },
  {
    image: GalleryImg2,
    title: "Gallery Image 1",
  },
  {
    image: GalleryImg3,
    title: "Gallery Image 1",
  },
  {
    image: GalleryImg4,
    title: "Gallery Image 1",
  },
  {
    image: GalleryImg5,
    title: "Gallery Image 1",
  },
  {
    image: GalleryImg6,
    title: "Gallery Image 1",
  },
  {
    image: GalleryImg7,
    title: "Gallery Image 1",
  },
  {
    image: GalleryImg8,
    title: "Gallery Image 1",
  },
];

export const inst = [
  {
    id: "hoanh",
    en: {
      name: "Hoành Nguyễn",
      title: "Founder & Trainer",
      imageL: Instructor1s,
      imageS: Instructor1s,
      bio: "Yoga and Meditation are paths of practice and application in life. My goal is to spread the spirit of Mantra meditation to help others practice and transform their lives positively.",
      qualifications: [
        "RYT 500hrs Certified Teacher",
        "Nine years of experience in practicing and teaching Yoga & Meditation",
        "Views Yoga & Meditation as a lifestyle and a path for self-cultivation",
        "Has attended various Yoga training programs worldwide, including in Bali, Thailand, and India",
        "Among the first Vietnamese participants in the Kundalini Yoga Teacher Training in India, trained by Gurmukh and Gurushabd, early Kundalini Yoga teachers under Yogi Bhajan",
        "Innovatively applied Mantra Meditation in creating Kombucha by Mr. Ủ, a market product with over 2,000 bottles sold",
      ],
      social: {
        facebook: "https://www.facebook.com/hoanh.nguyen.90",
        instagram: "https://www.instagram.com/hoanh0505/",
      },
    },
    vn: {
      name: "Hoành Nguyễn",
      title: "Người Sáng Lập & Huấn Luyện Viên",
      imageL: Instructor1s,
      imageS: Instructor1s,
      bio: "Yoga và Thiền là con đường thực hành và áp dụng vào cuộc sống. Mục tiêu của tôi là lan tỏa tinh thần thiền Mantra để giúp mọi người thực hành và chuyển hóa cuộc sống tích cực.",
      qualifications: [
        "Giáo viên Yoga được chứng nhận RYT 500 giờ",
        "Chín năm kinh nghiệm thực hành và giảng dạy Yoga & Thiền",
        "Xem Yoga & Thiền là lối sống và con đường tự tu dưỡng",
        "Đã tham gia nhiều chương trình đào tạo Yoga trên khắp thế giới, bao gồm Bali, Thái Lan, và Ấn Độ",
        "Là một trong những người Việt Nam đầu tiên tham gia Khóa Đào Tạo Giáo Viên Kundalini Yoga ở Ấn Độ, được đào tạo bởi Gurmukh và Gurushabd, những giáo viên Kundalini Yoga đầu tiên dưới thời Yogi Bhajan",
        "Áp dụng sáng tạo thiền Mantra trong việc tạo ra Kombucha bởi Mr. Ủ, một sản phẩm thị trường với hơn 2.000 chai đã được bán",
      ],
      social: {
        facebook: "https://www.facebook.com/hoanh.nguyen.90",
        instagram: "https://www.instagram.com/hoanh0505/",
      },
    },
  },
  {
    id: "yen",
    en: {
      name: "Yến Nguyễn",
      title: "Founder & Trainer",
      imageL: Instructor2s,
      imageS: Instructor2s,
      bio: "I aim to share the positive lifestyle of Yoga and Meditation with the community. My passion is to guide others toward natural healing and inner peace through yoga and mantra music.",
      qualifications: [
        "10 years of experience in practicing and teaching Yoga & Meditation",
        "Has participated in Yoga training courses in Thailand, Bali, and Vietnam",
        "Passionate about Mantra music, viewing it as a healing tool incorporated into her teaching",
        "Organizer of 'Kirtan Mantra – Healing Music' events across various provinces in Vietnam",
        "Yoga & Meditation instructor trainer since 2017",
        "Dedicated to promoting a vegan lifestyle, environmental protection, and sharing Yoga & Meditation practices with a wider audience, particularly the younger generation",
      ],
      social: {
        facebook: "https://www.facebook.com/profile.php?id=100003545174622",
        instagram: "https://www.instagram.com/yogivevuon/",
      },
    },
    vn: {
      name: "Yến Nguyễn",
      title: "Người Sáng Lập & Huấn Luyện Viên",
      imageL: Instructor2s,
      imageS: Instructor2s,
      bio: "Tôi mong muốn chia sẻ lối sống tích cực của Yoga và Thiền với cộng đồng. Niềm đam mê của tôi là hướng dẫn người khác hướng tới sự chữa lành tự nhiên và sự bình yên nội tâm thông qua yoga và âm nhạc mantra.",
      qualifications: [
        "10 năm kinh nghiệm thực hành và giảng dạy Yoga & Thiền",
        "Đã tham gia các khóa đào tạo Yoga ở Thái Lan, Bali và Việt Nam",
        "Đam mê âm nhạc Mantra, xem nó như một công cụ chữa lành được tích hợp vào việc giảng dạy",
        "Tổ chức các sự kiện 'Kirtan Mantra – Healing Music' tại nhiều tỉnh thành ở Việt Nam",
        "Huấn luyện viên Yoga & Thiền từ năm 2017",
        "Tận tâm thúc đẩy lối sống thuần chay, bảo vệ môi trường, và chia sẻ thực hành Yoga & Thiền với một cộng đồng rộng lớn hơn, đặc biệt là thế hệ trẻ",
      ],
      social: {
        facebook: "https://www.facebook.com/profile.php?id=100003545174622",
        instagram: "https://www.instagram.com/yogivevuon/",
      },
    },
  },
];

export const buttons = {
  en: {
    accommodation: "Accommodation",
    bookNow: "Book Now",
    callUs: "Call Us",
    conditions: "Conditions",
    courseTimings: "Timings", // Renamed from Learning
    learnMore: "Learn More",
    logout: "Logout",
    meetOurTrainers: "Meet Our Trainers",
    moreInfo: "More Info",
    online: "Online", // Renamed for clarity
    offline: "Offline", // Renamed for clarity
    overview: "Overview",
    profile: "Profile",
    sendMessage: "Send Message",
    signIn: "Sign In",
    signUp: "Sign Up",
    submit: "Submit",
    viewAll: "View All",
    viewCourses: "View Courses",
    viewTrainers: "View Trainers",
  },
  vn: {
    accommodation: "Chỗ Ở",
    bookNow: "Đặt Chỗ Ngay",
    callUs: "Gọi Cho Chúng Tôi",
    conditions: "Điều kiện", // Renamed for clarity
    courseTimings: "Thời gian", // Renamed from Learning
    learnMore: "Tìm Hiểu Thêm",
    logout: "Đăng Xuất",
    meetOurTrainers: "Gặp Gỡ Giảng Viên",
    moreInfo: "Xem Thông Tin",
    online: "Lớp Học Trực Tuyến", // Renamed for clarity
    offline: "Lớp Học Trực Tiếp", // Renamed for clarity
    overview: "Tổng Quan",
    profile: "Hồ sơ",
    sendMessage: "Gửi Tin Nhắn",
    signIn: "Đăng Nhập",
    signUp: "Đăng Ký",
    submit: "Gửi",
    viewAll: "Xem Tất Cả",
    viewCourses: "Xem Khóa Học",
    viewTrainers: "Xem Huấn Luyện Viên",
  },
};

export const sectionHeaders = {
  en: {
    about: "Discover Yen Yoga & Retreat",
    call: "Yoga Curious? Unsure Where to Start? Let Us Help You Choose.",
    contact: "Contact Us",
    courseDetails: "Course Details",
    courseNotFound: "Course Not Found. Please check back later.",
    courses: "Upcoming Courses & Events",
    facts: "Our Founders",
    footer: "© 2024 Yen Yoga & Retreat. All Rights Reserved",
    gallery: "Shine & Share ",
    aboutTrainer: "About",
    trainers: "Our Yoga Teachers",
    trainerNotFound: "Trainer Not Found. Please check back later.",
  },
  vn: {
    about: "Khám Phá Yen Yoga & Retreat",
    call: "Đam Mê Yoga Nhưng Chưa Biết Bắt Đầu Từ Đâu? Hãy Để Chúng Tôi Tư Vấn.",
    contact: "Liên Hệ Với Chúng Tôi",
    courseDetails: "Course Details",
    courseNotFound: "Không Tìm Thấy Khóa Học. Vui lòng kiểm tra lại sau.",
    courses: "Khóa Học & Sự Kiện Sắp Tới",
    facts: "Những Người Sáng Lập Của Chúng Tôi",
    footer: "© 2024 Yen Yoga & Retreat. Mọi Quyền Được Bảo Lưu",
    gallery: "Hành trình rực rỡ",
    aboutTrainer: "Giới Thiệu",
    trainers: "Các Giáo Viên Yoga Của Chúng Tôi",
    trainerNotFound:
      "Không Tìm Thấy Huấn Luyện Viên. Vui lòng kiểm tra lại sau.",
  },
};

export const hero = {
  en: {
    preheader: "The Home of Kundalini Yoga and Mantra Meditation in Vietnam",
    
    headline: {
      noSpan: "Practicing the Yoga & Meditation Lifestyle",
      span: "to become one's own teacher.",
    },
    text: "",
  },
  vn: {
    preheader: "Nơi thực hành Kundalini Yoga & Thiền Mantra tại Việt Nam",
    headline: {
      noSpan: "Thực hành Lối sống Yoga & Thiền ",
      span: "để trở thành người thầy của chính mình",
    },
    text: "",
  },
};

export const facts = [
  {
    en: {
      startNumber: "1",
      endNumber: "10",
      unit: "",
      title: "Years of Experience",
      desc: "Over 10 years of experience with 8 years in Yoga & Meditation training. Nearly 1000 students trained across the country.",
    },
    vn: {
      startNumber: "1",
      endNumber: "10",
      unit: "",
      title: "Năm Kinh Nghiệm",
      desc: "Hơn 10 năm kinh nghiệm với 8 năm đào tạo, huấn luyện Yoga & Thiền. Gần 1000 học viên đã được trên khắp cả nước",
    },
  },
  {
    en: {
      startNumber: "1",
      endNumber: "1",
      unit: "",
      title: "Pioneer in Vietnam",
      desc: "The first Kundalini Yoga & Mantra Meditation training center in Vietnam, with highly qualified trainers and international certifications. Various online/offline courses suitable for different audiences.",
    },
    vn: {
      startNumber: "1",
      endNumber: "1",
      unit: "",
      title: "Tiên Phong Tại Việt Nam",
      desc: "Nơi đào tạo Kundalini Yoga & Thiền Mantra đầu tiên tại Việt Nam. Với đội ngũ huấn luyện chuyên môn cao và chứng chỉ Quốc tế. Nhiều khoá học online/offline phù hợp với nhiều đối tượng.",
    },
  },
  {
    en: {
      startNumber: "1",
      endNumber: "1",
      unit: "",
      title: "Yoga & Meditation Lifestyle",
      desc: "We guide students to apply Yoga & Meditation in their daily lives, aiming to bring the most authentic values.",
    },
    vn: {
      startNumber: "1",
      endNumber: "1",
      unit: "",
      title: "Lối sống Yoga & Thiền",
      desc: "Chúng tôi hướng học viên mang Yoga & Thiền ứng dụng vào cuộc sống với mong muốn mang lại những giá trị chân thật nhất.",
    },
  },
  {
    en: {
      startNumber: "1",
      endNumber: "1000",
      unit: "",
      title: "Retreat & Festival Clients",
      desc: "Proud to be a partner in organizing and guiding Retreat/Yoga events for luxury resorts and businesses in Vietnam.",
    },
    vn: {
      startNumber: "1",
      endNumber: "1000",
      unit: "+",
      title: "Khách Hàng Retreat & Festival",
      desc: "Tự hào là đối tác tổ chức và hướng dẫn chương trình Retreat/ event Yoga cho Resort cao cấp và các doanh nghiệp tại Việt Nam.",
    },
  },
];

export const contact = {
  en: {
    phone: "0352 841 208",
    text: "Reach out to us for any assistance. We are here to provide the best guidance and help you find the perfect yoga course.",
    placeholders: {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      message: "Message",
    },
  },
  vn: {
    phone: "0352 841 208",
    text: "Liên hệ với chúng tôi để được hỗ trợ. Chúng tôi luôn sẵn sàng đưa ra lời khuyên tốt nhất và giúp bạn tìm khóa học yoga phù hợp.",
    placeholders: {
      firstName: "Tên",
      lastName: "Họ",
      email: "Địa chỉ Email",
      message: "Tin nhắn",
    },
  },
};

export const about = {
  image: aboutImage,
  en: {
    established: "Established in 2017 by Hoành Nguyễn and Yến Nguyễn",
    details: [
      "Founded in 2017 to offer deeper experiences in Yoga and Meditation.",
      "Pioneer in organizing wellness tours since 2018 for individuals, groups, and businesses.",
      "Offers 100h, 200h, and 300h Yoga instructor training with international certifications.",
      "Collaborated with notable brands like Viettravel, Elsa Speak, Legato Entertainment, Vietbank, TH true Milk, An Lâm Ninh Vân Bay Retreat, and TIA wellness resort.",
      "Focused on promoting a healthy lifestyle, connection with nature, and inner balance.",
    ],
    quote:
      "“At Yên Yoga & Retreat, we strive to inspire a harmonious balance of body, mind, and soul, helping individuals discover their true selves.”",
  },
  vn: {
    established: "Thành lập năm 2017 bởi Hoành Nguyễn và Yến Nguyễn",
    details: [
      "Thành lập năm 2017 để cung cấp những trải nghiệm sâu sắc hơn trong Yoga và Thiền.",
      "Tiên phong trong việc tổ chức các tour du lịch chăm sóc sức khoẻ từ năm 2018 cho cá nhân, nhóm và doanh nghiệp.",
      "Cung cấp đào tạo huấn luyện viên Yoga 100h, 200h và 300h với chứng chỉ quốc tế.",
      "Hợp tác với các thương hiệu nổi bật như Viettravel, Elsa Speak, Legato Entertainment, Vietbank, TH true Milk, An Lâm Ninh Vân Bay Retreat, và TIA wellness resort.",
      "Tập trung vào việc thúc đẩy lối sống lành mạnh, kết nối với thiên nhiên và cân bằng nội tâm.",
    ],
    quote:
      "“Tại Yên Yoga & Retreat, chúng tôi mong muốn truyền cảm hứng cho sự cân bằng hài hòa giữa cơ thể, tâm trí và linh hồn, giúp mọi người khám phá bản thân thật sự của mình.”",
  },
};

export const footer = {
  logo: Logo,
  social: {
    facebook: "https://www.facebook.com/yenyoga.nt",
    instagram: "https://www.instagram.com/yenyogaretreat.nhatrang/",
    youtube: "https://www.youtube.com/@Yenyogaretreat/videos",
  },
};

export const courseTexts = {
  en: {
    accommodation: "Accommodation",
    conditions: "Conditions",
    courseTimings: "Timings",
    overview: "Overview",
    includes: "What's Included:",
    description: "Description:",
    ideal: "This Course is Ideal For:",
    content: "Course Content:",
    online: "Online Classes",
    offline: "Offline Classes",
    homework: "Homework",
    duration: "Duration:",
    selfStudy: "Self-Study:",
    karma: "Karma Teaching:",
    meditation: "Meditation Practice:",
    two: "Rooms for 2 People:",
    four: "Rooms for 4 People:",
    certificate: "Requirements for Certificate",
    assess:
      "Yen Yoga & Retreat will assess your eligibility for certification based on the above criteria and your readiness to become a Kundalini Yoga teacher.",
    otherCourses: "Other Courses",
    valid: "Offer Valid Until: ",
    sadhna: "Sadhana:",
    theory: "Theory:",
    retreat: "Retreat:",
    hours: "hours",
  },
  vn: {
    accommodation: "Chỗ Ở",
    conditions: "Điều kiện",
    courseTimings: "Thời gian",
    overview: "Tổng Quan",
    includes: "Nội Dung Bao Gồm:",
    description: "Mô Tả:",
    ideal: "Khóa Học Này Phù Hợp Với:",
    content: "Nội Dung Khóa Học:",
    online: "Lớp Học Online",
    offline: "Lớp Học Offline",
    homework: "Bài Tập",
    duration: "Thời Gian:",
    selfStudy: "Học Tự Học:",
    karma: "Giảng Dạy Karma:",
    meditation: "Thực Hành Thiền:",
    two: "Phòng Cho 2 Người:",
    four: "Phòng Cho 4 Người:",
    certificate: "Điều Kiện Nhận Chứng Chỉ",
    assess:
      "Yen Yoga & Retreat sẽ đánh giá tiêu chí chứng nhận của bạn dựa trên các điều kiện trên và sự sẵn sàng của bạn để trở thành giáo viên Yoga Kundalini.",
    otherCourses: "Khóa Học Khác",
    valid: "Ưu Đãi Có Hiệu Lực Đến: ",
    sadhna: "Sadhana:",
    theory: "Lý Thuyết:",
    retreat: "Khoá Tu Nghiệp:",
    hours: "giờ",
  },
};

export const images = {
  logo: Logo,
  hero: HeroImage,
};
