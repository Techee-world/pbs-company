import React from 'react';
import WhoNeedUsCard from './WhoNeedUsCard';

const HomeAbout = () => {
  return (
    <div
      style={{
        backgroundImage: ` url("https://www.thechennaiangels.com/wp-content/uploads/2023/03/bca-bg-1.png")`,
      }}
      className="my-6 py-16 px-4 lg:h-[90vh] h-[130vh] "
    >
      <h1 className="text-center text-4xl font-bold helvetic-Head-font text-white" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration='800'>WHO NEEDS US</h1>
      <div className="flex lg:flex-row flex-col gap-20 max-w-7xl justify-center items-center m-auto my-6">
        <WhoNeedUsCard />
        <WhoNeedUsCard />
        <WhoNeedUsCard />
      </div>
    </div>
  );
}

export default HomeAbout;
