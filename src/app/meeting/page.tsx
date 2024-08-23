import React from "react";
import Image from "next/image";

const page: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50  to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 sm:text-4xl lg:text-4xl">
          Coworking in India.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 mb-6 text-base montserrat-font">
              Work along like-minded professionals in our vibrant coworking
              spaces in India, with break out areas and networking events to
              foster collaboration and growth. Drop in and hot-desk in an
              open-plan workspace, or reserve your own dedicated desk in a
              shared office.
            </p>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-600 text-base montserrat-font">
                  Day Coworking for on demand use as you need it
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-600 text-base montserrat-font">
                  Coworking memberships for regular access
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-600 text-base montserrat-font">
                  Fixed desks for 24/7 access reserved just for you
                </span>
              </div>
            </div>
            <button className="bg-red-500 text-white px-6 py-3 rounded-lg mt-6 hover:bg-red-600">
              GET A QUOTE
            </button>
          </div>
          <div>
            <Image
              src="https://images.pexels.com/photos/3183143/pexels-photo-3183143.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Coworking in India"
              className="w-full h-auto rounded-lg"
              width={500}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
