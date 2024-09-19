// pages/index.tsx
'use client'
import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Button from './Button';
import '../style/bannerCardHover.css';
import Image from 'next/image';

const SecondBanner: NextPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  interface Slide {
    title: string;
    description: string;
    imgSrc: string;
    page1: string[];
    page2: string[];
    page3: string[];
    page4: string[];
  }

  const slides: Slide[] = [
    {
      title: "Your Premier One-stop Business Solution Provider",
      description: "We are dedicated to empowering startups and businesses with comprehensive products and services that drive success.",
      imgSrc: "https://plus.unsplash.com/premium_photo-1672330528083-e64cfdc15048?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3MlMjBzdWNjZXNzfGVufDB8fDB8fHww",
      page1: ["Business Trainings","/services#one"],
      page2 : ["Business Developments","/services#two"],
      page3: ["Funding Solutions","/services#three"],
      page4: ["Prefessional Meeting Space","/services#four"]
    },
    {
      title: "Elevate Your Skills With Tailored Training Sessions",
      description: "Discover a range of products and services designed to help your business thrive in a competitive market.",
      imgSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjBzdWNjZXNzfGVufDB8fDB8fHww",
      page1: ["Individual Training","/services#five"],
      page2 : ["Group Training","/services#six"],
      page3: ["Soft Skills Development","/services#seven"],
      page4: ["Executive Coaching","/services#eight"]
    },
    {
      title: "Funding Solutions For Every Stage",
      description: "Our team of experts is here to support you with tailored solutions that meet your unique business needs.",
      imgSrc: "https://images.unsplash.com/photo-1573166675921-076ea6b621ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJ1c2luZXNzJTIwc3VjY2Vzc3xlbnwwfHwwfHx8MA%3D%3D",
      page1: ["New Startups","/services#nine"],
      page2 : ["Existing Companies Seeking Expansion","/services#ten"],
      page3: ["Funding Solutions","/services#eleven"],
      page4: ["Prefessional Meeting Space","/services#twoelve"]
    },
    {
      title: "Business Development",
      description: "Our team of experts is here to support you with tailored solutions that meet your unique business needs.",
      imgSrc: "https://images.unsplash.com/photo-1573166675921-076ea6b621ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJ1c2luZXNzJTIwc3VjY2Vzc3xlbnwwfHwwfHx8MA%3D%3D",
      page1: ["Business Trainings" ,"/services#thertea"],
      page2 : ["Business Developments" ,"/services#fourtea"],
      page3: ["Funding Solutions" ,"/services#fifthee"],
      page4: ["Prefessional Meeting Space" ,"/services#sixtee"]
    },
    {
      title: "Elevate Your Events with Premium Meeting Spaces",
      description: "Our team of experts is here to support you with tailored solutions that meet your unique business needs.",
      imgSrc: "https://images.unsplash.com/photo-1573166675921-076ea6b621ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJ1c2luZXNzJTIwc3VjY2Vzc3xlbnwwfHwwfHx8MA%3D%3D",
      page1: ["Training rooms" ,"/services#seventee"],
      page2 : ["Conference rooms" ,"/services#eightee"],
      page3: ["workstations", "/services#nintee"],
      page4: ["Prefessional Meeting Space" ,"/services#twotee"]
    },
  ];

  // Update active slide index every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 8000); // Change content every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [slides.length]);

  return (
    <div 
    style={{
        backgroundImage: `url('https://tegain-website-static-media-bucket.s3.ap-south-1.amazonaws.com/assets/images/21-05-2024/landing-grid.svg')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',  // Ensures the image scales appropriately while maintaining its aspect ratio
      }} 
      className="min-h-screen max-w-7xl pt-40 m-auto flex flex-col items-center justify-center gap-6">
      {slides.map((slide, index) => (
        <div key={index} className={`w-full ${index === activeIndex ? 'block' : 'hidden'}`}>
          <header
            className={`text-center  transition-all duration-500 ease-in-out ${
              index === activeIndex ? 'animate-bottom-to-top opacity-100' : 'opacity-0'
            }`}
          >
            <h1 className="text-4xl md:text-[55px] w-3/4 text-center  m-auto leading-tight font-black button-color-text  helvetic-Head-font">
              {/* {slide.title} */}
              <span className="button-color-text ">{slide.title.split(' ')[0]}</span>{' '}
                    {slide.title.split(' ').slice(1).join(' ')}
            </h1>
            <p className="text-base  text-gray-600 my-6">{slide.description}</p>
          </header>

          {/* Button */}
          <div className={`${
              index === activeIndex ? 'animate-bottom-to-top opacity-100' : 'opacity-0'
            } mb-10 text-center`}>
            <Button title="Read More" />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            <Card title={slide.page1} url='https://tegain-website-static-media-bucket.s3.ap-south-1.amazonaws.com/assets/images/17-05-2024/it-collaborate.svg' some='YBN' des='Management Consulting For Startups' isActive={index === activeIndex} />
            <Card title={slide.page2} url='https://tegain-website-static-media-bucket.s3.ap-south-1.amazonaws.com/assets/images/17-05-2024/business-connect.svg'  some='ACS' des='Financial Consulting Solutions' isActive={index === activeIndex} />
            <Card title={slide.page3} url='https://tegain-website-static-media-bucket.s3.ap-south-1.amazonaws.com/assets/images/17-05-2024/back-office.svg' some='IT' des='Complete IT EcoSystem' isActive={index === activeIndex} />
            <Card title={slide.page4} url='https://tegain-website-static-media-bucket.s3.ap-south-1.amazonaws.com/assets/images/17-05-2024/it-recruit.svg' some='Training' des='Tailored Training Sessions' isActive={index === activeIndex} />
          </div>
        </div>
      ))}
      <div className="swiper-pagination-custom z-50"></div>
    </div>
  );
};

interface CardProps {
  title: string[];
  isActive: boolean;
  some:string
  des:string
  url:string
}

const Card: React.FC<CardProps> = ({ title, isActive ,some ,des , url}) => {
  return (
    // <div
    //   className={`transition-opacity duration-500 ease-in-out hover-effect-container  bg-white cursor-pointer p-6 rounded-lg shadow-lg w-full h-32 flex items-center justify-center ${
    //     isActive ? 'animate-bottom-to-top opacity-100' : 'opacity-0'
    //   }`}
    // >
    //   <h3 className="text-base font-semibold text-gray-800 helvetic-sub-title-font">{title[0]}</h3>
    //   <div className="span-1"></div>
    // <div className="span-2"></div>
    // </div>


    <div   style={{
      backgroundImage: `url(${url})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',  // Ensures the image scales appropriately while maintaining its aspect ratio
    }}  className="relative cursor-pointer bg-blue-100 rounded-lg shadow-lg p-4 sm:p-6 flex flex-col items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto sm:max-w-lg lg:max-w-xl">
    {/* Badge Section */}
    <div className=" mb-10 bg-white border border-gray-300 rounded-full px-3 py-1 flex items-center space-x-2 shadow-md">
      <span className="text-black font-medium text-sm">{some}</span>
    </div>

    {/* Text Section */}
    <div className="flex-grow text-center sm:text-left">
      <h2 className="text-lg font-semibold text-black">
       {des}
      </h2>
    </div>
  </div>
  );
};

export default SecondBanner;
