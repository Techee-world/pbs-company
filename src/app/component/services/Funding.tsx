import React from "react";
import Image from "next/image";

const Funding: React.FC = () => {
  return (
    <div className="bg-blue-600  py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold  mb-6 text-gray-200 sm:text-4xl helvetic-sub-title-font lg:text-4xl">
          FUNDING SOLUTIONS FOR EVERY STAGE
        </h2>
        <p className="text-gray-200  mb-10 text-lg montserrat-font helvetic-font">
          Step into success with our dynamic funding options tailored to your
          business needs. Lorem Ipsum has been the industry s standard dummy
          text ever since the 1500s, when an unknown printer took a galley type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries into electronic typesetting remaining essentially
          unchanged.
        </p>
        <div className="flex items-center lg:flex-row flex-col mt-10 lg:mt-0 ">
          <div className="flex items-center w-full gap-4 lg:border-r sm:mb-6 lg:mb-0 mb-0 border-gray-400 pr-0 lg:pr-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-200  mb-4 helvetic-sub-title-sub-font">
                New Startups
              </h2>
              <p className="text-gray-200  mb-6 text-lg montserrat-font">
                Ignite your entrepreneurial journey with our startup-friendly
                funding. From initial seed capital to expansion financing, were
                committed to fueling your vision and driving growth from day
                one.
              </p>
            </div>
            <Image
              src="https://images.pexels.com/photos/2873277/pexels-photo-2873277.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Elevating Businesses Through Edge"
              className="w-full h-auto rounded-lg "
              width={100}
              height={30}
            />
          </div>
          <div className="flex items-center gap-4 w-full pl-0 lg:pl-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-200  mb-4 helvetic-sub-title-sub-font">
                Existing Companies Seeking Expansion
              </h2>
              <p className="text-gray-200  mb-6 text-lg ">
                Ready to scale up? Our strategic partnerships offer the capital
                infusion and expertise needed to elevate your business to new
                heights. Whether it s launching new products, entering new
                markets, or optimising operations, we re your trusted ally for
                sustainable expansion Know our team page
              </p>
            </div>
            <Image
              src="https://images.pexels.com/photos/2422278/pexels-photo-2422278.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Elevating Businesses Through Edge"
              className="w-full h-auto rounded-lg "
              width={100}
              height={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funding;
