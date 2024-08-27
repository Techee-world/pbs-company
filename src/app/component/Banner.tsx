'use client'
import Image from "next/image";
import React from "react";
import '../globals.css';
import Button from "./Button";

const Banner: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto mt-8 sm:mt-12 md:mt-16 min-h-[90vh] flex items-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 space-y-4 lg:space-y-6 text-start lg:text-left">
          <span className="text-blue-500 text-xs sm:text-sm font-semibold uppercase animated-box-fade-2s animated-box-fade">
            Welcome to PBS
          </span>
          <h1 className="animated-box-fade animated-box-fade-4s text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-blue-600 tracking-normal leading-tight helvetic-Head-font">
            <span className="text-slate-800">your premier </span> one-stop business solution provider
          </h1>
          <p className="text-gray-600 text-base sm:text-lg animated-box-fade-6s animated-box-fade">
            We are dedicated to empowering startups and businesses with
            comprehensive products and services that drive success.
          </p>
          <div className="animated-text animated-box-fade animated-box-fade-8s">
            <Button title='About Us' />
          </div>
        </div>

        {/* Image Content */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center animated-box-fade">
          <div className="relative">
            <div className="border border-gray-200 rounded-full p-2 sm:p-3 md:p-4 shadow-sm">
              <div className="border border-gray-300 rounded-full p-2 sm:p-3 md:p-4 shadow-sm">
                <div className="border border-gray-400 rounded-full p-2 sm:p-3 md:p-4 shadow-sm">
                  <Image
                    src="https://images.pexels.com/photos/3799837/pexels-photo-3799837.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Person giving thumbs up"
                    className="shadow-lg bg-blue-100 p-4 sm:p-5 md:p-6 border border-gray-500 rounded-full w-48 sm:w-56 md:w-64 lg:w-72 h-auto"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-1/4 transform translate-x-1/2 -translate-y-1/2">
              <div className="w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-blue-200 border border-gray-200 shadow-sm rounded-full p-1 sm:p-2 flex items-center justify-center">
                <div className="bg-blue-400 w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 rounded-full shadow-sm"></div>
              </div>
            </div>
            <div className="absolute bottom-0 left-1/4 transform translate-x-1/2 translate-y-1/2">
              <div className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 bg-blue-200 border border-gray-200 shadow-sm rounded-full p-1 flex items-center justify-center">
                <div className="bg-blue-400 w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-4 rounded-full shadow-sm"></div>
              </div>
            </div>
            <div className="absolute bottom-1/4 left-0 transform -translate-x-1/2">
              <div className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 bg-blue-200 border border-gray-200 shadow-sm rounded-full p-1 flex items-center justify-center">
                <div className="bg-blue-400 w-2 sm:w-3 md:w-3 h-2 sm:h-2 md:h-3 rounded-full shadow-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;