import React, { useState } from "react";

// import data
import { pricing } from "../data";

const Pricing = () => {
  const[index, setIndex] = useState(0)
  return (
    <section className="section-sm lg:section-lg bg-section">
      <div className="container mx-auto">
        {/* text  */}
        <div className="text-center mb-7 lg:mb-[70px]">
          <h2 className="h2 mb-3 lg:mb-[18px]">Pick A Pricing Plan</h2>
          <p className="max-w-[398px] mx-auto">
            Pick a pricing plan and get started your journey with us for build
            your body and mind
          </p>
        </div>
        {/* cards  */}
        <div className="flex flex-col mx-auto items-center gap-y-5 
        lg:flex-row lg:gap-x-[39px]">
          {pricing.map((card, currentIndex) => {
            // destructure card
            const {title,price,list,buttonIcon,buttonText,dealy} = card;
            return <div onClick={()=> setIndex(currentIndex)} className="bg-white w-full max-w-[368px] min-h-[668px] h-full 
            cursor-pointer relative" key={currentIndex}>
              {/* card top  */}
              <div className={`${index === currentIndex ? 'bg-orange-100 text-white' : 
              'bg-white text-heading'} text-center bg-orange pt-[70px] border-b 
              border-stroke-3 transition`}>
                <div className="text-[24px] font-medium mb-[10px]">
                  {title}
                </div>
                <div className="text-[34px] font-semibold">{price}</div>
              </div>
              <div className="px-[30px] pt-[18px] pb-[30px]">
                <p className="text-center mb-6 text-sm">Discover your favorite class!</p>
                {/* card list  */}
                <ul className="flex flex-col gap-3 mb-10">
                  {list.map((item,index) => {
                    // destructure item
                    const{icon,name} = item;
                     return(
                      <li className='border border-stroke-3 p-4 
                      rounded-md flex items-center gap-4'
                        key={index}>
                        <div className="flex justify-center items-center
                         bg-green-100 w-7 h-7 text-2xl text-green-300 
                         rounded-full">{icon}</div>
                        {name}
                      </li>
                     )
                  })}
                </ul>
                {/* button  */}
                <div className="absolute bottom-[30px] w-full
                 right-0 left-0 px-[30px]">
                <button className={`${index === currentIndex ? 'bg-orange-100' : 
                  'border-orange-100'} w-full h-[50px] rounded border border-orange 
                  flex items-center justify-center text-orange font-medium transition relative `}>
                    {buttonText}
                    {/* icon   */}
                    <div className={`${index === currentIndex ? 'bg-orange-200' : 
                    'bg-orange-100'} w-[50px] h-[50px] flex justify center 
                    items-center absolute right-0 rounded text-white`}></div>
                  </button>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
