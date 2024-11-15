import React from 'react';
import { MdEmail } from 'react-icons/md'

const Newsletter = () => {
  return (
    <section className='section-sm lg:section-lg
     bg-green min-h-[520px]'>
      <div className="container mx-auto">
        {/* text  */}
        <div className='border-[8px] border-green-300 rounded-lg 
        text-center pt-[70px] pb-12'>
          <h4 className='text-[26px] text-white font-bold mb-[14px]'>
            Subscribe Our NewsLetter
          </h4>
          <p className='text-green mb-12'>Subscribe our newsletter for further update 
            about us </p>
            {/* form  */}
            <form className='max-w-[752px] mx-auto relative
            flex flex-col lg:flex-row gap-y-6 p-4 lg:p-0 gap-x-4'>
              <div className='w-full relative flex'>
                {/* icon  */}
                <div className='absolute left-2 h-full w-12 flex
                 justify-center items-center text-2xl text-green-300'>
                  <MdEmail/>
                </div>
                {/* email input  */}
                <input type="email" className="form-control w-full
                 border-green-300 bg-transparent outline-none 
                 placeholder:text-green-200 text-white pl-[60px]"
                 placeholder='Enter Your Email Here'/>
              </div>
              {/* button  */}
              <button className="bt btn-lg btn-orange text-white 
              w-full lg:max-w-[180px]">Get Started</button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
