'use client'
import Image from "next/image";
import React from "react";

const Banner: React.FC = () => {
  return (
    <section className=" max-w-7xl m-auto mt-10 py-10">
      <div className=" flex flex-col   justify-center md:gap-10 md:flex-row items-center ">
        {/* Text Content */}
        <div  className="lg:w-1/2">
          <span className="text-blue-500  text-sm font-semibold uppercase">
            Welcome to PBS
          </span>
          <h1 className="text-5xl font-black mb-6 mt-3 tracking-normal leading-tight">
            your premier one-stop business solution provider
            {/* <div className="text-blue-600">Digital Excellence</div> */}
          </h1>
          <p className="text-gray-600 mt-4 text-base montserrat-font">
            We are dedicated to empowering startups and businesses with
            comprehensive products and services that drive success.
          </p>
          {/* <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Find Solutions →
          </button> */}
        </div>

        <div className=" mt-10 lg:mt-0 flex justify-center ">
          <div className="relative border border-gray-200 rounded-full p-4 shadow-sm ">
            <div className="border border-gray-300 rounded-full p-4 shadow-sm">
              <div className="border border-gray-400 rounded-full p-4 shadow-sm">
                <Image
                  src="https://images.pexels.com/photos/3799837/pexels-photo-3799837.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Person giving thumbs up"
                  className=" shadow-lg bg-blue-100 p-6 border border-gray-500 rounded-full w-80 h-full "
                  height={500}
                  width={200}
                />
              </div>
            </div>
            <div className="absolute top-1 right-28 transform translate-x-6 border shadow-sm  border-gray-300 rounded-full p-2 -translate-y-6">
              <div className="w-16 h-16 bg-blue-100 border border-gray-200 shadow-sm  rounded-full p-2 flex items-center justify-center">
                <div className="bg-blue-400 w-10 h-10 rounded-full shadow-sm  "></div>
              </div>
            </div>
            <div className="absolute bottom-1 left-16 transform translate-x-6 border shadow-sm  border-gray-300 rounded-full p-2 -translate-y-6">
              <div className="w-8 h-8 bg-blue-100 border border-gray-200 shadow-sm  rounded-full p-2 flex items-center justify-center">
                <div className="bg-blue-400 w-5 h-4 rounded-full shadow-sm  "></div>
              </div>
            </div>
            <div className="absolute bottom-6 left-5 transform translate-x-6 border shadow-sm  border-gray-300 rounded-full p-2 -translate-y-6">
              <div className="w-4 h-4 bg-blue-100 border border-gray-200 shadow-sm  rounded-full p-1 flex items-center justify-center">
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



