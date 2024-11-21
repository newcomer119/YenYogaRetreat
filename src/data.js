// import icons
import { BsCheck, BsChevronRight } from "react-icons/bs";

// import images
import CourseImage1 from "../src/assets/img/courses/course-1.png";
import CourseImage2 from "../src/assets/img/courses/course-2.png";
import CourseImage3 from "../src/assets/img/courses/course-3.png";

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
import Instructor1s from "../src/assets/img/instructors/hoan-s.jpg";
import Instructor2s from "../src/assets/img/instructors/yen-s.jpg";

export const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Yoga Retreat",
    href: "/yoga-retreat",
  },
  {
    name: "Courses",
    href: "/AllCourses",
  },
  {
    name: "Instructors",
    href: "/instructors",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export const facts = [
  {
    startNumber: "1",
    endNumber: "5",
    unit: "",
    title: "Years of Experience",
    desc: "We are 5 years of experienced in this yoga field. Giving the best instructions.",
  },
  {
    startNumber: "1",
    endNumber: "5",
    unit: "K",
    title: "Happy Clients",
    desc: "We have over five thousand clients all over the world. They are very satisfied.",
  },
  {
    startNumber: "1",
    endNumber: "15",
    unit: "",
    title: "Experienced Trainers",
    desc: "We have over fifteen dedicated and experienced trainer for yoga and meditation.",
  },
  {
    startNumber: "1",
    endNumber: "24",
    unit: "",
    title: "Monthly Classes",
    desc: "Yoga is a physical, mental and spritual practice discipline. We provide 24+ classes monthly.",
  },
];

export const courses = [
  {
    image: CourseImage1,
    title: "Lớp tập Kundalini Yoga #online: 4:30 - 6:00 (3,5,7)",
    desc: "1.200.000₫/12 class or pay as you wish",
    link: "Get started",
    delay: "600",
  },
  {
    image: CourseImage2,
    title: "Lễ hội Sat Nam Fest Nha Trang 2024: 2N1Đ (14,15/12)",
    desc: "https://forms.gle/sxygKTgHr1DUUCCGA",
    link: "Get started",
    delay: "800",
  },
  {
    image: CourseImage3,
    title:
      "Khoá đào tạo 100h Online 'Kundalini Yoga & Thiền Mantra' khai giảng 18/12",
    desc: "https://forms.gle/EKCBARsz8BrGT3AU7",
    link: "Get started",
    delay: "900",
  },
  {
    image: "", // Assuming you have an image for the fourth course
    title: "Kundalini Yoga & Mantra Meditation ",
    desc: "100-hour training course in Nha Trang (December 28 - January 5)",
    link: "Get started",
    delay: "1000", // Adjust delay as needed
  },
  // ... existing code ...
];

export const pricing = [
  {
    title: "Single yoga class",
    price: "$15.",
    list: [
      {
        icon: <BsCheck />,
        name: "Pay as you go",
      },
      {
        icon: <BsCheck />,
        name: "Perfect for non-residence",
      },
      {
        icon: <BsCheck />,
        name: "Acces to all classes",
      },
    ],
    buttonText: "Book now",
    buttonIcon: <BsChevronRight />,
    delay: "600",
  },
  {
    title: "Single yoga class",
    price: "$60.",
    list: [
      {
        icon: <BsCheck />,
        name: "Pay as you go",
      },
      {
        icon: <BsCheck />,
        name: "Perfect for non-residence",
      },
      {
        icon: <BsCheck />,
        name: "Acces to all classes",
      },
      {
        icon: <BsCheck />,
        name: "Acces to all mentors",
      },
    ],
    buttonText: "Book now",
    buttonIcon: <BsChevronRight />,
    delay: "800",
  },
  {
    title: "Single yoga class",
    price: "$150.",
    list: [
      {
        icon: <BsCheck />,
        name: "Pay as you go",
      },
      {
        icon: <BsCheck />,
        name: "Perfect for non-residence",
      },
      {
        icon: <BsCheck />,
        name: "Acces to all classes",
      },
      {
        icon: <BsCheck />,
        name: "Acces to all mentors",
      },
    ],
    buttonText: "Book now",
    buttonIcon: <BsChevronRight />,
    delay: "900",
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

export const inst = {
  instructors: [
    {
      id: "hoan",
      name: "Mr. Hoành Nguyễn",
      title: "Co-Founder & Instructor",
      imageL: Instructor1,
      imageS: Instructor1s,
      bio: "Yoga and Meditation are paths of practice and application in life. My goal is to spread the spirit of Mantra meditation to help others practice and transform their lives positively.",
      qualifications: [
        "Co-Founder of Yên Yoga & Retreat",
        "Founder of Kombucha by Mr.Ủ - a mantra energy-based beverage",
        "9 years of experience in Yoga and Meditation practice",
        "Trainer of international Yoga Teacher Training courses, Kundalini Yoga, and Mantra Meditation",
        "Led numerous Healing Retreats in nature",
        "Conducted Yoga and Meditation sessions for organizations like Elsa Speak, TTC Group, Viettravel, and TH True Milk",
      ],
    },
    {
      id: "yen",
      name: "Mrs. Yến Nguyễn",
      title: "Co-Founder & Instructor",
      imageL: Instructor2,
      imageS: Instructor2s,
      bio: "I aim to share the positive lifestyle of Yoga and Meditation with the community. My passion is to guide others toward natural healing and inner peace through yoga and mantra music.",
      qualifications: [
        "Co-Founder of Yên Yoga & Retreat",
        "10 years of experience practicing and teaching Yoga & Meditation",
        "Trainer of Yoga and Meditation Teacher Training programs",
        "Practitioner of a vegan lifestyle with extensive experience in natural healing",
        "Founder and guide of 'Kirtan Night - Mantra Healing Music' events across Vietnam",
      ],
    },
  ],
};
