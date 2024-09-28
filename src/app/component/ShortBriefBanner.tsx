import React from 'react'

const ShortBriefBanner = () => {
  return (
    <div>

<div className="grid max-w-6xl m-auto 2xl:max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              <Card
                // title={slide.page1}
                url="https://tegain-website-static-media-bucket.s3.ap-south-1.amazonaws.com/assets/images/17-05-2024/it-collaborate.svg"
                some="YBN"
                des="Management Consulting For Startups"
                // isActive={index === activeIndex}
              />
              <Card
                // title={slide.page2}
                url="https://tegain-website-static-media-bucket.s3.ap-south-1.amazonaws.com/assets/images/17-05-2024/business-connect.svg"
                some="ACS"
                des="Financial Consulting Solutions"
                // isActive={index === activeIndex}
              />
              <Card
                // title={slide.page3}
                url="https://tegain-website-static-media-bucket.s3.ap-south-1.amazonaws.com/assets/images/17-05-2024/back-office.svg"
                some="IT"
                des="Complete IT EcoSystem"
                // isActive={index === activeIndex}
              />
              <Card
                // title={slide.page4}
                url="https://tegain-website-static-media-bucket.s3.ap-south-1.amazonaws.com/assets/images/17-05-2024/it-recruit.svg"
                some="Training"
                des="Tailored Training Sessions"
                // isActive={index === activeIndex}
              />
            </div>

         <section className="pt-20 pb-8 px-4 text-center ">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl button-color-text  mb-10 helvetic-sub-title-font">
          Our Services are Efficient, <br className="hidden md:block" />
          Modern, and Customer-Focused
        </h1>
        <p className="text-gray-600 lg:pb-16 pb-0 text-base md:text-base leading-relaxed ">
          Based in Cambridge, MA, Aciron Consulting transforms businesses with
          our innovative and creative solutions personalized to your unique
          needs. We take a look at your business and optimize workflow, design
          cutting-edge custom software, implement SharePoint, and elevate
          functionality across all areas of your business. From the first call
          to end result, our team of industry experts has your back throughout
          the entirety of any project. Explore our services to learn what makes
          Aciron a top consulting firm.
        </p>
      </div>
    </section>
    </div>
  )
}
interface CardProps {
  // title: string[];
  // isActive: boolean;
  some: string;
  des: string;
  url: string;
}

const Card: React.FC<CardProps> = ({   some, des, url }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${url})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
      className="w-full   cursor-pointer bg-transparent rounded-lg  p-4 sm:p-6 flex flex-col items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto sm:max-w-lg lg:max-w-xl"
    >
      {/* Badge Section */}
      <div className="mb-10 bg-blue-950   rounded-lg px-6 py-1 flex items-center space-x-2 ">
        <span className="text-white font-medium text-sm">{some}</span>
      </div>

      {/* Text Section */}
      <div className="flex-grow text-center sm:text-left">
        <h2 className="text-lg font-semibold text-black">{des}</h2>
      </div>
    </div>
  );
};

export default ShortBriefBanner