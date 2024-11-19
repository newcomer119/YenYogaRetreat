// src/components/Gallery.js
import React from "react";
import { Galleryimgs } from '../data';

const Gallery = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Galleryimgs.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              {item.image}
              <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;