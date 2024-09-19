
import React from 'react';
import WhoNeedUsCard from './WhoNeedUsCard';
// import blueBackground from '../../../public/bca-bg-1.png'

const HomeAbout = () => {

   const content = [
    {
      title:"Startups with Unique Ideas",
      url:'https://tegain-website-static-media-bucket.s3.ap-south-1.amazonaws.com/assets/images/17-05-2024/it-collaborate.svg',
      des:"Launch your venture with a solid foundation. We offer tailored advice and strategies to kickstart your success"
    },
    {
      title:"Business aiming to expand Horizons",
      url:'https://tegain-website-static-media-bucket.s3.ap-south-1.amazonaws.com/assets/images/17-05-2024/it-recruit.svg',
      des:"Ready to take your business to new heights? Our seasoned consultants provide insights and tactics to fuel your growth and expansion"
    },
    {
      title:"Business facing Challenges",
      url:'https://tegain-website-static-media-bucket.s3.ap-south-1.amazonaws.com/assets/images/17-05-2024/back-office.svg',
      des:"Overcome obstacles with ease. We offer practical solutions to navigate through rough patches and emerge stronger than ever. Partner with us today and let's chart a course to your business success!"
    },
    {
      title:"Startups with Unique Ideas",
      url:'https://tegain-website-static-media-bucket.s3.ap-south-1.amazonaws.com/assets/images/17-05-2024/business-connect.svg',
      des:"Launch your venture with a solid foundation. We offer tailored advice and strategies to kickstart your success"
    },
    {
      title:"Business aiming to expand Horizons",
      url:'https://tegain-website-static-media-bucket.s3.ap-south-1.amazonaws.com/assets/images/17-05-2024/project-control-bg.svg',
      des:"Launch your venture with a solid foundation. We offer tailored advice and strategies to kickstart your success"
    },
    {
      title:"Business facing Challenges",
      url:'https://tegain-website-static-media-bucket.s3.ap-south-1.amazonaws.com/assets/images/17-05-2024/evening-company.svg',
      des:"Launch your venture with a solid foundation. We offer tailored advice and strategies to kickstart your success"
    }
   ]
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
        className="text-center shadow text-3xl text-shadow sm:text-5xl font-bold helvetic-sub-title-font   mb-8 sm:mb-12" 
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom" 
        data-aos-duration='800'
      >
        Who Needs Us
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 2xl:max-w-7xl max-w-6xl mx-auto">
      {content.map((item)=>
        <WhoNeedUsCard title={item.title} des={item.des} url={item.url} />
        )}
      </div>
    </div>
  );
}

export default HomeAbout;