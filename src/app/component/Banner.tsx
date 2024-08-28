'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Button from './Button';

interface Slide {
  title: string;
  description: string;
  imgSrc: string;
}

const slides: Slide[] = [
  {
    title: "Your Premier One-stop Business Solution Provider",
    description: "We are dedicated to empowering startups and businesses with comprehensive products and services that drive success.",
    imgSrc: "https://plus.unsplash.com/premium_photo-1672330528083-e64cfdc15048?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3MlMjBzdWNjZXNzfGVufDB8fDB8fHww",
  },
  {
    title: "Innovative Solutions for Your Business",
    description: "Discover a range of products and services designed to help your business thrive in a competitive market.",
    imgSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjBzdWNjZXNzfGVufDB8fDB8fHww",
  },
  {
    title: "Partner with Us for Success",
    description: "Our team of experts is here to support you with tailored solutions that meet your unique business needs.",
    imgSrc: "https://images.unsplash.com/photo-1573166675921-076ea6b621ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJ1c2luZXNzJTIwc3VjY2Vzc3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

const Banner: React.FC = () => {
  return (
    <div style={{backgroundImage:`url("https://www.zohowebstatic.com/sites/zweb/images/crm/crm-banner-bg.jpg")`}} className="h-screen w-full boject-cover bg-center bg-cover">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        speed={1000}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-6xl mx-auto min-h-screen flex items-center py-10 px-4 sm:px-6 lg:px-8">
              <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 relative">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full lg:w-1/2 space-y-4  text-start lg:text-left"
                >
                  <span className="inline-block text-sm font-semibold uppercase bg-blue-200 text-blue-600 py-1 px-4 rounded-lg mb-4 animated-box-fade animated-box-fade-2s">
                    Welcome to PBS
                  </span>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 leading-tight helvetic-Head-font animated-box-fade animated-box-fade-4s" >
                    <span className="text-blue-600 ">{slide.title.split(' ')[0]}</span>{' '}
                    {slide.title.split(' ').slice(1).join(' ')}
                  </h1>
                  <p className="text-gray-600 text-base sm:text-lg animated-box-fade animated-box-fade-6s">
                    {slide.description}
                  </p>
                  <div className="animated-box-fade  animated-box-fade-8s">
                    <Button title='About Us' />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center"
                >
                  <div className="relative animated-box-fade animated-box-fade-4s">
                    <div className='zoom-in-box absolute top-16 right-10 border border-gray-400 px-4 z-50 bg-gray-100 text-blue-600  py-1 rounded-md shadow-lg' > Business Training</div>
                    <div className='zoom-in-box absolute top-6 left-10 border border-gray-400 px-4 z-50 bg-gray-100 text-blue-600  py-1 rounded-md shadow-md' > Development Training</div>
                    <div className='zoom-in-box absolute bottom-28 right-10 border border-gray-400 px-4 z-50 bg-gray-100 text-blue-600  py-1 rounded-md shadow-md' > Funding Solutions</div>
                    <div className='zoom-in-box absolute bottom-6 left-10 border border-gray-400 px-4 z-50 bg-gray-100 text-blue-600  py-1 rounded-md shadow-md' > Prefessional Meeting Space</div>
                  
                    <div className="border border-gray-200 rounded-full p-2 sm:p-3 md:p-4 shadow-sm">
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
                    <DecorativeCircle
                      position="top-0 right-1/4 transform translate-x-1/2 -translate-y-1/2"
                      size="w-16 h-16"
                      innerSize="w-10 h-10"
                    />
                    <DecorativeCircle
                      position="bottom-0 left-1/4 transform translate-x-1/2 translate-y-1/2"
                      size="w-8 h-8"
                      innerSize="w-5 h-5"
                    />
                    <DecorativeCircle
                      position="top-10 left-20 transform translate-x-1/2 translate-y-1/2"
                      size="w-8 h-8"
                      innerSize="w-5 h-5"
                    />
                    <DecorativeCircle
                      position="top-1/2 right-4 transform translate-x-1/2 translate-y-1/2"
                      size="w-10 h-10"
                      innerSize="w-6 h-6"
                    />
                    <DecorativeCircle
                      position="bottom-1/4 left-0 transform -translate-x-1/2"
                      size="w-6 h-6"
                      innerSize="w-3 h-3"
                    />
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

interface DecorativeCircleProps {
  position: string;
  size: string;
  innerSize: string;
}

const DecorativeCircle: React.FC<DecorativeCircleProps> = ({ position, size, innerSize }) => (
  <div className={`absolute ${position} zoom-in-box`}>
    <div className={`${size} bg-blue-200 border border-gray-200 shadow-sm rounded-full p-1 flex items-center justify-center`}>
      <div className={`bg-blue-400 ${innerSize} rounded-full shadow-sm`}></div>
    </div>
  </div>
);

export default Banner;