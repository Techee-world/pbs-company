
import React from 'react';
import WhoNeedUsCard from './WhoNeedUsCard';
import blueBackground from '../../../public/bca-bg-1.png'

const HomeAbout = () => {
  return (
    <div
      style={{
        backgroundImage:` url(${blueBackground.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="my-6 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 min-h-screen g h-[65rem] md:h-[55rem] lg:h-[4rem] items-center flex flex-col justify-center"
    >
      <h1 
        className="text-center text-3xl sm:text-5xl font-bold helvetic-Head-font text-white mb-8 sm:mb-12" 
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom" 
        data-aos-duration='800'
      >
        WHO NEEDS US
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 max-w-7xl mx-auto">
        <WhoNeedUsCard />
        <WhoNeedUsCard />
        <WhoNeedUsCard />
      </div>
    </div>
  );
}

export default HomeAbout;