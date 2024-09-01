'use client'
import React, { useState } from "react";
import Meeting from "./Meeting";
import conference from '../../../../public/images/conference.jpeg'
import conferencePluse from '../../../../public/images/conferencePluse.jpeg'
import training from '../../../../public/images/training.jpeg'

const ServicesHome: React.FC = () => {
    const [pageSwitch, setPageSwitch] = useState(0)
  const hallData = ["Training Room", "Conference Room", "Conference Room Plus"];
  return (
    <div>
      <div className=" pt-16 px-4 lg:px-0 2xl:max-w-7xl max-w-6xl m-auto">
          <h2
              className="text-3xl font-bold text-gray-900 mb-6 sm:text-4xl lg:text-5xl helvetic-sub-title-font"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="800"
              data-aos-delay="100"
            >
             Elevate Your Events with{" "}
              <span className="text-blue-600">Premium Meeting Spaces</span>
            </h2>
      </div>
      <div className="flex justify-center items-center mt-4 px-4 lg:px-0 space-x-4">
        <div className="flex 2xl:max-w-7xl max-w-6xl m-auto justify-center items-center mt-4 space-x-4 w-full ">
          {hallData.map((hall, index) => (
            <div
            onClick={()=>setPageSwitch(index)}
              className={`border border-gray-400 rounded-lg p-3 w-full hover:bg-blue-600 ${pageSwitch === index ? 'bg-blue-600 text-white':''} hover:text-white cursor-pointer`}
              key={index}
            >
              <h4 className="text-center  text-sm lg:text-lg">{hall}</h4>
            </div>
          ))}
        </div>
      </div>
      {pageSwitch === 0  && <Meeting subTitle='Multi -Purpose Training Room'  name='Training Room'  img={training} capacity='30 ' rite='10000 full day (8 hrs)' second=''  />}
      {pageSwitch === 1  && <Meeting subTitle='Conference Room for Meetings' name='Air-Conditioned'   img={conference} capacity='10' rite='2000 for Initial Hour' second='1000 for Subsequent Hour' />}
      {pageSwitch === 2  && <Meeting subTitle='Conference Room for Meetings' name='Conference Pluse'  img={conferencePluse} capacity='20 ' rite='3000 for Initial Hour' second='1500 for Subsequent Hour' />}
      
    </div>
  );
};

export default ServicesHome;