import React from 'react';
import WhoNeedUsCard from './WhoNeedUsCard';

const HomeAbout = () => {
  https://www.thechennaiangels.com/wp-content/uploads/2023/03/bca-bg-1.png
  return (
    <div
      style={{
        backgroundImage: ` url("https://www.thechennaiangels.com/wp-content/uploads/2023/03/bca-bg-1.png")`,
      }}
      className="my-6 py-16 px-4 h-[90vh] "
    >
      <h1 className="text-center text-4xl font-bold helvetic-Head-font text-white" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration='800'>WHO NEEDS US</h1>
      <div className="flex gap-20 max-w-7xl justify-center items-center m-auto my-6">
        {/* Uncomment the paragraph if needed */}
        {/* 
        <p className="text-lg text-gray-100 text-center my-6">
          Startups with Unique Ideas: Launch your venture with a solid foundation. We offer tailored advice and strategies to kickstart your success.
          Business aiming to expand Horizons: Ready to take your business to new heights? Our seasoned consultants provide insights and tactics to fuel your growth and expansion.
          Business facing Challenges: Overcome obstacles with ease. We offer practical solutions to navigate through rough patches and emerge stronger than ever.
          Partner with us today and let's chart a course to your business success!
        </p>
        */}
        <WhoNeedUsCard />
        <WhoNeedUsCard />
        <WhoNeedUsCard />
      </div>
    </div>
  );
}

export default HomeAbout;
