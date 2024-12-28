import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";

const InstructorCard = ({ instructor, all }) => {
  const { name, imageS, title, bio, social } = instructor;
  const [mobile, setMobile] = useState(window.innerWidth <= 769);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 769);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`relative flex flex-col bg-white w-auto rounded-lg hover:scale-[1.02] transition-all`}
    >
      {/* Image Section */}
      <div className="relative w-auto h-auto">
        <img
          src={imageS}
          alt={title}
          className="w-full max-h-96 object-cover rounded-t-lg"
        />
        {!mobile && (
          <div
            className={`${
              all
                ? "inset-2 justify-center gap-4 divide-y divide-dotted divide-white p-2 "
                : "inset-0 justify-end"
            } absolute flex flex-col items-center opacity-0 hover:opacity-100 bg-blue bg-opacity-50 rounded-t-lg transition-all duration-200`}
          >
            {all && <div className="text-sm text-white text-center">{bio}</div>}

            <div className="flex py-2">
              <Link
                className="border border-white p-3 m-1 hover:border-green hover:bg-green text-white rounded-[25px]"
                to={social.facebook}
                target="blank"
              >
                <BiLogoFacebook />
              </Link>
              <Link
                className="border border-white p-3 m-1 hover:border-green hover:bg-green text-white rounded-[25px]"
                to={social.instagram}
                target="blank"
              >
                <BiLogoInstagram />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center items-center mx-auto p-4">
        <div className="text-xl font-bold">{name}</div>
        <div className="text-base">{title}</div>
        {mobile && (
          <div className="">
            {all && (
              <div className="text-sm text-center font-light py-2">{bio}</div>
            )}
            <div className="flex py-2 justify-center">
              <Link
                className="border border-green p-3 m-1 hover:bg-green hover:text-white text-green rounded-[25px]"
                to={social.facebook}
              >
                <BiLogoFacebook />
              </Link>
              <Link
                className="border border-green p-3 m-1 hover:bg-green hover:text-white text-green rounded-[25px]"
                to={social.instagram}
              >
                <BiLogoInstagram />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InstructorCard;
