'use client'
import React from "react";

const Banner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50  to-white h-auto  py-10">
      <div className=" flex flex-col  justify-center md:gap-10 md:flex-row items-center px-4">
        {/* Text Content */}
        <div className="lg:w-1/2">
          <span className="text-blue-500  text-sm font-semibold uppercase">
            Digital Growth
          </span>
          <h1 className="text-5xl font-black mb-6 mt-3">
            Blueprints for{" "}
            <div className="text-blue-600">Digital Excellence</div>
          </h1>
          <p className="text-gray-600 mt-4 text-base montserrat-font">
            Our team is about exploring new possibilities and embracing emerging
            trends to deliver transformative IT solutions.
          </p>
          {/* <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Find Solutions →
          </button> */}
        </div>

        <div className=" mt-10 lg:mt-0 flex justify-center ">
          <div className="relative border border-gray-200 rounded-full p-4 shadow-sm ">
            <div className="border border-gray-300 rounded-full p-4 shadow-sm">
              <div className="border border-gray-400 rounded-full p-4 shadow-sm">
                <img
                  src="https://images.pexels.com/photos/3799837/pexels-photo-3799837.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Person giving thumbs up"
                  className=" shadow-lg bg-blue-100 p-6 border border-gray-500 rounded-full w-80 h-full "
                />
              </div>
            </div>
            <div className="absolute top-1 right-28 transform translate-x-6 border shadow-sm  border-gray-300 rounded-full p-2 -translate-y-6">
              <div className="w-16 h-16 bg-blue-100 border border-gray-200 shadow-sm  rounded-full p-2 flex items-center justify-center">
                <div className="bg-blue-400 w-10 h-10 rounded-full shadow-sm  "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;



