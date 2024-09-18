
import React from 'react';
import WhoNeedUsCard from './WhoNeedUsCard';
// import blueBackground from '../../../public/bca-bg-1.png'

const HomeAbout = () => {
  return (
    <div
      style={{
        backgroundImage:` url('https://www.thechennaiangels.com/wp-content/uploads/2023/03/bg-founder-voice.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 min-h-1/2  g h-[65rem] md:h-[55rem] lg:h-auto items-center flex flex-col justify-start"
    >
      <h1 
        className="text-center shadow text-3xl text-shadow sm:text-5xl font-bold helvetic-Head-font text-gray-900  mb-8 sm:mb-12" 
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom" 
        data-aos-duration='800'
      >
        WHO <span className='text-blue-600'>NEEDS US </span> 
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 2xl:max-w-7xl max-w-6xl mx-auto">
        <WhoNeedUsCard url='https://tegain-website-static-media-bucket.s3.ap-south-1.amazonaws.com/assets/images/17-05-2024/it-collaborate.svg' />
        <WhoNeedUsCard url='https://tegain-website-static-media-bucket.s3.ap-south-1.amazonaws.com/assets/images/17-05-2024/it-recruit.svg' />
        <WhoNeedUsCard url='https://tegain-website-static-media-bucket.s3.ap-south-1.amazonaws.com/assets/images/17-05-2024/back-office.svg' />
        <WhoNeedUsCard url='https://tegain-website-static-media-bucket.s3.ap-south-1.amazonaws.com/assets/images/17-05-2024/business-connect.svg' />
        <WhoNeedUsCard url='https://tegain-website-static-media-bucket.s3.ap-south-1.amazonaws.com/assets/images/17-05-2024/project-control-bg.svg' />
        <WhoNeedUsCard url='https://tegain-website-static-media-bucket.s3.ap-south-1.amazonaws.com/assets/images/17-05-2024/evening-company.svg' />
      </div>
    </div>
  );
}

export default HomeAbout;