import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../context/LanguageContext";
import { buttons, sectionHeaders, contact } from "../data";

const Contact = () => {
  const form = useRef();
  const { language } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    emailjs
      .sendForm(
        "service_1cfczub", // Your Service ID
        "template_sx2h3pw", // Your Template ID
        form.current,
        "S--CU2WLZ4O_q6-WA" // Your Public Key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setMessage("Your message has been sent successfully!");
          form.current.reset(); // Reset form after successful submission
        },
        (error) => {
          console.error("Email failed to send:", error.text);
          setMessage("Failed to send message. Please try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="pt-12 section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-[74px] bg-contact bg-no-repeat bg-cover min-h-[600px]">
          {/* Text */}
          <div className="flex-1 flex flex-col justify-center pl-8">
            <h2 className="h2 mb-5 lg:mb-7 sectionHeaders text-cta1">
              {sectionHeaders[language].contact}
            </h2>
            <p className="mb-7 lg:mb-0 text-center lap:text-xl lap2:text-2xl text-subtext">
              {contact[language].text}
            </p>
          </div>
          {/* Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex-1 bg-white shadow-primary rounded-[20px] p-5 lg:p-10 flex flex-col gap-y-5 max-h-[600px] lg:-mt-20 hover:scale-[1.02] transition mr-5"
          >
            <input
              className="form-control"
              placeholder={contact[language].placeholders.firstName}
              name="user_firstname"
              required
              type="text"
            />
            <input
              className="form-control"
              placeholder={contact[language].placeholders.lastName}
              name="user_lastname"
              required
              type="text"
            />
            <input
              className="form-control"
              placeholder={contact[language].placeholders.email}
              name="user_email"
              required
              type="email"
            />
            <textarea
              className="form-control py-5 h-[165px] resize-none"
              placeholder={contact[language].placeholders.message}
              name="user_message"
              required
            ></textarea>
            <button
              type="submit"
              className="btn w-full bg-cta2 text-white rounded-md"
              disabled={loading}
            >
              {loading ? "Sending..." : buttons[language].sendMessage}
            </button>
            {message && (
              <p className="text-center mt-2 text-green-600">{message}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
