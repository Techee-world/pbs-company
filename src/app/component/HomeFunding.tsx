import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiCheck } from "react-icons/fi";
import Button from "./Button";

const HomeFunding: React.FC = () => {
  return (
    <>
    <section  className=" relative py-24 max-w-7xl m-auto  text-white px-4 md:px-0 lg:px-8 flex sm:gap-0 gap-20 flex-col md:flex-row md:items-center lg:items-end">
      <div className="md:w-1/2 mt-8 md:mt-0  sm:text-center md:text-left">
        <p className="text-sm text-blue-500 uppercase font-semibold" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration='800' data-aos-delay="200">
          Funding Soln
        </p>
        <h1 className="text-3xl sm:text-4xl uppercase  text-gray-900 mt-2 helvetic-Head-font" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration='800' data-aos-delay="400">
          FUNDING SOLUTIONS FOR EVERY STAGE
        </h1>
        <p className="text-gray-600 mt-4 text-lg" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration='800' data-aos-delay="600">
          Ignite your entrepreneurial journey with our startup-friendly funding.
          From initial seed capital to expansion financing, were committed to
          fueling your vision and driving growth from day one.
        </p>

        <ul className="flex flex-wrap mt-6 sm:justify-center md:justify-start space-x-6" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration='800' data-aos-delay="800">
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
            <p className="text-gray-600 text-lg">New Startups</p>
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
            <p className="text-gray-600 text-lg">Seeking Expansion</p>
          </li>
        </ul>
        <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration='800' data-aos-delay="1000">
        <Link href="/funding">
          <Button title="Discover More" />
        </Link>
        </div>
      </div>
     
      <div  className="md:w-1/2 w-full lg:-ml-13 flex justify-start mt-16 md:mt-0 ">
        {/* <div className="relative md:ml-20">
          <Image
            src="https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="VR Headset"
            height={500}
            width={200}
            className="rounded-tl-[120px] shadow-lg object-cover md:w-40 md:h-40   w-56 h-56 lg:w-64 lg:h-64 bg-blue-100  p-3"
          />
          <Image
            src="https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="VR Headset"
            height={500}
            width={200}
            className="rounded-tl-[120px] absolute shadow-lg bottom-0 md:w-40 md:h-56  left-40 md:left-28 lg:left-56 object-cover w-64 h-72 lg:w-72 lg:h-80 bg-blue-100 p-3"
          />
        </div> */}
          <div className=" md:ml-20" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration='800' data-aos-delay="800">
          <Image
            src="https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="VR Headset"
            height={500}
            width={200}
            className="  object-cover md:w-40 md:h-40   w-full h-72 lg:w-full lg:h-96 "
          />
          
        </div>
      </div>
    </section>
    </>
  );
};

export default HomeFunding;
