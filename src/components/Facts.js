import React from "react";
import CountUp from "react-countup";
import Image from "../assets/img/signature.png";
import { inst, facts, sectionHeaders } from "../data";
import { useLanguage } from "../context/LanguageContext";
import InstructorCard from "./InstructorCard";
import { Link } from "react-router-dom";

const Facts = () => {
  const { language } = useLanguage();

  return (
    <section>
      <div className="section flex flex-col-reverse lap:flex-row lap:items-center gap-10">
        {/* numbers */}
        <div className="grid grid-cols-2 gap-4 lap:gap-10 lap:flex-1">
          {facts.map((item, index) => {
            // destructure item
            const { startNumber, endNumber, unit, title, desc } =
              item[language];
            return (
              <div
                className="col-span-1 flex flex-col items-center text-center text-body"
                key={index}
              >
                <div className="text-xl lap1:text-2xl big:text-4xl mb-2 text-link font-bold">
                  <CountUp
                    start={startNumber}
                    end={endNumber}
                    duration={2}
                    enableScrollSpy
                  />
                  {unit}+
                </div>
                <div className="text-2xl lap1:text-3xl big:text-4xl font-bold text-headings1 mb-1 lap2:mb-2">
                  {title}
                </div>
                <div className="max-w-60 big:text-xl">{desc}</div>
              </div>
            );
          })}
        </div>
        {/* Text  */}
        <div className="flex flex-col-reverse lap:flex-col flex-1">
          <div className="flex flex-row flex-wrap mob2:flex-nowrap gap-5 justify-center items-center">
            {inst.map((instructor) => (
              <Link
                to={`/trainers/${instructor.id}`}
                data-aos="flip-right"
                data-aos-duration="1500"
              >
                <InstructorCard instructor={instructor[language]} all={true} />
              </Link>
            ))}
          </div>
          <div className="sectionHeaders lap:mt-6 lap:mb-0">{sectionHeaders[language].facts}</div>
        </div>
      </div>
    </section>
  );
};

export default Facts;
