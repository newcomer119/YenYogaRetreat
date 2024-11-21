import React, { useState, useEffect, useRef } from "react";

// import emailjs
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();
  return (
    <section id="contact" className="section-sm lg:pt-[250px]">
      <div className="container mx-auto">
        <div
          className="flex flex-col lg:flex-row lg:gap-x-[74px] 
        bg-contact bg-no-repeat bg-cover min-h=[600px]"
        >
          {/* text  */}
          <div
            className="flex-1 flex flex-col 
          justify-center pl-8"
          >
            <h2 className="h2 mb-3 lg:mb-7">
              Get in touch with Us for yoga course
            </h2>
            <p className="mb-7 lg:mb-0">
              Get in touch with use for any kind of help. We are here to give
              you the best and also here to help you to find your yoga course.
            </p>
          </div>
          {/* form  */}
          <form
             ref={form} className="flex-1 bg-white shadow-primary 
          rounded-[20px] p-5 lg:p-10 flex flex-col gap-y-5 
          max-h-[600px] lg:-mt-20"
          >
            <input
              className="form-control"
              placeholder="First name"
              name="user_firstname"
              required
              type="text"
            />
            <input
              className="form-control"
              placeholder="Last name"
              name="user_lasttname"
              required
              type="text"
            />
            <input
              className="form-control"
              placeholder="Email Address"
              name="user_email"
              required
              type="email"
            />
            <textarea
              className="form-control py-5 h-[165px]
              resize-none"
              placeholder="Message"
              name="user_message"
            ></textarea>
            <button className="btn btn-lg btn-orange">Send Message </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
