// src/components/Gallery.js
import React from "react"; // Ensure this import is at the top

const Gallery = () => {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold">Gallery</h1>
      {/* Add your gallery images here */}
      <div className="grid grid-cols-3 gap-4">
        <img src="path/to/image1.jpg" alt="Yoga Image 1" className="w-full h-auto" />
        <img src="path/to/image2.jpg" alt="Yoga Image 2" className="w-full h-auto" />
        <img src="path/to/image3.jpg" alt="Yoga Image 3" className="w-full h-auto" />
        {/* Add more images as needed */}
      </div>
    </div>
  );
};

export default Gallery;