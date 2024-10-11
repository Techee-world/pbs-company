
import React from 'react';
import WhoNeedUsCard from './WhoNeedUsCard';
// import blueBackground from '../../../public/bca-bg-1.png'

const HomeAbout = () => {

   const content = [
    {
      title:"Entrepreneurs with Ambitious Vision to Start  Business",
      url:'https://tegain-website-static-media-bucket.s3.ap-south-1.amazonaws.com/assets/images/17-05-2024/it-collaborate.svg',
      des:"Embark on your entrepreneurial journey with a strong foundation. We provide personalized guidance and innovative strategies to help you turn your business idea into a reality"
    },
    // {
    //   title:"Startups with Unique Ideas",
    //   url:'https://tegain-website-static-media-bucket.s3.ap-south-1.amazonaws.com/assets/images/17-05-2024/it-collaborate.svg',
    //   des:"Launch your venture with a solid foundation. We offer tailored advice and strategies to kickstart your success"
    // },
    {
      title:"Business aiming to Expand Horizons",
      url:'https://tegain-website-static-media-bucket.s3.ap-south-1.amazonaws.com/assets/images/17-05-2024/it-recruit.svg',
      des:"Ready to take your business to new heights? Our seasoned consultants provide insights and tactics to fuel your growth and expansion"
    },
    // {
    //   title:"Startups with Unique Ideas",
    //   url:'https://tegain-website-static-media-bucket.s3.ap-south-1.amazonaws.com/assets/images/17-05-2024/back-office.svg',
    //   des:"Launch your venture with a solid foundation. We offer tailored advice and strategies to kickstart your success"
    // },
    {
      title:"Business Facing Challenges",
      url:'https://tegain-website-static-media-bucket.s3.ap-south-1.amazonaws.com/assets/images/17-05-2024/back-office.svg',
      des:"Overcome obstacles with ease. We offer practical solutions to navigate through rough patches and emerge stronger than ever. Partner with us today and let's chart a course to your business success!"
    },
    {
      title:"Businesses Seeking Digital Transformation ",
      url:'https://tegain-website-static-media-bucket.s3.ap-south-1.amazonaws.com/assets/images/17-05-2024/business-connect.svg',
      des:" Stay competitive with cutting-edge IT solutions designed to streamline your operations and accelerate growth in the digital era."
    },
    {
      title:"Business looking for financial consulting",
      url:'https://tegain-website-static-media-bucket.s3.ap-south-1.amazonaws.com/assets/images/17-05-2024/project-control-bg.svg',
      des:" Maximize your financial potential with expert strategies that ensure efficient  management and drive sustainable success."
    },
    {
      title:"Aiming for Skill Enhancement ",
      url:'https://tegain-website-static-media-bucket.s3.ap-south-1.amazonaws.com/assets/images/17-05-2024/evening-company.svg',
      des:" Empower your workforce with targeted training programs that foster growth, improve performance, and elevate business outcomes."
    }
   ]
  return (
    <div
      // style={{
      //   backgroundImage:` url('https://www.thechennaiangels.com/wp-content/uploads/2023/03/bg-founder-voice.png')`,
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      // }}
      className="py-0 lg:py-12 sm:pt-6 lg:pb-28 px-4 sm:px-6 lg:px-4 min-h-1/2   lg:mb-0 mb-16 lg:h-auto items-center flex flex-col justify-start"
    >
      <h1 
        className="text-center  text-3xl md:text-5xl font-bold helvetic-sub-title-font   mb-8 sm:mb-12" 
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom" 
        data-aos-duration='800'
      >
        Who Needs Us
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 2xl:max-w-7xl max-w-6xl mx-auto">
      {content.map((item,i)=>
        <WhoNeedUsCard key={i} title={item.title} des={item.des} url={item.url} />
        )}
      </div>
    </div>
  );
}

export default HomeAbout;