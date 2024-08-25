import React from "react";
import Image from "next/image";
import Button from "../Button";

const Meeting: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 py-20 to-gray-200py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 sm:text-4xl lg:text-4xl helvetic-sub-title-font">
          Elevate Your Events with Premium Meeting Spaces
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 mb-6 text-lg ">
              Host your next conference, training session, or corporate event in
              our state-of-the-art meeting rooms, designed for productivity and
              inspiration. With cutting-edge technology, customizable layouts,
              and a professional ambiance, our spaces are perfect for teams to
              brainstorm, collaborate, and succeed. Whether it s a high-stakes
              presentation or an immersive workshop, we provide the ideal
              environment to make every event a success. Book today and
              experience the difference!
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
                <span className="text-gray-600 text-lg montserrat-font">
                  cutting-edge technology
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
                <span className="text-gray-600 text-lg montserrat-font">
                  customizable layouts
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
                <span className="text-gray-600 text-lg montserrat-font">
                  professional ambiance
                </span>
              </div>
            </div>
            <Button title='GET A QUOTE' />
            
          </div>
          <div>
            <Image
              src="https://t4.ftcdn.net/jpg/00/80/91/11/360_F_80911186_RoBCsyLrNTrG7Y1EOyCsaCJO5DyHgTox.jpg"
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

export default Meeting;
