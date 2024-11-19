// Changed the gallery file now images are visible with slideshow 

import React, { useState } from "react"; // Added useState for managing modal state
import "slick-carousel/slick/slick.css"; // Import slick-carousel styles
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import GalleryImg from "../galleryimg/galleryimg.png";
import GalleryImg1 from "../galleryimg/galleryimg1.png";
import GalleryImg2 from "../galleryimg/galleryimg2.png";
import GalleryImg3 from "../galleryimg/galleryimg3.png";
import GalleryImg4 from "../galleryimg/galleryimg4.png";
import GalleryImg5 from "../galleryimg/galleryimg5.png";
import GalleryImg6 from "../galleryimg/galleryimg6.png";
import GalleryImg7 from "../galleryimg/galleryimg7.png";
import GalleryImg8 from "../galleryimg/galleryimg8.png";

// New Modal component for displaying the clicked image
const Modal = ({ isOpen, image, onClose }) => {
  if (!isOpen) return null; // Don't render if not open
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
      <img
        src={image}
        alt="Zoomed"
        className="max-w-full max-h-full object-contain cursor-pointer"
        onClick={onClose}
      />
    </div>
  );
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null); // State for selected image
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const images = [
    GalleryImg,
    GalleryImg1,
    GalleryImg2,
    GalleryImg3,
    GalleryImg4,
    GalleryImg5,
    GalleryImg6,
    GalleryImg7,
    GalleryImg8,
  ];

  // Slider settings for a centered carousel with next/previous image preview
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default to 3 images at a time
    centerMode: true, // Enable centered mode
    centerPadding: "60px", // Adds space around the centered image
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    focusOnSelect: true, // Allows selection of next/prev images
    responsive: [
      {
        breakpoint: 1024, // For tablet size and below
        settings: {
          slidesToShow: 2, // Show 2 images at a time
          centerPadding: "40px", // Adjust padding for smaller screens
        },
      },
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 1, // Show 1 image at a time
          centerPadding: "20px", // Less padding for mobile
        },
      },
    ],
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
    <div className="flex items-center justify-center min-h-screen bg-light-blue-100"> {/* Updated background color to light blue */}
      <div className="w-full max-w-6xl"> {/* Increased max width for larger screens */}
        {/* Image Carousel */}
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index} className="px-2">
              <img
                src={image}
                alt={`Slideshow Image ${index + 1}`}
                className="rounded-lg shadow-lg w-full h-80 md:h-96 lg:h-112 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
                onClick={() => openModal(image)} // Open modal on click
              />
            </div>
          ))}
        </Slider>
      </div>
      <Modal isOpen={isModalOpen} image={selectedImage} onClose={closeModal} /> {/* Modal for zoomed image */}
    </div>
  );
};

export default Gallery;