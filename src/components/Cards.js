import React from 'react';

// import Cards
import CardImage from '../assets/img/cards/card-1.png'
import CardImage1 from '../assets/img/cards/card-2.png'
import CardImage2 from '../assets/img/cards/card-3.png'


const Cards = () => {
  return <section className='bg-cardsBg min-h-[260px] pb-[55px] lg:mt-24 mt-24'>
    <div className="container mx-auto flex flex-col lg:flex-row gap-x-[32px]">
      {/* card group */}
      <div className='flex-1 flex gap-x-[15px] lg:gap-x-[32px] -mt-[38px]
      z-10 lg:-mt-[77px] mx-auto'>
        {/* card 1 */} 
        <div className='bg-white w-full max-w-[282px] p-[14px] lg:p-[26px] shadow-2xl rounded-md max-h-[282px]'>
          {/* card text */}
          <div className='flex items-center mb-[18px] lg:mb-[28px]'>
            <h4 className='text-lg lg:text-2xl 
            lg:heading-7 font-bold text-heading mr-8'>
              Make Your Own Plan For Yoga.</h4>
            <h2>1</h2>
          </div>
          {/* card image */}
          <div>
            <img src={CardImage} alt="" />
          </div>
        </div>
        {/* card 2 */}
        {/* <div></div> */}
        <div className='bg-white w-full max-w-[282px] p-[14px] lg:p-[26px] shadow-2xl rounded-md max-h-[282px]'>
          {/* card text */}
          <div className='flex items-center mb-[18px] lg:mb-[28px]'>
            <h4 className='text-lg lg:text-2xl 
            lg:heading-7 font-bold text-heading mr-8'>
              Find yourself a yoga mentor.</h4>
            <h2>2</h2>
          </div>
          {/* card image */}
          <div>
            <img src={CardImage1} alt="" />
          </div>
        </div>
      </div>
      {/* card 3 */}
      <div className='bg-white w-full max-w-[542px] mx-auto p-[14px] flex-1 lg:p-[26px] mt-4
      lg:-mt-[77px] z-10 shadow-2xl rounded-md flex justify-between items-start'>
        {/* card text */}
        <div className='max-w-[240px]'>
          <div className='flex items-center mb-4 lg:mb-8'>
            <h4 className='text-lg lg:text-2xl lg:leading-7 font-bold text-heading mr-8'>Every Day Open Master Classes </h4>
            <h2 className='h2 text-stroke-2'>3</h2>
          </div>
          <p className='mb-4'>
            We're boosting online yoga by enabling 
            anyone in the world to 
            learn from the best
          </p>
          <a className='text-xs lg:text-sm font-bold uppercase text-heading' href='#'>Read More</a>
        </div>
        {/* card image */}
        <div>
          <img src={CardImage2}></img>
        </div>
      </div>
    </div>
  </section>;
};

export default Cards;
