import React from "react";
import CountUp from "react-countup";
import Image from "../assets/img/signature.png";
import { facts, sectionHeaders } from "../data";
import { useLanguage } from "../context/LanguageContext";

const Facts = () => {
  const { language } = useLanguage();

  return (
    <section className="py-12">
      <div
        className="container mx-auto flex flex-col 
    lg:flex-row lg:gap-x-[30px]"
      >
        {/* numbers */}
        <div className="bg-flex-1 flex flex-wrap gap-x-[5%] gap-y-[35px]">
          {facts.map((item, index) => {
            // destructure item
            const { startNumber, endNumber, unit, title, desc } =
              item[language];
            return (
              <div className="w-[45%] flex flex-col items-center" key={index}>
                <h2 className="h2 mb-2 lg:mb-4 text-center">
                  <CountUp
                    start={startNumber}
                    end={endNumber}
                    duration={2}
                    enableScrollSpy
                  />
                  {unit}+
                </h2>
                <div className="text-xl font-bold text-heading mb-3 text-center">
                  {title}
                </div>
                <p className="max-w-[240px] text-center">{desc}</p>
              </div>
            );
          })}
        </div>
        {/* Text  */}
        <div className="flex-1 -order-1 lg:order-none flex flex-col justify-center h-full lg:pl-[100px]">
          <h2 className="h2 mb-12 max-w-[295px] md:max-w-none text-left">
            {sectionHeaders[language].facts}
          </h2>
          <div>
            <img src={Image} alt="" />
          </div>
          <div className="text-lg mb-6 font-bold text-heading">
            Yen{" "}
            <span
              className="text-base text-paragraph
          font-normal"
            >
              /Founder
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;
