import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiCheck } from "react-icons/fi";
import Button from "./Button";
import meeting from '../../../public/images/meeting2.png'

const HomeMeetRoom: React.FC = () => {
  return (
    <section className="py-10 pb-16 2xl:max-w-7xl max-w-6xl m-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-8">
      {/* <div className="md:w-1/2 w-full flex   justify-center" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration='800' data-aos-delay="800">
        <div className="relative bg-transparent border p-6 border-gray-300 rounded-full">
          <div className="absolute top-10 right-16 transform translate-x-6 -translate-y-6">
            <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center">
              <div className="bg-blue-300 w-10 h-10 rounded-full "></div>
            </div>
          </div>
          <div className="border p-6 border-gray-300 rounded-full ">
            <div className="border p-6 border-gray-400 rounded-full ">
              <Image
                src={meeting}
                alt="VR Headset"
                height={500}
                width={200}
                className=" lg:w-80 lg:h-80  md:w-56 md:h-56 w-56 h-56  border  border-gray-500 rounded-full  object-cover"
              />
            </div>
          </div>
        </div>
      </div> */}
  

      {/* <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8 sm:text-center md:text-left">
        <p className="inline-block text-sm font-semibold uppercase bg-blue-200 text-blue-600 py-1 px-4 rounded-lg mb-4" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration='800' data-aos-delay="200">
          Meeting Room space rental
        </p>
        <h1 className="text-3xl sm:text-4xl uppercase  text-gray-900 mt-2 helvetic-Head-font" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration='800' data-aos-delay="400">
          Conference <span className="text-blue-600">meeting rooms</span> 
        </h1>
        <p className="text-gray-600 mt-4 text-lg" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration='800' data-aos-delay="600">
          IT Technology is a broad category encompassing all aspects of
          information technology and the application of technology in various
          industries. It includes areas such as software development.
        </p>

        <ul className="flex flex-wrap mt-6 sm:justify-center md:justify-start space-x-6" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration='800' data-aos-delay="800">
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
            <p className="text-gray-600 text-lg">Training Room</p>
          </li>
          <li className="flex items-center gap-2 ">
          

            <FiCheck
              style={{
                color: "green",
                fontSize: "15px",
                border: "1px solid black",
                borderRadius: "40px",
                padding: "2px",
              }}
            />
            <p className="text-gray-600 text-lg">Conference Meeting Rooms</p>
          </li>
        </ul>
        <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration='800' data-aos-delay="1000">

         <Button title='Discover More' path='/meeting'/>
        </div>
      </div> */}
         <div className="flex justify-center md:justify-start  md:-ml-0"  >
        <div className="relative mt-16 md:mt-0" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration='800' data-aos-delay="400">
          <Image
            src={meeting}
            alt="VR Headset"
            height={500}
            width={200}
            className="rounded-lg   w-[24rem] h-80 sm:w-56 sm:h-72 lg:w-64 lg:h-80 xl:w-full xl:h-96"
          />
          {/* <Image
            src="https://images.pexels.com/photos/796602/pexels-photo-796602.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="VR Headset"
            height={500}
            width={200}
            className="rounded-lg absolute bottom-4 sm:bottom-8 left-4 sm:left-32 lg:left-48 xl:left-56 bg-white p-2 sm:p-4 object-cover w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64"
          /> */}
        
        </div>
      </div>

      <div className="md:w-1/2 md:text-left mt-2 md:mt-0">
        <p className="inline-block text-sm font-semibold uppercase bg-blue-200 text-blue-600 py-1 px-4 rounded-lg mb-4" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration='800' data-aos-delay="300">
          Meeting Room space rental
        </p>
        <h1 className="text-3xl sm:text-4xl uppercase  text-gray-900 mt-2 helvetic-Head-font" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration='800' data-aos-delay="500">
          Conference <span className="text-blue-600">meeting rooms</span> 
        </h1>
        <p className="text-gray-600 mt-4 text-lg" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration='800' data-aos-delay="800">
         IT Technology is a broad category encompassing all aspects of
          information technology and the application of technology in various
          industries. It includes areas such as software development.
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
            <p className="text-gray-600 text-lg">Training Room</p>
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
            <p className="text-gray-600 text-lg">Conference Meeting Rooms</p>
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

export default HomeMeetRoom;
