import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsCalendar2DateFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { TbFaceIdError } from "react-icons/tb";
import { courses, prices, buttons, sectionHeaders, courseTexts } from "../data";
import { useLanguage } from "../context/LanguageContext";
import { ImageModal } from "./Gallery";

const CourseInfo = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language } = useLanguage();
  const [online, setOnline] = useState(true);
  const { pathname } = useLocation();
  const courseId = pathname.split("/").pop() - 1;
  const [subPage, setSubPage] = useState(1);

  if (!courses[courseId]) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <TbFaceIdError size={60} className="text-red-100" />
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          {sectionHeaders[language].courseNotFound}
        </h1>
        <Link to="/courses">
          <button className="px-6 py-3 bg-green-200 text-white rounded-lg shadow-md hover:bg-green-700 transition-all">
            {buttons[language].viewCourses}
          </button>
        </Link>
      </div>
    );
  }

  const getDates = (x) => {
    if (!type[x]) return null;
    const { startDate, endDate } = type[x];
    return `${startDate} - ${endDate}`;
  };

  const { title, type, text, targetAudience, courseContent, conditions } =
    courses[courseId][language];
  const { id, image } = courses[courseId];
  const price = prices[courseId][language];

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const PriceDisplay = ({ price, discount, valid, symbol }) => (
    <div>
      <div
        className={`${
          discount
            ? "line-through decoration-red-100 decoration-4 text-gray-700 font-light mb-2"
            : "text-orange-500 font-medium"
        } text-xl`}
      >
        {symbol}
        {price}
      </div>
      {discount && (
        <div>
          <div className="text-2xl text-orange-500 animate-bounce">
            {symbol}
            {price - discount}
          </div>
          <div className="text-xs text-gray-500">
            * {courseTexts[language].valid} {valid}
          </div>
        </div>
      )}
    </div>
  );

  const BookingButton = ({ id }) => (
    <Link to={`/course-selection/${id}`}>
      <button className="my-2 bg-orange text-white py-2 px-4 rounded-lg hover:bg-orange-hover transition">
        {buttons[language].bookNow}
      </button>
    </Link>
  );

  const RoomDetails = ({ roomType, price, discount, valid, id, symbol }) => (
    <div className="p-2">
      <div className="underline font-bold mb-3">{roomType}</div>
      <PriceDisplay
        price={price}
        discount={discount}
        valid={valid}
        symbol={symbol}
      />
      <BookingButton id={id} />
    </div>
  );

  return (
    <section className="top-section">
      {/* Header Section */}
      <div className="text-center">
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700">
          {sectionHeaders[language].courseDetails}
        </div>
        <hr className="w-16 mx-auto border-orange-500 mt-4" />
      </div>

      {/* Grid Layout */}
      <div
        className="mt-8 grid grid-cols-12 gap-8"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {/* Image Section */}
        <div className="col-span-8">
          <div className="text-3xl text-[#000] font-bold border-b border-dotted pb-1 my-3">
            {title}
          </div>
          <img
            src={image}
            alt={title}
            className="w-full rounded-lg shadow-lg object-cover hover:scale-[1.01] transition-all min-h-[300px] h-[500px]"
          />
        </div>

        {/* Summary Box */}
        <div className="col-span-4 bg-white p-6 rounded-lg border border-gray hover:scale-[1.01] transition-all">
          <div className="flex text-xl gap-6 mb-4">
            {type.online && (
              <button
                className={`flex-1 text-center ${
                  online ? "border-b border-blue font-bold text-[#000]" : ""
                }`}
                onClick={() => setOnline(true)}
              >
                {buttons[language].online}
              </button>
            )}
            {type.offline && (
              <button
                className={`flex-1 text-center ${
                  !online ? "border-b border-blue font-bold text-[#000]" : ""
                }`}
                onClick={() => setOnline(false)}
              >
                {buttons[language].offline}
              </button>
            )}
          </div>

          <div className="[&>*]:py-2 text-gray-700 divide-y divide-dotted divide-gray">
            <div className="flex items-center gap-2">
              <BsCalendar2DateFill className="text-xl text-green" />
              <span>{online ? getDates("online") : getDates("offline")}</span>
            </div>

            <div className="text-right">
              {online ? (
                <div>
                  <PriceDisplay
                    price={price.online.price}
                    discount={price.online.discount}
                    valid={price.online.valid}
                    symbol={price.symbol}
                  />
                  <BookingButton id={id} />
                </div>
              ) : (
                <div className="flex gap-2 divide-x divide-gray divide-dotted">
                  <RoomDetails
                    roomType="Room (4 People)"
                    price={price.offline.four.price}
                    discount={price.offline.four.discount}
                    valid={price.offline.four.valid}
                    id={id}
                    symbol={price.symbol}
                  />
                  <RoomDetails
                    roomType="Room (2 People)"
                    price={price.offline.two.price}
                    discount={price.offline.two.discount}
                    valid={price.offline.two.valid}
                    id={id}
                    symbol={price.symbol}
                  />
                </div>
              )}
            </div>

            <div className="text-xs text-gray-500">
              <div className="underline">{courseTexts[language].includes}</div>
              {(online ? price.online.includes : price.offline.includes).map(
                (item, index) => (
                  <div key={index}>
                    {index + 1}. {item}
                  </div>
                )
              )}
            </div>

            <div className="text-xs text-gray-500">** {price.note}</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-8">
          <div
            className="flex text-lg mb-4 rounded-lg shadow-lg [&>*]:p-4"
            data-aos="zoom-in-right"
          >
            <button
              className={`flex-1 text-center rounded-l-lg hover:scale-[1.02] hover:bg-gray transition-all ${
                subPage === 1
                  ? "bg-gray-100 font-bold text-[#000]"
                  : "bg-white "
              }`}
              onClick={() => setSubPage(1)}
            >
              {courseTexts[language].overview}
            </button>
            <button
              className={`flex-1 text-center hover:scale-[1.02] hover:bg-gray transition-all ${
                subPage === 2
                  ? "bg-gray-100 font-bold text-[#000]"
                  : "bg-white "
              }`}
              onClick={() => setSubPage(2)}
            >
              {courseTexts[language].courseTimings}
            </button>
            {type.offline && (
              <button
                className={`flex-1 text-center hover:scale-[1.02] hover:bg-gray transition-all ${
                  subPage === 3
                    ? "bg-gray-100 font-bold text-[#000]"
                    : "bg-white "
                }`}
                onClick={() => setSubPage(3)}
              >
                {courseTexts[language].accommodation}
              </button>
            )}
            <button
              className={`flex-1 text-center rounded-r-lg hover:scale-[1.02] hover:bg-gray transition-all ${
                subPage === 4
                  ? "bg-gray-100 font-bold text-[#000]"
                  : "bg-white "
              }`}
              onClick={() => setSubPage(4)}
            >
              {courseTexts[language].conditions}
            </button>
          </div>

          {subPage === 1 && (
            <div className="grid grid-col-12 gap-4" data-aos="zoom-in-right">
              <div className="col-span-12 p-4 bg-white rounded-lg hover:scale-[1.01] transition-all border border-gray">
                <div className="text-xl font-bold">
                  {courseTexts[language].description}
                </div>
                <div className="text-gray-700 leading-relaxed">{text}</div>
              </div>
              <div className="col-span-4 p-4 bg-egreen-70 rounded-lg hover:scale-[1.01] transition-all border border-gray">
                <div className="text-xl font-bold">
                  {courseTexts[language].ideal}
                </div>
                <ul className="list-disc list-inside text-gray-700">
                  {targetAudience.map((i, idx) => (
                    <li key={idx}>{i}</li>
                  ))}
                </ul>
              </div>
              <div className="col-span-8 bg-yellow p-4 rounded-lg hover:scale-[1.01] transition-all border border-gray">
                <div className="text-xl font-bold">
                  {courseTexts[language].courseContent}
                </div>
                <ul className="list-disc list-inside text-gray-700">
                  {courseContent.map((i, idx) => (
                    <li key={idx}>{i}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {subPage === 2 && (
            <div className="grid grid-cols-12 gap-4" data-aos="zoom-in-right">
              {type.online && (
                <div
                  className={`${
                    type.offline ? "col-span-6" : "col-span-12"
                  } p-4 bg-egreen-70 rounded-lg hover:scale-[1.01] transition-all border border-gray divide-y divide-dotted`}
                >
                  <div className="pb-3">
                    <div className="text-xl font-bold">
                      1. {courseTexts[language].online}
                      {type.online.totalHours && (
                        <span className="text-xs font-semibold text-red-100">
                          ({type.online.totalHours}{" "}
                          {courseTexts[language].hours})
                        </span>
                      )}
                    </div>
                    <div className="space-y-2 mt-2 ml-5 [&>*]:leading-tight text-sm">
                      <div>
                        <strong>{courseTexts[language].duration}</strong>{" "}
                        {getDates("online")}
                      </div>
                      <div>
                        <strong>{courseTexts[language].sadhna}</strong>
                        {" " + type.online.schedule.sadhana.days} at
                        {" " + type.online.schedule.sadhana.time + " "}
                        {type.online.schedule.sadhana.hours && (
                          <span className="text-xs font-semibold text-red-100">
                            ({type.online.schedule.sadhana.hours}{" "}
                            {courseTexts[language].hours})
                          </span>
                        )}
                      </div>
                      <div>
                        <strong>{courseTexts[language].theory}</strong>
                        {" " + type.online.schedule.theory.days} at
                        {" " + type.online.schedule.theory.time + " "}
                        {type.online.schedule.theory.hours && (
                          <span className="text-xs font-semibold text-red-100">
                            ({type.online.schedule.theory.hours}{" "}
                            {courseTexts[language].hours})
                          </span>
                        )}
                      </div>
                      {type.online.schedule.retreat && (
                        <div>
                          <strong>{courseTexts[language].retreat}</strong>
                          {" " + type.online.schedule.retreat.duration} from
                          {" " + type.online.schedule.retreat.dates + " "}
                          <span className="text-xs font-semibold text-red-100">
                            ({type.online.schedule.retreat.hours}{" "}
                            {courseTexts[language].hours})
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  {type.online.homework && (
                    <div className="pt-3">
                      <div className="text-xl font-bold">
                        2. {courseTexts[language].homework}
                        <span className="text-xs font-semibold text-red-100">
                          ({type.online.homework.hours}{" "}
                          {courseTexts[language].hours})
                        </span>
                      </div>
                      <div className="space-y-2 mt-2 ml-5 [&>*]:leading-tight text-sm">
                        <div>
                          <strong>{courseTexts[language].duration}</strong>{" "}
                          {type.online.homework.duration}
                        </div>

                        <div>
                          <strong>{courseTexts[language].selfStudy}</strong>{" "}
                          {type.online.homework.selfStudy}{" "}
                          {courseTexts[language].hours}
                        </div>
                        <div>
                          <strong>{courseTexts[language].karma}</strong>{" "}
                          {type.online.homework.karmaTeaching}{" "}
                          {courseTexts[language].hours}
                        </div>
                        <div>
                          <strong>{courseTexts[language].meditation}</strong>{" "}
                          {type.online.homework.meditationPractice} days
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {type.offline && (
                <div
                  className={`${
                    type.online ? "col-span-6" : "col-span-12"
                  } p-4 bg-yellow rounded-lg hover:scale-[1.01] transition-all border border-gray divide-y divide-dotted`}
                >
                  <div className="pb-3">
                    <div className="text-xl font-bold">
                      1. {courseTexts[language].offline}
                      <span className="text-xs font-semibold text-red-100">
                        ({type.offline.totalHours} {courseTexts[language].hours}
                        )
                      </span>
                    </div>
                    <div className="space-y-2 mt-2 ml-5 [&>*]:leading-tight text-sm">
                      <div>
                        <strong>{courseTexts[language].duration}</strong>{" "}
                        {getDates("offline")}
                      </div>
                      <div>
                        <strong>Total Days:</strong> {type.offline.days} days
                      </div>
                    </div>
                  </div>
                  <div className="pt-3">
                    <div className="text-xl font-bold">
                      2. {courseTexts[language].homework}
                      <span className="text-xs font-semibold text-red-100">
                        ({type.offline.homework.hours}{" "}
                        {courseTexts[language].hours})
                      </span>
                    </div>
                    <div className="space-y-2 mt-2 ml-5 [&>*]:leading-tight text-sm">
                      <div>
                        <strong>{courseTexts[language].duration}</strong>{" "}
                        {type.offline.homework.duration}
                      </div>

                      <div>
                        <strong>{courseTexts[language].selfStudy}</strong>{" "}
                        {type.offline.homework.selfStudy}{" "}
                        {courseTexts[language].hours}
                      </div>
                      <div>
                        <strong>{courseTexts[language].karma}</strong>{" "}
                        {type.offline.homework.karmaTeaching}{" "}
                        {courseTexts[language].hours}
                      </div>
                      <div>
                        <strong>{courseTexts[language].meditation}</strong>{" "}
                        {type.offline.homework.meditationPractice} days
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {subPage === 3 && (
            <div className="grid grid-cols-12 gap-4" data-aos="zoom-in-right">
              <div className="col-span-12 p-4 rounded-lg border border-gray">
                <div className="text-2xl font-bold mb-4 underline">
                  {courseTexts[language].two}
                </div>
                <div className="grid grid-cols-2 grid-rows-3 gap-3 w-full h-auto">
                  <div className="row-span-2 w-auto h-[32rem] bg-yellow rounded-lg">
                    {/* <img
                    src={image}
                    className="w-auto h-auto object-contain rounded-lg"
                    onClick={() => openModal(image)}
                  /> */}
                  </div>
                  <div className="bg-yellow rounded-lg">
                    {/* <img
                    src={image}
                    className="w-auto h-auto object-contain rounded-lg"
                    onClick={() => openModal(image)}
                  /> */}
                  </div>
                  <div className="bg-yellow rounded-lg">
                    {/* <img
                    src={image}
                    className="w-auto h-auto object-contain rounded-lg"
                    onClick={() => openModal(image)}
                  /> */}
                  </div>
                  <div className="bg-yellow rounded-lg">
                    {/* <img
                    src={image}
                    className="w-auto h-auto object-contain rounded-lg"
                    onClick={() => openModal(image)}
                  /> */}
                  </div>
                  <div className="bg-yellow rounded-lg">
                    {/* <img
                    src={image}
                    className="w-auto h-auto object-contain rounded-lg"
                    onClick={() => openModal(image)}
                  /> */}
                  </div>
                </div>
              </div>
              <div className="col-span-12 p-4 rounded-lg border border-gray">
                <div className="text-2xl font-bold mb-4 underline">
                  {courseTexts[language].four}
                </div>
                <div className="grid grid-cols-2 grid-rows-3 gap-3 w-full h-auto ">
                  <div className="row-span-2 w-auto h-80 bg-yellow rounded-lg">
                    {/* <img
                    src={image}
                    className="w-auto h-auto object-contain rounded-lg"
                    onClick={() => openModal(image)}
                  /> */}
                  </div>
                  <div className="bg-yellow rounded-lg">
                    {/* <img
                    src={image}
                    className="w-auto h-auto object-contain rounded-lg"
                    onClick={() => openModal(image)}
                  /> */}
                  </div>
                  <div className="bg-yellow rounded-lg">
                    {/* <img
                    src={image}
                    className="w-auto h-auto object-contain rounded-lg"
                    onClick={() => openModal(image)}
                  /> */}
                  </div>
                  <div className="bg-yellow rounded-lg">
                    {/* <img
                    src={image}
                    className="w-auto h-auto object-contain rounded-lg"
                    onClick={() => openModal(image)}
                  /> */}
                  </div>
                  <div className="bg-yellow rounded-lg">
                    {/* <img
                    src={image}
                    className="w-auto h-auto object-contain rounded-lg"
                    onClick={() => openModal(image)}
                  /> */}
                  </div>
                </div>
              </div>
            </div>
          )}

          {subPage === 4 && (
            <div className="grid grid-cols-12 gap-4" data-aos="zoom-in-right">
              <div className="col-span-12 p-6 bg-white rounded-lg shadow-lg hover:scale-[1.01] transition-all border border-gray divide-y divide-gray">
                <div className="text-2xl font-bold text-center text-gray-800 mb-4">
                  {courseTexts[language].certificate}
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2 py-3">
                  {conditions.map((condition, idx) => (
                    <li key={idx} className="flex items-center">
                      <IoIosArrowForward className="w-auto h-auto mr-1" />
                      <span>{condition}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 text-center text-sm text-gray-500">
                  * {courseTexts[language].assess}
                </div>
              </div>
            </div>
          )}

          <ImageModal
            isOpen={isModalOpen}
            image={selectedImage}
            onClose={closeModal}
          />
        </div>

        {/* Other Courses Section */}
        <div className="col-span-4 " data-aos="fade-left">
          <div className="bg-white p-6 rounded-lg border border-gray h-[400px] hover:scale-[1.01] transition-all">
            <div className="text-2xl font-semibold text-orange-500 mb-4">
              {courseTexts[language].otherCourses}
            </div>
            <ul className="">
              {courses.map(
                (i, idx) =>
                  idx !== courseId && (
                    <li key={idx}>
                      <Link to={`/courses/${idx}`} className="block py-4">
                        <div className="text-base font-semibold text-green-700 hover:text-orange-500   leading-tight">
                          {i[language].title}
                        </div>
                      </Link>
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Link to="/courses">
          <button className="bg-orange-200 text-lg text-white rounded-lg mt-8 py-2 px-6 hover:bg-orange transition-all">
            {buttons[language].viewAll}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CourseInfo;
