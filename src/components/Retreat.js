import React from "react";
import { Link } from "react-router-dom"; 
import yogaImage from "../assets/img/retreat/yogaImage.jpg";
import hatha from "../assets/img/retreat/hatha.jpg";

const Retreat = () => {
  return (
    <div className="bg-gradient-to-b from-blue-800 to-purple-900 min-h-screen pb-12">
      {/* Hero Section */}
      <div
        className="relative h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${yogaImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Yoga Retreat in Vietnam
          </h1>
          
          <button className="bg-pink-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-pink-600">
            View our schedule
          </button>
        </div>
      </div>

      {/* Event Details Section */}
      <div className="max-w-6xl mx-auto mt-12 px-4">
        <h2 className="text-3xl text-dark font-bold mb-6">Hatha Yoga</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <img
              src={hatha}
              alt="Hatha Yoga"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="text-dark space-y-4">
            <p>
              Hatha yoga is a branch of yoga. The Sanskrit word hatha literally
              means "force" and thus alludes to a system of physical techniques.
            </p>
            <p>
              In India, hatha yoga is associated with popular yoga traditions
              that emphasize strength, flexibility, and breathwork.
            </p>
            <button className="mt-4 bg-blue-600 text-dark px-6 py-3 rounded-lg font-medium hover:bg-blue-700">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="max-w-6xl mx-auto mt-16 px-4">
        <h2 className="text-3xl text-dark font-bold mb-6 text-center">
          What You'll Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src={hatha}
              alt="Experience 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Daily Yoga Classes</h3>
              <p className="text-gray-600">
                Start your mornings with energizing yoga sessions led by
                experienced instructors.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src={hatha}
              alt="Experience 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Guided Meditations</h3>
              <p className="text-gray-600">
                Relax your mind and body with calming evening meditations in
                serene locations.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src = {hatha}
              alt="Experience 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Delicious Healthy Meals</h3>
              <p className="text-gray-600">
                Enjoy locally sourced, nutritious meals prepared with love and
                care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Retreat;
