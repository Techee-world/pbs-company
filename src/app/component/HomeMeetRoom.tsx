import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiCheck } from "react-icons/fi";

const HomeMeetRoom: React.FC = () => {
  return (
    <section className="py-4 lg:py-16 px-4 md:px-8 lg:px-16 flex flex-col-reverse sm:gap-0 gap-8 md:flex-row items-center">
      <div className="md:w-1/2 w-full flex justify-center">
        <div className="relative bg-transparent border p-6 border-gray-200 rounded-full">
          <div className="absolute top-10 right-16 transform translate-x-6 -translate-y-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <div className="bg-blue-300 w-10 h-10 rounded-full "></div>
            </div>
          </div>
          <div className="border p-6 border-gray-300 rounded-full ">
            <div className="border p-6 border-gray-400 rounded-full ">
              <Image
                src="https://images.pexels.com/photos/1181607/pexels-photo-1181607.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="VR Headset"
                height={500}
                width={200}
                className=" lg:w-80 lg:h-80  md:w-56 md:h-56 w-56 h-56  border  border-gray-500 rounded-full  object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8 sm:text-center md:text-left">
        <p className="text-sm text-blue-500 uppercase font-semibold">
          Meeting Room space rental
        </p>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">
          Transform Business to Technology
        </h1>
        <p className="text-gray-600 mt-4">
          IT Technology is a broad category encompassing all aspects of
          information technology and the application of technology in various
          industries. It includes areas such as software development.
        </p>

        <ul className="flex flex-wrap mt-6 sm:justify-center md:justify-start space-x-6">
          <li className="flex items-center gap-2">
            {/* <span className="text-blue-500">✓</span> */}

            <FiCheck
              style={{
                color: "green",
                fontSize: "15px",
                border: "1px solid black",
                borderRadius: "40px",
                padding: "2px",
              }}
            />
            <p className="text-gray-600">New Startups</p>
          </li>
          <li className="flex items-center gap-2 ">
            {/* <span className="text-blue-500">✓</span> */}

            <FiCheck
              style={{
                color: "green",
                fontSize: "15px",
                border: "1px solid black",
                borderRadius: "40px",
                padding: "2px",
              }}
            />
            <p className="text-gray-600">Seeking Expansion</p>
          </li>
        </ul>
<Link href="/meeting">
        <button className="mt-8 px-6 py-2 text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-600">
          Discover More
        </button>
</Link>
      </div>
    </section>
  );
};

export default HomeMeetRoom;
