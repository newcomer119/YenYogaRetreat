import React from 'react';

// Import images for instructors
import Teacher1Image from '../assets/img/hero/guy.png'; // Replace with your image path
import Teacher2Image from '../assets/img/hero/guy.png'; // Replace with your image path

const Instructors = () => {
  return (
    <section className="instructors-section py-10">
      <div className="container mx-auto">
        {/* Instructor 1 */}
        <div className="flex flex-col lg:flex-row items-center mb-10">
          <div className="flex-1">
            <img src={Teacher1Image} alt="Teacher No. 1" className="w-full h-auto rounded-lg" />
          </div>
          <div className="flex-1 p-5">
            <h2 className="text-2xl font-bold mb-3">Teacher No. 1</h2>
            <p className="text-lg">
              Teacher No. 1 has over 10 years of experience in yoga and meditation. They specialize in Hatha Yoga and have trained numerous students to achieve their wellness goals.
            </p>
          </div>
        </div>

        {/* Instructor 2 */}
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex-1 p-5">
            <h2 className="text-2xl font-bold mb-3">Teacher No. 2</h2>
            <p className="text-lg">
              Teacher No. 2 is a certified yoga instructor with a passion for teaching Vinyasa Yoga. They focus on creating a supportive environment for students of all levels.
            </p>
          </div>
          <div className="flex-1">
            <img src={Teacher2Image} alt="Teacher No. 2" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructors;