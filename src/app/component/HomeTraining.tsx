import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiCheck } from "react-icons/fi";

const HomeTraining: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 flex flex-col-reverse md:flex-row justify-between items-center gap-8">
      <div className="flex justify-center md:justify-start -ml-12 md:-ml-0">
        <div className="relative">
          <Image
            src="https://images.pexels.com/photos/34092/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
            alt="VR Headset"
            height={500}
            width={200}
            className="rounded-lg shadow-lg object-cover w-48 h-64 sm:w-56 sm:h-72 lg:w-64 lg:h-80 xl:w-72 xl:h-96"
          />
          <Image
            src="https://images.pexels.com/photos/796602/pexels-photo-796602.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="VR Headset"
            height={500}
            width={200}
            className="rounded-lg absolute bottom-6 sm:bottom-8 left-28 sm:left-32 lg:left-48 xl:left-56 bg-white p-2 sm:p-4 object-cover w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64"
          />
          <div className="absolute w-[10rem] sm:w-[12rem] shadow-lg top-4 sm:top-6 left-24 sm:left-28 lg:left-40 xl:left-52 bg-blue-500 text-white rounded-lg p-2 sm:p-4">
            <p className="text-xs sm:text-sm font-semibold">
              25+ Years Experience
            </p>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
        <p className="text-sm text-blue-500 uppercase font-semibold">
          Training
        </p>
        <h1 className="text-3xl sm:text-4xl uppercase font-bold text-gray-900 mt-2">
          Elevate Your Skills with Tailored Training Sessions
        </h1>
        <p className="text-gray-600 mt-4 text-base">
          Elevate Your Skills with Tailored Training Sessions. Unlock your
          potential with personalized training sessions designed to meet your
          specific needs.
        </p>

        <ul className="flex flex-wrap mt-6 justify-center md:justify-start gap-4 sm:gap-6">
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
            <p className="text-gray-600 text-base">Individual</p>
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
            <p className="text-gray-600 text-base">Group</p>
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
            <p className="text-gray-600 text-base">Job Oriented</p>
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
            <p className="text-gray-600 text-base">Soft Skills</p>
          </li>
        </ul>
        <Link href="/training">
          <button className="mt-8 px-6 py-2 text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600">
            Discover More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HomeTraining;
