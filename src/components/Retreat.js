import React from 'react';

const Retreat = () => {
  return (
    <div className="bg-gradient-to-b from-blue-800 to-purple-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1200x600')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Yoga Retreat in Greece</h1>
          <p className="text-lg text-gray-200 mb-6">3-17 Sept | Santorini, Greece | $518</p>
          <button className="bg-pink-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-pink-600">
            Book Now
          </button>
        </div>
      </div>

      {/* Event Details Section */}
      <div className="max-w-6xl mx-auto mt-12 px-4">
        <h2 className="text-3xl text-white font-bold mb-6">Hatha Yoga</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <img
              src="https://via.placeholder.com/600x400"
              alt="Hatha Yoga"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="text-white space-y-4">
            <p>
              Hatha yoga is a branch of yoga. The Sanskrit word hatha literally means "force" and thus alludes to a system of physical techniques.
            </p>
            <p>
              In India, hatha yoga is associated with popular yoga traditions that emphasize strength, flexibility, and breathwork.
            </p>
            <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="max-w-6xl mx-auto mt-16 px-4">
        <h2 className="text-3xl text-white font-bold mb-6 text-center">What You'll Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img src="https://via.placeholder.com/600x400" alt="Experience 1" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold">Daily Yoga Classes</h3>
              <p className="text-gray-600">Start your mornings with energizing yoga sessions led by experienced instructors.</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img src="https://via.placeholder.com/600x400" alt="Experience 2" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold">Guided Meditations</h3>
              <p className="text-gray-600">Relax your mind and body with calming evening meditations in serene locations.</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img src="https://via.placeholder.com/600x400" alt="Experience 3" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold">Delicious Healthy Meals</h3>
              <p className="text-gray-600">Enjoy locally sourced, nutritious meals prepared with love and care.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-blue-900 py-8 mt-16">
        <div className="max-w-6xl mx-auto text-center text-white">
          <p>&copy; 2024 Yoga Retreat. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Retreat;
