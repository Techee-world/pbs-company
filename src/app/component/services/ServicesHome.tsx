'use client'
import React, { useState } from "react";
import Meeting from "./Meeting";

const ServicesHome: React.FC = () => {
    const [pageSwitch, setPageSwitch] = useState(0)
  const hallData = ["Training Romm", "Conference Room", "Conference Room Plus"];
  return (
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
      <div className="flex justify-center items-center mt-4 space-x-4">
        <div className="flex max-w-7xl m-auto justify-center items-center mt-4 space-x-4 w-full ">
          {hallData.map((hall, index) => (
            <div
            onClick={()=>setPageSwitch(index)}
              className={`border border-gray-400 rounded-lg p-3 w-full hover:bg-blue-600 ${pageSwitch === index ? 'bg-blue-600 text-white':''} hover:text-white cursor-pointer`}
              key={index}
            >
              <h4 className="text-center ">{hall}</h4>
            </div>
          ))}
        </div>
      </div>
      {pageSwitch === 0  && <Meeting title='1' />}
      {pageSwitch === 1  && <Meeting  title='2' />}
      {pageSwitch === 2  && <Meeting title='3' />}
      
    </div>
  );
};

export default ServicesHome;