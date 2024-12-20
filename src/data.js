// import icons
import { BsCheck, BsChevronRight } from "react-icons/bs";

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
    name: "About",
    href: "/about",
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
    title: "200h TTC Kundalini Yoga & Meditation",
    type: "class",
    date: "Online: June 4 – August 29, 2025 Offline: July 25 – August 17, 2025",
    duration: "12 classes",
    location: "",
    mode: "Online / Offline",
    summary:
      "Become a Kundalini Yoga & Meditation Instructor with an International Certificate",
    description:
      "Become a Kundalini Yoga & Meditation Instructor with an International Certificate",
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
          eligible:
            "5% off for 200H course alumni, 1,000,000 VND re-enrollment fee for 100H course alumni",
        },
      },
      {
        type: "Installment Payment",
        price:
          "12,000,000 VND + 1,000,000 VND installment fee, payable in 2-3 installments (40%, 30%, 30%)",
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
    hot: false,
    image: CourseImage2,
    title: "Kundalini Yoga & Mantra Meditation - Foundation",
    type: "event",
    date: "Online: June 4 – August 29, 2025 Offline: July 25 – August 17, 2025",
    duration: "2 days",
    location:
      "Ba Ho Ecotourism Area, Van Thuan Village, Ninh Ich Commune, Ninh Hoa Town, Khanh Hoa",
    mode: "Online / Offline",
    summary: "A course to become the master of your own self",
    description: `
      An introductory journey to self-discovery,
Understanding energy and balancing the five elements,
Kundalini Yoga: breathing, postures, mudras, mantras, and energy locks,
Applying Mantra Meditation in daily life,
Monthly intake for all levels`,
    details: [
      `Morning Practice: 4:30 - 6:00 AM, Tuesday, Thursday, Saturday (from 2/11)`,
      `Evening Theory & Meditation: 8:00 - 9:30 PM, Tuesday, Thursday, Saturday (18/12 - 18/1)`,
      `Recorded Sessions Available for 3 Months Post-Course`,
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
        name: "Hoanh Nguyen",
        image: "image_placeholder", // Placeholder for actual image
        description: "Yoga & Meditation Trainer",
      },
      {
        name: "Yen Nguyen",
        image: "image_placeholder", // Placeholder for actual image
        description: "Mantra Singer, Yoga & Meditation Trainer",
      },
    ],
    certificate: "Yen Yoga & Retreat",
  },
  {
    link: "3",
    hot: false,
    image: CourseImage3,
    title: "30hrs Chakra Healing",
    type: "class",
    date: "Online: June 4 – August 29, 2025 Offline: July 25 – August 17, 2025",
    duration: "8 Days",
    location: "Yen Yoga & Retreat, Diên Lâm, Diên Khánh, Khanh Hoà",
    mode: "Online / Offline",
    summary: "Unlock the healing power of your chakras",
    description:
      "Learn to balance and align your chakras for better mental and physical well-being through guided practices, meditation, and energy work.",
    details: [
      "Detailed overview of chakra energy systems",
      "Practical exercises for chakra activation and alignment",
      "Group meditations for energy balance",
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
    link: "4",
    hot: false,
    image: CourseImage4,
    title: "Mantra Meditation – Detox & Self-Cultivation",
    type: "class",
    date: "Online: June 4 – August 29, 2025 Offline: July 25 – August 17, 2025",
    duration: "12 classes",
    location: "",
    mode: "Online",
    summary: "Experience the transformative power of mantra meditation",
    description:
      "Explore the art of self-cultivation and detoxify your mind and soul with ancient mantra meditation techniques.",
    details: [
      "Learn the fundamentals of mantra chanting",
      "Guided detox meditation sessions",
      "Practical applications of mantras in daily life",
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
    link: "5",
    hot: false,
    image: CourseImage5,
    title: "Mantra - Healing Music",
    type: "class",
    date: "Online: June 4 – August 29, 2025 Offline: July 25 – August 17, 2025",
    duration: "12 classes",
    location: "",
    mode: "Online",
    summary: "Discover healing through the vibrations of mantra music",
    description:
      "Immerse yourself in the soothing and healing effects of mantra music, designed to calm your mind and rejuvenate your spirit.",
    details: [
      "Introduction to the healing properties of sound",
      "Chanting and listening exercises with mantras",
      "Creating your own mantra music experience",
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
    link: "6",
    hot: false,
    image: CourseImage6,
    title: "Chakra Dance & Mind Liberation Art",
    type: "class",
    date: "Online: June 4 – August 29, 2025 Offline: July 25 – August 17, 2025",
    duration: "12 classes",
    location: "",
    mode: "Online",
    summary: "Liberate your mind through the art of chakra dance",
    description:
      "Combine movement and meditation in this transformative course designed to harmonize your energy and unlock creativity.",
    details: [
      "Guided chakra dances for energy flow",
      "Techniques for mental clarity and emotional release",
      "Integration of dance and meditation for holistic well-being",
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
    link: "7",
    hot: false,
    image: CourseImage7,
    title: "Yoga & Meditation Lifestyle",
    type: "class",
    date: "Online: June 4 – August 29, 2025 Offline: July 25 – August 17, 2025",
    duration: "12 classes",
    location: "",
    mode: "Online",
    summary: "Adopt the lifestyle of yoga and meditation",
    description:
      "Learn how to integrate yoga and meditation into your daily routine for a balanced and fulfilling life.",
    details: [
      "Practical tips for a yogic lifestyle",
      "Daily meditation practices for peace of mind",
      "Holistic approaches to living with yoga principles",
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
      facebook: "https://www.facebook.com/hoanh.nguyen.90",
      instagram: "https://www.instagram.com/hoanh0505/",
    },
    {
      id: "yen",
      name: "Mrs. Yến Nguyễn",
      title: "Co-Founder & Instructor",
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
      facebook: "https://www.facebook.com/profile.php?id=100003545174622",
      instagram: "https://www.instagram.com/yogivevuon/",
    },
  ],
};
