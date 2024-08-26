'use client'
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS

const Funding: React.FC = () => {
  useEffect(() => {
    AOS.init({
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <div className="bg-blue-600 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl font-bold mb-6 text-gray-200 sm:text-4xl helvetic-sub-title-font lg:text-4xl"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          FUNDING SOLUTIONS FOR EVERY STAGE
        </h2>
        <p
          className="text-gray-200 mb-10 text-lg montserrat-font helvetic-font"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          Step into success with our dynamic funding options tailored to your
          business needs. Lorem Ipsum has been the industry s standard dummy
          text ever since the 1500s, when an unknown printer took a galley
          type and scrambled it to make a type specimen book. It has survived
          not only five centuries into electronic typesetting remaining
          essentially unchanged.
        </p>
        <div className="flex items-center lg:flex-row flex-col mt-10 lg:mt-0">
          <div className="flex items-center w-full gap-4 lg:border-r sm:mb-6 lg:mb-0 mb-0 border-gray-400 pr-0 lg:pr-6">
            <div>
              <h2
                className="text-2xl font-bold text-gray-200 mb-4 helvetic-sub-title-sub-font"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                New Startups
              </h2>
              <p
                className="text-gray-200 mb-6 text-lg montserrat-font"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="800"
                data-aos-delay="600"
              >
                Ignite your entrepreneurial journey with our startup-friendly
                funding. From initial seed capital to expansion financing,
                we're committed to fueling your vision and driving growth
                from day one.
              </p>
            </div>
            <div
              className="w-full h-auto rounded-lg"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="800"
              data-aos-delay="700"
            >
              <Image
                src="https://images.pexels.com/photos/2873277/pexels-photo-2873277.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Elevating Businesses Through Edge"
                className="w-full h-auto rounded-lg"
                width={100}
                height={30}
              />
            </div>
          </div>
          <div className="flex items-center gap-4 w-full pl-0 lg:pl-6">
            <div>
              <h2
                className="text-2xl font-bold text-gray-200 mb-4 helvetic-sub-title-sub-font"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="800"
                data-aos-delay="800"
              >
                Existing Companies Seeking Expansion
              </h2>
              <p
                className="text-gray-200 mb-6 text-lg"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="800"
                data-aos-delay="900"
              >
                Ready to scale up? Our strategic partnerships offer the
                capital infusion and expertise needed to elevate your
                business to new heights. Whether it's launching new products,
                entering new markets, or optimizing operations, we're your
                trusted ally for sustainable expansion.
              </p>
            </div>
            <div
              className="w-full h-auto rounded-lg"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="800"
              data-aos-delay="1000"
            >
              <Image
                src="https://images.pexels.com/photos/2422278/pexels-photo-2422278.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Elevating Businesses Through Edge"
                className="w-full h-auto rounded-lg"
                width={100}
                height={30}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funding;
