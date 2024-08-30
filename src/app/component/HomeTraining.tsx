import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiCheck } from "react-icons/fi";
import Button from "./Button";


const HomeTraining: React.FC = () => {
  return (
    <section className="py-16 2xl:max-w-7xl max-w-6xl m-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-8 ">
      <div className="flex justify-center md:justify-start  md:-ml-0"  >
        <div className="relative mt-16 md:mt-0" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration='800' data-aos-delay="400">
          <Image
            src="https://images.pexels.com/photos/34092/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
            alt="VR Headset"
            height={500}
            width={200}
            className="rounded-lg shadow-lg object-cover w-80 h-80 sm:w-56 sm:h-72 lg:w-64 lg:h-80 xl:w-72 xl:h-96"
          />
          <Image
            src="https://images.pexels.com/photos/796602/pexels-photo-796602.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="VR Headset"
            height={500}
            width={200}
            className="rounded-lg absolute bottom-4 sm:bottom-8 left-4 sm:left-32 lg:left-48 xl:left-56 bg-white p-2 sm:p-4 object-cover w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64"
          />
          <div className="  absolute w-[10rem] sm:w-[12rem] shadow-lg top-4 sm:top-6 left-24 sm:left-28 lg:left-40 xl:left-52 bg-blue-500 text-white rounded-lg p-2 sm:p-4">
            <p className="text-xs sm:text-sm font-semibold zoom-in-box">
              31+ Years Experience
            </p>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 md:text-left ">
        <p className="inline-block text-sm font-semibold uppercase bg-blue-200 text-blue-600 py-1 px-4 rounded-lg mb-4" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration='800' data-aos-delay="300">
          Training
        </p>
        <h1 className="text-3xl sm:text-4xl uppercase  text-gray-900 mt-2 helvetic-Head-font" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration='800' data-aos-delay="500">
          Elevate Your Skills with Tailored <span className="text-blue-600">Training Sessions</span> 
        </h1>
        <p className="text-gray-600 mt-4 text-lg" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration='800' data-aos-delay="800">
          Elevate Your Skills with Tailored Training Sessions. Unlock your
          potential with personalized training sessions designed to meet your
          specific needs.
        </p>

        <ul className="flex flex-wrap mt-6 justify-start gap-4 sm:gap-6" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration='800' data-aos-delay="900">
          <li className="flex items-center gap-2">
            <FiCheck
              style={{
                color: "green",
                fontSize: "15px",
                border: "1px solid black",
                borderRadius: "40px",
                padding: "2px",
              }}
            />
            <p className="text-gray-600 text-lg">Individual</p>
          </li>
          <li className="flex items-center gap-2">
            <FiCheck
              style={{
                color: "green",
                fontSize: "15px",
                border: "1px solid black",
                borderRadius: "40px",
                padding: "2px",
              }}
            />
            <p className="text-gray-600 text-lg">Group</p>
          </li>
          <li className="flex items-center gap-2">
            <FiCheck
              style={{
                color: "green",
                fontSize: "15px",
                border: "1px solid black",
                borderRadius: "40px",
                padding: "2px",
              }}
            />
            <p className="text-gray-600 text-lg">Job Oriented</p>
          </li>
          <li className="flex items-center gap-2">
            <FiCheck
              style={{
                color: "green",
                fontSize: "15px",
                border: "1px solid black",
                borderRadius: "40px",
                padding: "2px",
              }}
            />
            <p className="text-gray-600 text-lg">Soft Skills</p>
          </li>
        </ul>
        <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration='800' data-aos-delay="1000">

        <Button title='Discover More' path='/services' />
        </div>
      </div>
    </section>
  );
};

export default HomeTraining;
