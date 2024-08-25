'use client'
import Image from "next/image";
import React from "react";
import '../globals.css';
import Button from "./Button";

const Banner: React.FC = () => {
  return (
    <section className=" max-w-6xl m-auto mt-16 h-[90vh] place-items-center grid py-10 px-4 md:px-0">
      <div className=" flex flex-col   justify-between md:gap-10 md:flex-row items-center ">
        {/* Text Content */}
        <div  className="lg:w-3/4 ">
          <span className="text-blue-500  text-sm font-semibold uppercase  " >
            Welcome to PBS
          </span>
          <h1  className="animated-text1 md:text-5xl text-4xl font-bold mb-6 uppercase mt-3 text-blue-600 tracking-normal leading-tight helvetic-Head-font  "> 
          <span className="text-slate-800">your premier </span> one-stop business solution provider</h1>
          <p  className="text-gray-600 mt-4 text-lg ">
            We are dedicated to empowering startups and businesses with
            comprehensive products and services that drive success.
          </p>
          <div className="animated-text">
         <Button title='About Us' />

          </div>
        </div>

        <div className=" mt-4 lg:mt-0 flex justify-center animated-box-fade" >
          <div className="relative border border-gray-200 rounded-full p-4 shadow-sm ">
            <div className="border border-gray-300 rounded-full p-4 shadow-sm">
              <div className="border border-gray-400 rounded-full p-4 shadow-sm">
                <Image
                  src="https://images.pexels.com/photos/3799837/pexels-photo-3799837.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Person giving thumbs up"
                  className=" shadow-lg bg-blue-100 p-6 border border-gray-500 rounded-full w-72 lg:w-80 h-full "
                  height={500}
                  width={200}
                />
              </div>
            </div>
            <div className="absolute top-1 right-28 transform translate-x-6 border shadow-sm  border-gray-300 rounded-full p-2 -translate-y-6">
              <div className="w-16 h-16 bg-blue-200 border border-gray-200 shadow-sm  rounded-full p-2 flex items-center justify-center">
                <div className="bg-blue-400 w-10 h-10 rounded-full shadow-sm  "></div>
              </div>
            </div>
            <div className="absolute bottom-1 left-16 transform translate-x-6 border shadow-sm  border-gray-300 rounded-full p-2 -translate-y-6">
              <div className="w-8 h-8 bg-blue-200 border border-gray-200 shadow-sm  rounded-full p-2 flex items-center justify-center">
                <div className="bg-blue-400 w-5 h-4 rounded-full shadow-sm  "></div>
              </div>
            </div>
            <div className="absolute bottom-6 left-5 transform translate-x-6 border shadow-sm  border-gray-300 rounded-full p-2 -translate-y-6">
              <div className="w-4 h-4 bg-blue-200 border border-gray-200 shadow-sm  rounded-full p-1 flex items-center justify-center">
                <div className="bg-blue-400 w-3 h-2 rounded-full shadow-sm  "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;



