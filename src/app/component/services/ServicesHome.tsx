'use client'
import React, { useState } from "react";
import Meeting from "./Meeting";

const ServicesHome: React.FC = () => {
    const [pageSwitch, setPageSwitch] = useState(0)
  const hallData = ["Training Romm", "Conference Room", "Conference Room Plus"];
  return (
    <div>
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