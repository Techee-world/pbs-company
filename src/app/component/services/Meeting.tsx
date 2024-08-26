'use client'
import React, { useEffect } from "react";
import Image from "next/image";
import Button from "../Button";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS

const Meeting: React.FC = () => {
  useEffect(() => {
    AOS.init({
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });

    // Refresh AOS when the component is re-rendered
    AOS.refresh();
  }, []);

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex lg:flex-row flex-col items-center justify-between gap-8">
          <div>
            <h2
              className="text-3xl font-bold text-gray-900 mb-6 sm:text-4xl lg:text-4xl helvetic-sub-title-font"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              Elevate Your Events with{" "}
              <span className="text-blue-600">Premium Meeting Spaces</span>
            </h2>
            <p
              className="text-gray-600 mb-6 text-lg"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              Elevate Your Skills with Tailored Training Sessions Unlock your
              potential with personalised training sessions designed to meet
              your specific needs.
            </p>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3 py-4">
              <div
                className="bg-blue-600 text-white rounded-lg px-3 py-2 text-center w-full outline outline-offset-2 outline-2 outline-blue-600"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                Conference Hall
              </div>
              <div
                className="bg-blue-600 text-white rounded-lg px-3 py-2 text-center w-full outline outline-offset-2 outline-2 outline-blue-600"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                10 nos
              </div>
              <div
                className="bg-blue-600 text-white rounded-lg px-3 py-2 text-center w-full outline outline-offset-2 outline-2 outline-blue-600"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                $ 2000
              </div>
              <div
                className="bg-blue-600 text-white rounded-lg px-3 py-2 text-center w-full outline outline-offset-2 outline-2 outline-blue-600"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="800"
                data-aos-delay="600"
              >
                1000+
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div
                className="flex items-center"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="800"
                data-aos-delay="700"
              >
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
              <div
                className="flex items-center"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="800"
                data-aos-delay="800"
              >
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
              <div
                className="flex items-center"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="800"
                data-aos-delay="900"
              >
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
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="800"
              data-aos-delay="1000"
            >
              <Button title="GET A QUOTE" />
            </div>
          </div>
          <div
            className="relative w-full h-auto"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <Image
              src="https://t4.ftcdn.net/jpg/00/80/91/11/360_F_80911186_RoBCsyLrNTrG7Y1EOyCsaCJO5DyHgTox.jpg"
              alt="Coworking in India"
              className="w-full h-auto rounded-lg"
              width={500}
              height={200}
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent rounded-lg"> </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meeting;
