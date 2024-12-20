import React from "react";
import { Link } from "react-router-dom";
import aboutImage from "../assets/img/retreat/yogaImage.jpg";

const About = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Yên Yoga & Retreat</h1>
          <p className="text-lg text-gray-600">
            Established in 2017 by Hoành Nguyễn and Yến Nguyễn
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left Section */}
          <div className="lg:w-1/3 w-full">
            <img
              src={aboutImage}
              alt="Yên Yoga & Retreat"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Details Section */}
          <div className="lg:w-2/3 w-full">
            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-orange-500">•</span>
                Founded in 2017 to provide deeper experiences in Yoga and Meditation.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500">•</span>
                Pioneer in organizing wellness tours since 2018 for individuals, groups, and businesses.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500">•</span>
                Offers 200h and 300h Yoga instructor training with international certifications.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500">•</span>
                Collaborated with notable brands like Viettravel, Legato Entertainment, and Radisson Blu Resort Cam Ranh.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500">•</span>
                Focused on promoting a healthy lifestyle, nature connection, and inner balance.
              </li>
            </ul>
            <div className="mt-8 text-center lg:text-left">
              <Link to="/instructors">
                <button className="px-6 py-3 bg-orange text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300">
                  Meet Our Instructors
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <blockquote className="italic text-2xl text-gray-700">
            “At Yên Yoga & Retreat, we aim to inspire a harmonious balance of body, mind, and soul, helping individuals discover their authentic selves.”
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;
