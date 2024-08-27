import React from 'react';
import WhoNeedUsCard from './WhoNeedUsCard';

const HomeAbout = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://www.thechennaiangels.com/wp-content/uploads/2023/03/bca-bg-1.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="my-6 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 min-h-screen h-[65rem] md:h-[55rem] lg:h-[15rem] flex flex-col justify-start"
    >
      <h1 
        className="text-center text-3xl sm:text-4xl font-bold helvetic-Head-font text-white mb-8 sm:mb-12" 
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