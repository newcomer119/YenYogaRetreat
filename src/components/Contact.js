import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const form = useRef();
  const { language } = useLanguage();

  // Define text based on the selected language
  const texts = {
    en: {
      title: "Get in Touch",
      description: "Get in touch with us for any kind of help. We are here to give you the best advice and to help you find your yoga course.",
      placeholders: {
        firstName: "First name",
        lastName: "Last name",
        email: "Email Address",
        message: "Message",
      },
      buttonText: "Send Message",
    },
    vn: {
      title: "Liên Hệ Với Chúng Tôi",
      description: "Liên hệ với chúng tôi để được hỗ trợ. Chúng tôi ở đây để cung cấp cho bạn những lời khuyên tốt nhất và giúp bạn tìm khóa học yoga của mình.",
      placeholders: {
        firstName: "Tên",
        lastName: "Họ",
        email: "Địa chỉ email",
        message: "Tin nhắn",
      },
      buttonText: "Gửi Tin Nhắn",
    },
  };

  return (
    <section id="contact" className="pt-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-[74px] bg-contact bg-no-repeat bg-cover min-h-[600px]">
          {/* Text */}
          <div className="flex-1 flex flex-col justify-center pl-8">
            <h2 className="h2 mb-3 lg:mb-7">
              {texts[language].title} {/* Title */}
            </h2>
            <p className="mb-7 lg:mb-0 text-center">
              {texts[language].description} {/* Description */}
            </p>
          </div>
          {/* Form */}
          <form
            ref={form}
            className="flex-1 bg-white shadow-primary rounded-[20px] p-5 lg:p-10 flex flex-col gap-y-5 max-h-[600px] lg:-mt-20"
          >
            <input
              className="form-control"
              placeholder={texts[language].placeholders.firstName} // Fixed here
              name="user_firstname"
              required
              type="text"
            />
            <input
              className="form-control"
              placeholder={texts[language].placeholders.lastName} // Fixed here
              name="user_lastname"
              required
              type="text"
            />
            <input
              className="form-control"
              placeholder={texts[language].placeholders.email} // Fixed here
              name="user_email"
              required
              type="email"
            />
            <textarea
              className="form-control py-5 h-[165px] resize-none"
              placeholder={texts[language].placeholders.message} // Fixed here
              name="user_message"
            ></textarea>
            <button className="btn btn-lg btn-orange">
              {texts[language].buttonText} {/* Button Text */}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
