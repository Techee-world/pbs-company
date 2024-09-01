

'use client'
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Button from './Button';
import bannerImage from '../../../public/images/line7.jpg';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS

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

const Banner: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });

    // Refresh AOS when the component is re-rendered
    AOS.refresh();
  }, []);

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 1024px)');
    const handleDeviceChange = (e: any) => {
      setIsDesktop(e.matches);
    };

    // Initial check
    handleDeviceChange(desktopQuery);

    // Listen for changes in screen size
    desktopQuery.addEventListener('change', handleDeviceChange);

    // Cleanup listener on component unmount
    return () => {
      desktopQuery.removeEventListener('change', handleDeviceChange);
    };
  }, []);

  const router = useRouter();

  // const scrollToSection = (sectionId: string) => {
  //   const section = document.getElementById(sectionId);

  //   if (section) {
  //     // Get the top offset of the section
  //     const rect = section.getBoundingClientRect();
  //     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //     const offsetTop = rect.top + scrollTop;

  //     // Calculate the center position
  //     const centerPosition = offsetTop - window.innerHeight / 2 + rect.height / 2;

  //     // Smoothly scroll to the center position
  //     window.scrollTo({
  //       top: centerPosition,
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  const handleClick = (sectionId: string) => {
    // Perform navigation
    router.push(`/services#${sectionId}`);
    
    // Scroll to the section after a short delay
    // setTimeout(() => {
    //   scrollToSection(sectionId);
    // }, 100); // Adjust the delay if needed
  };

  return (
    <div
      style={{ backgroundImage: isDesktop ? `url(${bannerImage.src})` : '' }}
      className="h-screen relative bg-blue-50 w-full object-cover bg-center bg-cover"
    >
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="2xl:max-w-7xl max-w-6xl mx-auto min-h-screen flex items-start mt-16 lg:mt-20 lg:py-0 px-4 sm:px-6 lg:px-8">
              <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12 relative">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full lg:w-1/2 space-y-4 text-start lg:text-left"
                >
                  <span  className="animated-box-fade animated-box-fade-2s inline-block text-sm font-semibold uppercase bg-blue-200 text-blue-600 py-1 px-4 rounded-lg mb-4">
                    Welcome to PBS
                  </span>
                  <h1  className="animated-box-fade animated-box-fade-4s text-3xl sm:text-4xl md:text-6xl font-bold text-slate-800 leading-tight helvetic-Head-font ">
                    <span className="text-blue-600 ">{slide.title.split(' ')[0]}</span>{' '}
                    {slide.title.split(' ').slice(1).join(' ')}
                  </h1>
                  <p  className="animated-box-fade animated-box-fade-6s text-gray-600 text-base sm:text-lg">
                    {slide.description}
                  </p>
                  <div className='animated-box-fade animated-box-fade-8s' >

                  <Button title='About Us' path='/about' />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center"
                >
  
                  <div className="relative animated-box-fade animated-box-fade-4s ">
                    <div onClick={() => handleClick(slide.page1[1].replace('/services#', ''))} className='zoom-in-box text-xs lg:text-sm absolute top-12 right-2 lg:top-16 lg:right-10 px-4 z-50 bg-blue-600 text-white py-1 rounded-md shadow-lg cursor-pointer'>
                      {slide.page1[0]}
                    </div>
                    <div onClick={() => handleClick(slide.page2[1].replace('/services#', ''))} className='zoom-in-box text-xs lg:text-sm  absolute top-0 left-6 lg:top-6 lg:left-10 px-4 z-50 bg-blue-600 text-white py-1 rounded-md shadow-md cursor-pointer'>
                      {slide.page2[0]}
                    </div>
                    <div onClick={() => handleClick(slide.page3[1].replace('/services#', ''))} className='zoom-in-box text-xs lg:text-sm  absolute bottom-20 right-0 lg:bottom-28 lg:right-10 px-4 z-50 bg-blue-600 text-white py-1 rounded-md shadow-md cursor-pointer'>
                      {slide.page3[0]}
                    </div>
                    <div onClick={() => handleClick(slide.page4[1].replace('/services#', ''))} className='zoom-in-box text-xs lg:text-sm  absolute bottom-0 left-16 lg:bottom-6 lg:left-10 px-4 z-50 bg-blue-600 text-white py-1 rounded-md shadow-md cursor-pointer'>
                      {slide.page4[0]}
                    </div>

                    <div  className="border border-gray-200 rounded-full p-2 sm:p-3 md:p-4 shadow-sm">
                      <div className="border border-gray-300 rounded-full p-2 sm:p-3 md:p-4 shadow-sm">
                        <div className="border border-gray-400 rounded-full p-2 sm:p-3 md:p-4 shadow-sm">
                          <Image
                            src={slide.imgSrc}
                            alt="Banner image"
                            className="shadow-lg bg-blue-100 p-4 sm:p-5 md:p-6 border border-gray-500 rounded-full"
                            width={400}
                            height={500}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
