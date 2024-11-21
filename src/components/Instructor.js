import React from "react";
import { useParams, Link } from "react-router-dom";
import { inst } from "../data";

const Instructor = () => {
  const { id } = useParams();
  const instructor = inst.instructors.find((ins) => ins.id === id);

  if (!instructor) {
    return (
      <div className="h-[70vh] text-center py-12">
        <h1 className="mt-8 mb-16 text-gray-800 h2 text-center">
          Instructor Not Found
        </h1>
        <Link to="/instructors">
          <button className="btn-md bg-egreen-90 hover:bg-egreen text-white transition-all duration-300">
            Back to Instructors
          </button>
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-egreen-70 py-12">
      <div className="mx-auto md:px-32 px-4">
        <h1 className="mt-8 mb-4 text-gray-800 h2 text-center">
          {instructor.name}
        </h1>
        <p className=" mb-10 text-md font-semibold text-center">
          {instructor.title}
        </p>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

            
          {/* Image */}

          <div className="flex flex-col items-center w-full md:w-2/5 h-auto bg-orange">
            <div className="w-full md:w-2/5 h-auto">
              <img
                src={instructor.imageS}
                alt={instructor.name}
                className="w-full h-auto object-cover shadow-lg"
              />
            </div>
            <div className="flex flex-row items-center w-full md:w-2/5 h-auto bg-yellow">
              <div className="w-1/3 h-auto bg-green">I</div>
              <div className="w-1/3 h-auto bg-blue">F</div>
              <div className="w-1/3 h-auto bg-blue">V</div>
            </div>
          </div>

          {/* Details */}
          <div className="bg-white shadow-lg p-6 w-full md:w-3/5">
            {id === "hoan" && (
              <ul className="mt-4 space-y-2 text-gray-800">
                {instructor.qualifications.map((qual, index) => (
                  <li key={index} className="list-disc list-inside">
                    {qual}
                  </li>
                ))}
              </ul>
            )}
            <Link
              to="/instructors"
              className="inline-block mt-4 btn-md bg-egreen text-white"
            >
              Back to Instructors
            </Link>
          </div>
        </div>
        
        <p className="mt-2 text-lg">{instructor.bio}</p>
      </div>
    </section>
  );
};

export default Instructor;
