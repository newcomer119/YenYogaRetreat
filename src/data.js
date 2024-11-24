// import icons
import { BsCheck, BsChevronRight } from "react-icons/bs";

// import images
import CourseImage1 from "../src/assets/img/courses/course-1.jpg";
import CourseImage2 from "../src/assets/img/courses/course-2.jpg";
import CourseImage3 from "../src/assets/img/courses/course-3.jpg";

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
    name: "Retreat",
    href: "/retreat",
  },
  {
    name: "Classes",
    href: "/classes",
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
    link: "1",
    hot: false,
    image: CourseImage1,
    title: "Kundalini Yoga & Mantra Meditation - (Online)",
    type: "class",
    date: "Starts December 18, 2024",
    duration: "12 classes",
    location: "",
    mode: "Online",
    summary: "This online foundational course begins your journey to \"Become a Yoga Teacher\"",
    description: "This online foundational course begins your journey to \"Become a Yoga Teacher\"",
    details: [
      `Morning Practice: 4:30 - 6:00 AM, Tuesday, Thursday, Saturday (from 2/11)`,
      `Evening Theory & Meditation: 8:00 - 9:30 PM, Tuesday, Thursday, Saturday (18/12 - 18/1)`,
      `Recorded Sessions Available for 3 Months Post-Course`,
    ],
    pricing: [
      {
        type: "Full Course Fee",
        price: "12,000,000 VND/person",
        discount: {
          price: "11,400,000 VND/person",
          eligible: "5% off for 200H course alumni, 1,000,000 VND re-enrollment fee for 100H course alumni",
        },
      },
      {
        type: "Installment Payment",
        price: "12,000,000 VND + 1,000,000 VND installment fee, payable in 2-3 installments (40%, 30%, 30%)",
        discount: "",
      },
    ],
    instructors: [
      {
        name: "Hoan Nguyen",
        image: Instructor1s,
        description: "Yoga & Meditation Trainer",
      },
      {
        name: "Yen Nguyen",
        image: Instructor2s,
        description: "Mantra Singer, Yoga & Meditation Trainer",
      },
    ],
    certificate: "YACEP - Yoga Alliance Certification upon completion",
  },
  {
    link: "2",
    hot: true,
    image: CourseImage2,
    title: "Sat Nam Festival Nha Trang 2024: Love & Light",
    type: "event",
    date: "December 14-15, 2024",
    duration: "2 days",
    location: "Ba Ho Ecotourism Area, Van Thuan Village, Ninh Ich Commune, Ninh Hoa Town, Khanh Hoa",
    mode: "Offline",
    summary:
      "First Kundalini Yoga festival organized by Yen Yoga & Retreat and Kundalini Yoga practitioners in Vietnam.",
    description: `
      Sat Nam Festival Nha Trang 2024 "Love & Light" is the first Kundalini Yoga festival organized by Yen Yoga & Retreat and Kundalini Yoga practitioners in Vietnam.
      This special event features Kundalini Yoga sessions, mantra meditation, advanced Kundalini Yoga classes, special workshops, sound baths with gongs and healing instruments, evening live music festivals, and various other activities.`,
    details: [
      `Morning Sadhana - Kundalini Yoga and Mantra Meditation (Live Music)`,
      `Advanced Kundalini Yoga Classes`,
      `Special Workshops: Sat Nam – The Journey to Self, Love & Light Circle, and more`,
      `Sound Bath with Gong, Singing Bowls & Healing Instruments`,
      `Evening Festival with Live Music (Mantra Singing, Dancing, Mind-Freeing Music & Meditation)`,
      `Kids Yoga, Kundalini Fit, Face Yoga, Love & Light Circle`,
      `Health Care Booths: Green Products, Natural Therapies, and Health Consultations`,
      `Plant-Based Buffet Meals`,
      `Round-trip shuttle from Muong Thanh Vien Trieu Hotel, Nha Trang to Ba Ho (detailed schedule provided upon registration).`,
    ],
    pricing: [
      {
        type: "Double Room (2 people)",
        price: "3,200,000 VND/person",
        discount: {
          price: "3,000,000 VND/person",
          eligible: "before 10/11/2024 or group of 3+",
        },
      },
      {
        type: "Quad Room (4 people)",
        price: "2,800,000 VND/person",
        discount: {
          price: "2,600,000 VND/person",
          eligible: "before 10/11/2024 or group of 3+",
        },
      },
      {
        type: "Tent (2 or 6 people)",
        price: "1,800,000 VND/person",
        discount: {
          price: "1,600,000 VND/person",
          eligible: "before 10/11/2024 or group of 3+",
        },
      },
      {
        type: "Children (6-10 years, sharing bed/tent with parents)",
        price: "840,000 VND/child",
        discount: "",
      },
      {
        type: "Free for 1 child under 6 (one free child per parent, second child costs as per children rate)",
        price: "",
        discount: "",
      },
      {
        type: "Non-Accommodation Ticket (includes meals and transport)",
        price: "1,500,000 VND/adult, 800,000 VND/child (6-10 years)",
        discount: "",
      },
      {
        type: "Saturday Only Ticket (14/12/2024)",
        price: "990,000 VND/adult, 590,000 VND/child (6-10 years)",
        discount: "",
      },
      {
        type: "Sunday Only Ticket (15/12/2024)",
        price: "690,000 VND/adult, 390,000 VND/child (6-10 years)",
        discount: "",
      },
    ],
    instructors: [
      {
        name: "Dang Truong Son",
        image: "image_placeholder", // Placeholder for actual image
        description: "Ph.D. in Education, Yoga & Meditation Trainer",
      },
      {
        name: "Vo Thi Minh Hue",
        image: "image_placeholder", // Placeholder for actual image
        description: "Psychologist, Yoga & Meditation Coach",
      },
      {
        name: "Nguyen Song Ngu Hoanh",
        image: "image_placeholder", // Placeholder for actual image
        description: "Yoga & Meditation Trainer",
      },
      {
        name: "Yen Nguyen",
        image: "image_placeholder", // Placeholder for actual image
        description: "Mantra Singer, Yoga & Meditation Trainer",
      },
      {
        name: "Ho Nhat Ha",
        image: "image_placeholder", // Placeholder for actual image
        description: "Mind-Freeing Music Artist",
      },
    ],
    certificate: "",
  },
  {
    link: "3",
    hot: false,
    image: CourseImage3,
    title: "Kundalini Yoga & Mantra Meditation (Offline)",
    type: "class",
    date: "December 1-8, 2024",
    duration: "8 Days",
    location: "Yen Yoga & Retreat, Diên Lâm, Diên Khánh, Khanh Hoà",
    mode: "Offline",
    summary: "This foundational course begins your journey to \"Become a Yoga Teacher\"",
    description: "Yen welcomes you to a transformative journey with Kundalini Yoga & Mantra Meditation. This retreat-style training course enhances personal growth through Yoga & Meditation.",
    details: [
      `Understanding Kundalini Yoga & its energy pathways`,
      `Exploring human layers and the five elements`,
      `The power of Mantra Meditation`,
      `Chakra balancing and health impacts`,
      `Structure of a Kriya: Prana, Asana, Mudra, Bandha, Mantra`,
      `Group practice and Karma teaching opportunities`,
    ],
    pricing: [
      {
        type: "Full Course Fee",
        price: "12,000,000 VND/person",
        discount: {
          price: "11,400,000 VND/person",
          eligible: "5% off for 200H course alumni, 1,000,000 VND re-enrollment fee for 100H course alumni",
        },
      },
      {
        type: "Installment Payment",
        price: "12,000,000 VND + 1,000,000 VND installment fee, payable in 2-3 installments (40%, 30%, 30%)",
        discount: "",
      },
    ],
    instructors: [
      {
        name: "Hoan Nguyen",
        image: Instructor1s,
        description: "Yoga & Meditation Trainer",
      },
      {
        name: "Yen Nguyen",
        image: Instructor2s,
        description: "Mantra Singer, Yoga & Meditation Trainer",
      },
    ],
    certificate: "YACEP - Yoga Alliance Certification upon completion",
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
