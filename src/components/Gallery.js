// Changed the gallery file now images are visible with slideshow

import React, { useState, useEffect } from "react"; // Add useEffect
import "slick-carousel/slick/slick.css"; // Import slick-carousel styles
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import imageUrlBuilder from '@sanity/image-url';

import { BsXSquareFill } from "react-icons/bs";
import { sectionHeaders } from "../data";
import { useLanguage } from "../context/LanguageContext";
import { client } from "../lib/sanity"; // Add this import for Sanity client

// Create the image builder
const builder = imageUrlBuilder(client);

// Function to generate image URL
function urlFor(source) {
  return builder.image(source);
}

// New Modal component for displaying the clicked image
export const ImageModal = ({ isOpen, image, onClose }) => {
  if (!isOpen) return null; // Don't render if not open
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent z-30 ">
      <div className="relative max-w-[70%] max-h-[70%] m-4">
        <img
          src={image}
          alt="Zoomed"
          className="w-full h-full object-contain" // Use object-contain to maintain aspect ratio
        />
        <BsXSquareFill
          className="absolute -right-8 top-0 text-red-100 cursor-pointerhover:scale-[0.8] transition-all cursor-pointer" // Adjusted z-index for visibility
          onClick={onClose}
          size={30}
        />
      </div>
    </div>
  );
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [images, setImages] = useState([]); // New state for Sanity images
  const { language } = useLanguage();

  // Add useEffect to fetch images from Sanity
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const query = '*[_type == "gallery"][0].images[]';
        const result = await client.fetch(query);
        const imageUrls = result.map(image => ({
          url: urlFor(image).url(),
          alt: image.alt || 'Gallery image',
          caption: image.caption || ''
        }));
        setImages(imageUrls);
      } catch (error) {
        console.error('Error fetching gallery images:', error);
        console.log('Error details:', error.response);
      }
    };

    fetchImages();
  }, []);

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
    <div id="gallery" className="flex items-center justify-center py-12">
      {/* Updated background color to a lighter blue */}
      <div className="w-full max-w-6xl p-8">
        {/* Added padding to the container */}
        <h1
          className="sectionHeaders text-left"
        >
          {sectionHeaders[language].gallery}
        </h1>
        {/* Enhanced font style */}
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div
              key={index}
              className="px-2"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="rounded-lg shadow-md w-full h-80 md:h-96 lg:h-112 object-cover transition-transform duration-300 transform hover:scale-105 focus:outline-none cursor-pointer"
                onClick={() => openModal(image.url)}
              />
            </div>
          ))}
        </Slider>
      </div>
      <ImageModal
        isOpen={isModalOpen}
        image={selectedImage}
        onClose={closeModal}
      />{" "}
      {/* Modal for zoomed image */}
    </div>
  );
};

export default Gallery;
