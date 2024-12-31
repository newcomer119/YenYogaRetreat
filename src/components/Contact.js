import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../context/LanguageContext";
import { buttons, sectionHeaders, contact } from "../data";

const Contact = () => {
  const form = useRef();
  const { language } = useLanguage();

  return (
    <section id="contact" className="pt-12 section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-[74px] bg-contact bg-no-repeat bg-cover min-h-[600px]">
          {/* Text */}
          <div className="flex-1 flex flex-col justify-center pl-8 ">
            <h2 className="h2 mb-5 tab:mb-8 lg:mb-7 sectionHeaders text-cta1">
              {sectionHeaders[language].contact} {/* Title */}
            </h2>
            <p className="mb-7 lg:mb-0 text-center lap:text-xl lap2:text-2xl text-subtext">
              {contact[language].text} {/* Description */}
            </p>
          </div>
          {/* Form */}
          <form
            ref={form}
            className="flex-1 bg-white shadow-primary rounded-[20px] p-5 lg:p-10 flex flex-col gap-y-5 max-h-[600px] lg:-mt-20 hover:scale-[1.02] transition mr-5"
          >
            <input
              className="form-control"
              placeholder={contact[language].placeholders.firstName} // Fixed here
              name="user_firstname"
              required
              type="text"
            />
            <input
              className="form-control"
              placeholder={contact[language].placeholders.lastName} // Fixed here
              name="user_lastname"
              required
              type="text"
            />
            <input
              className="form-control"
              placeholder={contact[language].placeholders.email} // Fixed here
              name="user_email"
              required
              type="email"
            />
            <textarea
              className="form-control py-5 h-[165px] resize-none"
              placeholder={contact[language].placeholders.message} // Fixed here
              name="user_message"
            ></textarea>
            <button className="btn w-full bg-cta2 text-white rounded-md">
              {buttons[language].sendMessage} {/* Button Text */}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
